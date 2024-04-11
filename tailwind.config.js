/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#06B6D4',
        'secondary': '#034C59',
        'accent': '#FFD700',
        'neutral-dark': '#283D3B',
        'neutral-light': '#F0F4F8',
        'custom-light-turquoise': '#5BD1E5', 
      },
      fontFamily: {
        regular: ['var(--regular-font)'],
      }
    },
  },
  plugins: [],
}

