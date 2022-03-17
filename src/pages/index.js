import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import BlogList from '../components/BlogList';
import Layout from '../components/Layout';
import * as styles from './index.module.css';
export default function IndexPage() {
  const data = useStaticQuery(graphql`
      {
          site {
              siteMetadata {
                  title
              }
          }
          markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
              frontmatter {
                  tagline
                  heroImage {
                      childImageSharp {
                          gatsbyImageData
                      }
                  }
              }
          }
      }
  `);
  const tagline = data.markdownRemark.frontmatter.tagline;
  const heroImage = data.markdownRemark.frontmatter.heroImage;
  const image = getImage(heroImage)
  // 这样使用：
  const bgImage = convertToBgImage(image)
  return (
    <Layout>
      <BackgroundImage
        id={styles.hero}
        // 展开bgImage到BackgroundImage中
        {...bgImage}>
        <h1>{tagline}</h1>
      </BackgroundImage>

      <BlogList />
    </Layout>
  );
}
