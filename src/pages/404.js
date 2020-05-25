import React from 'react';
import Layout from "../components/layout";
import Header from "../components/header";
import { Link } from 'gatsby'
import BlogPost from '../templates/BlogPost'

export default () => {
    return (
      <Layout>
          <Header headerText="404: Not found" />
          <div>
              <Link to="/">Home</Link>
          </div>
      </Layout>
    )

}
