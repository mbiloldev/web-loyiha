import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ".
        // Core palette — warm, nurturing, kitchen-inspired
        cream: {
          DEFAULT: "#FAF6EF",
          dark: "#F2EAD8",
        },
        saffron: {
          DEFAULT: "#E8A020",
          light: "#F2BC55",
          dark: "#C4841A",
        },
        terracotta: {
          DEFAULT: "#C4603A",
          light: "#D4795A",
          dark: "#A04828",
        },
        clay: {
          DEFAULT: "#B07850",
          light: "#C89068",
          dark: "#8A5C38",
        },
        charcoal: {
          DEFAULT: "#2C1F14",
          light: "#4A3525",
          muted: "#7A6258",
        },
        rose: {
          warm: "#E8C4B0",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        warm: "0 4px 24px rgba(44, 31, 20, 0.08)",
        "warm-lg": "0 8px 40px rgba(44, 31, 20, 0.12)",
        card: "0 2px 12px rgba(176, 120, 80, 0.15)",
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #FAF6EF 0%, #F2EAD8 50%, #E8C4B0 100%)",
        "saffron-gradient":
          "linear-gradient(135deg, #F2BC55 0%, #E8A020 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
