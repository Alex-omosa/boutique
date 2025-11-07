# 🎨 Quick Theme Examples

## How to Change Colors

Open `/src/app.css` and find the **`@theme`** block near the top (starts around line 9).

All you need to do is change the color values in that block. Here are some ready-to-use themes:

---

## 🟢 Green/Eco Theme

Replace the primary colors with:

```css
@theme {
  --color-primary-*: initial;
  --color-primary-400: oklch(70% 0.19 145);   /* Light green */
  --color-primary-500: oklch(60% 0.19 145);   /* Medium green */
  --color-primary-600: oklch(55% 0.19 145);   /* Main green */
  --color-primary-700: oklch(48% 0.19 145);   /* Dark green */
  --color-primary-800: oklch(40% 0.19 145);   /* Darker green */
  
  --color-accent-600: oklch(68% 0.18 65);     /* Lime accent */
  --color-accent-700: oklch(58% 0.18 65);     /* Darker lime */
}
```

**Result:** Green navigation links, green prices, green buttons

---

## 🟣 Purple/Modern Theme

Replace the primary colors with:

```css
@theme {
  --color-primary-*: initial;
  --color-primary-400: oklch(70% 0.22 300);   /* Light purple */
  --color-primary-500: oklch(60% 0.22 300);   /* Medium purple */
  --color-primary-600: oklch(55% 0.22 300);   /* Main purple */
  --color-primary-700: oklch(45% 0.22 300);   /* Dark purple */
  --color-primary-800: oklch(38% 0.22 300);   /* Darker purple */
  
  --color-accent-600: oklch(65% 0.25 330);    /* Magenta accent */
  --color-accent-700: oklch(55% 0.25 330);    /* Darker magenta */
}
```

**Result:** Purple navigation links, purple prices, purple focus states

---

## 🟠 Orange/Energetic Theme

Replace the primary colors with:

```css
@theme {
  --color-primary-*: initial;
  --color-primary-400: oklch(75% 0.19 45);    /* Light orange */
  --color-primary-500: oklch(68% 0.19 45);    /* Medium orange */
  --color-primary-600: oklch(62% 0.19 45);    /* Main orange */
  --color-primary-700: oklch(52% 0.19 45);    /* Dark orange */
  --color-primary-800: oklch(45% 0.19 45);    /* Darker orange */
  
  --color-accent-600: oklch(55% 0.24 25);     /* Red-orange accent */
  --color-accent-700: oklch(45% 0.24 25);     /* Darker red-orange */
}
```

**Result:** Orange navigation links, orange prices, orange accents

---

## ⚫ Dark Mode Theme

Replace both primary and neutral colors:

```css
@theme {
  /* Brighter colors for dark background */
  --color-primary-*: initial;
  --color-primary-400: oklch(80% 0.19 250);
  --color-primary-500: oklch(75% 0.19 250);
  --color-primary-600: oklch(70% 0.19 250);   /* Brighter blue */
  --color-primary-700: oklch(80% 0.19 250);   /* Even brighter on hover */
  --color-primary-800: oklch(85% 0.19 250);
  
  /* Inverted neutrals */
  --color-neutral-*: initial;
  --color-neutral-50: oklch(15% 0.01 264);    /* Dark background */
  --color-neutral-100: oklch(18% 0.01 264);
  --color-neutral-200: oklch(25% 0.01 264);   /* Dark borders */
  --color-neutral-300: oklch(35% 0.01 264);
  --color-neutral-400: oklch(45% 0.01 264);
  --color-neutral-500: oklch(55% 0.01 264);
  --color-neutral-600: oklch(65% 0.01 264);   /* Light secondary text */
  --color-neutral-700: oklch(75% 0.01 264);
  --color-neutral-800: oklch(85% 0.01 264);   /* Light headings */
  --color-neutral-900: oklch(95% 0.01 264);   /* Lightest text */
}
```

**Result:** Complete dark theme with light text on dark background

---

## 🌸 Pink/Soft Theme

Replace the primary colors with:

```css
@theme {
  --color-primary-*: initial;
  --color-primary-400: oklch(75% 0.18 350);   /* Light pink */
  --color-primary-500: oklch(68% 0.18 350);   /* Medium pink */
  --color-primary-600: oklch(60% 0.18 350);   /* Main pink */
  --color-primary-700: oklch(50% 0.18 350);   /* Dark pink */
  --color-primary-800: oklch(42% 0.18 350);   /* Darker pink */
  
  --color-accent-600: oklch(55% 0.20 10);     /* Rose accent */
  --color-accent-700: oklch(45% 0.20 10);     /* Darker rose */
}
```

**Result:** Pink navigation links, pink prices, rose accents

---

## 💙 Sky Blue/Professional Theme

Replace the primary colors with:

```css
@theme {
  --color-primary-*: initial;
  --color-primary-400: oklch(75% 0.15 220);   /* Light sky */
  --color-primary-500: oklch(68% 0.15 220);   /* Medium sky */
  --color-primary-600: oklch(60% 0.15 220);   /* Main sky blue */
  --color-primary-700: oklch(50% 0.15 220);   /* Dark sky */
  --color-primary-800: oklch(42% 0.15 220);   /* Darker sky */
  
  --color-accent-600: oklch(58% 0.18 180);    /* Teal accent */
  --color-accent-700: oklch(48% 0.18 180);    /* Darker teal */
}
```

**Result:** Sky blue links, sky blue prices, teal accents

---

## 🔥 How to Apply

1. Open `/src/app.css`
2. Find the `@theme {` block (around line 9)
3. Copy one of the themes above
4. Replace the existing `--color-primary-*` or `--color-neutral-*` values
5. Save the file
6. Your dev server will auto-reload with the new theme!

---

## 🎨 Color Picker

Use [OKLCH Color Picker](https://oklch.com/) to create custom colors:

1. Move the color picker to your desired hue
2. Adjust lightness and chroma
3. Copy the `oklch()` value
4. Paste into your theme

**Tips:**
- Keep lightness between 40-70% for primary-600 (main color)
- Use higher lightness (60-75%) for primary-400 (lighter)
- Use lower lightness (30-50%) for primary-800 (darker)
- Chroma 0.15-0.25 gives vibrant but not oversaturated colors

---

## 🚀 Advanced: Warm vs Cool Grays

### Warm Grays (Brown tint - hue ~40)
```css
@theme {
  --color-neutral-200: oklch(92% 0.01 40);   /* Warm border */
  --color-neutral-600: oklch(45% 0.02 40);   /* Warm text */
}
```

### Cool Grays (Blue tint - hue ~240)
```css
@theme {
  --color-neutral-200: oklch(92% 0.01 240);  /* Cool border */
  --color-neutral-600: oklch(45% 0.02 240);  /* Cool text */
}
```

### True Neutral Grays (No hue)
```css
@theme {
  --color-neutral-200: oklch(92% 0 0);       /* No color tint */
  --color-neutral-600: oklch(45% 0 0);       /* Pure gray */
}
```

---

## 📐 Other Quick Customizations

### Increase Spacing (More Spacious)
```css
@theme {
  --spacing-4: 1.2rem;   /* From 1rem (increases by 20%) */
  --spacing-6: 1.8rem;   /* From 1.5rem */
  --spacing-8: 2.4rem;   /* From 2rem */
}
```

### Rounder Corners
```css
@theme {
  --radius-lg: 1rem;     /* From 0.5rem (much rounder) */
  --radius-xl: 1.5rem;   /* From 0.75rem */
}
```

### Faster Animations
```css
@theme {
  --transition-duration-fast: 100ms;   /* From 150ms */
  --transition-duration-base: 150ms;   /* From 200ms */
  --transition-duration-slow: 250ms;   /* From 300ms */
}
```

---

## 💡 Pro Tip

Use utility classes directly in JSX now that you have the theme configured:

```tsx
{/* Before: Using component class */}
<div class="product-card">...</div>

{/* After: Using Tailwind utilities with your theme */}
<div class="bg-white border border-neutral-200 rounded-lg p-5 hover:shadow-lg">
  <h3 class="text-lg font-semibold text-neutral-900">
    Product Name
  </h3>
  <p class="text-xl font-bold text-primary-600">
    $29.99
  </p>
</div>
```

Both work! The `@theme` configuration makes utilities like `text-primary-600` and `bg-neutral-200` available throughout your app.
