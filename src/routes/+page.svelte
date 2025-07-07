<script>
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Choice from '$lib/components/routes/home/Choice.svelte';
	import Conformity from '$lib/components/routes/home/Conformity.svelte';
	import Faq from '$lib/components/routes/home/Faq.svelte';
	import Goals from '$lib/components/routes/home/Goals.svelte';
	import Handicap from '$lib/components/routes/home/Handicap.svelte';
	import Need from '$lib/components/routes/home/Need.svelte';
	import Program from '$lib/components/routes/home/Program.svelte';
	import Public from '$lib/components/routes/home/Public.svelte';
	import Resume from '$lib/components/routes/home/Resume.svelte';
	import Review from '$lib/components/routes/home/Review.svelte';
	import Software from '$lib/components/routes/home/Software.svelte';
	import StickyCard from '$lib/components/ui/StickyCard.svelte';
</script>

<div>
	<StickyCard />
	<Resume />
	<Goals />
	<Public />
	<Review />
	<Choice />
	<Program />
	<Need />
	<Handicap />
	<Software />
	<Conformity />
	<Faq />
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
</style>
