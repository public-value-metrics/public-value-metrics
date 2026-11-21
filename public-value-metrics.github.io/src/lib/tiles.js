// Six reader-benefit tile cards for each locale's landing page. Text lives in
// tiles/<language>.json; each tile points at a topic by its canonical slug, so
// every locale links to its own translated topic URL.
export const TILE_TOPICS = [
	'public-value',
	'value-for-money',
	'theory-of-change',
	'counterfactual-analysis',
	'social-return-on-investment',
	'public-sector-kpis'
];

const files = import.meta.glob('./tiles/*.json', { eager: true, import: 'default' });

/** Tiles for a locale: exact locale, then its language, then English. */
export function tilesFor(locale) {
	return (
		files[`./tiles/${locale}.json`] ??
		files[`./tiles/${locale.split('-')[0]}.json`] ??
		files['./tiles/en.json']
	);
}
