/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        "orchid": {
          50: "#fcf4f5",
          100: "#f9eaea",
          200: "#f4d7da",
          300: "#eab7bb",
          400: "#e29ca3",
          500: "#ce6572",
          600: "#b8465a",
          700: "#9a364b",
          800: "#813042",
          900: "#6f2c3d",
        },
      },
    },
  },
  plugins: [],
};
