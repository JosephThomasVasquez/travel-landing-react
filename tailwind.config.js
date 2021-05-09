module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sky-blue": "#F5F9FD",
        "primary-orange": "#FF7424"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
