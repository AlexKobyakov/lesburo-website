@echo off
echo Исправление импортов utils в UI компонентах...

REM Переходим в папку components/ui и исправляем все файлы
for /r "components\ui" %%f in (*.tsx) do (
    powershell -Command "(Get-Content '%%f') -replace 'import { cn } from \"./utils\";', 'import { cn } from \"../../lib/utils\";' | Set-Content '%%f'"
)

echo Импорты исправлены!

echo Удаление старого файла utils.ts из папки ui...
if exist "components\ui\utils.ts" del "components\ui\utils.ts"

echo Готово! Проект подготовлен для деплоя.
pause