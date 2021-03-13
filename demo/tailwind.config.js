const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.blue,
        yellow: colors.amber,
        teal: colors.teal,
        cyan: colors.cyan,
        emerald: colors.emerald,
        violet: colors.violet,
        green: colors.green,
        purple: colors.purple,
        pink: colors.pink,
      },
      container: {
        center: true,
        padding: '1.25rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      display: ['responsive', 'hover', 'focus', 'last'],
      backgroundColor: ['hover', 'focus', 'active'],
      borderColor: ['hover', 'focus', 'active'],
      textColor: ['hover', 'focus', 'active'],
    },
  },
};
