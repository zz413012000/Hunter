import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
const myfiles = ({ data }) => {
    console.log(data)
    return (
        <Container>
            <div>
                <h1>我的檔案</h1>
                <table>
                    <thead>
                        <tr>
                            <th>名稱</th>
                            <th>新增時間</th>
                            <th>路徑</th>
                            <th>檔案大小</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.name}</td>
                                <td>{node.birthTime}</td>
                                <td>{node.relativePath}</td>
                                <td>{node.prettySize}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    )
}
export const qurey = graphql`
    query{
        allFile{
            edges{
                node{
                    name
                    birthTime
                    relativePath
                    prettySize
                }
            }
        }
    }
`
export default myfiles
