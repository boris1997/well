import React from 'react'
import styled from 'styled-components'
import { Container, Content, Item, ItemImg, ItemTitle, MainTitleSection } from '../styles/GlobalStyle'
import 'remixicon/fonts/remixicon.css'
function AboutUs() {

    const AboutUs = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 12rem
        `

    const ContentAbout = styled(Content)`

grid-template-rows: repeat(2, 1fr);
@media screen and (max-width: 1024px) { 
    grid-template-columns: repeat(2, 1fr);
}
`
    const ItemAbout = styled(Item)`
    width: 15rem;
    height: 15rem;
    border-radius: 1000px;
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
        <AboutUs>
            <Container>

                <MainTitleSection>
                    О нас
                </MainTitleSection>

                <ContentAbout>
                    <ItemAbout><ItemTitleAbout>Работаем в этой сфере более 10 лет</ItemTitleAbout><i class="ri-medal-2-line" style={itemIcon}></i></ItemAbout>
                    <ItemAbout><ItemTitleAbout>Лидеры в сфере оказания услуг по обслуживанию колодцев
                        </ItemTitleAbout><i class="ri-line-chart-line" style={itemIcon}></i></ItemAbout>
                    <ItemAbout><ItemTitleAbout>Работаем по договору, даем гарантии

                        </ItemTitleAbout><i class="ri-draft-line" style={itemIcon}></i></ItemAbout>
                    <ItemAbout><ItemTitleAbout>Максимальный результат, за короткое время
                        </ItemTitleAbout><i class="ri-time-line " style={itemIcon}></i></ItemAbout>
                    <ItemAbout><ItemTitleAbout>Cовременные технические средства</ItemTitleAbout><i class="ri-flask-line " style={itemIcon}></i></ItemAbout>
                    <ItemAbout><ItemTitleAbout>Всегда на связи, готовы принять заказ</ItemTitleAbout><i className='ri-customer-service-line ItemIcon' style={itemIcon}></i></ItemAbout>


                </ContentAbout>

            </Container>
        </AboutUs>
    )
}

export default AboutUs
