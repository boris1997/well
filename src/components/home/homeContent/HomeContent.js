import React from 'react'
import styled from 'styled-components'
import { Info } from '../../../styles/GlobalStyle'
import Well from '../../../images/Well.png'

import HomeMain from './homeMain/HomeMain'


const HomeContent = styled.div`
    display: flex;
    justify-content: space-between;
        height: 35rem;
         @media screen and (max-width: 760px) {
height: 24rem;
}

`
const WellImg = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-top: 5.5rem;
    padding-left: 1rem;
    @media screen and (max-width: 760px) { 
display: none;

}
    `


const WellImgContent = styled.img`
        height: 25rem;
        @media screen and (max-width: 950px) { 
            height: 21rem;
            
        }
        `
const InfoLeft = styled(Info)`
        @media screen and (max-width: 760px) { 
            padding-right: 1rem;
            
        }
        `
const InfoRight = styled(Info)`
  @media screen and (max-width: 760px) { 
      padding-left: 1rem;
      padding-right: 0;
    }
    `
const HomeSocMedia = styled.div`
        width: 21rem;
        display: flex;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr;
        /*       grid-row-gap: 4rem;
        grid-column-gap: 4rem; */
        @media screen and (max-width: 950px) { 
            width: 18rem;
       }
            `



const homeContent = () => {
    return (
        <HomeContent>
            <WellImg>
                <WellImgContent alt='колодец' src={Well}></WellImgContent>
            </WellImg>
            <HomeMain />

        </HomeContent>
    )
}

export default homeContent
