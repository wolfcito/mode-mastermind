/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './utils/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  darkTheme: 'scaffoldEthDark',
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: '#000000',
          'primary-content': '#F5F5F5',
          secondary: '#333333',
          'secondary-content': '#F5F5F5',
          accent: '#C2C2C2',
          'accent-content': '#088484',
          neutral: '#222222',
          'neutral-content': '#9333EA',
          'base-100': '#222222',
          'base-200': '#000000',
          'base-300': '#111111',
          'base-content': '#F5F5F5',
          info: '#C8F5FF',
          success: '#65D072',
          warning: '#F4BF4F',
          error: '#EC6A5E',

          '--rounded-btn': '9999rem',

          '.tooltip': {
            '--tooltip-tail': '6px',
            '--tooltip-color': 'hsl(var(--s))',
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: '#000000',
          'primary-content': '#F5F5F5',
          secondary: '#333333',
          'secondary-content': '#F5F5F5',
          accent: '#C2C2C2',
          'accent-content': '#088484',
          neutral: '#222222',
          'neutral-content': '#9333EA',
          'base-100': '#222222',
          'base-200': '#000000',
          'base-300': '#111111',
          'base-content': '#F5F5F5',
          info: '#C8F5FF',
          success: '#65D072',
          warning: '#F4BF4F',
          error: '#EC6A5E',

          '--rounded-btn': '9999rem',

          '.tooltip': {
            '--tooltip-tail': '6px',
            '--tooltip-color': 'hsl(var(--s))',
          },
        },
      },
      {
        exampleUi: {
          primary: '#000000',
          'primary-content': '#ffffff',
          secondary: '#FF6644',
          'secondary-content': '#212638',
          accent: '#93BBFB',
          'accent-content': '#212638',
          neutral: '#f3f3f3',
          'neutral-content': '#212638',
          'base-100': '#ffffff',
          'base-200': '#f1f1f1',
          'base-300': '#d0d0d0',
          'base-content': '#212638',
          info: '#93BBFB',
          success: '#34EEB6',
          warning: '#FFCF72',
          error: '#FF8863',

          '--rounded-btn': '9999rem',

          '.tooltip': {
            '--tooltip-tail': '6px',
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-space-grotesk, animate-grow)
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        center: '0 0 12px -2px rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        grow: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.1, 1.1)' },
        },
      },
      animation: {
        grow: 'grow 5s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        zoom: 'zoom 1s ease infinite',
      },
    },
  },
}
