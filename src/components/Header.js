import React from 'react';
import {useSiteMetadata} from '../hooks/use-site-metadata'
// import { StaticQuery,graphql } from 'gatsby';
// import {useStaticQuery,graphql} from 'gatsby'
import './header.css';
const Header=()=>{
    const {title,description}=useSiteMetadata()
    return (
        <header className='header'>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}

// const Header=()=>{
//     const data =useStaticQuery(graphql`
//         query HeaderQuery{
//             site{
//                 siteMetadata{
//                     title
//                 }
//             }
//         }
//     `)
//     return (
//         <header className='header'>
//             <h1>{data.site.siteMetadata.title}</h1>
//         </header>
//     )
// }



// const Header = () => {
//     return (
//         <StaticQuery 
//             query={graphql`
//                 query HeadingQuery {
//                     site {
//                         siteMetadata {
//                             title
//                             description
//                         }
//                     }
//                 }
//             `}
//             render={data=>(
//                 <header className='header'>
//                     <h1>{data.site.siteMetadata.title}</h1>
//                     <p>{data.site.siteMetadata.description}</p>
//                 </header>
//             )}
//         />
//     )
// }

export default Header
