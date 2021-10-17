const {createFilePath}=require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node ,getNode,actions}) => {
    const {createNodeField}=actions
    if (node.internal.type === `MarkdownRemark`) { // 只拿 MD 檔案
        // const fileNode=getNode(node.parent)
        // console.log(`\n`,fileNode.relativePath)
        const slug=createFilePath({node,getNode,basePath:`pages`})
        createNodeField({
            node,
            name:`slug`,
            value:slug,
        })
    }
}
exports.createPages= async ({ graphql, actions })=>{
    const { createPage }= actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    // console.log(JSON.stringify(result,null,4))
    result.data.allMarkdownRemark.edges.forEach(({node})=>{
        createPage({
            path: node.fields.slug,
            component:path.resolve(`./src/templates/blog-post.js`),
            context:{
                slug: node.fields.slug,
            },
        })
    })
}
