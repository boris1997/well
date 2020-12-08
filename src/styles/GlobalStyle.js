import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { Link } from 'react-scroll';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 /*   color: #0C6DB2; */
   color: #ffffff;
 /*   background: #f2f8f9; */
   background: #191919;

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
/* #eff1f5 */



/* black theme*/
/* background: #191919; */
/* background: #1f2022; */


export const Container = styled.div`
max-width: 1300px;
   height: 100%;
   width: 100%;
   overflow: hidden;
   margin: auto;
`
export const Info = styled.h2`
   font-size: 1.2rem;
`
export const MainTitleSection = styled.h1`
   font-size: 2rem;
   /* color: #0C6DB2; */
   color: #ffffff;
   position: relative;
   &::before {
      content: "";
     background-color: #ffffff30;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -0.5rem;
      display: block;
      width: 100%;
      height: .5px;
    }

`

export const ServiceItemTitle = styled.h2`
    order: 2;
    margin-top: 2rem;
    align-self:center;
    font-size: 1rem;
    width: 90%;
    justify-content: center;

   @media screen and (max-width: 600px) { 
     font-size: 0.8rem;
   }
        `

export const Content = styled.div`
    height: 100%;
        display: grid;
       /*  grid-template-columns: repeat(auto-fit, minmax(220px, 420px)); */
       margin-top: 5rem;
           padding-bottom: 7rem;
       grid-template-columns: repeat(3, 1fr);
       grid-template-rows: repeat(3, 1fr);
       
       @media screen and (max-width: 1024px) { 
    grid-template-columns: repeat(2, 1fr);
}
       @media screen and (max-width: 600px) { 
    padding-left: 2rem;
    padding-right: 2rem;
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
   
}
    

grid-column-gap: 1fr;
grid-row-gap: 7.5rem;
        `

export const ItemAos = styled.div` 
justify-self: center;
`

export const Item = styled.div`
     display: flex;
     margin-top: 1rem;
     margin-bottom: 1rem;
     flex-direction: column;
    
   /*   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px #FFFFFF; */
     box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px #FFFFFF20;
     border-radius: 30px;
     height: 18rem;
     width: 14rem;
     justify-self: center;
     align-items: center;
     justify-content: center;
     transition: all 0.3s linear;
     :hover{
         transform: scale(1.1) ;
         /* box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15), -3px -3px 6px rgba(255, 255, 255, 0.85); */
         box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8), -1px -1px 2px #FFFFFF20;
     }
//      @media screen and (max-width: 1280px) { 
//            width: 50%;
//            height: 30%;
// }
//   
@media screen and (max-width: 600px) { 
  //  height: auto;
  //    width: auto;
         width: 100%;
    height: 100%;
         padding-top: 3rem;
    padding-bottom: 3rem;
     border-radius: 20px;
} 


 
        `
export const ItemTitle = styled.h2`
      order: 2;
      margin-top: 2rem;
      align-self:center;
      font-size: 1rem;
      width: 90%;
      justify-content: center;
         @media screen and (max-width: 600px) { 
     font-size: 0.8rem;
   }
    @media screen and (max-width: 400px) { 
     font-size: 0.5rem;
     text-align: center;
   }
      `

export const ItemImg = styled.img`
       height: 7rem;
           object-fit: contain;
@media screen and (max-width: 600px) { 
 height: 6rem;

} 
@media screen and (max-width: 500px) { 
 height: 5rem;

} 
@media screen and (max-width: 400px) { 
 height: 4rem;

} 

        `



/* export default { Global, Container } */