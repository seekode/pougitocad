<script lang="ts">
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Politique de confidentialité">
	<div class="legal-content">
		<div class="section">
			<h3>Collecte des données personnelles</h3>
			<p>
				POUGITOCAD collecte vos données personnelles dans le cadre de ses activités de formation
				professionnelle. Les données collectées sont :
			</p>
			<ul>
				<li>Nom et prénom</li>
				<li>Adresse email</li>
				<li>Numéro de téléphone</li>
				<li>Informations relatives à votre demande de formation</li>
			</ul>
		</div>

		<div class="section">
			<h3>Finalités du traitement</h3>
			<p>Vos données personnelles sont utilisées pour :</p>
			<ul>
				<li>Répondre à vos demandes de contact et de devis</li>
				<li>Organiser et dispenser les formations</li>
				<li>Assurer le suivi administratif et pédagogique</li>
				<li>Respecter nos obligations légales et réglementaires</li>
			</ul>
		</div>

		<div class="section">
			<h3>Base légale</h3>
			<p>Le traitement de vos données personnelles est basé sur :</p>
			<ul>
				<li>Votre consentement pour les demandes de contact</li>
				<li>L'exécution du contrat de formation</li>
				<li>Le respect d'obligations légales (formation professionnelle)</li>
			</ul>
		</div>

		<div class="section">
			<h3>Durée de conservation</h3>
			<p>Vos données personnelles sont conservées :</p>
			<ul>
				<li>3 ans pour les demandes de contact non converties</li>
				<li>5 ans pour les dossiers de formation (obligations légales)</li>
				<li>10 ans pour les documents comptables</li>
			</ul>
		</div>

		<div class="section">
			<h3>Vos droits</h3>
			<p>Conformément au RGPD, vous disposez des droits suivants :</p>
			<ul>
				<li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
				<li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
				<li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
				<li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
				<li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
				<li><strong>Droit à la limitation :</strong> limiter le traitement</li>
			</ul>
			<p>
				Pour exercer vos droits, contactez-nous à : <strong>pougitocad@gmail.com</strong>
			</p>
		</div>

		<div class="section">
			<h3>Cookies et technologies similaires</h3>
			<p>
				Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez
				gérer vos préférences via le bandeau de consentement.
			</p>
		</div>

		<div class="section">
			<h3>Sécurité</h3>
			<p>
				Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger
				vos données personnelles contre tout accès non autorisé, altération, divulgation ou
				destruction.
			</p>
		</div>

		<div class="section">
			<h3>Contact</h3>
			<p>
				Pour toute question concernant cette politique de confidentialité, vous pouvez nous
				contacter à : <strong>pougitocad@gmail.com</strong>
			</p>
			<p>
				Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de
				l'Informatique et des Libertés).
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
		border: 1px solid #e9ecef;

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
</style>
