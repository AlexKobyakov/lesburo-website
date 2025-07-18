@echo off
echo ===========================================
echo COMMIT CORS FIX TO GIT
echo ===========================================

echo Текущая ветка:
git branch --show-current

echo.
echo Статус изменений:
git status --short

echo.
echo Добавляем все изменения в git...
git add .

echo.
echo Создаем коммит...
git commit -m "fix: Решение проблемы CORS с изображениями Unsplash

- Добавлен API route /api/proxy-image для проксирования внешних изображений
- Обновлен ImageWithFallback компонент для использования прокси
- Заменены все Unsplash изображения на локальные SVG
- Обновлена конфигурация Next.js с правильными CORS заголовками
- Создана утилита image-utils для управления изображениями
- Исправлены проблемы с загрузкой изображений на Vercel"

if %errorlevel% neq 0 (
    echo ОШИБКА при создании коммита!
    pause
    exit /b 1
)

echo.
echo ✅ Коммит создан успешно!
echo.
echo Пушим изменения в текущую ветку...
git push origin HEAD

if %errorlevel% neq 0 (
    echo ОШИБКА при push!
    pause
    exit /b 1
)

echo.
echo ✅ Изменения успешно отправлены в GitHub!
echo ✅ Vercel автоматически начнет деплой
echo.
echo Проверьте статус деплоя на https://vercel.com
pause
