@echo off
echo =================================================
echo Откат к упрощенным конфигурациям
echo =================================================

echo Создание упрощенной конфигурации next.config.js...
(
echo /** @type {import('next'^}.NextConfig} */
echo const nextConfig = {
echo   reactStrictMode: true,
echo   swcMinify: true,
echo   images: {
echo     domains: ['images.unsplash.com', 'via.placeholder.com'^],
echo     remotePatterns: [
echo       {
echo         protocol: 'https',
echo         hostname: 'images.unsplash.com',
echo         port: '',
echo         pathname: '/**',
echo       },
echo       {
echo         protocol: 'https',
echo         hostname: 'via.placeholder.com',
echo         port: '',
echo         pathname: '/**',
echo       },
echo     ^],
echo   },
echo   compiler: {
echo     removeConsole: process.env.NODE_ENV === 'production',
echo   },
echo   trailingSlash: false,
echo   poweredByHeader: false,
echo   generateEtags: false,
echo   compress: true,
echo }
echo.
echo module.exports = nextConfig
) > next.config.js

echo Создание упрощенной конфигурации vercel.json...
(
echo {
echo   "version": 2,
echo   "framework": "nextjs"
echo }
) > vercel.json

echo Проверка созданных файлов...
echo.
echo next.config.js:
echo -----------------------------------------
type next.config.js
echo.
echo -----------------------------------------
echo.
echo vercel.json:
echo -----------------------------------------
type vercel.json
echo.
echo -----------------------------------------

echo.
echo Проверка валидности JSON...
node -e "try { JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')); console.log('✓ vercel.json валиден'); } catch(e) { console.log('✗ vercel.json невалиден:', e.message); }"

echo.
echo Очистка кэша...
rmdir /s /q .next 2>nul

echo.
echo Тест сборки...
npm run build
if %errorlevel% neq 0 (
    echo ✗ Ошибка сборки с упрощенными конфигурациями
    pause
    exit /b 1
)

echo.
echo =================================================
echo Откат к упрощенным конфигурациям завершен!
echo =================================================
echo.
echo Упрощенные конфигурации созданы:
echo ✓ next.config.js - базовая конфигурация
echo ✓ vercel.json - минимальная конфигурация
echo.
echo Для применения изменений запустите:
echo git add .
echo git commit -m "Rollback to simplified configurations"
echo git push origin deploy
echo.
pause
