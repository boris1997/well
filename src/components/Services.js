import React from 'react'
import styled from 'styled-components'
import { Container, Content, Item, ItemImg, ItemTitle, MainTitleSection, ServiceItemTitle } from '../styles/GlobalStyle'
import dig from '../images/копка.png'
import water from '../images/водоснабжение.png'
import dezinfection from '../images/дезинфекция.png'
import diagnostic from '../images/диагностика.png'
import repair from '../images/ремонт.png'
import septics from '../images/септики.png'
import trenches from '../images/траншеи.png'
import toilets from '../images/установка дачных туалетов.png'
import cleaning from '../images/чистка.png'


function Services() {
    const Services = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 12rem
        `


    /*   const ServiceItemTitle = styled.h2`
      order: 2;
      margin-top: 2rem;
      align-self:center;
      font-size: 1rem;
      width: 90%;
      justify-content: center;
          ` */


    return (
        <Services>
            <Container>
                <MainTitleSection>
                    Услуги
                </MainTitleSection>
                <Content>
                    <Item><ItemTitle>Копка колодцев от 4500 рублей</ItemTitle><ItemImg src={dig}></ItemImg></Item>
                    <Item><ItemTitle>установка дачных туалетов
                    от 4500 рублей
                    </ItemTitle><ItemImg src={water}></ItemImg></Item>
                    <Item><ItemTitle>Водоснабжение
                    от 4500 рублей

                    </ItemTitle><ItemImg src={dezinfection}></ItemImg></Item>
                    <Item><ItemTitle>Диагностика колодцев
                    от 4500 рублей

                    </ItemTitle><ItemImg src={diagnostic}></ItemImg></Item>
                    <Item><ItemTitle>Ремонт колодцев от 5000 рублей
                    </ItemTitle><ItemImg src={repair}></ItemImg></Item>
                    <Item><ItemTitle></ItemTitle><ItemImg src={septics}></ItemImg></Item>
                    <Item><ItemTitle></ItemTitle><ItemImg src={trenches}></ItemImg></Item>
                    <Item><ItemTitle></ItemTitle><ItemImg src={toilets}></ItemImg></Item>
                    <Item><ItemTitle>Чистка колодцев от 5000 рублей
                    </ItemTitle><ItemImg src={cleaning}></ItemImg></Item>

                </Content>
            </Container>
        </Services>
    )
}

export default Services
