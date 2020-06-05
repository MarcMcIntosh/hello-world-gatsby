import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export default () => {
    const staticData =  useStaticQuery(graphql`query {
        prismicFooter {
            id
            uid
            data {
                date
                home { url target isBroken }
                contact_link { url target isBroken }
                about_link { url target isBroken }
            }
        }
    }`);

    const data = staticData.prismicFooter.data

    return (<footer>
        <p>Footer {data.date}</p>
        <div><Link to={data.home.url}>Home</Link></div>
        <div><Link to={data.contact_link.url}>Contact</Link></div>
        <div><Link to={data.about_link.url}>About</Link></div>
    </footer>);

}
