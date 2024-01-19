<script>
	import data from '../assets/data.json';
	import { concurrent } from 'svelte-typewriter';

	// TODO: Fix date not having the typewriting effect
</script>

<div class="flex flex-col" use:concurrent={{}}>
	<p class="text-foreground text-justify mb-4">
		Whether you're interested in my career trajectory or seeking insights into my professional
		skills, this screen provides a comprehensive overview of my work history. Dive in and discover
		the unique aspects of my professional journey!.
	</p>
	{#each data.jobs as job, i (i)}
		<div class={`flex space-x-4 ${data.jobs.length !== i + 1 ? 'mb-3' : ''}`}>
			<div class="w-1/6 text-right text-blue text-lg">
				{job.initial_date} -
				{#if job.current}
					<span>PRESENT</span>
				{:else}
					{job.end_date}
				{/if}
			</div>
			<div class="w-5/6">
				<p class="font-semibold text-lg">{job.job}</p>
				<p class="font-semibold text-lg italic">{job.company}</p>
				<p class="text-foreground text-justify">{job.description}</p>
			</div>
		</div>
	{/each}
</div>
