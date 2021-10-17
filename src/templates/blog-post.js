import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"

export default function BlogPost({ data }){
  const post = data.markdownRemark
  return (
    <Container>
      <div>
        <h1>部落格文章區域</h1>
        <hr/>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`