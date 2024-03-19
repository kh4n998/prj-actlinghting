/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        "primary": "#0869bd",
        "body": "#101323"
      }
    },
    fontSize: {
      xs: ["0.75rem", "1.125rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.625rem"],
      xl: ["1.25rem", "1.875rem"],
      '2xl': ["1.5rem", "2rem"],
      '3xl': ["2rem", "2.5rem"],
      '4xl': ["2.5rem", "3rem"],
      '5xl': ["3rem", "3.5rem"],
      '6xl': ["3.5rem", "4rem"],
    }
  },
  plugins: [],
}

