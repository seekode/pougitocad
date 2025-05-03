import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: `@use 'src/lib/scss/variables.scss' as *; @use 'src/lib/scss/main.scss' as *;`
		},
		typescript: true
	}),
	kit: { adapter: adapter() }
};

export default config;
