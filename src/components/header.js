import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import "./header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="header">
      <div className="header__inner">
        <h1 style={{ margin: 0 }}>
          {data.site.siteMetadata.title}
        </h1>
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </header>
  )
}

export default Header
