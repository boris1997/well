import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
} 

body {
    font-family: "fibre-font-extended";
}
`

export const Container = styled.div`
   max-width: 1300px;
   height: 100%;
   overflow: hidden;
   margin: auto;
`


/* export default { Global, Container } */