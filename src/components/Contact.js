import React from 'react'
import styled from 'styled-components'
import { Container, Content, MainTitleSection } from '../styles/GlobalStyle'

function Contact() {

    const NavContainer = styled(Container)`
max-width: 1350px
    `
    const FeedbackContent = styled.div`
   display: flex;
   justify-content: center;
      height: 38rem;
        margin-top: 5rem;
        /* align-items: center; */
         @media screen and (max-width: 1280px) { 
      height: 34.5rem;
}
         @media screen and (max-width: 550px) { 
      height: 30rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    @media screen and (max-width: 350px) { 
        height: 26rem;
    
}
`
const FeedbackContentInner = styled.div`
/*  display: flex; */
flex-direction: column;
/*    box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.1),  -2px -2px 4px #FFFFFF;

*/
box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px #FFFFFF20;   border-radius: 30px;
/* align-items: center; */
width: 32rem;
padding-top: 2rem;
padding-left: 2rem;
padding-right: 2rem;
margin-bottom: 2rem;
@media screen and (max-width: 1280px) { 
        width: 29rem;

}
 @media screen and (max-width: 550px) { 
      padding-left: 2.5rem;
padding-right: 2.5rem;
}


        
`
    const FeedbackContentTitle = styled.h1`
   font-size: 1.4rem;
   text-align: center;
   @media screen and (max-width: 1280px) { 
          font-size: 1.2rem;
}

 @media screen and (max-width: 550px) { 
   font-size: 1.1rem;
}

@media screen and (max-width: 350px) { 
    font-size: 0.8rem;
    
}
    `
    const FeedbackContentItem = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: space-between;
    `
    /*     const FeedbackContentItemContact = styled(FeedbackContentItem)`
        padding-right: 2rem;
         padding-left: 0;
        ` */

    const FeedbackGroup = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
       margin-top: 3rem;
       @media screen and (max-width: 550px) { 
        margin-top: 2.5rem;
    }
    @media screen and (max-width: 350px) { 
        margin-top: 1.8rem;
    
    
}
    `
    const FeedbackName = styled.div`
   display: flex;
   font-size: 1.2rem;
   flex-direction: column;
    @media screen and (max-width: 1280px) { 
          font-size: 1rem;
}
 @media screen and (max-width: 550px) { 
   font-size: 0.8rem;
}
@media screen and (max-width: 350px) { 
    font-size: 0.6rem;
    
}
    `

    const FeedbackInput = styled.input`
   display: flex;
   flex-direction: column;
      background: none;
   border-radius: 60px;
   width: 100%;
   border: none;
    height: 2.5rem;
    margin-top: 0.3rem;
/*    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 4px #FFFFFF;
 */    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 2px #FFFFFF20;
padding-left: 1rem;
   :focus{
        border: none;
         border-radius: 1260px;
         outline: none;
   }
    @media screen and (max-width: 1280px) { 
            height: 2.2rem;
}
 @media screen and (max-width: 550px) { 
   height: 1.7rem;
}
@media screen and (max-width: 350px) { 
    height: 1.4rem;
    
}

    `
    const FeedbackInputBtn = styled(FeedbackInput)`  
/*      box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.1),  -2px -2px 4px #FFFFFF;
 */    
 justify-content: center;
  box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px #FFFFFF20;
     align-items: center;
     font-size: 1.2rem;
     &:focused{
/*         box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 4px #FFFFFF;
 */     
 box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px #FFFFFF20;
}
     :hover{
         /* transform: scale(1.2); */
         font-size: 1.15rem;
/*         box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 4px #FFFFFF;
 */    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 2px #FFFFFF20; 
     }
        @media screen and (max-width: 1280px) { 
          font-size: 1rem;
}
@media screen and (max-width: 550px) { 
        font-size: 0.8rem;
    
}
 @media screen and (max-width: 350px) { 
        font-size: 0.6rem;
    
}
    `

    return (
        <Content className='contact'>
            <Container>
                <MainTitleSection>
                    Обратная связь
                </MainTitleSection>
                <FeedbackContent>
                    <FeedbackContentInner>


                        <FeedbackContentItem>
                            <FeedbackContentTitle>Оставьте заявку и мы перезвоним вам в ближайшее время</FeedbackContentTitle>
                            {/* <FeedbackContentTitle></FeedbackContentTitle>
                        <FeedbackContentTitle></FeedbackContentTitle> */}
                        </FeedbackContentItem>
                        <FeedbackContentItem>

                            <FeedbackGroup>
                                <FeedbackName>
                                    фамилия
                           </FeedbackName>
                                <FeedbackInput type="text" name="sername" required className="feedback__form-control" id="sername" placeholder=""></FeedbackInput>
                                {/* <FeedbackInvalid>
                    Имя не должно содержать цифр
                </FeedbackInvalid> */}
                            </FeedbackGroup>
                            <FeedbackGroup>
                                <FeedbackName>
                                    имя
                     </FeedbackName>
                                <FeedbackInput type="text" name="name" required className="feedback__form-control" id="name" placeholder=""></FeedbackInput>
                                {/*  <FeedbackInvalid>
                    Имя не должно содержать цифр
                </FeedbackInvalid> */}
                            </FeedbackGroup>
                            <FeedbackGroup>
                                <FeedbackName>
                                    номер телефона
                       </FeedbackName>
                                <FeedbackInput type="text" name="phone" required="" className="feedback__form-control" id="phone" placeholder=""></FeedbackInput>
                                {/* <FeedbackInvalid>
                    Введите номер телефона корректно
                </FeedbackInvalid> */}
                            </FeedbackGroup>
                            <FeedbackGroup>
                                <FeedbackInput type="hidden" name="project_name" value="Dezinfection"></FeedbackInput>
                                <FeedbackInput type="hidden" name="admin_email" value="antiklop77@gmail.com"></FeedbackInput>
                                <FeedbackInput type="hidden" name="form_subject" value="Заявка"></FeedbackInput>
                                <FeedbackInputBtn type="submit" value="Отправить заявку" ></FeedbackInputBtn>
                            </FeedbackGroup>
                        </FeedbackContentItem>
                    </FeedbackContentInner>
                </FeedbackContent>


            </Container>
        </Content>
    )
}

export default Contact
