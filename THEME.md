# 🎨 Theme Customization Guide

## Overview

Your Tailwind setup uses **Tailwind CSS v4** with a centralized theme system. All colors, spacing, typography, and styling can be controlled from **one place**: `/src/app.css`

## 🎯 Quick Start

### Change Brand Colors

Open `/src/app.css` and find the **"🎨 THEME CONFIGURATION"** section at the top:

```css
/* === Brand Colors === */
--brand-primary: oklch(54.6% 0.245 262.881);        /* Main brand color (blue) */
--brand-primary-hover: oklch(42.4% 0.199 265.638);  /* Primary hover state */
--brand-primary-light: oklch(62.3% 0.214 259.815);  /* Lighter primary */

--brand-accent: oklch(57.7% 0.245 27.325);          /* Accent color (red) */
--brand-accent-hover: oklch(50.5% 0.213 27.518);    /* Accent hover */
```

**Example:** Change to green theme:
```css
--brand-primary: oklch(60% 0.19 145);        /* Green */
--brand-primary-hover: oklch(50% 0.19 145);  /* Darker green */
--brand-primary-light: oklch(70% 0.19 145);  /* Lighter green */
```

### Change Neutral Colors (Grays)

```css
/* === Neutral Colors === */
--neutral-50: oklch(98.5% 0.002 247.839);   /* Lightest gray - page background */
--neutral-200: oklch(92.8% 0.006 264.531);  /* Card borders */
--neutral-300: oklch(87.2% 0.01 258.338);   /* Input borders */
--neutral-600: oklch(44.6% 0.03 256.802);   /* Secondary text */
--neutral-900: oklch(21% 0.034 264.665);    /* Primary text */
```

### Change Spacing & Layout

```css
/* === Layout & Spacing === */
--spacing-unit: 0.25rem;        /* Base spacing (4px) - all margins/paddings multiply this */
--container-max: 80rem;         /* Max container width (1280px) */
--radius-lg: 0.5rem;           /* Default border radius */
```

### Change Typography

```css
/* === Typography === */
--font-sans: ui-sans-serif, system-ui, sans-serif;  /* Change font family here */
--text-xl: 1.25rem;            /* Size of large text */
--font-weight-bold: 700;       /* Bold weight */
```

### Change Animations

```css
/* === Transitions & Animations === */
--transition-fast: 150ms;      /* Quick animations */
--transition-base: 200ms;      /* Normal animations */
--transition-slow: 300ms;      /* Slow animations */
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

### Brand Colors → Components Mapping

| Brand Variable | Used In Components |
|----------------|-------------------|
| `--brand-primary` | Links, buttons, prices |
| `--brand-primary-hover` | Link hovers, button hovers |
| `--brand-primary-light` | Focus rings, highlights |
| `--brand-accent` | Error buttons, warnings |

### Neutral Colors → Usage

| Neutral Variable | Purpose |
|-----------------|---------|
| `--neutral-50` | Page background |
| `--neutral-100` | Badge backgrounds, image placeholders |
| `--neutral-200` | Card borders, dividers |
| `--neutral-300` | Input borders |
| `--neutral-400` | Input hover states |
| `--neutral-500` | Muted text |
| `--neutral-600` | Secondary text (brands) |
| `--neutral-700` | Filter labels |
| `--neutral-800` | Headings, emphasis |
| `--neutral-900` | Primary text, body |

## 🔧 Advanced Customization

### Add a New Component Class

Edit `/src/app.css` in the `@layer components` section:

```css
@layer components {
  .my-custom-button {
    background-color: var(--brand-primary);
    color: var(--neutral-white);
    padding: calc(var(--spacing) * 3) calc(var(--spacing) * 6);
    border-radius: var(--radius-lg);
    font-weight: var(--font-weight-semibold);
    transition: background-color var(--transition-fast) var(--transition-ease);
    
    &:hover {
      background-color: var(--brand-primary-hover);
    }
  }
}
```

Then use it in your JSX:
```tsx
<button class="my-custom-button">Click Me</button>
```

### Override for Dark Mode (Future)

Add at the bottom of the theme layer:

```css
@layer theme {
  @media (prefers-color-scheme: dark) {
    :root {
      --neutral-50: oklch(15% 0.01 264);
      --neutral-900: oklch(95% 0.01 264);
      /* ... swap other colors ... */
    }
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
