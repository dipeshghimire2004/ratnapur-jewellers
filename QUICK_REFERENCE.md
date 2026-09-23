# Quick Reference - Ratnapur Jewellers Design System

## 🎨 Brand Colors (Most Used)

```html
<!-- Backgrounds -->
bg-brand-ivory     <!-- #FAF7F2 - Page background -->
bg-brand-oxblood   <!-- #3D0B0B - Primary dark -->
bg-brand-gold      <!-- #A67C52 - Accent -->

<!-- Text -->
text-brand-oxblood <!-- Headings -->
text-brand-black   <!-- Body text -->
text-brand-gold    <!-- Accents -->
text-brand-taupe   <!-- Labels -->
text-brand-bronze  <!-- Eyebrow text -->

<!-- Borders -->
border-brand-gold
border-brand-oxblood
```

---

## 📝 Typography

```html
<!-- Fonts -->
font-heading   <!-- Cormorant Garamond - for h1-h6 -->
font-display   <!-- Cormorant Garamond - for hero text -->
font-body      <!-- Inter - for body text -->

<!-- Sizes (responsive, scales automatically) -->
text-xs   text-sm   text-base   text-lg   text-xl
text-2xl  text-3xl  text-4xl   text-5xl  text-6xl  text-7xl

<!-- Weights -->
font-light   (300)
font-normal  (400)
font-medium  (500)
```

---

## 📏 Spacing

```html
spacing-xs   (4px)    spacing-xl   (32px)
spacing-sm   (8px)    spacing-2xl  (48px)
spacing-md   (16px)   spacing-3xl  (64px)
spacing-lg   (24px)   spacing-4xl  (96px)

<!-- Use with any spacing utility -->
p-spacing-lg          <!-- padding -->
mt-spacing-xl         <!-- margin-top -->
gap-spacing-md        <!-- gap -->
```

---

## 📱 Responsive Breakpoints

```html
           (base) - Mobile (320px+)
md:        640px  - Tablet
lg:        1024px - Laptop
xl:        1280px - Desktop
2xl:       1920px - Wide

<!-- Example -->
<h1 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
<div class="px-4 md:px-8 lg:px-12 xl:px-16">
```

---

## 🎯 Common Patterns

### Primary Button
```html
<button class="bg-brand-oxblood text-brand-ivory px-spacing-lg py-spacing-md rounded-lg transition-base hover:opacity-90">
  Click Me
</button>
```

### Secondary Button
```html
<button class="border-2 border-brand-gold text-brand-oxblood px-spacing-lg py-spacing-md rounded-lg transition-base hover:bg-brand-gold hover:text-white">
  Click Me
</button>
```

### Card
```html
<div class="bg-white border border-brand-gold rounded-lg p-spacing-lg transition-base hover:shadow-lg">
  Content
</div>
```

### Heading
```html
<h1 class="font-heading text-brand-oxblood text-4xl md:text-5xl lg:text-6xl font-light">
  Elegant Title
</h1>
```

### Body Text
```html
<p class="font-body text-brand-black text-base leading-relaxed">
  Body content here
</p>
```

### Section Container
```html
<section class="bg-brand-ivory py-spacing-3xl px-spacing-lg">
  <div class="max-w-7xl mx-auto">
    <!-- Content -->
  </div>
</section>
```

---

## 🔧 Utilities

```html
<!-- Transitions -->
transition-fast   (150ms)
transition-base   (250ms)
transition-slow   (350ms)

<!-- Border Radius -->
rounded-sm   rounded-md   rounded-lg   rounded-xl
rounded-2xl  rounded-3xl  rounded-4xl

<!-- Common Combos -->
transition-base hover:opacity-90
transition-fast hover:scale-105
transition-base hover:shadow-lg
```

---

## 💡 Pro Tips

1. **Always use brand colors** instead of arbitrary hex values
2. **Use spacing scale** for consistent spacing
3. **Mobile-first** - add responsive classes with `md:`, `lg:`, etc.
4. **Use semantic font families** - `font-heading` for headings, `font-body` for text

---

## 📚 Full Documentation

- **Complete Design System**: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- **Tailwind Usage Guide**: [TAILWIND_USAGE.md](./TAILWIND_USAGE.md)
- **Source Code**: `src/app/globals.css`
