import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: #0C6DB2;
} 

body {
    font-family: 'Roboto', sans-serif;
}
`

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
   font-size: 1.5rem;
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
      width: 6%;
      height: 1px;
    }

`

/* export default { Global, Container } */