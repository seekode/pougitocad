<script>
	import Footer from '$lib/components/layouts/Footer.svelte';
	import ContactLieux from '$lib/components/routes/home/ContactLieux.svelte';
	import Enseignant from '$lib/components/routes/home/Enseignant.svelte';
	import Faq from '$lib/components/routes/home/Faq.svelte';
	import FormationsStages from '$lib/components/routes/home/FormationsStages.svelte';
	import Galerie from '$lib/components/routes/home/Galerie.svelte';
	import Intro from '$lib/components/routes/home/Intro.svelte';
	import PlanningTarifs from '$lib/components/routes/home/PlanningTarifs.svelte';
</script>

<div>
	<div id="accueil" class="anchor"><Intro /></div>
	<div id="planning-tarifs" class="anchor anchor--alt"><PlanningTarifs /></div>
	<div id="formations-stages" class="anchor"><FormationsStages /></div>
	<div id="enseignant" class="anchor anchor--alt"><Enseignant /></div>
	<div id="contact" class="anchor"><ContactLieux /></div>
	<div id="galerie" class="anchor anchor--alt"><Galerie /></div>
	<div id="faq" class="anchor"><Faq /></div>
</div>
<Footer />

<style lang="scss">
	div {
		width: 100%;
		position: relative;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.anchor {
		scroll-margin-top: 6rem;

		&--alt {
			background: $bg-alt;
		}
	}
</style>
