import React from 'react'
import styled from 'styled-components'
import '../../icons/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '../../icons/react-fontawesome'
/* import { fab } from '../icons/free-brands-svg-icons'
 */import { faTimesCircle } from '../../icons/free-regular-svg-icons'
import { Link } from 'react-scroll'
// transform: ${ status === 'active' ? 'translate(0)' : 'translateX(-100%)' };


const NavbarSidebarContent = styled.div` 
transition: transform 0.5s linear;
box-shadow:  -2px -2px 4px rgba(0, 0, 0, 0.9), 1px 1px 2px #FFFFFF20;
top: 0;
position: fixed;
width: 35%;
height: 100vh;
right: 0;
transform: ${({ status }) => status === 'active' ? 'translateX(0)' : 'translateX(100%)'};
opacity: 1;
@media screen and (max-width: 540px) { 
    
    width: 100%;

}
`

const Ul = styled.div` 
display: flex;
height:/*  calc() */ 80vh;
margin-top: 3rem;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;

@media screen and (max-width: 540px) { 
    
    align-items: center;

}

`
const CloseBtn = styled(FontAwesomeIcon)` 

font-size: 2rem;
left: 1rem;
top: 1rem;
position: absolute;
cursor:pointer

`

const LinkItem = styled(Link)`
cursor: pointer;
margin-left: 3rem;
font-size: 1.2rem;
@media screen and (max-width: 540px) { 
    margin-left: 0;
    

}
`




/* const Span = styled.span` 

` */
const NavbarSidebar = ({ status, setStatus }) => {
    console.log(status)
    const closeMobileMenu = (stat) => {
        setStatus('')
    }

    return (
        <NavbarSidebarContent status={status}>
            <CloseBtn onClick={closeMobileMenu.bind(this, 'Closed')} icon={faTimesCircle}></CloseBtn>
            <Ul>

                <LinkItem to='home'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={20}
                    onClick={closeMobileMenu}
                /*  style={`cursor:pointer`} */
                /*    offset={-280} */
                /* onClick={toggleHome} */>Главная

                      </LinkItem>
                <LinkItem to='services'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-100}
                    onClick={closeMobileMenu}
                /*  offset={-80} */

                /*   primary={primary ? 1 : 0} */
                >Услуги</LinkItem>
                <LinkItem
                    to='about'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-100}
                    onClick={closeMobileMenu}
                >О нас</LinkItem>
                <LinkItem
                    to='work'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-100}
                    onClick={closeMobileMenu}
                >Как мы работаем</LinkItem>
                <LinkItem
                    to='contact'
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-100}
                    onClick={closeMobileMenu}
                >Контакты</LinkItem>
            </Ul>
        </NavbarSidebarContent>
    )
}

export default NavbarSidebar
