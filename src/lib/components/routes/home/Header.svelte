<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		subtitle: string;
	};

	let { subtitle }: Props = $props();

	let nav: HTMLElement;
	let header: HTMLElement;
	let sticky: boolean = $state(false);

	onMount(() => {
		const handleScroll = () => {
			if (!nav || !header) return;
			if (window.scrollY + nav.clientHeight >= header.clientHeight - nav.clientHeight) {
				sticky = true;
			} else {
				sticky = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav bind:this={nav} class:sticky></nav>
<header bind:this={header} class="c c--full">
	<h1>POUGITOCAD</h1>
	<div>
		{#key subtitle}
			<h2 transition:fly={{ duration: 500, y: -50 }}>{subtitle}</h2>
		{/key}
	</div>
</header>

<style lang="scss">
	nav {
		height: 3rem;
		padding: 1rem 2rem;
		width: calc(100% - 4rem);
		position: absolute;
		top: 70vh;
		left: 0;
		z-index: 1;
		transform: translateY(-100%);
		display: flex;
		display: none;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(7px);
		box-shadow: 0 4px 33px 0 rgba(0, 0, 0, 0.25);

		&.sticky {
			position: fixed;
			top: 5rem;
			left: 0;
			transform: translateY(0);
		}
	}

	header {
		height: 70vh;
		background-image: url('/images/index/header.jpg');
		background-size: cover;
		background-position: center;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		* {
			font-size: 7rem;
			color: $bg;
			text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
			text-align: center;
		}

		div {
			width: 100%;
			height: 4rem;
			position: relative;

			h2 {
				width: 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				font-size: 3rem;
			}
		}
	}

	@media screen and (max-width: 768px) {
		header {
			gap: 1rem;

			* {
				font-size: 4rem;
			}

			div h2 {
				font-size: 1.8rem;
			}
		}
	}

	@media screen and (max-width: 480px) {
		header {
			* {
				font-size: 3rem;
			}

			div h2 {
				font-size: 1.3rem;
			}
		}
	}
</style>
