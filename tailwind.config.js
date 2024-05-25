/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
        "infinite-scroll-reverse": "infinite-scroll-reverse 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-20%)" }, // Fixed typo here
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-20%)" },
          to: { transform: "translateX(0)" }, // Fixed typo here
        },
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md-min': {'min': '1028px'},
      'md-max': {'max': '1028px'},
      // => @media (max-width: 767px) { ... }
      'sm-max': {'max': '639px'},
      'sm-min': {'min' : '639px'}
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}