<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		title: string;
		subtitle?: string;
	};

	const { children, title, subtitle }: Props = $props();
</script>

<section class="c" data-aos="fade-right">
	<h2>{title}</h2>
	{#if subtitle}
		<p>{subtitle}</p>
	{/if}
	<div style="padding: 1rem;"></div>
	{#if children}
		{@render children()}
	{/if}
</section>

<style lang="scss">
	section {
		padding: 4rem 0;
		display: flex;
		flex-direction: column;
		align-items: start;

		h2 {
			margin-bottom: 0;
			font-size: 4rem;
			font-weight: bold;
			color: $primary;
		}

		p {
			font-weight: bold;
			font-size: 1.4rem;
		}
	}

	@media (max-width: 768px) {
		section {
			h2 {
				font-size: 2.5rem;
			}

			p {
				font-size: 1.2rem;
			}
		}
	}

	@media (max-width: 480px) {
		section h2 {
			font-size: 2rem;
		}
	}
</style>
