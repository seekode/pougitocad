<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		text?: boolean;
	};

	const { children, text = false }: Props = $props();
</script>

<div class="callout">
	<span class:text></span>
	<div>
		{@render children()}
	</div>
</div>

<style lang="scss">
	.callout {
		width: 100%;
		position: relative;
		margin: 1rem 0.5rem;
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 0.5rem;

		&::before {
			content: '';
			width: 0.4rem;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: $primary;
			border-radius: $radius;
		}

		span {
			width: 0.4rem;
			height: 100%;
			background-color: $primary;
			border-radius: $radius;

			&.text {
				background-color: $text;
			}
		}

		div {
			flex: 1;
			padding: 0.5rem 0;
		}
	}
</style>
