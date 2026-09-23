# Tailwind CSS Configuration - Ratnapur Jewellers

## Tailwind CSS v4 (CSS-First Configuration)

This project uses **Tailwind CSS v4**, which adopts a CSS-first configuration approach. All theme customization is done directly in `src/app/globals.css` using the `@theme` directive.

---

## 🎨 Available Tailwind Classes

### Brand Colors

#### Backgrounds
```html
<div class="bg-brand-ivory">
<div class="bg-brand-oxblood">
<div class="bg-brand-gold">
<div class="bg-brand-bronze">
<div class="bg-brand-taupe">
```

#### Text Colors
```html
<h1 class="text-brand-oxblood">
<p class="text-brand-black">
<span class="text-brand-gold">
<span class="text-brand-bronze">
<span class="text-brand-taupe">
<span class="text-brand-ivory">
```

#### Border Colors
```html
<div class="border border-brand-gold">
<div class="border-2 border-brand-oxblood">
<div class="border-brand-bronze">
```

#### Ring/Focus Colors
```html
<button class="ring-2 ring-brand-gold">
<input class="focus:ring-brand-oxblood">
```

---

### Chart Colors

Used for data visualization:

```html
<div class="bg-chart-1"> <!-- Coral -->
<div class="bg-chart-2"> <!-- Teal -->
<div class="bg-chart-3"> <!-- Deep Slate -->
<div class="bg-chart-4"> <!-- Gold -->
<div class="bg-chart-5"> <!-- Peach -->
```

---

### Font Families

```html
<!-- Cormorant Garamond (Headings) -->
<h1 class="font-heading">Elegant Heading</h1>

<!-- Cormorant Garamond (Display) -->
<h2 class="font-display italic">Display Text</h2>

<!-- Inter (Body) -->
<p class="font-body">Body text content</p>
```

---

### Font Sizes (Responsive)

Tailwind's default text size classes now use your custom font sizes:

```html
<p class="text-xs">    <!-- 12px base -->
<p class="text-sm">    <!-- 14px base -->
<p class="text-base">  <!-- 16px base -->
<p class="text-lg">    <!-- 18px base -->
<p class="text-xl">    <!-- 20px base -->
<p class="text-2xl">   <!-- 24px base -->
<p class="text-3xl">   <!-- 30px base -->
<p class="text-4xl">   <!-- 36px base, scales up on larger screens -->
<p class="text-5xl">   <!-- 48px base, scales up on larger screens -->
<p class="text-6xl">   <!-- 60px base, scales up on larger screens -->
<p class="text-7xl">   <!-- 72px base, scales up on larger screens -->
```

**Note:** Font sizes 4xl-7xl automatically scale up on larger screens via CSS media queries.

---

### Spacing Scale

Use custom spacing with margin, padding, gap, etc.:

```html
<!-- Padding -->
<div class="p-spacing-xs">   <!-- 4px -->
<div class="p-spacing-sm">   <!-- 8px -->
<div class="p-spacing-md">   <!-- 16px -->
<div class="p-spacing-lg">   <!-- 24px -->
<div class="p-spacing-xl">   <!-- 32px -->
<div class="p-spacing-2xl">  <!-- 48px -->
<div class="p-spacing-3xl">  <!-- 64px -->
<div class="p-spacing-4xl">  <!-- 96px -->

<!-- Margin -->
<div class="mt-spacing-lg mb-spacing-xl">

<!-- Gap (Flexbox/Grid) -->
<div class="flex gap-spacing-md">
<div class="grid gap-spacing-lg">

<!-- Width/Height -->
<div class="w-spacing-4xl h-spacing-2xl">
```

---

### Border Radius

```html
<div class="rounded-sm">   <!-- 60% of base -->
<div class="rounded-md">   <!-- 80% of base -->
<div class="rounded-lg">   <!-- 100% of base (default) -->
<div class="rounded-xl">   <!-- 140% of base -->
<div class="rounded-2xl">  <!-- 180% of base -->
<div class="rounded-3xl">  <!-- 220% of base -->
<div class="rounded-4xl">  <!-- 260% of base -->
```

---

## 📱 Responsive Breakpoints

Tailwind v4 respects your custom breakpoints:

| Prefix | Min Width | Screen Size |
|--------|-----------|-------------|
| (none) | 0px | Mobile (base) |
| `md:` | 640px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1920px | Wide Desktop |

### Usage Examples

```html
<!-- Responsive padding -->
<div class="px-4 md:px-8 lg:px-12 xl:px-16">

<!-- Responsive text size -->
<h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">

<!-- Responsive layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<!-- Responsive display -->
<div class="hidden md:block">

<!-- Responsive flex direction -->
<div class="flex flex-col md:flex-row">
```

---

## 🎯 Complete Component Examples

### Hero Section

```tsx
<section className="bg-brand-ivory py-spacing-4xl px-spacing-lg">
  <div className="max-w-7xl mx-auto">
    <h1 className="font-display text-brand-oxblood text-5xl md:text-6xl lg:text-7xl font-light italic leading-tight">
      Ratnapur Jewellers
    </h1>
    <p className="font-body text-brand-black text-lg md:text-xl mt-spacing-lg max-w-2xl">
      Timeless elegance crafted with precision and passion
    </p>
    <button className="mt-spacing-xl bg-brand-oxblood text-brand-ivory font-body px-spacing-xl py-spacing-md rounded-lg transition-base hover:opacity-90">
      Explore Collection
    </button>
  </div>
</section>
```

### Product Card

```tsx
<div className="bg-white border border-brand-gold rounded-lg p-spacing-lg transition-base hover:shadow-lg">
  <div className="aspect-square bg-brand-ivory rounded-md mb-spacing-md"></div>
  
  <div className="space-y-spacing-sm">
    <p className="font-body text-brand-bronze text-xs uppercase tracking-wide">
      22K Gold
    </p>
    
    <h3 className="font-heading text-brand-oxblood text-2xl font-light">
      Royal Necklace Set
    </h3>
    
    <p className="font-body text-brand-taupe text-sm">
      Traditional craftsmanship meets modern elegance
    </p>
    
    <div className="flex items-center justify-between pt-spacing-md">
      <span className="font-heading text-brand-oxblood text-xl">₹2,45,000</span>
      <button className="border-2 border-brand-gold text-brand-oxblood font-body px-spacing-md py-spacing-sm rounded transition-base hover:bg-brand-gold hover:text-white">
        View Details
      </button>
    </div>
  </div>
</div>
```

### Navigation Bar

```tsx
<nav className="bg-white border-b border-brand-gold sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-spacing-lg">
    <div className="flex items-center justify-between h-20">
      <div className="font-display text-brand-oxblood text-2xl font-light italic">
        Ratnapur
      </div>
      
      <div className="hidden md:flex items-center gap-spacing-xl">
        <a href="#" className="font-body text-brand-black hover:text-brand-oxblood transition-fast">
          Collections
        </a>
        <a href="#" className="font-body text-brand-black hover:text-brand-oxblood transition-fast">
          About
        </a>
        <a href="#" className="font-body text-brand-black hover:text-brand-oxblood transition-fast">
          Contact
        </a>
      </div>
      
      <button className="bg-brand-oxblood text-brand-ivory font-body px-spacing-lg py-spacing-sm rounded-lg transition-base hover:opacity-90">
        Book Appointment
      </button>
    </div>
  </div>
</nav>
```

### Feature Card

```tsx
<div className="bg-brand-ivory border border-brand-gold rounded-xl p-spacing-xl text-center">
  <div className="w-16 h-16 bg-brand-gold rounded-full mx-auto mb-spacing-md flex items-center justify-center">
    {/* Icon here */}
  </div>
  
  <h4 className="font-heading text-brand-oxblood text-xl font-light mb-spacing-sm">
    Certified Quality
  </h4>
  
  <p className="font-body text-brand-taupe text-sm leading-relaxed">
    Every piece is hallmarked and comes with authenticity certificates
  </p>
</div>
```

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-spacing-lg md:gap-spacing-xl">
  {products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))}
</div>
```

---

## 🔧 Arbitrary Values

Tailwind v4 still supports arbitrary values for one-off customizations:

```html
<!-- Arbitrary colors -->
<div class="bg-[#faf7f2]">

<!-- Arbitrary spacing -->
<div class="mt-[2.375rem]">

<!-- Arbitrary font sizes -->
<h1 class="text-[clamp(2rem,5vw,4rem)]">
```

---

## 💡 Best Practices

### 1. Use Brand Colors Consistently
```tsx
// ✅ Good - Uses brand colors
<button className="bg-brand-oxblood text-brand-ivory">

// ❌ Avoid - Random hex colors
<button className="bg-[#3d0b0b] text-[#faf7f2]">
```

### 2. Use Spacing Scale
```tsx
// ✅ Good - Uses spacing scale
<div className="p-spacing-lg gap-spacing-md">

// ❌ Avoid - Random values
<div className="p-6 gap-4">
```

### 3. Use Font Families Appropriately
```tsx
// ✅ Good - Heading with heading font
<h1 className="font-heading text-brand-oxblood">

// ✅ Good - Body with body font
<p className="font-body text-brand-black">

// ❌ Avoid - Mixing inappropriately
<h1 className="font-body">
```

### 4. Responsive Design
```tsx
// ✅ Good - Mobile-first responsive
<div className="text-base md:text-lg lg:text-xl">

// ✅ Good - Responsive spacing
<section className="py-spacing-xl md:py-spacing-2xl lg:py-spacing-3xl">
```

---

## 📚 Additional Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Design System Documentation](./DESIGN_SYSTEM.md)
- Global CSS Variables: `src/app/globals.css`
- Theme Configuration: `@theme` block in `globals.css`

---

## ⚡ Development Tips

1. **Auto-completion**: VS Code with Tailwind CSS IntelliSense extension will suggest all custom classes
2. **Custom classes**: If you need a custom utility, add it to `@layer utilities` in `globals.css`
3. **Component patterns**: Extract common patterns into reusable components
4. **Responsive testing**: Use browser dev tools to test at different breakpoints

---

**Happy Styling! 💎**
