import fs from 'fs';
import path from 'path';

console.log('Starting CSS build process...');

// Create directories
console.log('Creating directories...');
fs.mkdirSync('dist/v1', { recursive: true });
fs.mkdirSync('dist/latest', { recursive: true });

// Simple CSS minification function
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\s*{\s*/g, '{') // Remove spaces around braces
    .replace(/\s*}\s*/g, '}') // Remove spaces around braces
    .replace(/\s*:\s*/g, ':') // Remove spaces around colons
    .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
    .replace(/\s*,\s*/g, ',') // Remove spaces around commas
    .trim(); // Remove leading/trailing whitespace
}

// Read and minify CSS
console.log('Minifying CSS...');
try {
  const cssContent = fs.readFileSync('src/brand.css', 'utf8');
  const minifiedCSS = minifyCSS(cssContent);
  fs.writeFileSync('dist/v1/brand.min.css', minifiedCSS);
  console.log('CSS minified successfully');
} catch (error) {
  console.error('Error processing CSS:', error.message);
  process.exit(1);
}

// Copy to latest
console.log('Copying to latest...');
fs.copyFileSync('dist/v1/brand.min.css', 'dist/latest/brand.min.css');

console.log('CSS build completed successfully!');
console.log('Generated files:');
console.log('- dist/v1/brand.min.css');
console.log('- dist/latest/brand.min.css');
console.log('');
console.log('Note: HTML files in dist/ are preserved and not regenerated.');
