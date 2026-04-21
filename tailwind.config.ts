import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        void: "#020202",
        obsidian: "#080808",
        "obsidian-2": "#0c0c0d",
        chrome: "#e8ecef",
        cyan: {
          DEFAULT: "#00F0FF",
          dim: "#00a8b5",
          deep: "#005864",
        },
        status: {
          ok: "#00dc78",
          warn: "#ffb932",
          threat: "#ff3355",
        },
        background: "#020202",
        foreground: "#e8ecef",
        muted: "#8a9bb0",
        border: "rgba(255,255,255,0.06)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      backdropBlur: {
        "20": "20px",
      },
      animation: {
        "scan-y": "scan-y 4s linear infinite",
        "scan-x": "scan-x 6s linear infinite",
        "border-beam": "border-beam 6s linear infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        "grid-fade": "grid-fade 8s ease-in-out infinite",
        "ticker": "ticker 40s linear infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
      },
      keyframes: {
        "scan-y": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "scan-x": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "border-beam": {
          "0%": { "--beam-pos": "0%" } as any,
          "100%": { "--beam-pos": "100%" } as any,
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.55" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
