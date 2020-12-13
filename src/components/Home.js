import React from 'react'
import styled from 'styled-components'
import { Container, Content, Info } from '../styles/GlobalStyle'
import Well from '../images/Well.png'
import 'remixicon/fonts/remixicon.css'

function Home() {
    const Home = styled(Content)`
    @media screen and (max-width: 760px) {
        margin-top: 10rem;
} @media screen and (max-width: 500px) { 
  margin-top: 6rem;
  }
    `

    const HomeContent = styled.div`
        display: flex;
        justify-content: space-between;
            height: 35rem;
             @media screen and (max-width: 760px) {
   height: 22rem;
}
             @media screen and (max-width: 500px) {
   height: 19rem;
}
        `
    const WellImg = styled.div`
        display: flex;
        justify-content: space-between;
        flex: 1;
        margin-top: 6rem;
        padding-left: 1rem;
        @media screen and (max-width: 760px) { 
    display: none;
    
}
        `
    const HomeMain = styled.div`
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        flex: 1;
            @media screen and (max-width: 950px) { 
    height: 90%;
    
}

 @media screen and (max-width: 760px) {
justify-content: space-between;
        padding-left: 1rem;
    padding-right: 1rem;
}
            
        `
    const HomeTitle = styled.h1`
        display: flex;
        justify-content: space-between;
             @media screen and (max-width: 950px) { 
    font-size: 1.3rem;
    @media screen and (max-width: 500px) { 
 font-size: 1.1rem;
  }
}
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
          @media screen and (max-width: 950px) { 
    font-size: 1rem;
    height: 3.5rem;
    width: 14rem;
    :hover {
          box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 1px #FFFFFF20;
          font-size: 0.95rem
   }
    
}

          @media screen and (max-width: 500px) { 
    font-size: 0.8rem;
    height: 2.5rem;
    width: 11rem;
    :hover {
          box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 1px #FFFFFF20;
           font-size: 0.75rem;
   }
    
}
        `
    const HomeInfo = styled.div`
            display: flex;

            justify-content: space-between;
            `
    const HomeInfoItem = styled.div`
            display: flex;
flex-direction: column;
align-items: center;
   
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

    const itemIcon = {
        fontSize: '2rem',
        alignSelf: 'center'
    }

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
                     
                                {/*  <i className="ri-draft-line" style={itemIcon}></i> */}<InfoLeft>Гарантия на работы по договору – 3 года</InfoLeft>

                      
                     

                                {/* <i className="ri-medal-2-line" style={itemIcon}></i> */} <InfoRight> Бригады под управлением опытных мастеров</InfoRight>
                   
                        </HomeInfo>
                        <HomeCallToAction>посчитать стоимость</HomeCallToAction>
                    </HomeMain>
                </HomeContent>
            </Container>
        </Home>
    )
}

export default Home
