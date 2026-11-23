import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          secondary: "#33435A",
          muted: "#4A5A70",
        },
        accent: {
          DEFAULT: "#0A58E8",
          hover: "#0848C0",
        },
        section: "#EEF4FF",
        borderline: "#D5DEEC",
        tag: {
          doneBg: "#E7F6EC",
          doneText: "#0E5E2D",
          progressBg: "#FFF1E0",
          progressText: "#8A4B00",
          experienceBg: "#EEF4FF",
          experienceText: "#0A3FA8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
