import React from "react"
import { graphql } from "gatsby"
import { Notion } from "notion"

import ArticleBlockLink from "../components/molecules/ArticleBlockLink"
import Frame from "../components/templates/SiteFrame"
import SEO from "../components/seo"

import "./global.scss"

interface IndexPageProps {
  data: Notion;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Frame>
      <SEO title="Home"/>
      {data.allNotionPageBlog.edges.map(edge => {
        return (
          <ArticleBlockLink
            title={edge.node.title}
            link={`/article/${edge.node.slug}`}
            excerpt={edge.node.excerpt}
            icon={edge.node.pageIcon}
          />
        )
      })}
    </Frame>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allNotionPageBlog(
      filter: { isDraft: { eq: false } }
      sort: { fields: [indexPage], order: ASC }
    ) {
      edges {
        node {
          title
          slug
          excerpt
          pageIcon
        }
      }
    }
  }
`
