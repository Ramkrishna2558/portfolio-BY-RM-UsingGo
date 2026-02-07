import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://ramkrishna.dev',
    output: 'static',
    build: {
        assets: 'assets'
    }
});
