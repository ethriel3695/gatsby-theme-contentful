module.exports = {
  purge: false,
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'last'],
    backgroundColor: ['hover', 'focus', 'active'],
    borderColor: ['hover', 'focus', 'active'],
    textColor: ['hover', 'focus', 'active'],
  },
};
