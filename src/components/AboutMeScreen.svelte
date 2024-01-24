<script>
	import data from '../assets/data.json';
	import { concurrent, loopOnce } from 'svelte-typewriter';
	import { fade } from 'svelte/transition';
</script>

<p class="text-center text-4xl mb-2 font-bold underline" use:loopOnce={{ interval: 150 }}>
	About Me
</p>
<div class="flex flex-col md:flex-row space-x-4" in:fade={{ duration: 2000 }} use:concurrent={{}}>
	<div class="flex flex-col w-full space-y-4">
		<div class="border-2 border-dark rounded-lg py-2 px-3 text-justify text-lg">
			{data.bio}
		</div>
		<div class="border-2 border-dark rounded-lg p-4 space-y-8">
			<div class="space-y-2">
				<p class="font-semibold text-xl">Tech:</p>
				<div class="flex flex-wrap justify-evenly">
					{#each data.skills.tech_languages as tech}
						<div class="flex flex-col text-center">
							<i class={`devicon-${tech.toLowerCase()}-plain colored text-6xl`}></i>
							<p>{tech}</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="space-y-2">
				<p class="font-semibold text-xl">Frameworks:</p>
				<div class="flex flex-wrap justify-evenly">
					{#each data.skills.frameworks as fw}
						<div class="flex flex-col text-center">
							<i class={`devicon-${fw.toLowerCase()}-plain colored text-6xl`}></i>
							<p>{fw}</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="space-y-2">
				<p class="font-semibold text-xl">Databases:</p>
				<div class="flex flex-wrap justify-evenly">
					{#each data.skills.databases as db}
						<div class="flex flex-col text-center">
							<i class={`devicon-${db.toLowerCase()}-plain colored text-6xl`}></i>
							<p>{db}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="border-2 border-dark rounded-lg w-fit p-2">
		<img src={data.photo} alt="PFP" class="rounded-lg h-full object-cover" />
	</div>
</div>
