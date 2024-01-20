/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        max: "hsl(6, 63%, 50%)",
        ax: "hsl(25, 98%, 40%)",
        greg: "skyblue",
        main: "hsl(223, 31%, 20%)",
        body:{
          primary:"hsl(222, 26%, 31%)",
          secondry:"lightgrey",
          last:"hsl(268, 75%, 9%)",
          show:"yellow"
          

        },
        last:{
          first:'hsl(281, 89%, 26%)',
          last:'grey',
          second:"hsl(268, 75%, 9%)"
        
        }
        
      },
      screens: {
        "phone":"200px" ,
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
        
      },
    },
    break:{
      
    }
  },
  plugins: [],
};
