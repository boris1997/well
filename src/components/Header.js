import React from 'react'
import styled from 'styled-components'
import Home from './Home'
import Navbar from './Navbar'

function Header() {
    const Header = styled.div`
        height: 41rem;
        position: relative;
       
        &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: -5.6rem;
      left: -1rem;
      background-color: #E9F6FF;
      right: 0;
      bottom: 0;
      transform: rotate(4deg);
      display: block;
      width: 110%;
      height: 115%;
      line-height: 40rem;
  
      text-align: center;
      transition: box-shadow 0.5s ease-out;
      z-index: -1;
      box-sizing: border-box;
    }
        `

    return (
        <Header>
            <Navbar />
            <Home />
        </Header>
    )
}

export default Header
