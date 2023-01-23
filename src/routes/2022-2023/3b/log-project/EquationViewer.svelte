<script lang="ts">
	import LogBuilder from './LogBuilder.svelte';

	import Log from './Log.svelte';
	type Log = { base: number; argument: number };
	const OPERATIONS = ['+', '-'];
	type Operation = '+' | '-';
	let equations: (Log | Operation)[] = [
		{ base: 10, argument: 100 },
		'-',
		{ base: 10, argument: 69 }
	];
</script>

<div class="w-fit mx-auto bg-base-200 mt-3 rounded-box p-9">
	<div class="flex justify-start">
		{#each equations as equation, i}
			{#if typeof equation === 'string'}<select class="select w-fit text-xl">
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
				X
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
