@echo off
echo Диагностика проблем с Next.js на Vercel...

echo ===== Проверка файлов конфигурации =====
echo.
echo next.config.js:
type next.config.js
echo.

echo vercel.json:
type vercel.json
echo.

echo package.json (scripts):
findstr /c:"scripts" package.json -A 10
echo.

echo ===== Проверка структуры проекта =====
echo.
echo Структура app/:
dir app /b
echo.

echo ===== Проверка зависимостей =====
echo.
echo Проверка Next.js версии:
npm list next
echo.

echo ===== Проверка сборки =====
echo.
echo Попытка сборки...
npm run build

echo.
echo ===== Проверка статических файлов =====
echo.
if exist ".next\static" (
    echo Папка .next\static найдена
    dir .next\static /b
) else (
    echo Папка .next\static НЕ найдена
)

echo.
echo ===== Проверка завершена =====
pause
