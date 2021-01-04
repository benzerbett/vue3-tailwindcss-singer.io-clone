module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  theme: {
    fontFamily: {
      'sans': ['fira-sans', 'sans-serif'],
      // 'display': ['Fira Sans', 'sans-serif'],
      // 'body': ['Fira Sans', 'sans-serif']
    }
  },
  plugins: [],
}
