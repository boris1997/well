import React from 'react'
import styled from 'styled-components'
import { Container, MainTitleSection } from '../styles/GlobalStyle'
import dig from '../images/dig.png'


function Services() {
    const Services = styled.div`
        display: flex;
        justify-content: space-between;
        height: 75%;
        margin-top: 5rem
        `
    const ServicesContent = styled.div`
        display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
        `
    const ServiceItemTitle = styled.h2`

        `
    const ServiceItem = styled.div`
      height: 5rem;
        `
    const ServiceItemImg = styled.img`
       height: 5rem;he
        `
    return (
        <Services>
            <Container>
                <MainTitleSection>
                    Услуги
                </MainTitleSection>
                <ServicesContent>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg src={dig}></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    {/*   <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem>
                    <ServiceItem><ServiceItemTitle></ServiceItemTitle><ServiceItemImg></ServiceItemImg></ServiceItem> */}
                </ServicesContent>
            </Container>
        </Services>
    )
}

export default Services
