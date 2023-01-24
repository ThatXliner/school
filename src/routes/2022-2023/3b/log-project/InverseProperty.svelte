<script>
	import { random, isEqual } from 'lodash-es';
	import katex from 'katex';
	import Decimal from 'decimal.js';
	import Log from './Log.svelte';
	let a = new Decimal(10);
	let b = new Decimal(69);
	$: if (a.lessThanOrEqualTo(0)) {
		a = new Decimal(1);
	}
	const EXAMPLES = [[new Decimal(10), new Decimal(69)]].concat(
		[...Array(2)].map(() => {
			return [new Decimal(random(1, 69)), new Decimal(random(1, 42))];
		})
	);
</script>

<div class="card w-fit bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Inverse Property</h2>
		<p class="text-lg">
			<b>Formula:</b>
			{@html katex.renderToString(`\\log_{b}{b^x} = x`)}
		</p>
		<div class="bg-base-200 rounded-box text-3xl p-9 mx-auto">
			log <sub>
				<input
					type="number"
					class="w-24 input"
					value={a}
					min="0"
					on:change={(event) => {
						a = new Decimal(event.currentTarget.value);
					}}
				/></sub
			>({a}
			<sup
				><input
					type="number"
					class="w-24 input"
					required
					value={b}
					min="0"
					on:change={(event) => {
						b = new Decimal(event.currentTarget.value);
					}}
				/></sup
			>) = {b}
		</div>
		<div class="btn-group">
			<span class="btn btn-disabled text-base-content">Try these examples:</span>
			{#each EXAMPLES as example}
				<button
					class="btn normal-case text-xl"
					class:btn-active={isEqual([a, b], example) || isEqual([b, a], example)}
					on:click={() => {
						[a, b] = example;
					}}
					><Log base={example[0].toNumber()} argument={`${example[0]}^{${example[1]}}`} />
				</button>
			{/each}
		</div>
	</div>
</div>
