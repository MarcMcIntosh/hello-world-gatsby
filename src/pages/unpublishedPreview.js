import React from 'react';
import BlogPost from '../templates/BlogPost'

export const UnpublishedPage = props => {
  // const previewData = window.__PRISMIC_PREVIEW_DATA__
  // => Perform any logic from previewData to determine the correct page or template component to use.

  return <BlogPost {...props} />
}

export default UnpublishedPage
