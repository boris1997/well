import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
/* import LogoImg from '../svg/water-well.svg' */

import NavbarLogo from './NavbarLogo'

const NavbarPcContent = styled.div`
    height: 100%;

padding-right: 1rem;
padding-left: 1rem;
    display: flex;
    /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px #FFFFFF; */
    
    @media screen and (max-width: 760px) { 
    display: none;
    
    }
    
    `





const Ul = styled.div`
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
       height: .5px;
       bottom: -3px;
       left:0;
       opacity: 0.7;
       border-radius:.1em;
       transform:scaleX(0);
       transition:transform .3s ease;
       transform-origin:right;
    }
    
    &:visited {
        color: green;
    }
     

           &:hover::after, &:active::after   {
         transform:scaleX(1);
         transform-origin:left;
           }

           &.active::after  {
             /*   color: green; */
                      transform:scaleX(1) !important;
         transform-origin:left !important;
           }

@media screen and (max-width: 950px) {
   font-size: 1rem;
}
@media screen and (max-width: 870px) {
   font-size: 0.8rem;
}

       `
const NavbarPc = () => {

    return (
        <NavbarPcContent>
            <NavbarLogo />
            <Ul>
                <LinkItem to='home'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-200}>Главная

                      </LinkItem>
                <LinkItem to='services'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-100}
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
                    offset={-100}
                >О нас</LinkItem>
                <LinkItem
                    to='work'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-100}
                >Как мы работаем</LinkItem>
                <LinkItem
                    to='contact'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-100}
                >Контакты</LinkItem>
            </Ul>
        </NavbarPcContent>
    )
}

export default NavbarPc
