<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		text?: string;
		Icon?: Component;
		active?: boolean;
		onclick?: () => void;
	};

	const { children, text, Icon, active = false, onclick }: Props = $props();
</script>

<button class:active {onclick}>
	{#if children}
		{@render children()}
	{:else}
		{#if text}
			<span>{text}</span>
		{/if}
		{#if Icon}
			<Icon>t</Icon>
		{/if}
	{/if}
</button>

<style lang="scss">
	button {
		padding: 0.5rem 1.5rem;
		border: none;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		border-radius: $radius;
		background: $primary;
		color: $bg;
		transition: 0.5s;

		&:hover {
			background: $active;
		}

		span {
			color: $bg;
		}

		&.active {
			background: $active;
		}
	}
</style>
