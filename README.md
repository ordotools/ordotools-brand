# OrdoTools Brand CDN

A simple CDN service for serving OrdoTools brand CSS files with versioning and caching support.

## Features

- **Versioned endpoints**: `/v1/brand.min.css` for stable versions
- **Latest endpoint**: `/latest/brand.min.css` for the most recent version
- **Smart caching**: Long-term caching for versioned files, short-term for latest
- **Auto-deployment**: Configured for Render.com deployment

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will run on port 10000 by default, or use the `PORT` environment variable.

## Deployment

This project is configured for deployment on Render.com. The `render.yaml` file contains the deployment configuration.

### Build Process

The build script (`build.js`) performs the following steps:
1. Creates the necessary directory structure
2. Minifies the CSS from `src/brand.css`
3. Generates versioned and latest CSS files
4. Creates an `index.html` landing page

### Environment Variables

- `PORT`: Server port (defaults to 10000)
- `NODE_ENV`: Environment (set to 'production' on Render)

## API Endpoints

- `GET /` - Landing page with usage information
- `GET /v1/brand.min.css` - Version 1 CSS (cached for 1 year)
- `GET /latest/brand.min.css` - Latest CSS (cached for 5 minutes)

## Usage

Include the CSS in your HTML:

```html
<!-- For stable version -->
<link rel="stylesheet" href="https://your-domain.onrender.com/v1/brand.min.css">

<!-- For latest version -->
<link rel="stylesheet" href="https://your-domain.onrender.com/latest/brand.min.css">
```

## Project Structure

```
ordotools-brand/
├── src/
│   └── brand.css          # Source CSS file
├── dist/                  # Built files (generated)
│   ├── v1/               # Version 1 files
│   ├── latest/           # Latest version files
│   └── index.html        # Landing page
├── build.js              # Build script
├── server.js             # Express server
├── render.yaml           # Render.com configuration
└── package.json          # Dependencies and scripts
```
