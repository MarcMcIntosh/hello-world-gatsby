import React from 'react';
import Layout from "../components/layout";
import Header from "../components/header";
import { Link } from 'gatsby'

export default (props, ...args) => {
    console.log("404 page");
    console.log({ props, ...args });

    return (<Layout>
        <Header headerText="404: Not found" />
        <div>
            <Link to="/">Home</Link>
        </div>
        <p>{JSON.stringify({ props, args }, null, "\t")}</p>
    </Layout>);

}