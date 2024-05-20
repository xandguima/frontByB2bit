/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        InputColor: '#F1F1F1',
        BlueB2: '#02274F',
        TextColor:'#262626'
       
      },
      screens: {
        'xs': '450px',
        // => @media (min-width: 400px) 
        '2xs': '500px',
        // => @media (min-width: 500px) 
        'sm': '640px',
        // => @media (min-width: 640px) 
        'md': '768px',
        // => @media (min-width: 768px) 
        'lg': '1024px',
        // => @media (min-width: 1024px) 
        'xl': '1280px',
        // => @media (min-width: 1280px) 
        '2xl': '1536px',
        // => @media (min-width: 1536px) 
        
      }
    },
    
  },
  plugins: [],
}

