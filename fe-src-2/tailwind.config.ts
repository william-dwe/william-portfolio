import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        page: "#09090b",
        panel: "#050507",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        orbDrift1: {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "50%": { transform: "translate(10%, -8%)" },
        },
        orbDrift2: {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "50%": { transform: "translate(-9%, 6%)" },
        },
        orbDrift3: {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "50%": { transform: "translate(7%, 10%)" },
        },
        orbDrift4: {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "50%": { transform: "translate(-6%, -9%)" },
        },
        orbBreathe: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.75" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "orb-drift-1": "orbDrift1 24s ease-in-out infinite, orbBreathe 6s ease-in-out infinite",
        "orb-drift-2": "orbDrift2 30s ease-in-out infinite, orbBreathe 6s ease-in-out infinite",
        "orb-drift-3": "orbDrift3 20s ease-in-out infinite, orbBreathe 6s ease-in-out infinite",
        "orb-drift-4": "orbDrift4 27s ease-in-out infinite, orbBreathe 6s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
