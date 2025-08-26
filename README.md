# OrdoTools Brand CDN

A comprehensive design system CDN that provides consistent styling, components, and utilities for modern web applications. The CDN has been enhanced with integrated styles from the SIS-QASACADEMY project, offering a complete solution for building professional interfaces.

## Features

### 🎨 **Enhanced Design System**
- **Comprehensive Color Palette**: 25+ semantic color variables
- **Fluid Typography**: Utopia-inspired responsive type scaling
- **Consistent Spacing**: Fluid spacing system using CSS clamp()
- **Glassmorphism Effects**: Modern backdrop-filter aesthetics

### 🏗️ **Layout System**
- **Grid Layouts**: Auto-fit, responsive, and dashboard grids
- **Sidebar Layout**: Collapsible sidebar with navigation
- **Content Sections**: Dynamic content area management
- **Mobile-First**: Responsive design with mobile breakpoints

### 🧩 **Component Library**
- **Card Variations**: Status, table, schedule, and info cards
- **Form Controls**: Enhanced form groups, validation states, and selectors
- **Data Display**: Tables, lists, and data visualization components
- **Interactive Elements**: Buttons, tabs, modals, and navigation

### 🔧 **Utility Classes**
- **Status Badges**: Comprehensive status and priority indicators
- **Progress Indicators**: Spinners, progress bars, and loading states
- **Notifications**: Success, error, info, and warning alerts
- **Pagination**: Navigation controls for data sets

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for mobile devices
- **Breakpoint System**: Consistent responsive behavior
- **Touch-Friendly**: Optimized for touch interactions
- **Accessibility**: High contrast and focus indicators

## Quick Start

### CDN Link
```html
<link rel="stylesheet" href="https://cdn.ordotools.org/v1/brand.min.css">
```

### Basic Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="https://cdn.ordotools.org/v1/brand.min.css">
</head>
<body>
    <div class="app-container">
        <aside class="sidebar">
            <h2 class="sidebar__brand">App Name</h2>
            <nav class="sidebar__nav">
                <a href="#" class="nav-item nav-item--active">Dashboard</a>
            </nav>
        </aside>
        
        <main class="main-content">
            <header class="page-header">
                <h2 class="page-header__title">Welcome</h2>
                <p class="page-header__description">Get started with your application</p>
            </header>
            
            <div class="grid-dashboard">
                <div class="card--status">
                    <h3 class="card--status__label">Total Users</h3>
                    <p class="card--status__value">1,234</p>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
```

## Documentation

- **[Integration Guide](INTEGRATION_GUIDE.md)**: Comprehensive documentation of all features
- **[Demo Page](dist/demo-enhanced.html)**: Interactive showcase of all components
- **[API Reference](INTEGRATION_GUIDE.md#component-system)**: Detailed component documentation

## Key Components

### Layout Components
- `.app-container` - Main application wrapper
- `.sidebar` - Navigation sidebar
- `.main-content` - Primary content area
- `.grid-*` - Various grid layout utilities

### Card Components
- `.card--status` - Status display cards
- `.card--table` - Table summary cards
- `.card--metric` - Metric display cards
- `.card--info` - General information cards

### Form Components
- `.form-group` - Form field containers
- `.form-group__control` - Form inputs
- `.form-actions` - Form button groups
- `.config-form-*` - Configuration form variants

### Utility Components
- `.badge--status-*` - Status indicators
- `.btn--*` - Button variations
- `.alert--*` - Alert messages
- `.notification--*` - Toast notifications

## Color System

The CDN provides a comprehensive color system with semantic naming:

```css
/* Primary Colors */
--primary: #7aa2ff
--success: #10b981
--warning: #f59e0b
--error: #ef4444
--info: #06b6d4

/* Surface Colors */
--surface-primary: #0e1726
--surface-secondary: #142035
--surface-tertiary: #1a1a1a
--surface-hover: rgba(255,255,255,0.04)
```

## Typography

Fluid type scaling using CSS clamp():

```css
--fs-0: clamp(14px, 1.5vw + 12px, 16px)  /* Base */
--fs-1: clamp(16px, 1.8vw + 14px, 18px)  /* h6 */
--fs-2: clamp(18px, 2.2vw + 16px, 22px)  /* h5 */
--fs-3: clamp(20px, 2.8vw + 18px, 26px)  /* h4 */
--fs-4: clamp(24px, 3.5vw + 20px, 32px)  /* h3 */
--fs-5: clamp(28px, 4.5vw + 22px, 38px)  /* h2 */
--fs-6: clamp(32px, 6vw + 24px, 48px)    /* h1 */
```

## Spacing System

Consistent spacing using fluid scaling:

```css
--space-1: clamp(4px, 0.5vw + 3px, 6px)   /* Micro */
--space-2: clamp(8px, 1vw + 6px, 10px)    /* Small */
--space-3: clamp(12px, 1.5vw + 9px, 16px) /* Medium */
--space-4: clamp(16px, 2vw + 12px, 20px)  /* Large */
--space-5: clamp(20px, 2.5vw + 15px, 28px) /* Extra Large */
```

## Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **CSS Features**: CSS Grid, Flexbox, Custom Properties, clamp()
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+

## Development

### Building the CDN
```bash
npm install
npm run build
```

### Local Development
```bash
npm start
```

### File Structure
```
src/
├── brand.css          # Source CSS with all styles
dist/
├── v1/               # Version 1 of the CDN
│   └── brand.min.css
├── latest/           # Latest version (symlink)
└── demo-enhanced.html # Interactive demo page
```

## Migration from SIS-QASACADEMY

If you're migrating from the original SIS-QASACADEMY project:

1. **Replace CSS imports** with the CDN link
2. **Update class names** to use the new BEM methodology
3. **Use CSS variables** instead of hardcoded values
4. **Follow the integration guide** for detailed migration steps

## Contributing

The CDN is designed to be extensible. To add new components:

1. Follow the existing naming conventions (BEM methodology)
2. Use CSS custom properties for theming
3. Ensure mobile-first responsive design
4. Maintain accessibility standards
5. Document new features in the integration guide

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

- **Documentation**: [Integration Guide](INTEGRATION_GUIDE.md)
- **Demo**: [Interactive Demo](dist/demo-enhanced.html)
- **Issues**: Report bugs and feature requests via GitHub Issues

## Version History

- **v1.1** - Enhanced with SIS-QASACADEMY integration
  - Added comprehensive component library
  - Integrated responsive design system
  - Enhanced utility classes
  - Added animation system
- **v1.0** - Original OrdoTools CDN
  - Basic styling and components
  - Glassmorphism design system
  - Fluid typography and spacing
