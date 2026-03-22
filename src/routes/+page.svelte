<script lang="ts">
	import { base } from '$app/paths';
	export let data;
</script>

<div class="min-h-screen flex flex-col items-center justify-center p-8">
	<div class="max-w-2xl w-full">
		<h1 class="text-4xl font-bold mb-4">School Projects</h1>
		<p class="text-lg text-base-content/70 mb-8">
			A collection of interactive web apps and projects I've built for school assignments over the
			years.
		</p>

		<div class="flex flex-col gap-4">
			{#each Object.entries(data.grouped) as [year, routes]}
				<h2 class="text-2xl font-semibold mt-4">{year}</h2>
				{#each routes as route}
					<a href="{base}{route.path}" class="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
						<div class="card-body">
							<h3 class="card-title">{route.title}</h3>
							<p>{route.description}</p>
						</div>
					</a>
				{/each}
			{/each}
		</div>
	</div>
</div>
