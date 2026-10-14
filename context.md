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

## Conversation context — responsive breakpoint work (2026-10-14)

### User's visual requirement

The user supplied screenshots and a Figma composite showing separate target compositions:

- **1024px:** desktop/tablet-wide composition with desktop navigation, hero text/photo/quote card arrangement, 2+1 cards, and the compact finder layout.
- **768px:** a centered approximately `430px` reference artboard inside the wider viewport, matching the supplied “768 Home Page” screenshot.
- **680px:** a full-width tablet composition matching the supplied “680 Home Page” Figma reference.
- **600px:** smaller tablet layout with stacked cards and the existing 600px-specific overrides.
- **376px and below:** mobile layout with centered text, mobile quote form, overlapping process bar, and stacked content.

The important behavior is not just “responsive below 1023px”; each supplied width has a distinct visual target and must not inherit a conflicting layout.

### Root causes found

1. A compact-desktop rule existed in both `css/common/styles.css` and `css/pages/index.css` and forced:
   - `body { width: 1100px; min-width: 1100px; }`
   - desktop zoom/canvas behavior
   - fixed finder dimensions
   This rule leaked into tablet widths and caused broken or mixed layouts.
2. `js/script.js` applied the same desktop scaling for every viewport up to 1100px, including tablet/mobile widths.
3. The 768px reference-artboard media block was accidentally nested inside an earlier `max-width: 479px` block because of a missing closing brace. As a result, the 768px rules did not apply.
4. DevTools can report a rounded viewport width while the CSS media engine evaluates a fractional width. A literal `1023px` boundary therefore caused a mixed state near 1023px and finder overflow.

### Implemented responsive rules

- Compact desktop canvas/scaling is limited to the 1023px–1100px desktop range.
- Tablet/mobile rules begin at `1022.98px`.
- The 768px reference artboard is active through `1022.98px`, guarded by a max-only exclusion for `767.98px`.
- All responsive media queries use **max-width only**. Do not add `min-width` media-query conditions.
- Use `.98px` upper boundaries for breakpoint precision, for example:

```css
@media (max-width: 1022.98px) { ... }
@media (max-width: 1022.98px) and (not (max-width: 767.98px)) { ... }
```

- The compact desktop range is expressed without a `min-width` media query:

```css
@media (max-width: 1100.98px) and (not (max-width: 1022.98px)) { ... }
```

- JavaScript desktop scaling uses the equivalent numeric guard:

```js
window.innerWidth <= 1100.98 && window.innerWidth > 1022.98
```

### Validation performed

The page was opened directly from `index.html` in the integrated browser and checked at:

- `1100px` and `1023px`: compact desktop composition, desktop navbar, no horizontal overflow at 1023px.
- `1022px` and `768px`: centered 430px reference artboard with mobile navbar controls.
- `680px`: full-width tablet composition.
- `600px`: small-tablet composition.
- `376px`: mobile composition.

Run `git diff --check` after future responsive edits. Check both CSS files because shared and page-specific media queries intentionally overlap.

### Working-tree and editing notes

- Do not revert unrelated existing modifications or untracked assets.
- Do not commit or push unless explicitly requested.
- Keep changes surgical; preserve the supplied content, assets, typography, and Figma-specific absolute positioning.
- The user specifically requested the max-only `.98px` breakpoint convention; preserve that convention in future changes.

## Conversation log — 2026-10-13

The following records today's UI conversation and the resulting implementation changes.

### 1. Move the experience badge slightly down

User requested that the attached `25 years Experience` image be moved slightly lower.

Change made in `css/pages/index.css`:

```css
.experience-badge-image {
  transform: translateY(8px);
}
```

The change was later removed when the badge was aligned to the Figma measurements.

### 2. Increase spacing between the two laurel branches

User requested more space between the two leaves/laurel branches.

Change made in `assets/Frame 5896.svg`:

- Left branch transform origin x changed from `75.9994` to `79.9994`.
- Right branch transform origin x changed from `106.088` to `102.088`.

This moves the branches outward and keeps the badge text centered.

### 3. Match the 1024px finder layout to the reference/Figma design

The user provided reference screenshots and Figma CSS measurements for the black finder band. The target layout is:

- Outer finder frame: `1024px × 184px`, black background.
- Inner frame: `1024px × 144px`, with `padding: 0 20px 20px`.
- Experience badge: `179px × 125px`, positioned at `left: 845px`, `top: 17px`.
- Heading: `519px × 34px`, Quicksand, `24px`, line-height `34px`, centered.
- Search form: `816px × 78px`, white, border radius `13px`.
- City field: `276px × 48px`.
- Service field: `276px × 48px`.
- Search button: `212px × 48px`.
- Form gap: `14px`.

The compact desktop finder rules in `css/pages/index.css` were updated to use these measurements. The outer `.finder` was subsequently set to `width: 1100px` because the `1px–1100px` responsive layout intentionally uses a fixed `1100px` canvas with `--desktop-scale`. This prevents a white strip from appearing at the right edge when the browser viewport is `1024px`.

Current compact finder values include:

```css
.finder {
  width: 1100px;
  height: 184px;
  padding: 20px 20px;
}

.finder-inner {
  width: 984px;
  height: 144px;
}

.finder-top h2 {
  left: 0;
  top: 4px;
  width: 519px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
}

.exp-badge {
  left: 825px;
  top: -3px;
  width: 179px;
  height: 125px;
}

.search-bar {
  left: 0;
  top: 48px;
  width: 816px;
  height: 78px;
}
```

Because the inner frame starts at `20px`, the computed browser position of the badge is `x: 845px` and `y: 17px`, matching the Figma target after the page's compact-canvas scaling.

### 4. Validation performed

- Opened `index.html` in the integrated browser.
- Checked the finder at a `1024px` viewport.
- Verified computed positions for the finder, heading, form, and badge.
- Verified that the finder covers the full scaled canvas and no right-side white strip remains.
- Ran VS Code problem checks on `css/pages/index.css` and `assets/Frame 5896.svg`; no errors were reported.

### 5. Working-tree note

At the end of today's work, the relevant modified files were:

- `css/pages/index.css`
- `assets/Frame 5896.svg`

Untracked asset files already present in the working tree were:

- `assets/Frame 5896.png`
- `assets/leaves 1.png`
- `assets/leaves 2.png`

No commit or push was performed.
