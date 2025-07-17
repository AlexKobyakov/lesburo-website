# Откат к упрощенным конфигурациям (PowerShell версия)
Write-Host "=================================================" -ForegroundColor Green
Write-Host "Откат к упрощенным конфигурациям" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

Write-Host ""
Write-Host "Создание упрощенной конфигурации next.config.js..." -ForegroundColor Yellow

$nextConfigContent = @'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  trailingSlash: false,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
}

module.exports = nextConfig
'@

Set-Content -Path "next.config.js" -Value $nextConfigContent -Encoding UTF8

Write-Host ""
Write-Host "Создание упрощенной конфигурации vercel.json..." -ForegroundColor Yellow

$vercelJsonContent = @'
{
  "version": 2,
  "framework": "nextjs"
}
'@

Set-Content -Path "vercel.json" -Value $vercelJsonContent -Encoding UTF8

Write-Host ""
Write-Host "Проверка созданных файлов..." -ForegroundColor Yellow

Write-Host ""
Write-Host "next.config.js:" -ForegroundColor Cyan
Write-Host "-----------------------------------------" -ForegroundColor Gray
Get-Content "next.config.js"
Write-Host ""
Write-Host "-----------------------------------------" -ForegroundColor Gray

Write-Host ""
Write-Host "vercel.json:" -ForegroundColor Cyan
Write-Host "-----------------------------------------" -ForegroundColor Gray
Get-Content "vercel.json"
Write-Host ""
Write-Host "-----------------------------------------" -ForegroundColor Gray

Write-Host ""
Write-Host "Проверка валидности JSON..." -ForegroundColor Yellow

try {
    $json = Get-Content "vercel.json" -Raw | ConvertFrom-Json
    Write-Host "✓ vercel.json валиден" -ForegroundColor Green
} catch {
    Write-Host "✗ vercel.json невалиден: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "Очистка кэша..." -ForegroundColor Yellow

if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force }

Write-Host ""
Write-Host "Тест сборки..." -ForegroundColor Yellow

$buildResult = Start-Process "npm" -ArgumentList "run", "build" -Wait -PassThru -NoNewWindow
if ($buildResult.ExitCode -ne 0) {
    Write-Host "✗ Ошибка сборки с упрощенными конфигурациями" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""
Write-Host "=================================================" -ForegroundColor Green
Write-Host "Откат к упрощенным конфигурациям завершен!" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Упрощенные конфигурации созданы:" -ForegroundColor Cyan
Write-Host "✓ next.config.js - базовая конфигурация" -ForegroundColor Green
Write-Host "✓ vercel.json - минимальная конфигурация" -ForegroundColor Green
Write-Host ""
Write-Host "Для применения изменений запустите:" -ForegroundColor Yellow
Write-Host "git add ." -ForegroundColor White
Write-Host "git commit -m 'Rollback to simplified configurations'" -ForegroundColor White
Write-Host "git push origin deploy" -ForegroundColor White
Write-Host ""
Read-Host "Нажмите Enter для завершения"
