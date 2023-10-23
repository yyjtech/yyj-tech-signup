import { graphql } from "gatsby"
import React from "react"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import { sanitizeHtml } from "@/utils/sanitizeHtml"

const Example = ({ data, pageContext }) => {
  const content = data.allMarkdownRemark.edges[0].node.html
  console.log(data)

  return (
    <Layout>
      <Header />
      <main className="container mb-10">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content),
          }}
        />
      </main>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Title for SEO"/>

export const query = graphql`
  query ExampleQuery {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: "/example" } } }) {
      edges {
        node {
          frontmatter {
            slug
          }
          html
        }
      }
    }
  }
`

export default Example
