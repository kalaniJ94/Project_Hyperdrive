/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./public/**/*.{html,js,css}",
  "./views/layouts/*.{html,js,css,handlebars }",
  "./views/**/*.{html, handlebars}",
  "./src/**/*.{html,js,css}",
  "./node_modules/tw-elements/dist/js/**/*.js",
],
darkMode: "class",
  theme: {
    colors: {
      matrixGreen: '#00d200'
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

