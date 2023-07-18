const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          original: "#274C77",
          dark: "#1b3553",
          light: "#6882a0",
          superdark: "#101e30",
          superlight: "#a9b7c9",
        },
        secondary: {
          original: "#B8BC89",
          dark: "#818460",
          light: "#cdd0ac",
          superdark: "#4a4b37",
          superlight: "#e3e4d0",
        },
      },
    },
  },
  plugins: [],
}
