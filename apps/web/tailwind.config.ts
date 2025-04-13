// import {
//   DancingScriptFont,
//   InterFont,
//   LibreBaskervilleFont,
//   NotoSansGeorgianFont,
// } from "@/config/fonts";

import { LoraFont, NotoSerifJPFont } from "@/config/fonts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        tablet: "768px",
        laptop: "1024px",
        desktop: "1367px",
      },
      colors: {},
      fontFamily: {
        // DancingScriptFont: [
        //   "var(--font-DancingScript)",
        //   ...DancingScriptFont.style.fontFamily,
        // ],
        // NotoSansGeorgianFont: [
        //   "var(--font-NotoSansGeorgian)",
        //   ...NotoSansGeorgianFont.style.fontFamily,
        // ],
        // LibreBaskervilleFont: [
        //   "var(--font-LibreBaskerville)",
        //   ...LibreBaskervilleFont.style.fontFamily,
        // ],
        // InterFont: ["var(--font-Inter)", ...InterFont.style.fontFamily],
        LoraFont: ["var(--font-Lora)", ...LoraFont.style.fontFamily],
        NotoSerifJPFont: [
          "var(--font-NotoSerifJP)",
          ...NotoSerifJPFont.style.fontFamily,
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-in-out",
        "accordion-up": "accordion-up 0.35s ease-in-out",
      },
      backgroundImage: {},
      boxShadow: {
        "card-home":
          "1px 0px 14px 3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        hover:
          "1px 0px 30px 5px rgb(0 0 0 / 0.1), 0 4px 30px -4px rgb(0 0 0 / 0.15)",
      },
      transitionDuration: {
        global: "300ms",
      },
    },
  },
  plugins: [],
};
