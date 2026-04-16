# Home Page Style Guide

This document is the source-of-truth style brief for bringing `music`, `videos`, `shows`, `press`, and `contact` into alignment with the current home page.

## Source Files To Reference

- Structure: `src/components/Home.jsx`
- Shared styles: `src/styles/index.css`
- Pages to update later:
  - `src/components/Music.jsx`
  - `src/components/Videos.jsx`
  - `src/components/Shows.jsx`
  - `src/components/Press.jsx`
  - `src/components/Contact.jsx`

## Core Visual Direction

The home page is not minimal or editorial-white. It is:

- dark, cinematic, and performance-driven
- glassy rather than flat
- high-contrast, with muted body copy and bright accent moments
- built around rounded shells, pill controls, and strong imagery
- expressive in headlines, but still clean and structured

When updating the other pages, keep the same mood. Do not switch to a plain SaaS layout, a white canvas, thin hairline-only design, or generic stacked text blocks.

## Design Tokens To Preserve

Use the existing CSS variables in `src/styles/index.css:1-21` instead of inventing new colors unless absolutely necessary.

- Background:
  - `--page-bg: #07080d`
  - body uses layered radial gradients plus a dark vertical gradient in `src/styles/index.css:28-35`
- Text:
  - primary text is `--text`
  - supporting copy is `--muted`
- Accent system:
  - brand lime `--brand`
  - blue highlight `--accent-blue`
  - pink highlight `--accent-pink`
- Surfaces:
  - `--surface`
  - `--surface-soft`
  - section shells use a stronger layered gradient in `src/styles/index.css:243-251`
- Borders and shadow:
  - `--line`
  - `--shadow`
- Radius scale:
  - `--radius-xl: 32px`
  - `--radius-lg: 24px`
  - `--radius-md: 18px`

## Typography Rules

Headline styling comes from `src/styles/index.css:351-377`.

- Use `'Avenir Next Condensed', 'Arial Narrow', sans-serif` for `h1`, `h2`, and `h3`
- Keep headline line-height tight: `0.95`
- Keep headline tracking slightly compressed: `letter-spacing: -0.03em`
- Favor short, punchy headings with width limits so they wrap into dramatic blocks
- Body copy should stay readable and spacious:
  - `.lead` uses `line-height: 1.75` and muted color in `src/styles/index.css:379-385`
  - standard paragraph copy usually sits between `1.45` and `1.7`

### Eyebrows and Labels

Two small-label patterns exist:

- `.eyebrow` for section intros: pill-shaped, bordered, tinted, lime text
  - `src/styles/index.css:334-349`
- `span`/`.kicker` labels inside cards and media blocks
  - `src/styles/index.css:319-332`

Use these consistently. New sections on secondary pages should almost always start with an eyebrow.

## Layout System

### Page Frame

- `.page` is a vertical grid with `1rem` gaps and outer horizontal padding
  - `src/styles/index.css:231-235`
- `.content_frame` centers content to `--content-width`
  - `src/styles/index.css:78-82`
- `.section_shell` is the default reusable panel
  - `src/styles/index.css:243-252`, `460-463`

Every major page block after the header should usually be a `content_frame section_shell`.

### Shell Styling

`section_shell` and the hero use the same visual language:

- rounded corners
- layered dark gradient fill
- translucent/glass feel
- soft border
- large shadow

Avoid flat transparent sections or sections without containment. The home page feels premium because nearly every content block sits inside a defined shell.

### Home Page Structural Pattern

Home uses five strong section types in `src/components/Home.jsx:49-244`:

1. hero split
2. feature split
3. centered media-grid sections
4. centered music-card section with platform pills
5. booking/newsletter dual-card section

When redesigning secondary pages, borrow from these patterns instead of inventing brand new layout systems.

## Home Page Desktop Review

### 1. Hero

Reference:

- Markup: `src/components/Home.jsx:50-69`
- Styles: `src/styles/index.css:254-317`

Desktop behavior:

- two-column grid: copy left, image card right
- copy column is vertically centered and tall enough to feel like a landing section
- hero background adds extra glow via `::before`
- CTA row is horizontal and compact
- supporting visual card is not decorative-only; it contains image + caption copy

What matters:

- the first section feels like a campaign moment, not just a title block
- text is large, but still boxed into readable widths
- imagery is framed inside its own rounded glass card

### 2. Featured Release Section

Reference:

- Markup: `src/components/Home.jsx:74-107`
- Styles: `src/styles/index.css:545-633`

Desktop behavior:

- heading sits above the split
- media and text use a weighted two-column split
- image is large and confident
- bullets and CTA give the section utility, not just atmosphere

### 3. Watch / Live / Music Sections

Reference:

- Markup: `src/components/Home.jsx:109-223`
- Styles: `src/styles/index.css:480-530`, `643-920`

Desktop behavior:

- section intros are centered
- headline widths are constrained for dramatic wrapping
- cards sit in clean two- or four-column grids
- cards maintain visual depth through tinted surfaces, borders, and image/video emphasis

This centered intro treatment is one of the clearest home-page signatures and should be reused on the other pages much more often than it is today.

### 4. Booking Section

Reference:

- Markup: `src/components/Home.jsx:225-243`
- Styles: `src/styles/index.css:565-615`, `927-990`

Desktop behavior:

- centered intro
- two-column grid below
- both cards stretch to equal height
- CTA sits at the bottom of the booking card

This is a good model for contact, press CTA, booking, newsletter, or inquiry sections elsewhere.

## Home Page Mobile Review

Primary mobile breakpoints live at:

- `max-width: 1100px` in `src/styles/index.css:1070-1119`
- `max-width: 720px` in `src/styles/index.css:1121-1360`

### Tablet / Narrow Desktop (`<=1100px`)

- most multi-column layouts collapse to one column
- headline max-width restrictions are relaxed
- hero copy no longer forces large viewport height

### Mobile (`<=720px`)

- outer horizontal padding drops from `1rem` to `0.5rem`
- shells reduce to `1rem` internal padding and `24px` radius
- hero CTA buttons stack vertically and become width-limited full rows
- hero copy centers fully
- the right-side hero visual card is hidden
- card grids and media grids collapse to one column
- platform pills switch from wrapped horizontal rows to a single-column list
- booking/newsletter content centers and full-width buttons are used

### Mobile Style Implications

The mobile home page is not a scaled-down desktop page. It actively simplifies:

- fewer columns
- stronger centering
- clearer button stacking
- removal of non-essential decorative complexity

When updating secondary pages, preserve this same simplification pattern.

## Reusable Component Recipes

### Section Intro Recipe

Best default for secondary pages:

- `section_shell`
- `section_heading section_heading-centered` when the section is promotional, media-led, or top-level
- `eyebrow`
- `h2`
- short support paragraph

Use left-aligned intros only when the section is more informational or utility-first.

### Feature Split Recipe

Use for lead album, lead video, standout press asset, or major contact CTA.

- left: `.feature_media`
- right: `.feature_body`
- include eyebrow, `h2`, lead paragraph, and CTA row

### Card Grid Recipe

Use `.card_grid`, `.info_card`, `.track_card`, `.live_clip_card`, or `.video_card` patterns before adding new card systems.

Shared card rules:

- rounded corners
- tinted surface
- visible border
- internal spacing around `0.8rem` to `1.25rem`
- label first, strong headline second, muted support copy third

### Pill Row Recipe

Use `.pill_row` and `.pill_link` for external links, platform links, related destinations, or social links.

Do not replace these with plain text links unless the section is intentionally low-emphasis.

If the destination is a recognizable platform or social network, include the icon whenever the site already has an established icon mapping for it. Text-only platform pills feel unfinished when icon-bearing pills are used elsewhere in the system.

### CTA Row Recipe

Default CTA behavior can come from `.cta_row` and `.hero_cta_row`, but secondary pages may need route-specific overrides.

- On desktop, if a three-button intro row wraps awkwardly, add a page-specific class and let the buttons flex within a single row instead of globally shrinking all hero CTAs.
- On mobile, stacked intro buttons should usually feel wider than the default home-page cap when the page hero is more utility-driven. Prefer page-specific width rules over changing the shared home hero behavior.
- Keep the desktop and mobile behaviors intentionally separate. A fix for one breakpoint should not accidentally weaken the other.

### Embedded Media Recipe

When a video appears inside a narrow hero-side card, do not default to a raw YouTube iframe on initial render.

- Preferred pattern: styled thumbnail preview with a centered play affordance
- On click: swap the preview for the iframe and autoplay the video
- Reason: full YouTube chrome in a narrow card usually overpowers the site styling and makes the layout feel like a generic embed instead of part of the page

If a video is already playable in the page intro area, avoid repeating the same featured-video section immediately below unless it adds clearly different value.

For local video clips, set a non-zero preview timestamp when the first frame is blank or unhelpful. A tiny seek like `0.1` seconds is often enough to produce a usable poster-like frame without changing the actual clip.

### Headline Width Tuning

Shared headline width rules are a starting point, not a hard law.

- Some centered section headings need wider `max-width` values so they settle into two lines instead of three or four.
- Tune section-specific headline widths when the existing wrap feels cramped or overly tall.
- Make these adjustments locally to the relevant section pattern when possible, rather than loosening headline constraints everywhere.

### Archive / Toggle Recipe

When a section naturally has two states, such as `Upcoming` vs `Previous Shows`, prefer a simple segmented toggle inside the same shell over duplicating the section or stacking multiple archives.

- Default to the user-priority view, not necessarily the historical one
- For `/shows`, that means defaulting to `Upcoming`
- Empty states should be short and public-facing, such as `TBA` and `Check back soon`, rather than internal explanations about placeholder content
- Keep the section label minimal. A small eyebrow like `Schedule` is often enough once the toggle itself explains the available views

### Inquiry / Conversion Recipe

When a lower-page section is supposed to convert interest into outreach:

- keep one card focused on the direct action: contact details + primary CTA
- use the second card for support content like `What to include`, `Best for`, or `Who this is for`
- avoid internal or admin-facing copy that explains how unfinished content will be updated later

The section should help a visitor decide whether to reach out and what to send, not explain the page-building process.

### Visual Differentiation Rule

Adjacent routes should not open with the same hero image unless there is a deliberate campaign reason to do so. If two pages serve different jobs, their primary image should help distinguish them immediately.

## Page Alignment Guidance

These notes describe how the secondary pages should move toward the home page language.

### Music

Current file: `src/components/Music.jsx`

- already reuses home primitives well
- should lean harder into centered section intros like the home watch/live/music blocks
- should keep feature content feeling more campaign-like than archive-like
- platform area should match the home music section spacing and centering treatment
- lesson learned: intro CTA rows may need a route-specific class to hold three buttons on one desktop row while still expanding wider on mobile
- lesson learned: the platforms heading can require a wider max-width so the title lands in two lines instead of an awkward three-line stack

### Videos

Current file: `src/components/Videos.jsx`

- supporting section should use the same centered-intro rhythm as home watch
- if a future redesign adds a page hero, it should borrow from the home hero or featured split, not a plain intro card
- lesson learned: use the same route-specific desktop/mobile CTA sizing pattern as music when the intro carries three buttons
- lesson learned: a raw YouTube iframe inside the narrow hero-side card is visually too heavy; use click-to-play preview media instead
- lesson learned: once the lead video is playable in the intro card, remove any immediately repeated featured-video section below it unless that lower section changes the story meaningfully

### Shows

Current file: `src/components/Shows.jsx`

- clips section already shares strong DNA with home live
- archive and booking sections can become more editorial and centered in their intros
- page should feel like live-proof and booking momentum, not just a schedule dump
- lesson learned: the schedule/archive area works better as a toggle between `Upcoming` and `Previous Shows` than as a single past-shows list
- lesson learned: default the schedule view to the user-priority state, which is `Upcoming`, not `Previous Shows`
- lesson learned: empty upcoming states should use concise public-facing copy like `TBA` / `Check back soon`
- lesson learned: the schedule section does not need a full headline block once the toggle is present; a small eyebrow like `Schedule` is enough
- lesson learned: live clips may need a non-zero preview timestamp so the poster frame is not blank
- lesson learned: the bottom booking section works best as a conversion area: contact on one side, `What to include` guidance on the other
- lesson learned: on mobile, booking-card labels, copy, and CTA rows should be centered and stacked cleanly
- lesson learned: if a section heading becomes redundant once a toggle or control explains the state, remove the extra headline block instead of keeping filler copy around

### Press

Current file: `src/components/Press.jsx`

- strongest candidate for a more cinematic opening
- should borrow home-style centered intros and feature splits
- bio, facts, and links should remain card-based and high-contrast
- press visuals should feel curated, not merely placed side by side
- lesson learned: the hero CTA row needs the same route-specific desktop/mobile button sizing pattern used on music and videos
- lesson learned: long centered headings in visuals, bios, and quick-access sections often need a wider width preset
- lesson learned: do not reuse the same image in the hero and the very next visuals section
- lesson learned: lower CTA rows can need their own mobile stacking rule, not just the hero CTA override
- lesson learned: quick-access CTA rows at the bottom of a page should be reviewed independently on mobile; they may need their own full-width stack even if the hero buttons are already fixed

### Contact

Current file: `src/components/Contact.jsx`

- should feel closest to the home booking section
- top section can become more welcoming and intentional, with the same centered CTA energy
- social links should keep pill styling and center cleanly on mobile
- lesson learned: the hero CTA row also needs the route-specific desktop/mobile button sizing treatment
- lesson learned: avoid repeating the same contact payload in the hero and the very next card block
- lesson learned: supporting cards should explain `Best for` and `Include`, not restate the same email and note
- lesson learned: contact platform pills should include icons, matching the existing site pattern
- lesson learned: use a different hero image from press so the two routes feel distinct at first glance
- lesson learned: if platform/social pills show icons elsewhere in the site, the contact route should not fall back to text-only versions

## Implementation Rules For Future LLM Edits

When updating the secondary pages, follow these rules:

1. Reuse existing classes in `src/styles/index.css` before inventing new ones.
2. If new classes are needed, extend the same token system, radius scale, border opacity, and shadow language.
3. Prefer `section_heading-centered` for top-level and promotional sections.
4. Keep large media framed inside rounded containers with borders.
5. Keep CTAs pill-shaped and uppercase.
6. Collapse grids cleanly at the existing `1100px` and `720px` breakpoints.
7. Hide or simplify secondary visuals on mobile when they compete with clarity.
8. Keep body text muted; reserve bright color for labels, buttons, and active emphasis.
9. Maintain the dark atmospheric background. Do not move pages to a light theme.
10. Build for emotional continuity with the home page, not just class-name reuse.
11. Treat CTA sizing as a page-level composition problem. Use route-specific helper classes when one page needs different button behavior from the home hero.
12. Prefer click-to-play previews over default third-party player chrome when embedded media sits in a narrow supporting card.
13. Remove duplicated sections when the same content already appears in a stronger position higher on the page.
14. Default toggled archive/schedule sections to the state most useful to a first-time visitor.
15. Use short public-facing empty states; avoid placeholder-process explanations in user-visible UI.
16. Give contact and booking sections visitor-facing utility: what to do, what to send, and why to reach out.
17. Differentiate adjacent routes with distinct hero imagery unless intentional campaign art direction says otherwise.
18. When platform pills appear on multiple pages, keep icon usage consistent.
19. Review every CTA row separately on mobile, including lower-page CTA groups; hero fixes do not automatically solve every button stack.
20. Remove explanatory headings or paragraphs when the UI control itself already communicates the section’s structure.

## Anti-Patterns To Avoid

- plain white or flat solid-color sections
- square cards or sharp corners
- generic system-font hero headlines
- thin low-contrast text on dark backgrounds
- left-aligned everything by default
- mobile layouts that merely shrink desktop grids instead of collapsing them
- unframed images dropped directly into the page
- replacing pill buttons with raw text links in primary CTA areas
- letting a three-button hero CTA row wrap awkwardly on desktop when a local flex override would solve it
- using default YouTube chrome as the first thing users see inside a narrow hero-side card
- repeating a featured-video section directly below a hero that already presents the same video interactively
- defaulting a shows archive to the historical view when visitors are more likely looking for upcoming dates
- using long placeholder explanations where a short `TBA` or `Check back soon` message would do
- duplicating the same hero/contact payload in consecutive sections
- reusing the same hero image across neighboring routes without a strong reason
- omitting platform icons on one route when the same pill pattern includes them elsewhere
- assuming a hero CTA mobile fix automatically fixes all secondary CTA rows lower on the page
- keeping a heading/description block that merely repeats what an adjacent toggle or control already makes obvious

## Recommended LLM Prompt Snippet

Use this when asking another LLM to restyle a page:

> Update this page to match the visual language of `src/components/Home.jsx` and `src/styles/index.css`. Reuse existing shell, heading, card, CTA, pill-link, and responsive patterns first. Preserve the dark cinematic atmosphere, rounded glass surfaces, condensed headline typography, centered promotional section intros, and the mobile simplification rules at `1100px` and `720px`. Do not introduce a new design system.
