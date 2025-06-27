<script>
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Foire aux questions">
	<CalloutBox>
		<div>
			<h3>Ma formation peut-elle être prise en charge financièrement ?</h3>
			<p>
				Oui, votre formation peut être financée entièrement ou partiellement par un organisme
				financeur (OPCO, FAF…)
			</p>
		</div>
		<div>
			<h3>Qu’est-ce qu’un OPCO ?</h3>
			<p>
				L'organisme financeur dépend de votre statut, salarié, indépendant autoentrepreneur,
				travailleur indépendant, dirigeant non-salarié, libéral, demandeur d'emploi et du champ
				d'activité professionnelle de votre entreprise.
			</p>
		</div>
		<div>
			<h3>Est-il possible d’utiliser mon CPF pour me former ?</h3>
			<p>
				En dehors du temps de travail, vous êtes libre d’utiliser votre budget comme bon vous
				semble. Dans le cadre de votre activité salariale, vous devez avertir votre employeur de
				votre projet de formation. Il est nécessaire d’avoir son accord pour vous absenter de votre
				poste.
			</p>
		</div>
		<div>
			<h3>Où aura lieu ma formation ?</h3>
			<p>
				En entreprise la formation se déroule dans vos locaux ou à votre convenance dans des bureaux
				de location (à définir).
			</p>
		</div>
		<div>
			<h3>Quels sont les horaires des formations ?</h3>
			<p>
				Nos formations débutent à 9h00 et se terminent à 17h00. Une pause déjeuner d’1 heure est
				prévue entre 12h00 et 13h00 et deux autres pauses de 10 minutes (une à 11h00 et une à
				15h00).
			</p>
		</div>
		<div class="last">
			<h3>Comment se passe le financement et quelles sont les obligations vis-à-vis d’un OPCO ?</h3>
			<p>
				Les procédures de prise en charge des formations varient d’un OPCO à l’autre. Les pièces à
				fournir aussi : conventions, convocations, éléments de facturation… N’hésitez pas à
				consulter le site internet de votre OPCO ou à contacter votre interlocuteur privilégié
				auprès de votre OPCO qui pourra répondre à toutes vos questions.
			</p>
		</div>
	</CalloutBox>
</Section>

<style lang="scss">
	div {
		margin-bottom: 2rem;

		h3 {
			color: $primary;
			margin: 0.5rem 0;
		}

		p {
			margin-left: 0.5rem;
		}

		&.last {
			margin-bottom: 0;
		}
	}
</style>
