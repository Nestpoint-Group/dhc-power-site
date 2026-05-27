# DHC Power — Design System

**Brand + tokens reference.** This document captures the visual language of the DHC Power website so it can be reproduced or extended without the original design conversation. All tokens map to CSS custom properties defined in `assets/css/style.css` (`:root`).

> **Company:** DHC Power designs and builds cutting-edge batteries for special use cases — defense, extreme environments, fast-charge at low temperature, high-altitude, and maritime/subsea.

---

## 1. Aesthetic direction

**Tactical / defense-tech.** The reference point is [Anduril](https://www.anduril.com/): cinematic restraint, two-tone discipline, declarative copy, and operator-grade technical detailing used sparingly.

Principles:

- **Charcoal + off-white do the work.** Near-black backgrounds, off-white text. The brand green is a scalpel, not a fill (see §2).
- **Engineering authority over marketing gloss.** Hero and product visuals are annotated technical drawings (dimension lines, callouts, drawing blocks), not stock photography or glow gradients.
- **Chaptered rhythm.** Sections are numbered (`§ 01 / DESIGN PRINCIPLES`) with one declarative headline + one short paragraph. Avoid dense card grids and SaaS-dashboard patterns.
- **Monospace as instrumentation.** Mono type is reserved for labels, specs, status, and annotations — never body copy.
- **Thin lines as structure.** Edge-to-edge hairlines and corner brackets imply precision.

Adjacent references: Form Energy (editorial calm), Sila (scientific authority), SpaceX (minimal hero copy).

---

## 2. The green rule (most important constraint)

Brand green (`#56DB56`) may cover **no more than ~5–8% of pixels on any page**. It is permitted **only** in these places:

| Allowed | Example |
| --- | --- |
| Primary CTA button fills | "Request brief" button, nav CTA |
| Status / live indicator dots | pulsing dot on "OPERATIONAL" labels |
| Link hover + underline states | nav link hover, footer link hover, inline `link-arrow` |
| Focus states on form inputs | input border on `:focus` |

**Not allowed:** stat values, section eyebrows/numbers, headings, card hover borders, corner brackets, large background fills, gradients, icon strokes. Those are all charcoal/off-white/grey. When in doubt, **don't** use green.

---

## 3. Color palette

### Brand palette (from `Palette.png`)

| Name | Hex | Use |
| --- | --- | --- |
| Charcoal | `#272B27` | Brand dark; basis for surfaces |
| Green | `#56DB56` | Accent — CTAs, status, hover only |
| Deep Green | `#2AA82A` | Secondary green (gradients/pressed states) |
| Mint | `#B0EFB0` | Soft green (CTA hover, rare highlights) |
| Off-White | `#F7FDF7` | Primary text & light surfaces |

### Extended tokens (site implementation)

**Surfaces**

| Token | Hex | Use |
| --- | --- | --- |
| `--bg-void` | `#0A0C0A` | Page background (deepest) |
| `--bg-tint` | `#131513` | Recessed panels, input fields, ticker |
| `--bg-panel` | `#1B1E1B` | Cards, primary panels |
| `--bg-elev` | `#232723` | Elevated panels, bar tracks |
| `--bg-elev-2` | `#2E332E` | Highest elevation |

**Lines**

| Token | Value | Use |
| --- | --- | --- |
| `--line` | `#2D322D` | Default hairline / dividers |
| `--line-bright` | `#3B423B` | Stronger borders, hover borders, tags |
| `--line-accent` | `rgba(86,219,86,0.35)` | Rare green-tinted edge (status pill) |

**Text**

| Token | Hex | Use |
| --- | --- | --- |
| `--text` | `#F7FDF7` | Primary text, headings |
| `--text-mid` | `#C8D2C8` | Body copy, secondary text |
| `--text-dim` | `#828B82` | Labels, eyebrows, meta |
| `--text-faint` | `#4F564F` | Corner brackets, faint marks, scale ticks |

**Accent**

| Token | Value | Use |
| --- | --- | --- |
| `--accent` | `#56DB56` | = brand green |
| `--accent-deep` | `#2AA82A` | |
| `--accent-soft` | `#B0EFB0` | CTA hover |
| `--accent-glow` | `rgba(86,219,86,0.25)` | Status dot halo, outline-button hover |

**Signal (functional only)**

| Token | Hex | Use |
| --- | --- | --- |
| `--danger` | `#E25C5C` | Errors |
| `--amber` | `#E6B84A` | Warnings |

---

## 4. Typography

Three families, loaded from Google Fonts.

| Role | Family | Weights | Token |
| --- | --- | --- | --- |
| Display / headings | **Space Grotesk** | 400, 500, 600, 700 | `--font-display` |
| Body | **Inter** | 400, 500, 600 | `--font-body` |
| Labels / specs / annotations | **JetBrains Mono** | 400, 500 | `--font-mono` |

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Scale & treatment

| Element | Size (clamp = responsive) | Notes |
| --- | --- | --- |
| Hero title | `clamp(3rem, 8vw, 7rem)` | UPPERCASE, weight 600, letter-spacing `-0.045em`, line-height `0.92` |
| `h1` | `clamp(2.5rem, 6.5vw, 5.75rem)` | letter-spacing `-0.035em` |
| `h2` | `clamp(2rem, 4vw, 3.5rem)` | section headlines, usually UPPERCASE |
| `h3` | `clamp(1.4rem, 2vw, 1.875rem)` | card / cell titles |
| `h4` | `1.125rem` | |
| Body | `16px` / line-height `1.55` | color `--text-mid` |
| Mono label `.label` / `.mono` | `0.7rem`, letter-spacing `0.18em`, UPPERCASE | color `--text-dim` |
| Eyebrow `.eyebrow` | `0.7rem`, letter-spacing `0.22em`, UPPERCASE, with leading hairline | color `--text-dim` |
| Section number `.section-num` | `0.7rem`, letter-spacing `0.22em` | e.g. `§ 01 / DESIGN PRINCIPLES` |

**Rules:** Headings use Space Grotesk with tight negative tracking. Mono is uppercase with wide tracking (`0.16–0.22em`) and only ever used for labels/specs/status/annotations. Body is never mono.

---

## 5. Logo

Wordmark = hexagonal emblem (six wedges) + "DHC POWER" (DHC bolder, POWER lighter).

Available in `assets/img/`:

| File | Use |
| --- | --- |
| `logo-on-dark.svg` | Green emblem + off-white wordmark — **default**, for charcoal backgrounds |
| `logo-on-light.svg` | Green emblem + charcoal wordmark — for light backgrounds |
| `emblem.svg` | Emblem only (no wordmark) |
| `logo-dark.svg` | Full lockup on a charcoal plate |
| `favicon-16.png`, `favicon-32.png` | Favicons |

Source files (all variants, raster + vector + PDF) live in `~/Desktop/DHC Power/Logos/`. Logo colors are part of the brand palette and must always be preserved.

Header logo height: **28px**. Footer logo height: **24px**.

---

## 6. Layout, spacing & radii

| Token | Value | Use |
| --- | --- | --- |
| `--container` | `1440px` | Max content width (`.container`) |
| (narrow) | `1080px` | `.container--narrow` |
| `--gutter` | `32px` | Horizontal page padding |
| Section padding | `clamp(80px, 12vw, 160px)` | `.section` (tight variant: `clamp(48px, 8vw, 96px)`) |
| `--radius-sm` | `2px` | Tags, small chips |
| `--radius` | `4px` | Default (buttons, cards, inputs) |
| `--radius-lg` | `8px` | Large surfaces |

Grid helpers: `.grid-2`, `.grid-3`, `.grid-4` (collapse to single column ≤ 900px). Default grid gap `24px`.

Background grid overlays use off-white lines at very low alpha (`rgba(247,253,247,0.035)`), 64–80px cells, masked with a radial fade.

---

## 7. Motion

| Token / animation | Value | Use |
| --- | --- | --- |
| `--ease` | `cubic-bezier(0.2, 0.7, 0.2, 1)` | General transitions |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveals, bar fills |
| Scroll reveal `[data-reveal]` | opacity 0→1, `translateY(20px)`→0, `0.8s` | Section entrances |
| Spec bar fill `.bar__fill` | width 0→target, `1.2s` | On scroll into view |
| Status dot `pulse` | `2.4s` ease-in-out infinite | Live indicators |
| Ticker scroll | `30s` linear infinite | Operating-envelope strip |

All scroll-triggered behavior is handled by a single `IntersectionObserver` in `assets/js/main.js` (vanilla JS, no framework, no build step). Respects reduced-motion via graceful fallback (reveals everything if observer unsupported).

---

## 8. Components

High-level inventory (classes in `assets/css/style.css`):

| Component | Class(es) | Notes |
| --- | --- | --- |
| Sticky nav | `.nav`, `.nav__link`, `.nav__cta` | Blurred charcoal bar; mono links; green CTA; active link gets a green dot; mobile toggle ≤ 900px |
| Buttons | `.btn`, `.btn--ghost`, `.btn--outline`, `.btn--lg`, `.btn--sm` | Mono uppercase, trailing `→`. Primary = green fill |
| Inline link | `.link-arrow` | Green text, underline-on-hover, sliding arrow |
| Hero | `.hero`, `.hero__title`, `.hero__lede`, `.cell-vis` | Split layout: headline + annotated cell drawing. Corner brackets + operator labels |
| Ticker | `.ticker`, `.ticker__inner` | Auto-scrolling mono spec strip (duplicate content for seamless loop) |
| Section header | `.sec-head`, `.section-num`, `.eyebrow` | Two-column: title + lead paragraph |
| Capability card | `.cap-card` | Corner brackets, numbered, meta row footer |
| Product cell card | `.cell-card`, `.spec` | Split: technical drawing + spec grid + CTAs |
| Spec bar | `.bar`, `.bar__track`, `.bar__fill` | Animated fill (off-white gradient, **not** green) |
| Stat | `.stat`, `.stat__value` | Large Space Grotesk number with mono `<sup>` unit |
| Application tile | `.app-tile` | Environment use-cases; hover reveals subtle off-white glow + green CTA underline |
| Compliance strip | `.compliance`, `.compliance__badge` | Standards (MIL-PRF, UN 38.3, etc.) |
| CTA block | `.cta-block` | Bordered panel with masked grid background |
| Form | `.form`, `.field` | Charcoal inputs, green focus border |
| Footer | `.foot` | 4-column: brand + 3 link columns + legal bar |
| Page header | `.page-head`, `.breadcrumbs` | Interior-page hero with masked grid + radial fade |
| Diagram frame | `.diagram` | Bordered area with corner brackets + mono labels |
| Pill / tag | `.pill`, `.tag` | Status pill (green-tinted) / neutral tag |
| Readout | `.readouts`, `.readout` | 4-up live spec readout row with pulsing dots |

---

## 9. Illustration vocabulary (technical drawings)

Product and hero visuals are inline SVG **engineering drawings**, not images. Conventions:

- **Lines:** off-white (`#F7FDF7`) at `1.2–1.4px` for object outlines; grey (`#828B82`) at `0.7px` for dimension/leader lines; faint off-white (`rgba(247,253,247,0.08–0.22)`) for internal layer hatching.
- **Dimension lines:** extension lines + double-headed arrows (SVG markers), with a mono label (e.g. `148.0 MM`, `Ø 21.0 MM`).
- **Callouts:** small filled off-white dot at the anchor → leader line → mono label `NN / DESCRIPTION` (number in grey, description in off-white).
- **Drawing furniture:** corner frame brackets, a title block (`DWG / … · REV / …`), a scale bar, and orientation notes (`VIEW / FRONT ORTHO`, `PROJ / FIRST ANGLE`, `UNIT / MM`).
- **No green** in illustrations.
- Background: a 20px fine grid via SVG `<pattern>` at `rgba(247,253,247,0.04)`.

The home hero uses a **prismatic cell** in front-orthographic view (terminals + 3-stage safety vent on top, internal cathode/anode/separator/electrolyte stack, 8 numbered callouts).

---

## 10. Voice & tone

- **Declarative, not promotional.** "Engineered for the edge of possible." "Performance, measured against the worst day."
- **Specific and quantified.** Lead with numbers and conditions (`−40°C`, `15 min`, `3,000+ cycles`).
- **Operator register.** Mission, deployment, envelope, brief. Avoid hype words and exclamation.
- Section copy = one declarative headline + one short supporting paragraph.

*(Live site currently uses lorem ipsum placeholder body copy; real copy is being written by the DHC team.)*

---

## 11. File structure & usage

```
site/
├── index.html              # Home
├── docs/
│   └── DESIGN_SYSTEM.md     # This file
└── assets/
    ├── css/style.css        # All tokens + components (single stylesheet)
    ├── js/main.js           # Nav, scroll reveals, bar animation (vanilla)
    └── img/                 # Logos, emblem, favicons
```

- Static site: **no build step.** Open `index.html` or serve the folder (`python3 -m http.server`).
- All design tokens are CSS custom properties in `:root` of `style.css` — change a value there to update it everywhere.
- Repo: `Nestpoint-Group/dhc-power-site` (private).

---

*Last updated: 2026-05-27.*
