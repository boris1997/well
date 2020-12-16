import React from 'react'
import styled from 'styled-components'
import 'remixicon/fonts/remixicon.css'
import { Container } from '../styles/GlobalStyle'
/* import '../../node_modules/font-awesome/css/font-awesome.min.css'; */
import '../icons/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '../icons/react-fontawesome'
/* import { fab } from '../icons/free-brands-svg-icons'
 */import { faVk, faTelegramPlane, faWhatsapp, faOdnoklassniki } from '../icons/free-brands-svg-icons'
/* library.add(fab, faCheckSquare) */



const FooterContent = styled.div`
margin-top: 4rem;
   height: 5rem;
      width: 100%;
      display: flex;

      box-shadow: 1px 1px 1px #FFFFFF20, -2px -2px 4px rgba(0, 0, 0, 0.9);
       @media screen and (max-width: 500px) { 
height: 3rem;  
}
  `
const FooterContentItems = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 1rem;
padding-left: 1rem;
  `
const Icons = styled.div`
width: 18rem;
display: flex;
justify-content: space-between;
@media screen and (max-width: 760px) { 
           width: 15rem;
            
        }
@media screen and (max-width: 550px) { 
           width: 12rem;
            
        }
@media screen and (max-width: 500px) { 
           width: 10rem;
            
        }
@media screen and (max-width: 390px) { 
           width: 8rem;
            
        }
  `
const Logo = styled.div`
font-size: 1.5rem;
  @media screen and (max-width: 760px) { 
           font-size: 1.3rem;
            
        }
             @media screen and (max-width: 500px) { 
  font-size: 1.1rem;
}
@media screen and (max-width: 390px) { 
             font-size: 0.9rem;
            
        }
  `

const Number = styled.div`

  `
const Mail = styled.div`

  `
const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  i, svg {
    font-size: 1.5rem;
     @media screen and (max-width: 760px) { 
           font-size: 1.3rem;
            
        }
           @media screen and (max-width: 500px) { 
  font-size: 1.1rem;
}
@media screen and (max-width: 390px) { 
             font-size: 0.9rem;
            
        }
  }

  `
const Footer = () => {
  function getedYear() {
    let takeYear = new Date()
    return takeYear.getFullYear()
  }
  return (
    <FooterContent className='footer'>
      <Container>
        <FooterContentItems>
          <Logo>© {getedYear()} RusКолодец</Logo>

          {/* <i class="social-medias__item-obj ri-mail-line"></i> */}
          <Icons>
            <A href='https://vk.com/id295145627'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faVk} /></A>
            <A href='https://wa.me/89252727702'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faWhatsapp} /></A>
            <A href='https://t.me/BorisVolkov16'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faTelegramPlane} /></A>
            <A href='https://ok.ru/profile/569996122710'> <FontAwesomeIcon className='checkoutProduct__icon' icon={faOdnoklassniki} /></A>
            <A href="tel:+79202242673"><i className="ri-phone-line"></i></A>
          </Icons>
        </FooterContentItems>
        {/*   <i class="social-medias__item-obj ri-whatsapp-line"></i>
        <i class="social-medias__item-obj icon-vk"></i>
        <i class="social-medias__item-obj ri-telegram-line"></i> */}
      </Container>
    </FooterContent>
  )
}

export default Footer
