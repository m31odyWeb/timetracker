import { sveltekit } from '@sveltejs/kit/vite';
import path from 'node:path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 3000,
		open: true,
	},
	resolve: {
		alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
	},
};

export default config;
