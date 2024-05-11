/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      satoshi: ["Satoshi", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      colors: {
        'jagged-ice': {
          '50': '#f0fbfb',
          '100': '#daf3f2',
          '200': '#bae9e9',
          '300': '#88d7d8',
          '400': '#50bdc0',
          '500': '#34a1a6',
          '600': '#2e848c',
          '700': '#2b6a73',
          '800': '#2a5960',
          '900': '#274a52',
          '950': '#153137',
        },
      },
    },
  },
  plugins: [],
}
