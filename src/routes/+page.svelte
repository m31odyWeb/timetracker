<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	import AnimateOnMout from 'src/components/AnimateOnMount.svelte';

	import type { PageData } from './$types';

	// Props from +page.ts
	export let data: PageData;

	const words = ['This', 'is', data.data, 'app'];
</script>

<div class="flex h-screen w-screen justify-center items-center">
	<AnimateOnMout>
		<div class="text-white font-bold text-6xl flex flex-wrap gap-5 justify-center">
			{#each words as word, idx}
				<span
					in:fly={{ y: 100, delay: idx * 300, easing: backOut, duration: 300 }}
					class:text-orange-600={idx === words.length - 2}>{word}</span
				>
			{/each}
		</div>
	</AnimateOnMout>
</div>
