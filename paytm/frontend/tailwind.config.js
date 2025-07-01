/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Wallet': "url('../assets/images/Wallet.jpg')",
        
      }
    },
  },
  plugins: [],
}

