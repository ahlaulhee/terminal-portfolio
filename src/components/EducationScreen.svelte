<script>
	import data from '../assets/data.json';
	import typewriter from '../directives/typewriter'
</script>

<div class="flex flex-col" in:typewriter={{ speed: 3 }}>
	<div>
		<p class="text-foreground text-justify mb-4">
			Whether you're curious about my academic journey or seeking insights into my educational background, this screen offers a comprehensive overview of my educational history. Dive in and explore the unique aspects of my educational journey!
		</p>
		{#each data.formal_education as edu, i (i)}
		<div class={`flex space-x-4 ${data.formal_education.length !== i + 1 ? 'mb-3' : ''}`}>
			<div class="w-1/6 text-right text-blue text-base xl:text-lg">
				{edu.initial_date} - {edu.end_date}
			</div>
			<div class="w-5/6 text-left">
				<p class="font-semibold text-base xl:text-lg">{edu.name}</p>
				<p class="font-semibold text-base xl:text-lg italic">{edu.source}</p>
				<p class="text-foreground text-justify text-sm xl:text-base">{edu.description}</p>
			</div>
		</div>
		{/each}
	</div>
</div>
