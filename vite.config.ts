import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

import react from "@vitejs/plugin-react";

export default defineConfig({
	server: {
		port: 3012
	},
	plugins: [
		react(),
		checker({
			typescript: true
		})
	]
});
