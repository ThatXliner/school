<script lang="ts">
	import katex from 'katex';
	import { Decimal } from 'decimal.js';
	let base = new Decimal(10);
	let argument = new Decimal(100);
	let equals = new Decimal(2);
	function toValid(number: string) {
		if (number.trim().length == 0) return '0';
		return number;
	}
	function updateEquals() {
		if (argument <= new Decimal(0)) {
			argument = new Decimal(1);
		}
		equals = Decimal.log(argument, base);
	}
</script>

<div>
	<div class="p-3 bg-base-200 rounded-box w-full">
		<p class="text-5xl">Try it!</p>
		<div class="text-4xl flex flex-col space-y-3">
			<div>
				log<sub
					><input
						type="number"
						class="w-24 input"
						required
						value={base}
						min="0"
						on:input={(event) => {
							base = new Decimal(toValid(event.currentTarget.value));
							updateEquals();
						}}
					/></sub
				>
				(<input
					type="number"
					class="w-24 input"
					required
					value={argument}
					on:input={(event) => {
						argument = new Decimal(toValid(event.currentTarget.value));
						updateEquals();
					}}
				/>) =
				<input
					type="number"
					class="w-24 input"
					required
					value={equals}
					on:input={(event) => {
						// we're choosing to keep base the same
						equals = new Decimal(toValid(event.currentTarget.value));
						argument = base.pow(equals);
					}}
				/>
			</div>
			<p class="text-3xl">is the same as</p>
			<div>{@html katex.renderToString(`${base}^${equals} = ${argument}`)}</div>
		</div>
	</div>
	<div class="btn-group">
		<span class="btn btn-disabled text-base-content">Try these examples:</span>
		<button
			class="btn normal-case text-xl"
			class:btn-active={base.toNumber() == 10 && argument.toNumber() == 100}
			on:click={() => {
				base = new Decimal(10);
				argument = new Decimal(100);
				equals = new Decimal(2);
			}}>{@html katex.renderToString(`\\log_{10}{100}`)}</button
		>
		<button
			class="btn normal-case text-xl"
			class:btn-active={base.toNumber() == 2 && argument.toNumber() == 16}
			on:click={() => {
				base = new Decimal(2);
				argument = new Decimal(16);
				equals = new Decimal(4);
			}}>{@html katex.renderToString(`\\log_{2}{16}`)}</button
		>
		<button
			class="btn normal-case text-xl"
			class:btn-active={base.toNumber() == 4 && argument.toNumber() == 64}
			on:click={() => {
				base = new Decimal(4);
				argument = new Decimal(64);
				equals = new Decimal(3);
			}}>{@html katex.renderToString(`\\log_{4}{64}`)}</button
		>
	</div>
</div>
