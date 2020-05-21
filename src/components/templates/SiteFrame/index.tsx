import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { BaseViewProps } from "view"

import Header from "../../organisms/Header/header"

import "./layout.scss"

const Frame: React.FC<BaseViewProps> = ({ children }) => {
  const notion = useStaticQuery(graphql`
    query Notion {
      allNotionContent {
        edges {
          node {
            id
            contentType
            internal {
              # ... other properties of internal
              content
              description
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={"JP.LOG"}/>
      <div className={"content-wrapper"}>
        {notion.allNotionContent.edges.map(({ node: { id, internal: { description: title } } }) => (
          <li key={id}>
            <Link to={`/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Frame
