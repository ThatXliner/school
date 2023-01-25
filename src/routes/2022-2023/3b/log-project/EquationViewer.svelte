<script lang="ts">
	import LogBuilder from './LogBuilder.svelte';
	import Log from './Log.svelte';
	import katex from 'katex';
	type Log = { base: number; argument: number };
	type OutputLog = { base: number; argument: [number, number] };
	const OPERATIONS = ['+', '-'];
	type Operation = '+' | '-';
	let equations: (Log | Operation)[] = [
		{ base: 10, argument: 100 },
		'-',
		{ base: 10, argument: 69 }
	];
	function condense(equations: (Log | Operation)[]) {
		let baseMaker: { [key: number]: (number | string)[] } = {};
		for (let i = 0; i < equations.length; i++) {
			const thing = equations[i];
			if (typeof thing === 'object') {
				if (!baseMaker.hasOwnProperty(thing.base)) {
					baseMaker[thing.base] = new Array();
				}
				if (i == 0) {
					baseMaker[thing.base].push(thing.argument);
				} else {
					baseMaker[thing.base].push(equations[i - 1], thing.argument);
				}
			}
		}
		console.log(baseMaker);
		let output: (OutputLog | Operation)[] = [];
		for (let pair of Object.entries(baseMaker)) {
			if (OPERATIONS.includes(pair[1][0])) {
				output.push(pair[1][0]);
				pair[1] = pair[1].slice(1);
			}
			let fraction = [1, 1];
			let shouldMul = true;
			for (let x of pair[1]) {
				if (x == '+') {
					shouldMul = true;
				} else if (x == '-') {
					shouldMul = false;
				} else {
					if (shouldMul) {
						fraction[0] *= x;
					} else {
						fraction[1] *= x;
					}
				}
			}
			let log = { base: pair[0], argument: fraction };
			output.push(log);
		}
		return output;
	}
	$: condensed = condense(equations);
</script>

<div class="w-fit mx-auto bg-base-200 mt-3 rounded-box p-9">
	<div class="flex justify-start">
		{#each equations as equation, i}
			{#if typeof equation === 'string'}<select
					class="select w-fit text-xl"
					bind:value={equations[i]}
				>
					<option selected>{equation}</option>
					{#each OPERATIONS as operation}
						{#if operation != equation}
							<option>{operation}</option>
						{/if}
					{/each}
				</select>
			{:else}
				<button
					class="btn btn-ghost normal-case h-16 btn-error hover:bg-error hover:text-error-content text-3xl"
					on:click={() => {
						if (i == 0) {
							equations = equations.slice(2);
						} else {
							// erase the one and the operation before
							equations = equations
								.slice(0, i - 1)
								.concat(equations.slice(i + 1, equations.length));
						}
					}}><Log base={equation['base']} argument={equation['argument']} /></button
				>
			{/if}
		{/each}
		<span class="text-5xl">
			=
			<span>
				<!-- Simplified versions -->
				{#each condensed as term}
					{#if typeof term === 'string'}
						{@html katex.renderToString(term)}
					{:else}
						{@const fraction = term['argument']}
						<Log
							base={term['base']}
							argument={fraction[1] === 1 ? fraction[0] : `\\frac{${fraction[0]}}{${fraction[1]}}`}
						/>
					{/if}
				{/each}
			</span>
		</span>
	</div>
	<p class="align-bottom mt-3">Click on the logarithm to remove it from the equation</p>
</div>
<div class="flex justify-around my-6">
	<LogBuilder
		on:create={(event) => {
			if (equations.length == 0) {
				equations = [event.detail, '+'];
			} else {
				equations = [...equations, '+', event.detail];
			}
		}}
	/>
</div>
