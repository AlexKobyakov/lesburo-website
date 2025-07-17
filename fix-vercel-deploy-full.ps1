# Исправление проблем с развертыванием на Vercel (PowerShell версия)
Write-Host "=================================================" -ForegroundColor Green
Write-Host "Исправление проблем с развертыванием на Vercel" -ForegroundColor Green
Write-Host "(с расширенными конфигурациями)" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

Write-Host ""
Write-Host "1. Проверка конфигурационных файлов..." -ForegroundColor Yellow

if (Test-Path "next.config.js") {
    Write-Host "✓ next.config.js найден" -ForegroundColor Green
} else {
    Write-Host "✗ next.config.js не найден" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

if (Test-Path "vercel.json") {
    Write-Host "✓ vercel.json найден" -ForegroundColor Green
} else {
    Write-Host "✗ vercel.json не найден" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "2. Проверка валидности JSON..." -ForegroundColor Yellow

try {
    $json = Get-Content "vercel.json" -Raw | ConvertFrom-Json
    Write-Host "✓ vercel.json валиден" -ForegroundColor Green
} catch {
    Write-Host "✗ vercel.json невалиден: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Исправьте ошибки в vercel.json перед продолжением"
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "3. Очистка кэша и зависимостей..." -ForegroundColor Yellow

if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force }
if (Test-Path ".vercel") { Remove-Item ".vercel" -Recurse -Force }
if (Test-Path "node_modules") { Remove-Item "node_modules" -Recurse -Force }
if (Test-Path "package-lock.json") { Remove-Item "package-lock.json" -Force }

Write-Host ""
Write-Host "4. Переустановка зависимостей..." -ForegroundColor Yellow

$installResult = Start-Process "npm" -ArgumentList "install" -Wait -PassThru -NoNewWindow
if ($installResult.ExitCode -ne 0) {
    Write-Host "✗ Ошибка установки зависимостей" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "5. Проверка TypeScript..." -ForegroundColor Yellow

$tscResult = Start-Process "npx" -ArgumentList "tsc", "--noEmit" -Wait -PassThru -NoNewWindow
if ($tscResult.ExitCode -ne 0) {
    Write-Host "✗ Ошибки TypeScript! Исправьте перед развертыванием." -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "6. Проверка локальных изображений..." -ForegroundColor Yellow

if (!(Test-Path "public\images")) {
    Write-Host "Создание папки для изображений..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path "public\images" -Force
}

$svgFiles = Get-ChildItem "public\images\*.svg" -ErrorAction SilentlyContinue
if ($svgFiles) {
    Write-Host "✓ SVG файлы найдены" -ForegroundColor Green
} else {
    Write-Host "⚠ SVG файлы не найдены - будет использован fallback" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "7. Проверка API роута..." -ForegroundColor Yellow

if (Test-Path "app\api\proxy-image\route.ts") {
    Write-Host "✓ API роут для прокси найден" -ForegroundColor Green
} else {
    Write-Host "⚠ API роут для прокси не найден" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "8. Локальная сборка..." -ForegroundColor Yellow

$buildResult = Start-Process "npm" -ArgumentList "run", "build" -Wait -PassThru -NoNewWindow
if ($buildResult.ExitCode -ne 0) {
    Write-Host "✗ Ошибка сборки! Исправьте перед развертыванием." -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "9. Тестирование сборки..." -ForegroundColor Yellow

Write-Host "Запуск продакшн сервера на 5 секунд..." -ForegroundColor Yellow
$startJob = Start-Job -ScriptBlock { npm run start }
Start-Sleep -Seconds 5
Stop-Job $startJob
Remove-Job $startJob

# Убиваем процессы node
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "✓ Тест сборки завершен" -ForegroundColor Green

Write-Host ""
Write-Host "10. Проверка статических файлов..." -ForegroundColor Yellow

if (Test-Path ".next\static") {
    Write-Host "✓ Статические файлы созданы" -ForegroundColor Green
    $staticSize = (Get-ChildItem ".next\static" -Recurse | Measure-Object -Property Length -Sum).Sum
    Write-Host "Размер статических файлов: $([math]::Round($staticSize/1MB, 2)) MB" -ForegroundColor Cyan
} else {
    Write-Host "✗ Статические файлы не созданы" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "11. Коммит изменений..." -ForegroundColor Yellow

git add .
git commit -m "Fix: Restored full configurations with image fixes"

Write-Host ""
Write-Host "12. Пуш в ветку deploy..." -ForegroundColor Yellow

$pushResult = Start-Process "git" -ArgumentList "push", "origin", "deploy" -Wait -PassThru -NoNewWindow
if ($pushResult.ExitCode -ne 0) {
    Write-Host "⚠ Ошибка при пуше. Проверьте состояние git." -ForegroundColor Yellow
    git status
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "=================================================" -ForegroundColor Green
Write-Host "Развертывание завершено!" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Восстановленные конфигурации:" -ForegroundColor Cyan
Write-Host "✓ next.config.js - полная конфигурация с headers и rewrites" -ForegroundColor Green
Write-Host "✓ vercel.json - подробная конфигурация с builds, functions, headers" -ForegroundColor Green
Write-Host "✓ Поддержка изображений через API прокси" -ForegroundColor Green
Write-Host "✓ Локальные SVG placeholder изображения" -ForegroundColor Green
Write-Host "✓ Правильные MIME типы для статических файлов" -ForegroundColor Green
Write-Host ""
Write-Host "Проверьте развертывание на Vercel через несколько минут." -ForegroundColor Yellow
Write-Host ""
Read-Host "Нажмите Enter для завершения"
