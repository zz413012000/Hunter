import React from 'react'
import './css/about.css'
import Container from '../components/container';
import SEO from '../components/Seo';
import Header from '../components/Header';
const about = () => {
    return (
        <Container>
            <SEO title={data.site.siteMetadata.title} />
            <div className='about'>
                <Header />
                <div className="about_container">
                    <h1>關於我</h1>
                    <p>程式生活一年級生</p>
                    <p>
                        HI！我叫張至皓，樂於發現問題，解決問題。
                        原本專攻日文以及日系角色插畫領域。
                    </p>
                    <p>
                        在這之前我沒有寫過程式，我意外發現寫程式很好玩，並不像我以前的認知寫網站要面對一堆數學，寫網站也有很多設計的環節。<br />
                        當看到程式碼上線，網站實際可以設計的一樣跟我互動時，我就覺得特別有成就感。
                    </p>
                    <p>
                        我想鑽研更新的技術、更好的功能，一開始看一些中文 Youtube，接著我變得常逛 IT 邦幫忙、看 Youtube 上奇怪的印度人教程式，到看得懂外國人在 stackoverflow 上發問。
                    </p>
                    <p>
                        一開始上網搜尋很容易找到對我比較困難概念比較抽象的技術文章。<br />在這期間我學會抽象的思考將搜尋到的概念套用到我寫的程式碼，並且下對的關鍵字幫助我更快找到我想要的資源。
                    </p>
                    <p>
                        最後我與畫插畫的朋友合作，我寫程式，他設計網頁的方式。<br />用 React 搭配 Webpack 做了一個可以瀏覽他的漫畫作品的網站。<br />
                        我剛好可以完成我的面試作品，他也可以不用受限於FB平台的限制，可以有的自己的平台展示作品，雙贏。
                    </p>
                    <p>
                        在製作的過程中，除了有技術上不熟練的困難，會發現自己的技術還沒辦法完成一些功能，需要去補齊那些技術。<br />
                        還有溝通的困難上的困難，插畫的朋友沒有設計網站的經驗，所以不知道要從何開始，很難跨出第一步，跨出第一步還是會對自己設計出的頁面沒有自信。<br />
                        我發現有個方法還挺好用的，叫做三明治鼓勵法，就是先稱讚，在給一些自己的意見，接著在稱讚結尾，對方會比較接受。<br />鼓舞了團隊士氣，一些跨不過的檻也能克服。
                    </p>
                    <p>
                        我自己喜歡一句話「工程師都是很懶，所以可以不用重複做的事情，就讓程式碼解決」
                        我喜歡解決問題，我也喜歡用最省力的方式去解決問題。<br />
                        所以我會思考面對不同的專案，怎樣的 code 是快速的好維護的，並且應對不同情況選擇不同的工具。
                    </p>
                </div>
            </div>
        </Container>
    )
}


export default about;