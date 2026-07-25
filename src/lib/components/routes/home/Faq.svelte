<script lang="ts">
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import BoltIcon from '~icons/uil/bolt';
	import BackpackIcon from '~icons/uil/backpack';
	import UserIcon from '~icons/uil/user';
	import UsersIcon from '~icons/uil/users-alt';
</script>

<Section
	title="Foire aux Questions (FAQ)"
	subtitle="Toutes les réponses à vos questions sur le yoga et nos cours"
>
	<p class="intro">
		Vous débutez ou vous hésitez encore à franchir le pas ? Voici les questions que l'on nous pose
		le plus souvent, classées par thème, pour vous accompagner sereinement dans votre découverte du
		yoga.
	</p>

	<div class="faq-category">
		<div class="faq-category__header faq-category__header--neutral">
			<span class="faq-category__icon"><UserIcon /></span>
			<h3>Général</h3>
		</div>
		<div class="faq-list">
			<CalloutBox>
				<div class="faq-item">
					<p class="faq-item__question">Qu'est-ce que le yoga dans la lignée de Desikachar ?</p>
					<p class="faq-item__answer">
						C'est un yoga traditionnel et individualisé dont le grand principe est : « Ce n'est pas
						la personne qui doit s'adapter au yoga, mais le yoga qui doit s'adapter à la personne. »
						Les séances lient intimement le mouvement à la respiration, avec une progression
						graduelle et sécurisée pour chacun.
					</p>
				</div>
			</CalloutBox>
			<CalloutBox>
				<div class="faq-item">
					<p class="faq-item__question">
						Je n'ai jamais fait de yoga et je ne suis pas souple, puis-je venir ?
					</p>
					<p class="faq-item__answer">
						Oui, absolument ! La souplesse n'est pas un pré-requis, c'est une conséquence d'une
						pratique régulière. Nos cours accueillent tous les niveaux, et chaque posture est
						déclinée avec des variantes pour s'adapter à votre morphologie et à votre condition
						physique.
					</p>
				</div>
			</CalloutBox>
		</div>
	</div>

	<div class="faq-category">
		<div class="faq-category__header faq-category__header--accent">
			<span class="faq-category__icon"><UsersIcon /></span>
			<h3>Cours adultes (tout public)</h3>
		</div>
		<div class="faq-list">
			<CalloutBox>
				<div class="faq-item">
					<p class="faq-item__question">Comment se déroule un cours type pour adultes ?</p>
					<p class="faq-item__answer">
						Une séance dure entre 1h et 1h15 et s'articule autour d'un temps d'accueil et de
						recentrage, d'une pratique posturale adaptée et guidée par le souffle, d'un travail
						respiratoire spécifique et d'une relaxation finale profonde.
					</p>
				</div>
			</CalloutBox>
			<CalloutBox>
				<div class="faq-item">
					<p class="faq-item__question">
						J'ai des douleurs chroniques ou un problème de santé, puis-je participer ?
					</p>
					<p class="faq-item__answer">
						Oui, mais veillez à prévenir l'enseignant avant le début du cours. Grâce à notre
						approche personnalisée, nous adaptons chaque mouvement (propositions alternatives,
						supports) pour s'assurer que la pratique reste totalement fluide et sécuritaire.
					</p>
				</div>
			</CalloutBox>
		</div>
	</div>

	<div class="faq-category">
		<div class="faq-category__header faq-category__header--green">
			<span class="faq-category__icon"><BoltIcon /></span>
			<h3>Cours ados (dès 12 ans) — Power Up Strong</h3>
		</div>
		<div class="faq-list">
			<CalloutBox>
				<div class="faq-item">
					<p class="faq-item__question">Qu'est-ce que le cours « Power Up Strong » ?</p>
					<p class="faq-item__answer">
						C'est un cours spécialement conçu pour les adolescents à partir de 12 ans. Plus
						dynamique, ludique et physique, on y travaille la force, l'équilibre, la coordination et
						la posture (essentielle pour compenser le temps assis au collège), sans esprit de
						compétition.
					</p>
				</div>
			</CalloutBox>
			<CalloutBox>
				<div class="faq-item">
					<p class="faq-item__question">
						Est-ce que cela va aider mon enfant à gérer son stress ou sa concentration ?
					</p>
					<p class="faq-item__answer">
						Tout à fait. En plus de l'aspect physique, chaque séance intègre des outils concrets de
						gestion du stress : techniques de respiration pour calmer le mental avant les examens et
						moments de relaxation pour relâcher la pression scolaire.
					</p>
				</div>
			</CalloutBox>
		</div>
	</div>

	<div class="faq-category">
		<div class="faq-category__header faq-category__header--active">
			<span class="faq-category__icon"><BackpackIcon /></span>
			<h3>Infos pratiques</h3>
		</div>
		<div class="faq-list">
			<CalloutBox text>
				<div class="faq-item">
					<p class="faq-item__question">Quelle tenue et quel matériel dois-je apporter ?</p>
					<p class="faq-item__answer">
						Prévoyez des vêtements souples et confortables (le yoga se pratique pieds nus). Pour des
						raisons d'hygiène, nous vous conseillons d'apporter votre propre tapis de yoga. Pensez
						également à un pull ou un plaid pour la relaxation finale.
					</p>
				</div>
			</CalloutBox>
		</div>
	</div>
</Section>

<style lang="scss">
	.intro {
		max-width: 750px;
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 2.5rem;
	}

	.faq-category {
		width: 100%;
		margin-bottom: 2.5rem;

		&:last-child {
			margin-bottom: 0;
		}

		&__header {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			padding: 0.85rem 1.5rem;
			border-radius: $radius;
			margin-bottom: 1rem;
			background: $bg-alt;
			color: $active;

			h3 {
				font-size: 1.15rem;
				font-weight: 700;
				margin: 0;
				color: inherit;
			}

			&--neutral {
				background: $bg-alt;
				color: $active;
			}

			&--accent {
				background: $accent-deep;
				color: white;
				text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
			}

			&--green {
				background: $green-deep;
				color: white;
				text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
			}

			&--active {
				background: $active;
				color: white;
				text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
			}
		}

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.3rem;
			flex-shrink: 0;
			color: inherit;
		}
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.faq-item {
		background: white;
		border-radius: $radius;
		padding: 1.25rem 1.5rem;
		box-shadow: 0 4px 16px rgba(58, 46, 34, 0.08);

		&__question {
			font-weight: 700;
			color: $primary;
			font-size: 1.05rem;
			margin-bottom: 0.6rem;
		}

		&__answer {
			color: $text;
			line-height: 1.6;
			margin: 0;
		}
	}

	@media (max-width: 768px) {
		.faq-category__header {
			padding: 0.75rem 1.1rem;

			h3 {
				font-size: 1rem;
			}
		}

		.faq-item {
			padding: 1rem 1.15rem;
		}
	}
</style>
