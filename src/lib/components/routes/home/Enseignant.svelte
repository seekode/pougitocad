<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Laurent" subtitle="Professeur de Yoga">
	<div class="portrait">
		<div class="portrait__image">
			<img src="/images/site/laurent-portrait.jpg" alt="Laurent, professeur de yoga" />
		</div>
		<div class="portrait__content">
			<h3>Parcours & Philosophie</h3>
			<p>
				Laurent enseigne le yoga depuis 4 ans dans la <strong>lignée de T.K.V. Desikachar</strong>,
				une approche qui place l'écoute, l'adaptation et le respect du rythme de chacun au cœur de
				la pratique.
			</p>
			<p>
				Sa pédagogie se distingue par une grande attention accordée à la respiration, à la justesse
				des postures et à la dimension intérieure du yoga.
			</p>
			<p>
				Toujours en recherche et en apprentissage, il poursuit une formation continue en <strong
					>Ayurvéda</strong
				>, approfondissant ainsi sa compréhension globale de l'équilibre corps-esprit.
			</p>
			<p>
				Cette double approche lui permet d'accompagner ses élèves de manière personnalisée, avec
				douceur et bienveillance, en reliant la pratique du yoga à une vision plus large de la santé
				et du bien-être.
			</p>
			<div class="badges">
				<span>Viniyoga Fondation</span>
				<span>Spécialiste Ayurvéda</span>
			</div>
		</div>
	</div>
</Section>

<Section title="Expertise sportive & pédagogie">
	<div class="expertise">
		<p>
			Laurent est un entraîneur passionné de badminton, titulaire d'un diplôme d'État CQP
			(Certificat de Qualification Professionnelle). Fort d'une solide expérience en tant qu'ancien
			joueur de niveau national, il met son expertise et sa connaissance approfondie du haut niveau
			au service de ses élèves.
		</p>
		<p>
			Reconnu pour sa pédagogie et sa capacité à s'adapter aux besoins de chacun, il accompagne
			aussi bien les débutants que les compétiteurs confirmés dans leur progression. Son approche
			allie rigueur technique, préparation physique et plaisir du jeu, afin de développer chez ses
			joueurs la performance, l'autonomie et la passion du sport.
		</p>
		<div class="expertise__image">
			<img src="/images/site/diplome-remise.jpg" alt="Remise de diplôme de professeur de yoga" />
		</div>
	</div>
</Section>

<style lang="scss">
	.portrait {
		width: 100%;
		display: flex;
		align-items: flex-start;
		gap: 2.5rem;

		&__image {
			flex-shrink: 0;
			width: 18rem;

			img {
				width: 100%;
				border-radius: $radius;
				box-shadow: 0 8px 24px rgba(58, 46, 34, 0.15);
			}
		}

		&__content {
			flex: 1;

			h3 {
				color: $accent;
				font-size: 1.3rem;
				margin-bottom: 1rem;
			}

			p {
				margin-bottom: 1rem;
				line-height: 1.6;
			}

			.badges {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
				margin-top: 1.5rem;

				span {
					padding: 0.5rem 1.2rem;
					border-radius: $radius;
					font-weight: bold;
					font-size: 0.9rem;
					background: $bg-alt;
					border: 1px solid $accent;
					color: $active;
				}
			}
		}
	}

	.expertise {
		width: 100%;

		p {
			margin-bottom: 1rem;
			line-height: 1.6;
		}

		&__image {
			margin-top: 1.5rem;

			img {
				width: 100%;
				border-radius: $radius;
				box-shadow: 0 8px 24px rgba(58, 46, 34, 0.15);
			}
		}
	}

	@media (max-width: 768px) {
		.portrait {
			flex-direction: column;

			&__image {
				width: 100%;
				max-width: 20rem;
			}
		}
	}
</style>
