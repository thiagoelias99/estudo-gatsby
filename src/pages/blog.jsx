import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

//A pagina vai receber os dados da query como props
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

//A query precisa ser exportada para ser usada na página
export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
            name
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage