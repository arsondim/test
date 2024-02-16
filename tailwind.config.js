/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Gabarito", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        reLime: {  DEFAULT: '#BBFF00',  50: '#ECFFB8',  100: '#E7FFA3',  200: '#DCFF7A',  300: '#D1FF52',  400: '#C6FF29',  500: '#BBFF00',  600: '#92C700',  700: '#698F00',  800: '#405700',  900: '#161F00',  950: '#020300'},
        freshGreen: {  DEFAULT: '#2CB34A',  50: '#ACEBBA',  100: '#9CE7AC',  200: '#7BDF91',  300: '#5AD676',  400: '#39CE5A',  500: '#2CB34A',  600: '#218637',  700: '#165925',  800: '#0B2C12',  900: '#000000',  950: '#000000'},
        respectGreen: { DEFAULT: "#6BC800", 50: "#C4FF81", 100: "#BBFF6C", 200: "#A8FF43", 300: "#95FF1B", 400: "#81F100", 500: "#6BC800", 600: "#4D9000", 700: "#2F5800", 800: "#112000", 900: "#000000", 950: "#000000" },
      },
    },
  },

};
