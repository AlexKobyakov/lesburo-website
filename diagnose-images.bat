@echo off
echo =================================================
echo Диагностика проблем с изображениями на Vercel
echo =================================================

echo ===== Проверка конфигурации =====
echo.
echo next.config.js (проверка заголовков для изображений):
findstr /c:"headers" next.config.js -A 20 2>nul
if %errorlevel% neq 0 (
    echo ✗ Заголовки не настроены в next.config.js
) else (
    echo ✓ Заголовки настроены
)

echo.
echo vercel.json:
type vercel.json 2>nul
if %errorlevel% neq 0 (
    echo ✗ vercel.json не найден
) else (
    echo ✓ vercel.json найден
)

echo.
echo ===== Проверка изображений =====
echo.
echo Локальные SVG изображения:
dir public\images\*.svg /b 2>nul
if %errorlevel% neq 0 (
    echo ✗ SVG файлы не найдены
) else (
    echo ✓ SVG файлы найдены
)

echo.
echo Проверка размеров файлов:
for %%f in (public\images\*.svg) do (
    echo %%f - 
    dir "%%f" | findstr /c:"%%~nxf"
)

echo.
echo ===== Проверка API роута =====
echo.
if exist "app\api\proxy-image\route.ts" (
    echo ✓ API роут найден
    echo Содержимое route.ts:
    type app\api\proxy-image\route.ts | findstr /c:"export async function GET" -A 5
) else (
    echo ✗ API роут не найден
)

echo.
echo ===== Проверка компонента ImageWithFallback =====
echo.
if exist "components\figma\ImageWithFallback.tsx" (
    echo ✓ Компонент найден
    echo Проверка импорта IMAGE_MAPPING:
    findstr /c:"IMAGE_MAPPING" components\figma\ImageWithFallback.tsx
    if %errorlevel% neq 0 (
        echo ✗ IMAGE_MAPPING не импортирован
    ) else (
        echo ✓ IMAGE_MAPPING импортирован
    )
) else (
    echo ✗ Компонент не найден
)

echo.
echo ===== Проверка маппинга изображений =====
echo.
if exist "lib\images.ts" (
    echo ✓ Файл маппинга найден
    echo Проверка маппинга:
    findstr /c:"IMAGE_MAPPING" lib\images.ts -A 10
) else (
    echo ✗ Файл маппинга не найден
)

echo.
echo ===== Тест сборки =====
echo.
echo Попытка сборки проекта...
npm run build >build_output.txt 2>&1
if %errorlevel% neq 0 (
    echo ✗ Ошибка сборки!
    echo Последние строки ошибки:
    tail -20 build_output.txt 2>nul || (
        echo Просмотр файла build_output.txt для деталей
        type build_output.txt | more
    )
) else (
    echo ✓ Сборка успешна
)

echo.
echo ===== Проверка внешних URL =====
echo.
echo Поиск внешних URL в компонентах:
findstr /s /c:"https://images.unsplash.com" components\*.tsx 2>nul
if %errorlevel% neq 0 (
    echo ✓ Внешние URL не найдены в компонентах
) else (
    echo ⚠ Найдены внешние URL - проверьте маппинг
)

echo.
echo ===== Рекомендации =====
echo.
if not exist "public\images\forest-landscape.svg" (
    echo ✗ Отсутствует основное изображение hero
)
if not exist "app\api\proxy-image\route.ts" (
    echo ✗ Отсутствует API роут для прокси
)
if not exist "lib\images.ts" (
    echo ✗ Отсутствует файл маппинга изображений
)

echo.
echo =================================================
echo Диагностика завершена
echo =================================================
echo.
echo Для исправления проблем запустите:
echo fix-images-vercel.bat
echo.
pause
