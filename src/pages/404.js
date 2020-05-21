import React from "react"

import Frame from "../components/templates/SiteFrame"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Frame>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Frame>
)

export default NotFoundPage
