import React, { useState } from 'react'
import styled from 'styled-components'
import Humburger from './Humburger'
import MobileMenuContentInner from './MobileMenuContentInner'
import NavbarLogo from './NavbarLogo'








/*     const setStatus = () => {
    console.log('ok')
    console.log('ok')
} */

/*  const setActive =()=> {
    console.log('ok')
} */

const MobileMenuContent = styled.div` 
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

    /* const removeMobileMenu = () => setStatus('') */
    return (

        <MobileMenuContent  >
            <NavbarLogo />
            <Humburger status={status} setStatus={setStatus} />

            {/*    <MobileMenuTransparent onClick={removeMobileMenu}></MobileMenuTransparent> */}
            <MobileMenuContentInner status={status} setStatus={setStatus} />

        </MobileMenuContent>

    )
}

export default NavbarMobile
