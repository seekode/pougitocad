<script>
	import { openContact } from '$lib/stores/contact';
	import MedalIcon from '~icons/uil/medal';
	import SendIcon from '~icons/uil/message';
	import Button from '../ui/Button.svelte';
</script>

<nav>
	<a href="/">
		<img src="/logo.png" alt="logo" />
	</a>
	<div>
		<a href="/formateur">Formateur <MedalIcon /></a>
		<Button text="Contact" Icon={SendIcon} onclick={openContact} />
	</div>
</nav>

<style lang="scss">
	nav {
		height: 3rem;
		padding: 1rem 2rem;
		width: calc(100% - 4rem);
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(7px);
		box-shadow: 0 4px 33px 0 rgba(0, 0, 0, 0.25);

		> a {
			height: 100%;

			> img {
				height: 100%;
			}
		}

		> div {
			display: flex;
			gap: 1rem;

			a {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				color: $bg;
				font-weight: bold;
				background: $primary;
				padding: 0.5rem 1rem;
				border-radius: $radius;
				transition: 0.5s;

				&:hover {
					background: $active;
				}
			}
		}
	}

	@media screen and (max-width: 460px) {
		nav > div :global(span) {
			display: none;
		}
	}
</style>
