<script lang="ts">
	import 'iconify-icon';
	import { createEventDispatcher, onMount } from 'svelte';
	import data from '../assets/data.json';
	import { cascade } from 'svelte-typewriter';

	let animate = false;

	onMount(() => {
		animate = true;
	});

	const dispatch = createEventDispatcher();

	const name = `         __    __            ____            
  ____ _/ /_  / /___ ___  __/ / /_  ___  ___ 
 / __ \`/ __ \\/ / __ \`/ / / / / __ \\/ _ \\/ _ \\
/ /_/ / / / / / /_/ / /_/ / / / / /  __/  __/
\\__,_/_/ /_/_/\\__,_/\\__,_/_/_/ /_/\\___/\\___/ `;

	const switchMessage = (command: string) => {
		dispatch('variableChange', command);
	};
</script>

<div class="flex justify-between flex-col lg:flex-row space-x-4" use:cascade={{ interval: 5 }}>
	<div>
		<pre>{name}</pre>
		<p>
			<span class="text-blue font-bold italic"> ➤ Welcome to my portfolio! </span>
			<span>--- Type</span>
			<button on:click={() => switchMessage('help')} class="neonText">help</button>
			<span>for a list of supported commands.</span>
		</p>
	</div>
	<div class="flex flex-col text-center">
		<!-- TODO: Add Icons for each contact method -->
		<p class="text-lg font-bold border-dashed border-b-2">
			{data.name}
		</p>
		<p class="italic font-semibold">
			<span>Resume</span> <span class="text-lg"> > </span>
			<span class="underline font-normal">on progress</span>
		</p>
		<a href={data.github} class="italic font-semibold"
			><span>Github</span><span class="text-xl"> > </span>
			<span class="underline font-normal">{data.github.substring(8)}</span></a
		>
		<a href={data.linkedin} class="italic font-semibold"
			><span>LinkedIn</span><span class="text-xl"> > </span>
			<span class="underline font-normal">{data.linkedin.substring(12)}</span></a
		>
	</div>
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
