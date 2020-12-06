import React from 'react'
import styled from 'styled-components'
import { Container, Content, Item, ItemImg, ItemTitle, MainTitleSection } from '../styles/GlobalStyle'
import 'remixicon/fonts/remixicon.css'
function AboutUs() {

    const AboutUs = styled.section`
        margin-top: 8rem
        `

    const ContentAbout = styled(Content)`

grid-template-rows: repeat(2, 1fr);
@media screen and (max-width: 1024px) { 
    grid-template-columns: repeat(2, 1fr);
}
`
    const ItemAbout = styled(Item)`
    width: 16rem;
    height: 16rem;
    border-radius: 1000px;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 2px #FFFFFF20;
     justify-content: center;
     :hover{
       /*   transform: scale(1.1); */
       transform: scale(1);
        /*  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0), -4px -4px 8px rgba(255, 255, 255, 0); */
        /* box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 2px #FFFFFF20; */
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 2px #FFFFFF20;
     } 
 
    `
    const ItemAboutInner = styled(ItemAbout)`
    margin-top: 0;
    width: 14rem;
    height: 14rem;
    margin-bottom:0;
    /* box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.10), inset -2px -2px 4px rgba(255, 255, 255, 1); */
         box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px #FFFFFF20;

     :hover{
        /*  transform: scale(1.1); */
         transform: scale(1.11);
         /* box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8); */
              box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.9),  -1px -1px 2px #FFFFFF20;

     }
 
    `
    const itemIcon = {
        fontSize: '5rem'
    }

    const ItemAos = styled.div`
    height: 14rem;
    width: 14rem;
    justify-self: center;`


    const ItemTitleAbout = styled(ItemTitle)`
    border-radius: 1000px;
    width: 60%;
    text-align: center;
    `

    return (
        <AboutUs className='about'>
            <Container>

                <MainTitleSection>
                    О нас
                </MainTitleSection>

                <ContentAbout>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <ItemAbout><ItemAboutInner><ItemTitleAbout>Работаем в этой сфере более 10 лет</ItemTitleAbout><i className="ri-medal-2-line" style={itemIcon}></i></ItemAboutInner> </ItemAbout>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <ItemAbout><ItemAboutInner><ItemTitleAbout>Лидеры в сфере услуг по обслуживанию колодцев
                        </ItemTitleAbout><i className="ri-line-chart-line" style={itemIcon}></i></ItemAboutInner></ItemAbout>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <ItemAbout> <ItemAboutInner>
                            <ItemTitleAbout>Работаем по договору, даем гарантии

                        </ItemTitleAbout><i className="ri-draft-line" style={itemIcon}></i></ItemAboutInner></ItemAbout>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-370"
                        data-aos-delay="0"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <ItemAbout>
                            <ItemAboutInner>
                                <ItemTitleAbout>Максимальный результат, за короткое время
                        </ItemTitleAbout><i className="ri-time-line " style={itemIcon}></i>
                            </ItemAboutInner></ItemAbout>
                    </ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-370"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <ItemAbout>
                            <ItemAboutInner>
                                <ItemTitleAbout>Cовременные технические средства</ItemTitleAbout><i className="ri-flask-line " style={itemIcon}></i>
                            </ItemAboutInner></ItemAbout></ItemAos>
                    <ItemAos data-aos="fade-up"
                        data-aos-offset="-370"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"><ItemAbout>
                            <ItemAboutInner>
                                <ItemTitleAbout>Всегда на связи, готовы принять заказ</ItemTitleAbout><i className='ri-customer-service-line ItemIcon' style={itemIcon}></i>
                            </ItemAboutInner></ItemAbout></ItemAos>


                </ContentAbout>

            </Container>
        </AboutUs >
    )
}

export default AboutUs
