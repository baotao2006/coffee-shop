module.exports = {
  siteMetadata: {
    title: '咖啡博客'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'static/img'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'src/blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pageData',
        path: 'src/pageData'
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          'gatsby-remark-images'
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ]
};
