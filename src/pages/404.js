import React from 'react';
import { withUnpublishedPreview } from 'gatsby-source-prismic'

import Layout from "../components/layout";
import BlogPost from '../templates/BlogPost.js'

const NotFoundPage = () => (
  <Layout>
    <h1>Page not found!</h1>
  </Layout>
)

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    blog_post: BlogPost,
  },
})
