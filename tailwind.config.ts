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
        "primary": "#87909D",
        "secondary": "#132238",
        "darkMode": "#161513",
        "lightMode": "#F0F1F3",
        "purple": "#B16DEA",
        "shadow1": "#B16DEA66",
        "shadow2":""

      },
      backgroundImage: {
        "lavender": "linear-gradient(to right, #b16dea, #d261d4, #e958bb, #f854a2, #ff5688, #ff5e79, #ff676b, #ff715f, #ff7c59, #ff8754, #ff9351, #ff9e4e)",

        "shadow2":"linear-gradient(to right, #B16DEA33, #FF626833, #FF9E4E33)"
      },

    },
  },
  plugins: [],
};
export default config;
