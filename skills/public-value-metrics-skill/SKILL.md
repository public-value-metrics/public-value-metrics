---
name: public-value-metrics-skill
description: Answer public value questions and build value-for-money arguments (SROI, VFM, Green Book appraisal, cost per outcome, business cases for government and social sector software) using this repo's locales/*/topics/ as the grounded source of formulas, worked examples, and pitfalls. Use when the user asks to explain a public-value concept, compute a metric, justify a public-sector or nonprofit software investment, or write a business case for a governmental or social sector audience.
---

# Public value metrics — applying this repo

This repo (`locales/<locale>/topics/<slug>/index.md`, e.g.
`locales/en-gb-oxendict/topics/social-return-on-investment/index.md`) is a curated reference: one
file per metric or concept, each with a definition, why it matters, the method, a worked example,
the software-engineering connection, pitfalls, and sources. Your job is to use it as ground truth
rather than recalling public-sector economics from general training — the docs encode
governmental conventions (the Green Book discount rate, the Social Value Act, ONS methodology)
and known pitfalls that generic knowledge gets wrong.

## Workflow

1. **Classify the ask.** Is the user asking to (a) explain a concept, (b) compute a metric from
   their own numbers, (c) pick the right metric for a decision, or (d) build a multi-metric
   business case / argument?
2. **Find the topic(s).** Scan `README.md` — it's a categorized index with a one-line hook per
   topic — to identify the most relevant file(s) in `locales/en-gb-oxendict/topics/` (the default
   locale; the same 64 topics also exist translated under `locales/<other-locale>/<translated topics directory>/`, with translated slugs). Read
   the full file(s), not just the README hook line.
3. **Follow cross-links.** Topic files link to related topics inline via `../<slug>/` (e.g.
   `social-return-on-investment/index.md` links to `../theory-of-change/` and
   `../additionality-and-deadweight/`). A real question usually spans 2–4 linked topics — follow
   them rather than answering from one file in isolation.
4. **Compute with the user's numbers, not invented ones.** Use the formulas verbatim from "The
   maths" (or "The method") section. When the user hasn't supplied a number the formula needs
   (discount rate, wellbeing valuation, unit costs), use the document's stated default (e.g. the
   Green Book's declining discount rate, HACT's Social Value Bank proxies) and say explicitly that
   you did so — don't silently assume.
5. **Surface pitfalls unprompted.** Every topic's "Pitfalls" section exists because these are the
   mistakes people actually make (e.g. claiming full attribution without netting off deadweight
   and displacement, treating cost-per-beneficiary as if it were cost-per-outcome, discounting the
   far future into irrelevance). If the user's framing walks into one, flag it before finishing
   the answer.
6. **Cite the source file(s)** you drew from (e.g. "see
   `locales/en-gb-oxendict/topics/additionality-and-deadweight/index.md`") so the user can go
   deeper or check the sources section themselves.

## Building a business case or multi-metric argument

Common composition for government or social-sector software investment cases:

- **Value framing**: [opportunity-cost-in-public-spending](../../locales/en-gb-oxendict/topics/opportunity-cost-in-public-spending/)
  for what's displaced, [cost-of-delay-in-public-programmes](../../locales/en-gb-oxendict/topics/cost-of-delay-in-public-programmes/)
  for the urgency argument, then [social-return-on-investment](../../locales/en-gb-oxendict/topics/social-return-on-investment/)
  or [value-for-money](../../locales/en-gb-oxendict/topics/value-for-money/) to net it out.
- **Appraisal-grade framing**: [green-book-appraisal](../../locales/en-gb-oxendict/topics/green-book-appraisal/)
  → [social-cost-benefit-analysis](../../locales/en-gb-oxendict/topics/social-cost-benefit-analysis/)
  → [distributional-weighting](../../locales/en-gb-oxendict/topics/distributional-weighting/) to judge who the value
  actually reaches. Digital-service-grade cases:
  [digital-service-standard](../../locales/en-gb-oxendict/topics/digital-service-standard/).
- **Proving the claim, not just asserting it**: net off
  [additionality-and-deadweight](../../locales/en-gb-oxendict/topics/additionality-and-deadweight/) and
  [displacement-and-attribution](../../locales/en-gb-oxendict/topics/displacement-and-attribution/) against a real
  [counterfactual-analysis](../../locales/en-gb-oxendict/topics/counterfactual-analysis/) — a claim that skips this
  step invites the "would it have happened anyway?" pushback.
- **Which frame and horizon**: settle whether the audience wants a
  [social-cost-benefit-analysis](../../locales/en-gb-oxendict/topics/social-cost-benefit-analysis/) (money-metric,
  Green Book style) or an [outcomes-based-accountability](../../locales/en-gb-oxendict/topics/outcomes-based-accountability/)
  frame (population results) first — they change which evidence counts, and the answer changes
  downstream.

For anything AI/software-delivery specific (developer productivity claims, technical debt,
build-vs-buy, benefits realisation), start from the "Software engineering and digital delivery
connection" section of `README.md` — these are the topics that bridge public value economics into
engineering language for a non-specialist stakeholder.

## Freshness caveat

Many figures (the Green Book discount rate, IMD releases, DORA clusters, LLM prices) are dated
in-line in each doc and refresh regularly — see README's "Benchmark freshness" note. If a number
is central to the user's decision and looks more than a year old, say so and suggest
re-verifying before it goes into a live business case.

## What not to do

- Don't answer purely from general knowledge when a topic file exists on point — read it first.
- Don't blend UK-specific frameworks (the Green Book, the Social Value Act, the Index of Multiple
  Deprivation) into a non-UK context without flagging that they're jurisdiction-specific — other
  countries have their own appraisal guides and deprivation indices.
- Don't present a computed metric without at least one caveat from that topic's Pitfalls section
  when it's plausibly relevant.
