import { Link } from "gatsby"
import React from "react"
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection,
} from "@material/react-top-app-bar"

import { SiteInfo } from "usecases"

import Image from "../../atoms/Image"
import HeaderText from "../../molecules/HeaderText"

import "@material/react-top-app-bar/index.scss"
import "./header.scss"

interface HeaderProps extends Pick<SiteInfo, "siteTitle"> {
}

const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => (
<div>

  <TopAppBar short className={"site-header-wrapper"}>
    <TopAppBarRow>
      <TopAppBarSection align='start'>
        <Link
          className={"title-link"}
          to="/"
        >
          {siteTitle}
        </Link>
      </TopAppBarSection>

      <TopAppBarSection align='end'>
        <Image
          className={"github-link"}
          fileName={"ic-github-logo.png"}
        />
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
</div>
)

export default Header
