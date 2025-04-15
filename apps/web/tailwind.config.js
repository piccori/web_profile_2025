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
      colors: {
        primary: {
          midnightIndigo: "#0D0D0D",
          softBeige: "#F5DEB3",
        },
        accent: {
          warmYellow: "#FFD369",
          skyBlue: "#B3E5FC",
          leafGray: "#C1D3C9",
          mysticPurple: "#5C5470",
        },
        text: {
          body: "#EEEEEE",
          sub: "#B0B0B0",
          heading: "#1A1A1A",
        },
      },
      fontFamily: {
        hero: ["Syne", "sans-serif"],
        heading: ["Syne", "sans-serif"],
        paragraph: ["Quicksand", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.2" }],
        h2: ["40px", { lineHeight: "1.3" }],
        paragraph: ["18px", { lineHeight: "1.6" }],
        label: ["14px", { lineHeight: "1.4" }],
      },
      letterSpacing: {
        hero: "-0.5px",
      },
    },
  },
  plugins: [],
};
