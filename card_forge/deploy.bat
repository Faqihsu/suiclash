@echo off
REM SuiClash Deployment Script for Windows
REM Deploys smart contracts to Sui Testnet

setlocal enabledelayedexpansion

echo.
echo 🚀 SuiClash Deployment Script
echo ==============================
echo.

REM Check if Sui CLI is installed
where sui >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Sui CLI not found. Please install from: https://docs.sui.io/guides/developer/getting-started
    exit /b 1
)

REM Switch to testnet
echo 📡 Switching to Sui Testnet...
call sui client switch testnet

REM Get testnet SUI
echo.
echo 🪙 Getting testnet SUI (faucet)...
call sui client faucet

REM Build contracts
echo.
echo 🔨 Building Move contracts...
call sui move build

REM Publish contracts
echo.
echo 📦 Publishing contracts to testnet...
call sui client publish --gas-budget 2000000000

echo.
echo ✅ Deployment Complete!
echo ========================
echo.
echo 📋 Save the PACKAGE_ID from above and add to frontend/.env.local:
echo.
echo NEXT_PUBLIC_PACKAGE_ID=0x...
echo.
echo Then run: cd frontend && npm install && npm run dev
echo.

pause
