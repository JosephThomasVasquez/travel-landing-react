module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "sky-blue": "#F5F9FD",
        "primary-orange": "#FF7424",
        "primary-orange-50": "#ff975c",
        "primary-orange-100": "#ffece0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
