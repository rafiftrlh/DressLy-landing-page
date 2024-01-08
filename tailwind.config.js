/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E6E6E6",
        button: "#E09370",
        "step-bg": "#F5CCAB",
        "step-num": "#FBE3C9",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Lora: ["Lora", "serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
