/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dblueDME':'hsl(209, 23%, 22%)',
        'vdblueDMB': 'hsl(207, 26%, 17%)',
        'vdblueLMT' : 'hsl(200, 15%, 8%)',
        'dgrayLMI' : 'hsl(0, 0%, 52%)',
        'vlgrayLMB' : 'hsl(0, 0%, 98%)',
        'whiteDMT&LME' : 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
