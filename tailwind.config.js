/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2347",
          dark: "#081A33",
          light: "#133566",
        },
        brandBlue: {
          DEFAULT: "#1A4A7A",
          dark: "#163E66",
          light: "#24619e",
          soft: "#eef3fb",
        },
        gold: {
          DEFAULT: "#E08A4C",
          hover: "#c8753a",
        },
        surface: {
          off: "#f4f7fb",
          line: "#dce5f0",
          muted: "#4a5b73",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
