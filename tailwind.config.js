/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["GeneralSans", "sans-serif"], // Add your custom font family
      },
      colors: {
        color: {
          primary: "#DC4A2D",
          grey2: "#B0B0B0",
          grey1: "#E7E7E7",
          grey3: "#888888",
        },
      },
    },
  },
  plugins: [],
};
