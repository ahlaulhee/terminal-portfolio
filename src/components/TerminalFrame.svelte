<script lang="ts">
	import 'iconify-icon';
	import data from '../assets/data.json';
	const name = `Welcome to my portfolio! --- Type help for a list of supported commands.
		 |  \\     |  \\                 |  \\  \\                        
  ______ | ▓▓____ | ▓▓ ______  __    __| ▓▓ ▓▓____   ______   ______  
 |      \\| ▓▓    \\| ▓▓|      \\|  \\  |  \\ ▓▓ ▓▓    \\ /      \\ /      \\ 
  \\▓▓▓▓▓▓\\ ▓▓▓▓▓▓▓\\ ▓▓ \\▓▓▓▓▓▓\\ ▓▓  | ▓▓ ▓▓ ▓▓▓▓▓▓▓\\  ▓▓▓▓▓▓\\  ▓▓▓▓▓▓\\
 /      ▓▓ ▓▓  | ▓▓ ▓▓/      ▓▓ ▓▓  | ▓▓ ▓▓ ▓▓  | ▓▓ ▓▓    ▓▓ ▓▓    ▓▓
|  ▓▓▓▓▓▓▓ ▓▓  | ▓▓ ▓▓  ▓▓▓▓▓▓▓ ▓▓__/ ▓▓ ▓▓ ▓▓  | ▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓▓▓
 \\▓▓    ▓▓ ▓▓  | ▓▓ ▓▓\\▓▓    ▓▓\\▓▓    ▓▓ ▓▓ ▓▓  | ▓▓\\▓▓     \\▓▓     \\
  \\▓▓▓▓▓▓▓\\▓▓   \\▓▓\\▓▓ \\▓▓▓▓▓▓▓ \\▓▓▓▓▓▓ \\▓▓\\▓▓   \\▓▓ \\▓▓▓▓▓▓▓ \\▓▓▓▓▓▓▓
`;
</script>

<main class="min-h-screen flex items-center justify-center">
	<div class={`bg-[#282c34] border-[#1f2229] border-2 shadow-md h-[95vh] w-[95vw] opacity-90`}>
		<div class="bg-[#303640] flex justify-between text-white border-l-4 border-[#e06c75]">
			<div class="w-1/3 text-lg text-left font-semibold flex">
				<p class="border-r-2 border-[#1f2229] px-2 w-fit h-full">ahlaulhee@portfolio</p>
				<iconify-icon icon="mdi:plus" height="30"></iconify-icon>
			</div>
			<div class="w-1/3 text-center"></div>
			<div class="w-1/3 text-right">
				<iconify-icon icon="mdi:window-minimize" height="28"></iconify-icon>
				<iconify-icon icon="mdi:window-maximize" height="28"></iconify-icon>
				<iconify-icon icon="mdi:window-close" height="28"></iconify-icon>
			</div>
		</div>
		<div class="w-full text-white p-4">
			<div class="flex justify-between">
				<pre>{name}</pre>
				<div class="flex flex-col">
					<!-- Contact Icon -->
					<p class="text-lg font-bold text-center">{data.name}</p>
					<p class="text-2xl">-------------------------------------</p>
					<p>Resume : on progress</p>
					<a href="https://github.com/ahlaulhee"
						>Github : <span class="underline">{data.github}</span></a
					>
					<a href="https://www.linkedin.com/in/alex-laulhe/"
						>LinkedIn : <span class="underline">{data.linkedin}</span></a
					>
				</div>
			</div>

			<slot />
		</div>
	</div>
</main>

<style>
	main {
		/* background-image: url('../assets/bgportfolio.jpg'); */
		background-image: url('../assets/lofi-cafe_gray.jpg');
		background-size: cover;
	}
</style>
