<script lang="ts">
	import TerminalFrame from '../components/TerminalFrame.svelte';
	import Layout from './+layout.svelte';

	let parentCommandInput: string;

	const handleVariableChange = () => {
		// Change TerminalFrame children
	};
</script>

<p>{parentCommandInput}</p>
<Layout>
	<TerminalFrame bind:commandInput={parentCommandInput} on:variableChange={handleVariableChange}
		>This is just a test</TerminalFrame
	>
</Layout>
