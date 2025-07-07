import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export interface CookieConsent {
	necessary: boolean;
	functional: boolean;
	external: boolean;
	hasConsented: boolean;
	timestamp: number;
}

const defaultConsent: CookieConsent = {
	necessary: true, // Always true - required cookies
	functional: false,
	external: false,
	hasConsented: false,
	timestamp: 0
};

// Create the store
export const cookieConsent = writable<CookieConsent>(defaultConsent);

// Cookie management functions
export const setCookie = (name: string, value: string, days: number = 365) => {
	if (!browser) return;

	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
};

export const getCookie = (name: string): string | null => {
	if (!browser) return null;

	const nameEQ = name + '=';
	const ca = document.cookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

export const deleteCookie = (name: string) => {
	if (!browser) return;
	document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Load consent from cookie
export const loadConsent = (): CookieConsent => {
	if (!browser) return defaultConsent;

	const consentCookie = getCookie('cookie_consent');
	if (consentCookie) {
		try {
			const parsed = JSON.parse(consentCookie);
			// Check if consent is still valid (12 months)
			const now = Date.now();
			const twelveMonths = 12 * 30 * 24 * 60 * 60 * 1000;

			if (parsed.timestamp && now - parsed.timestamp < twelveMonths) {
				return { ...defaultConsent, ...parsed };
			}
		} catch (e) {
			console.error('Error parsing cookie consent:', e);
		}
	}

	return defaultConsent;
};

// Save consent to cookie
export const saveConsent = (consent: CookieConsent) => {
	if (!browser) return;

	const consentWithTimestamp = {
		...consent,
		timestamp: Date.now(),
		hasConsented: true
	};

	setCookie('cookie_consent', JSON.stringify(consentWithTimestamp), 365);
	cookieConsent.set(consentWithTimestamp);
};

// Accept all cookies
export const acceptAllCookies = () => {
	const consent: CookieConsent = {
		necessary: true,
		functional: true,
		external: true,
		hasConsented: true,
		timestamp: Date.now()
	};

	saveConsent(consent);
};

// Accept only necessary cookies
export const acceptNecessaryCookies = () => {
	const consent: CookieConsent = {
		necessary: true,
		functional: false,
		external: false,
		hasConsented: true,
		timestamp: Date.now()
	};

	saveConsent(consent);
};

// Initialize consent on app load
export const initializeConsent = () => {
	if (!browser) return;

	const savedConsent = loadConsent();
	cookieConsent.set(savedConsent);
};

// Check if we should show banner
export const shouldShowBanner = (consent: CookieConsent): boolean => {
	return !consent.hasConsented;
};

// Manage external resources based on consent
export const manageExternalResources = (consent: CookieConsent) => {
	if (!browser) return;

	// Remove external resources if not consented
	if (!consent.external) {
		// Remove Google Fonts
		const googleFonts = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
		googleFonts.forEach((link) => link.remove());

		// Remove external CSS
		const externalCSS = document.querySelectorAll('link[href*="unpkg.com"]');
		externalCSS.forEach((link) => link.remove());
	}
};
