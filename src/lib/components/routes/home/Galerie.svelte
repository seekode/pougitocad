<script lang="ts">
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<div class="c intro-wrapper">
	<CalloutBox text>
		<p class="intro">
			Quelques instants capturés lors de nos cours et stages. La galerie s'enrichira au fil des
			prochaines saisons !
		</p>
	</CalloutBox>
</div>

<Section title="Les ateliers yoga, bien-être & vitalité" subtitle="Cours adultes">
	<div class="gallery">
		<figure class="gallery__item">
			<div class="gallery__frame">
				<img
					src="/images/site/cours-yoga-adultes.jpg"
					alt="Cours de yoga adultes en pleine séance"
				/>
			</div>
			<figcaption>
				Un moment de pratique partagée, entre respiration, posture et écoute de soi.
			</figcaption>
		</figure>
		<figure class="gallery__item">
			<div class="gallery__frame">
				<img
					src="/images/site/diplome-remise.jpg"
					alt="Moment convivial de remise de diplôme au sein de l'association"
				/>
			</div>
			<figcaption>
				Les temps forts de la vie associative, faits de convivialité et de belles rencontres.
			</figcaption>
		</figure>
	</div>
</Section>

<Section title="Les séances Power-Up & mouvement" subtitle="Ados & Enfants">
	<div class="gallery gallery--single">
		<figure class="gallery__item">
			<div class="gallery__frame gallery__frame--round">
				<img
					src="/images/site/power-up-relaxation.png"
					alt="Enfants et ados en relaxation après une séance Power-Up"
				/>
			</div>
			<figcaption>
				Après l'effort, place à la détente : un temps de relaxation bien mérité pour nos jeunes
				sportifs.
			</figcaption>
		</figure>
		<figure class="gallery__item">
			<div class="gallery__frame">
				<img
					src="/images/site/laurent-portrait.jpg"
					alt="Laurent, enseignant, transmettant sa passion"
				/>
			</div>
			<figcaption>
				Une pédagogie attentive, pensée pour accompagner chaque élève à son rythme.
			</figcaption>
		</figure>
	</div>
</Section>

<style lang="scss">
	.intro-wrapper {
		margin: 0 auto;
		padding-top: 2rem;
	}

	.intro {
		margin: 0;
		font-style: italic;
		font-size: 1.1rem;
		color: $text;
	}

	.gallery {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem;

		&--single {
			grid-template-columns: 1fr 1fr;
		}

		&__item {
			margin: 0;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		&__frame {
			overflow: hidden;
			border-radius: $radius;
			box-shadow: 0 8px 24px rgba(58, 46, 34, 0.15);

			img {
				display: block;
				width: 100%;
				height: 20rem;
				object-fit: cover;
				transition: transform 0.4s ease;
			}

			&:hover img {
				transform: scale(1.05);
			}

			&--round img {
				object-fit: contain;
				background: $bg-alt;
			}
		}

		figcaption {
			font-style: italic;
			color: $active;
			line-height: 1.5;
			padding: 0 0.2rem;
		}
	}

	@media (max-width: 768px) {
		.gallery,
		.gallery--single {
			grid-template-columns: 1fr;
		}

		.gallery__frame img {
			height: 16rem;
		}
	}
</style>
