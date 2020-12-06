import React from 'react'
import styled from 'styled-components'
import 'remixicon/fonts/remixicon.css'
import { Container } from '../styles/GlobalStyle'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



function Footer() {
  const Footer = styled.div`
  margin-top: 4rem;
     height: 5rem;
        width: 100%;
        display: flex;

        box-shadow: 1px 1px 1px #FFFFFF20, -2px -2px 4px rgba(0, 0, 0, 0.9);
    `

  return (
    <Footer className='footer'>
      <Container>

        {/* <i class="social-medias__item-obj ri-mail-line"></i> */}
        <FontAwesomeIcon className='checkoutProduct__icon' icon={faChevronDown} />
        <i class="social-medias__item-obj ri-whatsapp-line"></i>
        <i class="social-medias__item-obj icon-vk"></i>
        <i class="social-medias__item-obj ri-telegram-line"></i>
      </Container>
    </Footer>
  )
}

export default Footer
