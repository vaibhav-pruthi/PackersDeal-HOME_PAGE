# PackersDeal Coding Context

## Project purpose

PackersDeal is a static landing page for a certified packers and movers service. It is built with plain HTML, CSS, JavaScript, and local image assets. There is no bundler or framework.

Open `index.html` directly in a browser for a basic preview. Keep the page usable without a build step.

## Repository structure

```text
/
├── index.html                 # Page markup and section structure
├── css/
│   ├── common/styles.css      # Shared/base styles, navbar, finder defaults, footer, breakpoints
│   └── pages/index.css        # Page-specific layout and responsive overrides
├── js/script.js               # Mobile menu, service interaction, form behavior, scrolling
├── assets/                    # Local PNG and SVG images
├── README.md                  # Original visual/layout guide
└── context.md                 # This document
```

The stylesheet paths in `index.html` are:

```html
<link rel="stylesheet" href="css/common/styles.css">
<link rel="stylesheet" href="css/pages/index.css">
```

The JavaScript path is:

```html
<script src="js/script.js"></script>
```

Do not restore the deleted root-level `styles.css` or `script.js`; the project uses the split `css/` and `js/` structure.

## Page sections

`index.html` contains these sections in order:

1. Navbar
2. Hero and quote form
3. Process bar
4. Why choose us / expectation cards
5. Services
6. Finder/search band
7. About and moving tips
8. Locations and calculator
9. Trust badges and testimonial
10. Footer and disclaimer

## Important visual requirements

### Navbar

- Desktop navigation items are `Home`, `Services`, `Moving Tips`, `Locations`, and `Cost Calculator`.
- The desktop navigation group must remain horizontally centered in the navbar.
- The logo stays on the left and the `GET US A FREE QUOTE` button stays on the right.
- `Services` has a blue circular dropdown icon.
- The active link uses the blue `#005DD6` color and underline.
- At widths below the desktop layout, the desktop links are hidden and the hamburger/mobile menu rules take over. Do not break these responsive overrides.

The centering is implemented in `css/common/styles.css` with a positioned `.nav-inner` and an absolutely centered `.nav-links`:

```css
.nav-inner {
  position: relative;
}

.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

### Finder experience badge

The black finder band contains the search heading, search form, and a single `25 years Experience` badge image:

- `assets/Frame 5896.svg` contains both branches and the centered badge text with the exact Figma spacing.

Markup:

```html
<div class="exp-badge">
  <img class="experience-badge-image" src="assets/Frame 5896.svg" alt="25 years Experience">
</div>
```

The badge image is rendered at `179px × 125px`. Do not add separate leaf images, clipping, mirroring, or duplicate HTML text over it. If changing the badge, test both desktop and mobile breakpoints.

### Asset paths

CSS files are nested two directories below the repository root. Images referenced from CSS must therefore use:

```css
url("../../assets/file.svg")
```

Do not use `url("assets/file.svg")` inside `css/common/styles.css` or `css/pages/index.css`; that resolves relative to the CSS directory and breaks the image.

HTML image paths remain relative to the repository root:

```html
src="assets/file.svg"
```

## Responsive layout

The styles include multiple Figma-inspired layouts and overrides. Preserve the existing breakpoint order and check the cascade before adding a new rule:

- Desktop/large layout
- `1px–1100px` compact desktop behavior
- `max-width: 1023px` tablet/mobile behavior
- `max-width: 767px` small tablet behavior
- `max-width: 479px` mobile behavior
- `max-width: 350px` extra-small adjustments
- `768px–1023px` reference-artboard overrides

Some responsive rules intentionally use a fixed canvas/zoom or absolute positioning to match the supplied reference designs. Do not broadly rewrite them unless the requested change requires it.

## Colors and typography

Use the existing CSS variables and typography rather than introducing duplicates:

- Primary blue: `#005DD6`
- Hero/services background: `#DDEFFD`
- Process/tips background: `#ECF6FE`
- Locations background: `#D3EAFD`
- Calculator background: `#B1DAFB`
- Footer: `#1D2027`
- Disclaimer: `#0F233D`
- Body font: `Inter`
- Headings: `Quicksand`
- Logo font: `ADLaM Display` where applicable

## Coding-agent rules

1. Read the relevant HTML and both CSS files before changing layout.
2. Reuse existing classes and breakpoint patterns before creating new ones.
3. Make surgical changes; do not reformat the large CSS files.
4. Keep all local images inside `assets/` and use paths relative to the file that references them.
5. Preserve accessibility attributes and add meaningful `alt` text for informative images. Decorative images should use `alt=""`.
6. Do not replace real supplied assets with inline approximations unless explicitly requested.
7. Check desktop and mobile behavior after any navbar, finder, hero, or asset change.
8. Run `git diff --check` after editing.
9. Verify all referenced files exist before reporting completion.
10. Do not commit or push unless the user explicitly requests it.

## Current known state

- The navbar navigation is centered on desktop.
- The finder badge uses the single `assets/Frame 5896.svg` image.
- The old root `styles.css` and `script.js` were replaced by the split `css/` and `js/` files.
- Recent UI work may be uncommitted. Inspect `git status` before making or committing further changes.
