import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Powder from '../../images/powder.inline.svg';
import Change from '../../images/offer_1.jpg';
import Teams from '../../images/offer_2.jpeg';
import { animationLeft, animationRight } from '../../utils/Animations';

const StyledSection = styled.section`
  overflow: hidden;
  width: 90%;
  margin: 1rem auto;
  ${({ theme }) =>
    theme.mixins.flex('flex', 'column', 'center', 'space-evenly')}
  position: relative;
  ${({ theme }) => theme.media.md} {
    width: 100%;
  }
`;
const StyledBackgroundHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 21vw;
  color: ${({ theme }) => theme.colors.green};
  opacity: 0.3;
  margin-bottom: 1rem;
  ${({ theme }) => theme.media.md} {
    font-size: 23.5vw;
    margin: 0;
  }
`;
const StyledOfferParagraph = styled.p`
  width: 100%;
  text-align: justify;
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
const StyledImage = styled.img`
  width: 90vw;
  object-fit: scale-down;
  margin: 1rem;
  ${({ theme }) => theme.media.sm} {
    width: 90vw;
    height: 60vh;
    object-fit: cover;
    object-position: bottom;
  }
  ${({ theme }) => theme.media.md} {
    object-position: center;
  }
  ${({ theme }) => theme.media.xl} {
    width: 50vw;
    height: 50vh;
    object-fit: cover;
    object-position: center;
  }
`;
const StyledChangeSection = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'flex-start')};
  ${({ theme }) => theme.media.xl} {
    ${({ theme }) =>
      theme.mixins.flex('flex', 'row', 'flex-start', 'space-between')};
  }
`;
const StyledTeamsSection = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'flex-start')};
  ${({ theme }) => theme.media.xl} {
    ${({ theme }) =>
      theme.mixins.flex('flex', 'row-reverse', 'flex-start', 'space-between')};
  } ;
`;
const StyledInnerWrapper = styled.div`
  width: 90%;
  ${({ theme }) => theme.media.xl} {
    width: 50%;
    margin: 2rem 0 0 4rem;
  } ;
`;

const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.media.xl} {
    font-size: 2rem;
  } ;
`;
const StyledParagraph = styled.p`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.media.xl} {
    width: 90%;
  }
`;

const StyledHiddenBox = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  max-height: ${({ isActive }) => (isActive ? '500px' : '0')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: opacity 0.5s ease-out, max-height 0.5s ease-in;
  overflow: hidden;
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
  let left = useRef(null);
  let right = useRef(null);
  let start = useRef(null);
  let [isActive, setIsActive] = useState({
    boxOne: false,
    boxTwo: false,
  });

  const handleButton = e => {
    setIsActive({ ...isActive, [e.target.name]: !isActive[e.target.name] });
    console.log(e.target.name);
  };
  useEffect(() => {
    animationLeft(left, start);
    animationRight(right, left);
  }, [!isActive]);

  return (
    <>
      <StyledSection id={'co-robie'}>
        <StyledBackgroundHeading>co robię?</StyledBackgroundHeading>
        <StyledOfferParagraph ref={e => (start = e)}>
          Pracuję głównie z kobietami w biznesie: managerkami na różnych
          poziomach w organizacji. Pomagam im odnaleźć i zintegrować ich
          kobiecość, zagubioną w drodze po sukces. By budziły się każdego ranka
          w poczuciu pełni, wewnętrznej równowagi, spokoju i radości.
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
        <StyledOfferParagraph>
          Najczęściej moje klientki także przechodzą wewnętrzną transformację -
          zmieniają okulary w jakich patrzą na świat. Wychodzą ze swojej strefy
          komfortu, sięgają poza swoje granice.
        </StyledOfferParagraph>
        <StyledOfferParagraph>
          <StyledStrong>
            Moja spècialitè to dwie grupy kobiet: po awansie oraz te, które chcą
            budować uskrzydlone zespoły. To co je łączy, to odwaga tworzenia
            własnych definicji kobiecości, sukcesu i przywództwa. Odwaga do
            transformacji. Odwaga do życia według własnych zasad.
          </StyledStrong>
        </StyledOfferParagraph>
        <StyledOfferParagraph>
          Potrzebujesz takiego wsparcia? Zobacz kim jestem i jak pracuję.
        </StyledOfferParagraph>
        <StyledChangeSection
          ref={e => {
            left = e;
          }}
        >
          <StyledImage src={Change} alt={'wzrastająca roślina'} />
          <StyledInnerWrapper>
            <StyledHeading>miękka zmiana</StyledHeading>
            <StyledParagraph>
              Pomagam kobietom miękko wylądować po awansie. Niezależnie od tego,
              czy awans to spełnienie marzeń, czy też spada niespodziewanie –
              towarzyszy mu całe spektrum emocji.
            </StyledParagraph>
            <StyledButton onClick={handleButton} name={'boxOne'}>
              {isActive.boxOne ? `❮` : 'czytaj dalej...'}
            </StyledButton>
            <StyledHiddenBox isActive={isActive.boxOne}>
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
                {' '}
                <StyledStrong>Zapraszam.</StyledStrong>
              </StyledParagraph>
            </StyledHiddenBox>
          </StyledInnerWrapper>
        </StyledChangeSection>
        <StyledPowderSvg />
        <StyledTeamsSection
          ref={e => {
            right = e;
          }}
        >
          <StyledImage src={Teams} alt={'zespołowy skok spadochronowy'} />
          <StyledInnerWrapper>
            <StyledHeading>uskrzydlone zespoły</StyledHeading>
            <StyledParagraph>
              Wspieram w procesie budowania uskrzydlonych zespołów. A
              uskrzydlony zespół to taki, w którym ludzie są w pełni sobą.
              Popełniają błędy i wzajemnie się na nich uczą.
            </StyledParagraph>
            <StyledButton onClick={handleButton} name={'boxTwo'}>
              {isActive.boxTwo ? `❮` : 'czytaj dalej...'}
            </StyledButton>
            <StyledHiddenBox isActive={isActive.boxTwo}>
              <StyledParagraph>
                Różnorodność stanowi w nim fundament, na którym buduje się
                unikalne rozwiązania. To zespół, w którym śmiech i zaufanie
                współbrzmią z wysokimi wynikami. A ludzie budzą się rano w
                oczekiwaniu na nadchodzący dzień.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Budowanie takich zespołów, zawsze było moim głównym celem.
                Ponieważ to takie zespoły, realizują wyniki i tworzą atmosferę,
                która sprawia, że dajemy z siebie wszystko. To jedna z moich
                super-mocy – mam wiedzę i doświadczenie, ale przede wszystkim
                wyczucie i intuicję.{' '}
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                Nie musiałam nigdy poświęcać czasu i energii, by przekonać
                zarządy czy managerów do budowania kultury opartej na pracy
                zespołowej. Sami przychodzili do mnie i mówili: „Magda, chcę
                mieć taki zespół, jak Twój. Od czego zaczynamy?”
              </StyledParagraph>
              <StyledParagraph>
                {' '}
                A Ty? Chcesz mieć taki zespół?{' '}
                <StyledStrong>Od czego zaczynamy?</StyledStrong>
              </StyledParagraph>
            </StyledHiddenBox>
          </StyledInnerWrapper>
        </StyledTeamsSection>
      </StyledSection>
    </>
  );
};

export default Offer;

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Powder from '../../images/powder.inline.svg';
// import Change from '../../images/offer_1.jpeg';
// import Teams from '../../images/offer_2.jpeg';

// const StyledSection = styled.section`
//   width: 90%;
//   margin: 1rem auto;
//   ${({ theme }) =>
//     theme.mixins.flex('flex', 'column', 'center', 'space-evenly')}
//   position: relative;
//   ${({ theme }) => theme.media.md} {
//     width: 100%;
//   }
// `;
// const StyledBackgroundHeading = styled.h1`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 21vw;
//   color: ${({ theme }) => theme.colors.green};
//   opacity: 0.3;
//   margin-bottom: 1rem;
//   ${({ theme }) => theme.media.md} {
//     font-size: 23.5vw;
//     margin: 0;
//   }
// `;
// const StyledOfferParagraph = styled.p`
//   width: 100%;
//   text-align: justify;
//   margin-bottom: 4rem;
//   ${({ theme }) => theme.media.md} {
//     width: 50%;
//   }
// `;
// const StyledImage = styled.img`
//   width: 90vw;
//   object-fit: scale-down;
//   margin: 1rem;
//   ${({ theme }) => theme.media.sm} {
//     width: 50vw;
//   }
// `;
// const StyledChangeSection = styled.div`
//   position: relative;
//   ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'flex-start')};
//   ${({ theme }) => theme.media.sm} {
//     ${({ theme }) =>
//       theme.mixins.flex('flex', 'row', 'flex-start', 'space-between')};
//   }
// `;
// const StyledTeamsSection = styled.div`
//   position: relative;
//   ${({ theme }) => theme.mixins.flex('flex', 'column', 'center', 'flex-start')};
//   ${({ theme }) => theme.media.sm} {
//     ${({ theme }) =>
//       theme.mixins.flex('flex', 'row-reverse', 'flex-start', 'space-between')};
//   } ;
// `;
// const StyledInnerWrapper = styled.div`
//   width: 90%;
//   ${({ theme }) => theme.media.sm} {
//     width: 50%;
//     margin: 2rem 0 0 4rem;
//   } ;
// `;

// const StyledHeading = styled.h2`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 1.2rem;
//   color: ${({ theme }) => theme.colors.dark};
//   ${({ theme }) => theme.media.sm} {
//     font-size: 2rem;
//   } ;
// `;
// const StyledParagraph = styled.p`
//   margin: 1rem 0;
//   color: ${({ theme }) => theme.colors.dark};
//   ${({ theme }) => theme.media.sm} {
//     width: 90%;
//   }
// `;

// const StyledHiddenBox = styled.div`
//   color: ${({ theme }) => theme.colors.dark};
//   width: 100%;
//   margin-top: 1rem;
//   max-height: ${({ isActive }) => (isActive ? '500px' : '0')};
//   opacity: ${({ isActive }) => (isActive ? '1' : '0')};
//   transition: opacity 0.5s ease-out, max-height 0.5s ease-in;
//   overflow: hidden;
//   ${({ theme }) => theme.media.sm} {
//     align-self: flex-start;
//   }
// `;
// const StyledButton = styled.button`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 1rem;
//   cursor: pointer;
//   background-color: transparent;
//   border: none;
//   color: ${({ theme }) => theme.colors.dark};
//   outline: none;
//   padding: 0.5rem;
//   ${({ theme }) => theme.media.sm} {
//     font-size: 1.2rem;
//   }
// `;
// const StyledPowderSvg = styled(Powder)`
//   width: 60%;
//   z-index: -1;
//   position: absolute;
//   top: 40%;
//   left: -20%;
// `;

// const Offer = () => {
//   let [isActive, setIsActive] = useState({
//     boxOne: false,
//     boxTwo: false,
//   });

//   const handleButton = e => {
//     setIsActive({ ...isActive, [e.target.name]: !isActive[e.target.name] });
//     console.log(e.target.name);
//   };

//   return (
//     <>
//       <StyledSection>
//         <StyledBackgroundHeading>co robię?</StyledBackgroundHeading>
//         <StyledOfferParagraph>
//           Uczę, jak być przywódczynią – autentyczną, pełną spokoju i wewnętrznej
//           mocy. Taką, która ma życie także poza swoją pracą - pełne bliskości i
//           lekkości. Wiele lat pracowałam w męskich strukturach. Tłumiłam emocje
//           i wrażliwość, ponieważ miałam jasną wizję tego, jaka „powinna” być
//           kobieta-przywódca w męskim świecie. Silna i opanowana, zawsze
//           konkretna, skuteczna i skupiona. Oparcie i bufor dla swoich zespołów i
//           współpracowników. A po całym dniu wracałam do domu w poczuciu, że żyję
//           dwoma życiami, że jestem dwoma różnymi kobietami. W panice czytałam
//           książki rozwojowe, jeździłam na dziesiątki warsztatów, medytowałam i
//           popijałam to wszystko czerwonym winem. A rano znowu ubierałam
//           „mentalny mundur”, wbijałam się w „mentalne oficerki” i wchodziłam do
//           świata wykreowanego przez mężczyzn. I do głowy mi nie przychodziło, że
//           mogłabym inaczej. Byłam znana ze świetnych wyników, w kolejnych
//           firmach transformowałam HR i kultury organizacyjne i jednocześnie
//           płaciłam za to wysoką cenę. Dopiero, gdy pozwoliłam sobie być kobietą,
//           gdy transformowałam swoje przekonania – możliwa była rzeczywista
//           zmiana. Najczęściej moje klientki także przechodzą wewnętrzną
//           transformację - zmieniają okulary w jakich patrzą na świat. Wychodzą
//           ze swojej strefy komfortu, sięgają poza swoje granice. Budują swoją
//           odwagę, by tworzyć własną definicję kobiecości i sukcesu. Żyją według
//           własnych zasad. Moja spècialitè to dwie grupy kobiet: po awansie oraz
//           te, które chcą budować uskrzydlone zespoły. To co je łączy, to
//           pragnienie rozwijania swojego kobiecego, autentycznego i angażującego
//           przywództwa. Potrzebujesz takiego wsparcia? Zobacz kim jestem i jak
//           pracuję.
//         </StyledOfferParagraph>
//         <StyledChangeSection>
//           <StyledImage src={Change} />
//           <StyledInnerWrapper>
//             <StyledHeading>miękka zmiana</StyledHeading>
//             <StyledParagraph>
//               Pomagam kobietom miękko wylądować po awansie. Niezależnie od tego,
//               czy awans to spełnienie marzeń, czy też spada niespodziewanie –
//               towarzyszy mu całe spektrum emocji.
//             </StyledParagraph>
//             <StyledButton onClick={handleButton} name={'boxOne'}>
//               {isActive.boxOne ? `❮` : 'czytaj dalej...'}
//             </StyledButton>
//             <StyledHiddenBox isActive={isActive.boxOne}>
//               Awansowałaś ostatnio? Masz poczucie utraty swoich kompetencji i
//               wewnętrznej mocy? Odczuwasz przeciążenie, zmęczenie, wewnętrzne
//               rozbicie, złość, ciągłe napięcie? A może samotność? Bezsilność?
//               Rozczarowanie? Ja też byłam w tym miejscu. Wielokrotnie. Za każdym
//               razem, gdy osiągałam w mojej pracy poczucie pełnej mocy i
//               sprawczości – spadały na mnie nowe wyzwania, albo sama ich
//               szukałam. I cykl powtarzał się od początku. Musiałam oduczyć się
//               tego co pomagało mi osiągnąć sukces poprzednio, a nauczyć zupełnie
//               nowego. Bazując na wiedzy, dwudziestoletnim doświadczeniu pracy w
//               nowoczesnych strukturach HR i wypracowanych strategiach radzenia
//               sobie ze zmianą, pomogę Ci osiągnąć wewnętrzny spokój. Tak, abyś
//               na nowo poczuła w sobie moc, sprawczą siłę i równowagę. Byś
//               budziła się rano z lekkością, radością i oczekiwaniem na
//               nadchodzący dzień Potrzebujesz miękkiego lądowania? Zapraszam
//             </StyledHiddenBox>
//           </StyledInnerWrapper>
//         </StyledChangeSection>
//         <StyledPowderSvg />
//         <StyledTeamsSection>
//           <StyledImage src={Teams} />
//           <StyledInnerWrapper>
//             <StyledHeading>uskrzydlone zespoły</StyledHeading>
//             <StyledParagraph>
//               Wspieram w procesie budowania uskrzydlonych zespołów. A
//               uskrzydlony zespół to taki, w którym ludzie są w pełni sobą.
//               Popełniają błędy i wzajemnie się na nich uczą.
//             </StyledParagraph>
//             <StyledButton onClick={handleButton} name={'boxTwo'}>
//               {isActive.boxTwo ? `❮` : 'czytaj dalej...'}
//             </StyledButton>
//             <StyledHiddenBox isActive={isActive.boxTwo}>
//               Różnorodność stanowi w nim fundament, na którym buduje się
//               unikalne rozwiązania. To zespół, w którym śmiech i zaufanie
//               współbrzmią z wysokimi wynikami. A ludzie budzą się rano w
//               oczekiwaniu na nadchodzący dzień. Budowanie takich zespołów,
//               zawsze było moim głównym celem. Ponieważ to takie zespoły,
//               realizują wyniki i tworzą atmosferę, która sprawia, że dajemy z
//               siebie wszystko. To jedna z moich super-mocy – mam wiedzę i
//               doświadczenie, ale przede wszystkim wyczucie i intuicję. Nie
//               musiałam nigdy poświęcać czasu i energii, by przekonać zarządy czy
//               managerów do budowania kultury opartej na pracy zespołowej. Sami
//               przychodzili do mnie i mówili: „Magda, chcę mieć taki zespół, jak
//               Twój. Od czego zaczynamy?” A Ty? Chcesz mieć taki zespół? Od czego
//               zaczynamy?
//             </StyledHiddenBox>
//           </StyledInnerWrapper>
//         </StyledTeamsSection>
//       </StyledSection>
//     </>
//   );
// };

// export default Offer;
