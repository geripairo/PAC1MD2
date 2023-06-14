/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,ejs}",
      "./build/**/*.{js,jsx,ts,tsx,pug,html,ejs}",
      "./public/**/*.{js,jsx,ts,tsx,pug,html,ejs}",
      "./views/**/*.{js,jsx,ts,tsx,pug,html,ejs}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('./public/img/landing.png')",
        
      }
    },
  },
  plugins: [],
}

