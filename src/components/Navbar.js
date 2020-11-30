import React from 'react'
import styled from 'styled-components';
/* import styled from "styled-components"; */
import { Container } from '../styles/GlobalStyle';



function Navbar() {
    const Navbar = styled.div`
        height: 7rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        `
    const NavbarTop = styled.div`
   height: 50%;
   display: flex;
   justify-content: space-between;
   align-items: center;
        `


    const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
     height: 50%;
     font-size: 1.1rem;
    `

    const Li = styled.li`
    list-style: none;
    `

    const A = styled.a`
    list-style: none;
    `

    const Label = styled.div`
    display: flex;
    justify-content: space-between;
    `
    /* 
        console.log(Container)
        console.log(Container.componentStyle) */

    const RelativeContainer = styled(Container)`
    position: relative;
     &:after {
    position: absolute;
    content: "";
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background-color: #0C6DB2;
  }
`;
    /*   Container = styled.div`
      position: relative;
      ` */



    /*   const NavbarContent = styled.div`
      display: flex;
      justify-content: space-between;
      ` */

    return (
        <Navbar>
            <RelativeContainer>
                <NavbarTop>
                    <Label>Колодцы</Label>
                </NavbarTop>
                <Ul>
                    <Li><A>Главная</A></Li>
                    <Li><A>Услуги</A></Li>
                    <Li><A>Примеры работ</A></Li>
                    <Li><A>О нас</A></Li>
                    <Li><A>Контакты</A></Li>
                </Ul>
            </RelativeContainer>
        </Navbar>
    )
}

export default Navbar
