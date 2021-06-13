/** @format */

const siteMetadata = require("./site-metadata.json")

module.exports = {
  pathPrefix: "/",
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
    "gatsby-plugin-top-layout",
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
      resolve: "gatsby-plugin-react-leaflet",
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
      resolve: "gatsby-plugin-svgr",
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
    // {
    //   resolve: `gatsby-source-datocms`,
    //   options: {
    //     // You can find your read-only API token under the Settings > API tokens
    //     // section of your administrative area. Make sure to grant both CDA and CMA permissions.
    //     apiToken: process.env.DATOCMS_ACCESS_TOKEN,

    //     // The project environment to read from. Defaults to the primary environment:
    //     environment: `main`,

    //     // If you are working on development/staging environment, you might want to
    //     // preview the latest version of records instead of the published one:
    //     previewMode: true,

    //     // Disable automatic reloading of content when some change occurs on DatoCMS:
    //     disableLiveReload: false,

    //     // Custom API base URL (most don't need this)
    //     // apiUrl: 'https://site-api.datocms.com',

    //     // Setup locale fallbacks
    //     // In this example, if some field value is missing in Italian, fall back to English
    //     localeFallbacks: {
    //       it: ['en'],
    //     },
    //   },
    // },
  ],
}
