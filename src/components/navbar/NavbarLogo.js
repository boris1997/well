import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import LogoImg from '../../svg/water-well.svg'

const NavbarLogoContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    border-radius: 40px;
   `
const LogoLink = styled(Link)`
    cursor: pointer;
    display: flex;
    align-items: center;
 `

const Logo = styled.img`
   height: 3rem;
   @media screen and (max-width: 500px) { 
 height: 2rem;
  }

        `

const Label = styled.title`
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
        margin-left: 1rem;
        @media screen and (max-width: 500px) { 
              font-size: 1.5rem;
  }
        `
const NavbarLogo = () => {
    return (
        <NavbarLogoContent>
            <LogoLink
                to='home'
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-200} >

                <Logo src={LogoImg} alt='siteLogo'></Logo>
                <Label>RusКолодец</Label>
            </LogoLink>
        </NavbarLogoContent>
    )
}

export default NavbarLogo
