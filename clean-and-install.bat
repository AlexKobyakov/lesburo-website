@echo off
echo Cleaning Next.js cache and node_modules...
rmdir /s /q .next 2>nul
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
echo Installing dependencies...
npm install
echo Done! You can now run npm run build
pause
