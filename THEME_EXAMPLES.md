# 🎨 Quick Theme Examples

## How to Change Colors

Open `/src/app.css` and find the **THEME CONFIGURATION** section (lines 6-86).

All you need to do is change the CSS variables in that section. Here are some ready-to-use themes:

---

## 🟢 Green/Eco Theme

Replace the brand colors with:

```css
/* === Brand Colors === */
--brand-primary: oklch(55% 0.19 145);              /* Forest green */
--brand-primary-hover: oklch(45% 0.19 145);        /* Darker green */
--brand-primary-light: oklch(70% 0.19 145);        /* Light green */

--brand-accent: oklch(68% 0.18 65);                /* Lime accent */
--brand-accent-hover: oklch(58% 0.18 65);          /* Darker lime */
```

**Result:** Green navigation links, green prices, green buttons

---

## 🟣 Purple/Modern Theme

Replace the brand colors with:

```css
/* === Brand Colors === */
--brand-primary: oklch(55% 0.22 300);              /* Rich purple */
--brand-primary-hover: oklch(45% 0.22 300);        /* Darker purple */
--brand-primary-light: oklch(70% 0.22 300);        /* Light purple */

--brand-accent: oklch(65% 0.25 330);               /* Magenta accent */
--brand-accent-hover: oklch(55% 0.25 330);         /* Darker magenta */
```

**Result:** Purple navigation links, purple prices, purple focus states

---

## 🟠 Orange/Energetic Theme

Replace the brand colors with:

```css
/* === Brand Colors === */
--brand-primary: oklch(62% 0.19 45);               /* Warm orange */
--brand-primary-hover: oklch(52% 0.19 45);         /* Darker orange */
--brand-primary-light: oklch(75% 0.19 45);         /* Light orange */

--brand-accent: oklch(55% 0.24 25);                /* Red-orange accent */
--brand-accent-hover: oklch(45% 0.24 25);          /* Darker red-orange */
```

**Result:** Orange navigation links, orange prices, orange accents

---

## ⚫ Dark Mode Theme

Replace both brand and neutral colors:

```css
/* === Brand Colors === */
--brand-primary: oklch(70% 0.19 250);              /* Bright blue for dark bg */
--brand-primary-hover: oklch(80% 0.19 250);        /* Lighter blue */
--brand-primary-light: oklch(65% 0.19 250);        /* Medium blue */

--brand-accent: oklch(65% 0.22 30);                /* Bright red for dark bg */
--brand-accent-hover: oklch(75% 0.22 30);          /* Lighter red */

/* === Neutral Colors === */
--neutral-white: oklch(15% 0.01 264);              /* Dark background */
--neutral-black: oklch(95% 0.01 264);              /* Light text */

--neutral-50: oklch(15% 0.01 264);                 /* Darkest (was lightest) */
--neutral-100: oklch(18% 0.01 264);
--neutral-200: oklch(25% 0.01 264);                /* Dark borders */
--neutral-300: oklch(35% 0.01 264);
--neutral-400: oklch(45% 0.01 264);
--neutral-500: oklch(55% 0.01 264);
--neutral-600: oklch(65% 0.01 264);                /* Light secondary text */
--neutral-700: oklch(75% 0.01 264);
--neutral-800: oklch(85% 0.01 264);                /* Light headings */
--neutral-900: oklch(95% 0.01 264);                /* Lightest text */
```

**Result:** Complete dark theme with light text on dark background

---

## 🌸 Pink/Soft Theme

Replace the brand colors with:

```css
/* === Brand Colors === */
--brand-primary: oklch(60% 0.18 350);              /* Soft pink */
--brand-primary-hover: oklch(50% 0.18 350);        /* Darker pink */
--brand-primary-light: oklch(75% 0.18 350);        /* Light pink */

--brand-accent: oklch(55% 0.20 10);                /* Rose accent */
--brand-accent-hover: oklch(45% 0.20 10);          /* Darker rose */
```

**Result:** Pink navigation links, pink prices, rose accents

---

## 💙 Sky Blue/Professional Theme

Replace the brand colors with:

```css
/* === Brand Colors === */
--brand-primary: oklch(60% 0.15 220);              /* Sky blue */
--brand-primary-hover: oklch(50% 0.15 220);        /* Darker sky */
--brand-primary-light: oklch(75% 0.15 220);        /* Light sky */

--brand-accent: oklch(58% 0.18 180);               /* Teal accent */
--brand-accent-hover: oklch(48% 0.18 180);         /* Darker teal */
```

**Result:** Sky blue links, sky blue prices, teal accents

---

## 🔥 How to Apply

1. Open `/src/app.css`
2. Find the `@layer theme { :root, :host {` section (around line 5)
3. Copy one of the themes above
4. Replace the existing brand/neutral color variables
5. Save the file
6. Your dev server will auto-reload with the new theme!

---

## 🎨 Color Picker

Use [OKLCH Color Picker](https://oklch.com/) to create custom colors:

1. Move the color picker to your desired hue
2. Adjust lightness and chroma
3. Copy the `oklch()` value
4. Paste into your theme variables

**Tips:**
- Keep lightness between 40-70% for primary colors
- Use higher lightness (60-80%) for light backgrounds
- Use lower lightness (30-50%) for dark text
- Chroma 0.15-0.25 gives vibrant but not oversaturated colors

---

## 🚀 Advanced: Warm vs Cool Grays

### Warm Grays (Brown tint)
```css
--neutral-200: oklch(92% 0.01 40);   /* Warm border */
--neutral-600: oklch(45% 0.02 40);   /* Warm text */
```

### Cool Grays (Blue tint)
```css
--neutral-200: oklch(92% 0.01 240);  /* Cool border */
--neutral-600: oklch(45% 0.02 240);  /* Cool text */
```

### True Neutral Grays
```css
--neutral-200: oklch(92% 0 0);       /* No hue */
--neutral-600: oklch(45% 0 0);       /* Pure gray */
```

---

## 📐 Other Quick Customizations

### Increase Spacing (More Spacious)
```css
--spacing-unit: 0.3rem;  /* From 0.25rem (increases all margins/paddings by 20%) */
```

### Rounder Corners
```css
--radius-lg: 1rem;       /* From 0.5rem (makes everything rounder) */
```

### Faster Animations
```css
--transition-fast: 100ms;   /* From 150ms */
--transition-base: 150ms;   /* From 200ms */
```

### Different Font
```css
--font-sans: 'Inter', system-ui, sans-serif;  /* Use Inter font if available */
```

---

## 💡 Pro Tip

Keep your custom theme in a comment block at the top of `/src/app.css` so you can easily revert:

```css
/*
  MY CUSTOM THEME - Forest Green
  --brand-primary: oklch(55% 0.19 145);
  --brand-primary-hover: oklch(45% 0.19 145);
  --brand-primary-light: oklch(70% 0.19 145);
*/
```
