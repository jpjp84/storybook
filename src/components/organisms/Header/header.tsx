import { Link } from "gatsby"
import React from "react"
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection
} from "@material/react-top-app-bar"

import { SiteInfo } from "usecases"

import Image from "../../atoms/Image"

import "@material/react-top-app-bar/index.scss"
import "./header.scss"

interface HeaderProps extends Pick<SiteInfo, "siteTitle"> {
}

const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => (
  <TopAppBar short className={"site-top-app-bar"}>
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
)

export default Header
