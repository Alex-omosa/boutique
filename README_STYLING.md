# ✨ Styling System Overview

## 🎯 Goal Achieved: Centralized Theme Control

Your Tailwind CSS v4 setup uses the **`@theme` directive** for centralized theme configuration. Control all styling from one place without bloated utility classes in JSX.

---

## 📍 Where to Edit

### One File to Rule Them All: `/src/app.css`

```
/src/app.css
  ├── @theme { } (Lines 9-126)
  │   ├── Colors (primary, accent, neutral, semantic)
  │   ├── Spacing (padding, margin scales)
  │   ├── Typography (font sizes, weights, families)
  │   ├── Border Radius
  │   └── Transitions
  │
  └── @layer components (Lines 364+)
      └── Pre-built semantic classes for all UI elements
```

---

## 🎨 How It Works

### Before (❌ Too Many Classes in JSX)
```tsx
<div class="rounded-lg border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-gray-300 hover:shadow-lg">
  <h3 class="text-lg font-semibold text-gray-900 mb-2">
    Product Name
  </h3>
  <p class="text-xl font-bold text-blue-600">
    $29.99
  </p>
</div>
```

### After (✅ Clean Semantic Classes)
```tsx
<div class="product-card">
  <h3 class="product-name">
    Product Name
  </h3>
  <p class="product-price">
    $29.99
  </p>
</div>
```

**All styling is defined in `/src/app.css`** ✨

---

## 🚀 Quick Start Examples

### Example 1: Change Brand Color to Green

**Edit:** `/src/app.css` in the `@theme` block

```css
/* Before */
@theme {
  --color-primary-600: oklch(54.6% 0.245 262.881);  /* Blue */
}

/* After */
@theme {
  --color-primary-600: oklch(55% 0.19 145);         /* Green */
  --color-primary-700: oklch(48% 0.19 145);         /* Darker green */
  --color-primary-800: oklch(40% 0.19 145);         /* Even darker */
}
```

**Result:** Navigation links, prices, and all blue elements become green **everywhere** 🎉  
**Utilities available:** `text-primary-600`, `bg-primary-600`, `border-primary-600`

---

### Example 2: Change Background Color

**Edit:** `/src/app.css` in the `@theme` block

```css
/* Before */
@theme {
  --color-neutral-50: oklch(98.5% 0.002 247.839);  /* Light gray */
}

/* After */
@theme {
  --color-neutral-50: oklch(97% 0.02 45);          /* Warm beige */
}
```

**Result:** Page background changes to warm beige **everywhere** 🎉  
**Utilities available:** `bg-neutral-50`

---

### Example 3: Make Everything More Rounded

**Edit:** `/src/app.css` in the `@theme` block

```css
/* Before */
@theme {
  --radius-lg: 0.5rem;
}

/* After */
@theme {
  --radius-lg: 1rem;
}
```

**Result:** Cards, inputs, images all get rounder corners **everywhere** 🎉  
**Utilities available:** `rounded-lg`

---

## 📦 Available Component Classes

Instead of utilities, use these semantic classes in your JSX:

| Component | Class | Usage |
|-----------|-------|-------|
| **Navigation** | `.nav-link` | Navigation links |
| **Search** | `.search-input` | Search input field |
| **Filters** | `.filter-sidebar` | Filter sidebar container |
| | `.filter-section` | Filter category |
| | `.filter-option` | Individual filter |
| **Products** | `.product-grid` | Responsive grid |
| | `.product-card` | Product card |
| | `.product-image` | Product image |
| | `.product-name` | Product title |
| | `.product-price` | Product price |
| | `.product-badge` | Category badges |
| **Layout** | `.page-container` | Main container |
| | `.page-title` | Page heading |
| | `.layout-flex` | Flex layout |
| **States** | `.loading-state` | Loading spinner |
| | `.error-state` | Error messages |
| | `.empty-state` | Empty results |

**See `THEME.md` for complete list** 📚

---

## 🎨 Theme Examples

Ready-to-use themes in `THEME_EXAMPLES.md`:

1. 🟢 **Green/Eco** - Forest green for eco brands
2. 🟣 **Purple/Modern** - Contemporary purple theme
3. 🟠 **Orange/Energetic** - Bold orange theme
4. ⚫ **Dark Mode** - Full dark theme
5. 🌸 **Pink/Soft** - Gentle pink theme
6. 💙 **Sky Blue** - Professional blue theme

Copy-paste any theme into `/src/app.css` ⚡

---

## 🛠️ Common Customizations

### Change All Colors
Edit the `@theme` block in `/src/app.css`:
```css
@theme {
  --color-primary-600: oklch(55% 0.19 145);  /* Your brand color */
  --color-accent-600: oklch(65% 0.22 280);   /* Your accent color */
}
```

### Change Text Colors
Edit neutral colors in `@theme`:
```css
@theme {
  --color-neutral-900: oklch(15% 0.03 260);  /* Darker text */
  --color-neutral-600: oklch(50% 0.03 260);  /* Secondary text */
}
```

### Change Spacing
Edit spacing scale in `@theme`:
```css
@theme {
  --spacing-4: 1.2rem;  /* Increase base spacing */
  --spacing-6: 1.8rem;  /* Increase medium spacing */
}
```

### Change Font
Edit font family in `@theme`:
```css
@theme {
  --font-family-sans: 'Inter', system-ui, sans-serif;
}
```

### Change Animation Speed
Edit transition duration in `@theme`:
```css
@theme {
  --transition-duration-fast: 100ms;
  --transition-duration-base: 150ms;
}
```

---

## 💡 Key Benefits

✅ **Tailwind v4 `@theme` Directive** - Modern CSS-first configuration  
✅ **Single Source of Truth** - All design tokens in one `@theme` block  
✅ **Utility Classes Available** - Use `bg-primary-600`, `text-neutral-900`, etc.  
✅ **Component Classes Too** - Pre-built `.product-card`, `.nav-link`, etc.  
✅ **Easy Theming** - Change entire palette in seconds  
✅ **Consistent Design** - All components use same tokens  
✅ **No Config File Needed** - Pure CSS configuration  

---

## 🔗 Documentation Files

- **`THEME.md`** - Complete theme documentation and color mapping
- **`THEME_EXAMPLES.md`** - 6 ready-to-use themes with copy-paste code
- **`README_STYLING.md`** - This overview file

---

## 🎓 Learning Resources

- [OKLCH Color Picker](https://oklch.com/) - Create custom colors
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs) - Official docs
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - CSS variables guide

---

## 🚦 Quick Reference

| Want to change... | Edit in `@theme` block in `/src/app.css` |
|-------------------|-------------------------------------------|
| Primary brand color | `--color-primary-600` |
| Background color | `--color-neutral-50` |
| Text color | `--color-neutral-900` |
| Border color | `--color-neutral-200` |
| Border radius | `--radius-lg` |
| Spacing scale | `--spacing-4`, `--spacing-6`, etc. |
| Font family | `--font-family-sans` |
| Animation speed | `--transition-duration-fast` |

---

## ✨ That's It!

You now have a **modern Tailwind v4 theme system** where:

1. 🎨 All design tokens in one `@theme` block in `/src/app.css`
2. 🏗️ Utility classes available everywhere: `bg-primary-600`, `text-neutral-900`
3. 🎯 Semantic component classes for common patterns: `.product-card`, `.nav-link`
4. ⚡ Easy theming by changing a few values in `@theme`
5. 📚 Complete documentation with 6 ready-to-use themes

**Choose your approach:**
- **Utilities in JSX**: `class="bg-white border border-neutral-200 rounded-lg"`
- **Component classes**: `class="product-card"`
- **Mix both**: `class="product-card bg-primary-600"` (utility overrides component)

**Happy theming!** 🎉
