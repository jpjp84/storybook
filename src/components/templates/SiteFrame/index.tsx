import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BaseViewProps } from "view"

import Header from "../../organisms/Header/header"

import "./layout.scss"

const Frame: React.FC<BaseViewProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={"JP.LOG"}/>
      <div className={"content-wrapper"}>
        <main>{children}</main>

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
