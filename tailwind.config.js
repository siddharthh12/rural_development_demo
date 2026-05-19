/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F8F5EF",
          surface: "#FFFDF8",
          primary: "#2F6B3B",
          secondary: "#4D8B57",
          saffron: "#D98E2F",
          teal: "#2C7A7B",
          dark: "#1F2937",
          muted: "#6B7280",
          border: "#E7E1D6",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
