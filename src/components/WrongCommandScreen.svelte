<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { concurrent } from 'svelte-typewriter';

	const dispatch = createEventDispatcher();

	const switchMessage = (command: string) => {
		dispatch('variableChange', command);
	};
</script>

<div class="text-error font-semibold" use:concurrent={{}}>
	<p class="text-xl text-center">Error: Unknown command.</p>

	<p class="text-lg text-center">
		<span>If you're not sure where to go, type (or click) </span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span class="neonText cursor-pointer" on:click={() => switchMessage('help')}>'help'</span>
		<span> to see a list of available commands. </span>
	</p>
</div>

<style>
	.neonText {
		color: #fff;
		text-shadow:
			0 0 7px #fff,
			0 0 10px #fff,
			0 0 21px #fff;
	}
</style>
