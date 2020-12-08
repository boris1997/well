import React from 'react'
import styled from 'styled-components'
import 'remixicon/fonts/remixicon.css'
import { Container } from '../styles/GlobalStyle'
/* import '../../node_modules/font-awesome/css/font-awesome.min.css'; */
import '../icons/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '../icons/react-fontawesome'
/* import { fab } from '../icons/free-brands-svg-icons'
 */import { faVk } from '../icons/free-brands-svg-icons'
import { faWhatsapp } from '../icons/free-brands-svg-icons'
import { faInstagram } from '../icons/free-brands-svg-icons'
import { get } from 'react-scroll/modules/mixins/scroller'
/* library.add(fab, faCheckSquare) */



function Footer() {
  const Footer = styled.div`
  margin-top: 4rem;
     height: 5rem;
        width: 100%;
        display: flex;

        box-shadow: 1px 1px 1px #FFFFFF20, -2px -2px 4px rgba(0, 0, 0, 0.9);
    `
  const FooterContent = styled.div`

    `
  const Icons = styled.div`

    `
  const Logo = styled.div`

    `
  const A = styled.a`
    cursor: pointer;
    `
  function getedYear() {
    let takeYear = new Date()
    return takeYear.getFullYear()
  }
  return (
    <Footer className='footer'>
      <Container>
        <FooterContent>
          <Logo>© {getedYear()} RusКолодец</Logo>

          {/* <i class="social-medias__item-obj ri-mail-line"></i> */}
          <Icons>
            <A> <FontAwesomeIcon className='checkoutProduct__icon' icon={faVk} /></A>
            <A> <FontAwesomeIcon className='checkoutProduct__icon' icon={faWhatsapp} /></A>
            <A> <FontAwesomeIcon className='checkoutProduct__icon' icon={faInstagram} /></A>
          </Icons>
        </FooterContent>
        {/*   <i class="social-medias__item-obj ri-whatsapp-line"></i>
        <i class="social-medias__item-obj icon-vk"></i>
        <i class="social-medias__item-obj ri-telegram-line"></i> */}
      </Container>
    </Footer>
  )
}

export default Footer
