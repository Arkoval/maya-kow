import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Powder from '../../images/powder.inline.svg';
import Offer_1 from '../../images/offer_1.jpg';
import Offer_2 from '../../images/offer_2.jpg';
import Offer_3 from '../../images/offer_3.jpg';
import {
  animationLeft,
  animationRight,
  animationTimeline,
} from '../../utils/Animations';

const StyledSection = styled.section`
  overflow: hidden;
  width: 90%;
  margin: 2rem auto;
  padding-top: 2rem;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-evenly')}
  position: relative;
`;
const StyledBackgroundHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 21vw;
  line-height: 0.95;
  color: ${({ theme }) => theme.colors.green};
  opacity: 0.3;
  z-index: -1;
`;
const StyledList = styled.ul`
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  ${({ theme }) => theme.media.md} {
    width: 50%;
  }
`;
const StyledOfferParagraph = styled.p`
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  ${({ theme }) => theme.media.md} {
    width: 50%;
  }
  &:last-of-type {
    margin-bottom: 3rem;
  }
`;
const StyledStrong = styled.strong`
  font-weight: 600;
`;
const StyledCard = styled.div`
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-between')}
  padding: 0.5rem;
  margin: 1.5rem;
  width: 100%;
  position: relative;
  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
    align-items: flex-start;

    &::after {
      content: '';
      position: absolute;
      bottom: 3%;
      left: 47%;
      height: 1px;
      width: 65%;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
  ${({ theme }) => theme.media.md} {
    width: 90%;
    &::after {
      left: 31%;
    }
  }
`;
const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.media.xl} {
    font-size: 2rem;
  } ;
`;
const StyledParagraphContainer = styled.div`
  width: 100%;

  /* margin-top: 1rem; */
  ${({ theme }) => theme.media.sm} {
    margin-left: 2rem;
  }
  ${({ theme }) => theme.media.lg} {
    margin-left: 3rem;
  }
`;
const StyledParagraph = styled.p`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.media.xl} {
    width: 90%;
  }
`;
const StyledImgContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 80%;
  }
  ${({ theme }) => theme.media.md} {
    width: 40%;
  }
`;
const StyledImg = styled.img`
  width: 100%;
`;
const StyledHiddenBox = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  max-height: ${({ isActive }) => (isActive ? '500px' : '0')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: opacity 0.5s ease-out, max-height 0.5s ease-in;
  overflow: hidden;
  margin-bottom: 1rem;
  ${({ theme }) => theme.media.xl} {
    align-self: flex-start;
  }
`;
const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.8rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  outline: none;
  padding: 0.5rem;
  ${({ theme }) => theme.media.xl} {
    font-size: 1.2rem;
  }
`;
const StyledPowderSvg = styled(Powder)`
  width: 40%;
  z-index: -1;
  position: absolute;
  top: 30%;
  left: -20%;
`;

const Offer = () => {
  let start = useRef(null);
  let first = useRef(null);
  let second = useRef(null);
  let third = useRef(null);

  let [isActive, setIsActive] = useState({
    boxOne: false,
    boxTwo: false,
    boxThree: false,
  });

  const handleButton = e => {
    setIsActive({ ...isActive, [e.target.name]: !isActive[e.target.name] });
  };
  useEffect(() => {
    animationTimeline(first, second, third);
  }, [!isActive]);

  return (
    <>
      <StyledSection id={'co-robie'}>
        <StyledBackgroundHeading>co robię?</StyledBackgroundHeading>
        <StyledOfferParagraph ref={e => (start = e)}>
          Pracuję głównie z kobietami w biznesie. Pomagam im odnaleźć i
          zintegrować ich kobiecość, często zagubioną w drodze po sukces.
          Spokojną, wewnętrzną moc. By budziły się każdego ranka w poczuciu
          pełni, wewnętrznej równowagi, spokoju i radości.
        </StyledOfferParagraph>
        <StyledOfferParagraph>
          Wiele lat pracowałam w męskich strukturach. Tłumiłam emocje i
          wrażliwość, ponieważ miałam jasną wizję tego, jaka „powinna” być
          kobieta-przywódca w męskim świecie. Silna i opanowana, zawsze
          konkretna, skuteczna i skupiona. Oparcie i bufor dla swoich zespołów i
          współpracowników.
        </StyledOfferParagraph>
        <StyledOfferParagraph>
          {' '}
          A po całym dniu wracałam do domu w poczuciu, że żyję dwoma życiami, że
          jestem dwiema różnymi kobietami. W panice czytałam książki rozwojowe,
          jeździłam na dziesiątki warsztatów, medytowałam i popijałam to
          wszystko czerwonym winem. Rano znowu ubierałam „mentalny mundur”,
          wbijałam się w „mentalne oficerki” i wchodziłam do świata wykreowanego
          przez mężczyzn. I do głowy mi nie przychodziło, że mogłabym inaczej.
          <br /> Rzeczywista zmiana była dopiero możliwa, gdy pozwoliłam sobie
          na bycie kobietą z całą paletą emocji i cykliczności. Gdy podważyłam i
          przetransformowałam swoje przekonania.
        </StyledOfferParagraph>
        <StyledOfferParagraph ref={e => (start = e)}>
          Najczęściej moje klientki także przechodzą wewnętrzną transformację -
          zmieniają okulary w jakich patrzą na świat. Wychodzą ze swojej strefy
          komfortu, sięgają poza swoje granice.
        </StyledOfferParagraph>
        <StyledList>
          <StyledStrong>Moja spècialitè to trzy grupy kobiet:</StyledStrong>
          <li>
            <StyledStrong>
              - osiągające sukces, odczuwając jednocześnie zmęczenie i tęsknotę
              za nieokreślonym
            </StyledStrong>
          </li>
          <li>
            <StyledStrong>- po awansie </StyledStrong>
          </li>
          <li>
            <StyledStrong>- pragnące budować uskrzydlone zespoły.</StyledStrong>
          </li>
        </StyledList>
        <StyledOfferParagraph>
          To co je łączy, to odwaga tworzenia własnych definicji kobiecości,
          sukcesu i przywództwa. Odwaga do transformacji. Odwaga do życia według
          własnych zasad.
        </StyledOfferParagraph>
        <StyledOfferParagraph>
          Potrzebujesz takiego wsparcia? Zobacz kim jestem i jak pracuję.
        </StyledOfferParagraph>
        <StyledCard ref={e => (first = e)}>
          <StyledImgContainer>
            <StyledImg src={Offer_1} />
          </StyledImgContainer>
          <StyledParagraphContainer>
            <StyledHeading> kobiecy odcień sukcesu</StyledHeading>
            <StyledParagraph>
              Jako kobiety nie mamy zdrowego wzorca kobiecego sukcesu, dlatego
              przyjmujemy najczęściej model męski: oparty na pełnym determinacji
              działaniu, intelekcie, skuteczności, ambicji, rywalizacji. Oznacza
              to najczęściej odrzucenie tego co kobiece: odczuwania, empatii,
              cykliczności, zaufania do siebie oraz swojej intuicji.
            </StyledParagraph>
            <StyledButton onClick={handleButton} name={'boxOne'}>
              {isActive.boxOne ? `❮` : 'czytaj dalej...'}
            </StyledButton>
            <StyledHiddenBox isActive={isActive.boxOne}>
              <StyledParagraph>
                Osiągasz sukcesy, w poczuciu, że straciłaś swój głos? Część
                siebie? Odczuwasz regularnie przeciążenie, zmęczenie, presję?
                <br />
                Budzisz się rankiem w poczuciu pustki, nieokreślonej tęsknoty,
                bezsensu albo smutku?
              </StyledParagraph>
              <StyledParagraph>
                Chcesz osiągać świetne wyniki – w poczuciu wolności,
                integralności i równowagi? W poczuciu, że lekko łączysz role?
                Odczuwając sens, radość i satysfakcję?
              </StyledParagraph>
              <StyledParagraph>
                <StyledStrong>sprawdź moją ofertę</StyledStrong>
              </StyledParagraph>
            </StyledHiddenBox>
          </StyledParagraphContainer>
        </StyledCard>
        <StyledCard ref={e => (second = e)}>
          <StyledImgContainer>
            <StyledImg src={Offer_2} />
          </StyledImgContainer>
          <StyledParagraphContainer>
            <StyledHeading>miękka zmiana</StyledHeading>
            <StyledParagraph>
              Pomagam kobietom miękko wylądować po awansie. Niezależnie od tego,
              czy awans to spełnienie marzeń, czy też spada niespodziewanie –
              towarzyszy mu całe spektrum emocji.
            </StyledParagraph>
            <StyledButton onClick={handleButton} name={'boxTwo'}>
              {isActive.boxTwo ? `❮` : 'czytaj dalej...'}
            </StyledButton>
            <StyledHiddenBox isActive={isActive.boxTwo}>
              <StyledParagraph>
                Awansowałaś?
                <br /> Masz poczucie utraty swoich kompetencji i wewnętrznej
                mocy? Odczuwasz przeciążenie, zmęczenie, wewnętrzne rozbicie,
                złość, ciągłe napięcie? A może samotność? Bezsilność?
                Rozczarowanie?
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Ja też byłam w tym miejscu. Wielokrotnie. Za każdym razem, gdy
                osiągałam w mojej pracy poczucie pełnej mocy i sprawczości –
                spadały na mnie nowe wyzwania, albo sama ich szukałam. I cykl
                powtarzał się od początku. Musiałam oduczyć się tego co pomagało
                mi osiągnąć sukces poprzednio, a nauczyć zupełnie nowego.
              </StyledParagraph>
              <StyledParagraph>
                Bazując na wiedzy, dwudziestoletnim doświadczeniu pracy w
                nowoczesnych strukturach HR i wypracowanych strategiach radzenia
                sobie ze zmianą, pomogę Ci osiągnąć wewnętrzny spokój.
                <br /> Tak, abyś na nowo poczuła w sobie moc, sprawczą siłę i
                równowagę. Byś budziła się rano z lekkością, radością i
                oczekiwaniem na nadchodzący dzień. Potrzebujesz miękkiego
                lądowania?
              </StyledParagraph>
              <StyledParagraph>
                <StyledStrong>sprawdź moją ofertę</StyledStrong>
              </StyledParagraph>
            </StyledHiddenBox>
          </StyledParagraphContainer>
        </StyledCard>
        <StyledCard ref={e => (third = e)}>
          <StyledImgContainer>
            <StyledImg src={Offer_3} />
          </StyledImgContainer>
          <StyledParagraphContainer>
            <StyledHeading>uskrzydlone zespoły</StyledHeading>
            <StyledParagraph>
              Wspieram w procesie budowania uskrzydlonych zespołów. A
              uskrzydlony zespół to taki, w którym ludzie są w pełni sobą.
              Popełniają błędy i wzajemnie się na nich uczą. Różnorodność
              stanowi w nim fundament, na którym buduje się unikalne
              rozwiązania.
            </StyledParagraph>
            <StyledButton onClick={handleButton} name={'boxThree'}>
              {isActive.boxThree ? `❮` : 'czytaj dalej...'}
            </StyledButton>
            <StyledHiddenBox isActive={isActive.boxThree}>
              <StyledParagraph>
                Różnorodność stanowi w nim fundament, na którym buduje się
                unikalne rozwiązania. To zespół, w którym śmiech i zaufanie
                współbrzmią z wysokimi wynikami. A ludzie budzą się rano w
                oczekiwaniu na nadchodzący dzień.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Budowanie takich zespołów, zawsze było moim głównym celem.
                Ponieważ to takie zespoły, realizują wyniki i tworzą atmosferę
                która sprawia, że dajemy z siebie wszystko. To jedna z moich
                super-mocy – mam wiedzę i doświadczenie, ale przede wszystkim
                wyczucie i intuicję.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Nie musiałam nigdy poświęcać czasu i energii, by przekonać
                zarządy czy managerów do budowania kultury opartej na pracy
                zespołowej. Tworzyłam modelowy zespół, a oni sami przychodzili
                do mnie i mówili: „Magda, chcę mieć taki zespół, jak Twój. Od
                czego zaczynamy?”
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                A Ty? Chcesz mieć taki zespół?{' '}
                <StyledStrong>Od czego zaczynamy?</StyledStrong>
              </StyledParagraph>
              <StyledParagraph>
                <StyledStrong>sprawdź moją ofertę</StyledStrong>
              </StyledParagraph>
            </StyledHiddenBox>
          </StyledParagraphContainer>
        </StyledCard>
      </StyledSection>
    </>
  );
};

export default Offer;
