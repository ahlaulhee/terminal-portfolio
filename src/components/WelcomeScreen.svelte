<script lang="ts">
	import 'iconify-icon';
	import { createEventDispatcher } from 'svelte';
	import typewriter from '../directives/typewriter'
	import data from '../assets/data.json';

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

<div class="flex justify-between flex-col lg:flex-row space-x-4" in:typewriter={{ speed: 3 }}>
	<div class="space-y-4">
		<pre>{name}</pre>
		<p>
			<span class="text-blue font-bold italic"> 🐱‍👤 Welcome to my portfolio! </span>
			<span>--- Type</span>
			<button on:click={() => switchMessage('help')} class="neonText">help</button>
			<span>for a list of supported commands.</span>
		</p>
	</div>
	<div class="flex flex-col text-center">
		<!-- TODO: Add Icons for each contact method -->
		<p class="text-lg font-bold border-dashed border-b-2 flex justify-center space-x-2 p-1 mb-1">
			<!-- <iconify-icon icon="mdi:account-circle" height={28}></iconify-icon> -->
			<span>🤓 {data.name}</span>
		</p>
		<p class="italic font-semibold flex justify-center space-x-2">
			<iconify-icon icon="mdi:at" height={23}></iconify-icon>
			<span>Mail</span> <span class="text-lg"> > </span>
			<span class="font-normal">{data.email}</span>
		</p>
		<p class="italic font-semibold flex justify-center space-x-2">
			<!-- <iconify-icon icon="mdi:file-account" height={23}></iconify-icon> -->
			<iconify-icon icon="mdi:account-circle" height={23}></iconify-icon>
			<span>Resume</span> <span class="text-lg"> > </span>
			<span class="font-normal">on progress</span>
		</p>
		<a href={data.github} class="italic font-semibold flex justify-center space-x-2">
			<iconify-icon icon="mdi:github" height={23}></iconify-icon>
			<span>Github</span><span class="text-xl"> > </span>
			<span class="underline decoration-double font-normal">{data.github.substring(8)}</span></a
		>
		<a href={data.linkedin} class="italic font-semibold flex justify-center space-x-2">
			<iconify-icon icon="mdi:linkedin" height={23}></iconify-icon>
			<span>LinkedIn</span><span class="text-xl"> > </span>
			<span class="underline decoration-double font-normal">{data.linkedin.substring(8)}</span></a
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
