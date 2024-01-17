<script lang="ts">
	import HelpScreen from '../components/HelpScreen.svelte';
	import JobsScreen from '../components/JobsScreen.svelte';
	import TerminalFrame from '../components/TerminalFrame.svelte';
	import WelcomeScreen from '../components/WelcomeScreen.svelte';
	import Layout from './+layout.svelte';

	// TODO: Solve this any
	const availableCommands: { [key: string]: any } = {
		welcome: WelcomeScreen,
		help: HelpScreen,
		jobs: JobsScreen
	};

	let lastCommand: string;
	const history: string[] = [];

	const handleVariableChange = (command: CustomEvent<string>) => {
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
			Wrong Command
		{/if}
	</TerminalFrame>
</Layout>
