<script lang="ts">
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Mentions légales">
	<div class="legal-content">
		<div class="section">
			<h3>Identification de l'éditeur</h3>
			<p><strong>Dénomination sociale :</strong> POUGITOCAD</p>
			<p><strong>Forme juridique :</strong> Entreprise individuelle</p>
			<p><strong>Responsable de la publication :</strong> Laurent POUGAJENDIRANE</p>
			<p><strong>Adresse :</strong> 20 rue des fontaines 60157 Elincourt Sainte Marguerite</p>
			<p>
				<strong>Téléphone :</strong>
				<a href="tel:+33788756834" style="color: blue">+33 7 88 75 68 34</a>
			</p>
			<p>
				<strong>Email :</strong>
				<a href="mailto:pougitocad@gmail.com" style="color: blue">pougitocad@gmail.com</a>
			</p>
			<p><strong>Numéro de déclaration d'activité :</strong> 11950855495</p>
		</div>

		<div class="section">
			<h3>Hébergement</h3>
			<p>Le site web est hébergé par :</p>
			<p>
				<strong>Nom de l'hébergeur :</strong>
				<a href="https://www.o2switch.fr" target="_blank" style="color: blue">O2Switch</a>
			</p>
			<p><strong>Adresse :</strong> Chem. des Pardiaux, 63000 Clermont-Ferrand</p>
		</div>

		<div class="section">
			<h3>Conception</h3>
			<p>Le site web à été conçu par :</p>
			<p>
				<strong>Nom :</strong>
				<a href="https://seekode.dev" target="_blank">Nicolas Texier | Seekode</a>
			</p>
			<p>
				<strong>Site web :</strong>
				<a href="https://seekode.dev" target="_blank" style="color: blue">https://seekode.dev</a>
			</p>
		</div>

		<div class="section">
			<h3>Propriété intellectuelle</h3>
			<p>
				L'ensemble de ce site relève de la législation française et internationale sur le droit
				d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y
				compris pour les documents téléchargeables et les représentations iconographiques et
				photographiques.
			</p>
		</div>

		<div class="section">
			<h3>Limitation de responsabilité</h3>
			<p>
				Les informations contenues sur ce site sont aussi précises que possible et le site est
				périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions
				ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un
				dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse
				pougitocad@gmail.com.
			</p>
		</div>

		<div class="section">
			<h3>Droit applicable</h3>
			<p>
				Tant le présent site que les modalités et conditions de son utilisation sont régis par le
				droit français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et
				après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français
				seront seuls compétents pour connaître de ce litige.
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
	}
</style>
