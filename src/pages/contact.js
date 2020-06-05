import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

export const query = graphql`query {
    prismicContact {
        id
        data {
            title {
                text
            }
            body {
                ... on PrismicContactBodyTeam {
                      items {
                        first_and_lastname {
                          text
                        }
                        position {
                          text
                        }
                    }
                }
            }
        }
    }
}`


export default ({ data }) => {
  return (
      <Layout>
          <Header headerText={data.prismicContact.data.title.text} />

          <p>Send us a message!</p>
          <ul>
            {data.prismicContact.data.body[0].items.map(item => {
              return (
                <li key={item.first_and_lastname.text}>
                  <b>{item.first_and_lastname.text}</b>
                  <p>{item.position.text}</p>
                </li>
              )
            })}
          </ul>
      </Layout>
  )
}
