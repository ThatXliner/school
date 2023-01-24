<script>
	import { random, isEqual } from 'lodash-es';
	import katex from 'katex';
	import Decimal from 'decimal.js';
	let a = new Decimal(3);
	let b = new Decimal(23);
	$: if (a.lessThanOrEqualTo(0)) {
		a = new Decimal(1);
	}
	$: if (b.lessThanOrEqualTo(0)) {
		b = new Decimal(1);
	}
	$: c = a.mul(b);
	const EXAMPLES = [[new Decimal(3), new Decimal(23)]].concat(
		[...Array(2)].map(() => {
			return [new Decimal(random(1, 42)), new Decimal(random(1, 69))];
		})
	);
</script>

<div class="card w-fit bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Product Property</h2>
		<p class="text-lg">
			<b>Definition:</b>
			{@html katex.renderToString(`\\log_{b}{x} + \\log_{b}{y} = \\log_{b}{xy}`)}
		</p>
		<div class="bg-base-200 rounded-box text-3xl p-9 mx-auto">
			ln (<input
				type="number"
				class="w-24 input"
				value={a}
				min="0"
				on:change={(event) => {
					a = new Decimal(event.currentTarget.value);
				}}
			/>) + ln (<input
				type="number"
				class="w-24 input"
				required
				value={b}
				min="0"
				on:change={(event) => {
					b = new Decimal(event.currentTarget.value);
				}}
			/>) = {@html katex.renderToString(`\\ln{${a}\\cdot{${b}}} = \\ln{${c}}`)}
		</div>
		<div class="btn-group">
			<span class="btn btn-disabled text-base-content">Try these examples:</span>
			{#each EXAMPLES as example}
				<button
					class="btn normal-case text-xl"
					class:btn-active={isEqual([a, b], example) || isEqual([b, a], example)}
					on:click={() => {
						[a, b] = example;
					}}>{@html katex.renderToString(`\\ln{${example[0]}} + \\ln{${example[1]}}`)}</button
				>
			{/each}
		</div>
	</div>
</div>
