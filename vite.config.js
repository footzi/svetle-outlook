import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    svelte({
      preprocess: sveltePreprocess()
      /* plugin options */
    })
  ],
  resolve: {
    alias: {
      components: path.resolve('/src/components'),
      constants: path.resolve('/src/constants'),
      interfaces: path.resolve('/src/interfaces'),
      enums: path.resolve('/src/enums'),
      store: path.resolve('/src/store')
    }
  }
});
