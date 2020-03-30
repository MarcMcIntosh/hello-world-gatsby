import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    prismicAbout {
      id
      data {
        richtext {
          html
          raw
          text
        }
      }
    }
  }
  
`;

export default (props) => {
  console.log("about.js");
  console.log({ props });
  const staticData = props.data;

  console.log("prismicAcount: Static", staticData.prismicAbout);

  const title = `About ${staticData.site.siteMetadata.title}`;
  const { prismicAbout } = (typeof window !== 'undefined' && window.__PRISMIC_PREVIEW_DATA__ && window.__PRISMIC_PREVIEW_DATA__.prismicAbout) ? window.__PRISMIC_PREVIEW_DATA__ : staticData;
  console.log(prismicAbout);
    return (
        <Layout>
            <Header headerText={title} />
            {/* Fix: this later  with html serilzer*/}
            <div dangerouslySetInnerHTML={{__html: prismicAbout.data.richtext.html}} />
        </Layout>
    );
}