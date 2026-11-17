# Contributing to Public Value Metrics

Thanks for helping improve this project.

## Ways to contribute

- **Report a problem:** open an issue describing what is wrong, unclear, or missing.
- **Fix or improve something:** open a pull request. Small fixes can go straight to a pull request; for larger changes, please open an issue first so we can agree on the approach.

## Layout

- `locales/en-gb-oxendict/topics/<slug>/index.md`: the canonical topics. `README.md` is the categorized index of all topics.
- Other locales live in `locales/<locale>/`; `en-gb`, `en-001` and `en-us` are derived from the canonical locale, so do not hand-edit them.
- `spec/`: the specifications. Read them before changing behaviour.
- `public-value-metrics.github.io/`: the SvelteKit reading site. `content/` there is generated and committed; do not edit it by hand.

## Checks

```sh
sh bin/test            # structure checks for every locale, plus the link check
bin/check-links        # relative-link check on its own
sh bin/derive-locales  # regenerate derived locales
cd public-value-metrics.github.io && pnpm install && pnpm run sync && pnpm run build
```

Run `pnpm run sync` after any change under `locales/` or `README.md`. AI agents should also read [AGENTS.md](AGENTS.md).

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contribution is offered under the terms in [LICENSE.md](LICENSE.md).
