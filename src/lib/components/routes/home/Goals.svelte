<script>
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import ArrowIcon from '~icons/uil/angle-right-b';
</script>

<Section
	title="Objectifs"
	subtitle="À l'issue de la formation, le participant sera capable de mettre en œuvre les compétences suivantes :"
>
	<CalloutBox text>
		<ul>
			<li>
				<ArrowIcon />
				<p>Créer des dessins 2D simples en utilisant AutoCAD.</p>
			</li>
			<li>
				<ArrowIcon />
				<p>Manipuler les outils de dessin, de modification et de cotation de base.</p>
			</li>
			<li>
				<ArrowIcon />
				<p>Organiser les éléments du dessin avec des calques.</p>
			</li>
			<li>
				<ArrowIcon />
				<p>Configurer et imprimer des dessins conformément aux normes de base.</p>
			</li>
		</ul>
	</CalloutBox>
</Section>

<style lang="scss">
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
</style>
