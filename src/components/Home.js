import React from 'react'
import styled from 'styled-components'
import { Container, Content, Info } from '../styles/GlobalStyle'
import Well from '../images/Well.png'
import { Link } from 'react-scroll'
import { faVk, faTelegramPlane, faWhatsapp, faOdnoklassniki } from '../icons/free-brands-svg-icons'
import { FontAwesomeIcon } from '../icons/react-fontawesome'
import 'remixicon/fonts/remixicon.css'

const HomeContent = styled(Content)`
@media screen and (max-width: 760px) {
    margin-top: 10rem;
} @media screen and (max-width: 500px) { 
margin-top: 6rem;
}
`

const HomeContentItems = styled.div`
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
const HomeCallToAction = styled(Link)`

    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
background: transparent;
position: relative;
font-size: 1.2rem;
cursor: pointer;
height: 3rem;
width: 16rem;
/*  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px #FFFFFF; */
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 1px #FFFFFF20;
:hover {
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 1px #FFFFFF20;
      font-size: 1.15rem
}
      @media screen and (max-width: 950px) { 
font-size: 1rem;
height: 2.5rem;
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
const HomeAction = styled.div`
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
        height: 9.5rem;
        justify-content: space-between;
   @media screen and (max-width: 950px) { 
     height: 8.5rem;
    }
   @media screen and (max-width: 500px) { 
     height: 7.5rem;
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

const A = styled.a`
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.9), -1px -1px 1px #FFFFFF20;
    border-radius: 1000px;
    display: flex;
    width: 3rem;
    height: 3rem;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    i, svg {
        font-size: 1.3rem;
    }
    :hover {
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 1px #FFFFFF20;
      i, svg {
           font-size: 1.2rem;

       }
}
   @media screen and (max-width: 950px) { 
           width: 2.5rem;
    height: 2.5rem;
      i, svg {
        font-size: 1.1rem;
    }
    :hover { 
         i, svg {font-size: 1rem;}
    }

    
       }

    `
const Home = () => {

    return (
        <HomeContent className='home'>
            <Container>
                <HomeContentItems>
                    <WellImg>
                        <WellImgContent alt='колодец' src={Well}></WellImgContent>
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
                        <HomeAction>

                            <HomeSocMedia>
                                <A href='https://vk.com/id295145627'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faVk} /></A>
                                <A href='https://wa.me/89252727702'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faWhatsapp} /></A>
                                <A href='https://t.me/BorisVolkov16'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faTelegramPlane} /></A>
                                <A href='https://ok.ru/profile/569996122710'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faOdnoklassniki} /></A>
                                <A href="tel:+79202242673"><i className="ri-phone-line"></i></A>
                            </HomeSocMedia>
                            <HomeCallToAction
                                to='contact'
                                activeClass="active"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-100}
                            >посчитать стоимость</HomeCallToAction>

                        </HomeAction>
                    </HomeMain>
                </HomeContentItems>
            </Container>
        </HomeContent>
    )
}

export default Home
