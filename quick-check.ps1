# Быстрая проверка конфигураций
Write-Host "Быстрая проверка конфигураций Vercel..." -ForegroundColor Green
Write-Host ""

# Проверка существования файлов
Write-Host "Файлы конфигурации:" -ForegroundColor Yellow
if (Test-Path "next.config.js") {
    Write-Host "✓ next.config.js" -ForegroundColor Green
} else {
    Write-Host "✗ next.config.js" -ForegroundColor Red
}

if (Test-Path "vercel.json") {
    Write-Host "✓ vercel.json" -ForegroundColor Green
} else {
    Write-Host "✗ vercel.json" -ForegroundColor Red
}

# Проверка ключевых секций
Write-Host ""
Write-Host "Ключевые секции:" -ForegroundColor Yellow

# next.config.js
if (Test-Path "next.config.js") {
    if (Select-String -Path "next.config.js" -Pattern "experimental" -Quiet) {
        Write-Host "✓ experimental настройки" -ForegroundColor Green
    } else {
        Write-Host "✗ experimental настройки" -ForegroundColor Red
    }

    if (Select-String -Path "next.config.js" -Pattern "async headers" -Quiet) {
        Write-Host "✓ async headers" -ForegroundColor Green
    } else {
        Write-Host "✗ async headers" -ForegroundColor Red
    }
}

# vercel.json
if (Test-Path "vercel.json") {
    if (Select-String -Path "vercel.json" -Pattern "builds" -Quiet) {
        Write-Host "✓ builds секция" -ForegroundColor Green
    } else {
        Write-Host "✗ builds секция" -ForegroundColor Red
    }

    if (Select-String -Path "vercel.json" -Pattern "functions" -Quiet) {
        Write-Host "✓ functions секция" -ForegroundColor Green
    } else {
        Write-Host "✗ functions секция" -ForegroundColor Red
    }
}

# Проверка JSON
Write-Host ""
Write-Host "Валидность JSON:" -ForegroundColor Yellow
if (Test-Path "vercel.json") {
    try {
        $json = Get-Content "vercel.json" -Raw | ConvertFrom-Json
        Write-Host "✓ vercel.json валиден" -ForegroundColor Green
    } catch {
        Write-Host "✗ vercel.json невалиден: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Проверка завершена!" -ForegroundColor Green
