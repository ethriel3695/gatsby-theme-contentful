module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-contentful',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reuben Ellis`,
        icon: `content/assets/logo/logo.jpg`,
        short_name: `Reuben Ellis`,
        start_url: `/`,
        background_color: `#2C5282`,
        theme_color: `#2C5282`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
        // theme_color_in_head: false
      },
    },
  ],
  siteMetadata: {
    title: `Demo for Netlify CMS`,
    author: `Reuben Ellis`,
    description: `Welcome to a Different World`,
    greeting: ``,
    copyright: `Copyright © 2021 Reuben Ellis LLC`,
    loginDesc: '',
    isAuthApp: false,
    newsletterTitle: '',
    social: {
      facebook: 'https://www.facebook.com/reuben.ellis.338',
      twitter: '',
      instagram: 'https://www.instagram.com/devellistech',
      github: 'https://www.github.com/ethriel3695',
      email: 'mailto:ethriel3695@gmail.com',
    },
    externalLinks: [{ label: '', link: '' }],
    hasNotifications: false,
    categories: ['placeholder'],
    hasCTA: false,
  },
};
