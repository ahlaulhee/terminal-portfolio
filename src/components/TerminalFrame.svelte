<script lang="ts">
	import 'iconify-icon';
	import data from '../assets/data.json';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let commandInput = '';

	const switchMessage = (command: string) => {
		console.log('command submitted');
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		if (!commandInput) return;
		if (event.key === 'Enter') {
			switchMessage(commandInput);
			dispatch('variableChange', commandInput);
		}
	};

	// 	const name = `		 |  \\     |  \\                 |  \\  \\
	//   ______ | ▓▓____ | ▓▓ ______  __    __| ▓▓ ▓▓____   ______   ______
	//  |      \\| ▓▓    \\| ▓▓|      \\|  \\  |  \\ ▓▓ ▓▓    \\ /      \\ /      \\
	//   \\▓▓▓▓▓▓\\ ▓▓▓▓▓▓▓\\ ▓▓ \\▓▓▓▓▓▓\\ ▓▓  | ▓▓ ▓▓ ▓▓▓▓▓▓▓\\  ▓▓▓▓▓▓\\  ▓▓▓▓▓▓\\
	//  /      ▓▓ ▓▓  | ▓▓ ▓▓/      ▓▓ ▓▓  | ▓▓ ▓▓ ▓▓  | ▓▓ ▓▓    ▓▓ ▓▓    ▓▓
	// |  ▓▓▓▓▓▓▓ ▓▓  | ▓▓ ▓▓  ▓▓▓▓▓▓▓ ▓▓__/ ▓▓ ▓▓ ▓▓  | ▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓▓▓
	//  \\▓▓    ▓▓ ▓▓  | ▓▓ ▓▓\\▓▓    ▓▓\\▓▓    ▓▓ ▓▓ ▓▓  | ▓▓\\▓▓     \\▓▓     \\
	//   \\▓▓▓▓▓▓▓\\▓▓   \\▓▓\\▓▓ \\▓▓▓▓▓▓▓ \\▓▓▓▓▓▓ \\▓▓\\▓▓   \\▓▓ \\▓▓▓▓▓▓▓ \\▓▓▓▓▓▓▓
	// `;

	// 	const name2 = `
	//      _   _         _ _
	//  ___| |_| |___ _ _| | |_ ___ ___
	// | .'|   | | .'| | | |   | -_| -_|
	// |__,|_|_|_|__,|___|_|_|_|___|___|
	//                                  `;

	const name = `         __    __            ____            
  ____ _/ /_  / /___ ___  __/ / /_  ___  ___ 
 / __ \`/ __ \\/ / __ \`/ / / / / __ \\/ _ \\/ _ \\
/ /_/ / / / / / /_/ / /_/ / / / / /  __/  __/
\\__,_/_/ /_/_/\\__,_/\\__,_/_/_/ /_/\\___/\\___/ `;
	// TODO: Add funcionality to window buttons
	// TODO: Add animation to frame
</script>

<main class="min-h-screen flex items-center justify-center">
	<div class={`bg-background border-[#1f2229] border-2 shadow-md h-[95vh] w-[95vw] opacity-90`}>
		<div class="bg-[#303640] flex justify-between text-smoke border-l-4 border-red">
			<div class="w-1/3 text-lg text-left flex">
				<p class="border-r-2 border-[#1f2229] px-2 w-fit h-full">ahlaulhe@portfolio</p>
				<iconify-icon icon="mdi:plus" height="30"></iconify-icon>
			</div>
			<div class="w-1/3 text-center"></div>
			<div class="w-1/3 text-right">
				<iconify-icon icon="mdi:window-minimize" height="28"></iconify-icon>
				<iconify-icon icon="mdi:window-maximize" height="28"></iconify-icon>
				<iconify-icon icon="mdi:window-close" height="28"></iconify-icon>
			</div>
		</div>
		<div class="w-full text-smoke px-4 pt-2">
			<div class="flex justify-between flex-col lg:flex-row space-x-4">
				<div>
					<pre>{name}</pre>
					<p>
						<span class="text-blue font-bold italic"> ➤ Welcome to my portfolio! </span> --- Type
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<span on:click={() => switchMessage('help')} class="cursor-pointer neonText">help</span>
						for a list of supported commands.
					</p>
				</div>
				<div class="flex flex-col text-center">
					<!-- Contact Icon -->
					<p class="text-lg font-bold border-dashed border-b-2">{data.name}</p>
					<!-- <p class="text-2xl">-------------------------------------</p> -->
					<p class="italic font-semibold">
						Resume <span class="text-lg"> > </span>
						<span class="underline font-normal">on progress</span>
					</p>
					<a href={data.github} class="italic font-semibold"
						>Github <span class="text-xl"> > </span>
						<span class="underline font-normal">{data.github.substring(8)}</span></a
					>
					<a href={data.linkedin} class="italic font-semibold"
						>LinkedIn <span class="text-xl"> > </span>
						<span class="underline font-normal">{data.linkedin.substring(12)}</span></a
					>
				</div>
			</div>
			<div class="flex w-full">
				<p class="mr-2 text-red">
					[<span class="text-purple">ahlaulhe</span>@<span class="text-green">portfolio</span>]~$
				</p>
				<input
					type="text"
					class="bg-transparent outline-none"
					bind:value={commandInput}
					on:keydown={(e) => handleKeyPress(e)}
				/>
			</div>
			<slot />
		</div>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
	main {
		/* background-image: url('../assets/bgportfolio.jpg'); */
		background-image: url('../assets/lofi-cafe_gray.jpg');
		background-size: cover;
		font-family: 'Source Code Pro', monospace;
	}

	.neonText {
		color: #fff;
		text-shadow:
    /* White glow */
			0 0 7px #fff,
			0 0 10px #fff,
			0 0 21px #fff;
	}
</style>
