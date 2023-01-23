<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let base: number = 10,
		argument: number | undefined;
	const dispatch = createEventDispatcher();
	const submit = () => {
		dispatch('create', { base, argument });
		argument = undefined;
		base = 10;
	};
</script>

<div
	class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
	on:keydown={(event) => {
		if (event.key == 'Enter' && !(argument == undefined || argument <= 0)) {
			submit();
		}
	}}
>
	<div class="card-body">
		<div class="form-control">
			<label class="label">
				<span class="label-text">Base</span>
			</label>
			<input
				type="number"
				placeholder={`${Math.E}`}
				class="input input-bordered w-fit"
				bind:value={base}
			/>
			<label class="label">
				<button
					class="btn btn-secondary btn-xs"
					on:click={() => {
						base = Math.E;
					}}>Use natural log</button
				>
			</label>
		</div>
		<div class="form-control">
			<label class="label">
				<span class="label-text">Argument <span class="text-red-500 text-lg">*</span></span>
			</label>
			<input
				type="number"
				class="input input-bordered w-fit"
				bind:value={argument}
				on:change={() => {
					if (argument !== undefined && argument <= 0) {
						argument = 1;
					}
				}}
			/>
		</div>
		<div class="form-control mt-6">
			<button
				class="btn btn-primary"
				disabled={argument == undefined || argument <= 0}
				on:click={submit}>Add Logarithm</button
			>
		</div>
	</div>
</div>
