# The site (`public-value-metrics.github.io/`)

SvelteKit + `adapter-static` + the Lily Design System, prerendered to plain HTML and deployed to GitHub
Pages by `.github/workflows/pages.yml` on every push to `main`. Its own README has the full tour; this is
what an agent needs.

## Data flow

`locales/**` and `README.md` --(`node bin/sync-content.mjs`)--> `content/` (committed, generated) -->
`import.meta.glob` in `src/lib/server/content.js` --> `+page.server.js` loads at build time.

- Sync maps every locale's translated topics directory back to `topics/` and rewrites the locale index's
  intro links, so routes are always `/<locale>/topics/<slug>/`. Topic slugs stay locale-specific.
- The README's `## Heading` parts and `- [Title](locales/en-gb-oxendict/topics/<slug>/) — blurb` lines define
  the table of contents, reading order, sidebar and previous/next. Locale indexes mirror it line for line.
- Cross-locale links use the peer-id (`content.js` `peers()`), so slugs may differ freely.
- There are no two-letter alias routes: a locale is served only at its own `<language>-<region>` path.

## Build outputs

`pnpm run build` = `vite build` + `scripts/build-search-index.mjs` (`search-index.json`) +
`scripts/build-llms.mjs` (`llms.txt`, `llms.json`; spec: `spec/llms/`; sync also commits copies at the repo root and in `static/`) +
`scripts/build-sitemap.mjs` (`sitemap.xml`; spec: `spec/sitemap/`). Home-page counts come from content.

## Rules

- UI strings: `src/lib/i18n.js`, one block per locale, falling back to English; labels in `src/lib/locales.js`.
- Contents page: plain nested list, "N Title" parts and "N.M Title" topics; no tiles/tables/columns/flexbox/grid
  (`spec/contents-for-global-sharing-with-svelte/`).
- Lily components come from `@lilydesignsystem/*` (theme CSS is copied into `static/assets/themes/` on
  install and is not committed). The site's own CSS uses Lily semantic tokens only.
- `base` path is empty (the repo is `<org>.github.io`); leave `BASE_PATH` unset.
- Dependencies: `pnpm update --latest`. pnpm 11's release-age gate delays brand-new releases; leave it.
  `typescript` stays on 6.x while `@sveltejs/kit` peers `^6`. Always rebuild after upgrading.

## Locale picker and the URL

The URL is the source of truth for the locale. The Lily locale picker fires `onChange` both when a reader picks a language and when it merely follows the URL (a link, Back/Forward, a direct load); `navigateToLocale` in `src/routes/+layout.svelte` ignores a change whose code already matches the address bar's first path segment, so following the URL never navigates away. A saved locale only applies on locale-less pages (`/`, `/about/`).
