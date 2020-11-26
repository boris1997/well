import React from 'react'
import styled from 'styled-components';
/* import styled from "styled-components"; */
import { Container, Global } from '../styles/GlobalStyle';



function Navbar() {
    const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    `
    const Li = styled.li`
    list-style: none;
    `
    const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    `

    return (
        <Container>
            <NavbarContent>
                <div>Колодцы</div>
                <Ul>
                    <Li>Главная</Li>
                    <Li>Услуги</Li>
                    <Li>Примеры работ</Li>
                    <Li>О нас</Li>
                    <Li>Контакты</Li>
                </Ul>
            </NavbarContent>
        </Container>
    )
}

export default Navbar
