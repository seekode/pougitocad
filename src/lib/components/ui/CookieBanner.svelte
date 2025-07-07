<script lang="ts">
	import {
		acceptAllCookies,
		acceptNecessaryCookies,
		cookieConsent,
		initializeConsent,
		shouldShowBanner
	} from '$lib/stores/cookies';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import CheckIcon from '~icons/uil/check';
	import SettingsIcon from '~icons/uil/setting';
	import CookieIcon from '~icons/uil/shield-check';
	import CloseIcon from '~icons/uil/times';
	import Button from './Button.svelte';

	let showBanner = false;
	let showSettings = false;

	onMount(() => {
		initializeConsent();

		const unsubscribe = cookieConsent.subscribe((consent) => {
			showBanner = shouldShowBanner(consent);
		});

		return unsubscribe;
	});

	const handleAcceptAll = () => {
		acceptAllCookies();
		showBanner = false;
		showSettings = false;
	};

	const handleAcceptNecessary = () => {
		acceptNecessaryCookies();
		showBanner = false;
		showSettings = false;
	};

	const toggleSettings = () => {
		showSettings = !showSettings;
	};
</script>

{#if showBanner}
	<div class="cookie-banner" transition:slide={{ duration: 300 }}>
		<div class="banner-content">
			<div class="banner-header">
				<CookieIcon />
				<h3>Gestion des cookies</h3>
			</div>

			<div class="banner-text">
				<p>
					Nous utilisons des cookies pour améliorer votre expérience sur notre site. Certains
					cookies sont nécessaires au fonctionnement du site, d'autres nous aident à comprendre
					comment vous utilisez notre site.
				</p>
				<p>
					<a href="/politique-cookies" target="_blank"
						>En savoir plus sur notre politique des cookies</a
					>
				</p>
			</div>

			{#if showSettings}
				<div class="cookie-settings" transition:fade={{ duration: 200 }}>
					<div class="setting-item">
						<div class="setting-info">
							<h4>Cookies nécessaires</h4>
							<p>Ces cookies sont indispensables au fonctionnement du site.</p>
						</div>
						<div class="setting-toggle">
							<span class="required">Obligatoire</span>
						</div>
					</div>

					<div class="setting-item">
						<div class="setting-info">
							<h4>Cookies de fonctionnalité</h4>
							<p>Ces cookies améliorent votre expérience utilisateur.</p>
						</div>
						<div class="setting-toggle">
							<span class="optional">Optionnel</span>
						</div>
					</div>

					<div class="setting-item">
						<div class="setting-info">
							<h4>Cookies externes</h4>
							<p>Polices Google et autres ressources externes.</p>
						</div>
						<div class="setting-toggle">
							<span class="optional">Optionnel</span>
						</div>
					</div>
				</div>
			{/if}

			<div class="banner-actions">
				<Button text="Accepter tout" Icon={CheckIcon} onclick={handleAcceptAll} />
				<Button text="Nécessaires uniquement" Icon={CloseIcon} onclick={handleAcceptNecessary} />
				<button class="settings-btn" on:click={toggleSettings}>
					<SettingsIcon />
					{showSettings ? 'Masquer' : 'Paramètres'}
				</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.cookie-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #ffffff;
		border-top: 3px solid #8b1538;
		box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.15);
		z-index: 1000;
		max-height: 80vh;
		overflow-y: auto;
	}

	.banner-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.5rem 2rem;
	}

	.banner-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;

		h3 {
			color: #8b1538;
			font-size: 1.25rem;
			font-weight: 700;
			margin: 0;
		}

		:global(svg) {
			color: #8b1538;
			font-size: 1.5rem;
		}
	}

	.banner-text {
		margin-bottom: 1.5rem;

		p {
			color: #343a40;
			line-height: 1.6;
			margin-bottom: 0.5rem;
		}

		a {
			color: #8b1538;
			text-decoration: underline;
			font-weight: 500;

			&:hover {
				color: #6b1129;
			}
		}
	}

	.cookie-settings {
		background: #f8f9fa;
		border: 1px solid #e9ecef;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.setting-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid #e9ecef;

		&:last-child {
			border-bottom: none;
		}
	}

	.setting-info {
		flex: 1;

		h4 {
			color: #8b1538;
			font-size: 1rem;
			font-weight: 600;
			margin: 0 0 0.25rem 0;
		}

		p {
			color: #6c757d;
			font-size: 0.9rem;
			margin: 0;
		}
	}

	.setting-toggle {
		.required {
			background: #8b1538;
			color: #ffffff;
			padding: 0.25rem 0.75rem;
			border-radius: 4px;
			font-size: 0.8rem;
			font-weight: 500;
		}

		.optional {
			border: 1px solid $primary;
			color: $primary;
			padding: calc(0.25rem - 2px) calc(0.75rem - 2px);
			border-radius: 4px;
			font-size: 0.8rem;
			font-weight: 500;
		}
	}

	.banner-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.settings-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		border: 1px solid #6c757d;
		color: #6c757d;
		padding: 0.75rem 1rem;
		border-radius: 6px;
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			background: #6c757d;
			color: #ffffff;
		}

		:global(svg) {
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 768px) {
		.banner-content {
			padding: 1rem;
		}

		.banner-actions {
			flex-direction: column;
			align-items: stretch;

			:global(button) {
				width: 100%;
				justify-content: center;
			}

			.settings-btn {
				justify-content: center;
			}
		}

		.setting-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>
