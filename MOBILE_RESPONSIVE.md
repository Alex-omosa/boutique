# 📱 Mobile Responsive Design Guide

## Overview

This application is fully responsive and optimized for mobile, tablet, and desktop devices. All interactive elements follow WCAG AA accessibility guidelines with proper touch targets and responsive breakpoints.

---

## 🎯 Key Features

### ✅ Mobile-First Design
- Starts with mobile layout, progressively enhances for larger screens
- Flexible grid system adapts to all screen sizes
- Touch-optimized interactions throughout

### ✅ Accessibility Standards
- **44px minimum tap targets** (WCAG AA compliance)
- Proper focus states and keyboard navigation
- Screen reader friendly with ARIA labels
- No tap highlight flashes on mobile

### ✅ Performance
- Hardware-accelerated animations
- Smooth 60fps scrolling
- Optimized images with lazy loading
- Minimal layout shifts

---

## 📐 Breakpoint System

| Breakpoint | Width | Description | Grid Columns |
|------------|-------|-------------|--------------|
| Mobile (xs) | < 480px | Phones portrait | 1 column |
| Small (sm) | ≥ 480px (30rem) | Phones landscape | 2 columns |
| Tablet (md) | ≥ 768px (48rem) | Tablets | 2 columns |
| Desktop (lg) | ≥ 1024px (64rem) | Laptops/Desktops | 3 columns |
| Wide (xl) | ≥ 1440px (90rem) | Large displays | 4 columns |

---

## 🎨 Component Breakdown

### 1. Filter Sidebar (Mobile Drawer)

**Mobile Behavior (< 1024px):**
```
┌─────────────────────┐
│  [📱 Filters Button] │
│                      │
│    Product Grid     │
│                      │
└─────────────────────┘

When opened:
┌─────────────┬────────┐
│   Filters   │ ▓▓▓▓▓▓ │
│             │ ▓▓▓▓▓▓ │
│ [X] Close   │ ▓▓▓▓▓▓ │ ← Backdrop
│             │ ▓▓▓▓▓▓ │
│ • Gender    │ ▓▓▓▓▓▓ │
│ • Category  │ ▓▓▓▓▓▓ │
│ • Colors    │ ▓▓▓▓▓▓ │
└─────────────┴────────┘
```

**Desktop Behavior (≥ 1024px):**
```
┌──────────┬─────────────────────┐
│ Filters  │   Product Grid      │
│          │                     │
│ Gender   │  [Card] [Card] [Card]│
│ Category │                     │
│ Colors   │  [Card] [Card] [Card]│
│          │                     │
└──────────┴─────────────────────┘
```

**Implementation:**
- **Drawer:** Fixed position, slides in from left
- **Animation:** `slideInLeft` (200ms ease-out)
- **Backdrop:** Semi-transparent overlay (rgba(0,0,0,0.5))
- **Width:** 85% viewport width, max 384px
- **Scroll:** Drawer content scrollable independently

**CSS Classes:**
```css
.filter-toggle-button  /* Mobile button - hidden on desktop */
.filter-sidebar-desktop  /* Desktop sidebar - hidden on mobile */
.filter-drawer  /* Mobile drawer */
.filter-backdrop  /* Dark overlay */
.filter-drawer-header  /* Drawer header with close button */
.filter-drawer-content  /* Scrollable content area */
```

---

### 2. Product Grid

**Responsive Layout:**

| Screen Size | Columns | Gap | Padding |
|-------------|---------|-----|---------|
| < 480px | 1 | 16px | 16px |
| ≥ 480px | 2 | 20px | 16px |
| ≥ 768px | 2 | 24px | 24px |
| ≥ 1024px | 3 | 24px | 32px |
| ≥ 1440px | 4 | 24px | 32px |

**Grid Template:**
```css
.product-grid {
  display: grid;
  gap: var(--spacing-4);
  grid-template-columns: repeat(1, minmax(0, 1fr));  /* Mobile */
  
  @media (width >= 30rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));  /* 2 columns */
  }
  
  @media (width >= 64rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));  /* 3 columns */
  }
  
  @media (width >= 90rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));  /* 4 columns */
  }
}
```

---

### 3. Product Cards

**Touch Optimizations:**
- **Padding:** 16px mobile → 20px tablet+
- **Tap target:** Entire card is tappable
- **Active state:** Scales down to 98% on tap
- **Hover:** Only applies on devices with hover capability
- **Border highlight:** Changes to primary color on active

**States:**
```css
.product-card {
  padding: var(--spacing-4);  /* 16px mobile */
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    @media (hover: hover) {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
  }
  
  &:active {
    transform: scale(0.98);
    border-color: var(--color-primary-300);
  }
}
```

---

### 4. Filter Checkboxes

**Touch-Friendly Design:**
- **Checkbox size:** 20x20px (visible and easy to tap)
- **Label area:** Full 44px minimum height
- **Spacing:** 12px gap between checkbox and label
- **Hit area:** Entire label is clickable

**Visual States:**
```css
.filter-option {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);  /* 12px */
  min-height: 44px;
  padding: var(--spacing-3);  /* 12px padding */
  border-radius: var(--radius-md);
  
  &:active {
    background-color: var(--color-neutral-100);
  }
}

.filter-checkbox {
  width: 20px;
  height: 20px;
  border-width: 2px;
  flex-shrink: 0;  /* Prevents squishing */
}
```

---

### 5. Search Input

**Mobile Optimizations:**
- **Min height:** 44px (touch-friendly)
- **Font size:** 16px (prevents zoom on iOS)
- **Border:** 2px for better visibility
- **Padding:** 16px mobile → 20px tablet+

**iOS-Specific:**
```css
.search-input {
  min-height: 44px;
  font-size: var(--font-size-base);  /* 16px - prevents iOS zoom */
  -webkit-appearance: none;  /* Remove default iOS styling */
  
  &::placeholder {
    color: var(--color-neutral-400);
  }
}
```

---

### 6. Navigation

**Sticky Header:**
- **Position:** Sticky at top (z-index: 30)
- **Background:** White with subtle shadow
- **Links:** 44px minimum height with padding
- **Responsive padding:** Increases with screen size

**Mobile vs Desktop:**
```css
.mobile-nav {
  position: sticky;
  top: 0;
  z-index: 30;
  background-color: white;
  border-bottom: 1px solid var(--color-neutral-200);
}

.nav-link {
  min-height: 44px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  
  &:active {
    background-color: var(--color-primary-100);
  }
}
```

---

## 🎬 Animation Details

### Filter Drawer Animations

**Backdrop Fade In:**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.filter-backdrop {
  animation: fadeIn 150ms ease-out;
}
```

**Drawer Slide In:**
```css
@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.filter-drawer {
  animation: slideInLeft 200ms ease-out;
}
```

---

## 📏 Spacing Scale

Consistent spacing across all breakpoints using CSS custom properties:

```css
@theme {
  --spacing-0: 0;
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
}
```

**Usage Pattern:**
- **Mobile:** Spacing-4 (16px) for most padding
- **Tablet:** Spacing-5 to Spacing-6 (20-24px)
- **Desktop:** Spacing-6 to Spacing-8 (24-32px)

---

## 🎯 Touch Target Guidelines

All interactive elements meet WCAG AA standards:

| Element | Min Size | Mobile Size | Desktop Size |
|---------|----------|-------------|--------------|
| Buttons | 44x44px | 44x44px | 44x44px |
| Checkboxes | 44x44px | 20px checkbox + 44px label area | Same |
| Links | 44x44px | 44x44px with padding | Same |
| Cards | - | Full card tappable | Hover enabled |
| Form inputs | 44px height | 44px | 44px |

---

## 🔧 Implementation Details

### Viewport Meta Tag

```html
<meta 
  name="viewport" 
  content="width=device-width, initial-scale=1.0, maximum-scale=5.0" 
/>
```

**Why maximum-scale=5.0?**
- Allows users to zoom for accessibility
- Prevents automatic zoom on input focus (iOS)
- Maintains usability for vision-impaired users

### Preventing iOS Zoom on Input Focus

```css
.search-input {
  font-size: var(--font-size-base);  /* 16px or larger */
}
```

iOS Safari automatically zooms inputs with font-size < 16px. We use 16px to prevent this.

### Tap Highlight Removal

```css
.product-card,
.filter-option,
.nav-link {
  -webkit-tap-highlight-color: transparent;
}
```

Removes the blue flash on tap, replaced with custom active states.

### Hover Media Query

```css
&:hover {
  @media (hover: hover) {
    /* Hover styles */
  }
}
```

Only applies hover effects on devices that support hovering (desktops). Prevents sticky hover states on touch devices.

---

## 📱 Testing Checklist

### Mobile (320px - 767px)
- [ ] Filter drawer opens/closes smoothly
- [ ] All tap targets are 44x44px minimum
- [ ] Text is readable without zooming
- [ ] Images load properly
- [ ] No horizontal scrolling
- [ ] Product grid shows 1-2 columns
- [ ] Navigation is accessible
- [ ] Search input doesn't cause zoom (iOS)

### Tablet (768px - 1023px)
- [ ] Filter drawer still works
- [ ] Product grid shows 2 columns
- [ ] Spacing feels appropriate
- [ ] Typography scales nicely
- [ ] Images maintain aspect ratio

### Desktop (1024px+)
- [ ] Filter sidebar always visible
- [ ] Product grid shows 3-4 columns
- [ ] Hover effects work
- [ ] Layout uses available space
- [ ] No unnecessary white space

### Touch Devices
- [ ] No tap delay
- [ ] Active states visible on tap
- [ ] Smooth scrolling
- [ ] Drawer swipe feels natural
- [ ] Checkboxes easy to tap
- [ ] Links don't require precision

### Accessibility
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader announces drawer state
- [ ] Color contrast meets WCAG AA
- [ ] Can zoom up to 5x

---

## 🚀 Performance Tips

### Images
```jsx
<img 
  src={imageUrl} 
  alt={productName}
  loading="lazy"  /* Lazy load off-screen images */
  class="product-image"
/>
```

### Animations
All animations use `transform` and `opacity` (GPU-accelerated):
- ✅ `transform: translateX()` - Drawer slide
- ✅ `transform: scale()` - Active states
- ✅ `opacity` - Fade effects
- ❌ Avoid animating: `width`, `height`, `top`, `left`

### Scroll Performance
```css
.filter-drawer-content {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;  /* iOS momentum scrolling */
}
```

---

## 🐛 Common Issues & Solutions

### Issue: Input Zooms on iOS
**Solution:** Use 16px or larger font-size
```css
.search-input {
  font-size: 16px;  /* Minimum to prevent zoom */
}
```

### Issue: Sticky Hover on Touch
**Solution:** Use hover media query
```css
&:hover {
  @media (hover: hover) {
    /* Only on devices with hover */
  }
}
```

### Issue: Drawer Doesn't Scroll
**Solution:** Set proper overflow
```css
.filter-drawer-content {
  flex: 1;
  overflow-y: auto;
}
```

### Issue: Tap Delay on Mobile
**Solution:** Remove tap highlight, add instant active state
```css
.product-card {
  -webkit-tap-highlight-color: transparent;
  
  &:active {
    transform: scale(0.98);
  }
}
```

---

## 📊 Browser Support

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome Mobile | 90+ | ✅ Full support |
| Safari iOS | 14+ | ✅ Full support with -webkit prefixes |
| Firefox Mobile | 90+ | ✅ Full support |
| Samsung Internet | 14+ | ✅ Full support |
| Edge Mobile | 90+ | ✅ Full support |

**Fallbacks:**
- CSS Grid: Widely supported, no fallback needed
- Flexbox: Universal support
- Custom properties: IE11 not supported (graceful degradation)

---

## 🎨 Customization

### Change Mobile Breakpoint
```css
/* Change when drawer becomes sidebar */
@media (width >= 64rem) {  /* Change 64rem to your preference */
  .filter-sidebar-desktop {
    display: block;
  }
  
  .filter-toggle-button {
    display: none;
  }
}
```

### Adjust Grid Columns
```css
.product-grid {
  /* Your custom breakpoints */
  @media (width >= 768px) {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns on tablet */
  }
}
```

### Modify Drawer Width
```css
.filter-drawer {
  width: 85%;  /* Change percentage */
  max-width: 24rem;  /* Change max width */
}
```

---

## ✨ Best Practices Summary

1. **Touch Targets:** 44x44px minimum for all interactive elements
2. **Font Size:** 16px minimum on inputs to prevent iOS zoom
3. **Animations:** Use transform and opacity for 60fps performance
4. **Hover:** Wrap in `@media (hover: hover)` to avoid sticky states
5. **Tap Highlight:** Remove with custom active states
6. **Viewport:** Set proper meta tag with max-scale for accessibility
7. **Spacing:** Use consistent spacing scale across breakpoints
8. **Grid:** Mobile-first, progressive enhancement
9. **Testing:** Test on real devices, not just DevTools
10. **Accessibility:** Ensure keyboard navigation and screen reader support

---

## 📚 Related Documentation

- **[THEME.md](./THEME.md)** - Theme customization guide
- **[THEME_EXAMPLES.md](./THEME_EXAMPLES.md)** - Ready-to-use themes
- **[README_STYLING.md](./README_STYLING.md)** - Styling system overview
- **[THEME_CONFIG_EXPLAINED.md](./THEME_CONFIG_EXPLAINED.md)** - @theme directive guide

---

## 🙋 FAQ

**Q: Why does the filter button disappear on desktop?**  
A: On screens ≥1024px wide, there's enough space to show the sidebar permanently, so the button is hidden.

**Q: Can I change when the drawer becomes a sidebar?**  
A: Yes! Modify the `@media (width >= 64rem)` breakpoint in the CSS to your preferred width.

**Q: Why 44px minimum for tap targets?**  
A: WCAG AA guidelines recommend 44x44px minimum for touch targets to accommodate users with motor disabilities.

**Q: The drawer animation feels slow/fast, how do I adjust?**  
A: Change `--transition-duration-base` in the @theme block, or modify the animation duration directly in the CSS.

**Q: Can I make the product grid show more columns on mobile?**  
A: Yes, but not recommended. Mobile screens are too narrow for 3+ columns while maintaining readability.

---

**Happy Mobile Development!** 📱✨
