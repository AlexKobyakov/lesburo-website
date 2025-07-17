@echo off
echo 🔧 ТЕСТИРОВАНИЕ ИСПРАВЛЕНИЙ HYDRATION ERROR
echo =============================================

echo.
echo 📋 Остановка текущих процессов...
taskkill /f /im node.exe >nul 2>&1

echo.
echo 📋 Очистка кэша...
rmdir /s /q .next >nul 2>&1

echo.
echo 📋 Запуск dev сервера...
echo 🌐 Откроется http://localhost:3000
echo 🔍 Проверьте:
echo    - Работают ли стили?
echo    - Есть ли ошибка hydration в левом нижнем углу?
echo    - Есть ли ошибки в Console (F12)?
echo.
echo 💡 Для остановки нажмите Ctrl+C
echo.

start "" "http://localhost:3000"
npm run dev
