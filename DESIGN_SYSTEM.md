# Ratnapur Jewellers - Design System

## Overview
This document outlines the global CSS variables, typography, colors, and responsive breakpoints for the Ratnapur Jewellers project.

---

## 🎨 Brand Colors

### Core Palette
| Variable | Hex | Usage |
|----------|-----|-------|
| `--brand-ivory` | `#faf7f2` | Warm ivory - page backgrounds |
| `--brand-oxblood` | `#3d0b0b` | Deep oxblood/maroon - headings, focus states |
| `--brand-gold` | `#a67c52` | Antique gold - borders, accents, motif dots |
| `--brand-bronze` | `#8b6544` | Muted bronze - eyebrow labels |
| `--brand-taupe` | `#6c5547` | Warm taupe - field labels |
| `--brand-black` | `#1a1a1a` | Near-black - body text |

### Chart Accent Colors
| Variable | Hex | Color |
|----------|-----|-------|
| `--chart-1` | `#e8755a` | Coral |
| `--chart-2` | `#2e9d8f` | Teal |
| `--chart-3` | `#2e4a5c` | Deep Slate |
| `--chart-4` | `#e0b36a` | Gold |
| `--chart-5` | `#f2a07d` | Peach |

### CSS Usage
```css
/* Background colors */
.element {
  background-color: var(--brand-ivory);
}

/* Text colors */
.heading {
  color: var(--brand-oxblood);
}

/* Border colors */
.card {
  border-color: var(--brand-gold);
}
```

### Tailwind Utility Classes
```html
<!-- Backgrounds -->
<div class="bg-brand-ivory">
<div class="bg-brand-oxblood">
<div class="bg-brand-gold">
<div class="bg-brand-bronze">
<div class="bg-brand-taupe">

<!-- Text -->
<h1 class="text-brand-oxblood">
<p class="text-brand-black">
<span class="text-brand-gold">

<!-- Borders -->
<div class="border border-brand-gold">
<div class="border-brand-oxblood">
```

---

## 📝 Typography

### Font Families

**Cormorant Garamond** (Headings & Display)
- Variable: `--font-heading`, `--font-display`
- Weights: 300 (Light), 400 (Regular), 500 (Medium)
- Styles: Normal, Italic
- Usage: Headings, display text, elegant UI elements

**Inter** (Body Text)
- Variable: `--font-body`
- Weights: 300 (Light), 400 (Regular), 500 (Medium)
- Usage: Body text, UI elements, labels

### Font Weights
```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
```

### Font Sizes (Responsive)

#### Base (Mobile: 320px - 639px)
| Variable | Size | px |
|----------|------|-----|
| `--font-size-xs` | 0.75rem | 12px |
| `--font-size-sm` | 0.875rem | 14px |
| `--font-size-base` | 1rem | 16px |
| `--font-size-lg` | 1.125rem | 18px |
| `--font-size-xl` | 1.25rem | 20px |
| `--font-size-2xl` | 1.5rem | 24px |
| `--font-size-3xl` | 1.875rem | 30px |
| `--font-size-4xl` | 2.25rem | 36px |
| `--font-size-5xl` | 3rem | 48px |
| `--font-size-6xl` | 3.75rem | 60px |
| `--font-size-7xl` | 4.5rem | 72px |

#### Tablet (640px+)
- `--font-size-4xl`: 2.5rem (40px)
- `--font-size-5xl`: 3.5rem (56px)
- `--font-size-6xl`: 4rem (64px)
- `--font-size-7xl`: 5rem (80px)

#### Desktop (1280px+)
- `--font-size-4xl`: 3.5rem (56px)
- `--font-size-5xl`: 4.5rem (72px)
- `--font-size-6xl`: 5.5rem (88px)
- `--font-size-7xl`: 7rem (112px)

### Line Heights
```css
--line-height-tight: 1.2;   /* Headings */
--line-height-normal: 1.5;  /* Body text */
--line-height-relaxed: 1.75; /* Loose body text */
```

### Letter Spacing
```css
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.05em;
```

### CSS Usage
```css
/* Headings */
h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-light);
  line-height: var(--line-height-tight);
  color: var(--brand-oxblood);
}

/* Body text */
p {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
}

/* Display text */
.hero-title {
  font-family: var(--font-display);
  font-size: var(--font-size-7xl);
  font-style: italic;
}
```

### Tailwind Utility Classes
```html
<!-- Font families -->
<h1 class="font-heading">Elegant Heading</h1>
<h2 class="font-display italic">Display Text</h2>
<p class="font-body">Body text content</p>
```

---

## 📱 Responsive Breakpoints

### Breakpoint Values

| Name | Variable | Min Width | Max Width |
|------|----------|-----------|-----------|
| **Mobile** | `--screen-mobile` | 320px | 639px |
| **Tablet** | `--screen-tab` | 640px | 899px |
| **Tablet Landscape** | `--screen-tab-land` | 900px | 1023px |
| **Laptop** | `--screen-laptop` | 1024px | 1279px |
| **Desktop** | `--screen-desktop` | 1280px | 1919px |
| **Wide** | `--screen-wide` | 1920px+ | - |

### Media Query Usage

```css
/* Mobile First (default styles) */
.container {
  padding: 1rem;
}

/* Tablet: 640px+ */
@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
  }
}

/* Tablet Landscape: 900px+ */
@media (min-width: 900px) {
  .container {
    padding: 2rem;
  }
}

/* Laptop: 1024px+ */
@media (min-width: 1024px) {
  .container {
    padding: 2.5rem;
  }
}

/* Desktop: 1280px+ */
@media (min-width: 1280px) {
  .container {
    padding: 3rem;
  }
}

/* Wide Desktop: 1920px+ */
@media (min-width: 1920px) {
  .container {
    padding: 4rem;
  }
}
```

### Tailwind Breakpoints
Tailwind CSS has similar breakpoints built-in:

```html
<!-- Responsive classes -->
<div class="px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
  Responsive padding
</div>

<!-- Font size responsive -->
<h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Responsive heading
</h1>
```

---

## 📏 Spacing Scale

| Variable | Size | px |
|----------|------|-----|
| `--spacing-xs` | 0.25rem | 4px |
| `--spacing-sm` | 0.5rem | 8px |
| `--spacing-md` | 1rem | 16px |
| `--spacing-lg` | 1.5rem | 24px |
| `--spacing-xl` | 2rem | 32px |
| `--spacing-2xl` | 3rem | 48px |
| `--spacing-3xl` | 4rem | 64px |
| `--spacing-4xl` | 6rem | 96px |

### Usage
```css
.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  gap: var(--spacing-md);
}
```

---

## ⚡ Transitions & Animations

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

### Usage
```css
.button {
  transition: all var(--transition-base);
}

.button:hover {
  transform: translateY(-2px);
}
```

### Tailwind Utility Classes
```html
<button class="transition-base hover:scale-105">
<div class="transition-fast">
<a class="transition-slow">
```

---

## 🌑 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

### Usage
```css
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

---

## 🎯 Border Radius

```css
--radius: 0.625rem; /* 10px base */
```

The theme also includes scaled variants:
- `--radius-sm`: 60% of base
- `--radius-md`: 80% of base
- `--radius-lg`: 100% of base (default)
- `--radius-xl`: 140% of base
- `--radius-2xl`: 180% of base
- `--radius-3xl`: 220% of base
- `--radius-4xl`: 260% of base

---

## 💡 Usage Examples

### Hero Section
```jsx
<section className="bg-brand-ivory py-spacing-4xl">
  <h1 className="font-display text-brand-oxblood text-5xl md:text-6xl lg:text-7xl font-light italic">
    Ratnapur Jewellers
  </h1>
  <p className="font-body text-brand-black text-lg md:text-xl mt-spacing-lg">
    Timeless elegance in every piece
  </p>
</section>
```

### Product Card
```jsx
<div className="bg-white border border-brand-gold rounded-lg p-spacing-lg transition-base hover:shadow-lg">
  <h3 className="font-heading text-brand-oxblood text-2xl font-light">
    Gold Necklace
  </h3>
  <p className="font-body text-brand-taupe text-sm mt-spacing-xs">
    22K GOLD
  </p>
  <p className="font-body text-brand-black text-base mt-spacing-md">
    Exquisite craftsmanship meets timeless design
  </p>
</div>
```

### Button Variants
```jsx
// Primary button
<button className="bg-brand-oxblood text-brand-ivory font-body px-spacing-lg py-spacing-md rounded transition-base hover:opacity-90">
  Shop Now
</button>

// Secondary button
<button className="border-2 border-brand-gold text-brand-oxblood font-body px-spacing-lg py-spacing-md rounded transition-base hover:bg-brand-gold hover:text-white">
  Learn More
</button>
```

---

## 🔄 Dark Mode Support

All brand colors remain consistent in dark mode, while the neutral system colors (background, foreground, etc.) automatically adjust based on the `.dark` class applied to the `<html>` element.

```html
<!-- Light mode -->
<html>
  <body class="bg-white text-brand-black">
    Content
  </body>
</html>

<!-- Dark mode -->
<html class="dark">
  <body class="bg-background text-foreground">
    Content (automatically uses dark theme)
  </body>
</html>
```

---

## 📦 File Location & Configuration

### Tailwind CSS v4 (CSS-First Configuration)

This project uses **Tailwind CSS v4**, which uses a CSS-first configuration approach. All theme customization is done directly in CSS using the `@theme` directive.

**Configuration Files:**
- **Global Variables & Theme**: `src/app/globals.css`
  - `:root` block - CSS custom properties
  - `@theme inline` block - Tailwind theme configuration
  - `@layer base` - Base styles and typography
  - `@layer utilities` - Custom utility classes
  
- **Font Setup**: `src/app/layout.tsx`
  - Google Fonts configuration (Cormorant Garamond & Inter)

**No separate tailwind.config.ts needed!** - Tailwind v4 reads the theme configuration directly from `globals.css` using the `@theme` directive.

### How It Works

1. **CSS Custom Properties** (`:root`) - Define raw values
   ```css
   :root {
     --brand-gold: #a67c52;
     --font-size-4xl: 2.25rem;
   }
   ```

2. **Tailwind Theme** (`@theme`) - Map to Tailwind utilities
   ```css
   @theme inline {
     --color-brand-gold: var(--brand-gold);
     --font-size-4xl: var(--font-size-4xl);
   }
   ```

3. **Use in HTML** - Access via Tailwind classes
   ```html
   <div class="bg-brand-gold text-4xl">
   ```

---

## 🚀 Getting Started

1. Use CSS variables directly in your stylesheets:
   ```css
   color: var(--brand-oxblood);
   ```

2. Use Tailwind utility classes in your components:
   ```html
   <div class="bg-brand-ivory text-brand-oxblood">
   ```

3. Access variables in JavaScript/TypeScript:
   ```ts
   const brandGold = getComputedStyle(document.documentElement)
     .getPropertyValue('--brand-gold');
   ```

4. Override variables for specific components:
   ```css
   .special-section {
     --font-size-4xl: 5rem;
   }
   ```

---

**Design Philosophy**: The Ratnapur Jewellers design system embodies a refined jewel-box aesthetic — a warm ivory canvas paired with deep oxblood and antique gold as the signature duo, complemented by restrained neutrals for structure and clarity.
