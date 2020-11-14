import React, { useState } from 'react';
import styled from 'styled-components';
import ContactPhoto from '../../images/contact.jpg';
import { Link } from 'gatsby';

const StyledSection = styled.section`
  margin-top: 2rem;
  overflow: hidden;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-evenly')}
  ${({ theme }) => theme.media.sm} {
    margin-top: 4rem;
  }
`;
const StyledImage = styled.img`
  width: 130%;
  height: 150%;
  object-fit: cover;
  ${({ theme }) => theme.media.sm} {
    width: 100%;
    height: 100%;
  }
`;
const StyledWrapper = styled.div`
  width: 80%;
  margin: 1rem auto;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'flex-start', 'center')}
  ${({ theme }) => theme.media.sm} {
    width: 80%;
    min-height: 30vh;
    margin: 3rem auto;
    ${({ theme }) =>
      theme.mixins.flex('flex', 'row', 'flex-start', 'space-between')}
  }
`;
const StyledInnerWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 40%;
  }
`;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark};
  margin: 1rem 0;
  ${({ theme }) => theme.media.sm} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.media.lg} {
    font-size: 3rem;
  }
`;

const StyledParagraph = styled.p`
  /* text-align: justify; */
`;
const StyledCheckboxWrapper = styled.span`
  margin-top: 1rem;
  display: flex;
`;
const StyledForm = styled.form`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')}
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 50%;
  }

  label {
    font-size: 0.7rem;
    width: 100%;
    margin-left: 0.5rem;
  }
  input {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    background: transparent;
    padding: 1rem;
    width: 100%;
  }
  input[type='checkbox'] {
    color: ${({ theme }) => theme.colors.green};
    width: 5%;
  }
  input[type='submit'] {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.green};
    border: none;
    font-size: 0.8rem;
    width: auto;
    align-self: flex-end;
    padding: 0;
    margin-top: 0.5rem;
    cursor: pointer;
    ${({ theme }) => theme.media.md} {
      font-size: 2rem;
    }
  }
`;
const Contact = () => {
  let [form, setForm] = useState({
    name: '',
    email: '',
  });

  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <StyledSection id={'kontakt'}>
        <StyledImage src={ContactPhoto} />
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledHeading>zapisz się na coffee letters</StyledHeading>
            <StyledParagraph>
              Zapisz się i zyskaj moje wsparcie w rozwoju Twojego przywództwa.
              Kobiecego, autentycznego i na własnych zasadach
            </StyledParagraph>
          </StyledInnerWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                placeholder="Imię"
                value={form.name}
                onChange={handleForm}
              ></input>
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleForm}
              ></input>
            </label>
            <StyledCheckboxWrapper>
              <input type="checkbox" name="privacy-policy" />
              <label htmlFor="privacy-policy">
                Zgadzam się na przetwarzanie moich danych osobowych przez
                Magdalena Kowalska w celu realizacji usługi newsletter'a. Tym
                samym wysyłania mi informacji o artykułach blogowych, usługach,
                promocjach lub nowościach zgodnie z{' '}
                <Link to="/polityka-prywatnosci">polityką-prywatności</Link>
              </label>
            </StyledCheckboxWrapper>
            <input type="submit" value="wyślij" />
          </StyledForm>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};

export default Contact;
