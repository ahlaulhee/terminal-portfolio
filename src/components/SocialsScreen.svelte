<script lang="ts">
	import data from '../assets/data.json';
	import typewriter from '../directives/typewriter'

	interface Socials {
		name: string;
		link: string;
	}

	// TODO: Move this to data.json 
	const socials = [
		{
			name: 'Mail',
			link: data.email
		},
		{
			name: 'Github',
			link: data.github
		},
		{
			name: 'LinkedIn',
			link: data.linkedin
		}
	];
</script>

<div class="flex flex-col" in:typewriter={{ speed: 3 }}>
	<p class="text-xl text-center">Socials</p>
	{#each socials as social}
		<div class="flex justify-center">
			<p class="text-right text-red">{social.name}:</p>
			<a href={social.link} class="text-left text-brightGreen italic underline">{social.link}</a>
		</div>
	{/each}
</div>
