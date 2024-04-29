import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-blue': '#08273E',
        black: '#000000',
        white: '#ffffff',
        gray: '#ccc',
        'light-gray': '#eee',
        'dark-gray': '#333',
        red: '#f00',
        green: '#0f0',
        blue: '#00f',
        yellow: '#ff0',
        cyan: '#0ff',
        magenta: '#f0f',
        orange: '#f90',
        purple: '#90f',
        teal: '#0f9',
        pink: '#f09',
      },
      spacing: {
        '32': '8rem',
        '36': '9rem',
      },
      minWidth: {
        '32': '8rem',
        '36': '9rem',
      }
    },
  },
  plugins: [],
}
export default config
