import React from "react"
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout"
import Header from '../components/header'
import { RichText } from "prismic-reactjs";
import usePreviewData from '../prismic/usePreviewData';

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

export default ({ data }) => {
    const liveData = usePreviewData(data)
    const homePageData = liveData.prismicHomepage.data

    return (
        <Layout>
            <Link to="/contact/">Contact</Link>
            <Header headerText="Hello Gatsby!" />
            <div>{homePageData.title.text}</div>
            <p>What a world.</p>
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
