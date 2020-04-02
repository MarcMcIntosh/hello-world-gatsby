import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import { withPreview } from '../prismic/withPreview';

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

const BlogPost = (props) => {
    console.log('----------blog props------------', { props })
    return (
        <Layout>
            <RichText render={props.data.prismicBlogPost.data.ritchtext.raw} />
        </Layout>
    )
}

export default withPreview(BlogPost);
