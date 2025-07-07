<script lang="ts">
	import { openContact } from '$lib/stores/contact';
	import { onMount } from 'svelte';
	import FileIcon from '~icons/uil/file-alt';
	import PhoneIcon from '~icons/uil/phone';
	import Button from './Button.svelte';

	let cardElement: HTMLDivElement;
	let isExpanded = false;
	let shouldFollowScroll = false;

	onMount(() => {
		const handleScroll = () => {
			if (cardElement) {
				const cardRect = cardElement.getBoundingClientRect();
				const distanceFromTop = cardRect.top;
				shouldFollowScroll = distanceFromTop <= 100;
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (isExpanded && cardElement && !cardElement.contains(event.target as Node)) {
				isExpanded = false;
			}
		};

		window.addEventListener('scroll', handleScroll);
		document.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('click', handleClickOutside);
		};
	});

	const toggleCard = () => {
		isExpanded = !isExpanded;
	};
</script>

<div bind:this={cardElement}>
	<div class="sticky-card" class:expanded={isExpanded} class:follow-scroll={shouldFollowScroll}>
		<div class="card-content">
			<div class="card-header">
				<h3>Informations</h3>
			</div>

			<div class="card-body">
				<div class="info-item">
					<span class="label">Délai d'accès:</span>
					<button class="contact-link" on:click={openContact}>
						<PhoneIcon />
						Nous contacter
					</button>
				</div>

				<div class="cta-section">
					<Button text="Je demande un devis" Icon={FileIcon} onclick={openContact} />
				</div>
			</div>
		</div>

		<button class="toggle-tab" on:click={toggleCard}>
			<span>Devis</span>
		</button>
	</div>
</div>

<style lang="scss">
	.sticky-card {
		width: 320px;
		max-width: calc(100% - 40px);
		margin-top: 3rem;
		border: 1px solid #e9ecef;
		position: absolute;
		z-index: 10;
		top: 0rem;
		left: calc(73rem + (100% - 70rem) / 2);
		border-radius: 8px;
		background: #ffffff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

		&.follow-scroll {
			position: fixed;
			top: 100px;
		}

		&.expanded {
			right: 20px;
			transform: translateX(0);
		}

		.card-content {
			padding: 1.5rem;
		}

		.card-header {
			margin-bottom: 1rem;

			h3 {
				color: #8b1538;
				font-size: 1.25rem;
				font-weight: 700;
				margin: 0;
			}
		}

		.card-body {
			.info-item {
				margin-bottom: 1.5rem;

				.label {
					display: block;
					color: #343a40;
					font-weight: 500;
					margin-bottom: 0.5rem;
				}

				.contact-link {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					background: transparent;
					border: none;
					color: #8b1538;
					font-weight: 500;
					cursor: pointer;
					padding: 0;
					transition: color 0.3s ease;

					&:hover {
						color: #6b1129;
					}
				}
			}

			.cta-section {
				:global(button) {
					width: 100%;
					justify-content: center;
				}
			}
		}

		.toggle-tab {
			position: absolute;
			left: -40px;
			top: 50%;
			transform: translateY(-50%) rotate(-90deg);
			background: #8b1538;
			color: #ffffff;
			border: none;
			padding: 0.75rem 1rem;
			border-radius: 8px 8px 0 0;
			cursor: pointer;
			font-weight: 500;
			transition: background 0.3s ease;
			display: none;

			&:hover {
				background: #6b1129;
			}

			span {
				color: #ffffff;
			}
		}
	}

	@media screen and (max-width: 1900px) {
		.sticky-card {
			left: calc(70.7rem + (100% - 70rem) / 2);
		}
	}

	@media screen and (max-width: 1800px) {
		.sticky-card {
			left: auto;
			right: 12px;
			transform: translateX(100%);
			transition: all 0.3s ease;

			.toggle-tab {
				display: block;
			}
		}
	}
</style>
