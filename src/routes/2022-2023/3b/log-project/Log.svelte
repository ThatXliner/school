<script lang="ts">
	import katex from 'katex';
	export let base = 10;
	export let argument: string | number | undefined = undefined;
	$: renderedString = katex.renderToString(
		`\\${base == Math.E ? 'ln' : 'log'}_{${!(base == Math.E || base == 10) ? base : ''}}{${
			argument ?? ''
		}}`
	);
</script>

<!-- TODO: Change font later -->
{@html renderedString}
