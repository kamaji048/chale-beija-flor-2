import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEF7FF",
        orchid: "#7C3AED",
        plum: "#A78BFA",
        wood: "#8B5E3C",
        forest: "#166534",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
