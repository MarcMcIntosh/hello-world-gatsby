import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';


/*
export const query = graphql`query {
    prismicFooter {
        id
        uid
        data {
            home { url target isBroken }
            contact_link { url target isBroken }
            about_link { url target isBroken }
        }
    }
}`;
*/
export default (props) => {
    const staticData =  useStaticQuery(graphql`query {
        prismicFooter {
            id
            uid
            data {
                home { url target isBroken }
                contact_link { url target isBroken }
                about_link { url target isBroken }
            }
        }
    }`);
    // console.log("footer");

    const { data } = (typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__ && window.__PRISMIC_PREVIEW_DATA__.prismicFooter) ? { ...staticData.prismicFooter, ...window.__PRISMIC_PREVIEW_DATA__.prismicFooter } : staticData.prismicFooter;

    // const isPreview = (window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__ && window.__PRISMIC_PREVIEW_DATA__.prismicFooter);

    // console.log({ staticData, data });

    return (<footer>
        <p>Footer</p>
        <div><Link to={data.home.url}>Home</Link></div>
        <div><Link to={data.contact_link.url}>Contact</Link></div>
        <div><Link to={data.about_link.url}>About</Link></div>
    </footer>);

   // return (<footer>Footer</footer>)
}
