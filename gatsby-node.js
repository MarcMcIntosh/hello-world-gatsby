/* const path = require('path')

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions;

    const pages = await graphql(`{
        allPrismicHomepage {
            edges {
                node {
                    id
                    uid
                    data {
                        title {
                            html
                            text
                            raw
                        }
                    }
                }
            }
        }
    }`)

    /// skipping tempaltes

    console.log({ pages })
    console.dir(JSON.stringify(pages, null, '\t'))
    pages.data.allPrismicHomepage.edges.forEach(node => createPage({
        path: '/',
        component: path.resolve(__dirname, 'src/pages/index.js'),
        context: { ...node },
    }));
 } */