import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Name from '../../images/name.inline.svg';

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')}
  margin-top: 2rem;
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
  width: 45%;
  margin-bottom: 0.8rem;
  height: 100%;
  object-fit: cover;
  ${({ theme }) => theme.media.sm} {
    width: 22%;
  }
`;
const StyledTextWrapper = styled.div`
  text-align: justify;
  width: 90%;
  margin-top: 1rem;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'flex-start', 'space-evenly')}
  ${({ theme }) => theme.media.sm} {
    width: 45%;
  }
`;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.paragraf};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const StyledSpan = styled.span`
  position: relative;
  display: block;
  margin: 1rem 0 1rem 0;
  font-weight: 600;

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
      width: 30%;
    }
  }
`;
const StyledParagraph = styled.p``;
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
          <StyledImage
            src={require('../../images/about_1.jpg')}
            alt="moje zdjecie"
          />
          <StyledImage
            src={require('../../images/about_2.jpg')}
            alt="moje zdjecie"
          />
          <StyledImage
            src={require('../../images/about_3.jpg')}
            alt="moje zdjecie"
          />
          <StyledImage
            src={require('../../images/about_4.jpg')}
            alt="moje zdjecie"
          />
        </StyledWrapper>
        <StyledTextWrapper>
          <StyledHeading>
            Cześć, mam na imię <StyledNameSvg />
          </StyledHeading>
          <StyledParagraph>
            W jednej z ważniejszych dla mnie książek Sztuka możliwości, autorzy
            – Rosamunde i Ben Zander, opisują taką historię: Dwóch premierów
            siedzi w gabinecie, omawiając sprawy stanu. Nagle do środka wpada
            mężczyzna, blady z wściekłości, krzycząc, tupiąc i waląc pięścią w
            biurko. Gospodarz mówi: Peter, przypominam Ci o regule nr 6. Peter
            natychmiast uspokaja się, przeprasza i wycofuje. Politycy wracają do
            ich rozmowy, która znów zostaje przerwana dwadzieścia minut później
            przez rozhisteryzowaną kobietę, dziko gestykulującą, z rozwianymi w
            emocjach włosami. Ponownie minister zwraca się do kobiety słowami:
            Marie, proszę pamiętaj: zasada numer 6. I ponownie całkowity spokój
            zstępuje na kobietę i ona też wycofuje się z ukłonem i
            przeprosinami. Gdy scena powtarza się po raz trzeci, gość zwraca się
            do swojego kolegi: Mój drogi przyjacielu. Widziałem wiele rzeczy w
            życiu, ale nigdy nic tak niezwykłego jak to. Mógłbyś podzielić się
            ze mną tajemnicą zasady numer 6? To bardzo proste - odpowiada
            gospodarz - zasada numer 6 brzmi: Nie traktuj siebie tak cholernie
            poważnie. Ach - mówi gość - rozumiem. A po chwili namysłu pyta: a
            jakie, jeśli mogę zapytać, są inne zasady? Nie ma innych - pada
            odpowiedź. Tą zasada jest mi bardzo bliska – zarówno w pracy, jak i
            życiu prywatnym. To podejście, które rozluźnia ludzi i zmienia świat
            <StyledSpan>
              Przez ostatnie 15 lat zarządzałam zespołami.
            </StyledSpan>
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
