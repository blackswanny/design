import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        sans: [
          "PP Editorial New",
          "Editorial New",
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "serif",
        ],
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
