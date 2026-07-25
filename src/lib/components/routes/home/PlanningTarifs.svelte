<script lang="ts">
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import ClockIcon from '~icons/uil/clock';

	type Course = {
		time: string;
		title: string;
		detail: string;
	};

	const courses: Course[] = [
		{
			time: '18h30 - 19h45',
			title: 'Power-Up / Strong',
			detail: 'Ados & Enfants (Dès 12 ans)'
		},
		{
			time: '20h00 - 21h15',
			title: 'YOGA (Adultes)',
			detail: 'Vinyasa'
		}
	];

	type Day = {
		id: string;
		name: string;
		place: string;
		modifier: 'mardi' | 'jeudi';
	};

	const days: Day[] = [
		{ id: 'mardi', name: 'MARDI — ÉLINCOURT', place: 'Salle des Fêtes', modifier: 'mardi' },
		{ id: 'jeudi', name: 'JEUDI — LASSIGNY', place: 'Gymnase Annexe 1', modifier: 'jeudi' }
	];

	type TarifRow = {
		id: string;
		public: string;
		formule: string;
		tarif: string;
		famille?: boolean;
	};

	type Formule = {
		id: string;
		title: string;
		rows: TarifRow[];
	};

	const formules: Formule[] = [
		{
			id: '1-cours',
			title: '1 cours par semaine',
			rows: [
				{
					id: '1-enfants',
					public: 'Enfants & Ados (12 à 18 ans)',
					formule: 'Accès à 1 cours hebdomadaire au choix',
					tarif: '165 €'
				},
				{
					id: '1-adultes',
					public: 'Adultes (18 ans et +)',
					formule: 'Accès à 1 cours hebdomadaire au choix',
					tarif: '195 €'
				},
				{
					id: '1-famille',
					public: 'Prix Famille',
					formule: 'Dès 1 parent et 1 enfant inscrits sous le même nom',
					tarif: '340 €',
					famille: true
				}
			]
		},
		{
			id: '2-cours',
			title: '2 cours par semaine',
			rows: [
				{
					id: '2-enfants',
					public: 'Enfants & Ados (12 à 18 ans)',
					formule: 'Accès à 2 cours hebdomadaires au choix',
					tarif: '205 €'
				},
				{
					id: '2-adultes',
					public: 'Adultes (18 ans et +)',
					formule: 'Accès à 2 cours hebdomadaires au choix',
					tarif: '235 €'
				},
				{
					id: '2-famille',
					public: 'Prix Famille',
					formule: 'Dès 1 parent et 1 enfant inscrits sous le même nom',
					tarif: '420 €',
					famille: true
				}
			]
		}
	];
</script>

<Section title="Planning des cours 2026-2027">
	<div class="planning">
		{#each days as day (day.id)}
			<div class="planning__day planning__day--{day.modifier}">
				<div class="planning__header">
					<h3>{day.name}</h3>
					<p>{day.place}</p>
				</div>
				<div class="planning__rows">
					{#each courses as course (course.time)}
						<div class="planning__row">
							<div class="planning__time">
								<ClockIcon />
								<span>{course.time}</span>
							</div>
							<div class="planning__course">
								<strong>{course.title}</strong>
								<em>{course.detail}</em>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<CalloutBox text>
		<p class="note">Association Yoga Tadasana • Cours Adultes & Power-Up Enfants</p>
	</CalloutBox>
</Section>

<Section title="Tarifs & Adhésions 2026-2027">
	<div class="tarifs">
		{#each formules as formule (formule.id)}
			<div class="tarifs__block">
				<h3>Formule : {formule.title}</h3>
				<table class="tarifs__table">
					<thead>
						<tr>
							<th>Public / Formule</th>
							<th>Tarif Annuel</th>
						</tr>
					</thead>
					<tbody>
						{#each formule.rows as row (row.id)}
							<tr class:famille={row.famille}>
								<td data-label="Public / Formule">
									<strong>{row.public}</strong>
									{#if row.famille}
										<span class="badge">-20 € inclus</span>
									{/if}
									<em>{row.formule}</em>
								</td>
								<td data-label="Tarif Annuel" class="tarif">{row.tarif}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/each}
	</div>

	<CalloutBox text>
		<p class="note">Documents d'inscriptions disponibles sur HelloAsso</p>
		<p class="note">Association Yoga Tadasana • Règlement possible en plusieurs fois</p>
	</CalloutBox>
</Section>

<style lang="scss">
	.planning {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;

		&__day {
			background: $bg-alt;
			border-radius: $radius;
			overflow: hidden;
			box-shadow: 0 8px 24px rgba(58, 46, 34, 0.1);
		}

		&__header {
			background: $active;
			color: white;
			padding: 1.2rem 1.5rem;

			h3 {
				margin: 0;
				font-size: 1.2rem;
				letter-spacing: 0.03em;
				color: white;
				text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
			}

			p {
				margin: 0.3rem 0 0;
				font-weight: normal;
				color: white;
				opacity: 0.92;
				font-size: 0.95rem;
				text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
			}
		}

		&__rows {
			display: flex;
			flex-direction: column;
		}

		&__row {
			display: flex;
			align-items: center;
			gap: 1.2rem;
			padding: 1rem 1.5rem;
			border-left: 0.4rem solid $primary;
			border-bottom: 1px solid rgba(58, 46, 34, 0.08);

			&:last-child {
				border-bottom: none;
			}
		}

		&__day--mardi &__row {
			border-left-color: $accent;
		}

		&__day--jeudi &__row {
			border-left-color: $green;
		}

		&__time {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			min-width: 8.5rem;
			font-weight: bold;
			color: $active;

			:global(svg) {
				font-size: 1.1rem;
				flex-shrink: 0;
			}
		}

		&__course {
			display: flex;
			flex-direction: column;

			strong {
				color: $text;
				font-size: 1.05rem;
			}

			em {
				font-style: italic;
				color: $accent;
				font-size: 0.9rem;
			}
		}
	}

	.note {
		margin: 0;
		font-style: italic;
		color: $text;
	}

	.tarifs {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		&__block {
			h3 {
				color: $accent;
				font-size: 1.3rem;
				margin-bottom: 1rem;
			}
		}

		&__table {
			width: 100%;
			border-collapse: collapse;
			background: $bg-alt;
			border-radius: $radius;
			overflow: hidden;
			box-shadow: 0 8px 24px rgba(58, 46, 34, 0.1);

			thead {
				background: $active;

				th {
					color: white;
					text-align: left;
					padding: 1rem 1.5rem;
					font-weight: bold;
					text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
				}

				th:last-child {
					width: 10rem;
					text-align: right;
				}
			}

			tbody tr {
				border-bottom: 1px solid rgba(58, 46, 34, 0.08);

				&:last-child {
					border-bottom: none;
				}

				&.famille {
					background: rgba(125, 140, 92, 0.12);
					border-left: 0.4rem solid $green;
				}
			}

			td {
				padding: 1rem 1.5rem;
				vertical-align: top;

				strong {
					display: block;
					color: $text;
					font-size: 1.05rem;
				}

				em {
					display: block;
					font-style: italic;
					color: $accent;
					font-size: 0.9rem;
					margin-top: 0.2rem;
				}

				&.tarif {
					text-align: right;
					font-weight: bold;
					font-size: 1.2rem;
					color: $primary;
					white-space: nowrap;
				}
			}

			.badge {
				display: inline-block;
				margin-left: 0.6rem;
				padding: 0.15rem 0.6rem;
				border-radius: $radius;
				background: $green-deep;
				color: white;
				font-size: 0.75rem;
				font-weight: bold;
				vertical-align: middle;
			}
		}
	}

	@media (max-width: 768px) {
		.planning {
			grid-template-columns: 1fr;
		}

		.tarifs__table {
			thead {
				display: none;
			}

			tr {
				display: flex;
				flex-direction: column;
				padding: 0.5rem 0;
			}

			td {
				padding: 0.5rem 1.5rem;

				&.tarif {
					text-align: left;
				}

				&::before {
					content: attr(data-label);
					display: block;
					font-size: 0.75rem;
					text-transform: uppercase;
					letter-spacing: 0.05em;
					color: $accent;
					font-weight: bold;
					margin-bottom: 0.2rem;
				}
			}
		}
	}
</style>
