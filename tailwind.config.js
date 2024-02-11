/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'darkBlue': 'rgba(1, 46, 71, 1)',
        'hero-text' : 'rgba(254, 251, 226, 1)',
        'hero-special-text1': 'rgba(254, 249, 202, 1)',
        'darkBrightBlue' : 'rgba(28, 66, 88, 1)',
        'hero-special-text': 'rgba(255, 247, 177, 1)',
    
        'text-darkBlue': 'rgba(1, 46, 71, 1)',
    
        'text-copyright' : 'rgba(164, 163, 162, 1)'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
    },
  
  },
  plugins: [require("tailwindcss-animate")],
}