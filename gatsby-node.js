/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allNodeBlog {
        edges {
          node {
            drupal_id
            path {
              alias
            }
          }
        }
      }
    }
  `)

  res.data.allNodeBlog.edges.forEach((edge) => {
    const path = edge.node.path.alias != null ? edge.node.path.alias : '/' + edge.node.drupal_id
    
    createPage({ 
      component: blogTemplate,
      path: path,
      context: { 
        drupal_id: edge.node.drupal_id
      }
    })
  })

}
