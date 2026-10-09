---
name: public-value-metrics-maintainer-skill
description: Maintain this repository — add or edit a topic file under locales/<locale>/topics/ in the established structure, keep README.md's categorized index in sync, cross-link new topics into related existing docs, and validate links and naming conventions across all locales. Use when the user asks to add a new metric/topic, edit an existing one, reorganize README.md, or check the repo for broken links or inconsistent structure.
---

# Maintaining public-value-metrics

This repo's reference docs live under `locales/<locale>/<topics dir>/<slug>/`, one directory per
topic, for each of 52 locales (the list is in `README.md`'s "Locales" section; `spec/locale/index.md`
records the decisions behind it):

- `en-gb-oxendict` — the canonical/default locale that `README.md` and the skills link into.
- `en-001`, `en-us`, `en-gb` — mechanically derived from it by `bin/derive-locales`.
- Independently translated "World" locales (`xx-001`): `cy`, `zh`, `hi`, `ar`, `es`, `fr`, `ru`, `bn`,
  `pt`, `id`, `ur`, `vi`, `da`, `et`, `it`, `tr`, `pl`, `uk`, `cs`, `ro` and, as `-001` variants of a
  country locale, `ja`, `de`, `sv`, `ko`, `nl`.
- Country locales: `cy-gb`, `zh-cn`, `de-de`, `ja-jp`, `ko-kr`, `sv-se`, `nl-nl`, `ar-eg`, `bn-bd`,
  `hi-in`, `es-es`, `fr-fr`, `ru-ru`, `pt-pt`, `ur-pk`, `id-id`. Most are content-identical to their
  language's World locale (same reasoning as `zh-cn`/`zh-001`); `cy-001` is copied from `cy-gb` and
  `zh-cn` from `zh-001` by `bin/derive-locales`.

English locales use `topics/` and English slugs; every other locale translates the directory name
and each slug (see "Slugs can differ by locale"). Every topic directory contains:

- `index.md` — the actual content
- `README.md` — a real symlink to `index.md` (`ln -s index.md README.md`), so the directory
  renders on GitHub and resolves cleanly as a URL
- `.locale-peer-id` — a bare hash, byte-identical across every locale's version of "the same"
  topic. This is the cross-locale identity key: two directories with different slugs (see
  "Slugs can differ by locale" below) are the same topic if and only if their `.locale-peer-id`
  matches. Never regenerate or hand-edit this file — copy it verbatim when creating a new
  locale's version of an existing topic, and never let two different topics share one. See
  [locale-help](https://github.com/SixArm/locale-help) for the full spec this convention follows.

Consistency is convention-based plus two checks: `sh bin/test` (structure and peer-id counts) and the
site build (`public-value-metrics.github.io`, `pnpm run build`, which also fails on broken
cross-locale links). Follow the existing pattern precisely across all 52 locales, not just one.
When translating a whole locale, translate every topic yourself, one after another — never with
subagents.

## The locale relationships (this repo's specific dialect map)

Unlike a repo with independently-translated dialects, this repo's four English locales are
**the same text**, mechanically related — content is written once and derived, not
independently authored four times:

- `en-gb-oxendict` is the master: British vocabulary (maths, licence, modelled, labour, analogue,
  programme, centre, defence) with `-ize`/`-ization` spelling (organization, optimizing,
  minimization) — this is what the Oxford English Dictionary prefers and what the OED calls
  "Oxford spelling".
- `en-us` = `en-gb-oxendict` with British vocabulary swapped to American (licence→license,
  maths→math, modelled→modeled, labour→labor, analogue→analog, programme→program, centre→center,
  defence→defense); `-ize` spelling is unchanged, since American English also uses `-ize`.
- `en-gb` and `en-001` = `en-gb-oxendict` with `-ize`/`-ization`/`-izing`/`-izes` swapped to
  `-ise`/`-isation`/`-ising`/`-ises` (organization→organisation, optimizing→optimising); British
  vocabulary is unchanged (still maths, licence, modelled, labour, analogue, programme, centre,
  defence). `en-gb` and `en-001` are text-identical to each other in this repo.

`cy-gb` and `cy-001` are a genuine Welsh translation of `en-gb-oxendict` — full prose, not a
mechanical transform — and are text-identical to each other in this repo (Welsh has no equivalent
of the World-vs-regional English split). Both translate the `topics/` directory name (`pynciau/`)
and every topic slug into Welsh, and use identical names.

The other full-language locales (every `xx-001` above except `cy-001`) are each a genuine, independent full-language translation of
`en-gb-oxendict`, following the same rule as Welsh: they translate the `topics/` directory name and every
topic slug into the locale's own language and script (e.g. `locales/cs-001/témata/veřejná-hodnota/`),
and cross-links (`../<slug>/`) use that locale's own translated slugs. A new topic's slug is
derived from its translated H1 title: drop any parenthetical, lower-case, and replace every run of
non-letter/mark/digit characters with a hyphen, keeping native script. The topic's
`.locale-peer-id` is what ties the translated slugs together. None of these has a regional variant beyond `zh-cn` (no
`es-es`, `ar-eg`, etc.) — just the single "World" form per language, matching the locale table the
project maintainer specified.

`zh-cn` (Chinese, China) is the one regional exception: it is derived as a byte-for-byte copy of
`zh-001` (see `bin/derive-locales`), not an independently-authored translation. Both use simplified
script, and this book has no Mainland-China-specific subject matter that would call for different
terminology — a genuine independent translation would read the same in practice. If that stops
being true for a given topic (e.g. a future topic references a China-specific institution or
programme), translate that topic's `zh-cn` version by hand and note the divergence; don't let
`bin/derive-locales` silently overwrite a hand-translated difference back to `zh-001`'s text.

**Practical consequence for maintainers**: when you add or edit a topic, write (or edit) it once
in `en-gb-oxendict`, then mechanically derive `en-gb`/`en-001`/`en-us` and `zh-cn`/`cy-001` with
`bin/derive-locales`, then translate (or re-translate) into `cy-gb`, `zh-001`, and the nine other
full-language locales. Never hand-edit `en-gb`, `en-001`, or `en-us` independently of
`en-gb-oxendict` — they will drift out of sync with the master and with each other. The eleven
independently-translated locales (Welsh plus the ten non-`zh-cn` "World" locales) are independent
prose and must each be re-translated
by hand when the English master changes — there is no mechanical shortcut for those.

## Slugs can differ by locale

A topic whose slug contains an `-ize`/`-ise` family word is spelled per the same rule as the
prose: e.g. the topic at `locales/en-gb-oxendict/topics/benefits-realization/` and
`locales/en-us/topics/benefits-realization/` is the same topic as
`locales/en-gb/topics/benefits-realisation/` and `locales/en-001/topics/benefits-realisation/` —
same `.locale-peer-id`, different slug. The two Welsh locales use translated directory names
(`pynciau/` and Welsh slugs), so their slugs differ from every English locale too.

## Adding a new topic

1. **Filename**: kebab-case, matching the concept, e.g.
   `locales/en-gb-oxendict/topics/net-outcome-value/index.md`. This slug is also what every
   cross-link and the README link use — pick it first and don't rename later without grepping for
   every reference across every locale.

2. **File structure** — follow this exactly (see
   `locales/en-gb-oxendict/topics/social-return-on-investment/index.md` or
   `locales/en-gb-oxendict/topics/green-book-appraisal/index.md` as reference examples):

   ```markdown
   # Title (Optional Abbreviation)

   A 2–4 sentence definition/intro paragraph: what it is and why a software engineer building
   for government or social sector organizations should care.

   ## Why it matters

   Prose paragraph(s) — the argument for why this concept matters, grounded in a real
   institutional detail (a named rule, a named body, a named framework) rather than generic
   claims.

   ## The maths

   Formula(s) or method steps in a fenced ```` ``` ```` block (plain-text notation, not a real
   programming language) where the topic is quantitative; for a framework-shaped topic (e.g. a
   named model or Act), use this section for its structure instead. Cross-reference related
   topics inline where it depends on one, e.g. "for the discount rate, see
   [social-discount-rate](../social-discount-rate/)".

   ## Worked example

   One or more concrete numeric examples, each showing the arithmetic, not just the result.
   Label distinct scenarios in bold (e.g. "**Local authority**:", "**Charity**:").

   ## Software engineering connection

   How this concept maps onto public-sector or social-sector software delivery work. This is
   what makes the repo useful to its stated audience — never skip it even for a "pure"
   public-value topic. Link related topics with relative Markdown links, e.g.
   `[flow metrics](../flow-metrics-in-government-delivery/)`.

   ## Pitfalls

   Bulleted list, each a **bolded mistake name** followed by why it's wrong and how to avoid it.
   These should be mistakes people actually make, not strawmen.

   ## Sources

   Bulleted list of real, citable sources — books, papers, or URLs in angle brackets
   `<https://...>`. No source-free claims of specific figures (rates, thresholds, prices).
   ```

3. **Cross-links use `../<slug>/`** (sibling topic directory, same locale), e.g.
   `[distributional weighting](../distributional-weighting/)`, not `distributional-weighting.md`,
   not `topics/distributional-weighting.md`, and not an absolute path — each topic lives at
   `<locale>/topics/<slug>/index.md`, so a sibling is one level up and back down. Add a reciprocal
   link from the new topic into any existing topic it clearly relates to, and from existing topics
   into the new one where relevant — cross-linking is the repo's main navigation mechanism. Add
   the new topic to every locale, deriving `en-gb`/`en-001`/`en-us` mechanically and translating
   into `cy-gb`/`cy-001`, with the same `.locale-peer-id`; if you're only adding it in English for
   now, that's fine, but say so rather than leaving other locales silently out of sync.

4. **Update `README.md`** (links into `locales/en-gb-oxendict/topics/`, the default locale):
   - Add one bullet to the correct part:
     `- [Title](locales/en-gb-oxendict/topics/new-slug/) — one-line hook`. The hook is a punchy,
     specific description (often "X — Y" format), not a restatement of the title. Titles use
     sentence case with acronyms capitalized (e.g. "Social return on investment (SROI)"), not
     Title Case.
   - Keep bullets in the section's existing order (usually foundational → specific, or the
     order the part's narrative builds in) rather than strictly alphabetical — check the
     surrounding bullets before deciding where to insert.
   - If the new topic is foundational (something several other topics will depend on), consider
     whether it belongs in the "New here?" sentence at the top.
   - Do not create a new part for one topic unless it genuinely doesn't fit any of the
     8 existing ones (Public value foundations, Governmental economic appraisal, Social value and
     impact measurement, Governmental performance and delivery metrics, Social sector and
     philanthropy metrics, Public value in digital government, Wellbeing equity and societal
     indicators, Software engineering and digital delivery connection).

5. **Dating figures**: any specific number quoted (a rate, a price, a threshold) should be dated
   in-line (e.g. "as of 2024") per the "Benchmark freshness" convention at the bottom of
   `README.md`, so future maintainers know what to re-verify.

## Editing an existing topic

- Preserve section headings and order even for a small fix — don't reorganize a file you're
  only correcting a number in.
- Edit `locales/en-gb-oxendict/topics/<slug>/index.md` (the canonical master) first, then re-derive
  `en-gb`/`en-001`/`en-us` and re-translate `cy-gb`/`cy-001` — see "The locale relationships"
  above. If you can't do the full re-derivation immediately, say so rather than leaving it
  silently unsynced.
- If you change a topic's slug (directory name), grep the whole repo for the old slug (topics
  link to each other via `../<slug>/`) and for the old title text in `README.md` before
  finishing, in every locale that uses that slug — remember slugs can legitimately differ by
  locale (see above), so don't assume a rename in one locale applies to all of them.
- If you change what a file covers substantially, re-check whether its README hook line and its
  part placement still fit.
- Never touch `.locale-peer-id` when editing content — it identifies the topic across locales,
  not a particular translation's freshness.

## Validation checklist (run before finishing any structural change)

```bash
# bin/test checks locale directories exist, every topic subdirectory has .locale-peer-id,
# index.md, and a README.md symlink, and peer-id counts match across every locale, every locale has a non-empty index.md, and every relative link resolves (bin/check-links):
bin/test

# Every locales/en-gb-oxendict/topics/*/ directory is linked from README.md, and vice versa
# (should be empty diffs):
comm -23 <(ls -d locales/en-gb-oxendict/topics/*/ | xargs -n1 basename | sort) \
         <(grep -o 'locales/en-gb-oxendict/topics/[a-z0-9-]*/' README.md | xargs -n1 basename | sort -u)
comm -13 <(ls -d locales/en-gb-oxendict/topics/*/ | xargs -n1 basename | sort) \
         <(grep -o 'locales/en-gb-oxendict/topics/[a-z0-9-]*/' README.md | xargs -n1 basename | sort -u)

# Every relative cross-link between topic files, in every locale, resolves to a real sibling
# directory:
for loc in locales/*/topics; do
  slugs=$(ls -d "$loc"/*/ | xargs -n1 basename)
  grep -rho '\]\.\./[a-z0-9.-]*/' "$loc"/*/index.md 2>/dev/null | sed 's/](\.\.\///;s#/$##' | sort -u | while read f; do
    echo "$slugs" | grep -qx "$f" || echo "BROKEN LINK in $loc -> $f"
  done
done
```

Run all before treating an add/rename/reorganize task as done. A README diff failing means a
topic was added without a README entry, or a README entry points at a nonexistent slug; a broken
cross-link means a `../slug/` typo'd or wasn't updated after a rename; `bin/test` failing means a
locale is missing a topic, an `index.md`, a `README.md` symlink, or has a mismatched peer-id count
relative to the others.
