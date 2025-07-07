<script lang="ts">
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Politique des cookies">
	<div class="legal-content">
		<div class="section">
			<h3>Qu'est-ce qu'un cookie ?</h3>
			<p>
				Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette,
				smartphone) lors de la visite d'un site web. Il permet au site de reconnaître votre terminal
				et d'enregistrer certaines informations sur vos préférences.
			</p>
		</div>

		<div class="section">
			<h3>Types de cookies utilisés</h3>

			<div class="cookie-category">
				<h4>Cookies strictement nécessaires</h4>
				<p>
					Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être
					désactivés. Ils permettent notamment de mémoriser vos préférences de consentement.
				</p>
				<ul>
					<li><strong>cookie_consent :</strong> Mémorise vos choix de consentement</li>
					<li><strong>session :</strong> Maintient votre session de navigation</li>
				</ul>
			</div>

			<div class="cookie-category">
				<h4>Cookies de fonctionnalité</h4>
				<p>Ces cookies améliorent le fonctionnement du site et votre expérience utilisateur.</p>
				<ul>
					<li><strong>preferences :</strong> Mémorise vos préférences d'affichage</li>
					<li><strong>language :</strong> Mémorise votre langue préférée</li>
				</ul>
			</div>

			<div class="cookie-category">
				<h4>Cookies externes</h4>
				<p>Ces cookies proviennent de services tiers intégrés au site.</p>
				<ul>
					<li><strong>Google Fonts :</strong> Chargement des polices de caractères</li>
					<li><strong>CDN externes :</strong> Chargement de bibliothèques CSS/JS</li>
				</ul>
			</div>
		</div>

		<div class="section">
			<h3>Durée de conservation</h3>
			<p>Les cookies sont conservés pour les durées suivantes :</p>
			<ul>
				<li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
				<li><strong>Cookies de consentement :</strong> 12 mois</li>
				<li><strong>Cookies de préférences :</strong> 6 mois</li>
			</ul>
		</div>

		<div class="section">
			<h3>Gestion des cookies</h3>
			<p>Vous pouvez gérer vos préférences de cookies de plusieurs façons :</p>
			<ul>
				<li>Via le bandeau de consentement qui apparaît lors de votre première visite</li>
				<li>En modifiant les paramètres de votre navigateur</li>
				<li>En nous contactant directement</li>
			</ul>
		</div>

		<div class="section">
			<h3>Paramètres du navigateur</h3>
			<p>Vous pouvez configurer votre navigateur pour refuser les cookies :</p>
			<ul>
				<li><strong>Chrome :</strong> Paramètres > Confidentialité et sécurité > Cookies</li>
				<li><strong>Firefox :</strong> Options > Vie privée et sécurité > Cookies</li>
				<li><strong>Safari :</strong> Préférences > Confidentialité > Cookies</li>
				<li><strong>Edge :</strong> Paramètres > Cookies et autorisations de site</li>
			</ul>
		</div>

		<div class="section">
			<h3>Contact</h3>
			<p>
				Pour toute question concernant notre politique des cookies, vous pouvez nous contacter à : <strong
					>pougitocad@gmail.com</strong
				>
			</p>
		</div>
	</div>
</Section>
<Footer />

<style lang="scss">
	.legal-content {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 0;
	}

	.section {
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #ffffff;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

		h3 {
			color: #8b1538;
			font-size: 1.25rem;
			font-weight: 700;
			margin-bottom: 1rem;
			border-bottom: 2px solid $primary;
			padding-bottom: 0.5rem;
		}

		p {
			color: #343a40;
			line-height: 1.6;
			margin-bottom: 0.75rem;

			strong {
				color: #8b1538;
				font-weight: 500;
			}
		}

		ul {
			margin: 1rem 0;
			padding-left: 1.5rem;

			li {
				color: #343a40;
				margin-bottom: 0.5rem;
				line-height: 1.6;

				strong {
					color: #8b1538;
					font-weight: 500;
				}
			}
		}
	}

	.cookie-category {
		margin: 1.5rem 0;
		padding: 1rem;
		background: #f8f9fa;
		border-radius: 6px;
		border-left: 4px solid $primary;

		h4 {
			color: #8b1538;
			font-size: 1.1rem;
			font-weight: 600;
			margin-bottom: 0.5rem;
		}

		p {
			margin-bottom: 0.5rem;
		}

		ul {
			margin-top: 0.5rem;
		}
	}
</style>
