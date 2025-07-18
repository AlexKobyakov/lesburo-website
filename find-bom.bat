@echo off
echo 🔍 ПОИСК BOM СИМВОЛОВ В ФАЙЛАХ
echo ===============================

echo.
echo Поиск файлов с BOM символами в components/ui...
echo.

for /r components\ui %%f in (*.tsx *.ts *.jsx *.js) do (
    powershell -Command "if ((Get-Content '%%f' -Raw -Encoding UTF8).StartsWith([char]0xFEFF)) { Write-Host '❌ BOM найден: %%f' -ForegroundColor Red } else { Write-Host '✅ OK: %%f' -ForegroundColor Green }"
)

echo.
echo Поиск завершен
pause
