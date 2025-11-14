# Global Opt - Logistics Website

## Overview
Global Opt is a static website for a logistics company specializing in cargo delivery from China to Russia. The site showcases their services, pricing, advantages, and contact information.

## Project Structure
- **Build System**: Gulp 5.0
- **Frontend**: HTML, SASS/SCSS, JavaScript
- **Dev Server**: BrowserSync on port 5000
- **Source Files**: `/src` directory
- **Build Output**: `/dist` directory (auto-generated, not committed to git)

## Directory Structure
```
├── src/
│   ├── css/          # Compiled CSS (generated)
│   ├── fonts/        # Roboto font files
│   ├── icons/        # Icon assets
│   ├── img/          # Image assets
│   ├── js/           # JavaScript files
│   ├── sass/         # SASS source files
│   ├── index.html    # Main page
│   └── policy.html   # Policy page
├── dist/             # Production build (auto-generated)
├── gulpfile.js       # Gulp build configuration
└── package.json      # Dependencies and scripts
```

## Development

### Available Scripts
- `npm run dev` - Start development server with live reload on port 5000
- `npm run build` - Build production assets

### How It Works
The Gulp build system:
1. Compiles SASS to minified CSS with autoprefixer
2. Minifies HTML
3. Optimizes images
4. Copies fonts, icons, and JavaScript to dist folder
5. Runs BrowserSync server for live preview
6. Watches for changes and auto-rebuilds

### Port Configuration
- **Development**: Port 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows proxy access in Replit)

## Recent Changes
- **2024-11-14**: Initial Replit setup
  - Configured BrowserSync to use port 5000 and host 0.0.0.0
  - Added npm scripts for dev and build
  - Updated .gitignore to exclude dist and cache folders
  - Set up workflow for automatic development server

## Dependencies
All dependencies are in `devDependencies`:
- gulp & gulp-cli - Build system
- browser-sync - Development server with live reload
- gulp-sass & sass - SASS compilation
- gulp-autoprefixer - CSS vendor prefixes
- gulp-clean-css - CSS minification
- gulp-htmlmin - HTML minification
- gulp-imagemin - Image optimization
- gulp-rename - File renaming

## Notes
- The site is in Russian language
- Static site with no backend required
- Uses custom fonts (Roboto family)
- Responsive design with Bootstrap reboot
