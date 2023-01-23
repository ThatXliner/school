<script>
	import { random, isEqual } from 'lodash-es';
	import katex from 'katex';
	import Decimal from 'decimal.js';
	let a = new Decimal(4);
	let b = new Decimal(2);
	$: if (a.lessThanOrEqualTo(0)) {
		a = new Decimal(1);
	}
	$: if (b.lessThanOrEqualTo(0)) {
		b = new Decimal(1);
	}
	$: c = b.pow(a);
	const EXAMPLES = [[new Decimal(4), new Decimal(2)]].concat(
		[...Array(2)].map(() => {
			return [new Decimal(random(1, 10)), new Decimal(random(1, 10))];
		})
	);
</script>

<div class="card w-fit bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Power Property</h2>
		<!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
		<div class="bg-base-200 rounded-box text-3xl p-9 mx-auto">
			<input
				type="number"
				class="w-24 input"
				value={a}
				min="0"
				on:change={(event) => {
					a = new Decimal(event.currentTarget.value);
				}}
			/>ln (<input
				type="number"
				class="w-24 input"
				required
				value={b}
				min="0"
				on:change={(event) => {
					b = new Decimal(event.currentTarget.value);
				}}
			/>) = {@html katex.renderToString(`\\ln{${b}^{${a}}} = \\ln{${c}}`)}
		</div>
		<div class="btn-group">
			<span class="btn btn-disabled text-base-content">Try these examples:</span>
			{#each EXAMPLES as example}
				<button
					class="btn normal-case text-xl"
					class:btn-active={isEqual([a, b], example) || isEqual([b, a], example)}
					on:click={() => {
						[a, b] = example;
					}}>{@html katex.renderToString(`${example[0]}\\ln{${example[1]}}`)}</button
				>
			{/each}
		</div>
	</div>
</div>
