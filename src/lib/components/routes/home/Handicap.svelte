<script>
	import Section from '$lib/components/ui/Section.svelte';
	import FileIcon from '~icons/uil/file';
</script>

<Section title="Handicap">
	<div class="header">
		<a href="documents/livret_handicap.pdf" target="_blank">
			<FileIcon /> Télécharger le document complet
		</a>
	</div>
	<div class="content">
		<p>
			Dans une perspective d’évolution « tout au long de la vie », toute personne peut aujourd’hui
			alterner périodes d’activité professionnelle et de formation. C’est l’une de ces étapes pour
			vous aujourd’hui.
		</p>
		<p>
			POUGITOCAD a pour objectif de permettre aux stagiaires en situation de handicap de suivre les
			actions de formation au même titre que les autres publics.
		</p>
		<p>
			Pour votre épanouissement et la qualité du déroulement de votre formation en présentiel, ce
			guide d’accueil vous informe des mesures d’accompagnement qui peuvent être mises en œuvre.
		</p>
		<p>
			Il vous permet de connaître toutes les conditions et les informations pratiques ainsi que les
			conditions de préparation de votre formation et du déroulement pédagogique que nous pouvons
			élaborer avec le Formateur et de notre réseau de partenariat. Nous veillerons aux solutions
			d’accueil et d’organisation sur le lieu de formation ainsi que logistiques, techniques et
			pédagogiques afin que ce moment de formation se déroule pour vous dans les meilleures
			conditions.
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

		a {
			max-width: 80%;
			padding: 0.5rem 1rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			border-radius: $radius;
			color: $bg;
			background: $active;
			transition: 0.5s;

			&:hover {
				background: $text;
			}
		}
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
