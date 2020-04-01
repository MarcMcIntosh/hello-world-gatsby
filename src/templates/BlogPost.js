import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";


export const query = graphql`
    query($uid: String!) {
        prismicBlogPost(uid: { eq: $uid }) {
            data {
                ritchtext {
                    html
                    text
                    raw
                }
            }
        }
    }
`

const BlogPost = ({ data: staticData, ...props }) => {
    console.log('----------blog props------------', { props, staticData })
    const { prismicBlogPost: { data } } = (typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__) ? window.__PRISMIC_PREVIEW_DATA__ : staticData

    return (
        <Layout>
            <RichText render={data.ritchtext.raw} />
        </Layout>
    )
}

export default BlogPost
