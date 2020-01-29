import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"

const Blog  = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeBlog (sort: {fields: created, order: DESC}){
        edges {
          node {
            title
            body {
              value
              summary
            }
            created(formatString: "YYYY-MM-DD")
            drupal_id
            path {
              alias
            }
            promote
            status
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog-list">
        <h1> Blog </h1>
        <ol>
          {data.allNodeBlog.edges.map( (edge) => {
            const path = edge.node.path.alias != null ? edge.node.path.alias : '/' + edge.node.drupal_id
            return (
              <li key={edge.node.drupal_id}>
                <Link to={path}>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.created}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>  
    </Layout>
  )
}

export default Blog

