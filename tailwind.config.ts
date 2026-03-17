import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-neue-montreal)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "body-background": "#0D0D0D",
        "primary-text": "#E6E6E6",
      },
    },
  },
  plugins: [],
};
export default config;
