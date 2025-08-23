import fs from 'fs';
import path from 'path';

console.log('Starting build process...');

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

// Create improved index.html
console.log('Creating index.html...');
const html = `<!DOCTYPE html>
<html>
<head>
    <title>OrdoTools Brand CDN</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://cdn.ordotools.org/v1/brand.min.css">
    <style>
        body { 
            background: var(--bg); 
            color: var(--ink); 
            font: 400 var(--fs-0)/var(--lh-base) ui-serif,Georgia,serif; 
            margin: 0; 
            padding: 0;
        }
        .hero { 
            background: linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02)); 
            padding: 4rem 2rem; 
            text-align: center; 
            border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .hero h1 { 
            color: var(--accent); 
            font-size: 3rem; 
            margin: 0 0 1rem 0; 
            font-weight: 700;
        }
        .hero p { 
            font-size: 1.2rem; 
            color: var(--ink-muted); 
            max-width: 600px; 
            margin: 0 auto;
        }
        .container { 
            max-width: var(--container); 
            margin: auto; 
            padding: 2rem;
        }
        .copy-section {
            background: linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.04));
            border: 1px solid rgba(255,255,255,.12);
            border-radius: 20px;
            padding: 2rem;
            margin: 2rem 0;
            text-align: center;
            box-shadow: 0 15px 40px rgba(0,0,0,.4);
        }
        .copy-section h2 {
            color: var(--accent);
            margin: 0 0 1rem 0;
            font-size: 1.8rem;
        }
        .copy-section p {
            color: var(--ink-muted);
            margin: 0 0 1.5rem 0;
            font-size: 1.1rem;
        }
        .copy-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background: var(--ink-black);
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,.08);
            margin: 0 auto;
            max-width: 500px;
        }
        .copy-code {
            font-family: monospace;
            font-size: 1rem;
            color: var(--ink);
            background: transparent;
            border: none;
            outline: none;
            flex: 1;
            text-align: center;
            user-select: all;
        }
        .copy-btn {
            background: var(--accent);
            color: var(--bg);
            border: none;
            border-radius: 8px;
            padding: 0.75rem 1rem;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .copy-btn:hover {
            background: #8aafff;
            transform: translateY(-1px);
        }
        .copy-btn:active {
            transform: translateY(0);
        }
        .copy-btn svg {
            width: 16px;
            height: 16px;
        }
        .copy-success {
            color: #4ade80;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .copy-success.show {
            opacity: 1;
        }
        .endpoint-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
            gap: 1.5rem; 
            margin: 2rem 0;
        }
        .endpoint-card { 
            background: linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02)); 
            border: 1px solid rgba(255,255,255,.08); 
            backdrop-filter: blur(12px) saturate(125%); 
            border-radius: 16px; 
            box-shadow: 0 10px 30px rgba(0,0,0,.35); 
            padding: 1.5rem;
        }
        .endpoint-card h3 { 
            color: var(--accent); 
            margin: 0 0 1rem 0;
        }
        .endpoint-card .url { 
            background: var(--ink-black); 
            padding: 0.75rem; 
            border-radius: 8px; 
            font-family: monospace; 
            word-break: break-all;
        }
        .demo-link { 
            text-align: center; 
            margin: 3rem 0;
        }
        .demo-link .btn { 
            display: inline-flex; 
            gap: 8px; 
            align-items: center; 
            padding: 1rem 2rem; 
            border-radius: 999px; 
            border: 1px solid rgba(255,255,255,.08); 
            text-decoration: none; 
            color: var(--ink); 
            background: linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.02)); 
            font-size: 1.1rem; 
            transition: all 0.2s ease;
        }
        .demo-link .btn:hover { 
            background: linear-gradient(135deg, rgba(255,255,255,.1), rgba(255,255,255,.04)); 
            transform: translateY(-2px);
        }
        .build-info { 
            text-align: center; 
            margin-top: 3rem; 
            padding: 1.5rem; 
            background: rgba(255,255,255,.02); 
            border-radius: 12px; 
            border: 1px solid rgba(255,255,255,.04);
        }
        .build-info .small { 
            font-size: 13px; 
            color: var(--ink-muted);
        }
    </style>
</head>
<body>
    <div class="hero">
        <h1>OrdoTools Brand CDN</h1>
        <p>A professional CDN service for OrdoTools branding and design system</p>
    </div>
    
    <div class="container">
        <div class="copy-section">
            <h2>🚀 Quick Start</h2>
            <p>Copy and paste this link tag into your HTML to get started with OrdoTools branding</p>
            
            <div class="copy-container">
                <input type="text" class="copy-code" value="<link rel=&quot;stylesheet&quot; href=&quot;https://cdn.ordotools.org/v1/brand.min.css&quot;>" readonly>
                <button class="copy-btn" onclick="copyToClipboard()">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                    </svg>
                    Copy
                </button>
            </div>
            
            <div class="copy-success" id="copySuccess">✓ Copied to clipboard!</div>
        </div>

        <h2>Available Endpoints</h2>
        <p>Choose the endpoint that best fits your needs. Versioned endpoints provide stability, while the latest endpoint gives you the most recent updates.</p>
        
        <div class="endpoint-grid">
            <div class="endpoint-card">
                <h3>Version 1 (Stable)</h3>
                <p>Use this for production applications that require stability. This version will not change and is cached for 1 year.</p>
                <div class="url">https://cdn.ordotools.org/v1/brand.min.css</div>
                <p class="small">Cache: 1 year • Size: ${Math.round(fs.statSync('dist/v1/brand.min.css').size / 1024 * 100) / 100}KB</p>
            </div>
            
            <div class="endpoint-card">
                <h3>Latest Version</h3>
                <p>Use this for development or when you want the most recent updates. Cached for 5 minutes.</p>
                <div class="url">https://cdn.ordotools.org/latest/brand.min.css</div>
                <p class="small">Cache: 5 minutes • Size: ${Math.round(fs.statSync('dist/latest/brand.min.css').size / 1024 * 100) / 100}KB</p>
            </div>
        </div>
        
        <div class="demo-link">
            <a href="/demo.html" class="btn">🎨 View Demo Page</a>
        </div>
        
        <div class="build-info">
            <p class="small">Last built: ${new Date().toISOString()}</p>
        </div>
    </div>

    <script>
        function copyToClipboard() {
            const copyCode = document.querySelector('.copy-code');
            const copySuccess = document.getElementById('copySuccess');
            
            // Select the text
            copyCode.select();
            copyCode.setSelectionRange(0, 99999); // For mobile devices
            
            try {
                // Copy to clipboard
                document.execCommand('copy');
                
                // Show success message
                copySuccess.classList.add('show');
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    copySuccess.classList.remove('show');
                }, 3000);
                
                // Change button text temporarily
                const copyBtn = document.querySelector('.copy-btn');
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Copied!';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy: ', err);
                copySuccess.textContent = 'Failed to copy. Please select and copy manually.';
                copySuccess.classList.add('show');
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync('dist/index.html', html);

// Create demo.html
console.log('Creating demo.html...');
const demoHtml = `<!DOCTYPE html>
<html>
<head>
    <title>OrdoTools Brand Demo</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://cdn.ordotools.org/v1/brand.min.css">
</head>
<body>
    <header class="appbar">
        <div class="appbar__inner">
            <div class="brand">OrdoTools Brand</div>
            <nav class="nav">
                <a href="#typography">Typography</a>
                <a href="#components">Components</a>
                <a href="#utilities">Utilities</a>
                <a href="/">CDN</a>
            </nav>
        </div>
    </header>

    <div class="container">
        <header class="stack">
            <h1>OrdoTools Brand System Demo</h1>
            <p class="smallcaps">Complete showcase of all available styles and components</p>
        </header>

        <main class="stack">
            <section id="typography" class="card stack">
                <h2 class="card__title">Typography & Text Elements</h2>
                <p>This is a standard paragraph demonstrating the base typography. The OrdoTools brand system emphasizes readability and clean typography, perfect for content-heavy applications and documentation.</p>
                
                <h3>Heading Hierarchy</h3>
                <p>Our heading system provides clear visual hierarchy while maintaining consistency across all applications. Each heading level is carefully crafted to guide users through content.</p>
                
                <h4>Subheadings and Structure</h4>
                <p>Subheadings help break down complex information into digestible sections. They work seamlessly with our body text to create a cohesive reading experience.</p>
                
                <h5>Fifth Level Heading</h5>
                <p>Fifth level headings provide additional structure for complex documents and interfaces.</p>
                
                <h6>Sixth Level Heading</h6>
                <p>Sixth level headings are perfect for the most granular content organization.</p>
                
                <div class="smallcaps">
                    <p>Small caps text is perfect for captions, metadata, and secondary information. It maintains readability while providing visual hierarchy.</p>
                </div>
            </section>

            <section class="card stack">
                <h2 class="card__title">Interactive Elements</h2>
                <p>Our brand system includes carefully designed interactive elements that maintain consistency while providing clear affordances for users.</p>
                
                <div class="stack">
                    <a href="#" class="btn">Primary Button</a>
                    <a href="#" class="btn">Secondary Action</a>
                    <a href="#" class="btn">Tertiary Option</a>
                </div>
                
                <p>Buttons and links are designed with accessibility in mind, providing clear visual feedback and maintaining the brand aesthetic across all states.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Form Elements</h2>
                <p>Form elements are designed to be both functional and aesthetically pleasing, maintaining consistency with the overall design system.</p>
                
                <div class="stack">
                    <label class="label">Email Address</label>
                    <input type="email" class="input" placeholder="Enter your email">
                    
                    <label class="label">Category</label>
                    <select class="select">
                        <option>Select a category</option>
                        <option>Design</option>
                        <option>Development</option>
                        <option>Marketing</option>
                    </select>
                    
                    <label class="label">Message</label>
                    <textarea class="textarea" placeholder="Enter your message" rows="4"></textarea>
                </div>
                
                <p>All form elements include proper focus states, hover effects, and maintain the glassmorphic aesthetic.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Content Layout & Spacing</h2>
                <p>The stack utility class provides consistent vertical spacing between elements, ensuring content flows naturally and maintains visual rhythm throughout the interface.</p>
                
                <p>This spacing system is based on a consistent scale that aligns with our typography, creating harmonious relationships between text, images, and interactive elements.</p>
                
                <div class="stack">
                    <p>Each paragraph in this stack maintains consistent spacing, creating a comfortable reading experience that doesn't overwhelm users with dense content.</p>
                    <p>The spacing also helps users scan content quickly, making it easier to find the information they need in documentation, articles, and other text-heavy interfaces.</p>
                </div>
            </section>

            <section class="card stack">
                <h2 class="card__title">Code & Technical Content</h2>
                <p>For technical documentation and code examples, we provide specialized styling that maintains readability while fitting seamlessly with our brand aesthetic.</p>
                
                <div class="code">
                    <pre>/* Example CSS using OrdoTools variables */
:root {
  --bg: #0e1726;
  --ink: #f8f6f2;
  --accent: #7aa2ff;
  --glass-1: rgba(255,255,255,0.08);
  --glass-2: rgba(255,255,255,0.03);
}

.card {
  background: linear-gradient(135deg, var(--glass-1), var(--glass-2));
  border: 1px solid var(--glass-brd);
  backdrop-filter: blur(12px) saturate(125%);
}</pre>
                </div>
                
                <p>Code blocks are designed to be easily readable while maintaining the overall design aesthetic. They use appropriate contrast and spacing to ensure developers can work comfortably.</p>
                
                <p>Inline code like <code>const example = 'test'</code> should also be styled appropriately for technical content.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Tables & Data Display</h2>
                <p>Tables are optimized for text-heavy applications and provide clear data organization with subtle visual enhancements.</p>
                
                <table class="table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Description</th>
                            <th>Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Card</td>
                            <td>Glassmorphic container with hover effects</td>
                            <td>Content sections, panels</td>
                        </tr>
                        <tr>
                            <td>Button</td>
                            <td>Interactive element with gradient background</td>
                            <td>Actions, navigation</td>
                        </tr>
                        <tr>
                            <td>Input</td>
                            <td>Form field with focus states</td>
                            <td>User input, forms</td>
                        </tr>
                        <tr>
                            <td>Badge</td>
                            <td>Small status indicator</td>
                            <td>Labels, tags, status</td>
                        </tr>
                    </tbody>
                </table>
                
                <p>Tables include hover effects and maintain the glassmorphic aesthetic while ensuring data readability.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Callouts & Information Boxes</h2>
                <p>Callouts provide a way to highlight important information or provide additional context.</p>
                
                <div class="callout">
                    <div class="callout__icon">💡</div>
                    <div>
                        <h4>Pro Tip</h4>
                        <p>Use the <code>.card__title</code> class for card headers to get the beautiful gradient text effect that matches your brand aesthetic.</p>
                    </div>
                </div>
                
                <div class="callout">
                    <div class="callout__icon">⚠️</div>
                    <div>
                        <h4>Important Note</h4>
                        <p>The glassmorphic effects use backdrop-filter, which may not be supported in all browsers. Consider providing fallbacks for older browsers.</p>
                    </div>
                </div>
                
                <p>Callouts are perfect for tips, warnings, and important information that needs to stand out from regular content.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Badges & Status Indicators</h2>
                <p>Badges provide a compact way to display status, categories, or labels.</p>
                
                <div class="stack">
                    <p>Status indicators: <span class="badge">Active</span> <span class="badge">Pending</span> <span class="badge">Completed</span></p>
                    <p>Categories: <span class="badge">Design</span> <span class="badge">Development</span> <span class="badge">Marketing</span></p>
                    <p>Priority levels: <span class="badge">High</span> <span class="badge">Medium</span> <span class="badge">Low</span></p>
                </div>
                
                <p>Badges use the accent color with subtle transparency and maintain consistency with the overall design system.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">CSS Variables & Custom Properties</h2>
                <p>Our design system is built on CSS custom properties that provide consistency and flexibility across all components.</p>
                
                <div class="code">
                    <pre>/* Available CSS Variables */
:root {
  /* Core palette */
  --bg: #0e1726;           /* Page background */
  --bg-raise: #142035;     /* Elevated panels */
  --ink: #f8f6f2;          /* Primary text */
  --ink-muted: #d1d8e0;    /* Secondary text */
  --ink-faint: #a8b3c0;    /* Tertiary text */
  --ink-black: #1a1f29;    /* Dark text */
  
  /* Accents */
  --accent: #7aa2ff;       /* Primary accent */
  --accent-2: #9cc2ff;     /* Secondary accent */
  --accent-3: #486dff;     /* Tertiary accent */
  
  /* Surfaces */
  --glass-1: rgba(255,255,255,0.08);
  --glass-2: rgba(255,255,255,0.03);
  --glass-brd: rgba(255,255,255,0.12);
  
  /* Typography */
  --fs-0: clamp(14px, 1.5vw + 12px, 16px);            /* Base font size */
  --fs--1: clamp(12px, 1.2vw + 10px, 14px);           /* Micro text */
  --fs-1: clamp(16px, 1.8vw + 14px, 18px);            /* h6 */
  --fs-2: clamp(18px, 2.2vw + 16px, 22px);            /* h5 */
  --fs-3: clamp(20px, 2.8vw + 18px, 26px);            /* h4 */
  --fs-4: clamp(24px, 3.5vw + 20px, 32px);            /* h3 */
  --fs-5: clamp(28px, 4.5vw + 22px, 38px);            /* h2 */
  --fs-6: clamp(32px, 6vw + 24px, 48px);              /* h1 */
  
  /* Spacing */
  --space-1: clamp(4px, 0.5vw + 3px, 6px);            /* 4pt grid system */
  --space-2: clamp(8px, 1vw + 6px, 10px);
  --space-3: clamp(12px, 1.5vw + 9px, 16px);
  --space-4: clamp(16px, 2vw + 12px, 20px);
  --space-5: clamp(20px, 2.5vw + 15px, 28px);
  --space-6: clamp(24px, 3vw + 18px, 36px);
  --space-7: clamp(32px, 4vw + 24px, 48px);
  --space-8: clamp(40px, 5vw + 30px, 64px);
}</pre>
                </div>
                
                <p>These variables ensure consistent spacing, colors, and typography throughout your application. You can also override them for custom themes or variations.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Container & Layout Testing</h2>
                <p>This section tests the container class and its max-width behavior. The container class provides consistent horizontal spacing and ensures content doesn't become too wide on large screens.</p>
                
                <p>The container uses the <code>--container</code> CSS variable (75ch) which is optimized for reading comfort. This width ensures that text lines are neither too short nor too long, maintaining optimal readability across different screen sizes.</p>
                
                <div style="background: rgba(255,255,255,.02); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,.08);">
                    <p class="smallcaps">This is a custom styled div to test how your system handles additional styling and nested elements.</p>
                </div>
            </section>

            <section class="card stack">
                <h2 class="card__title">Link & Anchor Testing</h2>
                <p>Links are styled with the accent color to provide clear visual distinction. This section tests various link scenarios and states.</p>
                
                <p>Here's a <a href="#">standard link</a> that should use your accent color. We also have <a href="#" style="text-decoration: underline;">underlined links</a> and <a href="#" style="font-weight: bold;">bold links</a> to test different styling approaches.</p>
                
                <p>Links should maintain good contrast and be easily identifiable while fitting seamlessly with your overall design aesthetic.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Card Component Variations</h2>
                <p>Cards provide consistent container styling for content sections. Let's test different card implementations and variations.</p>
                
                <div class="card" style="margin: 1rem 0;">
                    <h4 class="card__title">Nested Card with Title</h4>
                    <p>This is a card within a card, testing how your system handles nested components and maintains visual hierarchy.</p>
                </div>
                
                <div style="background: linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02)); border: 1px solid rgba(255,255,255,.08); backdrop-filter: blur(12px) saturate(125%); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,.35); padding: 24px; margin: 1rem 0;">
                    <h4>Custom Styled Card</h4>
                    <p>This card uses the same styling as the .card class but applied manually to test consistency and ensure the styles work in different contexts.</p>
                </div>
            </section>

            <section class="card stack">
                <h2 class="card__title">Button & Interactive Element Testing</h2>
                <p>Buttons are essential interactive elements that need to be both visually appealing and functionally clear.</p>
                
                <div class="stack">
                    <a href="#" class="btn">Default Button</a>
                    <a href="#" class="btn" style="background: var(--accent); color: var(--bg);">Accent Button</a>
                    <a href="#" class="btn" style="border-color: var(--accent); color: var(--accent);">Outline Button</a>
                </div>
                
                <p>Button variations help users understand different action types and priorities. The hover states and transitions should feel smooth and responsive.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Stack Utility Class Testing</h2>
                <p>The stack utility class is crucial for consistent vertical spacing. Let's test it with various content types and nesting levels.</p>
                
                <div class="stack">
                    <p>First paragraph in stack</p>
                    <p>Second paragraph with different content length to test spacing consistency</p>
                    <p>Third paragraph</p>
                    
                    <div class="stack">
                        <p>Nested stack - first item</p>
                        <p>Nested stack - second item with longer content to see how the spacing system handles different text lengths and maintains visual rhythm</p>
                        <p>Nested stack - third item</p>
                    </div>
                    
                    <p>Back to main stack</p>
                </div>
                
                <p>Stack should provide consistent spacing regardless of content length or nesting level.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Small Caps & Secondary Information</h2>
                <p>The smallcaps class is designed for secondary information, captions, and metadata that needs to be present but not prominent.</p>
                
                <div class="smallcaps">
                    <p>This is small caps text that should be less prominent than regular body text. It's perfect for timestamps, author information, or supplementary details.</p>
                    <p>Small caps maintains readability while providing clear visual hierarchy and ensuring it doesn't compete with primary content for attention.</p>
                </div>
                
                <p>Regular text should maintain its prominence while small caps provides supporting information without cluttering the interface.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Code Block & Preformatted Text</h2>
                <p>Code blocks need special handling to maintain readability while fitting the overall design aesthetic.</p>
                
                <div class="code">
                    <pre>// JavaScript example
function greetUser(name) {
  const greeting = \`Hello, \${name}!\`;
  console.log(greeting);
  return greeting;
}

// Usage
greetUser('World');</pre>
                </div>
                
                <p>Code blocks should have sufficient contrast, proper padding, and maintain the monospace font while fitting seamlessly with your design system.</p>
                
                <p>Inline code like <code>const example = 'test'</code> should also be styled appropriately for technical content.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Edge Cases & Special Characters</h2>
                <p>Let's test how your system handles various edge cases and special content types.</p>
                
                <p>Special characters: &copy; &trade; &reg; &deg; &plusmn; &times; &divide; &lt; &gt; &amp; &quot; &apos;</p>
                
                <p>Long words and URLs: supercalifragilisticexpialidocious https://www.example.com/very/long/url/that/might/break/layout</p>
                
                <p>Mixed content: <strong>Bold text</strong>, <em>italic text</em>, <u>underlined text</u>, and <mark>highlighted text</mark> to test various text formatting options.</p>
                
                <p>Numbers and symbols: 123,456.789 + - * / = ≠ ≈ ≤ ≥ ± ∞ ∫ ∑ ∏ √</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Responsive Behavior Testing</h2>
                <p>Your design system should work well across different screen sizes and devices. This section tests various content scenarios.</p>
                
                <p>On smaller screens, the container should adapt appropriately, and text should remain readable. The stack utility should maintain consistent spacing regardless of viewport size.</p>
                
                <p>Cards should maintain their visual appeal on mobile devices, and buttons should be appropriately sized for touch interaction.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                    <div style="background: rgba(255,255,255,.02); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,.04);">
                        <p class="smallcaps">Grid item 1</p>
                    </div>
                    <div style="background: rgba(255,255,255,.02); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,.04);">
                        <p class="smallcaps">Grid item 2</p>
                    </div>
                    <div style="background: rgba(255,255,255,.02); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,.04);">
                        <p class="smallcaps">Grid item 3</p>
                    </div>
                </div>
            </section>

            <section class="card stack">
                <h2 class="card__title">Divider & Visual Separators</h2>
                <p>Visual separators help organize content and provide clear breaks between sections.</p>
                
                <p>Content above the divider</p>
                <div class="hr"></div>
                <p>Content below the divider</p>
                
                <p>The hr class provides a subtle gradient line that maintains the aesthetic while providing clear visual separation.</p>
            </section>

            <section class="card stack">
                <h2 class="card__title">Navigation & Structure</h2>
                <p>This demo page showcases how our brand system handles various content types and layouts. Each section demonstrates different aspects of our design philosophy.</p>
                
                <div class="stack">
                    <a href="/" class="btn">← Back to CDN</a>
                    <a href="https://cdn.ordotools.org/v1/brand.min.css" class="btn">Download CSS</a>
                    <a href="https://cdn.ordotools.org/latest/brand.min.css" class="btn">Download Latest</a>
                </div>
                
                <p class="smallcaps">This comprehensive demo covers all the CSS classes and elements defined in your brand stylesheet, ensuring thorough testing of your design system.</p>
            </section>
        </main>
    </div>
</body>
</html>`;

fs.writeFileSync('dist/demo.html', demoHtml);

console.log('Build completed successfully!');
console.log('Generated files:');
console.log('- dist/v1/brand.min.css');
console.log('- dist/latest/brand.min.css');
console.log('- dist/index.html');
console.log('- dist/demo.html');
