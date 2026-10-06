# Locales: structure, paths and adding one

46 locales live under `locales/`. The list with names is the "Locales" section of `README.md`;
`spec/locale/index.md` records decisions; `spec/locales-for-global-sharing-with-svelte/locales.tsv` is the
upstream baseline (all present).

## Kinds of locale

| Kind | Locales | How content is produced |
|---|---|---|
| Canonical | `en-gb-oxendict` | hand-written; its `index.md` is an intentional empty placeholder (root `README.md` is its contents page) |
| Derived English | `en-gb`, `en-001`, `en-us` | `sh bin/derive-locales` from canonical; never hand-edit |
| Derived copies | `cy-001` (from `cy-gb`), `zh-cn` (from `zh-001`) | `sh bin/derive-locales` |
| Independent translations | the other `xx-001` and country locales | translated by hand, serially |
| Content-identical country/World pairs | e.g. `de-de`/`de-001`, `ja-jp`/`ja-001` | identical text and identical paths |

## Path convention

- English locales: `locales/<code>/topics/<english-slug>/` (`en-gb`/`en-001` spell `-ise` slugs: `benefits-realisation`).
- Every other locale: `locales/<code>/<translated topics word>/<translated slug>/`, e.g.
  `locales/cs-001/témata/veřejná-hodnota/`, `locales/ja-jp/トピック/…`, `locales/ro-001/subiecte/…`.
- Slug derivation (implemented by `bin/translate-paths`, which produced all 42 non-English locales): take the translated H1,
  drop parentheticals, strip quotation marks, lower-case (Turkish: `İ→i`, `I→ı`), replace every run of
  characters that are not letters, combining marks or digits with `-`, trim hyphens, NFC-normalise.
  Native script is kept; there is no transliteration.
- Topics word per language: ar المواضيع, bn বিষয়সমূহ, cs témata, cy pynciau, da emner, de themen, es temas,
  et teemad, fr sujets, hi विषय, id topik, it argomenti, ja トピック, ko 주제, nl onderwerpen, pl tematy,
  pt tópicos, ro subiecte, ru темы, sv ämnen, tr konular, uk теми, ur موضوعات, vi chủ-đề, zh 主题.
  Locales of the same language share it.
- Links: inside a topic, `../<that locale's slug>/`. In a locale's `index.md`, the intro links to
  `locales/<code>/<topics word>/<slug>/` and every contents entry links to
  `locales/en-gb-oxendict/topics/<english-slug>/`.
- `.locale-peer-id` is copied byte-for-byte from the canonical topic and is the only thing tying
  differently named directories together.

## Adding a locale (procedure)

1. Scaffold: for every canonical topic create `locales/<code>/topics/<english-slug>/` with the copied
   `.locale-peer-id` and a `README.md -> index.md` symlink; add `locales/<code>/README.md -> index.md`.
2. Translate every topic into `index.md`, serially, yourself — **never delegate to subagents**. Follow
   `AGENTS/translation.md`.
3. Write `locales/<code>/index.md` by translating an existing locale's index (same 8 parts, 64 entries,
   intro linking `public-value`, `value-for-money`, `theory-of-change`).
4. Translate paths: add the language's topics word to `TOPICS` in `bin/translate-paths` if it is new, run
   `bin/translate-paths <code>` (dry run) then `bin/translate-paths --apply <code>`, and confirm
   `bin/check-links` reports 0 broken. The helper renames `topics/` and each slug and rewrites
   `../<slug>/` and intro links.
5. Register: README locale count word and bullet; `public-value-metrics.github.io/src/lib/locales.js`
   (`LOCALE_LABELS`); `src/lib/i18n.js` (a UI-strings block before `const TRANSLATIONS`, plus the mapping).
   The block needs every key of the previous one and must not contain `contentsIntro` or
   `topicsCountSubtitle`.
6. `node bin/sync-content.mjs`, `pnpm run build`, `sh bin/test`, commit (signed), then push only if asked.
