# Locale implementation status

Status of `spec/locales-for-global-sharing-with-svelte/` for this repo, updated when that spec is
implemented or re-verified here.

## Locales (17)

All 15 locales listed in `spec/locales-for-global-sharing-with-svelte/locales.tsv` exist and are
verified, plus two extras this repo already had before that spec arrived (kept, not removed, since
the spec doesn't say to prune):

- `ar-001`, `bn-001`, `cy-001`, `en-001`, `en-gb`, `en-gb-oxendict`, `en-us`, `es-001`, `fr-001`,
  `hi-001`, `id-001`, `pt-001`, `ru-001`, `ur-001` — from `locales.tsv`, pre-existing.
- `zh-cn` — from `locales.tsv`, added by this pass. Derived as a byte-for-byte copy of `zh-001`
  (see "zh-cn" below), not an independently-authored translation.
- `cy-gb`, `zh-001` — not in `locales.tsv`, kept from before this spec arrived.

## What this pass did

1. **Verified structure** for every locale: `bin/test` passes (every topic has `index.md`,
   `.locale-peer-id`, and a `README.md` symlink; peer-id counts match across all 17 locales), and a
   full cross-locale link scan found zero broken `../<slug>/` references.

2. **Fixed dialect-guidance gaps** in `bin/derive-locales`'s `en-gb-oxendict` → `en-us` transform
   (see the "Guidance" section of the spec). It was missing these word pairs, present in the book's
   actual content: `cancelled/cancelling` → `canceled/canceling`, `labelled/labelling` →
   `labeled/labeling` (including compounds with no leading word boundary, e.g. `relabelling` →
   `relabeling`), `behaviour(s)` → `behavior(s)`, `neighbour(s)` → `neighbor(s)`, `theatre(s)` →
   `theater(s)`, `enrolment` → `enrollment` / `enrol` → `enroll`. Re-ran `bin/derive-locales` after
   the fix; `en-us`, `en-gb`, `en-001` are now regenerated and consistent. Checked for the reverse
   problem (a stray `-ise`-family spelling in the `en-gb-oxendict` master that should be `-ize`) and
   found none — every `-ised`/`-ising`/`-isation` match in the master is a word that is spelled
   `-ise` in both dialects (`advise`, `revise`, `surprise`, `arise`, `promise`, `raise`, `premise`,
   `enterprise`, `crisis/crises`, `fundraising`), not a missed alternation.

3. **Added `zh-cn`** (Chinese, China): scaffolded (`.locale-peer-id` copied per-topic from `zh-001`,
   root `locales/zh-cn/.locale-peer-id` copied from the shared root peer-id every other locale's
   root `index.md` uses) and populated by copying `zh-001`'s content verbatim. Both `zh-001` and
   `zh-cn` use simplified script, and this book covers no Mainland-China-specific subject matter, so
   an independently-authored `zh-cn` translation would read the same as `zh-001` in practice — see
   the maintainer skill's "locale relationships" section for the full reasoning and the caveat for
   if that stops being true. `bin/derive-locales` now re-derives `zh-cn` from `zh-001` on every run,
   the same way it already re-derives `cy-001` from `cy-gb`.

## Not done in this pass

- The `spec/locales-for-global-sharing-with-svelte/index.md` "Bug fixes (regression watch-list)"
  section describes bugs and fixes in a *site's* Svelte/routing code (ASCII-only slug regexes,
  hardcoded English UI chrome, canonical-only home pages, hardcoded link-extraction phrases,
  locale-agnostic header wordmark) — those apply to `public-value-metrics.github.io` (this repo's
  companion site, in `public-value-metrics.github.io/`), not to this book repo's content. That
  site already implements the described fixes (dynamic locale discovery, `i18n.js` UI-chrome
  translation, per-locale `+layout.server.js` title override, intro-block link extraction, `[^/]+`
  slug regexes) — built before this spec file arrived here, independently converging on the same
  fixes it describes. `zh-cn` has not yet been added to that site's `src/lib/locales.js`
  `LOCALE_LABELS` table or synced into its `content/`; do that (`pnpm run sync:content` picks up
  the new locale automatically once `LOCALE_LABELS` has an entry, else it falls back to the raw
  code) before the next site rebuild/deploy.
- `cy-gb`/`cy-001` and `zh-001` were not removed even though they're outside `locales.tsv`'s exact
  15-locale list — pruning completed translations wasn't asked for, and the spec doesn't state
  the list is exhaustive/exclusive for every repo it was pushed to (the same `locales.tsv` is
  identical across several sibling repos in this project family, which reads as a shared baseline
  rather than a strict per-repo ceiling). Revisit if that reading is wrong.
