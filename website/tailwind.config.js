const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			xs: ["0.64rem", "1.3"],
			sm: ["0.8rem", "1.3"],
			base: ["1rem", "1.75"],
			lg: ["1.25rem", "1.3"],
			xl: ["1.563rem", "1.3"],
			"2xl": ["1.953rem", "1.3"],
			"3xl": ["2.441rem", "1.3"],
			"4xl": ["3.052rem", "1.3"],
			"5xl": ["3.815rem", "1.3"],
		},
		fontWeight: {
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		colors: {
			grey: {
				50: "#F8FAFC",
				100: "#F1F5F9",
				200: "#E2E8F0",
				300: "#CBD5E1",
				400: "#94A3B8",
				500: "#64748B",
				600: "#475569",
				700: "#334155",
				800: "#1E293B",
				900: "#0F172A",
			},
			primary: {
				50: "#EEF2FF",
				100: "#E0E7FF",
				200: "#C7D2FE",
				300: "#A5B4FC",
				400: "#818CF8",
				500: "#6366F1",
				600: "#4F46E5",
				700: "#4338CA",
				800: "#3730A3",
				900: "#312E81",
			},
			accent: {
				50: "#FFFBEB",
				100: "#FEF3C7",
				200: "#FDE68A",
				300: "#FCD34D",
				400: "#FBBF24",
				500: "#F59E0B",
				600: "#D97706",
				700: "#B45309",
				800: "#92400E",
				900: "#78350F",
			},
			success: {
				50: "#ECFDF5",
				100: "#D1FAE5",
				200: "#A7F3D0",
				300: "#6EE7B7",
				400: "#34D399",
				500: "#10B981",
				600: "#059669",
				700: "#047857",
				800: "#065F46",
				900: "#064E3B",
			},
			error: {
				50: "#FEF2F2",
				100: "#FEE2E2",
				200: "#FECACA",
				300: "#FCA5A5",
				400: "#F87171",
				500: "#EF4444",
				600: "#DC2626",
				700: "#B91C1C",
				800: "#991B1B",
				900: "#7F1D1D",
			},
			uni: {
				DEFAULT: "#89000C",
			},
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			chrome: {
				DEFAULT: "#4285F4",
				alt: "#3367D6",
			},
			firefox: {
				DEFAULT: "#FF7139",
				alt: "#E25821",
			},
		},
		extend: {
			width: {
				icon: "20px",
			},
			height: {
				icon: "20px",
			},
		},
	},
	plugins: [],
};
