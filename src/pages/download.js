import React, { useEffect } from 'react';
import CoffeeTemplate from '../layout/CoffeeTemplate';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import { MailerliteFreebies } from '../utils/Mailerlite';

const StyledSection = styled.section`
  width: 90%;
  margin: 2rem auto;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-evenly')};
  ${({ theme }) => theme.media.md} {
    ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'space-evenly')}
    width: 80%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 70%;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  box-shadow: 0px 0px 21px 1px rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.media.sm} {
    width: 40%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 30%;
  }
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'flex-start', 'space-between')}
  ${({ theme }) => theme.media.md} {
    width: 55%;
  }
  ${({ theme }) => theme.media.md} {
    margin-left: 4rem;
  }
  ${({ theme }) => theme.media.lg} {
    h2 + p {
      margin-top: 2rem;
    }
  }
`;
const StyledSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  margin: 1.5rem 0;
  line-height: 1.5;
`;
const StyledParagraph = styled.p`
  margin: 0.5rem 0;

  text-align: left;
`;
const StyledLink = styled.a`
  padding: 0.5rem 0.8rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  margin: 1rem 0;
  align-self: flex-end;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.paragraf};
  font-weight: 600;
  transition: 0.2s ease-out;

  ${({ theme }) => theme.media.md} {
    padding: 1rem 1.5rem;
  }
  &:hover {
    background-color: #f616a0;
  }
`;
const StyledHeader = styled.h2`
  margin: 2rem 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;
  &::before {
    content: '';
    height: 0.8rem;
    width: 50%;
    position: absolute;
    top: 20%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.green};
    z-index: -1;

    ${({ theme }) => theme.media.lg} {
      width: 50%;
      top: 50%;
    }
  }

  ${({ theme }) => theme.media.xl} {
    font-size: 2rem;
  } ;
`;

const Download = () => {
  // const handleOnClick = () => {
  //   MailerliteFreebies('show', true);
  // };

  return (
    <CoffeeTemplate color={theme.colors.blue}>
      <StyledSection>
        <StyledImg src={require('../images/test.jpg')} alt={'okładka testu'} />
        <StyledWrapper>
          <StyledHeader>wypełnij test i odbierz swój e-book</StyledHeader>
          <StyledParagraph>
            {' '}
            Tęsknisz za czymś w swoim życiu, ale nie wiesz do końca za czym? A
            może masz wielkie marzenie, ale nie możesz z jakiegoś powodu ruszyć?
          </StyledParagraph>
          <StyledParagraph>
            Albo jeszcze inaczej? Dajesz z siebie w pracy wszystko, jesteś
            lubiana, ale Twoja praca od lat wygląda tak samo? Zaczynasz odczuwać
            frustrację, złość lub smutek. Ale nic się nie zmienia. Masz
            poczucie, że jesteś tylko pionkiem w hierarchii, ale nie podejmiesz
            działań by zmienić swoją sytuację?
          </StyledParagraph>
          <StyledParagraph>
            {' '}
            Chcesz decydować o sobie i swoim życiu, czuć swobodę w działaniu i
            pracy? Wracać codziennie z pracy z uśmiechem na twarzy, z poczuciem
            sensu i satysfakcji? Ale coś Cię powstrzymuje przed tym czego
            pragniesz? A może masz „słomiany zapał”, szybko odpuszczasz to na
            czym Ci zależy?
          </StyledParagraph>
          <StyledParagraph>
            Kliknij i sięgnij po odpowiedź, co stanowi Twoją blokadę przed
            życiem pełnym spełnienia, radości i pieniędzy. Gdy będziesz
            wiedziała co Cię powstrzymuje, będziesz miała realną możliwość
            wnieść wymarzoną zmianę w swoje życie.
          </StyledParagraph>
          <StyledLink
            href={
              'https://www.tryinteract.com/share/quiz/5feb5b5969722300166feaf4'
            }
            target="_blank"
          >
            Klikaj śmiało i sięgaj po marzenia :)
          </StyledLink>
        </StyledWrapper>
      </StyledSection>
      {/* <StyledSection>
        <StyledImg
          src={require('../images/ebook.jpg')}
          alt={'okładka ebooka'}
        />
        <StyledWrapper>
          <StyledParagraph>
            {' '}
            Stawiasz sobie poprzeczkę na wysokości praktycznie niemożliwej do
            osiągnięcia? Najpierw zawsze doszukujesz się najmniejszych
            niedociągnięć w tym co&nbsp;zrobiłaś? I poprawiasz, poprawiasz,
            poprawiasz? Czasem w nieskończoność?
          </StyledParagraph>
          <StyledParagraph>
            Regularnie masz poczucie, że nie wiesz, nie umiesz wystarczająco
            dużo? Przez co zwlekasz z rozpoczęciem tego co dla Ciebie ważne?
          </StyledParagraph>
          <StyledParagraph>
            {' '}
            Porównujesz się z innymi, w wynik porównań wkręca Cię w spiralę
            negatywnego myślenia o sobie? W efekcie doświadczając smutku,
            frustracji, strachu, złości, wstydu, bezradności, zazdrości?
          </StyledParagraph>
          <StyledSpan>
            Ten e-book to odpowiedzi na pytania jak możesz transformować nawyk
            porównywania się i zadbać o&nbsp;siebie wtedy, gdy jest Ci bardzo
            trudno. 47&nbsp;stron żywej wiedzy i praktyk.
          </StyledSpan>{' '}
          <StyledParagraph>
            Warunkiem jego otrzymania jest zapis na newsletter, który nazywam
            coffee letters. Dlatego, że marzy mi się, żebyś czytała je w
            zatrzymaniu, zanurzając się w przyjemności i inspiracji. A dla mnie
            to możliwe tylko z kawą :)
          </StyledParagraph>
          <StyledLink onClick={handleOnClick}>Przygarniam ebook</StyledLink>
        </StyledWrapper>
      </StyledSection> */}
    </CoffeeTemplate>
  );
};

export default Download;
