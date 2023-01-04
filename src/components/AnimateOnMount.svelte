<script lang="ts">
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div>
	{#if animate}
		<slot />
	{/if}
</div>
