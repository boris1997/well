import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyle'

function Home() {
    const Home = styled.div`
        display: flex;
        justify-content: space-between;
        `
    const WellImg = styled.div`
        display: flex;
        justify-content: space-between;
        `
    const HomeMain = styled.div`
        display: flex;
        justify-content: space-between;
        `
    const HomeTitle = styled.h1`
        display: flex;
        justify-content: space-between;
        `
    const HomeInfoItem = styled.h2`
        display: flex;
        justify-content: space-between;
        `
    const HomeCallToAction = styled.button`
        display: flex;
        justify-content: space-between;
        `
    const HomeInfo = styled.div`
            display: flex;
            justify-content: space-between;
            `
    const WellImgContent = styled.img`
            display: flex;
            justify-content: space-between;
            `

    return (
        <Home>
            <Container>
                <WellImg>
                    <WellImgContent></WellImgContent>
                </WellImg>
                <HomeMain>
                    <HomeTitle>ОРГАНИЗАЦИЯ ВОДОСНАБЖЕНИЯ
                    НА ЗАГОРОДНЫХ УЧАСТКАХ И ДАЧАХ,
                    КОЛОДЦЫ И СЕПТИКИ ИЗ КОЛЕЦ
                    </HomeTitle>
                    <HomeInfo>
                        <HomeInfoItem>Гарантия на работы по договору – 3 года</HomeInfoItem>
                        <HomeInfoItem>Бригады под управлением опытных мастеров</HomeInfoItem>
                    </HomeInfo>
                    <HomeCallToAction>посчитать стоимость</HomeCallToAction>
                </HomeMain>
            </Container>
        </Home>
    )
}

export default Home
