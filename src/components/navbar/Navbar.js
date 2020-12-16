import React from 'react'

/* import { Link as LinkR } from 'react-router-dom'; */
/* import { Link as LinkS } from 'react-scroll'; */
import styled from 'styled-components';
/* import styled from "styled-components"; */
import { Container } from '../../styles/GlobalStyle';
import NavbarMobile from './NavbarMobile';
import NavbarPc from './NavbarPc';


const NavbarContent = styled.div`
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

const Navbar = () => {
    
    return (
        <NavbarContent>
            <Container>
                <NavbarPc />
                <NavbarMobile />
            </Container>
        </NavbarContent>
    )
}

export default Navbar
