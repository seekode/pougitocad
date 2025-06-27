<script>
	import Button from '$lib/components/ui/Button.svelte';
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import { fly } from 'svelte/transition';
	import ArrowIcon from '~icons/uil/angle-right-b';

	const data = [
		{
			morning: {
				title: 'Introduction à Autodesk - AutoCAD',
				content: [
					'Créer des dessins 2D simples en utilisant AutoCAD',
					'Manipuler les outils de dessin, de modification et de cotation de base',
					'Organiser les éléments du dessin avec des calques',
					'Configurer et imprimer des dessins conformément aux normes de base'
				]
			},
			afternoon: {
				title: 'Comprendre et manipuler les éléments d’un plan',
				content: [
					'Utilisation des outils de sélection',
					'Utilisation des commandes de modification de base (déplacer, copier, tourner, échelle, etc.)',
					'Utilisation des commandes de modification avancées (étirer, décaler, miroir, aligner, etc.)',
					'Comprendre les différents éléments d’un plan (lignes, polygones, arcs, cercles, hachures, textes, etc.)'
				]
			}
		},
		{
			morning: {
				title: 'Techniques avancées de modification de plans',
				content: [
					'Modification des propriétés des objets (couleur, type de ligne, épaisseur de ligne, etc.)',
					'Gestion des calques pour contrôler la visibilité des éléments du plan',
					'Introduction à la création de blocs',
					'Utilisation des blocs pour gérer les éléments répétitifs',
					'Nettoyer un dessin'
				]
			},
			afternoon: {
				title: 'Mise en pratique',
				content: [
					"Définir l'habillage du dessin (étiquette, annotations, nuage, hachures, cotation)",
					"Organisation des dessins dans l'espace modèle et l'espace objet",
					"Mise en page et configuration pour l'impression",
					'Impression des dessins conformément aux normes professionnelles'
				]
			}
		}
	];

	let day = $state(0);
</script>

<Section title="Programme">
	<div class="program">
		<div class="program__header">
			<Button active={day === 0} onclick={() => (day = 0)}>Jour 1</Button>
			<Button active={day === 1} onclick={() => (day = 1)}>Jour 2</Button>
		</div>
		<div class="program__content">
			{#key day}
				<div out:fly={{ y: -100, duration: 1000 }} in:fly={{ y: 100, duration: 1000 }}>
					<div>
						<h3>Matin : {data[day].morning.title}</h3>
						<CalloutBox>
							<ul>
								{#each data[day].morning.content as item (item)}
									<li>
										<ArrowIcon />
										<p>{item}</p>
									</li>
								{/each}
							</ul>
						</CalloutBox>
					</div>
					<div>
						<h3>Après-Midi : {data[day].afternoon.title}</h3>
						<CalloutBox>
							<ul>
								{#each data[day].afternoon.content as item (item)}
									<li>
										<ArrowIcon />
										<p>{item}</p>
									</li>
								{/each}
							</ul>
						</CalloutBox>
					</div>
				</div>
			{/key}
		</div>
	</div>
</Section>

<style lang="scss">
	.program {
		width: 100%;
		border: 2px solid $primary;
		border-radius: $radius;

		&__header {
			width: calc(100% - 2rem);
			height: 5rem;
			padding: 0 1rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			background: $primary;
			border-radius: calc($radius - 0.1rem) calc($radius - 0.1rem) 0 0;
		}

		&__content {
			width: 100%;
			height: 34rem;
			position: relative;
			overflow: hidden;

			> div {
				width: calc(100% - 3rem);
				height: calc(100% - 3rem);
				padding: 1.5rem;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				border-radius: $radius;

				h3 {
					color: $primary;
					font-size: 1.5rem;
				}

				ul {
					list-style: none;
					display: flex;
					flex-direction: column;
					gap: 1.2rem;

					li {
						display: flex;
						align-items: center;

						:global(svg) {
							color: $primary;
							font-size: 1.2rem;
						}

						p {
							max-width: 90%;
						}
					}
				}
			}
		}
	}

	@media (max-width: 768px) {
		.program__content {
			height: 40rem;
		}
	}

	@media (max-width: 600px) {
		.program__content {
			height: 45rem;
		}
	}

	@media (max-width: 480px) {
		.program__content {
			height: 50rem;

			> div h3 {
				font-size: 1.2rem;
			}
		}
	}

	@media (max-width: 400px) {
		.program__content > div {
			width: calc(100% - 2rem);
			height: calc(100% - 2rem);
			padding: 1rem;
		}
	}
</style>
