@echo off
echo Тест локальных изображений...

echo Запуск dev сервера...
start /b npm run dev

echo Ожидание запуска сервера...
timeout /t 10 /nobreak >nul

echo Проверка доступности изображений...
curl -s -o nul -w "%%{http_code}" http://localhost:3000/images/forest-landscape.svg
if %errorlevel% equ 0 (
    echo ✓ Основное изображение доступно
) else (
    echo ✗ Основное изображение недоступно
)

curl -s -o nul -w "%%{http_code}" http://localhost:3000/images/team-forest.svg
if %errorlevel% equ 0 (
    echo ✓ Изображение команды доступно
) else (
    echo ✗ Изображение команды недоступно
)

echo Проверка API прокси...
curl -s -o nul -w "%%{http_code}" "http://localhost:3000/api/proxy-image?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
if %errorlevel% equ 0 (
    echo ✓ API прокси работает
) else (
    echo ✗ API прокси не работает
)

echo Остановка dev сервера...
taskkill /f /im node.exe >nul 2>&1

echo Тест завершен.
pause
