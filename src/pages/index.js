import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout"
import Index from "../components/atoms/Image"
import SEO from "../components/seo"

import "./global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Index/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
