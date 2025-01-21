import { nextui } from '@nextui-org/react';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
       colors: {
         "primary": "#10336f",  //  bg primary
         "secondary": "#000f22",  //  bg secondary
         "neutral": "#f9fdff",    //  body bg

          "textPrimary": "#032153",  // text 1 for bg lights e.g
          "textSecondary": "#7c9dc6", //  text 2 for bg darks

         "info": "#62B6CB",
         "success": "#4CAF50",
         "warning": "#FF9800",
         "error": "#F44336",
       },
    },
  },
  plugins: [
    daisyui,
    nextui(),
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       textileLightTheme: {
  //         "primary": "#10336f",  // bg primary
  //         "secondary": "#06214e",  // bg hover
  //         "accent": "#2962ff",  // link hover
  //         "neutral": "#f9fdff",   //  body bg
  //         "textPrimary": "#ebebeb", // text 1
  //         "textSecondary": "#676565", // text 2
  //         "base-100": "#ffff", //  color 1 
  //         "base-200": "#444746", // link color 
  //         "info": "#62B6CB",
  //         "success": "#4CAF50",
  //         "warning": "#FF9800",
  //         "error": "#F44336",
  //       },
  //     },
  //     {
  //       textileDarkTheme: {
  //         "primary": "#021212",  // bg primary
  //         "secondary": "#092924",  // bg hover
  //         "accent": "#ffff",  // link hover
  //         "neutral": "#051f20",   //  body bg
  //         "textPrimary": "#d1aa4f", // text 1
  //         "textSecondary": "#e0d3a9", // text 2
  //         "base-100": "#ffff", //  color 1 
  //         "base-200": "#444746", // link color 
  //         "info": "#62B6CB",
  //         "success": "#4CAF50",
  //         "warning": "#FF9800",
  //         "error": "#F44336",
  //       },
  //     }
  //   ],
  // },
};

export default config;
