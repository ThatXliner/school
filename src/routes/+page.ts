export async function load() {
	const pages = import.meta.glob('./**/+page.svelte', { eager: true }) as Record<
		string,
		{ metadata?: { title: string; description: string } }
	>;

	const routes: { path: string; year: string; title: string; description: string }[] = [];

	for (const [key, mod] of Object.entries(pages)) {
		// key looks like "./2021-2022/4a/+page.svelte"
		const path = key.replace(/^\./, '').replace(/\/\+page\.svelte$/, '');
		if (!path) continue; // skip root

		const year = path.split('/')[1]; // e.g. "2021-2022"
		const meta = mod.metadata ?? { title: path, description: '' };
		routes.push({ path, year, ...meta });
	}

	// Group by year, sorted descending
	const grouped: Record<string, typeof routes> = {};
	for (const route of routes.sort((a, b) => b.year.localeCompare(a.year))) {
		(grouped[route.year] ??= []).push(route);
	}

	return { grouped };
}
