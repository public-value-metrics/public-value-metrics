<script>
	import { page } from '$app/state';
	import { targetFromSearch, search } from '#lib/search.js';

	let { children } = $props();

	let target = $state('');
	let results = $state(null);
	let failed = $state(false);
	/** @type {Promise<any[]> | null} */
	let indexPromise = null;

	const onHome = $derived(page.url.pathname === '/');

	// Client-only: the home page is prerendered, so the query is read here.
	$effect(() => {
		target = onHome ? targetFromSearch(page.url.search) : '';
	});

	$effect(() => {
		const q = target;
		if (!q) {
			results = null;
			return;
		}
		failed = false;
		indexPromise ??= fetch('/search-index.json').then((r) => {
			if (!r.ok) throw new Error(String(r.status));
			return r.json();
		});
		indexPromise.then(
			(index) => {
				if (q === target) results = search(index, q);
			},
			() => {
				indexPromise = null;
				failed = true;
			}
		);
	});

</script>

{#if target}
	<section class="site-search-results" aria-live="polite" aria-label="Search results">
		<h1>Search: {target}</h1>
		{#if failed}
			<p>The search index could not be loaded.</p>
		{:else if results === null}
			<p>Searching…</p>
		{:else if results.length === 0}
			<p>No results for “{target}”. <a href="/">Back to the home page</a></p>
		{:else}
			<p>{results.length}{results.length === 50 ? '+' : ''} result{results.length === 1 ? '' : 's'}</p>
			<ol>
				{#each results as r (r.url)}
					<li>
						<a href={r.url}>{r.title}</a>
						<div class="site-search-url">{r.url}</div>
						<p>{@html r.snippet}</p>
					</li>
				{/each}
			</ol>
		{/if}
	</section>
{:else}
	{@render children?.()}
{/if}

<style>
	.site-search-results ol {
		padding-left: 1.25rem;
	}
	.site-search-results li {
		margin: 0 0 1.25rem;
	}
	.site-search-url {
		font-size: 0.8em;
		opacity: 0.7;
		word-break: break-all;
	}
	.site-search-results li p {
		margin: 0.25rem 0 0;
	}
</style>
