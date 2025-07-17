# Проверка восстановленных конфигураций
Write-Host "=================================================" -ForegroundColor Green
Write-Host "Проверка восстановленных конфигураций" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

Write-Host ""
Write-Host "===== next.config.js =====" -ForegroundColor Yellow
Write-Host ""

# Проверка существования файла
if (Test-Path "next.config.js") {
    # Проверка экспериментальных настроек
    if (Select-String -Path "next.config.js" -Pattern "experimental" -Quiet) {
        Write-Host "✓ Экспериментальные настройки найдены" -ForegroundColor Green
    } else {
        Write-Host "✗ Экспериментальные настройки не найдены" -ForegroundColor Red
    }

    # Проверка async headers
    if (Select-String -Path "next.config.js" -Pattern "async headers" -Quiet) {
        Write-Host "✓ Async headers найдены" -ForegroundColor Green
    } else {
        Write-Host "✗ Async headers не найдены" -ForegroundColor Red
    }

    # Проверка rewrites
    if (Select-String -Path "next.config.js" -Pattern "rewrites" -Quiet) {
        Write-Host "✓ Rewrites найдены" -ForegroundColor Green
    } else {
        Write-Host "✗ Rewrites не найдены" -ForegroundColor Red
    }
} else {
    Write-Host "✗ next.config.js не найден" -ForegroundColor Red
}

Write-Host ""
Write-Host "===== vercel.json =====" -ForegroundColor Yellow
Write-Host ""

# Проверка существования файла
if (Test-Path "vercel.json") {
    # Проверка builds секции
    if (Select-String -Path "vercel.json" -Pattern "builds" -Quiet) {
        Write-Host "✓ Builds секция найдена" -ForegroundColor Green
    } else {
        Write-Host "✗ Builds секция не найдена" -ForegroundColor Red
    }

    # Проверка functions секции
    if (Select-String -Path "vercel.json" -Pattern "functions" -Quiet) {
        Write-Host "✓ Functions секция найдена" -ForegroundColor Green
    } else {
        Write-Host "✗ Functions секция не найдена" -ForegroundColor Red
    }

    # Проверка routes секции
    if (Select-String -Path "vercel.json" -Pattern "routes" -Quiet) {
        Write-Host "✓ Routes секция найдена" -ForegroundColor Green
    } else {
        Write-Host "✗ Routes секция не найдена" -ForegroundColor Red
    }

    # Проверка headers секции
    if (Select-String -Path "vercel.json" -Pattern "headers" -Quiet) {
        Write-Host "✓ Headers секция найдена" -ForegroundColor Green
    } else {
        Write-Host "✗ Headers секция не найдена" -ForegroundColor Red
    }
} else {
    Write-Host "✗ vercel.json не найден" -ForegroundColor Red
}

Write-Host ""
Write-Host "===== Содержимое файлов =====" -ForegroundColor Yellow
Write-Host ""

if (Test-Path "next.config.js") {
    Write-Host "next.config.js:" -ForegroundColor Cyan
    Write-Host "-----------------------------------------" -ForegroundColor Gray
    Get-Content "next.config.js"
    Write-Host ""
    Write-Host "-----------------------------------------" -ForegroundColor Gray
} else {
    Write-Host "next.config.js не найден" -ForegroundColor Red
}

Write-Host ""

if (Test-Path "vercel.json") {
    Write-Host "vercel.json:" -ForegroundColor Cyan
    Write-Host "-----------------------------------------" -ForegroundColor Gray
    Get-Content "vercel.json"
    Write-Host ""
    Write-Host "-----------------------------------------" -ForegroundColor Gray
} else {
    Write-Host "vercel.json не найден" -ForegroundColor Red
}

Write-Host ""
Write-Host "===== Тест валидности JSON =====" -ForegroundColor Yellow
Write-Host ""

if (Test-Path "vercel.json") {
    try {
        $json = Get-Content "vercel.json" -Raw | ConvertFrom-Json
        Write-Host "✓ vercel.json валиден" -ForegroundColor Green
    } catch {
        Write-Host "✗ vercel.json невалиден: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "vercel.json не найден для проверки" -ForegroundColor Red
}

Write-Host ""
Write-Host "===== Проверка завершена =====" -ForegroundColor Green
Write-Host ""
