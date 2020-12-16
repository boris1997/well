import React from 'react'
import styled from 'styled-components'

const HumburgerContent = styled.div` 
position: relative;
cursor: pointer;
transition: all 0.5s ease;
width: 2rem;
height: 1.5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
  @media screen and (max-width: 500px) { 
 height: 1rem;
 width: 1.5rem;
  }
/*    z-index: 6; */



:hover>:nth-child(1) {
    width: 125%;
    right: 0;
}
:hover>:nth-child(2){
    width: 75%;
    right: 0;
}
:hover>:nth-child(3){
    width: 50%;
    right: 0;
}
`

const HumburgerContentLine = styled.div`
transition: all .4s ease;

width: 100%;
height: 3.5px;
background-color: #ffffff;
border-radius: 5px;
@media screen and (max-width: 500px) { 
height: 2.5px;
  }

}

`
const Humburger = ({ status, setStatus }) => {

    const showMobileMenu = () => {
        console.log(status)
        setStatus('active')
    }
    
    return (
        <HumburgerContent onClick={showMobileMenu}>
            <HumburgerContentLine ></HumburgerContentLine>
            <HumburgerContentLine ></HumburgerContentLine>
            <HumburgerContentLine ></HumburgerContentLine>
        </HumburgerContent>

    )
}

export default Humburger





//     &: before{
//     content: "";
//     position: absolute;
//     background - color: #ffffff;
//     height: 3.5px;
//     width: 100 %;;
//     transition: all .6s linear;
//     right: 0;
//     border - radius: 5px;
//     top: -0.6rem;
// }
// &: after{
//     content: "";
//     position: absolute;
//     background - color: #ffffff;
//     height: 3.5px;
//     width: 100 %;
//     transition: all .6s linear;
//     right: 0;
//     border - radius: 5px;
//     top: 0.6rem;
// }