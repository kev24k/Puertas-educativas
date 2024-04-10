/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#1d4ed8",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
			},
			screens: {
				midmd: "880px",
			},
			// Define la clase personalizada para la máscara de imagen
			maskImage: {
				maskImage: "linear-gradient(black 80%, transparent)",
			},
		},
	},
	plugins: [
		// Agrega el plugin para la clase personalizada
		function ({ addUtilities }) {
			const newUtilities = {
				".mask-image": {
					maskImage: "linear-gradient(black 80%, transparent)",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
