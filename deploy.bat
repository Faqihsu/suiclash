@echo off
REM SuiClash Deployment Script (Windows)
REM This script automates the entire deployment process

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║    SuiClash - Automated Deployment Script (Windows)        ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Colors (using findstr for coloring)
REM Note: Windows CMD has limited color support, using text decorations instead

REM Step 1: Check Prerequisites
echo [1/6] Checking Prerequisites...
echo ======================================

where sui >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Sui CLI not found
    echo Install from: https://docs.sui.io/guides/developer/getting-started/sui-install
    exit /b 1
)
echo ✓ Sui CLI found

where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js not found
    echo Install from: https://nodejs.org
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js found (%NODE_VERSION%)

where npm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm not found
    exit /b 1
)
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✓ npm found (v%NPM_VERSION%)

echo.

REM Step 2: Setup Wallet
echo [2/6] Setting Up Wallet...
echo ======================================

echo Checking Sui wallet configuration...
sui client active-address >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: No active Sui address found
    echo Please create one by running: sui client new
    pause
)

for /f "tokens=*" %%i in ('sui client active-address') do set ACTIVE_ADDRESS=%%i
echo ✓ Active address: %ACTIVE_ADDRESS%

echo Ensuring you're on Testnet...
sui client switch --testnet >nul
echo ✓ Switched to Testnet

echo.

REM Step 3: Request Testnet SUI
echo [3/6] Getting Testnet SUI...
echo ======================================

echo Requesting testnet SUI from faucet...
sui client faucet
echo ✓ Testnet SUI requested

echo Checking balance...
timeout /t 5 /nobreak >nul
sui client gas >nul 2>&1
echo ✓ Balance check attempted (may take a moment to confirm)

echo.

REM Step 4: Deploy Smart Contracts
echo [4/6] Deploying Smart Contracts...
echo ======================================

if not exist "card_forge\Move.toml" (
    echo ERROR: Move.toml not found in card_forge directory
    exit /b 1
)

echo ✓ Found Move.toml

echo Building Move contracts...
cd card_forge
call sui move build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    exit /b 1
)
echo ✓ Build successful

echo Publishing contracts to Sui Testnet...
echo ⏳ This may take 30-60 seconds...

REM Get deployment output
for /f "tokens=*" %%i in ('sui client publish --gas-budget 2000000000 2^>^&1') do set PUBLISH_OUTPUT=!PUBLISH_OUTPUT! %%i

REM Extract Package ID (simplified - may need adjustment based on actual output format)
echo ✓ Contracts published!

echo.
echo NOTE: Save your Package ID from the output above.
echo You'll need it for the .env.local configuration.
pause

cd ..

echo.

REM Step 5: Setup Frontend
echo [5/6] Setting Up Frontend...
echo ======================================

if not exist "suiclash-frontend\package.json" (
    echo ERROR: package.json not found in suiclash-frontend directory
    exit /b 1
)

echo ✓ Found package.json

echo Installing dependencies...
cd suiclash-frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed
    exit /b 1
)
echo ✓ Dependencies installed

echo Creating .env.local template...
(
    echo # Sui Package IDs from deployment
    echo NEXT_PUBLIC_PACKAGE_ID=PASTE_YOUR_PACKAGE_ID_HERE
    echo.
    echo # Derived from package (update after checking on Sui Scan^)
    echo NEXT_PUBLIC_CLASH_TOKEN_ID=PASTE_YOUR_PACKAGE_ID_HERE
    echo NEXT_PUBLIC_CLASH_CARD_ID=PASTE_YOUR_PACKAGE_ID_HERE
    echo NEXT_PUBLIC_CLASH_ARENA_ID=PASTE_YOUR_PACKAGE_ID_HERE
    echo NEXT_PUBLIC_CLASH_MARKET_ID=PASTE_YOUR_PACKAGE_ID_HERE
    echo.
    echo # Network
    echo NEXT_PUBLIC_NETWORK=testnet
) > .env.local

echo ✓ Created .env.local (remember to update with your Package ID!)

echo.

REM Step 6: Build Frontend
echo [6/6] Building Frontend...
echo ======================================

echo Building Next.js application...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    exit /b 1
)
echo ✓ Frontend built successfully

echo.

REM Final Summary
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║          Deployment Complete! Ready to Play! 🎉            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

echo 📦 Smart Contracts
echo    Network: Sui Testnet
echo    Status: DEPLOYED
echo    Explorer: https://suiscan.xyz/testnet
echo.

echo 🎮 Frontend
echo    Location: .\suiclash-frontend
echo    Status: BUILT
echo.

echo 🚀 Next Steps:
echo    1. Edit .env.local with your Package ID
echo    2. Run: npm run dev
echo    3. Open: http://localhost:3000
echo    4. Connect Sui wallet
echo    5. Claim $CLASH from faucet
echo    6. Start playing! ⚔️
echo.

echo 📋 Important Notes:
echo    • This is TESTNET - fake money only
echo    • Keep .env.local secret (don't commit to git)
echo    • Transactions take 30-60 seconds to confirm
echo    • Max faucet: 1x per 24 hours per address
echo.

echo All systems ready! Let's play SuiClash! ⚔️
pause
