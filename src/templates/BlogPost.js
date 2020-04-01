import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";


export const query = graphql`
    query($id: String!) {
        prismicBlogPost(id: { eq: $id }) {
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

    const path  = props.location ? props.location.pathname : staticData.path;
    const { prismicBlogPost: { data } } = (typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__ && path === window.__PRISMIC_PREVIEW_DATA__.path) ? window.__PRISMIC_PREVIEW_DATA__ : staticData

    return (
        <Layout>
            <RichText render={data.ritchtext.raw} />
        </Layout>
    )
}

export default BlogPost
