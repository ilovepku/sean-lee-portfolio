module.exports = {
  siteMetadata: {
    title: `Sean Lee's Portfolio`,
    description: `Placeholder description`,
    author: `Sean Lee`,
    email: `seanleecoder@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 309,
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        whitelist: [
          "navbar",
          "navbar-expand-lg",
          "navbar-toggler",
          "navbar-toggler-icon",
          "collapse",
          "collapsing",
          "navbar-collapse",
          "svg-inline--fa",
          "carousel",
          "slide",
          "carousel-indicators",
          "carousel-inner",
          "carousel-item",
          "carousel-item-prev",
          "carousel-item-next",
          "carousel-item-left",
          "carousel-item-right",
          "metric-name",
          "metric-data",
          "unit",
          "metric-desc",
        ],
        whitelistPatterns: [/^fa-/],
      },
    },
  ],
}
