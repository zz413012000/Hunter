import React from "react"
import Container from '../components/container.js'
import SEO from "../components/Seo.js";
import { Link,graphql } from 'gatsby';
import './css/index.css'
export default function Home({ data }) {
  return (
    <Container>
      <SEO title={data.site.siteMetadata.title} />
      <div>
        <h1>
          {data.site.siteMetadata.title}
        </h1>
        <h4>共 {data.allMarkdownRemark.totalCount} 篇文章</h4>
        {data.allMarkdownRemark.edges.map(({node})=>(
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                className='post'
              >
                <h3>
                  {node.frontmatter.title}
                  <span>
                    － {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))
        }
      </div>
    </Container>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`