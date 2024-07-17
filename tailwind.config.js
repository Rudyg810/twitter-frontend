/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hm-sans': ['"HM Sans Regular"', 'sans-serif'],
      },
      textColor: {
        'hm-sans': '#2d3748', // Equivalent to gray-800 in Tailwind
      },
    },
  },
  plugins: [],
}

