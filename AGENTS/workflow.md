# Workflow, checks and git

## Before you commit anything under `locales/`, `README.md` or the site

```sh
sh bin/derive-locales                       # only if canonical/cy-gb/zh-001 changed
sh bin/test                                 # structure, peer-id counts, non-empty indexes, link check; exits 1 on failure
cd public-value-metrics.github.io
node bin/sync-content.mjs                   # refresh content/ (committed)
pnpm run build                              # must finish with the search index and llms lines
```

Also confirm: every canonical topic is linked from `README.md` and vice versa (see the `comm` checks in the
maintainer skill), and every new/edited English topic follows `AGENTS/topics.md`.

## Specs are the source of truth

Behaviour is specified in `spec/`. If you change behaviour, change the spec in the same commit; if you
find the code and spec disagree, fix whichever is wrong and say which. Specs: `locale`,
`locales-for-global-sharing-with-svelte`, `contents-for-global-sharing-with-svelte`, `search`, `llms`.

## Documentation upkeep

When a count, list or convention changes, update every place it is stated: `README.md` (locale count and
bullets), the site README, `AGENTS.md` and `AGENTS/*`, the two skills, and the relevant spec. Prefer
computing a number (as the site does) over typing it.

## Git

- One logical change per commit, imperative subject ("Add ro-001 locale: Romanian (World) full translation").
- Commits are SSH-signed. A passphrase timeout fails the commit; re-run it, then verify with
  `git log --show-signature -1`.
- End commit messages with the Co-Authored-By trailer given by your harness.
- Push (`git push origin main`; origin has GitHub, Codeberg and GitLab push URLs) only when asked. Pushing
  to `main` triggers the Pages deploy.
- Never rewrite published history; never edit `.locale-peer-id`.
