import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';

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
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      interfaces: path.resolve(__dirname, './src/interfaces'),
      enums: path.resolve(__dirname, './src/enums'),
      store: path.resolve(__dirname, './src/store'),
      api: path.resolve(__dirname, './src/api')
    }
  }
});
