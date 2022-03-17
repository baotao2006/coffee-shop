import React from 'react';
import { graphql, Link } from 'gatsby';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import * as styles from './blog-list.module.css';
export default function BlogListTemplate({ data, pageContext }) {
  // 生成上一页previous和下一页next page URLs。
  const previousPage = pageContext.currentPage === 2 ?
    '/blog' :
    `/blog/${pageContext.currentPage - 1}`;

  const nextPage = `/blog/${pageContext.currentPage + 1}`;

  return (
    <Layout>
      <div id={styles.hero}>
        <h1>咖啡博客</h1>
      </div>
      <main className={styles.blogList}>
        {data.allMarkdownRemark.edges.map(node => (
          <BlogPost
            key={node.node.id}
            slug={node.node.fields.slug}
            title={node.node.frontmatter.title}
            date={node.node.frontmatter.date}
            excerpt={node.node.excerpt} />
        ))}
      </main>
      <div id={styles.pageLinks}>
        {pageContext.currentPage > 1 && (
          <Link to={previousPage}>
            ← 上一页
          </Link>
        )}
        {pageContext.currentPage < pageContext.pageCount && (
          <Link to={nextPage}>
            下一页 →
          </Link>
        )}
      </div>
    </Layout>
  )
}
// 这个页面查询page query.
export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { contentKey: { eq: "blog" }}}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
