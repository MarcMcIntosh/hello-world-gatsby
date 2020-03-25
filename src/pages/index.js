import React from "react"
import { graphql } from 'gatsby';

export const query = graphql`{
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
}`;

export default ({ data, ...props}) => {
    const { node } = data.allPrismicHomepage.edges.pop();
    return (<div>{node.data.title.text} From prismic</div>)
}
