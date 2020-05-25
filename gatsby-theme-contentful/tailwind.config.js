const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./src/**/*.jsx', './src/**/*.js', , './src/**/*.html'],
  },
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    fontFamily: {
      sans: ['Inter var', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: 'rgba(56,178,172,1)',
      secondary: 'rgba(56,178,172,1)',
    },
  },
  variants: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
  // variants: {
  //   opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  //   display: ['responsive', 'hover', 'focus', 'last'],
  //   backgroundColor: ['hover', 'focus', 'active'],
  //   borderColor: ['hover', 'focus', 'active'],
  //   textColor: ['hover', 'focus', 'active'],
  // },
};
