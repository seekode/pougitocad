<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section
	title="Laurent POUGAJENDIRANE"
	subtitle="Responsable d’Etudes - Formateur CAO - 11 années d’expérience"
>
	<div class="header"></div>
	<div class="content">
		<p>
			Laurent POUGAJENDIRANE, est diplômé d’un BAC+2 CPI en 2011. Entre Responsable d’études et
			formateur CAO, il commence sa carrière comme dessinateur intégré à l’entreprise SACATEC
			spécialisé dans l’évacuation des gaz d’échappement dans le domaine de l’automobile. De la
			recherche & développement au sein de la société. Son travail est pluridisciplinaire.
		</p>

		<p>
			Depuis 2018, il développe sa carrière dans le monde du bâtiment avec INDUSTRIELLE DU BETON,
			une société de constructeur de produits béton en France. Il collabore également avec plusieurs
			structures comme formateur CAO sur des logiciels tel que AUTOCAD. Désormais en tant que
			responsable bureau d’études dans le domaine fluides médicaux avec GPF, il contribue activement
			au succès des projets auxquels il participe et s’engage à apporter son expertise et dévouement
			pour assurer la satisfaction des clients et la réussite collective de l'équipe
		</p>
	</div>
</Section>

<style lang="scss">
	.header {
		width: 100%;
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $primary;
		border-radius: $radius $radius $radius 0;
	}

	.content {
		padding: 1rem 2rem;
		position: relative;

		&::before {
			content: '';
			width: 0.5rem;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: $primary;
			border-radius: 0 0 $radius $radius;
		}

		p {
			margin-bottom: 1rem;
		}
	}
</style>
