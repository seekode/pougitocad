<script lang="ts">
	import { resolve } from '$app/paths';
	import MenuIcon from '~icons/uil/bars';
	import CloseIcon from '~icons/uil/times';

	let menuOpen = $state(false);

	const toggleMenu = () => (menuOpen = !menuOpen);
	const closeMenu = () => (menuOpen = false);

	const leftLinks = [
		{ href: '/', label: 'Accueil' },
		{ href: '/#planning-tarifs', label: 'Planning / Tarifs' },
		{ href: '/#formations-stages', label: 'Formations / Stages' }
	] as const;

	const rightLinks = [
		{ href: '/#enseignant', label: 'Enseignant' },
		{ href: '/#contact', label: 'Contact / Lieux' },
		{ href: '/#galerie', label: 'Galerie Photos' },
		{ href: '/#faq', label: 'FAQ' }
	] as const;
</script>

<nav>
	<div class="links links--left">
		{#each leftLinks as link (link.href)}
			<a href={resolve(link.href)}>{link.label}</a>
		{/each}
	</div>

	<a href={resolve('/')} class="logo">
		<img src="/images/site/logo-wbg.png" alt="Association Tadasana - retour à l'accueil" />
	</a>

	<div class="links links--right">
		{#each rightLinks as link (link.href)}
			<a href={resolve(link.href)}>{link.label}</a>
		{/each}
	</div>

	<button class="burger" aria-label="Ouvrir le menu" onclick={toggleMenu}>
		<MenuIcon />
	</button>
</nav>

{#if menuOpen}
	<div class="mobile-menu">
		<button class="close" aria-label="Fermer le menu" onclick={closeMenu}>
			<CloseIcon />
		</button>
		<img src="/images/site/logo-wbg.png" alt="Association Tadasana" class="mobile-logo" />
		<div class="mobile-links">
			{#each [...leftLinks, ...rightLinks] as link (link.href)}
				<a href={resolve(link.href)} onclick={closeMenu}>{link.label}</a>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	nav {
		height: 4.5rem;
		padding: 0.5rem 2rem;
		width: calc(100% - 4rem);
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background: rgba(250, 246, 238, 0.85);
		backdrop-filter: blur(7px);
		box-shadow: 0 4px 20px 0 rgba(58, 46, 34, 0.12);

		.logo {
			height: 80%;
			flex-shrink: 0;

			img {
				height: 100%;
			}
		}

		.links {
			flex: 1;
			display: flex;
			align-items: center;
			gap: 1.5rem;

			&--left {
				justify-content: flex-end;
			}

			&--right {
				justify-content: flex-start;
			}

			a {
				font-family: $heading-font;
				font-size: 0.9rem;
				font-weight: 600;
				letter-spacing: 0.03em;
				color: $text;
				white-space: nowrap;
				transition: color 0.3s;

				&:hover {
					color: $primary;
				}
			}
		}

		.burger {
			display: none;
			background: none;
			border: none;
			font-size: 1.6rem;
			color: $primary;
			cursor: pointer;
		}
	}

	.mobile-menu {
		width: 100%;
		height: 100vh;
		position: fixed;
		z-index: 20;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		background: $bg;

		.close {
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
			background: none;
			border: none;
			font-size: 2rem;
			color: $primary;
			cursor: pointer;
		}

		.mobile-logo {
			height: 5rem;
			border-radius: $radius;
		}

		.mobile-links {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;

			a {
				font-family: $heading-font;
				font-size: 1.3rem;
				font-weight: 600;
				color: $text;

				&:hover {
					color: $primary;
				}
			}
		}
	}

	@media screen and (max-width: 900px) {
		nav {
			justify-content: space-between;

			.links {
				display: none;
			}

			.logo {
				height: 80%;
			}

			.burger {
				display: block;
			}
		}
	}
</style>
