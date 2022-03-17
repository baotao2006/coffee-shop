import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import * as styles from './Layout.module.css';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
      {
          file(relativePath: { eq: "coffee.jpg" } ) {
              childImageSharp {
                  gatsbyImageData
              }
          }
      }
  `);

  const file = data.file;
  const image = getImage(file)
  // 这样使用：
  const bgImage = convertToBgImage(image)

  return (
    <div>
      <BackgroundImage
        id={styles.header}
        // 展开bgImage到BackgroundImage中
        {...bgImage}>
        <div id={styles.inner}>
          <h1><Link to="/">尼欧的咖啡店</Link></h1>
          <Link to="/blog">博客</Link>
          <Link to="/menu">菜单</Link>
        </div>
      </BackgroundImage>

      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
