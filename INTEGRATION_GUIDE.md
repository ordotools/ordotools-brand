# OrdoTools CDN Integration Guide

## Overview

This guide documents the enhanced OrdoTools CDN that now includes comprehensive styles integrated from the SIS-QASACADEMY project. The CDN provides a complete design system for modern web applications with consistent theming, responsive design, and accessible components.

## CDN Usage

```html
<!-- Include the enhanced CDN in your HTML -->
<link rel="stylesheet" href="https://cdn.ordotools.org/v1/brand.min.css">
```

## Design System

### Color Palette

The enhanced CDN includes a comprehensive color system with semantic variations:

#### Core Colors
- `--bg`: Primary background (#0e1726)
- `--bg-raise`: Elevated surfaces (#142035)
- `--ink`: Primary text (#f8f6f2)
- `--ink-muted`: Secondary text (#d1d8e0)
- `--ink-faint`: Tertiary text (#a8b3c0)

#### Semantic Colors
- `--primary`: Primary accent (#7aa2ff)
- `--success`: Success states (#10b981)
- `--warning`: Warning states (#f59e0b)
- `--error`: Error states (#ef4444)
- `--info`: Information states (#06b6d4)
- `--danger`: Destructive actions (#dc2626)

#### Surface Variations
- `--surface-primary`: Main content areas
- `--surface-secondary`: Elevated panels
- `--surface-tertiary`: Form inputs and controls
- `--surface-hover`: Interactive hover states

### Typography

The CDN uses a fluid type scale with Utopia-inspired scaling:

```css
--fs-0: clamp(14px, 1.5vw + 12px, 16px);  /* Base text */
--fs-1: clamp(16px, 1.8vw + 14px, 18px);  /* h6 */
--fs-2: clamp(18px, 2.2vw + 16px, 22px);  /* h5 */
--fs-3: clamp(20px, 2.8vw + 18px, 26px);  /* h4 */
--fs-4: clamp(24px, 3.5vw + 20px, 32px);  /* h3 */
--fs-5: clamp(28px, 4.5vw + 22px, 38px);  /* h2 */
--fs-6: clamp(32px, 6vw + 24px, 48px);    /* h1 */
```

### Spacing

Fluid spacing scale using CSS clamp():

```css
--space-1: clamp(4px, 0.5vw + 3px, 6px);   /* Micro spacing */
--space-2: clamp(8px, 1vw + 6px, 10px);    /* Small spacing */
--space-3: clamp(12px, 1.5vw + 9px, 16px); /* Medium spacing */
--space-4: clamp(16px, 2vw + 12px, 20px);  /* Large spacing */
--space-5: clamp(20px, 2.5vw + 15px, 28px); /* Extra large spacing */
```

## Layout System

### Grid Layouts

#### Auto-fit Grid
```html
<div class="grid-auto-fit">
    <div class="card">Item 1</div>
    <div class="card">Item 2</div>
    <div class="card">Item 3</div>
</div>
```

#### Responsive Grid
```html
<div class="grid-responsive">
    <div class="card">Responsive Item 1</div>
    <div class="card">Responsive Item 2</div>
</div>
```

#### Dashboard Grid
```html
<div class="grid-dashboard">
    <div class="card--status">Status Card</div>
    <div class="card--table">Table Card</div>
</div>
```

### App Container
```html
<div class="app-container">
    <aside class="sidebar">Sidebar content</aside>
    <main class="main-content">Main content</main>
</div>
```

### Content Sections
```html
<div class="content-section" id="section1">Content 1</div>
<div class="content-section content-section--active" id="section2">Content 2</div>
```

### Page Headers
```html
<header class="page-header">
    <h2 class="page-header__title">Page Title</h2>
    <p class="page-header__description">Page description</p>
</header>
```

## Component System

### Cards

#### Status Cards
```html
<div class="card--status">
    <h3 class="card--status__label">Total Users</h3>
    <p class="card--status__value">1,234</p>
</div>
```

#### Table Cards
```html
<div class="card--table">
    <h3 class="card--table__title">Recent Orders</h3>
    <p class="card--table__description">Last 30 days</p>
    <span class="card--table__count">42</span>
</div>
```

#### Metric Cards
```html
<div class="card--metric">
    <div class="card--metric__header">
        <h3 class="card--metric__title">Morning Session</h3>
        <span class="card--metric__value">95%</span>
    </div>
</div>
```

#### Info Cards
```html
<div class="card--info">
    <h3 class="card--info__title">Information</h3>
    <p>Card content goes here</p>
</div>
```

### Forms

#### Form Groups
```html
<div class="form-group">
    <label class="form-group__label">Email Address</label>
    <input type="email" class="form-group__control" placeholder="Enter email">
</div>
```

#### Form Actions
```html
<div class="form-actions">
    <button class="btn btn--primary">Save</button>
    <button class="btn btn--secondary">Cancel</button>
</div>
```

#### Configuration Forms
```html
<div class="config-form-group">
    <label class="config-form-group__label">Setting Name</label>
    <input type="text" class="config-form-control" placeholder="Enter setting">
</div>

<div class="config-form-row">
    <div class="config-form-group">
        <label class="config-form-group__label">First Name</label>
        <input type="text" class="config-form-control">
    </div>
    <div class="config-form-group">
        <label class="config-form-group__label">Last Name</label>
        <input type="text" class="config-form-control">
    </div>
</div>
```

#### Entity Selector
```html
<div class="entity-selector">
    <label class="entity-selector__label">Select Entity:</label>
    <select class="entity-selector__select">
        <option>Choose an entity...</option>
        <option>John Doe</option>
        <option>Jane Smith</option>
    </select>
</div>
```

### Data Display

#### Data Tables
```html
<table class="table--data">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Active</td>
        </tr>
    </tbody>
</table>
```

#### Matrix Tables
```html
<table class="table--matrix">
    <thead>
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>9:00 AM</td>
            <td class="matrix-cell matrix-cell--filled">Math</td>
            <td class="matrix-cell">Science</td>
        </tr>
    </tbody>
</table>
```

#### Entity Lists
```html
<div class="entity-list-container">
    <div class="entity-item">
        <div class="entity-details">
            <h4>John Doe</h4>
            <p>john@example.com</p>
        </div>
        <div class="entity-status">
            <span class="badge--status--active">Active</span>
        </div>
    </div>
</div>
```

### Interactive Elements

#### Navigation Items
```html
<nav class="sidebar__nav">
    <a href="#" class="nav-item">
        <span class="nav-item__icon">📊</span>
        <span class="nav-item__text">Dashboard</span>
    </a>
    <a href="#" class="nav-item nav-item--active">
        <span class="nav-item__icon">👥</span>
        <span class="nav-item__text">Students</span>
    </a>
</nav>
```

#### Enhanced Buttons
```html
<button class="btn btn--primary">Primary Action</button>
<button class="btn btn--secondary">Secondary Action</button>
<button class="btn btn--success">Success Action</button>
<button class="btn btn--danger">Danger Action</button>
<button class="btn btn--warning">Warning Action</button>
<button class="btn btn--info">Info Action</button>
```

#### Tabs
```html
<div class="config-tabs">
    <button class="config-tab config-tab--active">General</button>
    <button class="config-tab">Advanced</button>
    <button class="config-tab">Security</button>
</div>

<div class="planning-tabs">
    <div class="tab-buttons">
        <button class="tab-btn tab-btn--active">Current</button>
        <button class="tab-btn">Planned</button>
        <button class="tab-btn">Completed</button>
    </div>
</div>
```

### Modal System

```html
<div class="modal" id="exampleModal">
    <div class="modal__content">
        <div class="modal__header">
            <h3>Modal Title</h3>
            <button class="btn btn--secondary" onclick="closeModal()">×</button>
        </div>
        <div class="modal__body">
            <p>Modal content goes here</p>
        </div>
        <div class="modal__footer">
            <button class="btn btn--primary">Confirm</button>
            <button class="btn btn--secondary">Cancel</button>
        </div>
    </div>
</div>
```

## Utility Classes

### Status Badges

```html
<span class="badge--status badge--status--draft">Draft</span>
<span class="badge--status badge--status--approved">Approved</span>
<span class="badge--status badge--status--active">Active</span>
<span class="badge--status badge--status--completed">Completed</span>
<span class="badge--status badge--status--has-plan">Has Plan</span>
<span class="badge--status badge--status--no-plan">No Plan</span>
```

### Priority Badges

```html
<span class="badge--priority-1">High Priority</span>
<span class="badge--priority-2">Medium Priority</span>
<span class="badge--priority-3">Low Priority</span>
```

### Required Badges

```html
<span class="badge--required-yes">Required</span>
<span class="badge--required-no">Optional</span>
```

### Prerequisite Status

```html
<span class="badge--status--pending">Pending</span>
<span class="badge--status--in-progress">In Progress</span>
<span class="badge--status--completed">Completed</span>
<span class="badge--status--failed">Failed</span>
```

### Notifications

```html
<div class="notification notification--success">Operation completed successfully!</div>
<div class="notification notification--error">An error occurred</div>
<div class="notification notification--info">Here's some information</div>
<div class="notification notification--warning">Please review your input</div>
```

### Alerts

```html
<div class="alert alert--success">Success message</div>
<div class="alert alert--error">Error message</div>
<div class="alert alert--info">Info message</div>
<div class="alert alert--warning">Warning message</div>
```

### Progress Indicators

```html
<!-- Spinner -->
<div class="progress-spinner"></div>

<!-- Configuration Spinner -->
<div class="config-spinner"></div>

<!-- Progress Bar -->
<div class="progress-bar-container">
    <div class="progress-bar" style="width: 75%"></div>
</div>
```

### Loading States

```html
<div class="loading">Loading content...</div>
<div class="config-loading">Loading configuration...</div>
```

### Pagination

```html
<div class="pagination">
    <button class="pagination__button">Previous</button>
    <button class="pagination__button pagination__button--current">1</button>
    <button class="pagination__button">2</button>
    <button class="pagination__button">3</button>
    <button class="pagination__button">Next</button>
</div>
```

## Responsive Design

The CDN includes mobile-first responsive design with breakpoints:

- **Mobile**: `< 768px` - Single column layouts, collapsible sidebar
- **Desktop**: `≥ 769px` - Multi-column layouts, fixed sidebar

### Mobile Features

- Collapsible sidebar with mobile menu toggle
- Stacked form controls
- Single-column grid layouts
- Touch-friendly button sizes
- Responsive tables with horizontal scroll

## Animation System

### Keyframe Animations

- `spin`: Rotating spinner animation
- `modalSlideIn`: Modal entrance animation
- `slideIn`: Side panel entrance animation

### Transitions

All interactive elements include smooth transitions:
- Hover effects: `0.2s ease`
- Focus states: `0.15s ease`
- Modal animations: `0.3s ease-out`

## Accessibility Features

- High contrast color combinations
- Focus indicators with 3px outlines
- Semantic color usage for status and feedback
- Proper heading hierarchy
- Screen reader friendly class names
- Touch-friendly interactive elements

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS Custom Properties (CSS Variables)
- CSS clamp() for fluid scaling
- Backdrop-filter for glassmorphism effects

## Migration Guide

### From Original SIS-QASACADEMY Styles

1. **Replace custom CSS variables**:
   ```css
   /* Old */
   --color-surface-primary: #0a0a0a;
   
   /* New */
   --surface-primary: var(--bg);
   ```

2. **Update class names**:
   ```html
   <!-- Old -->
   <div class="status-card">
   
   <!-- New -->
   <div class="card--status">
   ```

3. **Use CDN spacing variables**:
   ```css
   /* Old */
   padding: 1.5rem;
   
   /* New */
   padding: var(--space-5);
   ```

### Best Practices

1. **Use semantic class names** following BEM methodology
2. **Leverage CSS custom properties** for consistent theming
3. **Follow responsive breakpoints** for mobile compatibility
4. **Use utility classes** for common patterns
5. **Maintain accessibility** with proper contrast and focus states

## Examples

### Complete Dashboard Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdn.ordotools.org/v1/brand.min.css">
</head>
<body>
    <div class="app-container">
        <aside class="sidebar">
            <div class="sidebar__header">
                <h2 class="sidebar__brand">App Name</h2>
            </div>
            <nav class="sidebar__nav">
                <a href="#" class="nav-item nav-item--active">
                    <span class="nav-item__icon">📊</span>
                    <span class="nav-item__text">Dashboard</span>
                </a>
                <a href="#" class="nav-item">
                    <span class="nav-item__icon">👥</span>
                    <span class="nav-item__text">Users</span>
                </a>
            </nav>
        </aside>
        
        <main class="main-content">
            <header class="page-header">
                <h2 class="page-header__title">Dashboard</h2>
                <p class="page-header__description">Overview of your application</p>
            </header>
            
            <div class="grid-dashboard">
                <div class="card--status">
                    <h3 class="card--status__label">Total Users</h3>
                    <p class="card--status__value">1,234</p>
                </div>
                <div class="card--status">
                    <h3 class="card--status__label">Active Sessions</h3>
                    <p class="card--status__value">89</p>
                </div>
                <div class="card--status">
                    <h3 class="card--status__label">Total Revenue</h3>
                    <p class="card--status__value">$45,678</p>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
```

## Support

For questions or issues with the enhanced CDN:

1. Check this integration guide
2. Review the CSS source code for implementation details
3. Test with the provided examples
4. Ensure browser compatibility

## Version History

- **v1.0**: Original OrdoTools CDN
- **v1.1**: Enhanced with SIS-QASACADEMY integration
  - Added comprehensive color system
  - Integrated layout utilities
  - Enhanced component library
  - Added responsive design features
  - Included animation system
  - Added utility classes for common patterns
