<script>
	import Section from '$lib/components/ui/Section.svelte';
	import BookOpenIcon from '~icons/uil/book-open';
	import CalendarIcon from '~icons/uil/calendar';
	import CheckCircleIcon from '~icons/uil/check-circle';
	import GraduationCapIcon from '~icons/uil/graduation-cap';
	import UserIcon from '~icons/uil/user';
	import UserAltIcon from '~icons/uil/users-alt';
</script>

<Section
	title="Résumé"
	subtitle="A l'issue de ce module, le stagiaire maniera Ies fonctionnalités du logiciel AutoCAD et saura
		produire tout ou partie des livrables et réaliser des modélisations avancées."
>
	<div class="resume">
		<div class="resume__top">
			<UserIcon />
			<p>Tarif : 880€ HT</p>
		</div>
		<div class="resume__bottom">
			<div>
				<UserAltIcon />
				<p>Groupe limité de 1 à 5 stagiaires</p>
			</div>
			<div>
				<CalendarIcon />
				<p>2 jours <br /> 14 heures</p>
			</div>
			<div>
				<GraduationCapIcon />
				<p>Formation continue</p>
			</div>
			<div>
				<CheckCircleIcon />
				<p>98% de satisfaction</p>
			</div>
		</div>
	</div>
	<a href="documents/plan_de_cours.pdf" target="_blank"
		><BookOpenIcon /> <span>VOIR LE DESCRIPTIF DE LA FORMATION</span></a
	>
</Section>

<style lang="scss">
	.resume {
		width: 100%;
		height: 30rem;
		border: 1px solid $primary;
		margin: 2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: $radius;

		&__top {
			width: 100%;
			height: 50%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 3rem;
			font-weight: bold;
			border-radius: $radius $radius 0 0;
			background: $primary;
			color: $bg;

			p {
				padding: 0.5rem 1.5rem;
				font-size: 1rem;
				font-weight: bold;
				border-radius: $radius;
				background: $active;
				color: $bg;
			}
		}

		&__bottom {
			width: calc(100% - 2rem);
			height: 50%;
			padding: 0 1rem;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-around;

			> div {
				width: 8rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;

				:global(svg) {
					font-size: 2rem;
					color: $primary;
				}

				p {
					text-align: center;
				}
			}
		}
	}

	a {
		width: 100%;
		padding: 1rem 0;
		border: 3px solid $text;
		font-size: 1.5rem;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		border-radius: $radius;
		background: $text;
		color: $bg;
		cursor: pointer;
		transition: 0.5s;

		&:hover {
			border: 3px solid $primary;
			background: black;
		}

		span {
			color: $bg;
		}
	}

	@media (max-width: 768px) {
		.resume {
			&__top {
				height: 35%;
			}

			&__bottom {
				height: 65%;

				> div {
					width: 50%;
				}
			}
		}

		a {
			font-size: 1rem;
		}
	}

	@media (max-width: 425px) {
		.resume {
			&__bottom {
				height: 75%;
			}
		}

		a {
			span {
				width: 60%;
			}
		}
	}
</style>
