/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        screens: {
          "3xl": "1920px", // custom breakpoint for large desktops
        },
      },
    },
  },
  plugins: [],
};
