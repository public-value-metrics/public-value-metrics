<script>
	import { resolve } from '$app/paths';

	let { data } = $props();
	const summary =
		'Public value is the worth that governments and social sector organizations create for the people they serve, judged by legitimacy, mission, and operational capacity as well as by cost. It matters because public money is limited, every choice has an opportunity cost, and citizens deserve evidence that spending improves their lives. This guide provides topics on public value maths, examples, and reasoning, each with a definition, a method, a worked example, pitfalls, and sources.';
	const worldLocales = $derived(data.locales.filter((locale) => locale.code.endsWith('-001')));
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={summary} />
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-summary">{summary}</p>
		<p class="book-hero-translations">
			Translations:
			{#each worldLocales as locale, i (locale.code)}<a href={resolve(`${locale.code}/`)}>{locale.label}</a>{i < worldLocales.length - 1 ? ', ' : ''}{/each}
		</p>
	</header>
</div>
