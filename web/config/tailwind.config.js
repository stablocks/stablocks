module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: { '2xs': ['.6rem', '.75rem'] },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
