import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "var(--font-sans)"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"]
      },
      colors: {
        "serenity-blue": "#4BA3FF",
        "sunrise-yellow": "#FFD166",
        "faith-purple": "#9C5FFF",
        "joy-pink": "#FF7AB3",
        "hope-green": "#5CE1A3",
        "twilight": "#120E1F"
      },
      boxShadow: {
        spotlight: "0 30px 80px rgba(75, 163, 255, 0.35)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, rgba(155, 99, 255, 0.35), transparent 65%)",
        "gradient-sunrise": "linear-gradient(135deg, #FF7AB3 0%, #FFD166 45%, #5CE1A3 100%)"
      }
    }
  },
  plugins: []
};

export default config;
