<script lang="ts">
	import AboutMeScreen from '../components/AboutMeScreen.svelte';
	import HelpScreen from '../components/HelpScreen.svelte';
	import JobsScreen from '../components/JobsScreen.svelte';
	import TerminalFrame from '../components/TerminalFrame.svelte';
	import WelcomeScreen from '../components/WelcomeScreen.svelte';
	import WrongCommandScreen from '../components/WrongCommandScreen.svelte';
	import Layout from './+layout.svelte';

	// TODO: Solve this any
	const availableCommands: { [key: string]: any } = {
		welcome: WelcomeScreen,
		help: HelpScreen,
		jobs: JobsScreen,
		aboutme: AboutMeScreen,
		error: WrongCommandScreen
	};

	let lastCommand: string;
	const history: string[] = [];

	const handleVariableChange = (command: CustomEvent<string>) => {
		if (lastCommand === command.detail) return;
		history.push(command.detail);
		lastCommand = command.detail;
	};
</script>

<Layout>
	<TerminalFrame on:variableChange={handleVariableChange}>
		{#if !lastCommand}
			<svelte:component
				this={availableCommands['welcome']}
				on:variableChange={handleVariableChange}
			/>
		{:else if lastCommand && availableCommands[lastCommand]}
			<svelte:component
				this={availableCommands[lastCommand]}
				on:variableChange={handleVariableChange}
			/>
		{:else}
			<svelte:component
				this={availableCommands['error']}
				on:variableChange={handleVariableChange}
			/>
		{/if}
	</TerminalFrame>
</Layout>
