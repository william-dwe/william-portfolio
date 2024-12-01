import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      'animation': {
        'gradient-x':'gradient-x 20s ease infinite',
        'gradient-y':'gradient-y 20s ease infinite',
        'gradient-xy':'gradient-xy 20s ease infinite',
    },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
    colors: {
      ...colors,
      p1: '#37191E',
      p2: '#79453D',
      p3: '#C7AB62',
      p4: '#6A7E35',
      p5: '#0C1713'
    }
  },
  plugins: [],
};
export default config;
