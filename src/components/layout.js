/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import github from "../images/github180.png"
import drupal from "../images/drupal180.png"
import linkedin from "../images/linkedin180.png"
import twitter from "../images/twitter180.png"

const Layout = ({ children }) => {
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
    <div className="main">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layout">
        <main>{children}</main>
      </div>
      <footer>
        <div className="footer-inner">
          <div className="row container">
            <div className="col"><a href="https://github.com/sleepingmonk" target="_blank" rel="noopener noreferrer"><img alt="Github" data-align="left" data-entity-type="file" data-entity-uuid="8a03bb02-015c-48c8-ad11-15c7525c7d8a" src={github} /></a></div>

            <div className="col"><a href="https://www.linkedin.com/in/calvintyndall/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={linkedin} /></a></div>

            <div className="col"><a href="https://twitter.com/oohcalvin" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src={twitter} /></a></div>

            <div className="col"><a href="https://www.drupal.org/u/sleepingmonk" target="_blank" rel="noopener noreferrer"><img alt="Drupal" src={drupal} /></a></div>
          </div>

          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://drupal.org">Drupal</a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
