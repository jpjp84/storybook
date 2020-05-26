import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { BaseViewProps } from "view"

import Header from "../../organisms/Header/header"

import "./siteFrame.scss"

const Frame: React.FC<BaseViewProps> = ({ children }) => {
  // const notion = useStaticQuery(graphql`
  //   query Notion {
  //     allNotionContent {
  //       edges {
  //         node {
  //           id
  //           contentType
  //           internal {
  //             # ... other properties of internal
  //             content
  //             description
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header siteTitle={"JP.DEV"}/>
      <div className={"content-wrapper"}>
        {children}
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
