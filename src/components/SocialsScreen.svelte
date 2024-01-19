<script lang="ts">
	import data from '../assets/data.json';

	interface Socials {
		name: string;
		link: string;
	}

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

<div class="flex">
	{#each socials as social}
		<div class="flex flex-col">
			<p class="text-right">{social.name}</p>
			<p class="text-left">{social.link}</p>
		</div>
	{/each}
</div>
