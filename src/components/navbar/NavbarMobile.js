import React, { useState } from 'react'
import styled from 'styled-components'
import Humburger from './Humburger'
import NavbarSidebar from './NavbarSidebar'
import NavbarLogo from './NavbarLogo'


const NavbarMobileContent = styled.div` 
display: none;
@media screen and (max-width: 760px) {

     align-items: center;
    height: 100%;
    width: 100%;
padding-right: 1rem;
padding-left: 1rem;
   display: flex;
    .menu-mobile {
        /*   background-color: #58; */
    }
}


`
function NavbarMobile() {
    const [status, setStatus] = useState('')
    console.log(useState())
    /* const removeMobileMenu = () => setStatus('') */
    return (

        <NavbarMobileContent  >
            <NavbarLogo />
            <Humburger status={status} setStatus={setStatus} />
            <NavbarSidebar status={status} setStatus={setStatus} />
        </NavbarMobileContent>

    )
}

export default NavbarMobile
