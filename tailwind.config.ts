import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.28)",
        dock: "0 18px 60px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
