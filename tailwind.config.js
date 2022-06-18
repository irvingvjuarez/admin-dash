/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#0F1022',
      'primary-clear': '#121111',
      'primary-clear-super': '#484A69',
      'primary-strong': '#030303',
      'primary-contrast': '#0E0EBE',
      'contrast': '#0B79D8',
      'contrast-clear': '#38A3FF',
      'contrast-strong': '#2C4459',
      'contrast2': '#D241B6',
      'contrast2-clear': '#F278DB',
      'contrast2-strong': '#914082',
      'contrast3': '#5143CA',
      'contrast3-clear': '#786AF0',
      'contrast3-strong': '#37316D',
      'contrast4': '#DF8845',
      'contrast4-clear': '#F2AA73',
      'contrast4-strong': '#B1682F',
      'contrast5': '#009541',
      'contrast5-clear': '#05FF72',
      'contrast5-strong': '#2B6A47',
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
