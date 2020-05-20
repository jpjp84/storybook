import { Link } from "gatsby"
import React from "react"

import { SiteInfo } from "usecases"

import Image from "../../atoms/Image"
import HeaderText from "../../molecules/HeaderText"

import "./header.scss"

interface HeaderProps extends Pick<SiteInfo, "siteTitle"> {
}

const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => (
  <div className={"site-header-wrapper"}>
    <HeaderText>
      <Link
        className={"title-link"}
        to="/"
      >
        {siteTitle}
      </Link>
    </HeaderText>
    <Image
      className={"github-link"}
      fileName={"ic-github-logo.png"}
    />
  </div>
)

export default Header
