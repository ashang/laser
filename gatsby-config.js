module.exports = {
  pathPrefix: `/gatsby`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  //plugins: [`gatsby-plugin-react-helmet`],
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
  ],
}




//npm install gatsby-plugin-sharp gatsby-plugin-manifest gatsby-remark-images-contentful gatsby-source-contentful gatsby-transformer-sharp gatsby-transformer-sqip

