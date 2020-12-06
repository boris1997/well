import React from 'react'
import styled from 'styled-components'
import { Container, Info } from '../styles/GlobalStyle'
import Well from '../images/Well.png'

function Home() {
    const Home = styled.section`
        display: flex;
        justify-content: space-between;
        height: 75%;
        margin-top: 10rem
        `
    const HomeContent = styled.div`
        display: flex;
        justify-content: space-between;
        height: 100%;
        `
    const WellImg = styled.div`
        display: flex;
        justify-content: space-between;
        flex: 1;
        margin-top: 6rem;
        `
    const HomeMain = styled.div`
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        flex: 1;
        `
    const HomeTitle = styled.h1`
        display: flex;
        justify-content: space-between;
        `
    /*  const HomeInfoItem = styled.h2`
         display: flex;
         justify-content: space-between;
         ` */
    const HomeCallToAction = styled.button`
    
        border-radius: 50px;
        border: none;
    background: transparent;
    position: relative;
    font-size: 1.2rem;
    cursor: pointer;
    height: 4rem;
    width: 17rem;
   /*  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px #FFFFFF; */
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 1px #FFFFFF20;
   :hover {
          box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 1px #FFFFFF20;
          font-size: 1.15rem
   }
        `
    const HomeInfo = styled.div`
            display: flex;
            justify-content: space-between;
            `
    const WellImgContent = styled.img`
            height: 25rem
            `

    return (
        <Home className='home'>
            <Container>
                <HomeContent>
                    <WellImg>
                        <WellImgContent src={Well}></WellImgContent>
                    </WellImg>
                    <HomeMain>
                        <HomeTitle>ОРГАНИЗАЦИЯ ВОДОСНАБЖЕНИЯ
                        НА ЗАГОРОДНЫХ УЧАСТКАХ И ДАЧАХ,
                        КОЛОДЦЫ И СЕПТИКИ ИЗ КОЛЕЦ
                    </HomeTitle>
                        <HomeInfo>
                            <Info>Гарантия на работы по договору – 3 года</Info>
                            <Info>Бригады под управлением опытных мастеров</Info>
                        </HomeInfo>
                        <HomeCallToAction>посчитать стоимость</HomeCallToAction>
                    </HomeMain>
                </HomeContent>
            </Container>
        </Home>
    )
}

export default Home
