import { writable } from 'svelte/store';

export const contact = writable(false);

export const openContact = () => contact.set(true);

export const closeContact = () => contact.set(false);
