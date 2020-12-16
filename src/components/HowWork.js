import React from 'react'
import { Container, Content, ContentGrid, Item, ItemAos, ItemTitle, MainTitleSection } from '../styles/GlobalStyle'
import 'remixicon/fonts/remixicon.css'
import styled from 'styled-components'
const ContentWork = styled(ContentGrid)`
grid-template-rows: repeat(2,1fr);
`

const HowWork = () => {

    return (
        <Content className='work'>
            <Container>
                <MainTitleSection>
                    Как мы работаем
                </MainTitleSection>

                <ContentWork>
                    <ItemAos data-aos="fade-right"
                        data-aos-offset="-370"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom">
                        <Item><ItemTitle>Вы связываетесь с нам по телефону или по почте</ItemTitle><i className="ri-phone-line"></i></Item></ItemAos>
                    {/*                     <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>
 */}                    <ItemAos data-aos="fade-right"
                        data-aos-offset="-150"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom"> <Item active><ItemTitle> Мы Вас консультируем и если Вас все устраивает — заключаем договор

                        </ItemTitle ><i className="ri-draft-line"></i></Item></ItemAos>
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
                        data-aos-anchor-placement="top-bottom">  <Item><ItemTitle>Мы доставляем все материалы на место (бесплатно) и начинаем работу</ItemTitle><i className='ri-truck-line ItemIcon' ></i></Item></ItemAos>
                    {/*                     <ItemAboutArrow><ArrowObject src={svgObg}></ArrowObject></ItemAboutArrow>
 */}                   <ItemAos data-aos="fade-right"
                        data-aos-offset="-150"
                        data-aos-delay="900"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom">   <Item><ItemTitle>Вы принимаете нашу работу, оплачиваете остаток</ItemTitle><i className='ri-thumb-up-line ItemIcon'></i></Item>
                    </ItemAos>
                </ContentWork>
            </Container>
        </Content>
    )
}

export default HowWork
