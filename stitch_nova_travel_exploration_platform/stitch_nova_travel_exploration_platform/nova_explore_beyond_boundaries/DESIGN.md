---
name: NOVA – Explore Beyond Boundaries
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#44474d'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1c16'
  on-tertiary-container: '#87847c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#e7e2d9'
  tertiary-fixed-dim: '#cac6be'
  on-tertiary-fixed: '#1d1c16'
  on-tertiary-fixed-variant: '#494740'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-caps:
    fontFamily: Outfit
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a luxury, high-end expedition ethos tailored to affluent modern adventurers and cultural seekers. The visual language balances precision engineering with organic warmth, steering clear of standard tourism tropes in favor of an architectural, editorial sensibility.

The interface combines **Modern Glassmorphism** with **Editorial Minimalism**:
- **Luminosity and Translucency:** Interfaces utilize soft frosted overlays, refined boundary highlights, and layered depths reminiscent of dusk-lit horizon lines.
- **Precision Detailing:** Micro-borders, fine hairlines, and deliberate negative space convey curated exclusivity.
- **Sensory Balance:** Cool, deep nautical foundations counterbalanced by warm sand underlays to evoke both expansive oceans/night skies and sun-warmed earth.

## Colors

The palette is engineered to produce high contrast, visual calmness, and focused navigational accents.

- **Primary (`#0A192F`):** Deep Abyssal Navy. Anchors persistent navigation, luxury cards, hero viewports, and primary inverted surfaces.
- **Secondary (`#0D9488`):** Expedition Teal. Used sparingly for interactive focal points, active states, key booking buttons, and journey progress indicators.
- **Tertiary (`#F4EFE6`):** Dune Sand. Establishes warm, editorial breaks between dense media sections, softening the transition from high-contrast dark viewports to editorial reading spaces.
- **Neutral (`#1E293B`):** Charcoal Slate. Provides crisp readability for editorial body text, structured metadata, and secondary interactive components without the harshness of pure black.
- **Canvas & Surface System:** Primary canvas defaults to pure white (`#FFFFFF`) alongside an ambient light tint (`#FBF8F3`). Frosted glass structures layer `#0A192F` with variable alpha (8%–85%) depending on elevation tier. Borders utilize crisp Slate (`#E2E8F0` / `rgba(226, 232, 240, 0.8)`).

## Typography

The typography pairs **Outfit** (display and headlines) with **Plus Jakarta Sans** (body text and interactive labels).

- **Headlines & Editorial Titles:** Set in Outfit to project geometric authority, sculpted luxury, and clear rhythm. Display sizes use deliberate negative tracking (`-0.02em` to `-0.03em`) to enforce structural cohesion in large titles.
- **Narrative & Metadata:** Set in Plus Jakarta Sans with a generous line height ratio (1.6×–1.66× on body text) to retain maximum legibility when floating against varied imagery and tinted surface cards.
- **Eyebrows & Micro-Badging:** Set in `label-caps` using uppercase tracking (`0.12em`) to introduce architectural grounding to itinerary days, flight tags, and price indicators.

## Layout & Spacing

The layout model is based on an 8pt architectural rhythm structured across a responsive 12-column system (desktop) collapsing to 8 columns (tablet) and 4 columns (mobile).

- **Desktop (1200px+):** Max layout container capped at 1440px with `margin-lg` (4rem) dynamic padding. Gutter sits at `gutter-lg` (2rem) to allow editorial imagery room to breathe.
- **Tablet (768px – 1199px):** Margins adjust to `margin` (2rem); gutters settle at `gutter` (1.5rem). Split screens re-ratio into single full-bleed showcases.
- **Mobile (320px – 767px):** Margins drop to `margin-sm` (1rem); gutters reduce to `gutter-sm` (1rem). Navigation switches to a persistent frosted bottom dock, while the hero booking engine adopts a bottom-sheet presentation.

## Elevation & Depth

Visual hierarchy uses frosted glass and diffused, nautical-tinted shadows rather than heavy planar drop shadows.

- **Level 1 (Subtle Surfaces & In-Page Cards):** `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(226, 232, 240, 0.8); box-shadow: 0 4px 20px -2px rgba(10, 25, 47, 0.04);`
- **Level 2 (Floating Action Search Bar & Travel Teasers):** `background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 12px 32px -4px rgba(10, 25, 47, 0.08), 0 4px 12px -2px rgba(13, 148, 136, 0.04);`
- **Level 3 (Modals, Flight Selectors & Navigation Overlays):** `background: rgba(10, 25, 47, 0.85); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 24px 48px -12px rgba(10, 25, 47, 0.25); color: #FFFFFF;`
- **Interactive Depth (Hover States):** Y-axis elevation shifts up `-2px` with a secondary color illumination: `box-shadow: 0 16px 36px -6px rgba(13, 148, 136, 0.16);`

## Shapes

The design system uses a balanced geometric baseline (Level 2: Rounded). 

- **Cards and Viewport Tiles:** `1rem` (16px) corner radius, softening large photographic expanses while maintaining a tailored structure.
- **Pill Badges, Chips, and Buttons:** Fully rounded curves (`9999px`) provide physical contrast against rectangular card layouts, designating quick tap targets and active metadata.
- **Floating Overlays & Menus:** `1.5rem` (24px) corner radius to create an intentional organic detachment from background viewports.

## Components

### Buttons
- **Primary:** Solid Deep Navy (`#0A192F`) text in `#FFFFFF`, pill-rounded (`9999px`), with `0.75rem 1.75rem` padding. On hover: shifts to Teal (`#0D9488`) with subtle upward translation (`-1px`).
- **Accent Action:** Solid Teal (`#0D9488`) text in `#FFFFFF`, with high-glow micro-shadow. Reserved for high-value booking actions.
- **Ghost/Glass:** Semi-translucent white (`rgba(255, 255, 255, 0.2)`) with a `1px` white border (`rgba(255, 255, 255, 0.4)`) and `blur(8px)`. Ideal for placement over media heroes.

### Travel Cards
- **Structure:** Encapsulated in `1rem` rounded frames with `16:9` or `4:5` aspect ratios. Overlaid with subtle bottom-gradient protection (`linear-gradient(180deg, transparent 40%, rgba(10, 25, 47, 0.8) 100%)`).
- **Information Architecture:** Floats a pill-badge tag (e.g., "ARCTIC EXPEDITION") in the top-left corner using a semi-transparent glass panel (`rgba(10, 25, 47, 0.6)`), while destination names and price points rest cleanly inside the protected base layer.

### Floating Booking Search Bar
- **Form Factor:** Horizontally segmented capsule floating at the lower hero quadrant or docked to the top viewport upon scroll.
- **Segments:** Split into "Destination", "Dates", "Curated Tier", and "Search" separated by subtle vertical rules (`rgba(226, 232, 240, 0.6)`). Hovering over a segment introduces a subtle white background highlight (`rgba(255, 255, 255, 0.6)`).

### Chips & Filter Pills
- **Inactive:** Clean slate outline (`1px solid #E2E8F0`), `#FFFFFF` background, `#1E293B` text.
- **Active:** Deep Navy (`#0A192F`) fill with white text, or Teal (`#0D9488`) fill with subtle glow. Micro-icons (compass, dates, elevation) sit at `14px` on the leading side.

### Inputs & Selection Controls
- **Input Fields:** Contained within light slate borders (`#E2E8F0`) with a sand-tinted field back (`#FBF8F3`). Focus states transition to a `1px` solid Teal border (`#0D9488`) with a matching `3px` diffuse focus ring (`rgba(13, 148, 136, 0.15)`).
- **Checkboxes & Radios:** Teal fills with clean white geometry. Selected items highlight parent table rows with a sand backdrop (`#F4EFE6`).

### Interactive Tabs
- **Style:** Frictionless segmented sliding pill track. The active container features an elevated white or navy pill with a quick snap curve (`cubic-bezier(0.16, 1, 0.3, 1)`), making switching between trip overviews, itineraries, and inclusions visually clear.