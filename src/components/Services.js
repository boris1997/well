import React from 'react'
import styled from 'styled-components'
import { Container, Content, ContentGrid, Item, ItemAos, ItemImg, ItemTitle, MainTitleSection, ServiceItemTitle } from '../styles/GlobalStyle'
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



export const ItemAosThird = styled(ItemAos)`
justify-self: center;
 @media screen and (max-width: 1028px) { 
     transition-delay: 0s !important;
}
 @media screen and (max-width: 600px) { 
//   width: auto;
//   height:  auto;
 /*   width: 100%;
    height: 100%; */
// } 
@media screen and (max-width: 500px) { 
/*  height:  auto;
    height: 14rem; */
    
}

 `
export const ItemAosFourth = styled(ItemAos)`
justify-self: center;
 @media screen and (max-width: 1028px) { 
     transition-delay: 0.15s !important;
}
@media screen and (max-width: 500px) { 
 
  /*   height: 14rem; */
    
}

 `
const Services = () => {
    AOS.init();


    return (
        <Content className='services'>
            <Container>
                <MainTitleSection>
                    Услуги
                </MainTitleSection>
                <ContentGrid>

                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item
                        ><ItemTitle>Копка колодцев от 4500 рублей</ItemTitle><ItemImg src={dig} alt='Копка колодцев'></ItemImg></Item>
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
                    </ItemTitle><ItemImg src={water} alt='установка дачных туалетов'></ItemImg></Item>
                    </ItemAos>
                    <ItemAosThird data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay='300'
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">

                        <Item ><ItemTitle>Водоснабжение
                        от 4500 рублей

                    </ItemTitle><ItemImg src={dezinfection} alt='Водоснабжение'></ItemImg></Item>
                    </ItemAosThird>
                    <ItemAosFourth data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Диагностика колодцев
                        от 4500 рублей

                    </ItemTitle><ItemImg src={diagnostic} alt='Диагностика колодцев'></ItemImg></Item>
                    </ItemAosFourth>
                    <ItemAosThird data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Ремонт колодцев от 5000 рублей
                    </ItemTitle><ItemImg src={repair} alt='Ремонт колодцев'></ItemImg></Item>
                    </ItemAosThird>
                    <ItemAosFourth data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Траншеи от 800 рублей за погонный метр</ItemTitle><ItemImg src={trenches} alt='Траншеи'></ItemImg></Item>
                    </ItemAosFourth>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item><ItemTitle>Домики на колодца (монтаж и демонтаж) </ItemTitle><ItemImg src={toilets} alt='Домики на колодца'></ItemImg></Item>
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
                    </ItemTitle><ItemImg src={cleaning} alt='Чистка колодцев'></ItemImg></Item>
                    </ItemAos>
                    <ItemAosThird data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <Item ><ItemTitle>Септики под ключ от 4500 рублей</ItemTitle><ItemImg src={septics} alt='Септики под ключ'></ItemImg></Item>
                    </ItemAosThird>
                </ContentGrid>
            </Container>
        </Content>
    )
}

export default Services
