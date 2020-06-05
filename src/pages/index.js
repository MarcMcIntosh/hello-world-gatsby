import React from "react"
import { graphql, Link } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic'
import Layout from "../components/layout"
import Header from '../components/header'
import { RichText } from "prismic-reactjs";

export const query = graphql`{
    prismicHomepage(lang: { eq: "en-gb" }) {
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

const HomePage = ({ data }) => {
    const homePageData = data.prismicHomepage.data

    return (
        <Layout>
            <Link to="/contact/">Contact</Link>
            <Header headerText="Hello Gatsby!" />
            <div>{homePageData.title.text}</div>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <div>
              <h2>Featured blog post</h2>
              { homePageData.featured_post.document ?
                <RichText render={homePageData.featured_post.document.data.ritchtext.raw} /> :
                null
              }
            </div>
            <div>
              <h2>Blog</h2>
              <ul>
              { data.allPrismicBlogPost.edges.map(e =>
                <li key={e.node.id}><Link to={e.node.url}>{e.node.url}</Link></li>
              )}
              </ul>
            </div>
        </Layout>
    )
}

export default withPreview(HomePage)
