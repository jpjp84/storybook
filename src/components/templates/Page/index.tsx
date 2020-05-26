import React from "react"
import { graphql } from "gatsby"
import { NotionContext, NotionPage } from "notion"

import Layout from "../../molecules/Layout"
import NotionBlockRenderer from "../../molecules/NotionRenderBlock"

import useNotionRendererFactory from "../../../hooks/useNotionRendererFactory"

interface TemplateProps {
  data: NotionPage;
  pageContext: NotionContext;
}

const Template: React.FC<TemplateProps> = ({ data, pageContext }) => {
  const notionRenderer = useNotionRendererFactory(data)

  return (
    <Layout meta>
      <NotionBlockRenderer
        data={data}
        renderer={notionRenderer}
        debug={false}
      />
    </Layout>
  )
}

export default Template

export const query = graphql`
  query($pageId: String!) {
    notionPageBlog(pageId: { eq: $pageId }) {
      blocks {
        blockId
        blockIds
        type
        attributes {
          att
          value
        }
        properties {
          propName
          value {
            text
            atts {
              att
              value
            }
          }
        }
      }
      pageId
      slug
      title
      isDraft
      id
      indexPage
    }
  }
`
