import React from 'react'
import styled from 'styled-components'
import { Container, MainTitleSection } from '../styles/GlobalStyle'

function Contact() {
    const Feedback = styled.section`
  margin-top: 12rem;

  `
    const NavContainer = styled(Container)`
max-width: 1350px
    `
    const FeedbackContent = styled.div`
   display: flex;
   justify-content: center;
      height: 38rem;
        margin-top: 5rem;
        /* align-items: center; */
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
    `
    const FeedbackContentTitle = styled.h1`
   font-size: 1.4rem;
   text-align: center;
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

    `
    const FeedbackName = styled.div`
   display: flex;
   font-size: 1.2rem;
   flex-direction: column;
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
 */      box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px #FFFFFF20;}
     :hover{
         font-size: 1.15rem;
/*         box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 4px #FFFFFF;
 */    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.9), inset -1px -1px 2px #FFFFFF20; }
    `

    return (
        <Feedback className='contact'>
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
                                <FeedbackInput type="text" name="sername" required className="feedback__form-control" id="name" placeholder=""></FeedbackInput>
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
        </Feedback>
    )
}

export default Contact
