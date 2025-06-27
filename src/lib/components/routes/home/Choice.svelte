<script>
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Pourquoi choisir  POUGITOCAD?">
	<div class="choice">
		<div>
			<div>
				<div>1</div>
				<h3>Adaptation du programme de formation</h3>
			</div>
			<p>
				Nous adaptons gratuitement le contenu de nos formations à vos besoins spécifiques pour
				garantir une pédagogie concrète et 100% efficace.
			</p>
		</div>
		<div>
			<div>
				<div>2</div>
				<h3>Formations courtes et concrètes</h3>
			</div>
			<p>
				Pour monter rapidement en compétences. Pour vous c’est la garantie d’une formation à forte
				valeur ajoutée.
			</p>
		</div>
		<div>
			<div>
				<div>3</div>
				<h3>Où vous voulez</h3>
			</div>
			<p>Partout en France ou au sein de bureaux dédiés.</p>
		</div>
		<div>
			<div>
				<div>4</div>
				<h3>Tarif unique</h3>
			</div>
			<p>
				Nos tarifs sont identiques que vous soyez seul(e) ou 5 participant(e)s. Nos tarifs sont tout
				inclus et clé en main (déplacement du formateur).
			</p>
		</div>
		<div>
			<div>
				<div>5</div>
				<h3>Garantie 1er inscrit</h3>
			</div>
			<p>
				Toutes nos sessions de formation sont ouvertes et maintenues à partir d’un seul participant
				(déplacement du formateur sur site).
			</p>
		</div>
	</div>
</Section>

<style lang="scss">
	.choice {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 3rem;

		> div {
			width: calc(50% - 2rem);
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			div {
				display: flex;
				align-items: center;
				gap: 1rem;
				font-size: 1.5rem;
				font-weight: bold;

				div {
					width: 3rem;
					height: 3rem;
					position: relative;
					font-size: 2rem;
					display: flex;
					align-items: center;
					justify-content: center;

					&:before {
						content: '';
						width: 0.5rem;
						height: 100%;
						position: absolute;
						bottom: 0;
						right: 0;
						background: $primary;
						border-radius: $radius;
					}

					&:after {
						content: '';
						width: 100%;
						height: 0.5rem;
						position: absolute;
						bottom: 0;
						right: 0;
						background: $active;
						border-radius: $radius;
					}
				}

				h3 {
					width: calc(100% - 4rem);
					color: $active;
				}
			}

			p {
				margin-left: 4rem;
			}
		}
	}

	@media (max-width: 768px) {
		.choice > div div {
			font-size: 1rem;

			div {
				font-size: 1.7rem;

				&:before {
					width: 0.5rem;
				}

				&:after {
					height: 0.45rem;
				}
			}
		}

		p {
			margin-left: 4rem;
		}
	}

	@media (max-width: 600px) {
		.choice > div {
			width: calc(100% - 2rem);
		}
	}
</style>
