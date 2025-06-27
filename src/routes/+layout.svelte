<script lang="ts">
	import NavBar from '$lib/components/layouts/NavBar.svelte';
	import Header from '$lib/components/routes/home/Header.svelte';
	import { closeContact, contact } from '$lib/stores/contact';
	import AOS from 'aos';
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import MailIcon from '~icons/uil/envelope';
	import PhoneIcon from '~icons/uil/phone';

	type Props = {
		children: Snippet;
		data: { url: string };
	};

	const { children, data }: Props = $props();

	const subtitle = {
		'/': 'AutoCADLT - Initiation débutant 2D',
		'/formateur': 'Formateur'
	};

	let showContact = $state(false);

	onMount(() => {
		AOS.init({
			duration: 500,
			easing: 'ease-in-out'
		});

		const unsubscribe = contact.subscribe((value) => {
			showContact = value;
			if (value) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		});

		return () => {
			unsubscribe();
			document.body.style.overflow = '';
		};
	});
</script>

<NavBar />
<div class="page">
	<Header subtitle={subtitle[data.url as keyof typeof subtitle]} />
	{#key data.url}
		<div class="content" transition:fade={{ duration: 500 }}>
			{@render children()}
		</div>
	{/key}
</div>

{#if showContact}
	<div
		class="background"
		transition:fade={{ duration: 300 }}
		onclick={closeContact}
		role="presentation"
	>
		<div
			onclick={(e) => e.stopPropagation()}
			role="presentation"
			transition:fly={{ duration: 500, y: -100 }}
			class="modal"
		>
			<button aria-label="close" onclick={closeContact}> </button>
			<h2>Contactez-moi</h2>

			<div>
				<a href="mailto:pougitocad@gmail.com">
					<div><MailIcon /></div>
					pougitocad@gmail.com
				</a>
				<a href="tel:+33788756834">
					<div><PhoneIcon /></div>
					+33 7 88 75 68 34
				</a>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		.content {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 100%;
			left: 0;
		}
	}

	.background {
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);

		.modal {
			width: calc(100vw - 6rem);
			max-width: calc(70rem - 6rem);
			height: calc(30rem - 4rem);
			max-height: calc(100vh - 6rem);
			padding: 2rem;
			position: absolute;
			z-index: 1;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			background: $bg;
			border-radius: $radius;

			button {
				width: 3rem;
				height: 3rem;
				position: absolute;
				top: 0.5rem;
				right: 0.5rem;
				background: none;
				border: none;
				cursor: pointer;

				&::before,
				&::after {
					content: '';
					width: 50%;
					height: 0.2rem;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%) rotate(45deg);
					background: $primary;
					border-radius: $radius;
				}

				&::after {
					transform: translate(-50%, -50%) rotate(-45deg);
				}
			}

			h2 {
				color: $primary;
				font-size: 2rem;
				font-weight: bold;
				text-align: center;
			}

			> div {
				width: 100%;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 5rem;

				> a {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 1rem;

					> div {
						width: 2rem;
						height: 2rem;
						padding: 0.5rem;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: $radius;
						background: $primary;
						color: $bg;
					}
				}
			}
		}
	}

	@media (max-width: 500px) {
		.background .modal > div {
			flex-direction: column;
		}
	}
</style>
