import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	darkTheme: "dark",
	content: [
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				input: "var(--input)",
				ring: "var(--ring)",
				placeholder: "var(--placeholder)",
				white: "var(--white)",
				border: {
					DEFAULT: "var(--border)",
					variant: "var(--border-variant)",
					"100": "var(--border-100)",
				},
				background: {
					"100": "var(--background-100)",
					"200": "var(--background-200)",
					DEFAULT: "var(--background)",
					skeleton: "var(--skeleton)",
				},
				foreground: {
					"100": "var(--foreground-100)",
					DEFAULT: "var(--foreground)",
					variant: "var(--foreground-variant)",
					"variant-100": "var(--foreground-variant-100)",
					"variant-200": "var(--foreground-variant-200)",
				},
				secondary: {
					"100": "var(--secondary-100)",
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				grey: {
					"100": "var(--grey-100)",
					DEFAULT: "var(--grey)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
				"kumbh-sans": ["Kumbh Sans", "Helvetica", "Arial", "sans-serif"],
			},
			fontSize: {
				sm: "0.8rem",
				base: ["clamp(0.9rem, 3vw, 0.95rem)", { lineHeight: "1.2" }],
				secondaryFont: ["clamp(1.8rem, 3vw, 32px) ", { lineHeight: "1.2" }],
				primaryFont: ["clamp(3rem, 5vw, 50px)", { lineHeight: "1.1" }],
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }: { addUtilities: any }) {
			const newUtilities = {
				".clip-circle ": {
					clipPath: "circle()",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
} satisfies Config;

export default config;
