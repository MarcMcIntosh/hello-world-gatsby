const path = require('path');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Query all Pages with their IDs and template data.
    const pages = await graphql(`
      {
        allPrismicBlogPost {
          nodes {
            id
            uid
          }
        }
      }
    `)

    /* const pageTemplates = {
      Light: path.resolve(__dirname, 'src/templates/light.js'),
      Dark: path.resolve(__dirname, 'src/templates/dark.js'),
    } */

    // Create pages for each Page in Prismic using the selected template.
    // console.log(JSON.stringify(pages, null, ' '));
    pages.data.allPrismicBlogPost.nodes.forEach(node => {
        console.log(JSON.stringify(node, null, " "))
      createPage({
        path: `/blog/${node.uid}`,
        component: path.resolve(__dirname, 'src/templates/BlogPost.js'),
        context: {
          id: node.id,
        },
      })
    })
  }
