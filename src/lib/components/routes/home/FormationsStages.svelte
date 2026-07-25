<script lang="ts">
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import MicrophoneIcon from '~icons/uil/microphone';
	import RocketIcon from '~icons/uil/rocket';
	import SunIcon from '~icons/uil/sun';
</script>

<Section title="Bouger, Grandir, S'épanouir">
	<p class="intro">
		Notre association propose des activités adaptées à chaque génération pour libérer son potentiel,
		recharger ses batteries et trouver son équilibre. À travers nos stages de vacances et nos
		événements à l'année, nous combinons énergie, force et sérénité.
	</p>

	<CalloutBox text>
		<p class="philo">
			<strong>Notre philosophie :</strong> de l'énergie à revendre pour les enfants, une bulle de sérénité
			et de force pour les adultes.
		</p>
	</CalloutBox>

	<div class="cards">
		<div class="card">
			<div class="card__icon"><RocketIcon /></div>
			<h3>Stages de Vacances – Spécial Enfants : « Power Up &amp; Strong »</h3>
			<p>
				Pendant les vacances scolaires, nous accueillons les enfants pour des stages
				ultra-dynamiques ! Conçus pour développer la confiance en soi, la force physique et l'esprit
				d'équipe, nos programmes « Power Up » mêlent défis sportifs, parcours d'agilité et
				dépassement de soi dans une ambiance fun et sécurisante. L'occasion idéale pour eux de se
				défouler et de révéler leur plein potentiel.
			</p>
		</div>

		<div class="card">
			<div class="card__icon"><SunIcon /></div>
			<h3>Formations &amp; Sessions Adultes : « Yoga &amp; Bien-être »</h3>
			<p>
				Tout au long de l'année, nous accompagnons les adultes vers un mieux-être global. Nos
				formations et cours de Yoga (du plus dynamique au plus relaxant) sont pensés pour renforcer
				le corps, apaiser l'esprit et apprendre à mieux gérer le stress du quotidien.
			</p>
		</div>

		<div class="card">
			<div class="card__icon"><MicrophoneIcon /></div>
			<h3>Conférences inspirantes</h3>
			<p>
				Nous organisons régulièrement des rencontres et des conférences autour de la santé, du
				sport, de la parentalité et du développement personnel pour échanger et progresser ensemble.
			</p>
		</div>
	</div>
</Section>

<Section title="Prochain stage" subtitle="Yoga & Bien-être pour Adultes">
	<div class="stage">
		<div class="stage__text">
			<p>
				Rejoignez-nous pour notre prochain stage de Yoga dédié aux adultes, débutants comme
				confirmés. Une belle occasion de prendre du temps pour soi, d'approfondir sa pratique et de
				partager un moment convivial avec d'autres pratiquants.
			</p>
			<ul>
				<li>Ouvert aux débutants et aux confirmés</li>
				<li>Cotisation : 20€</li>
				<li>Inscription obligatoire</li>
			</ul>
		</div>
		<div class="stage__image">
			<img
				src="/images/site/affiche-stage-adultes.jpg"
				alt="Affiche du stage de Yoga Adultes, débutants et confirmés, cotisation 20€, inscription obligatoire"
			/>
		</div>
	</div>
</Section>

<style lang="scss">
	.intro {
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.philo {
		font-size: 1.15rem;
		line-height: 1.6;
		color: $active;

		strong {
			color: $primary;
		}
	}

	.cards {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		padding: 1.8rem;
		background: $bg-alt;
		border-radius: $radius;
		box-shadow: 0 8px 24px rgba(58, 46, 34, 0.08);

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			background: $primary;
			color: $bg;
			font-size: 1.5rem;
		}

		h3 {
			font-size: 1.2rem;
			color: $primary;
			line-height: 1.3;
		}

		p {
			font-size: 0.98rem;
			line-height: 1.6;
			color: $text;
		}
	}

	.stage {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 3rem;

		&__text {
			flex: 1;

			p {
				font-size: 1.1rem;
				line-height: 1.6;
				margin-bottom: 1.2rem;
			}

			ul {
				list-style: none;
				display: flex;
				flex-direction: column;
				gap: 0.6rem;

				li {
					position: relative;
					padding-left: 1.4rem;
					font-weight: bold;
					color: $active;

					&::before {
						content: '';
						position: absolute;
						left: 0;
						top: 0.5rem;
						width: 0.6rem;
						height: 0.6rem;
						border-radius: 50%;
						background: $accent;
					}
				}
			}
		}

		&__image {
			flex-shrink: 0;
			width: 20rem;

			img {
				width: 100%;
				display: block;
				border-radius: $radius;
				box-shadow: 0 10px 28px rgba(58, 46, 34, 0.2);
			}
		}
	}

	@media (max-width: 900px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.stage {
			flex-direction: column;

			&__image {
				width: 100%;
				max-width: 22rem;
			}
		}
	}
</style>
