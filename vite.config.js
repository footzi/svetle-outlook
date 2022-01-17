import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
			/* plugin options */
		})
	],
	resolve: {
		alias: {
			'@components': path.resolve('/src/components'),
		},
	}
});
