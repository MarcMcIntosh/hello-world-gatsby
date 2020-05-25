import React, { useEffect } from 'react';
import { navigate, useStaticQuery } from 'gatsby';
import { usePrismicPreview } from 'gatsby-source-prismic'
import { linkResolver } from '../prismic';

const REPO_NAME = "gatsby-hello";
const PreviewPage = () => {
    const { allSitePage } = useStaticQuery(graphql`
        {
          allSitePage {
            nodes {
                path
            }
          }
        }
      `)
    const allPaths = allSitePage.nodes.map(node => node.path)

    const { isPreview, previewData, path } = usePrismicPreview({
        // The repositoryName value from your `gatsby-config.js`.
        repositoryName: REPO_NAME,
        linkResolver,
    });

    // This useEffect runs when values from usePrismicPreview update. When
    // preview data is available, this will save the data globally and redirect to
    // the previewed document's page.
    useEffect(() => {
        // If this is not a preview, skip.
        //   null = Not yet determined if previewing.
        //   true = Preview is available.
        //   false = Preview is not available.
        if (isPreview === false || !previewData) return

        // Save the preview data to somewhere globally accessible. This could be
        // something like a global Redux store or React context.
        //
        // We'll just put it on window.
        // Object.assign(window.__PRISMIC_PREVIEW_DATA__, previewData, {})
        window.__PRISMIC_PREVIEW_DATA__ = previewData

        console.log('preview.js', isPreview, previewData, path)
        if (allPaths.includes(path)) {
            navigate(path)
        } else {
            navigate('/unpublishedPreview')
        }
    }, [isPreview, previewData, path]);

    // Tell the user if this is not a preview.
    if (isPreview === false) return <div>Not a preview!</div>

    return <div>Loading preview...</div>
}

export default PreviewPage
