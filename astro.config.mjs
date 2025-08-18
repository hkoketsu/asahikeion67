// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages deployment configuration
  site: 'https://hkoketsu.github.io',
  base: '/asahikeion67/',
  
  // Build configuration
  build: {
    // Ensure assets are handled correctly
    assets: 'assets'
  }
});
