# Component Structure

## 📁 File Structure

```
src/
├── app/
│   ├── page.tsx                    ← Home page (uses Header + Hero)
│   ├── layout.tsx                  ← Root layout (fonts configured)
│   └── globals.css                 ← Global styles & design tokens
│
├── components/
│   ├── layout/
│   │   ├── header.tsx              ← Navbar component
│   │   └── index.tsx               ← Export barrel
│   │
│   └── sections/
│       ├── hero.tsx                ← Hero section component
│       └── index.tsx               ← Export barrel
│
public/
├── hero-image.jpg                  ← Add your hero background here
└── README.md                       ← Image requirements
```

---

## 🏗️ Component Hierarchy

```
Page (src/app/page.tsx)
│
├── Header (Fixed top)
│   ├── Logo (Link)
│   ├── Navigation Links (Desktop)
│   ├── CTA Button (Desktop)
│   └── Mobile Menu
│       ├── Hamburger Icon
│       ├── Nav Links (Stacked)
│       └── CTA Button
│
└── Main
    └── Hero Section (Full screen)
        ├── Background
        │   ├── Gradient Overlay
        │   └── Image/Video
        │
        └── Content Container
            ├── Eyebrow Text
            ├── Headline (3 lines)
            ├── Description
            ├── CTA Button
            └── Scroll Indicator
```

---

## 🎨 Visual Layout

```
┌─────────────────────────────────────────────────┐
│  HEADER (Fixed)                                 │
│  [RATNAPUR JEWELS]  STORY  COLLECTIONS  CRAFT   │
│                            [PRIVATE APPOINTMENT] │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│  KATHMANDU · SINCE GENERATIONS                  │
│                                                 │
│  Crafted for                                    │
│  Generations.                                   │
│  Worn with Grace.                               │
│                                                 │
│  A living archive of Nepali artistry,          │
│  shaped by hand and held across time.          │
│                                                 │
│  [EXPLORE THE COLLECTION]                       │
│                                                 │
│                   ↓ SCROLL                      │
└─────────────────────────────────────────────────┘
```

---

## 📱 Responsive States

### Desktop (≥ 1024px)
```
┌────────────────────────────────────────────────────────┐
│ [LOGO]     STORY  COLLECTIONS  HERITAGE  CRAFT  JOURNAL │
│                                    [PRIVATE APPOINTMENT] │
└────────────────────────────────────────────────────────┘
```

### Mobile (< 1024px)
```
┌──────────────────────────────┐
│ [LOGO]               [☰ MENU] │
└──────────────────────────────┘

Menu Open:
┌──────────────────────────────┐
│ [LOGO]               [✕ CLOSE] │
├──────────────────────────────┤
│ STORY                        │
│ COLLECTIONS                  │
│ HERITAGE                     │
│ CRAFT                        │
│ JOURNAL                      │
│ [PRIVATE APPOINTMENT]        │
└──────────────────────────────┘
```

---

## 🎯 Key Components Breakdown

### Header Component
```tsx
<header>
  <nav>
    <div> {/* Container */}
      <div> {/* Flex row */}
        
        {/* Logo */}
        <Link>RATNAPUR JEWELS</Link>
        
        {/* Desktop Nav */}
        <div> {/* Hidden on mobile */}
          <Link>STORY</Link>
          <Link>COLLECTIONS</Link>
          ...
        </div>
        
        {/* Desktop CTA */}
        <Link>PRIVATE APPOINTMENT</Link>
        
        {/* Mobile Menu Button */}
        <button>[☰]</button>
        
      </div>
      
      {/* Mobile Menu (conditional) */}
      {open && (
        <div>
          <Link>STORY</Link>
          ...
        </div>
      )}
      
    </div>
  </nav>
</header>
```

### Hero Component
```tsx
<section> {/* Full height */}
  
  {/* Background Layer */}
  <div> {/* Absolute positioning */}
    <div>Gradient Overlay</div>
    <img>Background Image</img>
  </div>
  
  {/* Content Layer */}
  <div> {/* Relative positioning */}
    <div> {/* Container */}
      <div> {/* Content column */}
        
        <p>KATHMANDU · SINCE GENERATIONS</p>
        
        <h1>
          <span>Crafted for</span>
          <span>Generations.</span>
          <span>Worn with Grace.</span>
        </h1>
        
        <p>A living archive...</p>
        
        <Link>EXPLORE THE COLLECTION</Link>
        
      </div>
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <div>↓ SCROLL</div>
  
</section>
```

---

## 🎨 Style Patterns

### Common Patterns Used

**Container Pattern:**
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

**Responsive Text:**
```tsx
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
```

**Brand Button:**
```tsx
<button className="bg-brand-ivory text-brand-oxblood hover:bg-brand-gold transition-all duration-300">
```

**Flex Center:**
```tsx
<div className="flex items-center justify-between">
```

---

## 🔧 State Management

### Header State
- `mobileMenuOpen` (boolean) - Controls mobile menu visibility
- Toggled by hamburger button
- Auto-closes on link click

### No Global State Needed
- All components are self-contained
- No complex state management required
- Simple client-side interactivity

---

## ⚡ Performance Considerations

### What's Optimized
- ✅ Minimal JavaScript (only mobile menu toggle)
- ✅ CSS-only animations
- ✅ No external libraries (except Lucide icons)
- ✅ Tailwind JIT compilation
- ✅ Next.js font optimization

### What to Optimize Next
- [ ] Add Next.js Image component
- [ ] Implement lazy loading for images
- [ ] Add image placeholders
- [ ] Optimize font loading strategy

---

## 🎯 Integration Points

### Where to Add More Components

**After Hero:**
```tsx
// src/app/page.tsx
<main>
  <Hero />
  <FeaturedCollections />  ← Add here
  <Testimonials />        ← Add here
  <Footer />              ← Add here
</main>
```

**New Pages:**
```tsx
// src/app/collections/page.tsx
import { Header } from '@/components/layout';

export default function Collections() {
  return (
    <>
      <Header />
      <main>
        {/* Collections content */}
      </main>
    </>
  );
}
```

---

**Structure ready for expansion! 🚀**
