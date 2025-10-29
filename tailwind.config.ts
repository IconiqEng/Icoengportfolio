import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-primary': '#0B132B',
        'navy-secondary': '#1C2541',
        'teal-accent': '#00C9A7',
        'teal-hover': '#00917A',
        'gray-light': '#F0F0F0',
        'gray-medium': '#8892B0',
        'gray-dark': '#495670',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};

export default config;

