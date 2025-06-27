<script>
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Logiciels">
	<div>
		<img src="images/index/autocad.png" alt="AutoCAD" />
		<h3>AutoCAD LT</h3>
	</div>
</Section>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;

		> img {
			width: 5rem;
		}
	}
</style>
