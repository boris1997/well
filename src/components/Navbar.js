import React from 'react'
import styled from 'styled-components';
/* import styled from "styled-components"; */
import { Container } from '../styles/GlobalStyle';



function Navbar() {
    const Navbar = styled.div`
        height: 15%;
        display: flex;
        flex-direction: column;
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

  /*   const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    ` */

    return (
        <Navbar>
            <Container>
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
            </Container>
        </Navbar>
    )
}

export default Navbar
