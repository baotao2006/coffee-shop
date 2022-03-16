module.exports = {
  siteMetadata: {
    title: '咖啡博客'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'src/blog'
      }
    },
    'gatsby-transformer-remark'
  ]
};
