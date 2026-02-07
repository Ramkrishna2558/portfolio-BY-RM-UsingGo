@echo off
REM ======================================================
REM Portfolio Stack Switch Script
REM Usage: switch.bat [go|astro]
REM ======================================================

if "%1"=="" (
    echo.
    echo Portfolio Stack Switch Script
    echo ==============================
    echo Usage: switch.bat [go^|astro]
    echo.
    echo   go    - Run Go Fiber server ^(port 3000^)
    echo   astro - Run Astro dev server ^(port 4321^)
    echo.
    exit /b 1
)

if /i "%1"=="go" (
    echo.
    echo ========================================
    echo Starting Go Fiber Server...
    echo ========================================
    echo.
    cd /d "%~dp0go-fiber"
    
    REM Check if go is installed
    where go >nul 2>nul
    if %ERRORLEVEL% neq 0 (
        echo Error: Go is not installed or not in PATH
        exit /b 1
    )
    
    echo Running: go run main.go
    echo Server will start at: http://localhost:3000
    echo.
    go run main.go
    exit /b 0
)

if /i "%1"=="astro" (
    echo.
    echo ========================================
    echo Starting Astro Dev Server...
    echo ========================================
    echo.
    cd /d "%~dp0astro"
    
    REM Check if node_modules exists
    if not exist "node_modules" (
        echo Installing dependencies...
        call npm install
    )
    
    echo Running: npm run dev
    echo Server will start at: http://localhost:4321
    echo.
    call npm run dev
    exit /b 0
)

echo.
echo Error: Unknown option "%1"
echo Use "go" or "astro"
echo.
exit /b 1
