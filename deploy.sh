#!/bin/bash

echo "🚀 Deploying Maji Lawn Services to Vercel"
echo "=========================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Commit changes
echo "�� Committing changes..."
git commit -m "Deploy Maji Lawn Services website"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/Abd87/maji-lawn-services.git
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Import repository: Abd87/maji-lawn-services"
echo "3. Click Deploy"
echo ""
echo "🎉 Your website will be live at: https://maji-lawn-services.vercel.app"
