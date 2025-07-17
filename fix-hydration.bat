@echo off
echo 🔧 ИСПРАВЛЕНИЕ HYDRATION ERROR
echo ==============================

echo.
echo 📋 Шаг 1: Восстановление оригинальных файлов
echo -------------------------------------------
if exist "app\layout-original.tsx" (
    copy /Y "app\layout-original.tsx" "app\layout.tsx" >nul 2>&1
    del "app\layout-original.tsx" >nul 2>&1
    echo ✅ Layout восстановлен
) else (
    echo ⚠️  Оригинальный layout не найден (возможно уже восстановлен)
)

if exist "app\page-original.tsx" (
    copy /Y "app\page-original.tsx" "app\page.tsx" >nul 2>&1
    del "app\page-original.tsx" >nul 2>&1
    echo ✅ Page восстановлен
) else (
    echo ⚠️  Оригинальный page не найден (возможно уже восстановлен)
)

echo.
echo 📋 Шаг 2: Удаление диагностических файлов
echo ----------------------------------------
del "app\layout-debug.tsx" >nul 2>&1
del "app\diagnostic-page.tsx" >nul 2>&1
del "app\fallback.css" >nul 2>&1
echo ✅ Диагностические файлы удалены

echo.
echo 📋 Шаг 3: Очистка кэша
echo ----------------------
rmdir /s /q .next >nul 2>&1
rmdir /s /q node_modules\.cache >nul 2>&1
echo ✅ Кэш очищен

echo.
echo 📋 Шаг 4: Сборка проекта
echo -----------------------
echo Запускаем сборку...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Ошибка сборки
    echo Проверьте вывод выше на наличие ошибок
    pause
    exit /b 1
)
echo ✅ Сборка успешна

echo.
echo 📋 Шаг 5: Запуск production сервера
echo ----------------------------------
echo Запускаем production сервер...
echo.
echo 🌐 Откроется http://localhost:3000
echo 🔍 Проверьте что:
echo    - Стили применяются корректно
echo    - Нет ошибок в Console (F12)
echo    - Нет ошибок hydration
echo.
echo 💡 Для остановки сервера нажмите Ctrl+C
echo.

start "" "http://localhost:3000"
call npm run start

echo.
echo 🎯 Исправления применены!
echo Если проблема решена, можно коммитить изменения:
echo.
echo git add .
echo git commit -m "Fix hydration error in Header and ImageWithFallback components"
echo git push origin main
echo.
pause
