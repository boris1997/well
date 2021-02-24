import React from 'react'
import styled from 'styled-components'
import { Container, Content } from '../../styles/GlobalStyle'
import HomeContent from './homeContent/HomeContent'



const Home = styled(Content)`
@media screen and (max-width: 760px) {
    margin-top: 10rem;
} @media screen and (max-width: 500px) { 
margin-top: 6rem;
}
`

// const HomeContentItems = styled.div`
//     display: flex;
//     justify-content: space-between;
//         height: 35rem;
//          @media screen and (max-width: 760px) {
// height: 24rem;
// }

//     `

const home = () => {

    return (
        <Home className='home'>
            <Container>
                <HomeContent />
            </Container>
        </Home>
    )
}

export default home
