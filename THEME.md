# 🎨 Theme Customization Guide

## Overview

Your Tailwind setup uses **Tailwind CSS v4** with the modern `@theme` directive for centralized configuration. All colors, spacing, typography, and styling can be controlled from **one place**: `/src/app.css`

## 🎯 Quick Start

### Change Brand Colors

Open `/src/app.css` and find the **`@theme`** block near the top:

```css
@theme {
  /* === COLORS === */
  --color-primary-500: oklch(54.6% 0.245 262.881);  /* Main brand color */
  --color-primary-600: oklch(54.6% 0.245 262.881);
  --color-primary-700: oklch(45% 0.21 265);
  --color-primary-800: oklch(42.4% 0.199 265.638);
}
```

**Example:** Change to green theme:
```css
@theme {
  --color-primary-500: oklch(65% 0.19 145);  /* Light green */
  --color-primary-600: oklch(55% 0.19 145);  /* Main green */
  --color-primary-700: oklch(48% 0.19 145);  /* Medium green */
  --color-primary-800: oklch(40% 0.19 145);  /* Dark green */
}
```

### Change Neutral Colors (Grays)

```css
@theme {
  --color-neutral-50: oklch(98.5% 0.002 247.839);   /* Lightest - background */
  --color-neutral-200: oklch(92.8% 0.006 264.531);  /* Card borders */
  --color-neutral-300: oklch(87.2% 0.01 258.338);   /* Input borders */
  --color-neutral-600: oklch(44.6% 0.03 256.802);   /* Secondary text */
  --color-neutral-900: oklch(21% 0.034 264.665);    /* Primary text */
}
```

### Change Spacing & Layout

```css
@theme {
  /* === SPACING === */
  --spacing-4: 1rem;           /* Base spacing unit */
  --spacing-6: 1.5rem;         /* Medium spacing */
  --spacing-8: 2rem;           /* Large spacing */
  
  /* === CONTAINERS === */
  --container-max-width: 80rem; /* Max container width (1280px) */
  
  /* === BORDER RADIUS === */
  --radius-lg: 0.5rem;         /* Default border radius */
}
```

### Change Typography

```css
@theme {
  /* === TYPOGRAPHY === */
  --font-family-sans: ui-sans-serif, system-ui, sans-serif;
  --font-size-xl: 1.25rem;            /* Size of large text */
  --font-weight-bold: 700;            /* Bold weight */
}
```

### Change Animations

```css
@theme {
  /* === TRANSITIONS === */
  --transition-duration-fast: 150ms;   /* Quick animations */
  --transition-duration-base: 200ms;   /* Normal animations */
  --transition-duration-slow: 300ms;   /* Slow animations */
}
```

## 📦 Component Classes Available

Instead of writing utility classes in JSX, use these semantic component classes:

### Navigation
- `.nav-link` - Navigation links with hover effects

### Search & Filters
- `.search-input` - Search input with focus states
- `.filter-sidebar` - Filter sidebar container
- `.filter-section` - Filter category section
- `.filter-title` - Filter category title
- `.filter-option` - Individual filter option
- `.filter-checkbox` - Filter checkbox
- `.filter-label` - Filter label text

### Products
- `.product-grid` - Responsive product grid (auto-adjusts columns)
- `.product-card` - Individual product card with hover effects
- `.product-images` - Image container (1:1 aspect ratio)
- `.product-image` - Product image with zoom on hover
- `.image-placeholder` - Placeholder when no image
- `.product-name` - Product title
- `.product-brand` - Brand name
- `.product-details` - Details container
- `.product-badge` - Category/season badges
- `.product-price` - Price display

### Layout
- `.page-container` - Main page container with max-width
- `.page-title` - Page heading (h1)
- `.section-title` - Section heading (h2)
- `.layout-flex` - Responsive flex layout (column → row)
- `.sidebar-column` - Sidebar column
- `.content-column` - Main content column

### States
- `.loading-state` - Loading indicator
- `.loading-text` - Loading text
- `.error-state` - Error message container
- `.error-text` - Error message text
- `.error-button` - Retry button
- `.empty-state` - No results state
- `.empty-title` - No results title
- `.empty-subtitle` - No results subtitle

### Results
- `.results-header` - Results header bar
- `.results-count` - Results count text

## 🎨 Color System Architecture

### Theme Token Structure

The `@theme` directive creates a palette-based color system. You can now use:
- Utility classes like `bg-primary-600`, `text-neutral-900`, `border-accent-500`
- Component classes that reference these tokens internally

### Color Scale Guide

| Token | Lightness | Purpose |
|-------|-----------|---------|
| `*-50` | 97-98% | Lightest backgrounds |
| `*-100` | 93-96% | Light backgrounds |
| `*-200` | 85-92% | Borders, dividers |
| `*-300` | 75-87% | Disabled states |
| `*-400` | 65-75% | Placeholder text |
| `*-500` | 55-65% | Secondary elements |
| `*-600` | 45-55% | **Primary** (main brand color) |
| `*-700` | 40-48% | Hover states |
| `*-800` | 35-42% | Active states |
| `*-900` | 30-38% | Text emphasis |

### Usage Examples

```css
/* In @theme block - Define the palette */
@theme {
  --color-primary-600: oklch(55% 0.19 145);  /* Main green */
}

/* In components - Use the palette */
.my-button {
  background-color: var(--color-primary-600);
  color: white;
}
```

Or use Tailwind utilities directly in JSX:
```tsx
<button class="bg-primary-600 text-white hover:bg-primary-700">
  Click me
</button>
```

## 🔧 Advanced Customization

### Add a New Color to the Theme

```css
@theme {
  --color-brand-*: initial;
  --color-brand-500: oklch(60% 0.18 280);  /* Custom purple */
  --color-brand-600: oklch(55% 0.18 280);
  --color-brand-700: oklch(48% 0.18 280);
}
```

Now use it in components or utilities:
```tsx
<div class="bg-brand-600 text-white">Custom color!</div>
```

### Add a New Component Class

Edit `/src/app.css` in the `@layer components` section:

```css
@layer components {
  .my-custom-button {
    background-color: var(--color-primary-600);
    color: white;
    padding: var(--spacing-3) var(--spacing-6);
    border-radius: var(--radius-lg);
    font-weight: var(--font-weight-semibold);
    transition: background-color var(--transition-duration-fast);
    
    &:hover {
      background-color: var(--color-primary-700);
    }
  }
}
```

Then use it in your JSX:
```tsx
<button class="my-custom-button">Click Me</button>
```

### Override for Dark Mode

Add dark mode overrides in the `@theme` block:

```css
@theme {
  /* Light mode colors (default) */
  --color-neutral-50: oklch(98% 0.002 247);
  --color-neutral-900: oklch(21% 0.034 264);
  
  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    --color-neutral-50: oklch(15% 0.01 264);      /* Dark background */
    --color-neutral-900: oklch(95% 0.01 264);     /* Light text */
    --color-primary-600: oklch(70% 0.19 260);     /* Brighter for dark bg */
  }
}
```

## 💡 Benefits of This Setup

1. **Single Source of Truth** - All colors in one place at the top of `app.css`
2. **Semantic Classes** - Use `.product-card` instead of `class="rounded-lg border border-gray-200 bg-white p-5 ..."`
3. **Easy Theming** - Change brand colors once, updates everywhere
4. **Type-Safe** - Color variables prevent typos
5. **Maintainable** - Easy to see what each component looks like
6. **Consistent** - All components use the same design tokens

## 🚀 Quick Theme Examples

### Example 1: Dark Blue Theme
```css
--brand-primary: oklch(45% 0.18 240);
--neutral-50: oklch(15% 0.01 240);
--neutral-900: oklch(95% 0.01 240);
```

### Example 2: Purple Theme
```css
--brand-primary: oklch(55% 0.22 300);
--brand-primary-hover: oklch(45% 0.22 300);
```

### Example 3: Warmer Neutrals
```css
--neutral-200: oklch(92% 0.01 40);  /* Warm gray borders */
--neutral-600: oklch(45% 0.02 40);  /* Warm gray text */
```

## 📝 Notes

- Colors use **OKLCH** format for better perceptual uniformity
- Format: `oklch(lightness% chroma hue)`
- Lightness: 0-100% (dark to light)
- Chroma: 0-0.4 (gray to vibrant)
- Hue: 0-360 (color wheel)
- Use tools like [OKLCH Color Picker](https://oklch.com/) to choose colors

## 🔗 Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [OKLCH Color Picker](https://oklch.com/)
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
