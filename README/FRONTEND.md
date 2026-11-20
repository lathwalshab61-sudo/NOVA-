# Frontend & UI Design System

The NOVA frontend is built with **React 19** and **Vite**, adhering to an architectural luxury design language defined in the original Google Stitch design specification.

---

## Page Architecture

All primary pages are located in `frontend/src/pages/`:

| Page Component | Path / Route ID | Highlights |
|---|---|---|
| `HomePage.jsx` | `'home'` | Hero viewport with 4K reel modal, bespoke search planner, category pills, destination gallery, and testimonials. |
| `DestinationsPage.jsx` | `'destinations'` | Full catalog grid, real-time search, price & rating sorters, and category filters. |
| `DestinationDetailPage.jsx` | `'destination-detail'` | Hero banner, day-by-day interactive itinerary tabs, inclusions list, and direct booking engine. |
| `ExperiencesPage.jsx` | `'experiences'` | Curated masterclasses, private regattas, and interactive charter inquiry modal. |
| `SavedPage.jsx` | `'saved'` | Personal explorer vault showing saved destinations with quick enquiry links. |
| `AboutPage.jsx` | `'about'` | Brand mission, narrative editorial, and the 3 foundational pillars of luxury curation. |
| `ContactPage.jsx` | `'contact'` | 24/7 dedicated concierge desk, telephone hotline, and custom dispatch message form. |
| `LoginPage.jsx` | `'login'` | Explorer Club portal, VIP tier milestones, and empty-leg private jet alerts. |

---

## Reusable Components (`frontend/src/components/`)

- `Header.jsx`: Fixed frosted glass navigation header with responsive hamburger drawer trigger, search icon, saved counter, and profile avatar.
- `DrawerMenu.jsx`: Mobile and desktop slide-over menu providing frictionless navigation.
- `BottomNav.jsx`: Persistent mobile dock featuring icons and micro-labels.
- `Footer.jsx`: Luxury dark footer with Wanderer Dispatch newsletter subscription form and social channels.
- `DestinationCard.jsx`: High-elevation card with protected gradient overlays, rating pills, starting price, and hover transitions.
- `PlannerSearch.jsx`: Bespoke booking capsule with quick-pick destination chips (Amalfi, Santorini, Kyoto, Maldives).
- `CategoryPills.jsx`: Horizontal scrollable genre track.

---

## Typography & Design Tokens

Configured in `frontend/index.html` via Tailwind:

- **Display & Headings:** `Outfit` (Geometric authority, -0.02em tracking).
- **Body & Captions:** `Plus Jakarta Sans` (Generous line height for reading comfort).
- **Icons:** Google `Material Symbols Outlined`.

### Core Color Palette:
- **Primary Container (`#0D1C32` / `#0A192F`):** Deep Abyssal Navy.
- **Secondary (`#006A61` / `#0D9488`):** Expedition Teal.
- **Surface Canvas (`#F9F9FF`):** Ambient off-white with cool undertones.
- **Surface Lowest (`#FFFFFF`):** Pure white card background.
