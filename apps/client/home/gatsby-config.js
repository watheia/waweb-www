/** @format */

const siteMetadata = require('./site-metadata.json');

module.exports = {
  pathPrefix: '/',
  siteMetadata: siteMetadata,
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
      },
    },
    'gatsby-plugin-top-layout',
    // {
    //   resolve: "gatsby-plugin-material-ui",
    //   // If you want to use styled components you should change the injection order.
    //   options: {
    //     // stylesProvider: {
    //     //   injectFirst: true,
    //     // },
    //     disableAutoprefixing: true,
    //     disableMinification: true,
    //   },
    // },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/pages`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.app.json`,
        silent: false,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `watheia`,
        short_name: `watheia`,
        start_url: `/`,
        background_color: `#092947`,
        theme_color: `#092947`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`,
      },
    },
    `gatsby-source-data`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {},
    },
  ],
};
