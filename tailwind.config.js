/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: "var(--text)",
      background: "var(--background)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
    },
    extend: {},
  },
  plugins: [],
};
