<script lang="ts">
	import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import InfoIcon from '~icons/uil/info-circle';
	import LocationIcon from '~icons/uil/map-marker';
	import MailIcon from '~icons/uil/envelope';
	import PhoneIcon from '~icons/uil/phone';
</script>

<Section title="Contact & Informations">
	<p class="intro">
		Une question sur nos cours de Yoga, les sessions Power-Up ou les modalités d'inscription ?
		L'équipe de l'association <strong>Tadasana</strong> est à votre écoute pour vous guider.
	</p>

	<div class="contact-cards">
		<a class="contact-card" href="tel:+33788756834">
			<div class="contact-card__icon">
				<PhoneIcon />
			</div>
			<h3>Par téléphone</h3>
			<p class="contact-card__value">07 88 75 68 34</p>
			<p class="contact-card__text">
				Du lundi au vendredi. N'hésitez pas à nous laisser un message avec vos coordonnées pour être
				rappelé.
			</p>
		</a>

		<a class="contact-card" href="mailto:pougi.yogi@gmail.com">
			<div class="contact-card__icon">
				<MailIcon />
			</div>
			<h3>Par e-mail</h3>
			<p class="contact-card__value">pougi.yogi@gmail.com</p>
			<p class="contact-card__text">
				Pour toute demande d'information générale, questions administratives ou envoi de
				justificatifs.
			</p>
		</a>
	</div>

	<div class="hq">
		<div class="hq__icon">
			<LocationIcon />
		</div>
		<div class="hq__content">
			<h3>Siège social</h3>
			<p><strong>Association TADASANA</strong></p>
			<p>1 ter rue du Crotois</p>
			<p>60157 Élincourt-Sainte-Marguerite</p>
		</div>
	</div>

	<CalloutBox>
		<div class="info-callout">
			<InfoIcon />
			<p>
				Inscriptions en ligne et téléchargement des documents administratifs disponibles directement
				sur <strong>HelloAsso</strong>.
			</p>
		</div>
	</CalloutBox>
</Section>

<Section title="Où nous retrouver ?">
	<div class="places">
		<div class="place-card">
			<span class="place-card__number">1</span>
			<h3>Salle des Fêtes d'Élincourt</h3>
			<p class="place-card__address">
				1 ter rue du Crotois<br />
				60157 Élincourt-Sainte-Marguerite
			</p>
			<p class="place-card__description">
				Un cadre authentique et chaleureux au cœur de la commune, parfaitement aménagé pour
				accueillir nos séances collectives dans une ambiance sereine et conviviale.
			</p>
		</div>

		<div class="place-card">
			<span class="place-card__number">2</span>
			<h3>Gymnase de Lassigny</h3>
			<p class="place-card__address">
				Complexe Sportif du Pays des Sources Maurice Fournier<br />
				44 Rue de la Misacard, 60310 Lassigny
			</p>
			<p class="place-card__description">
				Un espace moderne, spacieux et parfaitement équipé, idéal pour nos séances dynamiques, les
				cours enfants/ados et les pratiques nécessitant de grands volumes.
			</p>
		</div>
	</div>
</Section>

<style lang="scss">
	.intro {
		max-width: 750px;
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 2rem;

		:global(strong) {
			color: $active;
		}
	}

	.contact-cards {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.contact-card {
		display: block;
		background: white;
		border-radius: $radius;
		padding: 2rem;
		box-shadow: 0 4px 16px rgba(58, 46, 34, 0.1);
		border: 1px solid $bg-alt;
		text-decoration: none;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 10px 24px rgba(58, 46, 34, 0.15);
		}

		&__icon {
			width: 3.2rem;
			height: 3.2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background: $bg-alt;
			color: $accent;
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}

		h3 {
			color: $primary;
			font-size: 1rem;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			font-weight: 700;
			margin-bottom: 0.5rem;
		}

		&__value {
			color: $active;
			font-size: 1.3rem;
			font-weight: bold;
			margin-bottom: 0.75rem;
		}

		&__text {
			color: $text;
			line-height: 1.6;
			font-size: 0.95rem;
		}
	}

	.hq {
		width: 100%;
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		background: $bg-alt;
		border-radius: $radius;
		padding: 1.75rem 2rem;
		margin-bottom: 1.5rem;

		&__icon {
			flex-shrink: 0;
			width: 3rem;
			height: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background: $primary;
			color: white;
			font-size: 1.4rem;
		}

		&__content {
			h3 {
				color: $primary;
				font-size: 1.1rem;
				font-weight: 700;
				margin-bottom: 0.5rem;
			}

			p {
				line-height: 1.5;
				color: $text;
			}
		}
	}

	.info-callout {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		:global(svg) {
			flex-shrink: 0;
			color: $accent;
			font-size: 1.4rem;
		}

		p {
			line-height: 1.5;
			color: $text;
		}

		:global(strong) {
			color: $active;
		}
	}

	.places {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.place-card {
		position: relative;
		background: white;
		border-radius: $radius;
		padding: 2.5rem 2rem 2rem;
		box-shadow: 0 4px 16px rgba(58, 46, 34, 0.1);
		border: 1px solid $bg-alt;
		border-top: 4px solid $green;

		&__number {
			position: absolute;
			top: -1.1rem;
			left: 2rem;
			width: 2.4rem;
			height: 2.4rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background: $green-deep;
			color: white;
			font-weight: bold;
			font-size: 1.1rem;
			box-shadow: 0 4px 10px rgba(58, 46, 34, 0.2);
		}

		h3 {
			color: $primary;
			font-size: 1.25rem;
			font-weight: 700;
			margin-bottom: 0.75rem;
		}

		&__address {
			font-weight: 600;
			color: $active;
			margin-bottom: 1rem;
			line-height: 1.5;
		}

		&__description {
			font-style: italic;
			color: $text;
			line-height: 1.6;
		}
	}

	@media (max-width: 768px) {
		.contact-cards,
		.places {
			grid-template-columns: 1fr;
		}

		.hq {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
