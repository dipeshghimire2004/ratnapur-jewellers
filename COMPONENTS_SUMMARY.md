# Ratnapur Jewellers - Header & Hero Components

## ✅ What's Been Created

### 1. **Header Component** (`src/components/layout/header.tsx`)
- ✨ Fixed/sticky navigation bar
- 📱 Fully responsive (mobile hamburger menu)
- 🎨 Brand colors: Oxblood background, ivory text, gold hover
- 🔗 Navigation links: Story, Collections, Heritage, Craft, Journal
- 📅 "Private Appointment" CTA button
- ⚡ Smooth animations and transitions

### 2. **Hero Section** (`src/components/sections/hero.tsx`)
- 🎭 Full-screen hero with background (gradient placeholder)
- 📝 Multi-line headline with display font
- 🏷️ Eyebrow text: "Kathmandu · Since Generations"
- 📖 Tagline: "Crafted for Generations. Worn with Grace."
- 🔽 Scroll indicator (desktop only)
- 📱 Fully responsive typography

### 3. **Updated Home Page** (`src/app/page.tsx`)
- Imports and renders Header + Hero components

---

## 📱 Responsive Breakpoints

| Device | Size | Header | Hero Text |
|--------|------|--------|-----------|
| Mobile | < 640px | Hamburger menu | 5xl |
| Tablet | 640px - 1023px | Hamburger menu | 6xl-7xl |
| Desktop | ≥ 1024px | Horizontal nav | 7xl-8xl |

---

## 🎨 Design Features

### Header
- Dark oxblood background with transparency
- Elegant Cormorant Garamond logo
- Clean Inter font for navigation
- Uppercase tracking for sophistication
- Border accents in gold

### Hero
- Full viewport height
- Gradient overlay for text contrast
- Responsive typography scaling
- Brand-aligned color scheme
- Call-to-action button

---

## 🚀 Quick Start

### View the components:
```bash
npm run dev
```

Visit `http://localhost:3000`

### Add your hero image:
1. Place image at `public/hero-image.jpg`
2. Uncomment the image code in `src/components/sections/hero.tsx`

---

## 📝 Customization

### Change Navigation Links
Edit `src/components/layout/header.tsx`:
```tsx
const navLinks = [
  { href: '/story', label: 'STORY' },
  // Add or modify links here
];
```

### Change Hero Content
Edit `src/components/sections/hero.tsx`:
```tsx
// Update the headline, description, or CTA text
```

### Add More Sections
In `src/app/page.tsx`:
```tsx
<main>
  <Hero />
  {/* Add new sections here */}
</main>
```

---

## 📚 Documentation

- **Complete Guide:** [HEADER_HERO_GUIDE.md](./HEADER_HERO_GUIDE.md)
- **Design System:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- **Quick Reference:** [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)

---

## ✨ Features

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader friendly

### Performance
- ✅ Minimal JavaScript
- ✅ Optimized CSS (Tailwind)
- ✅ No external dependencies (except Lucide icons)

### Responsive
- ✅ Mobile-first design
- ✅ Touch-friendly interactions
- ✅ Fluid typography
- ✅ Adaptive layouts

---

## 🎯 Next Steps

1. ✅ **Add hero image** to `public/hero-image.jpg`
2. ⬜ Create collection pages
3. ⬜ Build product catalog
4. ⬜ Add contact/appointment form
5. ⬜ Create footer component
6. ⬜ Add more landing sections

---

**Your elegant jewelry website header is ready! 💎**
