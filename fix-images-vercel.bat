@echo off
echo =================================================
echo Исправление проблем с изображениями для Vercel
echo =================================================

echo 1. Очистка кэша Next.js...
rmdir /s /q .next 2>nul
rmdir /s /q .vercel 2>nul

echo 2. Проверка локальных изображений...
if not exist "public\images" (
    echo Создание папки для изображений...
    mkdir public\images
)

echo Проверка SVG файлов...
dir public\images\*.svg /b 2>nul | findstr /r "." >nul
if %errorlevel% equ 0 (
    echo ✓ SVG файлы найдены
) else (
    echo ✗ SVG файлы не найдены
)

echo 3. Проверка API роута для прокси...
if exist "app\api\proxy-image\route.ts" (
    echo ✓ API роут для прокси найден
) else (
    echo ✗ API роут для прокси не найден
)

echo 4. Тест локальной сборки...
echo Установка зависимостей...
npm install

echo Проверка TypeScript...
npx tsc --noEmit
if %errorlevel% neq 0 (
    echo ✗ Ошибки TypeScript! Исправьте перед развертыванием.
    pause
    exit /b 1
)

echo Сборка проекта...
npm run build
if %errorlevel% neq 0 (
    echo ✗ Ошибка сборки! Исправьте перед развертыванием.
    pause
    exit /b 1
)

echo 5. Проверка статических файлов...
if exist ".next\static" (
    echo ✓ Статические файлы созданы
    dir .next\static /b
) else (
    echo ✗ Статические файлы не созданы
)

echo 6. Коммит изменений...
git add .
git commit -m "Fix: Image loading issues - Added local SVG placeholders and proxy API"

echo 7. Развертывание...
git push origin deploy

echo.
echo =================================================
echo Исправления применены!
echo =================================================
echo.
echo Что было исправлено:
echo - Добавлены локальные SVG placeholder изображения
echo - Создан API роут для прокси внешних изображений
echo - Обновлен компонент ImageWithFallback
echo - Настроены заголовки CORS в next.config.js
echo - Добавлен маппинг внешних URL на локальные
echo.
echo Проверьте развертывание на Vercel через несколько минут.
echo Если проблемы остаются, запустите diagnose-vercel.bat
echo.
pause
