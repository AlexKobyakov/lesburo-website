@echo off
echo =================================================
echo Проверка восстановленных конфигураций
echo =================================================

echo ===== next.config.js =====
echo.
echo Проверка экспериментальных настроек:
findstr /c:"experimental" next.config.js
if %errorlevel% neq 0 (
    echo ✗ Экспериментальные настройки не найдены
) else (
    echo ✓ Экспериментальные настройки найдены
)

echo.
echo Проверка async headers:
findstr /c:"async headers" next.config.js
if %errorlevel% neq 0 (
    echo ✗ Async headers не найдены
) else (
    echo ✓ Async headers найдены
)

echo.
echo Проверка rewrites:
findstr /c:"rewrites" next.config.js
if %errorlevel% neq 0 (
    echo ✗ Rewrites не найдены
) else (
    echo ✓ Rewrites найдены
)

echo.
echo ===== vercel.json =====
echo.
echo Проверка builds секции:
findstr /c:"builds" vercel.json
if %errorlevel% neq 0 (
    echo ✗ Builds секция не найдена
) else (
    echo ✓ Builds секция найдена
)

echo.
echo Проверка functions секции:
findstr /c:"functions" vercel.json
if %errorlevel% neq 0 (
    echo ✗ Functions секция не найдена
) else (
    echo ✓ Functions секция найдена
)

echo.
echo Проверка routes секции:
findstr /c:"routes" vercel.json
if %errorlevel% neq 0 (
    echo ✗ Routes секция не найдена
) else (
    echo ✓ Routes секция найдена
)

echo.
echo Проверка headers секции:
findstr /c:"headers" vercel.json
if %errorlevel% neq 0 (
    echo ✗ Headers секция не найдена
) else (
    echo ✓ Headers секция найдена
)

echo.
echo ===== Содержимое файлов =====
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
echo ===== Тест валидности JSON =====
echo.
echo Проверка vercel.json на валидность JSON...
node -e "try { JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')); console.log('✓ vercel.json валиден'); } catch(e) { console.log('✗ vercel.json невалиден:', e.message); }"

echo.
echo ===== Проверка завершена =====
echo.
pause
