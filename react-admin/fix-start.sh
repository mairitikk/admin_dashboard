#!/bin/bash

# Define the project directory (optional, but good practice)
PROJECT_DIR="$(pwd)"

echo "Starting React project dependency cleanup and reinstallation..."
echo "---"

# Step 1: Verification and Cleanup
echo "1. Removing old files: node_modules and package-lock.json..."
# Use a robust delete command
rm -rf node_modules package-lock.json

# Step 2: Clearing NPM cache
echo "2. Clearing NPM cache to ensure fresh downloads..."
npm cache clean --force

# Step 3: Reinstalling Dependencies
echo "3. Installing dependencies (this may take a few minutes)..."
npm install

if [ $? -ne 0 ]; then
    echo "---"
    echo "🚨 ERROR: 'npm install' failed. Please review the output above for installation errors."
    exit 1
fi

echo "---"
echo "Installation complete. Attempting to start the application using npx (recommended for reliable execution)."

# Step 4: Attempt to start the app using npx
npx react-scripts start

# Check the exit code of npx react-scripts start
if [ $? -ne 0 ]; then
    echo "---"
    echo "❌ FAILED TO START: The command 'npx react-scripts start' failed."
    echo "This usually means there is a deep compatibility issue (e.g., React 19 vs react-scripts 5.x) or compilation error."
    echo "Please check the error output above for compiler messages."
else
    echo "✅ Success: The application is running (or the start command was successful)."
fi
ls fix-start.sh
