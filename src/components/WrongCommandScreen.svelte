<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { concurrent } from 'svelte-typewriter';

	const dispatch = createEventDispatcher();

	const switchMessage = (command: string) => {
		dispatch('variableChange', command);
	};
</script>

<div class="text-red font-semibold" use:concurrent={{}}>
	<p class="text-lg text-center">Oops! It seems like you entered an unknown command. 🤔</p>

	<p>
		<span>If you're not sure where to go, type (or click) </span>
		<span class="neonText" on:click={() => switchMessage('help')}>'help'</span>
		<span>
			to see a list of available commands. Alternatively, feel free to explore the welcome screen or
			check out the available sections by typing their names.
		</span>
	</p>
	<p class="text-lg text-center">Happy navigating! 🚀</p>
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
