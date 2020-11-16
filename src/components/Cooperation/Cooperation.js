import React, { useState } from 'react';
import styled from 'styled-components';
import Powder from '../../images/powder.inline.svg';
import { Link, useStaticQuery } from 'gatsby';
import { animationLeft, animationRight } from '../../utils/Animations';

const StyledSection = styled.section`
  min-height: 110vh;
  position: relative;
  margin: 2rem 0;
  overflow: hidden;
  padding-bottom: 1rem;

  ${({ theme }) => theme.media.sm} {
    padding-bottom: 5rem;
    /* margin-bottom: -5rem; */
  }
`;
const StyledBackgroundHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32vw;
  line-height: 0.9;
  text-align: center;
  color: white;
  opacity: 0.3;
  text-shadow: -1px -1px 0 #c9eb63, 1px -1px 0 #c9eb63, -1px 1px 0 #c9eb63,
    1px 1px 0 #c9eb63;
  ${({ theme }) => theme.media.md} {
    text-shadow: -3px -3px 0 #c9eb63, 3px -3px 0 #c9eb63, -3px 3px 0 #c9eb63,
      3px 3px 0 #c9eb63;
  }
`;
const StyledWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex('flex', 'row', 'center', 'space-evenly')}
  flex-wrap: wrap;
  max-width: 95%;
  margin: 0 auto;
`;
const StyledCard = styled.div`
  width: 100%;
  margin-top: 4rem;
  box-shadow: -5px 6px 13px 0px rgba(0, 0, 0, 0.2);
  background: white;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'center')};
  position: relative;
  ${({ theme }) => theme.media.xs} {
    width: 90%;
  }
  ${({ theme }) => theme.media.sm} {
    width: 45%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 32%;
  }
  ${({ theme }) => theme.media.xxl} {
    width: 23%;
  }
`;
const StyledHiddenBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? 100 + '%' : 0)};
  transition: height 0.5s ease-in;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'flex-start', 'flex-start')}
  overflow: hidden;
`;
const StyledParagraph = styled.p`
  font-size: 0.75rem;
  margin: 0.5rem 1rem;
  ${({ theme }) => theme.media.xl} {
    margin: 0.5rem 2rem;
    font-size: 0.9rem;
  }

  strong {
    font-weight: 600;
  }
`;
const StyledSpan = styled.span`
  text-align: center;
  font-size: 1.1rem;
  position: absolute;
  top: 70%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  strong {
    font-weight: 600;
  }
`;
const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const StyledHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem;
  text-align: center;
`;
const StyledButton = styled.button`
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.8rem;
  align-self: flex-end;
  margin: 1rem;
  cursor: pointer;
  outline: none;
  ${({ theme }) => theme.media.xl} {
    font-size: 1rem;
  }
`;
const StyledCloseButton = styled.button`
  border: none;
  background: transparent;
  font-weight: 500;
  margin: 0.5rem;

  cursor: pointer;
  outline: none;
  ${({ theme }) => theme.media.sm} {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;
const StyledPowderSvg = styled(Powder)`
  display: none;
  position: absolute;
  right: -10%;
  bottom: -10%;
  width: 60%;
  z-index: -2;

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;
const StyledLink = styled(Link)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-family: ${({ theme }) => theme.fonts.heading};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
`;
const Cooperation = () => {
  const [isOpen, setIsOpen] = useState({
    individual: false,
    group: false,
    travel: false,
    online: false,
  });

  const handleOpen = e => {
    setIsOpen({ ...isOpen, [e.target.name]: !isOpen[e.target.name] });
  };
  const handleClose = e => {
    setIsOpen({ ...isOpen, [e.target.name]: false });
  };

  return (
    <>
      <StyledSection id={'oferta'}>
        <StyledBackgroundHeading>oferta</StyledBackgroundHeading>
        <StyledWrapper>
          <StyledCard>
            <StyledImage
              src={require('../../images/cooperation_1.jpg')}
              alt={'kwitnący kwiat'}
            />
            <StyledHeading>
              mentoring
              <br />
              indywidualny
            </StyledHeading>
            <StyledButton onClick={handleOpen} name={'individual'}>
              czytaj dalej...
            </StyledButton>
            <StyledHiddenBox isOpen={isOpen.individual}>
              <StyledCloseButton onClick={handleClose} name={'individual'}>
                &#10005;
              </StyledCloseButton>
              <StyledParagraph>
                Pracujesz ze mną w procesie indywidualnym nad Twoimi celami.
                <br />
                Tworzymy bezpieczną, wspierającą przestrzeń. Taką, która sprzyja
                Twojej wewnętrznej transformacji, sięganiu poza horyzont i
                skutecznemu działaniu.
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Proces obejmuje zazwyczaj 6-8 sesji.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Cena sesji indywidualnej wynosi 500 PLN brutto.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                W ramach programów mentoringowych pojawia się możliwość
                wykupienia programu plus dodatkowych sesji mentoringowych
                zapewniających dodatkowe wsparcie w procesie, w atrakcyjnych
                cenach.
              </StyledParagraph>
              <StyledSpan>
                zapytaj o szczegóły <br />{' '}
                <strong>hello@magdalena-kowalska.pl</strong>
              </StyledSpan>
            </StyledHiddenBox>
          </StyledCard>
          <StyledCard>
            <StyledImage
              src={require('../../images/cooperation_2.jpg')}
              alt={'pędy bambusa'}
            />
            <StyledHeading>grupowe programy mentorignowe</StyledHeading>
            <StyledButton onClick={handleOpen} name={'group'}>
              czytaj dalej...
            </StyledButton>
            <StyledHiddenBox isOpen={isOpen.group}>
              <StyledCloseButton onClick={handleClose} name={'group'}>
                &#10005;
              </StyledCloseButton>
              <StyledParagraph>
                Pracujesz w grupie oraz w systemie „buddy” (rekomendowane).
                Czyli pracujesz przez cały okres programu z drugą kobietą:
                otrzymując i dając sobie wzajemne wsparcie.
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Ja odpowiadam za treść, proces i materiały stworzone tak, by
                maksymalnie pomóc Ci w Twojej wewnętrznej zmianie. Po Twojej
                stronie jest zaangażowanie w proces, nauka i realizacja Twoich
                celów.
              </StyledParagraph>
              <StyledParagraph>
                Jestem obecna i aktywna w całym programie: poprzez zamkniętą
                grupę na FB, sesje Q&A, warsztaty online, indywidualne sesji
                mentoringowe (w zależności od wykupionej opcji){' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Kupując udział w programie otrzymujesz: udział w zamkniętej
                grupie na FB, otwierający warsztat online (z wykorzystaniem
                platformy zoom), sesję pytań i odpowiedzi online (Q&A) (zoom)
                zamykający warsztat online (zoom){' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Cena programu uzależniona jest od tematu, ilości materiałów oraz
                czasu trwania.
              </StyledParagraph>
              <StyledLink to={'/oferta-online'}>sprawdź ofertę</StyledLink>
            </StyledHiddenBox>
          </StyledCard>
          <StyledCard>
            <StyledImage
              src={require('../../images/cooperation_3.jpg')}
              alt={'kora drzewa'}
            />
            <StyledHeading>
              wyjazdy
              <br /> rozwojowe
            </StyledHeading>
            <StyledButton onClick={handleOpen} name={'travel'}>
              czytaj dalej...
            </StyledButton>
            <StyledHiddenBox isOpen={isOpen.travel}>
              <StyledCloseButton onClick={handleClose} name={'travel'}>
                &#10005;
              </StyledCloseButton>
              <StyledParagraph>
                Pracujemy razem w grupie na wyjazdowym warsztacie.
                <br />
                Pośród natury, w ciszy i odosobnieniu. W Polce oraz wyjątkowych
                miejscach poza naszymi granicami.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Odpowiadam za treść merytoryczną, materiały, facylitację procesu
                [tutaj więcej o facylitacji]. Jestem z Tobą i grupą przez cały
                czas wyjazdu.
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Otrzymujesz także: udział w zamkniętej grupie na FB z moją
                aktywną obecnością oraz wsparciem, otwierający warsztat online
                (z wykorzystaniem platformy zoom).{' '}
              </StyledParagraph>
              <StyledParagraph>
                Cena wydarzenia uzależniona jest od czasu jego trwania,
                materiałów oraz ilości zaplanowanych wydarzeń online. <br />
                Dodatkowy koszt stanowi cena akomodacji oraz wyżywienia.
              </StyledParagraph>
              <StyledLink to={'/oferta-wyjazdowa'}>sprawdź ofertę</StyledLink>
            </StyledHiddenBox>
          </StyledCard>
          <StyledCard>
            <StyledImage
              src={require('../../images/cooperation_4.jpg')}
              alt={'omszały kamień'}
            />
            <StyledHeading>
              kursy
              <br /> online
            </StyledHeading>
            <StyledButton onClick={handleOpen} name={'online'}>
              czytaj dalej...
            </StyledButton>
            <StyledHiddenBox isOpen={isOpen.online}>
              <StyledCloseButton onClick={handleClose} name={'online'}>
                &#10005;
              </StyledCloseButton>
              <StyledParagraph>
                Wykupujesz dostęp do wszystkich materiałów.
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Pracujesz sama, we własnym tempie, przy swoim komputerze.
              </StyledParagraph>
              <StyledParagraph>
                Kupując kurs, otrzymujesz: filmy, transkrypcje filmów opracowane
                w formie podręcznika, manual z zadaniami, tak dobranymi, by
                zmaksymalizować efektywność programu.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Cena kursu uzależniona jest od ilości materiałów.
              </StyledParagraph>
              <StyledLink to={'/oferta-online'}>sprawdź ofertę</StyledLink>
            </StyledHiddenBox>
          </StyledCard>
        </StyledWrapper>
        <StyledPowderSvg />
      </StyledSection>
    </>
  );
};

export default Cooperation;
