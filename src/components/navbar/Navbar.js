import React from 'react'

/* import { Link as LinkR } from 'react-router-dom'; */
/* import { Link as LinkS } from 'react-scroll'; */
import styled from 'styled-components';
/* import styled from "styled-components"; */
import { Container } from '../../styles/GlobalStyle';
import NavbarMobile from './NavbarMobile';
import NavbarPc from './NavbarPc';



function Navbar() {
    const Navbar = styled.div`
        height: 5rem;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        z-index: 5;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 1px #FFFFFF20;
         @media screen and (max-width: 500px) { 
 height: 3rem;
  }
        `
    /*     const NavContainer = styled(Container)`
    max-width: 1350px;
    padding-top: 1rem;
        ` */


    /* 
        console.log(Container)
        console.log(Container.componentStyle) */


    /*   Container = styled.div`
      position: relative;
      ` */



    /*   const NavbarContent = styled.div`
      display: flex;
      justify-content: space-between;
      ` */
    /*  const toggleHome */

    /*     const [scrollNav, setScrollNav] = useState(false)
    
        const changeNav = () => {
            if (window.scrollY >= 80)
         } */

    return (
        <Navbar>
            <Container>
                <NavbarPc />
                <NavbarMobile />
            </Container>
        </Navbar>
    )
}

export default Navbar
