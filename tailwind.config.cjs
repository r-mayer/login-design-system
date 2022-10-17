/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      'gray-100': '#DADCDE',
      'gray-100t': '#DADCDE24',
      'gray-500': '#C3C5C9',
      'gray-700': '#606162',
      'gray-800': '#2F2F30',
      'gray-900': '#141516',
      'black': '#111111',
      'cyan-900': '#1D2935',
      'cyan-800': '#233B59',
      'cyan-500': '#377CD8',
    },

    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 18,
      xl: 24,
    },

    fontWeight: {
      bold: 700,
      regular: 400,
      semibold: 500,
    },

    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}
