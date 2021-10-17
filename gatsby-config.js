/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-plugin-manifest`,
      options:{
        name:`MyFirstWebsite`,
        short_name:`MyFirstWebsite`,
        start_url:`/`,
        background_color:`#6b37bf`,
        theme_color:`#6b37bf`,
        display:`standalone`,
        icon:`src/images/icon.jpg`
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`src`,
        path:`${__dirname}/src/`,
      }
    }
  ],
  siteMetadata:{
    title:`夯特's Blog`,
    description:`插畫家寫程式的部落格`,
    author:`夯特 (Hunter)`
  }
}
