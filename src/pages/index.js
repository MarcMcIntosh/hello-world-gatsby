import React, { useMemo } from "react"
import { graphql, Link } from 'gatsby';
import { mergePrismicPreviewData } from 'gatsby-source-prismic'
import Layout from "../components/layout"
import Header from '../components/header'
import { RichText } from "prismic-reactjs";

// Returns true if we're in a browser, false otherwise. This will help guard
// against SSR issues when building the site.
const IS_BROWSER = typeof window !== 'undefined'

export const query = graphql`{
    prismicHomepage {
        id
        data {
          featured_post {
            document {
              ... on PrismicBlogPost {
                id
                url
                data {
                  ritchtext {
                    raw
                  }
                }
              }
            }
          }
          title {
            html
            text
          }
        }
    }
    allPrismicBlogPost {
      edges {
        node {
          id
          url
        }
      }
    }
}`;

export default ({ data: staticData, ...props}) => {
    /* this can break */
    const data = useMemo(() => {
        // If we're not in a browser (i.e. we're in SSR) or preview data has not been
        // set, use the non-preview static data.
        if (!IS_BROWSER || !window.__PRISMIC_PREVIEW_DATA__ || !window.__PRISMIC_PREVIEW_DATA__.prismicHomepage) return staticData.prismicHomepage.data
        console.log("We have a preview")

        return mergePrismicPreviewData({
          staticData: staticData.prismicHomepage.data,
          previewData: window.__PRISMIC_PREVIEW_DATA__.prismicHomepage.data
        })
    }, [staticData])

    return (
        <Layout>
            <Link to="/contact/">Contact</Link>
            <Header headerText="Hello Gatsby!" />
            <div>{data.title.text} From prismic</div>
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <div>
              <h2>Featured blog post</h2>
              { data.featured_post.document ?
                <RichText render={data.featured_post.document.data.ritchtext.raw} /> :
                null
              }
            </div>
            <div>
              <h2>Blog</h2>
              <ul>
              { staticData.allPrismicBlogPost.edges.map(e =>
                <li key={e.node.id}><Link to={e.node.url}>{e.node.url}</Link></li>
              )}
              </ul>
            </div>
        </Layout>
    )
}
