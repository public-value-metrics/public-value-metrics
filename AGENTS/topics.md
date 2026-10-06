# Topics: authoring and editing

A topic is one directory, `locales/en-gb-oxendict/topics/<slug>/`, holding `index.md`, a
`README.md -> index.md` symlink, and `.locale-peer-id`. The canonical English file is written first;
everything else follows from it. The maintainer skill (`skills/public-value-metrics-maintainer-skill/SKILL.md`)
has the long form; this is the short checklist.

## File structure (do not reorder or rename sections)

```
# Title (Optional Abbreviation)
2–4 sentence definition: what it is, and why an engineer building for government or the social sector cares.
## Why it matters        prose grounded in a named rule, body or framework
## The maths             plain-text formulas in a fenced block (or the structure of a framework-shaped topic)
## Worked example        numeric scenarios, arithmetic shown, each labelled in bold (**Local authority**:, **Charity**:)
## Software engineering connection   how it maps to delivery work; never skipped
## Pitfalls              bullets: **bold mistake name** — why it is wrong, how to avoid it
## Sources               real, citable books/papers/URLs in <angle brackets>
```

Reference examples: `social-return-on-investment`, `green-book-appraisal`.

## Conventions

- Slug: kebab-case concept name. Pick it first; renaming means grepping every locale.
- Cross-links are sibling-relative: `[value for money](../value-for-money/)`. Never `.md` paths, never
  absolute paths. Add reciprocal links to and from related topics.
- Every quoted figure (rate, price, threshold) is dated in-line ("as of 2024"); see README "Benchmark freshness".
- Sentence-case titles with capitalised acronyms. Spelling in `en-gb-oxendict` is Oxford (-ize, British
  vocabulary); `en-gb`/`en-001`/`en-us` are derived, never edited.
- Citations such as "Green Book, Chapter 5" are references to someone else's document; leave them. The
  book's own structure is *parts* containing *topics*; do not call topics "chapters".

## Adding a topic

1. Write `locales/en-gb-oxendict/topics/<slug>/index.md`; create the `README.md` symlink; generate a
   `.locale-peer-id` (`bin/locale-peer-id`).
2. Add one README bullet in the right part: `- [Title](locales/en-gb-oxendict/topics/<slug>/) — specific one-line hook`,
   in the part's narrative order, not alphabetical. Do not add a part for a single topic.
3. `sh bin/derive-locales` for the derived locales; then translate into every other locale with the same
   `.locale-peer-id` (see `AGENTS/locales.md`), or say plainly which locales are not yet updated.
4. Link it from related topics; run the checks in `AGENTS/workflow.md`.

## Editing a topic

Edit the canonical file first, keep section headings and order, re-derive, and re-translate. If the change
alters what the file covers, re-check its README hook and part. Never touch `.locale-peer-id`.
