# Простая проверка статуса конфигураций
Write-Host "Статус конфигураций:" -ForegroundColor Cyan

# Проверка файлов
$nextExists = Test-Path "next.config.js"
$vercelExists = Test-Path "vercel.json"

Write-Host "next.config.js: " -NoNewline
if ($nextExists) { Write-Host "✓ Найден" -ForegroundColor Green } else { Write-Host "✗ Не найден" -ForegroundColor Red }

Write-Host "vercel.json: " -NoNewline
if ($vercelExists) { Write-Host "✓ Найден" -ForegroundColor Green } else { Write-Host "✗ Не найден" -ForegroundColor Red }

# Проверка ключевых секций если файлы существуют
if ($nextExists -and $vercelExists) {
    Write-Host ""
    Write-Host "Ключевые секции:" -ForegroundColor Cyan
    
    # next.config.js секции
    $hasExperimental = Select-String -Path "next.config.js" -Pattern "experimental" -Quiet
    $hasHeaders = Select-String -Path "next.config.js" -Pattern "async headers" -Quiet
    $hasRewrites = Select-String -Path "next.config.js" -Pattern "rewrites" -Quiet
    
    # vercel.json секции
    $hasBuilds = Select-String -Path "vercel.json" -Pattern "builds" -Quiet
    $hasFunctions = Select-String -Path "vercel.json" -Pattern "functions" -Quiet
    $hasRoutes = Select-String -Path "vercel.json" -Pattern "routes" -Quiet
    
    Write-Host "experimental: " -NoNewline
    if ($hasExperimental) { Write-Host "✓" -ForegroundColor Green } else { Write-Host "✗" -ForegroundColor Red }
    
    Write-Host "headers: " -NoNewline
    if ($hasHeaders) { Write-Host "✓" -ForegroundColor Green } else { Write-Host "✗" -ForegroundColor Red }
    
    Write-Host "rewrites: " -NoNewline
    if ($hasRewrites) { Write-Host "✓" -ForegroundColor Green } else { Write-Host "✗" -ForegroundColor Red }
    
    Write-Host "builds: " -NoNewline
    if ($hasBuilds) { Write-Host "✓" -ForegroundColor Green } else { Write-Host "✗" -ForegroundColor Red }
    
    Write-Host "functions: " -NoNewline
    if ($hasFunctions) { Write-Host "✓" -ForegroundColor Green } else { Write-Host "✗" -ForegroundColor Red }
    
    Write-Host "routes: " -NoNewline
    if ($hasRoutes) { Write-Host "✓" -ForegroundColor Green } else { Write-Host "✗" -ForegroundColor Red }
    
    # Проверка JSON
    Write-Host ""
    Write-Host "JSON валидность: " -NoNewline
    try {
        $json = Get-Content "vercel.json" -Raw | ConvertFrom-Json | Out-Null
        Write-Host "✓" -ForegroundColor Green
    } catch {
        Write-Host "✗" -ForegroundColor Red
    }
    
    # Общий статус
    Write-Host ""
    $allGood = $hasExperimental -and $hasHeaders -and $hasRewrites -and $hasBuilds -and $hasFunctions -and $hasRoutes
    Write-Host "Общий статус: " -NoNewline
    if ($allGood) {
        Write-Host "✓ Полные конфигурации восстановлены" -ForegroundColor Green
    } else {
        Write-Host "⚠ Неполные конфигурации" -ForegroundColor Yellow
    }
}
