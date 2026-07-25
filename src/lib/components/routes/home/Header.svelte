<script lang="ts">
	import { fly } from 'svelte/transition';

	type Props = {
		subtitle: string;
		showQuote?: boolean;
	};

	let { subtitle, showQuote = false }: Props = $props();
</script>

<header class="c c--full">
	<div class="overlay"></div>
	<div class="header-content">
		{#if showQuote}
			<h1 data-aos="fade-up">Association TADASANA</h1>
			<div class="quote" data-aos="fade-up">
				<p class="quote__sanskrit">tasya bhūmiṣu viniyogaḥ - <strong>YS III.6</strong></p>
				<p class="quote__translation">
					Son application (<em>viniyoga</em>) doit se faire par étapes, en fonction des niveaux.
				</p>
			</div>
		{:else}
			<div class="subtitle-wrapper">
				{#key subtitle}
					<h2 transition:fly={{ duration: 500, y: -50 }}>{subtitle}</h2>
				{/key}
			</div>
		{/if}
	</div>
</header>

<style lang="scss">
	header {
		height: 60vh;
		position: relative;
		background-image: url('/images/site/hero-bg.png');
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;

		.overlay {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: linear-gradient(180deg, rgba(58, 46, 34, 0.4) 0%, rgba(58, 46, 34, 0.7) 100%);
		}

		.header-content {
			width: 100%;
			position: relative;
			z-index: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;
			padding: 0 1rem;

			h1 {
				font-family: $heading-font;
				font-size: 3.5rem;
				font-weight: bold;
				letter-spacing: 0.05em;
				color: #fff;
				text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
				text-align: center;
				margin: 0;
			}
		}

		.quote {
			max-width: 40rem;
			text-align: center;

			&__sanskrit {
				font-family: $heading-font;
				font-style: italic;
				font-size: 1.8rem;
				color: #fff;
				text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
				margin-bottom: 0.5rem;

				strong {
					font-style: normal;
					color: $accent;
				}
			}

			&__translation {
				font-size: 1.1rem;
				color: #fff;
				text-shadow:
					0 1px 3px rgba(0, 0, 0, 0.7),
					0 0 10px rgba(0, 0, 0, 0.5);

				em {
					color: #fff;
					font-weight: 600;
				}
			}
		}

		.subtitle-wrapper {
			width: 100%;
			height: 4rem;
			position: relative;

			h2 {
				width: 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				font-family: $heading-font;
				font-size: 3rem;
				font-weight: bold;
				color: #fff;
				text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
				text-align: center;
			}
		}
	}

	@media screen and (max-width: 768px) {
		header {
			height: 55vh;

			.quote__sanskrit {
				font-size: 1.3rem;
			}

			.quote__translation {
				font-size: 1rem;
			}

			.subtitle-wrapper h2 {
				font-size: 2rem;
			}
		}
	}

	@media screen and (max-width: 480px) {
		header .subtitle-wrapper h2 {
			font-size: 1.5rem;
		}
	}
</style>
