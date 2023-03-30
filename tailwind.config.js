/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        ernie: ["adobe-handwriting-ernie", "sans-serif"],
      },
      colors: {
        orchid: {
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
      borderRadius: {
        "4xl": "90px",
      },
      width: {
        mdpic: "40%",
        xlpic: "30%",
        120: "120px",
      },
      screens: {
        xs: "380px",
      },
      backgroundImage: {
        paint: "url('../assets/paint.jpeg')",
      },
      minHeight: {
        "1/2": "50%",
        "2/3": "66.666666666%",
      },
      height: {
        "tile": "313px"
      }
    },
  },
  plugins: [],
};
