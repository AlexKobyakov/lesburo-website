#!/bin/bash

# Скрипт для исправления импортов utils во всех UI компонентах

echo "Исправление импортов utils в UI компонентах..."

# Найти все файлы .tsx в папке components/ui и заменить импорты
find "./components/ui" -name "*.tsx" -type f -exec sed -i 's/import { cn } from ".\/utils";/import { cn } from "..\/..\/lib\/utils";/g' {} \;

echo "Импорты исправлены!"

echo "Удаление старого файла utils.ts из папки ui..."
rm -f "./components/ui/utils.ts"

echo "Готово! Проект подготовлен для деплоя."