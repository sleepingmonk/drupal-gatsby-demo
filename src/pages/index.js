import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="Title" />
    <div className="front">
      <h1>Hi!</h1>
      <blockquote><em>The site you're looking at is a Gatsby experiement I built in a few hours. It's a static site that pulls content from my original Drupal site via the JSON API. It's not super pretty, but it is pretty snappy!</em></blockquote>
    </div>
  </Layout>
)

export default Index
