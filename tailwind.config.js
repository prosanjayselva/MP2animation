/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#09090b",
          card: "#18181b",
          red: "#c0001a",
          yellow: "#f5c518"
        }
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        ui: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(192,0,26,0.28)"
      }
    }
  },
  plugins: []
};
