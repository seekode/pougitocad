<script>
	import Section from '$lib/components/ui/Section.svelte';
	import ArrowIcon from '~icons/uil/angle-right-b';
</script>

<Section title="Satisfaction des candidats">
	<div>
		<h3>2024-2025</h3>
		<ul>
			<li>
				<ArrowIcon />
				<p><span>6</span> formations réalisées</p>
			</li>
			<li>
				<ArrowIcon />
				<p><span>13</span> salariés formés</p>
			</li>
			<h4>ACTION DE FORMATION EN DIRECT</h4>
			<li>
				<ArrowIcon />
				<p>
					Satisfaction des stagiaires concernant la formation (contenu, atteinte des objectifs):
					<span>100%</span>
				</p>
			</li>
			<li>
				<ArrowIcon />
				<p>
					Satisfaction des stagiaires concernant la pédagogie et l’animation du formateur:
					<span>100%</span>
				</p>
			</li>
			<h4>ACTION DE FORMATION EN SOUS-TRAITANCE</h4>
			<li>
				<ArrowIcon />
				<p>
					Satisfaction des stagiaires concernant la formation (contenu, atteinte des objectifs):
					<span>98%</span>
				</p>
			</li>
			<li>
				<ArrowIcon />
				<p>
					Satisfaction des stagiaires concernant la pédagogie et l’animation du formateur:
					<span>98%</span>
				</p>
			</li>
		</ul>
	</div>
</Section>

<style lang="scss">
	div {
		width: calc(100% - 2rem);
		padding: 1rem;
		border: 1px solid $primary;
		border-radius: $radius;

		h3 {
			font-size: 1rem;
			margin-bottom: 1rem;
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

					span {
						font-weight: bold;
						margin: 0 0.2rem;
						color: $active;
					}
				}
			}
		}
	}
</style>
