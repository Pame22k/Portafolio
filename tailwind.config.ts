import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0A1B45", 900: "#07122E", 800: "#0A1B45", 700: "#102A66" },
        electric: { DEFAULT: "#1F6BFF", 600: "#1557DB" },
        sky: { DEFAULT: "#8EC9FF", 100: "#EAF4FF", 200: "#CFE6FF" },
        mist: "#F4F7FB",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10,27,69,0.18)",
        glow: "0 0 0 1px rgba(31,107,255,0.25), 0 20px 50px -20px rgba(31,107,255,0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
