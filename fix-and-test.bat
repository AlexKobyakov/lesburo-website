@echo off
REM Скрипт для Windows PowerShell для исправления проблем с Tailwind CSS при деплое на Vercel

echo 🔧 Исправление проблем с Tailwind CSS для Vercel...

REM Очистка кэша
echo 🧹 Очищаем кэш...
call npm run clean 2>nul || rmdir /s /q .next 2>nul
rmdir /s /q node_modules\.cache 2>nul

REM Переустановка зависимостей
echo 📦 Переустанавливаем зависимости...
call npm install

REM Проверка сборки
echo 🔨 Проверяем сборку...
call npm run build

if %errorlevel% == 0 (
    echo ✅ Сборка прошла успешно!
    echo 🎉 Готово! Можно коммитить и деплоить на Vercel
) else (
    echo ❌ Ошибка при сборке. Проверьте логи выше.
    pause
    exit /b 1
)

pause
