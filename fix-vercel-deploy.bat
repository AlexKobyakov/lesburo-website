@echo off
echo Исправление проблем с развертыванием на Vercel...

echo 1. Очистка кэша и зависимостей...
rmdir /s /q .next 2>nul
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul

echo 2. Переустановка зависимостей...
npm install

echo 3. Проверка типов...
npx tsc --noEmit

echo 4. Локальная сборка...
npm run build

echo 5. Тестирование сборки...
npm run start &
timeout /t 5 /nobreak >nul
taskkill /f /im node.exe >nul 2>&1

echo 6. Коммит изменений...
git add .
git commit -m "Fix: Vercel deployment issues - simplified config"

echo 7. Пуш в ветку deploy...
git push origin deploy

echo Готово! Проверьте развертывание на Vercel.
pause
