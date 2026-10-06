# Translating topics

Rules for translating a topic file into another locale. They were applied to all 43 non-English locales,
so follow them for consistency.

## Keep

- Section order and the six standard sections, with translated headings used consistently within the
  locale (decide once: Why it matters / The maths / Worked example / Software engineering connection /
  Pitfalls / Sources).
- Every number, formula, code block layout, URL, citation title and author name. Currency stays in £/$
  as written; do not convert.
- Names of bodies, acts and frameworks in English where that is how the locale's readers know them
  (Green Book, Magenta Book, GOV.UK, ONS, HM Treasury, NICE, WELLBY, SROI, QALY, DORA, IRIS+).
  A translated gloss on first use is fine.
- Relative links: keep the target slug as it is in the file you are translating from, then let the
  path-translation step rewrite them. Links to sibling topics must still resolve afterwards.

## Translate

- All prose, scenario labels (**Local authority**, **Charity**…), pitfalls, headings, and the title (H1).
  The H1 becomes the slug, so make it a natural, specific title without relying on the abbreviation.
- Sentences should read like local professional writing, not calques. Prefer the locale's established
  term for a concept (deadweight, displacement, counterfactual, discount rate, opportunity cost, value for
  money) and use it identically in every topic. Keep a per-locale term list in your head or notes while
  working and re-check the first topics against it at the end.
- Decimal separators and thousands grouping follow the target locale in prose and code blocks
  (e.g. `1,44`, `1 350 000`, `1.350.000`), consistently within a locale.

## Quality pass (before committing)

- Every topic file exists and is non-empty; no English paragraphs left over; no stray characters from a
  different script or language (a quick `grep -P` for the wrong script catches most slips).
- Typos in headings and terms are fixed with targeted edits, not by re-translating.
- `bin/check-links` reports 0 broken; the site builds.
- Say in the commit/handoff that the translation is AI-produced and unreviewed by a fluent speaker.
