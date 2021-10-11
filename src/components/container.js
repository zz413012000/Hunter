import React from 'react'
import styled from '@emotion/styled'
const ArticleTitle=styled.div`
    font-size:48px
`

const Container=(props)=>{
    return(
        <ArticleTitle>
            Hello
            {props.childred}
        </ArticleTitle>
    )
}
export default Container