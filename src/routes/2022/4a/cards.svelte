<script>
	import { PlusIcon, MinusIcon } from 'svelte-feather-icons';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	let players = [
		{ c: 0, o: 0, h: 0 },
		{ c: 0, o: 0, h: 0 }
	];
</script>

<main>
	<SvelteToast />
	<br />
	<div class="button-panel">
		<span
			on:click={() => {
				players = [...players, { c: 0, o: 0, h: 0 }];
			}}
			class="btn btn-primary ml-3"
		>
			<PlusIcon size="24" class="inline" /> Add player
		</span>
		<span
			on:click={() => {
				players = players.slice(0, players.length - 1);
			}}
			class="btn btn-primary ml-3"
		>
			<MinusIcon size="24" class="inline" /> Remove player
		</span>
	</div>
	<br />
	<div class="players">
		{#each players as player, i}
			{@const cur = i}
			<div class="border rounded">
				<h3 class="ml-3">Player {i + 1}</h3>
				<br />
				<table class="table">
					<thead><tr><td>Carbon</td><td>Hydrogen</td><td>Oxygen</td></tr></thead>
					<tbody>
						<tr
							><td><input type="number" step="1" bind:value={players[cur].c} /></td><td
								><input type="number" step="1" bind:value={players[cur].h} /></td
							><td><input type="number" step="1" bind:value={players[cur].o} /></td><td
								><div
									class="btn btn-secondary"
									on:click={() => {
										const us = players[cur];
										if (us.o >= 6 && us.h >= 12 && us.c >= 6) {
											players[cur].o -= 6;
											players[cur].h -= 12;
											players[cur].c -= 6;
											toast.push('Done! Created <i>1</i> glucose', {
												theme: {
													'--toastBackground': '#48BB78',
													'--toastBarBackground': '#2F855A'
												}
											});
										} else {
											toast.push('Error! Not enough resources', {
												theme: {
													'--toastBackground': '#F56565',
													'--toastBarBackground': '#C53030'
												}
											});
										}
									}}
								>
									Make glucose
								</div></td
							><td
								><div
									class="btn btn-success"
									on:click={() => {
										players[cur].h += 2;
										players[cur].o++;
									}}
								>
									Get water
								</div></td
							><td
								><div
									class="btn btn-success"
									on:click={() => {
										players[cur].c++;
										players[cur].o += 2;
									}}
								>
									Get CO2
								</div></td
							><td
								><div
									class="btn btn-danger"
									on:click={() => {
										players[cur].h -= 2;
										players[cur].o--;
									}}
								>
									Remove water
								</div></td
							><td
								><div
									class="btn btn-danger"
									on:click={() => {
										players[cur].c--;
										players[cur].o -= 2;
									}}
								>
									Remove CO2
								</div></td
							></tr
						>
					</tbody>
				</table>
			</div>
		{/each}
	</div>
</main>
