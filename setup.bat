@echo off
cd /d "c:\Users\mahes\New folder (3)\React Project"
echo Installing dependencies...
call npm install
echo.
echo Build started...
call npm run build
echo.
echo Setup complete!
pause
