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
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
    AOS.init();

    const Services = styled.section`
        display: flex;
        justify-content: space-between;
        margin-top: 12rem
        `
    const ItemAos = styled.div`
    height: 18rem;
    width: 14rem;
    justify-self: center;`

    /*   const ServiceItemTitle = styled.h2`
      order: 2;
      margin-top: 2rem;
      align-self:center;
      font-size: 1rem;
      width: 90%;
      justify-content: center;
          ` */
    /*     const hover = () => {
    
        }
     */

    return (
        <Services className='services'>
            <Container>
                <MainTitleSection>
                    Услуги
                </MainTitleSection>
                <Content>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item
                        ><ItemTitle>Копка колодцев от 4500 рублей</ItemTitle><ItemImg src={dig}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">

                        <Item
                        ><ItemTitle>установка дачных туалетов
                        от 4500 рублей
                    </ItemTitle><ItemImg src={water}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">

                        <Item ><ItemTitle>Водоснабжение
                        от 4500 рублей

                    </ItemTitle><ItemImg src={dezinfection}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Диагностика колодцев
                        от 4500 рублей

                    </ItemTitle><ItemImg src={diagnostic}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Ремонт колодцев от 5000 рублей
                    </ItemTitle><ItemImg src={repair}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Траншеи от 800 рублей за погонный метр</ItemTitle><ItemImg src={trenches}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Домики на колодца (монтаж и демонтаж) </ItemTitle><ItemImg src={toilets}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Чистка колодцев от 5000 рублей
                    </ItemTitle><ItemImg src={cleaning}></ItemImg></Item>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item ><ItemTitle>Септики под ключ от 4500 рублей</ItemTitle><ItemImg src={septics}></ItemImg></Item>
                    </ItemAos>
                </Content>
            </Container>
        </Services>
    )
}

export default Services
