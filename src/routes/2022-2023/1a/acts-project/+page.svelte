<script context="module">
	export const metadata = {
		title: 'ACTs Project',
		description: 'A separate site built for a class project.'
	};
</script>

<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.location.href = 'https://thatxliner.github.io/acts-project';
	});
</script>

<p>
	You should be redirected to <a
		class="link link-primary"
		href="https://thatxliner.github.io/acts-project">https://thatxliner.github.io/acts-project</a
	>. Otherwise, click that link.
</p>
