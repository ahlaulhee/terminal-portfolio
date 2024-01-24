<script lang="ts">
	import 'iconify-icon';
	import { createEventDispatcher, onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let animate = false;

	onMount(() => {
		animate = true;
	});

	const dispatch = createEventDispatcher();

	export let commandInput = '';

	const switchMessage = (command: string) => {
		dispatch('variableChange', command);
	};

	// TODO: Add these commands
	// Press [Tab] for auto completion.
	// Press [Esc] to clear the input line.
	// Press [↑][↓] to scroll through your history of commands.
	// Maybe add rm -rf . as an easter egg
	// TODO: Change background and repeat it to fix some responsiveness issues

	const handleKeyPress = (event: KeyboardEvent) => {
		if (!commandInput) return;
		if (event.key === 'Enter') {
			switchMessage(commandInput);
			commandInput = '';
		}
	};

	function focusOnInit(el: HTMLInputElement) {
		el.focus();
	}
	// TODO: Add funcionality to window buttons?

	function restart() {
		animate = false;
		setTimeout(() => {
			switchMessage('welcome');
			animate = true;
		}, 1000);
	}
</script>

<main class="min-h-screen flex items-center justify-center">
	{#if animate}
		<!-- <div in:fly={{ y: 200, duration: 2000, delay: 200 }}> -->
		<div in:scale={{ duration: 1000 }} out:scale={{ duration: 500 }}>
			<div
				class={`bg-background border-[#1f2229] border-2 shadow-md h-[95vh] w-[95vw] opacity-90 relative`}
			>
				<div class="bg-[#303640] flex justify-between text-smoke border-l-4 border-red">
					<div class="w-1/3 text-lg text-left flex">
						<p class="border-r-2 border-[#1f2229] px-2 w-fit h-full">guest@portfolio</p>
						<iconify-icon icon="mdi:plus" height="30"></iconify-icon>
					</div>
					<div class="w-1/3 text-center"></div>
					<div class="w-1/3 text-right">
						<iconify-icon icon="mdi:window-minimize" height="28"></iconify-icon>
						<iconify-icon icon="mdi:window-maximize" height="28"></iconify-icon>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<iconify-icon
							icon="mdi:window-close"
							height="28"
							on:click={restart}
							class="cursor-pointer"
						></iconify-icon>
					</div>
				</div>
				<div class="w-full text-smoke px-4 pt-2">
					<slot />
					<div class="flex w-full mt-2">
						<p class="mr-2 text-red">
							[<span class="text-purple">guest</span>@<span class="text-green">portfolio</span
							>]~${' '}
						</p>
						<input
							type="text"
							class="bg-transparent outline-none w-full"
							bind:value={commandInput}
							on:keydown={(e) => handleKeyPress(e)}
							use:focusOnInit
						/>
					</div>
				</div>
				<button
					class="absolute inset-x-0 bottom-0 w-full text-xl text-smoke"
					on:click={() => switchMessage('help')}
					><iconify-icon icon="mdi:arrow-left-circle" height="40"></iconify-icon></button
				>
			</div>
		</div>
	{/if}
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	main {
		/* background-image: url('../assets/bgportfolio.jpg'); */
		background-image: url('../assets/lofi-cafe_gray.jpg');
		background-size: cover;
		font-family: 'Space Mono', monospace;
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
