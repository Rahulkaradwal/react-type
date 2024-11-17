/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "homepage-background": "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
};
