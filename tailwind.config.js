/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,t,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],

  theme: {
    extend: {},
    colors: {
      primary: '#F1F2F5',
      secondary: '#F9FAFE',
      tertiary: '#9643AF',
      'primary-dark': '#1B2029',
      'secondary-dark': '#212836'
    },
    backgroundImage: {
      noise: 'url("/noise.png")'
    }

  },
  plugins: [require('flowbite/plugin')]
}
