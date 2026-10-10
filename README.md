# PackersDeal Landing Page — Code Guide
### UPDATED VERSION (2026-10-09) — includes all the latest fixes from the live page

The code is split into 3 separate files so it is easy to read. Open `index.html` in a browser — no build step needed.

## Files

| File | What it does |
|------|--------------|
| `index.html` | The full page structure — 10 sections in order, each with a numbered comment |
| `styles.css` | All the styling — exact Figma colors, 4 responsive layouts |
| `script.js` | Small interactions — mobile menu, Services dropdown, quote form |
| `assets/` | (Create this yourself) Put the real images here using the mapping below |

## The 10 sections (in order)

1. **Header** (white, 72.71px tall) — logo (204px), nav links, Moving Tips shown active (51px blue underline), Services blue circle dropdown icon, gradient CTA button (240x48)
2. **Hero** (light blue #DDEFFD, one continuous background) — heading, exact paragraph text, CTA button, 2 stats (3600+), family photo + floating quote form card (345x436)
3. **Process** (light blue #ECF6FE) — 4 steps, sitting half on the hero and half below it; 56px #D6EBFD circles, blue line icons, 2-line labels, arrows
4. **Expect** (white) — heading + paragraph (no overlap) + 3 cards (blue lotus, GREEN shield, blue coins icons)
5. **Services** (light blue #DDEFFD) — 3 cards, each with a 60px white badge holding a 33px blue icon (home, chair, car)
6. **Finder** — black search band
7. **About** (white) — text + 3 tip cards (01 Packing Tips, 02 Moving Tips, 03 Relocation Tips), each with a 33px #B6DCFC number badge
8. **Locations** (light blue #D3EAFD) — city pills (location-pin image bullets) + calculator card (blue #B1DAFB, 68px blue icon)
9. **Trust** (white) — 5 badges in order (shield, coins, crown, pin, headset) + customer testimonial
10. **Footer** (dark #1D2027) — white logo, 4 link columns (icon bullets), Follow us (Facebook solid-blue, Instagram outline, LinkedIn solid-blue, X outline), Disclaimer (shield icon), dark blue band (#0F233D), copyright line

## Exact colors (no dark-mode overrides)

- Page `#FFFFFF` | Hero/Services `#DDEFFD` | Process/tips `#ECF6FE`
- Locations `#D3EAFD` | Calculator `#B1DAFB` (border `#B6DCFC`) | Stat icon box `#C5E4FE`
- Primary blue `#005DD6` | CTA button `linear-gradient(90deg,#005DD6 46.63%,#6BABFF 100%)`
- Footer `#1D2027` | Disclaimer band `#0F233D` | Footer links `#B1DAFB`

## Responsive (4 layouts — taken from the Figma specs)

- **Desktop 1024px** (1024–1279px): **Figma "1280 Home Page" spec at 1024x4047 (+ 1024x697 footer)** — 72.71px navbar (204px logo, 240x48 CTA, Home shown active), hero 1024x560 (44px/56px heading, 17px/32px paragraph, 625x314 family photo, 345x436 quote card), 994x90 process bar, Expect 2+1 cards, Services 2+1 cards (388x367), black search band with horizontal 816x78 form, About text in 2 columns + three 199.5x141 tip cards, Locations (666px city grid + 288x224 calculator side by side), Trust (5 badges + horizontal divider + testimonial), footer (brand + 4 columns in one row, 984x192 disclaimer panel)
- **Tablet** (768–1023px): **Figma "680 Home Page" spec (680x6519)** — 70px navbar (204px logo, 240x48 CTA + hamburger), hero 948px (42px/56px heading, 18px/34px body, 738x431 photo, 345x436 quote card pulled up 61px), 645px process bar (477px bar scrolls horizontally + 64px round arrows, centered on the hero bottom edge), Expect 2+1 cards, Services 2+1 cards (304x399), black search band (327px heading + 25-years laurel badge + 550px form), About + 3 tip cards, 12 city pills (3 columns) + 573px calculator card, 5 trust badges + testimonial, footer (brand row + 2x2 link grid + #0F233D disclaimer panel)
- **Small tablet** (480–767px): **Figma "600 Home Page" spec (600x7553)** — same as the 680 layout, with overrides: hero text at top:70, photo 601x351, quote card pulled up 84px, process bar 404px wide, Expect/Services cards stacked (365px / 388x367), tips 2+1, rest same as 680
- **Mobile** (below 480px): **Figma "376 Home Page" spec (376x8900)** — 45px navbar (147px logo, hamburger only), centered hero text (32px heading), 376x433 photo with blurred edges, process bar (337x72) overlapping the photo, quote card below the photo, everything in a single column; tip cards become 262x105 horizontal rows (JavaScript changes the titles to "02 Moving Tips" / "02 Relocation Tips"); trust badges 3+2 with a divider line; footer link columns in a 2x2 grid

## Images mapping (put them in `assets/`, file name → real file)

| `assets/` file name | Real file |
|---|---|
| `logo-navbar.png` | `workspace/user/media_library/image/d1/d13d1e1b6b63ff23024bc606e10560c547ed2a8cea9abea91530cdb097eb09aa.png` |
| `logo-footer.png` | `workspace/user/media_library/image/83/83716ad30feb19e7818348ea255bea731a7d4b03736645182cb4c2d49934a5aa.png` |
| `hero-family.png` | `workspace/user/media_library/image/77/77344bbcb05804e41c40c73dff74d440ce7688a4bb458a8c8e67701a3013e9a2.png` |
| `service-home.png` | `workspace/user/media_library/image/36/36f9470473a2256e2803a2ecc030bbe8f6ccfa9ab3a42cf500559e71dfc4ea6b.png` |
| `service-office.png` | `workspace/user/media_library/image/4d/4d2458817a4e23695ddd7174e98218045cb99f7289a7c8923fb009c5d4f66e5f.png` |
| `service-vehicle.png` | `workspace/user/media_library/image/28/28aa6a4b2d154098fcd07757c150bf69285598b959ac6dc781d399b5fc00d8bd.png` |
| `pin.png` | `workspace/user/media_library/image/0f/0fe94e8984473476c943a1d5bb79309749552bc9d59a450bfb4a915ed3443953.png` |
| `calculator.png` | `workspace/user/media_library/image/50/50d4769423c8a55138de8788011ede854fa44214a3c22e26c90f661c589917e5.png` |
| `i-quick.png` | `workspace/user/media_library/image/0a/0ae78c0a8edee95693be0e127abb9fd9e76cebc357311f88ebeff9be5f44c5c8.png` |
| `i-res.png` | `workspace/user/media_library/image/b5/b5f4951ae85720dad1556ac7d8c690291dcd5150278e2f803bc8fb5e8cdc05ea.png` |
| `i-svc.png` | `workspace/user/media_library/image/71/7114d64687dd9c547ecdf98fcfff67de9341b52912f88998ddf1792ce9e4289b.png` |
| `i-legal.png` | `workspace/user/media_library/image/c5/c5af3661b350bde49a5a33be52efdc0640fcf235c12a3a4699acdc95991e462c.png` |
| `dmca.png` | `workspace/user/media_library/image/f6/f6aeb0b3a2f1f9c4f122cf754ae2256e81d80d91234ea448c2d501c5ce66d24b.png` |
| `avatar.png` | `workspace/user/media_library/image/37/376883dba2c250c4ec2963703acc99b1f1005ce2c03db9a5c916ddb760fb7f5c.png` |

All 14 images are already copied into `assets/` — the page works as-is after unzipping.

The icons are drawn with CSS/unicode shapes so the page opens fine even without the images; you can replace them with the SVGs in `workspace/user/files/*.svg` if you want.

## What is new in this version

1. Navbar: 51px Moving Tips underline, Services blue circle icon, exact CTA size
2. Hero: clean single-color background, exact text, black strip removed
3. Quote form: correct field order (name, +91/mobile, email, cities, dropdown/date)
4. Process bar: half on the hero and half below it, 2-line labels, correct icons
5. Expect: heading/paragraph overlap fixed + 3 cards with correct icons
6. Service cards: 60px badges with 33px blue icons (home/chair/car)
7. Tip cards: 33px number badges, titles 01/02/03 | Locations: pin bullets | Calculator: 68px blue icon
8. Footer: social icons (solid/outline pattern), heading icon bullets, 4 columns, DMCA badge, full disclaimer text
9. **New: 1024px desktop layout** — exact Figma "1280 Home Page" spec at 1024x4047 (+ 1024x697 footer). The 680/600/376 breakpoints are untouched.
10. **All code comments rewritten in simple English** so the files are easy to understand.
