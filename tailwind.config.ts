import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#556070",
        "secondary": "#132238"
      },
      backgroundImage: {
        'lavender': 'linear-gradient(to right, #b16dea, #d261d4, #e958bb, #f854a2, #ff5688, #ff5e79, #ff676b, #ff715f, #ff7c59, #ff8754, #ff9351, #ff9e4e)',
      },
    },
  },
  plugins: [],
};
export default config;
