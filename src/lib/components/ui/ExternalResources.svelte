<script lang="ts">
	import { browser } from '$app/environment';
	import { cookieConsent } from '$lib/stores/cookies';
	import { onMount } from 'svelte';

	let hasLoadedResources = false;

	onMount(() => {
		const unsubscribe = cookieConsent.subscribe((consent) => {
			if (browser && consent.hasConsented) {
				loadExternalResources(consent);
			}
		});

		return unsubscribe;
	});

	const loadExternalResources = (consent: { hasConsented: boolean; external: boolean }) => {
		if (hasLoadedResources) return;

		// Load external resources if user consented
		if (consent.external) {
			// Load Google Fonts
			const fontPreconnect1 = document.createElement('link');
			fontPreconnect1.rel = 'preconnect';
			fontPreconnect1.href = 'https://fonts.googleapis.com';
			fontPreconnect1.crossOrigin = 'anonymous';
			document.head.appendChild(fontPreconnect1);

			const fontPreconnect2 = document.createElement('link');
			fontPreconnect2.rel = 'preconnect';
			fontPreconnect2.href = 'https://fonts.gstatic.com';
			fontPreconnect2.crossOrigin = 'anonymous';
			document.head.appendChild(fontPreconnect2);

			const fontLink = document.createElement('link');
			fontLink.href =
				'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap';
			fontLink.rel = 'stylesheet';
			document.head.appendChild(fontLink);

			// Load AOS CSS
			const aosLink = document.createElement('link');
			aosLink.href = 'https://unpkg.com/aos@next/dist/aos.css';
			aosLink.rel = 'stylesheet';
			document.head.appendChild(aosLink);

			hasLoadedResources = true;
		} else {
			// Use fallback fonts
			const fallbackStyle = document.createElement('style');
			fallbackStyle.textContent = `
				* {
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
				}
			`;
			document.head.appendChild(fallbackStyle);
		}
	};
</script>

<!-- This component doesn't render anything visible -->
