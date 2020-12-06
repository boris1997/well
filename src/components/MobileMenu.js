import React from 'react'
import styled from 'styled-components'

function MobileMenu() {
    const MobileMenu = styled.section`
        display none;
        @media screen and (max-width: 540px) {
  .menu-mobile {
    background-color: #581b98;
    color: #f9f6fb;
    font-weight: 100;
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 7rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
        `

    const MobileMenuContent = styled.div` 
        height: 100%;
    width: 100%;
     display: flex;
     justify-content: space-between;
     `
    const MobileMenuItem = styled.div` 
     display: flex;
     height: 100%;
    cursor: pointer;    
    flex-direction: column;
    justify-content: space-evenly;
       align-items: center;
    `
    const Span = styled.span` 

    `

    return (
        <MobileMenu>
            <MobileMenuContent>
                <MobileMenuItem>
                    <i
                        className="menu-mobile__item-object ri-home-5-fill menu-mobile__item-object_active "></i>
                    <Span>Главная</Span> </MobileMenuItem>
                <MobileMenuItem><i className="menu-mobile__item-object ri-code-s-slash-line"></i><Span>Проекты</Span>
                </MobileMenuItem>
                <MobileMenuItem><i className="menu-mobile__item-object ri-tools-line"></i><Span>Навыки</Span> </MobileMenuItem>
                <MobileMenuItem><i className="menu-mobile__item-object ri-message-line"></i><Span>Обратная
          связь</Span></MobileMenuItem>
            </MobileMenuContent>
        </MobileMenu>
    )
}

export default MobileMenu
