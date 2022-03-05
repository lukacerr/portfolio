/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Luka Cerrutti's Portfolio`,
    siteUrl: `https://lukacerrutti.netlify.app`,
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        resolveModules: ['./src/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/',
      },
      __key: 'images',
    },
    'gatsby-plugin-image',
    'gatsby-plugin-offline',
  ],
};
