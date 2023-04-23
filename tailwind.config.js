/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['PingFang SC', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      screens: {
        xs: '375px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
