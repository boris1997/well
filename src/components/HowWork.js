import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Content, Item, ItemImg, ItemTitle, MainTitleSection } from '../styles/GlobalStyle'
import svgObg from '../svg/right-arrow (2).svg'
import 'remixicon/fonts/remixicon.css'
function HowWork() {

    /* const [active, setActive] = useState() */

    const HowWork = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 12rem
        `
    const ArrowObject = styled.img`
    
        width: 100px;
        `

    const ItemAbout = styled(Item)`
    width: 15rem;
    height: 15rem;
    border-radius: 1000px;
    `
    const ContentHow = styled(Content)`
    grid-row-gap: 0.5rem;
    `

    const ItemAboutArrow = styled(ItemAbout)`
    width: 15rem;
    height: 15rem;
  box-shadow: none;
    `

    const ItemAboutHidden = styled(Item)`
    visibility: hidden;
    `


    const itemIcon = {
        fontSize: '5rem'
    }


    const ItemTitleAbout = styled(ItemTitle)`
    border-radius: 1000px;
    width: 60%;
    text-align: center;
    `

    return (
        <HowWork>
            <Container>

                <MainTitleSection>
                    Как мы работаем
                </MainTitleSection>

                <ContentHow>
                    <ItemAbout><ItemTitleAbout>Вы связываетесь с нам по телефону или по почте</ItemTitleAbout><i class="ri-medal-2-line" style={itemIcon}></i></ItemAbout>
                    <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>
                    <ItemAbout active><ItemTitleAbout> Мы Вас консультируем и если Вас все устраивает — заключаем договор

                        </ItemTitleAbout ><i class="ri-draft-line" style={itemIcon}></i></ItemAbout>
                    <ItemAboutHidden></ItemAboutHidden>
                    <ItemAboutHidden></ItemAboutHidden>

                    <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>

                    <ItemAbout><ItemTitleAbout>Мы доставляем все материалы на место (бесплатно) и начинаем работу</ItemTitleAbout><i className='ri-customer-service-line ItemIcon' style={itemIcon}></i></ItemAbout>
                    <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>
                    <ItemAbout><ItemTitleAbout>Вы принимаете нашу работу, оплачиваете остаток</ItemTitleAbout><i className='ri-customer-service-line ItemIcon' style={itemIcon}></i></ItemAbout>


                </ContentHow>

            </Container>
        </HowWork>
    )
}

export default HowWork
