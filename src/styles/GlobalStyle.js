import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: #0C6DB2;
   background: #f2f8f9;

} 

body {
    font-family: 'Roboto', sans-serif;
}
`
/* #fafafa; */
/* #f1f1f1; */
/* #f2f7f8;; */
/* #fafafa; */
/* #f9feff; */
/* #fafaff; */
/* #f2f8f9; */

export const Container = styled.div`
   max-width: 1300px;
   height: 100%;
   width: 100%;
   overflow: hidden;
   margin: auto;
`
export const Info = styled.h2`
   font-size: 1.2rem;
   color: #0C6DB2;
`
export const MainTitleSection = styled.h1`
   font-size: 2rem;
   color: #0C6DB2;
   position: relative;
   &::before {
      content: "";
     background-color: #0C6DB2;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -0.5rem;
      display: block;
      width: 9%;
      height: 1px;
    }

`

export const ServiceItemTitle = styled.h2`
    order: 2;
    margin-top: 2rem;
    align-self:center;
    font-size: 1rem;
    width: 90%;
    justify-content: center;
        `

export const Content = styled.div`
    height: 100%;
        display: grid;
       /*  grid-template-columns: repeat(auto-fit, minmax(220px, 420px)); */
       margin-top: 5rem;
       padding-bottom: 1rem;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
@media screen and (max-width: 1024px) { 
    grid-template-columns: repeat(2, 1fr);
}

grid-column-gap: 1fr;
grid-row-gap: 7.5rem;
        `

export const Item = styled.div`
     display: flex;
     flex-direction: column;
     background:  #f2f8f9;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px #FFFFFF;
border-radius: 30px;
    height: 18rem;
    width: 14rem;
    margin-left: 25%;
    align-items: center;
    justify-content: center;

        `
export const ItemTitle = styled.h2`
      order: 2;
      margin-top: 2rem;
      align-self:center;
      font-size: 1rem;
      width: 90%;
      justify-content: center;
      `

export const ItemImg = styled.img`
       height: 7rem;
           object-fit: contain;
        `
/* export default { Global, Container } */