/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DMserif': ['"DM Serif Display"'],
        'Inter': ["Inter"]
      },
      colors: {
        darker: "#121212",
        dark: "#1a1a1a",
        cream: "#F5EFE6",
        purplydark: '#0F082C',
        purply: '#A972FF'
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      }
    },
  },
  plugins: [],
}