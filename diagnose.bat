@echo off
echo 🔍 ПОЛНАЯ ДИАГНОСТИКА CSS - САЙТ ЛЕСБЮРО
echo ==========================================

echo.
echo 📋 Шаг 1: Проверка файлов конфигурации
echo ----------------------------------------
if exist "tailwind.config.js" (
    echo ✅ tailwind.config.js найден
) else (
    echo ❌ tailwind.config.js НЕ найден
    goto :error
)

if exist "postcss.config.js" (
    echo ✅ postcss.config.js найден
) else (
    echo ❌ postcss.config.js НЕ найден
    goto :error
)

if exist "app\globals.css" (
    echo ✅ app\globals.css найден
) else (
    echo ❌ app\globals.css НЕ найден
    goto :error
)

echo.
echo 📋 Шаг 2: Замена layout.tsx на диагностическую версию
echo ---------------------------------------------------
copy /Y "app\layout.tsx" "app\layout-original.tsx" >nul 2>&1
copy /Y "app\layout-debug.tsx" "app\layout.tsx" >nul 2>&1
echo ✅ Layout заменен на диагностическую версию

echo.
echo 📋 Шаг 3: Замена page.tsx на диагностическую версию
echo --------------------------------------------------
copy /Y "app\page.tsx" "app\page-original.tsx" >nul 2>&1
copy /Y "app\diagnostic-page.tsx" "app\page.tsx" >nul 2>&1
echo ✅ Page заменен на диагностическую версию

echo.
echo 📋 Шаг 4: Очистка кэша
echo ----------------------
echo Очищаем кэш...
rmdir /s /q .next 2>nul
rmdir /s /q node_modules\.cache 2>nul
echo ✅ Кэш очищен

echo.
echo 📋 Шаг 5: Установка зависимостей
echo --------------------------------
echo Устанавливаем зависимости...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Ошибка установки зависимостей
    goto :error
)
echo ✅ Зависимости установлены

echo.
echo 📋 Шаг 6: Запуск dev сервера
echo ----------------------------
echo Запускаем dev сервер...
echo.
echo 🌐 Откроется http://localhost:3000
echo 🔍 Проверьте в браузере:
echo    - Отображаются ли цвета в тестовых блоках
echo    - Есть ли ошибки в Console (F12)
echo    - Загружаются ли CSS файлы в Network (F12)
echo.
echo 💡 Для остановки сервера нажмите Ctrl+C
echo.

start "" "http://localhost:3000"
call npm run dev

goto :end

:error
echo.
echo ❌ ОШИБКА: Диагностика не может быть завершена
echo Проверьте наличие всех файлов и попробуйте снова
pause
exit /b 1

:end
echo.
echo 🎯 Диагностика завершена
echo Восстанавливаем оригинальные файлы...
copy /Y "app\layout-original.tsx" "app\layout.tsx" >nul 2>&1
copy /Y "app\page-original.tsx" "app\page.tsx" >nul 2>&1
del "app\layout-original.tsx" >nul 2>&1
del "app\page-original.tsx" >nul 2>&1
echo ✅ Оригинальные файлы восстановлены
pause
