/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        pinkButton:"#f84071",
        softGray:"rgb(245, 245, 245)"
      },
      animation:{
        'ping-one-time':'ping 1s linear'
      }
    }
  },
  plugins: [],
  darkMode:"class"
}

