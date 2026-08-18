import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F0E8",
        paper: "#FAF8F4",
        midnight: "#12180F",
        charcoal: "#1C2329",
        stone: "#C4B8A5",
        sand: "#E8DCC8",
        aqua: "#5C6B4A",
        ink: "#2A3238",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        index: "0.18em",
      },
      maxWidth: {
        site: "1440px",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
