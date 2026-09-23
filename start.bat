@echo off
title Perfume Store - Local Server
echo.
echo ========================================
echo   ROYAL PERFUME STORE - Starting...
echo ========================================
echo.

:: Check Node.js is installed
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install it from: https://nodejs.org/
    pause
    exit
)

echo [OK] Node.js found
echo [OK] Launching browser: http://localhost:5000
start http://localhost:5000
echo.
echo ========================================
echo Server running at: http://localhost:5000
echo Press CTRL+C to stop the server
echo ========================================
echo.

:: Start the server
node server.js

pause
