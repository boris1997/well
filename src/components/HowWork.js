import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Content, ContentGrid, Item, ItemAos, ItemImg, ItemTitle, MainTitleSection } from '../styles/GlobalStyle'
import svgObg from '../svg/right-arrow (2).svg'
import 'remixicon/fonts/remixicon.css'
function HowWork() {

    /* const [active, setActive] = useState() */


    const ArrowObject = styled.img`
    
        width: 100px;
        `


    const ContentHow = styled(ContentGrid)`
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(1,1fr);
  
    @media screen and (max-width: 1024px) { 
    grid-template-columns: repeat(2, 1fr);
     grid-row-gap:5.5rem;
}
    @media screen and (max-width: 500px) { 
     grid-row-gap:2.5rem;
}
    `

    /*     const ItemAboutArrow = styled(ItemAbout)`
      box-shadow: none;
        ` */






    const ItemAboutHidden = styled(Item)`
    visibility: hidden;
    height: 0;
    `


    const itemIcon = {
        fontSize: '5rem'
    }


    return (
        <Content className='work'>
            <Container>

                <MainTitleSection>
                    Как мы работаем
                </MainTitleSection>

                <ContentHow>
                    <ItemAos data-aos="fade-right"
                        data-aos-offset="-370"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom">
                        <Item><ItemTitle>Вы связываетесь с нам по телефону или по почте</ItemTitle><i className="ri-phone-line" style={itemIcon}></i></Item></ItemAos>
                    {/*                     <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>
 */}                    <ItemAos data-aos="fade-right"
                        data-aos-offset="-150"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom"> <Item active><ItemTitle> Мы Вас консультируем и если Вас все устраивает — заключаем договор

                        </ItemTitle ><i className="ri-draft-line" style={itemIcon}></i></Item></ItemAos>
                    {/*                     <ItemAboutHidden></ItemAboutHidden>
                    <ItemAboutHidden></ItemAboutHidden> */}

                    {/*                     <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>
 */}
                    <ItemAos data-aos="fade-right"
                        data-aos-offset="-150"
                        data-aos-delay="600"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom">  <Item><ItemTitle>Мы доставляем все материалы на место (бесплатно) и начинаем работу</ItemTitle><i className='ri-truck-line ItemIcon' style={itemIcon}></i></Item></ItemAos>
                    {/*                     <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>
 */}                   <ItemAos data-aos="fade-right"
                        data-aos-offset="-150"
                        data-aos-delay="900"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom">   <Item><ItemTitle>Вы принимаете нашу работу, оплачиваете остаток</ItemTitle><i className='ri-thumb-up-line ItemIcon' style={itemIcon}></i></Item>
                    </ItemAos>

                </ContentHow>

            </Container>
        </Content>
    )
}

export default HowWork
