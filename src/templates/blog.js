import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './blog.css'

export const query = graphql`
  query($drupal_id: String!) {
    nodeBlog(drupal_id: {eq: $drupal_id}) {
      body {
        value
        format
        processed
      }
      title
      created(formatString: "YYYY-MM-DD")
      drupal_id
      relationships {
        field_media_lead {
          field_media_image {
            alt
            title
          }
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  fixed {
                    width
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Blog = (props) => {
  const alt = props.data.nodeBlog.relationships.field_media_lead
    ? props.data.nodeBlog.relationships.field_media_lead.field_media_image.alt : ''
  const src = props.data.nodeBlog.relationships.field_media_lead
    ? props.data.nodeBlog.relationships.field_media_lead.relationships.field_media_image.localFile.childImageSharp.fixed.src : ''
  // Should use Img component for this... :\
  const img = src ? <img className="blog__image" alt={alt} src={src} /> : ''
  const body = props.data.nodeBlog.body.processed

  return (
    <Layout>
      <SEO title={props.data.nodeBlog.title} />
      <h1>{props.data.nodeBlog.title}</h1>
      <div className="blog__date">
        <p>{props.data.nodeBlog.created}</p>
      </div>
      {img}
      <div dangerouslySetInnerHTML={{ __html: body}}></div>
    </Layout>
  )
}

export default Blog

