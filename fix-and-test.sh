#!/bin/bash

# Скрипт для исправления проблем с Tailwind CSS при деплое на Vercel

echo "🔧 Исправление проблем с Tailwind CSS для Vercel..."

# Очистка кэша
echo "🧹 Очищаем кэш..."
npm run clean 2>/dev/null || rm -rf .next
rm -rf node_modules/.cache

# Переустановка зависимостей
echo "📦 Переустанавливаем зависимости..."
npm install

# Проверка сборки
echo "🔨 Проверяем сборку..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Сборка прошла успешно!"
    
    # Проверка запуска
    echo "🚀 Запускаем production сервер..."
    npm run start &
    SERVER_PID=$!
    
    # Ждем несколько секунд
    sleep 5
    
    # Проверяем что сервер работает
    if curl -s http://localhost:3000 > /dev/null; then
        echo "✅ Сервер запущен успешно!"
        kill $SERVER_PID
    else
        echo "❌ Проблема с запуском сервера"
        kill $SERVER_PID
        exit 1
    fi
    
    echo "🎉 Готово! Можно коммитить и деплоить на Vercel"
else
    echo "❌ Ошибка при сборке. Проверьте логи выше."
    exit 1
fi
