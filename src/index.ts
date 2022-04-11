import 'focus-visible/dist/focus-visible.min.js';

import App from './App/index.svelte';
import './styles/main.scss';

window.addEventListener('load', () => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js');
  }
});

const app = new App({
  target: document.getElementById('app') as HTMLElement
});

export default app;
