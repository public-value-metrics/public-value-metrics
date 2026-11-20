// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`#lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-gb-oxendict': 'English - Great Britain - Oxford',
	'en-001': 'English',
	'en-us': 'English - United States',
	'en-gb': 'English - Great Britain',
	'cy-gb': 'Cymraeg - Prydain Fawr',
	'cy-ar': 'Cymraeg - Ariannin',
	'cy-001': 'Cymraeg',
	'zh-001': '中文',
	'zh-cn': '中文 - 中国大陆',
	'zh-th': '中文 - 泰国',
	'hi-001': 'हिन्दी',
	'ar-001': 'العربية',
	'es-001': 'Español',
	'fr-001': 'Français',
	'ru-001': 'Русский',
	'bn-001': 'বাংলা',
	'pt-001': 'Português',
	'id-001': 'Bahasa Indonesia',
	'ur-001': 'اردو',
	'de-de': 'Deutsch - Deutschland',
	'de-at': 'Deutsch - Österreich',
	'de-001': 'Deutsch',
	'ja-jp': '日本語 - 日本',
	'ja-001': '日本語',
	'ar-eg': 'العربية - مصر',
	'ar-dz': 'العربية - الجزائر',
	'bn-bd': 'বাংলা - বাংলাদেশ',
	'bn-in': 'বাংলা - ভারত',
	'hi-in': 'हिन्दी - भारत',
	'hi-np': 'हिन्दी - नेपाल',
	'es-es': 'Español - España',
	'es-mx': 'Español - México',
	'fr-ca': 'Français - Canada',
	'fr-fr': 'Français - France',
	'ru-ru': 'Русский - Россия',
	'ru-by': 'Русский - Беларусь',
	'pt-br': 'Português - Brasil',
	'pt-pt': 'Português - Portugal',
	'ur-pk': 'اردو - پاکستان',
	'id-id': 'Bahasa Indonesia - Indonesia',
	'id-my': 'Bahasa Indonesia - Malaysia',
	'ko-kr': '한국어 - 대한민국',
	'ko-001': '한국어',
	'sv-se': 'Svenska - Sverige',
	'sv-001': 'Svenska',
	'nl-nl': 'Nederlands - Nederland',
	'nl-001': 'Nederlands',
	'vi-001': 'Tiếng Việt',
	'vi-vn': 'Tiếng Việt - Việt Nam',
	'da-001': 'Dansk',
	'et-001': 'Eesti',
	'et-et': 'Eesti - Eesti',
	'it-001': 'Italiano',
	'it-it': 'Italiano - Italia',
	'tr-001': 'Türkçe',
	'tr-tr': 'Türkçe - Türkiye',
	'pl-001': 'Polski',
	'uk-001': 'Українська',
	'cs-001': 'Čeština',
	'ro-001': 'Română',
	'hu-001': 'Magyar',
	'el-001': 'Ελληνικά',
	'fi-001': 'Suomi',
	'fi-fi': 'Suomi - Suomi',
	'is-001': 'Íslenska',
	'is-is': 'Íslenska - Ísland',
	'sw-001': 'Kiswahili',
	'sw-tz': 'Kiswahili - Tanzania',
	'th-001': 'ไทย',
	'th-th': 'ไทย - ประเทศไทย',
	'zh-tw': '中文 - 台灣',
	'bg-001': 'Български',
	'bg-bg': 'Български - България',
	'bh-001': 'भोजपुरी',
	'eu-001': 'Euskara',
	'eu-es': 'Euskara - Espainia',
	'fa-001': 'فارسی',
	'ga-001': 'Gaeilge',
	'ga-ie': 'Gaeilge - Éire',
	'gd-001': 'Gàidhlig',
	'gd-gb': 'Gàidhlig - An Rìoghachd Aonaichte',
	'gu-001': 'ગુજરાતી',
	'ha-001': 'Hausa',
	'he-001': 'עברית',
	'hr-001': 'Hrvatski',
	'hr-hr': 'Hrvatski - Hrvatska',
	'jv-001': 'Basa Jawa',
	'km-001': 'ភាសាខ្មែរ',
	'km-kh': 'ភាសាខ្មែរ - កម្ពុជា',
	'kn-001': 'ಕನ್ನಡ',
	'kw-001': 'Kernewek',
	'kw-gb': 'Kernewek - Rywvaneth Unys',
	'lb-001': 'Lëtzebuergesch',
	'lb-lu': 'Lëtzebuergesch - Lëtzebuerg',
	'lo-001': 'ພາສາລາວ',
	'lo-la': 'ພາສາລາວ - ລາວ',
	'lt-001': 'Lietuvių',
	'lt-lt': 'Lietuvių - Lietuva',
	'lv-001': 'Latviešu',
	'lv-lv': 'Latviešu - Latvija',
	'mr-001': 'मराठी',
	'ms-001': 'Bahasa Melayu',
	'mt-001': 'Malti',
	'mt-mt': 'Malti - Malta',
	'nb-001': 'Norsk bokmål',
	'nb-no': 'Norsk bokmål - Norge',
	'pa-001': 'ਪੰਜਾਬੀ',
	'pcm-001': 'Naijá',
	'sk-001': 'Slovenčina',
	'sk-sk': 'Slovenčina - Slovensko',
	'sl-001': 'Slovenščina',
	'sl-si': 'Slovenščina - Slovenija',
	'ta-001': 'தமிழ்',
	'te-001': 'తెలుగు',
	'wuu-001': '吴语',
	'cs-cz': 'Čeština - Česko',
	'da-dk': 'Dansk - Danmark',
	'el-cy': 'Ελληνικά - Κύπρος',
	'el-gr': 'Ελληνικά - Ελλάδα',
	'et-ee': 'Eesti - Eesti',
	'fr-be': 'Français - Belgique',
	'fr-lu': 'Français - Luxembourg',
	'hu-hu': 'Magyar - Magyarország',
	'nl-be': 'Nederlands - België',
	'pl-pl': 'Polski - Polska',
	'ro-ro': 'Română - România',
	'en-ie': 'English - Ireland'
};

export const DEFAULT_LOCALE = 'en-gb-oxendict';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}

/**
 * Chooses which available locale best matches the browser's preferred
 * languages (`navigator.language` / `navigator.languages`), or `null` if none
 * does. Tags are normalised first, so `cy_GB`, `cy-GB` and `CY-gb` are all
 * `cy-gb`. For each preferred tag in order, the first of these that exists
 * wins: the exact locale (`cy-gb`); the language's World locale (`de-AT` →
 * `de-001`); any other locale in that language (`pt-AO` → `pt-pt`).
 */
export function matchLocale(preferred, available) {
	const set = new Set(available);
	for (const raw of preferred) {
		if (!raw) continue;
		const tag = String(raw).trim().toLowerCase().replace(/_/g, '-');
		const language = tag.split('-')[0];
		if (!language) continue;
		if (set.has(tag)) return tag;
		if (set.has(`${language}-001`)) return `${language}-001`;
		const sameLanguage = available.find((code) => code.split('-')[0] === language);
		if (sameLanguage) return sameLanguage;
	}
	return null;
}
