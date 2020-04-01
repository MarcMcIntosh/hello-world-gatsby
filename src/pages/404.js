import React from 'react';
import Layout from "../components/layout";
import Header from "../components/header";
import { Link } from 'gatsby'
import BlogPost from '../templates/BlogPost'

const IS_BROWSER = typeof window !== 'undefined'

export default () => {

    const previewData = IS_BROWSER && window.__PRISMIC_PREVIEW_DATA__

    console.log('--------404 preview --------', previewData)
    if (previewData && previewData.prismicBlogPost) {
      return (
        <BlogPost data={previewData} />
      )
    }

    return (
      <Layout>
          <Header headerText="404: Not found" />
          <div>
              <Link to="/">Home</Link>
          </div>
      </Layout>
    )

}
