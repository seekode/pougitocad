<script>
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Conformité">
	<CalloutBox>
		<img src="images/index/qualiopi.jpg" alt="certification qualiopi" />
		<div>
			<h3>Qualiopi - Formation certifiée</h3>
			<p>
				POUGITOCAD est un organisme de formation certifié Qualiopi. La certification qualité a été
				délivrée au titre de la catégorie d'action suivante : Action de formation
			</p>
		</div>
		<div>
			<h3>Conditions d'accessibilité</h3>
			<p>
				Concernant l'accès et l'adaptation de cette formation à tous les publics et aux personnes en
				situation de handicap, n'hésitez pas à en parler avec notre référent handicap dès la
				première prise de contact. POUGITOCAD est engagé dans une démarche d'inclusion profitable
				pour tous.
			</p>
		</div>
	</CalloutBox>
</Section>

<style lang="scss">
	img {
		width: 10rem;
		border-radius: $radius;
	}

	div {
		margin: 2rem 0;

		h3 {
			color: $primary;
			font-size: 1.8rem;
			margin: 0.5rem 0;
		}

		p {
			margin-left: 0.5rem;
		}
	}
</style>
