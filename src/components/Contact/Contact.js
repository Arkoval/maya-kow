import React, { useState } from "react"
import styled from "styled-components"
import ContactPhoto from "../../images/contact.jpg"
import Facebook from "../../images/facebook.inline.svg"
import LinkedIn from "../../images/linkedin.inline.svg"
import Email from "../../images/email.inline.svg"
import { Link } from "gatsby"

const StyledSection = styled.section`
  height: 100vh;
  margin-top: 4rem;
  background: url(${ContactPhoto}) no-repeat top;
  ${({ theme }) =>
    theme.mixins.flex("flex", "column", "center", "center")}
`
const StyledWrapper = styled.div`
  width: 80%;
  height: 80%;
  ${({ theme }) =>
    theme.mixins.flex("flex", "column", "flex-start", "space-between")}
`
const StyledSvgWrapper = styled.span`
  margin-top: -5rem;
  svg {
    width: 5rem;
    height: 5rem;
    margin-left: 3rem;
    fill: ${({ theme }) => theme.colors.light};
  }
`
const StyledNewsletterWrapper = styled.div`
${({ theme }) =>
    theme.mixins.flex("flex", "row", "flex-start", "space-evenly")}
`
const StyledNewsletterWrapperInner = styled.div`
width: 60%;
justify-self: flex-start;
`
const StyledLink = styled.a``

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.light};

`
const StyledNewsletterHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 2rem;
`
const StyledParagraph = styled.p`
width: 80%;
line-height: 1.2;
text-align: justify;
`
const StyledCheckboxWrapper = styled.span`
display: flex;
align-items:center;
width: 100%;
`
const StyledForm = styled.form`
  ${({ theme }) =>
    theme.mixins.flex("flex", "column", "center", "center")}
    width: 40%;
    label{
      width: 100%;
    }
  input {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    background: transparent;
    padding: 1rem;
    width: 100%;

  }
  input[type='checkbox']{
    color: ${({theme}) => theme.colors.green};
    width: 10%;
  }
  input[type="submit"] {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.green};
    border: none;
    font-size: 1.5rem;
    width: 50%;
    align-self: flex-start;
    padding: .5rem;

  }

`
const Contact = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
  })

  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <>
      <StyledSection>
        <StyledWrapper>
        <StyledHeading>skontaktuj się</StyledHeading>
        <StyledSvgWrapper>
        <StyledLink href="https://www.facebook.pl/">
            <Facebook />
          </StyledLink>
          <StyledLink href="https://www.linkedin.pl/">
            <LinkedIn />
          </StyledLink>
          <StyledLink href="https://www.facebook.pl/">
            <Email />
          </StyledLink>
        </StyledSvgWrapper>
          <StyledNewsletterWrapper>
            <StyledNewsletterWrapperInner>
            <StyledNewsletterHeading>zapisz się do newslettera</StyledNewsletterHeading>
            <StyledParagraph>
              Zapraszam cie do zapisania sie na moj newsletter nie jestem xDDDD
              wiec obiecuje ze cie nie bede zasypywala iloscia. mam ambicje ze
              bedziesz czekac na mloje listy dlatego gwarantuje ze beda
              wartoscia sama w sobie konkretem pelnym wiedzy i inspiracji
              narzedzi i rozwiazan Zawsze latwo bedziesz mogla zrezygnowac z
              subskrypcji jesli uznasz ze nie spelniam obietnicy.
            </StyledParagraph>
            </StyledNewsletterWrapperInner>
          
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                placeholder='Imie'
                value={form.name}
                onChange={handleForm}
              ></input>
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={form.email}
                onChange={handleForm}
              ></input>
            </label>
            <StyledCheckboxWrapper>
            <label htmlFor="privacy policy">
            <input type="checkbox"/>
              Zgadzam się z warunkami{" "}
              <Link to="/polityka-prywatnosci">polityki prywatności</Link> 
            </label>
            <input type="submit" value="subskrybuj" />
            </StyledCheckboxWrapper>
          </StyledForm>
          </StyledNewsletterWrapper>
          </StyledWrapper>
      </StyledSection>
    </>
  )
}

export default Contact