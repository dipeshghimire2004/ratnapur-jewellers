# Header & Hero Section Guide

## 🎯 Overview

A fully responsive header and hero section for the Ratnapur Jewellers website, inspired by the reference design.

---

## 📦 Components Created

### 1. Header Component (`src/components/layout/header.tsx`)

**Features:**
- ✅ Fixed/sticky positioning
- ✅ Responsive navigation (desktop + mobile)
- ✅ Hamburger menu for mobile
- ✅ Brand logo with hover effects
- ✅ CTA button for appointments
- ✅ Smooth transitions and animations

**Responsive Breakpoints:**
- **Mobile (< 1024px):** Hamburger menu, stacked navigation
- **Desktop (≥ 1024px):** Horizontal navigation bar

### 2. Hero Component (`src/components/sections/hero.tsx`)

**Features:**
- ✅ Full-height section with background image
- ✅ Overlay gradient for text readability
- ✅ Responsive typography scaling
- ✅ Eyebrow text (location + tagline)
- ✅ Main headline with display font
- ✅ Subheading with italic styling
- ✅ Description text
- ✅ CTA button
- ✅ Scroll indicator (desktop only)

**Responsive Breakpoints:**
- **Mobile (320px):** Smaller text, adjusted padding
- **Tablet (640px - 1023px):** Medium text sizes
- **Desktop (≥ 1024px):** Large text, scroll indicator

---

## 🎨 Design Tokens Used

### Colors
- `bg-brand-oxblood` - Header background
- `text-brand-ivory` - Header text
- `text-brand-gold` - Hover states
- `border-brand-gold` - Borders and dividers

### Typography
- `font-display` - Hero headlines (Cormorant Garamond)
- `font-body` - Navigation and body text (Inter)
- Responsive sizes: `text-5xl` → `text-8xl` (auto-scales)

### Spacing
- Container: `max-w-7xl mx-auto`
- Padding: `px-4 sm:px-6 lg:px-8`
- Vertical: `py-20 lg:py-32`

---

## 📱 Responsive Behavior

### Header

| Screen Size | Behavior |
|-------------|----------|
| Mobile (< 1024px) | Hamburger menu, single column navigation |
| Desktop (≥ 1024px) | Horizontal nav bar, visible CTA button |

### Hero

| Screen Size | Headline Size | Layout |
|-------------|---------------|---------|
| Mobile (< 640px) | `text-5xl` | Stacked, compact padding |
| Tablet (640px - 1023px) | `text-6xl` - `text-7xl` | More spacing |
| Desktop (≥ 1024px) | `text-7xl` - `text-8xl` | Full layout with scroll indicator |

---

## 🚀 Usage

### Basic Implementation

```tsx
// src/app/page.tsx
import { Header } from '@/components/layout';
import { Hero } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

### Customizing Navigation Links

Edit `src/components/layout/header.tsx`:

```tsx
const navLinks = [
  { href: '/story', label: 'STORY' },
  { href: '/collections', label: 'COLLECTIONS' },
  { href: '/heritage', label: 'HERITAGE' },
  { href: '/craft', label: 'CRAFT' },
  { href: '/journal', label: 'JOURNAL' },
];
```

### Customizing Hero Content

Edit `src/components/sections/hero.tsx`:

```tsx
// Eyebrow text
<p>Kathmandu · Since Generations</p>

// Main headline
<h1>
  <span>Crafted for</span>
  <span>Generations.</span>
  <span>Worn with Grace.</span>
</h1>

// Description
<p>A living archive of Nepali artistry...</p>
```

---

## 🖼️ Image Requirements

### Hero Background Image

**Required:** `public/hero-image.jpg`

**Specifications:**
- **Minimum dimensions:** 1920x1080px
- **Recommended dimensions:** 2560x1440px (for high-DPI displays)
- **Format:** JPG (optimized) or WebP
- **File size:** < 500KB (after optimization)
- **Content:** Model wearing traditional jewelry in cultural setting

**Optimization:**
```bash
# Using ImageMagick
convert hero-image.jpg -quality 85 -resize 2560x1440 hero-image.jpg

# Or use online tools like:
# - TinyPNG (https://tinypng.com)
# - Squoosh (https://squoosh.app)
```

### Using Next.js Image Component (Recommended)

For better performance, replace the `<img>` tag:

```tsx
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Traditional jewelry craftsmanship"
  fill
  className="object-cover object-center"
  priority
  quality={90}
/>
```

---

## 🎨 Customization Examples

### Change Header Color

```tsx
// In header.tsx
<header className="bg-brand-ivory border-b border-brand-gold">
  {/* Update text colors accordingly */}
  <Link className="text-brand-oxblood hover:text-brand-gold">
```

### Add Logo Image

```tsx
// Replace text logo with image
<Link href="/">
  <Image
    src="/logo.svg"
    alt="Ratnapur Jewels"
    width={180}
    height={40}
    className="h-8 w-auto"
  />
</Link>
```

### Adjust Hero Overlay

```tsx
// In hero.tsx, change gradient opacity
<div className="absolute inset-0 bg-gradient-to-r from-brand-oxblood/80 to-brand-oxblood/20 z-10" />
```

### Change Hero Alignment

```tsx
// Right-aligned content
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
  <div className="max-w-2xl py-20 lg:py-32 text-right">
    {/* Content */}
  </div>
</div>
```

---

## ♿ Accessibility Features

### Header
- ✅ Semantic HTML (`<header>`, `<nav>`)
- ✅ ARIA labels on buttons
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Screen reader friendly

### Hero
- ✅ Semantic heading hierarchy (`<h1>`)
- ✅ Descriptive alt text for images
- ✅ Sufficient color contrast (text over overlay)
- ✅ ARIA labels on interactive elements

---

## 🔧 Advanced Customizations

### Transparent Header on Scroll

```tsx
'use client';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-oxblood/95 backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      {/* Rest of header */}
    </header>
  );
}
```

### Add Search or Cart Icons

```tsx
import { Search, ShoppingBag } from 'lucide-react';

<div className="hidden lg:flex items-center gap-4">
  {/* Navigation links */}
  <button className="text-brand-ivory hover:text-brand-gold">
    <Search className="w-5 h-5" />
  </button>
  <button className="text-brand-ivory hover:text-brand-gold">
    <ShoppingBag className="w-5 h-5" />
  </button>
  {/* CTA button */}
</div>
```

### Video Background (Instead of Image)

```tsx
<div className="absolute inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-r from-brand-oxblood/60 to-transparent z-10" />
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>
</div>
```

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format with JPG fallback
   - Implement lazy loading for below-fold images
   - Use responsive images with srcset

2. **Reduce JavaScript**
   - Mobile menu state is the only client-side JS
   - Consider removing scroll indicator animation for faster load

3. **CSS Optimization**
   - All styles use Tailwind classes (tree-shakable)
   - No custom CSS bloat

4. **Font Loading**
   - Fonts are loaded via Next.js font optimization
   - Uses `display: swap` for fast rendering

---

## 🐛 Common Issues

### Issue: Header overlaps content

**Solution:** Add top padding to main content
```tsx
<main className="pt-16 lg:pt-20">
  <Hero />
</main>
```

### Issue: Mobile menu doesn't close on navigation

**Solution:** Already handled with `onClick={() => setMobileMenuOpen(false)}`

### Issue: Hero image not showing

**Solution:** 
1. Ensure `public/hero-image.jpg` exists
2. Check image path (no leading `/public/`)
3. Use Next.js Image component for better debugging

### Issue: Text not readable over image

**Solution:** Adjust overlay opacity
```tsx
<div className="absolute inset-0 bg-brand-oxblood/80 z-10" />
```

---

## 📱 Testing Checklist

- [ ] Mobile menu opens/closes correctly
- [ ] All navigation links work
- [ ] Header stays fixed on scroll
- [ ] Hero text is readable on all devices
- [ ] CTA buttons are clickable
- [ ] Responsive breakpoints work (use browser dev tools)
- [ ] Hover states work on desktop
- [ ] Touch interactions work on mobile
- [ ] Images load correctly
- [ ] Fonts render properly

---

## 🎯 Next Steps

1. **Add actual hero image** to `public/hero-image.jpg`
2. **Create route pages** for navigation links
3. **Add more sections** below the hero
4. **Implement search/cart** functionality if needed
5. **Add animations** with Framer Motion or similar
6. **Set up appointment form** for the CTA button

---

**Ready to build an elegant jewelry website! ✨**
