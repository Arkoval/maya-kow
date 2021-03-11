import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Name from '../../images/name.inline.svg';
import Powder from '../../images/powder.inline.svg';

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')}
  margin-top: 2rem;
  position: relative;
`;
const StyledWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'space-evenly')};
  max-width: 95%;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.sm} {
    ${({ theme }) =>
      theme.mixins.flex('flex', 'row', 'center', 'space-evenly')};
    width: 75%;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.15s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;
const StyledPowderSvg = styled(Powder)`
  display: none;
  position: absolute;
  left: -40%;
  bottom: -10%;
  width: 60%;
  z-index: -2;

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;
const StyledImageWrapper = styled.div`
  width: 22%;
  height: 100%;
  margin-bottom: 0.8rem;
  overflow: hidden;
`;
const StyledTextWrapper = styled.div`
  text-align: left;
  width: 90%;
  margin-top: 1rem;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'flex-start', 'space-evenly')}
  ${({ theme }) => theme.media.sm} {
    width: 55%;
  }
`;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.paragraf};
  font-weight: 700;
  margin: 0.5rem 0;
`;

const StyledSubHeading = styled.h2`
  position: relative;
  margin: 0.5rem 0;
  display: block;
  font-weight: 700;

  &::before {
    content: '';
    height: 0.8rem;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.green};
    z-index: -1;

    ${({ theme }) => theme.media.lg} {
      width: 60%;
    }
  }
`;
const StyledParagraph = styled.p`
  margin: 0.5rem 0;

  i {
    font-style: italic;
  }
  &:first-of-type {
    position: relative;

    &::after {
      content: '';
      top: 20%;
      left: 2%;
      width: 98%;
      height: 80%;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.green};
      opacity: 0.5;
      z-index: -1;

      ${({ theme }) => theme.media.md} {
        height: 100%;
      }
    }
  }
`;
const StyledStrong = styled.strong`
  font-weight: 700;
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  cursor: pointer;
  align-self: flex-end;
  margin-top: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 1.2rem;
  }
`;
const StyledNameSvg = styled(Name)`
  width: 4rem;
  margin: 0 0 -1rem 1rem;
  ${({ theme }) => theme.media.sm} {
    width: 5rem;
  }
`;

const AboutMain = () => {
  return (
    <>
      <StyledSection id={'kim-jestem'}>
        <StyledWrapper>
          <StyledImageWrapper>
            <StyledImage
              src={require('../../images/about_1.jpg')}
              alt="śmiech"
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <StyledImage
              src={require('../../images/about_2.jpg')}
              alt="wstyd"
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <StyledImage
              src={require('../../images/about_3.jpg')}
              alt="uwodzenie"
            />
          </StyledImageWrapper>
          <StyledImageWrapper>
            <StyledImage
              src={require('../../images/about_4.jpg')}
              alt="strach"
            />
          </StyledImageWrapper>
        </StyledWrapper>
        <StyledPowderSvg />
        <StyledTextWrapper>
          <StyledHeading>
            Mam na imię <StyledNameSvg />
          </StyledHeading>
          <StyledParagraph>
            <StyledStrong>
              Pomagam kobietom, które pracują w korporacyjnym świecie tworzyć
              własne definicje kobiecości, sukcesu i przywództwa.{' '}
            </StyledStrong>
            <br />
            By budziły się każdego ranka w poczuciu pełni, wewnętrznej
            równowagi, sensu i radości. By żyły na własnych zasadach
          </StyledParagraph>
          <StyledParagraph>
            Opowiem Ci krótką historię z książki <i>Sztuka możliwości</i>,
            Rosamunde i Bena Zander.
          </StyledParagraph>
          <StyledParagraph>
            {' '}
            Dwóch premierów siedzi w gabinecie, omawiając sprawy stanu. Nagle do
            środka wpada mężczyzna, blady z wściekłości, krzycząc, tupiąc i
            waląc pięścią w biurko. Gospodarz mówi: Peter, przypominam Ci o
            regule nr 6. Peter&nbsp;natychmiast się uspokaja, przeprasza i
            wycofuje.
            <br />
            Politycy wracają do ich rozmowy, która po chwili znów zostaje
            przerwana przez rozhisteryzowaną kobietę, dziko gestykulującą w
            emocjach. Minister zwraca się do kobiety: Marie, pamiętaj: zasada
            numer 6.
            <br /> Ponownie całkowity spokój zstępuje na kobietę.
          </StyledParagraph>
          <StyledParagraph>
            {' '}
            Gdy scena powtarza się po raz trzeci, gość zwraca się do kolegi: Mój
            drogi przyjacielu. Widziałem wiele rzeczy w życiu, ale nigdy nic tak
            niezwykłego jak to. Mógłbyś podzielić się ze mną tajemnicą zasady
            numer 6?
          </StyledParagraph>
          <StyledParagraph>
            {' '}
            To bardzo proste - odpowiada gospodarz - zasada numer 6 brzmi:
            <StyledStrong>
              {' '}
              Nie traktuj siebie tak cholernie poważnie.{' '}
            </StyledStrong>{' '}
            Ach - mówi gość - rozumiem. A po chwili namysłu pyta: a jakie są
            inne zasady? Nie ma innych - pada odpowiedź.
          </StyledParagraph>
          <StyledParagraph>
            {' '}
            Tą zasada jest mi bardzo bliska: żyję nią - zarówno w pracy, jak i w
            życiu prywatnym. To podejście, które rozluźnia ludzi i zmienia
            świat.
          </StyledParagraph>
          <StyledSubHeading>
            Przez ostatnie 15 lat zarządzałam zespołami.
          </StyledSubHeading>
          <StyledParagraph>
            Formalnie przewodziłam wielopoziomowym strukturom HR w
            międzynarodowych korporacjach. W praktyce budowałam uskrzydlone
            zespoły i tworzyłam środowiska pracy, gdzie różnorodność inspiruje.
            Takie, w których ludzie są w pełni sobą, popełniają błędy i rosną,
            ucząc się na tych błędach. Jednocześnie współpracują, zamiast
            konkurować i wspólnie osiągają ambitne biznesowe cele.
          </StyledParagraph>
          <StyledLink to="/o-mnie">czytaj dalej...</StyledLink>
        </StyledTextWrapper>
      </StyledSection>
    </>
  );
};

export default AboutMain;
