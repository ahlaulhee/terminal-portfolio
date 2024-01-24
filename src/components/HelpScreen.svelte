<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import typewriter from '../directives/typewriter'

	interface Command {
		name: string;
		description: string;
	}
	// TODO: Add history command?
	// TODO: Move the commands and the interfaces to separate files
	const commands: Command[] = [
		{
			name: 'welcome',
			description:
				'The screen shown after the page loads for the first time. Contains a friendly welcome message and an introduction to your portfolio.'
		},
		{
			name: 'aboutme',
			description:
				'Provides detailed information about yourself, including your background, skills, interests, and any other relevant personal details.'
		},
		{
			name: 'projects',
			description:
				"Showcase the various projects I've worked on. Include project descriptions, technologies used, and any notable achievements."
		},
		{
			name: 'education',
			description:
				'Highlights my educational background, including degrees earned, institutions attended, and any academic achievements or honors.'
		},
		{
			name: 'jobs',
			description:
				'Details my work experience, including past jobs, roles, responsibilities, and notable accomplishments in each position.'
		},
		{
			name: 'socials',
			description: 'Include links to your LinkedIn, GitHub, or any other relevant platforms.'
		},
		{
			name: 'hobbies',
			description:
				'Showcases my hobbies and interests outside of my professional life. It adds a personal touch and helps visitors get to know you better.'
		},
		{
			name: 'help',
			description:
				'Provides a list of all the available commands, offering guidance on how users can navigate through your portfolio using the command interface.'
		}
	];
	const dispatch = createEventDispatcher();

	const switchMessage = (command: string) => {
		dispatch('variableChange', command);
	};
</script>

<div in:typewriter={{speed: 2}}>
	<p class="font-semibold">Here is a list of all the available commands:</p>
	{#each commands as command, i (i)}
		<div class="flex">
			<div class={`w-1/4 ${i % 2 === 0 ? 'text-yellow' : 'text-blue'}`}>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					class={`cursor-pointer w-fit ${i % 2 === 0 ? 'neonTextYellow' : 'neonTextBlue'}`}
					on:click={() => switchMessage(command.name)}
				>
					{command.name}
				</p>
			</div>
			<p class={`w-3/4 ${i % 2 === 0 ? 'text-yellow' : 'text-blue'}`}>
				{command.description}
			</p>
		</div>
	{/each}
	<p class="text-sm text-center">
		Tip: you can either write the command out or press on the name of the command.
	</p>
</div>

<style>
	.neonTextYellow {
		color: #e5c07b;
		text-shadow:
			0 0 7px #e5c07b,
			0 0 10px #e5c07b,
			0 0 21px #e5c07b;
	}

	.neonTextBlue {
		color: #61afef;
		text-shadow:
			0 0 7px #61afef,
			0 0 10px #61afef,
			0 0 21px #61afef;
	}
</style>
