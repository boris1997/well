import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import LogoImg from '../../svg/water-well.svg'

const NavbarLogoContent = styled.div`
    flex: 1;
   display: flex;
     align-items: center;
  /*  justify-content: space-between;
   align-items: center; */
   border-radius: 40px;
   `
   
   const Logo = styled.img`
   height: 3rem;
   @media screen and (max-width: 500px) { 
 height: 2rem;
  }

        `

const Label = styled(Link)`
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
        margin-left: 1rem;
        @media screen and (max-width: 500px) { 
              font-size: 1.5rem;
  }
        `
function NavbarLogo() {
    return (
        <NavbarLogoContent>
            <Logo src={LogoImg}></Logo>
            <Label to='/'>RusКолодец</Label>
        </NavbarLogoContent>
    )
}

export default NavbarLogo
