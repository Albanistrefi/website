# Tailwind CSS Design Tokens Reference

This document describes all design tokens configured for the Astro blog, ported from `design.json`.

## Configuration Files

- **`tailwind.config.mjs`**: Content paths configuration
- **`src/styles/global.css`**: Design tokens defined using Tailwind v4's `@theme` directive

## Color Palette

### Background Colors
- `bg-background-primary` - #2b3544 (Navy-900)
- `bg-background-secondary` - #1e2530 (Navy-800)

### Text Colors
- `text-text-primary` - #e4e6eb (High contrast)
- `text-text-secondary` - #9ca3af (Medium contrast)
- `text-text-muted` - #6b7280 (Low contrast)

### Accent Colors
- `text-accent-primary` / `bg-accent-primary` - #ff6b35 (Orange-500)
- `text-accent-secondary` / `bg-accent-secondary` - #f97316 (Orange-600)

### Interactive Colors
- `text-link` - #ff6b35
- `text-link-hover` - #ff8555
- `text-icon` - #e4e6eb
- `text-icon-hover` - #ff6b35

### Semantic Colors
- `border-border` - #374151
- `border-divider` - #374151

## Typography

### Font Families
- `font-body` - system-ui, -apple-system, 'Segoe UI', sans-serif
- `font-heading` - 'Courier New', 'Monaco', monospace
- `font-code` - 'JetBrains Mono', 'Fira Code', 'Courier New', monospace

### Font Sizes
- `text-xs` - 0.75rem (12px)
- `text-sm` - 0.8125rem (13px)
- `text-base` - 0.9375rem (15px)
- `text-md` - 1rem (16px)
- `text-lg` - 1.125rem (18px)
- `text-xl` - 1.5rem (24px)
- `text-2xl` - 2rem (32px)

### Line Heights
- `leading-tight` - 1.2
- `leading-snug` - 1.3
- `leading-normal` - 1.4
- `leading-relaxed` - 1.5
- `leading-loose` - 1.6

### Letter Spacing
- `tracking-tight` - -0.02em
- `tracking-normal` - -0.01em

## Spacing

Use these custom spacing values:
- `xs` - 0.25rem (4px)
- `sm` - 0.5rem (8px)
- `md` - 1rem (16px)
- `lg` - 1.5rem (24px)
- `xl` - 2rem (32px)
- `2xl` - 3rem (48px)
- `3xl` - 4rem (64px)
- `4xl` - 6rem (96px)

Examples:
- `p-md` - padding: 1rem
- `mt-lg` - margin-top: 1.5rem
- `gap-xl` - gap: 2rem

## Border Radius

- `rounded-none` - 0
- `rounded-sm` - 0.25rem
- `rounded-md` - 0.375rem
- `rounded-lg` - 0.5rem
- `rounded-full` - 9999px

## Breakpoints

- `tablet:` - 768px
- `desktop:` - 1024px
- `wide:` - 1280px

Examples:
```html
<div class="text-base tablet:text-lg desktop:text-xl">
  Responsive text
</div>
```

## Z-Index

- `z-header` - 1000
- `z-overlay` - 2000
- `z-modal` - 3000

## Transitions

Use Tailwind's transition utilities with our durations:
- `transition-all duration-200 ease-out`
- `transition-colors duration-200 ease-out`

## Opacity

- `opacity-disabled` - 0.5
- `opacity-hover` - 0.8
- `opacity-muted` - 0.6

## Shadows (Minimal use in dark theme)

- `shadow-sm` - 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- `shadow-md` - 0 4px 6px -1px rgba(0, 0, 0, 0.1)

## Usage Examples

### Basic Component
```astro
<div class="bg-background-primary text-text-primary font-body">
  <h1 class="text-2xl font-heading text-accent-primary">
    Welcome to My Blog
  </h1>
  <p class="text-base text-text-secondary leading-loose">
    This is a description using our design system.
  </p>
</div>
```

### Interactive Link
```astro
<a
  href="/about"
  class="text-link hover:text-link-hover transition-colors duration-200"
>
  About Me
</a>
```

### Article Card
```astro
<article class="p-lg border-b border-border hover:translate-x-1 transition-transform duration-200">
  <h2 class="text-lg font-heading text-accent-primary mb-sm">
    Article Title
  </h2>
  <p class="text-base text-text-secondary leading-loose">
    Article excerpt goes here...
  </p>
</article>
```

### Responsive Layout
```astro
<div class="
  px-md py-lg
  tablet:px-lg tablet:py-xl
  desktop:px-xl desktop:py-2xl
  max-w-[800px] mx-auto
">
  Content here
</div>
```

## CSS Variables

All tokens are also available as CSS variables for use in custom styles:

```css
.custom-element {
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  font-family: var(--font-family-heading);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}
```

## Design Principles

1. **Dark mode first**: All colors optimized for dark backgrounds
2. **High contrast**: Text colors ensure WCAG AA compliance (4.5:1 minimum)
3. **Monospace fonts**: Technical aesthetic with monospace headings
4. **Minimal interface**: Clean, distraction-free reading experience
5. **Mobile-first**: Responsive design starts with mobile and scales up

## Testing

The configuration has been validated:
- Dev server runs without errors
- Build completes successfully
- All design tokens from design.json are integrated
- Colors match specifications exactly

## Next Steps

When building components:
1. Use design tokens instead of arbitrary values
2. Follow mobile-first responsive patterns
3. Maintain high contrast for accessibility
4. Use monospace fonts for headings and technical content
5. Keep animations subtle and performant
