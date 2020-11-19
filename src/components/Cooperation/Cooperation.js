import React, { useState } from 'react';
import styled from 'styled-components';
import Powder from '../../images/powder.inline.svg';
import { Link } from 'gatsby';

const StyledSection = styled.section`
  min-height: 110vh;
  position: relative;
  margin: 2rem 0;
  overflow: hidden;
  padding-bottom: 1rem;

  ${({ theme }) => theme.media.sm} {
    padding-bottom: 5rem;
  }
`;
const StyledBackgroundHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32vw;
  line-height: 0.9;
  text-align: center;
  opacity: 0.3;
  color: ${({ theme }) => theme.colors.green};
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
  font-size: 0.8rem;
  margin: 0.5rem 1rem;
  ${({ theme }) => theme.media.xl} {
    margin: 0.5rem 2rem;
    font-size: 1rem;
  }
`;
const StyledSpan = styled.span`
  text-align: center;
  font-size: 1.1rem;
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
`;
const StyledStrong = styled.strong`
  font-weight: 700;
`;
const StyledList = styled.ul`
  font-size: 0.8rem;
  margin: 0 1rem;
  text-indent: -10px;
  padding-left: 0.8rem;

  ${({ theme }) => theme.media.xl} {
    margin: 0.5rem 2rem;
    font-size: 1rem;
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
  color: ${({ theme }) => theme.colors.red};
`;
const StyledWebLink = styled.a``;
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
      <StyledSection>
        <StyledBackgroundHeading>oferta</StyledBackgroundHeading>
        <StyledWrapper id={'oferta'}>
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
                <StyledStrong>
                  Pracujesz ze mną w procesie indywidualnym nad Twoimi celami.
                </StyledStrong>
              </StyledParagraph>
              <StyledParagraph>
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
                wykupienia programu wraz z sesjami mentoringowymi,
                zapewniającymi dodatkowe wsparcie w procesie, w atrakcyjnych
                cenach.
              </StyledParagraph>
              <StyledSpan>
                zapytaj o szczegóły <br />{' '}
                <StyledStrong>hello@magdalena-kowalska.pl</StyledStrong>
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
                Jesteś częścią wspierającej grupy, jednocześnie pracując przez
                cały okres programu z drugą kobietą. Kobietą, która wchodzi do
                programu z podobnymi potrzebami i celami do Twoich. Daje to
                wyjątkowe doświadczenie wsparcia, bliskości i inspiracji,
                podnosząc skuteczność pracy.
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Ja odpowiadam za treść, proces i materiały stworzone tak, by
                maksymalnie pomóc Ci w Twojej wewnętrznej zmianie. Jestem obecna
                i aktywna w całym programie.
              </StyledParagraph>
              <StyledParagraph>
                Kupując udział w programie otrzymujesz:
              </StyledParagraph>
              <StyledList>
                <li>- filmy, </li>
                <li>- transkrypcje filmów opracowane w formie podręcznika,</li>
                <li>
                  - manual z zadaniami, tak dobranymi, by zmaksymalizować
                  efektywność programu
                </li>
                <li>- udział w zamkniętej grupie na FB</li>
                <li>
                  - otwierający/zamykający warsztat online (z wykorzystaniem
                  platformy zoom)
                </li>
                <li>- zaprojektowaną pracę z drugą kobietą</li>
                <li>- sesje pytań i odpowiedzi online (Q&A) (zoom)</li>
              </StyledList>
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
              </StyledParagraph>
              <StyledParagraph>
                Pośród natury, w ciszy i odosobnieniu. W Polce oraz wyjątkowych
                miejscach za granicą.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Odpowiadam za treść merytoryczną, materiały, facylitację
                procesu.
                <StyledWebLink
                  href={
                    'http://www.magdalena-kowalska.pl/blog/dlaczego-uwielbiam-facylitacje'
                  }
                >
                  [więcej o facylitacji]
                </StyledWebLink>{' '}
                Jestem z Tobą i grupą przez cały czas wyjazdu.
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Kupując udział w warsztacie otrzymujesz:
              </StyledParagraph>
              <StyledList>
                <li>
                  - udział w zamkniętej grupie na FB z moim aktywną obecnością
                  oraz wsparciem
                </li>
                <li>
                  - otwierający/zamykający warsztat online (z wykorzystaniem
                  platformy zoom)
                </li>
                <li>- pracę warsztatową</li>
              </StyledList>
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
              <StyledParagraph> Kupując kurs, otrzymujesz:</StyledParagraph>
              <StyledList>
                <li>- filmy</li>
                <li>- transkrypcje filmów opracowane w formie podręcznika</li>
                <li>
                  - manual z zadaniami, tak dobranymi, by zmaksymalizować
                  efektywność programu
                </li>
              </StyledList>
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
