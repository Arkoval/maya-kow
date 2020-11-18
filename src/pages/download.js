import React from 'react';
import CoffeeTemplate from '../layout/CoffeeTemplate';
import styled from 'styled-components';
import { theme } from '../theme/theme';

const StyledWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-evenly')};
  ${({ theme }) => theme.media.md} {
    ${({ theme }) =>
      theme.mixins.flex('flex', 'row', 'center', 'space-between')}
    width: 75%;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 35%;
  }
`;
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-between')}
  ${({ theme }) => theme.media.md} {
    width: 45%;
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
  line-height: 1.5;
`;
const StyledLink = styled.button`
  padding: 0.5rem 0.8rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  margin: 1rem 0;
  align-self: flex-end;
  outline: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.paragraf};
  font-weight: 600;

  ${({ theme }) => theme.media.md} {
    padding: 1rem 1.5rem;
  }
`;

const Download = () => {
  return (
    <CoffeeTemplate color={theme.colors.blue}>
      <StyledWrapper>
        <StyledImg
          src={require('../images/ebook.jpeg')}
          alt={'okładka ebooka'}
        />
        <StyledDiv>
          <StyledParagraph>
            Stawiasz sobie poprzeczkę na wysokości praktycznie niemożliwej
            do&nbsp;osiągnięcia?
          </StyledParagraph>
          <StyledParagraph>
            {' '}
            Najpierw zawsze doszukujesz się najmniejszych niedociągnięć w tym
            co&nbsp;zrobiłaś? I poprawiasz, poprawiasz, poprawiasz? Czasem w
            nieskończoność?
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
            porównywania się i zadbać o siebie wtedy, gdy jest Ci bardzo trudno.
            47&nbsp;stron żywej wiedzy i praktyk.
          </StyledSpan>{' '}
          <StyledParagraph>
            Warunkiem jego otrzymania jest zapis na newsletter, który nazywam
            coffee letters. Dlatego, że marzy mi się, żebyś czytała je w
            zatrzymaniu, zanurzając się w przyjemności i inspiracji. A dla mnie
            to możliwe tylko z kawą :)
          </StyledParagraph>
          <StyledLink>Przygarniam ebook</StyledLink>
        </StyledDiv>
      </StyledWrapper>
    </CoffeeTemplate>
  );
};

export default Download;
