import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

export const query = graphql`query {
    prismicContact {
        id
        data {
            title {
                html
                text
                raw
            }
        }
    }
}`


export default ({ data }) => (
    <Layout>
        <Header headerText={data.prismicContact.data.title.text} />
        
        <p>Send us a message!</p>
        <b>{/*Slices don't work?*/}</b>
    </Layout>
)