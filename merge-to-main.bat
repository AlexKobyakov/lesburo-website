@echo off
echo 🔄 СЛИЯНИЕ В ГЛАВНУЮ ВЕТКУ
echo ==========================

echo.
echo 📋 Шаг 1: Проверка текущей ветки
echo --------------------------------
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
echo 🌿 Текущая ветка: %CURRENT_BRANCH%

if "%CURRENT_BRANCH%"=="main" (
    echo ⚠️  Вы уже находитесь в ветке main
    echo Нечего сливать
    pause
    exit /b 0
)

echo.
echo 📋 Шаг 2: Подтверждение слияния
echo -------------------------------
echo ❓ Вы уверены, что хотите слить ветку "%CURRENT_BRANCH%" в main?
echo    - Убедитесь что деплой на Vercel прошел успешно
echo    - Проверьте что сайт работает корректно
echo    - Убедитесь что нет критических ошибок
echo.
set /p CONFIRM="Продолжить? (y/N): "
if /i not "%CONFIRM%"=="y" (
    echo ❌ Слияние отменено
    pause
    exit /b 0
)

echo.
echo 📋 Шаг 3: Переключение на main
echo ------------------------------
git checkout main
if %errorlevel% neq 0 (
    echo ❌ Ошибка при переключении на main
    pause
    exit /b 1
)
echo ✅ Переключились на main

echo.
echo 📋 Шаг 4: Обновление main
echo -------------------------
git pull origin main
if %errorlevel% neq 0 (
    echo ❌ Ошибка при обновлении main
    pause
    exit /b 1
)
echo ✅ Main обновлен

echo.
echo 📋 Шаг 5: Слияние ветки
echo -----------------------
git merge %CURRENT_BRANCH%
if %errorlevel% neq 0 (
    echo ❌ Ошибка при слиянии
    echo Возможно есть конфликты. Решите их вручную
    pause
    exit /b 1
)
echo ✅ Ветка %CURRENT_BRANCH% слита в main

echo.
echo 📋 Шаг 6: Пуш main на GitHub
echo ----------------------------
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Ошибка при пуше main
    pause
    exit /b 1
)
echo ✅ Main отправлен на GitHub

echo.
echo 📋 Шаг 7: Удаление временной ветки (опционально)
echo ------------------------------------------------
set /p DELETE_BRANCH="Удалить ветку %CURRENT_BRANCH%? (y/N): "
if /i "%DELETE_BRANCH%"=="y" (
    git branch -d %CURRENT_BRANCH%
    git push origin --delete %CURRENT_BRANCH%
    echo ✅ Ветка %CURRENT_BRANCH% удалена
) else (
    echo ⚠️  Ветка %CURRENT_BRANCH% сохранена
)

echo.
echo 🎉 СЛИЯНИЕ ЗАВЕРШЕНО!
echo =====================
echo.
echo ✅ Что было сделано:
echo    - Ветка %CURRENT_BRANCH% слита в main
echo    - Main отправлен на GitHub
echo    - Vercel автоматически запустит финальный деплой
echo.
echo 🔍 Что делать дальше:
echo    1. Перейти на https://vercel.com/dashboard
echo    2. Дождаться финального деплоя с main
echo    3. Проверить продакшен сайт
echo.
echo 📋 Финальная проверка:
echo    - Сайт работает на продакшене
echo    - Стили применяются корректно
echo    - Нет ошибок в Console
echo    - Все функции работают
echo.
echo 🎯 Поздравляем! Деплой успешно завершен!
echo.

pause
