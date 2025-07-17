@echo off
echo 🚀 АВТОМАТИЧЕСКИЙ ДЕПЛОЙ САЙТА ЛЕСБЮРО
echo =====================================

echo.
echo 📋 Шаг 1: Проверка Git статуса
echo ------------------------------
git status
if %errorlevel% neq 0 (
    echo ❌ Ошибка Git. Проверьте что вы находитесь в Git репозитории
    pause
    exit /b 1
)

echo.
echo 📋 Шаг 2: Проверка текущей ветки
echo --------------------------------
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
echo 🌿 Текущая ветка: %CURRENT_BRANCH%

echo.
echo 📋 Шаг 3: Добавление всех изменений
echo ----------------------------------
git add .
if %errorlevel% neq 0 (
    echo ❌ Ошибка при добавлении файлов
    pause
    exit /b 1
)
echo ✅ Все файлы добавлены

echo.
echo 📋 Шаг 4: Создание коммита
echo --------------------------
git commit -m "Fix hydration error and CSS issues for Vercel deployment" -m "- Remove BOM from config files" -m "- Fix hydration error in Header component" -m "- Fix hydration error in ImageWithFallback component" -m "- Add fallback CSS and emergency fixes" -m "- Update Next.js configuration"
if %errorlevel% neq 0 (
    echo ❌ Ошибка при создании коммита (возможно нет изменений)
    echo Проверьте статус git и попробуйте снова
    pause
    exit /b 1
)
echo ✅ Коммит создан

echo.
echo 📋 Шаг 5: Пуш на GitHub
echo -----------------------
echo Пушим изменения в ветку %CURRENT_BRANCH%...
git push origin %CURRENT_BRANCH%
if %errorlevel% neq 0 (
    echo ❌ Ошибка при пуше на GitHub
    echo Проверьте подключение к интернету и права доступа
    pause
    exit /b 1
)
echo ✅ Изменения отправлены на GitHub

echo.
echo 📋 Шаг 6: Получение URL репозитория
echo -----------------------------------
for /f "tokens=*" %%i in ('git remote get-url origin') do set REPO_URL=%%i
echo 🔗 Репозиторий: %REPO_URL%

echo.
echo 🎯 ДЕПЛОЙ ЗАПУЩЕН!
echo ==================
echo.
echo ✅ Что было сделано:
echo    - Все изменения закоммичены
echo    - Изменения отправлены на GitHub
echo    - Vercel автоматически начнет деплой
echo.
echo 🔍 Что делать дальше:
echo    1. Перейти на https://vercel.com/dashboard
echo    2. Найти проект "lesburo-website"
echo    3. Дождаться завершения деплоя
echo    4. Проверить сайт на работоспособность
echo.
echo 📋 Что проверить на сайте:
echo    - Стили Tailwind CSS применяются
echo    - Нет ошибок в Console (F12)
echo    - Нет ошибок hydration
echo    - Все компоненты отображаются корректно
echo.
echo 🔄 Если все работает, можно слить в main:
echo    git checkout main
echo    git merge %CURRENT_BRANCH%
echo    git push origin main
echo.
echo 📞 Если есть проблемы, проверьте:
echo    - Логи деплоя на Vercel
echo    - Console в браузере
echo    - Network tab для загрузки CSS
echo.

pause
