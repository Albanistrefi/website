
# Modern Minimal Website Design System — Updated Palette

A design system built with modern, minimal, and creative aesthetics — supporting both light and dark mode.  
Based on best practices from Nathan Curtis’ “Color in Design Systems” (EightShapes).

---

## 🎨 Color Palette — Updated Stacks

Your two core brand colors:  
- Primary teal → `#00A4BD`  
- Forest green → `#0F5223`

### Teal stack (`teal-*`)
| Step | Hex |
|---:|---|
| 0 | `#000000` |
| 10 | `#002126` |
| 20 | `#00424C` |
| 30 | `#006271` |
| 40 | `#008397` |
| 50 | `#00A4BD` |
| 60 | `#33B6CA` |
| 70 | `#66C8D7` |
| 80 | `#99DBE5` |
| 90 | `#CCEDF2` |
| 100 | `#FFFFFF` |

### Forest stack (`forest-*`)
| Step | Hex |
|---:|---|
| 0 | `#000000` |
| 10 | `#031007` |
| 20 | `#06210E` |
| 30 | `#093115` |
| 40 | `#0C421C` |
| 50 | `#0F5223` |
| 60 | `#3F754F` |
| 70 | `#6F977B` |
| 80 | `#9FBAA7` |
| 90 | `#CFDCD3` |
| 100 | `#FFFFFF` |

---

## 🏷️ Semantic Aliases (Light & Dark)

### Light mode
- Background → `forest-100`
- Surface → `forest-90`
- Text primary → `forest-0`
- Text secondary → `forest-30`
- Primary (links, buttons) → `teal-50`
- Primary hover → `teal-60`
- Border → `forest-90`

### Dark mode
- Background → `forest-0`
- Surface → `forest-10`
- Text primary → `forest-100`
- Text secondary → `forest-90`
- Primary (links, buttons) → `teal-60`
- Primary hover → `teal-70`
- Border → `forest-10`

---

## 🧩 CSS Variable Architecture

```css
/* 1) Stack tokens — theme-agnostic */
:root {
  /* teal stack */
  --teal-0:  #000000;
  --teal-10: #002126;
  --teal-20: #00424C;
  --teal-30: #006271;
  --teal-40: #008397;
  --teal-50: #00A4BD;
  --teal-60: #33B6CA;
  --teal-70: #66C8D7;
  --teal-80: #99DBE5;
  --teal-90: #CCEDF2;
  --teal-100:#FFFFFF;

  /* forest stack */
  --forest-0:   #000000;
  --forest-10:  #031007;
  --forest-20:  #06210E;
  --forest-30:  #093115;
  --forest-40:  #0C421C;
  --forest-50:  #0F5223;
  --forest-60:  #3F754F;
  --forest-70:  #6F977B;
  --forest-80:  #9FBAA7;
  --forest-90:  #CFDCD3;
  --forest-100: #FFFFFF;
}

/* 2) Semantic aliases — per theme */
:root {
  /* Light mode */
  --color-bg:         var(--forest-100);
  --color-surface:    var(--forest-90);
  --color-text:       var(--forest-0);
  --color-text-2:     var(--forest-30);
  --color-border:     var(--forest-90);

  --color-primary:     var(--teal-50);
  --color-primary-hov: var(--teal-60);

  --color-success: var(--forest-60);
  --color-warning: var(--teal-70);
  --color-error:   #EF4444;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:         var(--forest-0);
    --color-surface:    var(--forest-10);
    --color-text:       var(--forest-100);
    --color-text-2:     var(--forest-90);
    --color-border:     var(--forest-10);

    --color-primary:     var(--teal-60);
    --color-primary-hov: var(--teal-70);

    --color-success: var(--forest-70);
    --color-warning: var(--teal-80);
    --color-error:   #F87171;
  }
}

/* Example usage */
body { background: var(--color-bg); color: var(--color-text); }
.card { background: var(--color-surface); border: 1px solid var(--color-border); }
a { color: var(--color-primary); }
a:hover { color: var(--color-primary-hov); }
```

---

## ✍️ Typography

**Primary (Headings)** — `Inter`  
**Body** — `IBM Plex Sans`

Alternative creative pairing:  
- Headings: `Clash Display`  
- Body: `Inter` or `Work Sans`

| Element | Font | Weight | Size | Notes |
|----------|------|--------|------|-------|
| h1 | Inter | 700 | 2.5rem | line-height: 1.2 |
| h2 | Inter | 600 | 2rem | line-height: 1.3 |
| Body | IBM Plex Sans | 400 | 17–18px | line-height: 1.7 |
| Links | Accent color | 500 | inherit | underline on hover |
| Code | JetBrains Mono | 400 | 16px | monospace for clarity |

---

## 🌗 Dark/Light Mode Transition

```css
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

## ✅ Design Principles

- Use whitespace generously.
- Prefer borders over heavy shadows.
- Keep color usage minimal and role-based.
- Maintain high contrast.
- Respect system color scheme preferences.
- Keep stack tokens immutable; change via semantic re-aliasing.

---

© Design System inspired by EightShapes, adapted for Alban Istrefi’s personal blog.
