#!/bin/bash

# Build script for Vercel deployment
echo "🚀 Starting ERP90 build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Generate sitemap and other static files
echo "🗺️ Generating sitemap..."
# This could be enhanced to generate dynamic sitemap from your data

# Build the application
echo "🔨 Building application..."
npm run build

# Copy public files to dist if needed
echo "📁 Copying static files..."
cp -r public/* dist/ 2>/dev/null || :

# Generate robots.txt if not exists
if [ ! -f "dist/robots.txt" ]; then
  echo "🤖 Generating robots.txt..."
  cat > dist/robots.txt << EOF
User-agent: *
Allow: /

Sitemap: https://erp90.cloud/sitemap.xml

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/

Crawl-delay: 1
EOF
fi

echo "✅ Build completed successfully!"

# Display build info
echo "📊 Build Statistics:"
echo "   - Build time: $(date)"
echo "   - Node version: $(node --version)"
echo "   - NPM version: $(npm --version)"

if [ -d "dist" ]; then
  echo "   - Build size: $(du -sh dist | cut -f1)"
  echo "   - File count: $(find dist -type f | wc -l)"
fi

echo "🎉 Ready for deployment!"
