# Ratnapur Jewellers - Design System Setup ✨

## 📋 Summary

Your design system is fully configured with **Tailwind CSS v4** (CSS-first approach). All brand colors, typography, spacing, and responsive breakpoints are ready to use.

---

## ✅ What's Configured

### 1. **Brand Colors**
- ✨ Warm ivory, deep oxblood, antique gold, muted bronze, warm taupe, near-black
- 📊 Chart colors for data visualization
- 🌓 Dark mode support

### 2. **Typography**
- 🎨 **Cormorant Garamond** - Headings & display text (300/400/500 weights, italic support)
- 📝 **Inter** - Body text (300/400/500 weights)
- 📏 Responsive font sizes that scale across devices
- 📐 Line heights & letter spacing

### 3. **Responsive Breakpoints**
- 📱 Mobile (320px+)
- 📱 Tablet (640px+)
- 💻 Tablet Landscape (900px+)
- 💻 Laptop (1024px+)
- 🖥️ Desktop (1280px+)
- 🖥️ Wide (1920px+)

### 4. **Spacing System**
- xs, sm, md, lg, xl, 2xl, 3xl, 4xl (4px to 96px)

### 5. **Additional**
- ⚡ Transitions (fast/base/slow)
- 🌑 Shadows (sm/md/lg/xl)
- 📐 Border radius system

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | ⚡ Start here! Quick copy-paste examples |
| **[TAILWIND_USAGE.md](./TAILWIND_USAGE.md)** | 🎨 Complete Tailwind class guide with examples |
| **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** | 📖 Full design system documentation |

---

## 🚀 Quick Start

### Using Brand Colors

```tsx
// Backgrounds
<div className="bg-brand-ivory">
<div className="bg-brand-oxblood">
<div className="bg-brand-gold">

// Text
<h1 className="text-brand-oxblood">
<p className="text-brand-black">

// Borders
<div className="border border-brand-gold">
```

### Using Typography

```tsx
// Headings (Cormorant Garamond)
<h1 className="font-heading text-brand-oxblood text-5xl font-light">
  Ratnapur Jewellers
</h1>

// Display text with italic
<h2 className="font-display text-4xl italic text-brand-oxblood">
  Timeless Elegance
</h2>

// Body text (Inter)
<p className="font-body text-brand-black text-base">
  Your content here
</p>
```

### Using Spacing

```tsx
<section className="py-spacing-3xl px-spacing-lg">
  <div className="space-y-spacing-xl">
    <div className="p-spacing-lg">
      Content
    </div>
  </div>
</section>
```

### Responsive Design

```tsx
<h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
  Responsive Heading
</h1>

<div className="px-4 md:px-8 lg:px-12 xl:px-16">
  Responsive Container
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-spacing-lg">
  {/* Grid items */}
</div>
```

---

## 🎯 Common Components

### Primary Button
```tsx
<button className="bg-brand-oxblood text-brand-ivory px-spacing-lg py-spacing-md rounded-lg transition-base hover:opacity-90">
  Shop Now
</button>
```

### Product Card
```tsx
<div className="bg-white border border-brand-gold rounded-lg p-spacing-lg transition-base hover:shadow-lg">
  <h3 className="font-heading text-brand-oxblood text-2xl font-light">
    Gold Necklace
  </h3>
  <p className="font-body text-brand-taupe text-sm mt-spacing-xs">
    22K GOLD
  </p>
  <p className="font-body text-brand-black mt-spacing-md">
    Exquisite craftsmanship
  </p>
</div>
```

### Hero Section
```tsx
<section className="bg-brand-ivory py-spacing-4xl">
  <div className="max-w-7xl mx-auto px-spacing-lg">
    <h1 className="font-display text-brand-oxblood text-5xl md:text-6xl lg:text-7xl font-light italic">
      Ratnapur Jewellers
    </h1>
    <p className="font-body text-brand-black text-lg md:text-xl mt-spacing-lg">
      Timeless elegance in every piece
    </p>
  </div>
</section>
```

---

## 🔧 How It Works (Tailwind v4)

**Tailwind CSS v4** uses a CSS-first configuration. Everything is in `src/app/globals.css`:

1. **`:root`** block → Define CSS custom properties
   ```css
   --brand-gold: #a67c52;
   ```

2. **`@theme inline`** block → Map to Tailwind utilities
   ```css
   --color-brand-gold: var(--brand-gold);
   ```

3. **Use in JSX** → Access via Tailwind classes
   ```tsx
   <div className="bg-brand-gold">
   ```

**No separate `tailwind.config.ts` file needed!**

---

## 📁 File Structure

```
src/app/
├── globals.css          ← All CSS variables & Tailwind theme
├── layout.tsx           ← Font configuration
└── page.tsx             ← Your pages

docs/
├── QUICK_REFERENCE.md   ← Quick examples (start here!)
├── TAILWIND_USAGE.md    ← Tailwind class guide
└── DESIGN_SYSTEM.md     ← Complete documentation
```

---

## 💡 Pro Tips

1. **Use IntelliSense**: Install "Tailwind CSS IntelliSense" VS Code extension for autocomplete
2. **Brand consistency**: Always use `brand-*` colors instead of arbitrary hex values
3. **Mobile-first**: Design for mobile, then add `md:`, `lg:`, `xl:` classes
4. **Spacing scale**: Use `spacing-*` for consistent spacing across the app
5. **Font families**: `font-heading` for titles, `font-body` for text

---

## 🎨 Design Philosophy

> **Ratnapur Jewellers** embodies a refined jewel-box aesthetic:
> - Warm ivory canvas
> - Deep oxblood and antique gold as signature duo
> - Restrained neutrals for structure
> - Elegant serif for luxury feel
> - Modern sans-serif for readability

---

## 🆘 Need Help?

1. **Quick copy-paste?** → [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
2. **Tailwind classes?** → [TAILWIND_USAGE.md](./TAILWIND_USAGE.md)
3. **Complete guide?** → [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
4. **Source code?** → `src/app/globals.css`

---

## ✨ You're All Set!

Start building beautiful jewelry e-commerce experiences with your fully configured design system. All colors, fonts, and spacing are ready to use! 💎

**Happy Coding!** 🚀
