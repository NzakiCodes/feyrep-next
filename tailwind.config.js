module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        'primary': '#42093f',
        'primary-200': '#690f65',
        'primary-600': '#e016d7',
        'secondary': '#c2e533',
        'secondary-200': '#c7ea32'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
