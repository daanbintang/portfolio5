/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        cyan: "#06b6d4",
        dark: "#18181b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
