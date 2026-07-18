import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // From ClaimMate.ai landing page
        brand: {
          blue: "#1d6fe0",     // headings, links, accents
          navy: "#111827",     // dark buttons, primary headline text
          green: "#22c55e",    // hero diagonal accent
          gold: "#f5b400",     // "Save 25%" pricing badge
        },
        surface: {
          light: "#f5f7fa",    // section backgrounds
        },
      },
      fontFamily: {
        // Confirm exact family from Figma (Inter/Poppins-style rounded sans visible in screenshots)
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
