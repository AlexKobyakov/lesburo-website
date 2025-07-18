@echo off
echo ==============================================
echo CORS FIX FOR UNSPLASH IMAGES - TEST AND DEPLOY
echo ==============================================

echo 1. Установка зависимостей...
call npm install

echo.
echo 2. Проверка типов TypeScript...
call npm run type-check
if %errorlevel% neq 0 (
    echo ОШИБКА: Ошибки типов TypeScript!
    pause
    exit /b 1
)

echo.
echo 3. Сборка проекта...
call npm run build
if %errorlevel% neq 0 (
    echo ОШИБКА: Ошибка сборки!
    pause
    exit /b 1
)

echo.
echo 4. Тестирование локально (5 секунд)...
start /B npm run dev
timeout /t 5 /nobreak > nul
taskkill /f /im node.exe 2>nul

echo.
echo 5. Очистка build cache...
call npm run clean

echo.
echo =============================================
echo ✅ CORS FIX ПРИМЕНЕН УСПЕШНО!
echo.
echo Изменения:
echo - Добавлен API route для проксирования изображений
echo - Обновлен ImageWithFallback компонент
echo - Заменены Unsplash изображения на локальные SVG
echo - Обновлена конфигурация Next.js
echo.
echo Следующие шаги:
echo 1. Запустите: npm run dev (для локального тестирования)
echo 2. Проверьте работу всех изображений
echo 3. Если все ОК, выполните git commit и push
echo =============================================
pause
