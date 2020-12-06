import React, { useState } from 'react'
import { Link } from 'react-scroll';
/* import { Link as LinkR } from 'react-router-dom'; */
/* import { Link as LinkS } from 'react-scroll'; */
import styled from 'styled-components';
/* import styled from "styled-components"; */
import { Container } from '../styles/GlobalStyle';
import LogoImg from '../svg/water-well.svg'


function Navbar() {
    const Navbar = styled.div`
        height: 5rem;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        z-index: 100;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 1px #FFFFFF20;
        `
/*     const NavContainer = styled(Container)`
max-width: 1350px;
padding-top: 1rem;
    ` */

    const NavbarContent = styled.div`
        height: 100%;
max-width: 1300px;
height: 95%;
margin-top: 2.5%;
margin auto;
padding-right: 1rem;
padding-left: 1rem;
border-radius: 40px;
        display: flex;
        /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px #FFFFFF; */
        

        `

    const Logo = styled.img`
    height: 3rem;

        `
    const NavbarTop = styled.div`
    flex: 1;
   display: flex;
     align-items: center;
  /*  justify-content: space-between;
   align-items: center; */
   border-radius: 40px;
        `


    const Ul = styled.ul`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
border-radius: 40px;

     font-size: 1.1rem;

 
    `
    const LinkItem = styled(Link)`
           cursor: pointer;
           position: relative;
           &:after{
           content:"";
           display:block;  
           position:absolute;
           background-color: #0C6DB2;
           background-color: #ffffff;
           width:100%;
           height: .1px;
           bottom: -3px;
           left:0;
           border-radius:.1em;
           transform:scaleX(0);
           transition:transform .3s ease;
           transform-origin:right;
        }
        
        &:visited {
            color: green;
        }
         /* &:active::after   {
             transform:scaleX(1);
             transform-origin:left;
               } */

               &:hover::after, &:active::after   {
             transform:scaleX(1);
             transform-origin:left;
               }

               &.active::after  {
                 /*   color: green; */
                          transform:scaleX(1) !important;
             transform-origin:left !important;
               }

           `




    /*     const Li = styled(LinkS)`
        list-style: none;
        ` */

    /*     const A = styled.a`
        list-style: none;
        `
     */
    const Label = styled(Link)`
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
        margin-left: 1rem;
        `
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
                <NavbarContent>
                    <NavbarTop>
                        <Logo src={LogoImg}></Logo>
                        <Label to='/'>RusКолодец</Label>
                    </NavbarTop>
                    <Ul>
                        <LinkItem to='home'
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-192}
                           /*  style={`cursor:pointer`} */
                         /*    offset={-280} */
                            /* onClick={toggleHome} */>Главная

                      </LinkItem>
                        <LinkItem to='services'
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-192}
                        /*  offset={-80} */

                        /*   primary={primary ? 1 : 0} */
                        >Услуги</LinkItem>
                        <LinkItem
                            to='about'
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-192}
                        >О нас</LinkItem>
                        <LinkItem
                            to='work'
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-192}
                        >Как мы работаем</LinkItem>
                        <LinkItem
                            to='contact'
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-192}
                        >Контакты</LinkItem>
                    </Ul>
                </NavbarContent>
            </Container>
        </Navbar>
    )
}

export default Navbar
