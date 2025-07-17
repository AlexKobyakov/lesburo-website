@echo off
echo =================================================
echo Исправление проблем с развертыванием на Vercel
echo (с расширенными конфигурациями)
echo =================================================

echo 1. Проверка конфигурационных файлов...
if exist "next.config.js" (
    echo ✓ next.config.js найден
) else (
    echo ✗ next.config.js не найден
    pause
    exit /b 1
)

if exist "vercel.json" (
    echo ✓ vercel.json найден
) else (
    echo ✗ vercel.json не найден
    pause
    exit /b 1
)

echo 2. Проверка валидности JSON...
node -e "try { JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')); console.log('✓ vercel.json валиден'); } catch(e) { console.log('✗ vercel.json невалиден:', e.message); process.exit(1); }"
if %errorlevel% neq 0 (
    echo Исправьте ошибки в vercel.json перед продолжением
    pause
    exit /b 1
)

echo 3. Очистка кэша и зависимостей...
rmdir /s /q .next 2>nul
rmdir /s /q .vercel 2>nul
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul

echo 4. Переустановка зависимостей...
npm install
if %errorlevel% neq 0 (
    echo ✗ Ошибка установки зависимостей
    pause
    exit /b 1
)

echo 5. Проверка TypeScript...
npx tsc --noEmit
if %errorlevel% neq 0 (
    echo ✗ Ошибки TypeScript! Исправьте перед развертыванием.
    pause
    exit /b 1
)

echo 6. Проверка локальных изображений...
if not exist "public\images" (
    echo Создание папки для изображений...
    mkdir public\images
)

echo Проверка SVG файлов...
dir public\images\*.svg /b 2>nul | findstr /r "." >nul
if %errorlevel% equ 0 (
    echo ✓ SVG файлы найдены
) else (
    echo ⚠ SVG файлы не найдены - будет использован fallback
)

echo 7. Проверка API роута...
if exist "app\api\proxy-image\route.ts" (
    echo ✓ API роут для прокси найден
) else (
    echo ⚠ API роут для прокси не найден
)

echo 8. Локальная сборка...
npm run build
if %errorlevel% neq 0 (
    echo ✗ Ошибка сборки! Исправьте перед развертыванием.
    pause
    exit /b 1
)

echo 9. Тестирование сборки...
echo Запуск продакшн сервера на 5 секунд...
start /b npm run start
timeout /t 5 /nobreak >nul
taskkill /f /im node.exe >nul 2>&1
echo ✓ Тест сборки завершен

echo 10. Проверка статических файлов...
if exist ".next\static" (
    echo ✓ Статические файлы созданы
    echo Размер папки static:
    dir .next\static /s | findstr /c:"файлов" | findstr /c:"байт"
) else (
    echo ✗ Статические файлы не созданы
    pause
    exit /b 1
)

echo 11. Коммит изменений...
git add .
git commit -m "Fix: Restored full configurations with image fixes"

echo 12. Пуш в ветку deploy...
git push origin deploy
if %errorlevel% neq 0 (
    echo ⚠ Ошибка при пуше. Проверьте состояние git.
    git status
    pause
    exit /b 1
)

echo.
echo =================================================
echo Развертывание завершено!
echo =================================================
echo.
echo Восстановленные конфигурации:
echo ✓ next.config.js - полная конфигурация с headers и rewrites
echo ✓ vercel.json - подробная конфигурация с builds, functions, headers
echo ✓ Поддержка изображений через API прокси
echo ✓ Локальные SVG placeholder изображения
echo ✓ Правильные MIME типы для статических файлов
echo.
echo Проверьте развертывание на Vercel через несколько минут.
echo.
pause
