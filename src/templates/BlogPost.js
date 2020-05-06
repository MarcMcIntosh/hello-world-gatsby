import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import withPreviewData from '../prismic/withPreviewData';

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

const BlogPost = ({ data }) => {
    // console.log('----------blog props------------', { props })
    const liveData = withPreviewData(data)
    console.log('liveData', liveData)
    return (
        <Layout>
            <RichText render={liveData.prismicBlogPost.data.ritchtext.raw} />
        </Layout>
    )
}

export default BlogPost
