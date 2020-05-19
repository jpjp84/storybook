import { Link } from "gatsby"
import React from "react"

import { SiteInfo } from "usecases"

import "./header.scss"

interface HeaderProps extends Pick<SiteInfo, "siteTitle"> {
}

const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => (
  <header className={"site-header"}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
