import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  devOptions: {
    // Desactiva la funcionalidad de Live Reload
    hmr: false,
  },
});