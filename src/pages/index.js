import React from "react"
import { Link } from "gatsby"

import Frame from "../components/templates/SiteFrame"
import Image from "../components/atoms/Image"
import SEO from "../components/seo"

import "./global.scss"

const IndexPage = () => (
  <Frame>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Frame>
)

export default IndexPage
