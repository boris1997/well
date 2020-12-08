import React from 'react'
import styled from 'styled-components'
import { Container, Content, Item, ItemImg, ItemTitle, MainTitleSection } from '../styles/GlobalStyle'
import 'remixicon/fonts/remixicon.css'
import { ItemAosFourth, ItemAosThird } from './Services'
function AboutUs() {

    const AboutUs = styled.section`
        margin-top: 8rem
        `

    const ContentAbout = styled(Content)`

grid-template-rows: repeat(2, 1fr);
grid-row-gap: 5.3rem;
@media screen and (max-width: 1024px) { 
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.5rem;
}



@media screen and (max-width: 600px) { 
    grid-template-rows: repeat(2, 1fr);
}
@media screen and (max-width: 490px) { 
   grid-template-rows: repeat(2, 0.8fr);
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
            @media screen and (max-width: 600px) { 
       width: 14rem;
        height: 14rem;
    }
            @media screen and (max-width: 550px) { 
       width: 12rem;
        height: 12rem;
    }
    @media screen and (max-width: 490px) { 
       width: 10rem;
        height: 10rem;
   
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
           @media screen and (max-width: 600px) { 
   width: 12.25rem;
    height: 12.25rem;
}
  @media screen and (max-width: 550px) { 
       width: 10.5rem;
        height: 10.5rem;
        i {
            font-size: 4rem !important;
        }
    }
  @media screen and (max-width: 490px) { 
       width: 8.7rem;
        height: 8.7rem;
    i {
            font-size: 3rem !important;
        }
    }
 
    `
    const itemIcon = {
        fontSize: '5rem'

    }

    const ItemAos = styled.div`

    justify-self: center;
  /*    @media screen and (max-width: 490px) { 
     /*   width: 10rem;
        height: 10rem; */
   
    } */
    `
    const ItemAosAboutThird = styled(ItemAosThird)`
       @media screen and (max-width: 490px) { 
       width: auto ;
        height: 12rem !important;
    }
    `
    const ItemAosAboutFourth = styled(ItemAosFourth)`
       @media screen and (max-width: 490px) { 
       width: auto ;
        height: 12rem !important;
    }
    `



    const ItemTitleAbout = styled(ItemTitle)`
    border-radius: 1000px;
    width: 60%;
    text-align: center;
     @media screen and (max-width: 550px) { 
 font-size: 0.6rem;
        margin-top: 1rem;
    }
     @media screen and (max-width: 490px) { 
 font-size: 0.5rem;
       
    }

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
                    <ItemAosAboutThird data-aos="fade-up"
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
                    </ItemAosAboutThird>
                    <ItemAosAboutFourth data-aos="fade-up"
                        data-aos-offset="-270"
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
                    </ItemAosAboutFourth>
                    <ItemAosAboutThird data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="150"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <ItemAbout>
                            <ItemAboutInner>
                                <ItemTitleAbout>Cовременные технические средства</ItemTitleAbout><i className="ri-flask-line " style={itemIcon}></i>
                            </ItemAboutInner></ItemAbout></ItemAosAboutThird>
                    <ItemAosAboutFourth data-aos="fade-up"
                        data-aos-offset="-270"
                        data-aos-delay="300"
                        data-aos-duration="700"
                        data-aos-easing="linear"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"><ItemAbout>
                            <ItemAboutInner>
                                <ItemTitleAbout>Всегда на связи, готовы принять заказ</ItemTitleAbout><i className='ri-customer-service-line ItemIcon' style={itemIcon}></i>
                            </ItemAboutInner></ItemAbout></ItemAosAboutFourth>


                </ContentAbout>

            </Container>
        </AboutUs >
    )
}

export default AboutUs
