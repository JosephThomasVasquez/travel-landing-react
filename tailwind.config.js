module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sky-blue": "#c8daf0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
