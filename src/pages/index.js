import React, { useMemo } from "react"
import { graphql } from 'gatsby';
import { mergePrismicPreviewData } from 'gatsby-source-prismic'

// Returns true if we're in a browser, false otherwise. This will help guard
// against SSR issues when building the site.
const IS_BROWSER = typeof window !== 'undefined'

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

export default ({ data: staticData, ...props}) => {
    const data = useMemo(() => {
        // If we're not in a browser (i.e. we're in SSR) or preview data has not been
        // set, use the non-preview static data.
        console.log("useMemo")
        console.log(window.__PRISMIC_PREVIEW_DATA__);
        console.log(staticData);
        if (!IS_BROWSER || !window.__PRISMIC_PREVIEW_DATA__) return staticData.allPrismicHomepage.edges[0].node.data
        console.log("We have a preview")
    
        return mergePrismicPreviewData({
          staticData: staticData.allPrismicHomepage.edges[0].node.data,
          previewData: window.__PRISMIC_PREVIEW_DATA__.prismicHomepage.data
        })
    }, [staticData])
    console.log("index.jsx");
    console.log({ data });
        return (<div>{data.title.text} From prismic</div>)
}
