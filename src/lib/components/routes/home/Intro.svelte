<script>
	import { resolve } from '$app/paths';
	import CalendarIcon from '~icons/uil/calendar-alt';
	import LocationIcon from '~icons/uil/map-marker';
</script>

<section class="c" data-aos="fade-up">
	<h2>Bougez, respirez, grandissez avec l'association TADASANA</h2>

	<div class="block">
		<div class="block__text">
			<p>
				Découvrez un Yoga Vinyasa fluide et personnalisé selon la tradition Desikachar issu de la
				lignée <a
					href="https://fr.wikipedia.org/wiki/Tirumalai_Krishnamacharya"
					target="_blank"
					rel="noopener">T. Krishnamacharya</a
				>, où le mouvement se joint à la respiration pour se connecter à soi (cours adultes tous
				niveaux).
			</p>
			<blockquote>
				« Le yoga doit être adapté à la personne, et non la personne au yoga. »
				<cite>T.K.V DESIKACHAR</cite>
			</blockquote>
		</div>
		<div class="block__image">
			<img src="/images/site/cours-yoga-adultes.jpg" alt="Cours de yoga adultes en pleine séance" />
		</div>
	</div>

	<div class="block block--reverse">
		<div class="block__text">
			<p>
				Pour les plus jeunes, place à l'énergie avec nos cours <strong>Power-Up / Strong</strong> ! Des
				séances dynamiques conçues pour se défouler, renforcer sa confiance et canaliser sa force tout
				en s'amusant.
			</p>
			<blockquote>
				« Le point de départ de la pratique est ce que nous sommes ici et maintenant. »
				<cite>T.K.V DESIKACHAR</cite>
			</blockquote>
		</div>
		<div class="block__image block__image--round">
			<img
				src="/images/site/power-up-relaxation.png"
				alt="Séance Power-Up / Strong pour ados et enfants"
			/>
		</div>
	</div>

	<div class="cta">
		<a href={resolve('/#planning-tarifs')} class="cta__link">
			<CalendarIcon />
			<span>Voir le planning & les tarifs</span>
		</a>
		<a href={resolve('/#contact')} class="cta__link cta__link--alt">
			<LocationIcon />
			<span>Où nous retrouver ?</span>
		</a>
	</div>
</section>

<style lang="scss">
	section {
		padding: 4rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;

		h2 {
			font-size: 2.4rem;
			font-weight: bold;
			color: $primary;
			text-align: center;
			max-width: 45rem;
		}
	}

	.block {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 3rem;

		&--reverse {
			flex-direction: row-reverse;
		}

		&__text {
			flex: 1;

			p {
				font-size: 1.1rem;
				line-height: 1.6;
				margin-bottom: 1.5rem;

				a {
					color: $primary;
					font-weight: bold;
					text-decoration: underline;
				}
			}

			blockquote {
				margin: 0;
				padding-left: 1.2rem;
				border-left: 0.3rem solid $green;
				font-style: italic;
				font-size: 1.15rem;
				color: $active;

				cite {
					display: block;
					margin-top: 0.5rem;
					font-style: normal;
					font-weight: bold;
					font-size: 0.9rem;
					color: $text;
				}
			}
		}

		&__image {
			flex-shrink: 0;
			width: 22rem;

			img {
				width: 100%;
				display: block;
				border-radius: $radius;
				box-shadow: 0 8px 24px rgba(58, 46, 34, 0.15);
			}

			&--round {
				width: 16rem;

				img {
					border-radius: 50%;
					aspect-ratio: 1;
					object-fit: cover;
				}
			}
		}
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;

		&__link {
			display: flex;
			align-items: center;
			gap: 0.6rem;
			padding: 1rem 2rem;
			font-weight: bold;
			font-size: 1.1rem;
			color: #fff;
			text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
			background: $primary;
			border-radius: $radius;
			transition: 0.4s;

			:global(svg) {
				color: inherit;
			}

			&:hover {
				background: $active;
			}

			&--alt {
				background: $green-deep;

				&:hover {
					background: $active;
				}
			}

			span {
				color: #fff;
			}
		}
	}

	@media (max-width: 768px) {
		section h2 {
			font-size: 1.8rem;
		}

		.block,
		.block--reverse {
			flex-direction: column;
		}

		.block__image {
			width: 100%;
			max-width: 20rem;
		}
	}
</style>
