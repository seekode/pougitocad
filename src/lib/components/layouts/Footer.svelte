<script lang="ts">
	import { resolve } from '$app/paths';
	import { cookieConsent } from '$lib/stores/cookies';
	import LocationIcon from '~icons/uil/map-marker';
	import MailIcon from '~icons/uil/envelope';
	import PhoneIcon from '~icons/uil/phone';
	import CookieIcon from '~icons/uil/shield-check';

	const reopenCookieBanner = () => {
		// Réinitialiser le consentement pour faire réapparaître le banner
		cookieConsent.set({
			necessary: true,
			functional: false,
			external: false,
			hasConsented: false,
			timestamp: 0
		});
	};
</script>

<footer>
	<div class="footer-content">
		<div class="footer-section">
			<div class="logo-section">
				<img src="/images/site/logo-tadasana.jpg" alt="Association Tadasana Logo" />
				<p>Association Yoga Tadasana - Cours adultes & Power-Up enfants/ados</p>
			</div>
		</div>

		<div class="footer-section">
			<h4>Contact</h4>
			<div class="contact-info">
				<a class="contact-link" href="mailto:pougi.yogi@gmail.com">
					<MailIcon />
					pougi.yogi@gmail.com
				</a>
				<a class="contact-link" href="tel:+33788756834">
					<PhoneIcon />
					+33 7 88 75 68 34
				</a>
				<div class="contact-item">
					<LocationIcon />
					Élincourt-Sainte-Marguerite & Lassigny
				</div>
			</div>
		</div>

		<div class="footer-section">
			<h4>Rubriques</h4>
			<nav class="footer-nav">
				<a href={resolve('/')}>Accueil</a>
				<a href={resolve('/#planning-tarifs')}>Planning / Tarifs</a>
				<a href={resolve('/#formations-stages')}>Formations / Stages</a>
				<a href={resolve('/#enseignant')}>Enseignant</a>
				<a href={resolve('/#contact')}>Contact / Lieux</a>
				<a href={resolve('/#galerie')}>Galerie Photos</a>
				<a href={resolve('/#faq')}>FAQ</a>
			</nav>
		</div>

		<div class="footer-section">
			<h4>Informations légales</h4>
			<nav class="footer-nav">
				<a href={resolve('/mentions-legales')}>Mentions légales</a>
				<a href={resolve('/politique-confidentialite')}>Politique de confidentialité</a>
				<a href={resolve('/politique-cookies')}>Politique des cookies</a>
				<button class="cookie-settings-btn" onclick={reopenCookieBanner}>
					<CookieIcon />
					Paramètres des cookies
				</button>
			</nav>
		</div>
	</div>

	<div class="footer-bottom">
		<p>&copy; 2026 Association TADASANA - Tous droits réservés</p>
		<p>Association loi 1901</p>
	</div>
</footer>

<style lang="scss">
	footer {
		background: $primary;
		border-radius: $radius $radius 0 0;
		margin-top: 3rem;
		padding: 2rem 0 1rem;

		.footer-content {
			max-width: 1200px;
			margin: 0 auto;
			padding: 0 2rem;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
			gap: 2rem;

			.footer-section {
				h4 {
					color: white;
					font-size: 1.1rem;
					font-weight: 600;
					margin-bottom: 1rem;
					border-bottom: 2px solid $active;
					padding-bottom: 0.5rem;
				}

				.logo-section {
					img {
						height: 3rem;
						border-radius: $radius;
						margin-bottom: 0.5rem;
					}

					p {
						color: white;
						font-size: 0.9rem;
						line-height: 1.4;
					}
				}

				.contact-info {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;

					.contact-link {
						display: flex;
						align-items: center;
						gap: 0.5rem;
						background: transparent;
						border: none;
						color: white;
						font-size: 0.9rem;
						cursor: pointer;
						padding: 0;
						transition: color 0.3s ease;
						text-align: left;

						&:hover {
							color: $accent;
						}
					}

					.contact-item {
						display: flex;
						align-items: center;
						gap: 0.5rem;
						color: #f8f9fa;
						font-size: 0.9rem;
					}
				}

				.footer-nav {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					a {
						color: white;
						font-size: 0.9rem;
						text-decoration: none;
						transition: color 0.3s ease;

						&:hover {
							color: $accent;
						}
					}

					.cookie-settings-btn {
						display: flex;
						align-items: center;
						gap: 0.5rem;
						background: transparent;
						border: 1px solid white;
						color: white;
						font-size: 0.9rem;
						cursor: pointer;
						padding: 0.5rem 0.75rem;
						border-radius: 4px;
						transition: all 0.3s ease;
						text-align: left;
						margin-top: 0.5rem;

						&:hover {
							background: white;
							color: $primary;
						}

						:global(svg) {
							font-size: 1rem;
						}
					}
				}
			}
		}

		.footer-bottom {
			border-top: 1px solid rgba(255, 255, 255, 0.3);
			margin-top: 2rem;
			padding-top: 1rem;
			text-align: center;
			max-width: 1200px;
			margin-left: auto;
			margin-right: auto;
			padding-left: 2rem;
			padding-right: 2rem;

			p {
				color: #f8f9fa;
				font-size: 0.85rem;
				margin: 0.25rem 0;
			}
		}
	}

	// Responsive breakpoints
	@media screen and (max-width: 1200px) {
		footer {
			width: 100%;

			.footer-content {
				grid-template-columns: repeat(2, 1fr);
				gap: 2rem;
			}
		}
	}

	@media screen and (max-width: 600px) {
		footer {
			padding: 1.5rem 0 1rem;

			.footer-content {
				grid-template-columns: 1fr;
				gap: 1.5rem;
				padding: 0 1rem;

				.footer-section {
					text-align: center;

					h4 {
						font-size: 1rem;
						margin-bottom: 0.75rem;
					}

					.contact-info {
						align-items: center;
					}

					.footer-nav {
						align-items: center;
					}
				}
			}

			.footer-bottom {
				padding-left: 1rem;
				padding-right: 1rem;
				margin-top: 1.5rem;

				p {
					font-size: 0.8rem;
				}
			}
		}
	}

	@media screen and (max-width: 480px) {
		footer {
			.footer-content {
				.footer-section {
					.contact-info {
						gap: 0.5rem;

						.contact-link,
						.contact-item {
							font-size: 0.85rem;
						}
					}

					.footer-nav {
						gap: 0.25rem;

						a {
							font-size: 0.85rem;
						}

						.cookie-settings-btn {
							font-size: 0.8rem;
							padding: 0.4rem 0.6rem;
						}
					}
				}
			}
		}
	}
</style>
