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

export default ({ data }) => {
    const title = `About ${data.site.siteMetadata.title}`;
    return (
        <Layout>
            <Header headerText={title} />
            {/* Fix: this later  with html serilzer*/}
            <div dangerouslySetInnerHTML={{__html: data.prismicAbout.data.richtext.html}} />
        </Layout>
    );
}