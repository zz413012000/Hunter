import React from 'react';
import Sidebar from './Sidebar'
import './container.css'
// import styled from '@emotion/styled';
// const ArticleTitle=styled.div`
//     font-size:48px
// `

const Container=(props)=>{
    return (
        // <ArticleTitle>
        //     {props.children}
        // </ArticleTitle>
        <div className='container'>
            <Sidebar/>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}
export default Container