import React, { useState } from "react"
import styled from "styled-components"
import Powder from "../../images/powder.inline.svg";
import Change from "../../images/offer_1.jpeg"
import Teams from "../../images/offer_2.jpeg"

const StyledSection = styled.section`
  width: 100%;
  ${({theme}) => theme.mixins.flex('flex', 'column', 'center', 'space-evenly')}
  position: relative;
`
const StyledBackgroundHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 33vw;
  color: ${({ theme }) => theme.colors.green};
  opacity: 0.3;
  `
const StyledOfferParagraph= styled.p`
  width: 50%;
  text-align: justify;
  line-height: 1.2;
  margin-bottom: 4rem;
`
const StyledChangeSection = styled.div`
 align-self: flex-start;
  margin-left: 4rem;
  ${({theme}) => theme.mixins.flex('flex', 'column', 'flex-end', 'center')}
  background: url(${Change}) no-repeat fixed left;
  background-size: 50%;
  height: 80vh;
  margin-bottom: 4rem;
`
const StyledTeamsSection = styled.div`
  align-self: flex-end;
  margin-right: 4rem;
  ${({theme}) => theme.mixins.flex('flex', 'column', 'flex-start', 'center')}
  background: url(${Teams}) no-repeat fixed right;
  height: 80vh;

`
const StyledInnerWrapper = styled.div`
width: 50%;
margin: 2rem 0 0 4rem;
`

const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.dark};
`
const StyledParagraph = styled.p`
  margin: 1rem 0;
  width: 80%;
  color: ${({theme}) => theme.colors.dark}
`

const StyledHiddenBox = styled.div`
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  color: ${({theme}) => theme.colors.dark};
  width: 80%;
  margin-top: 2rem;
  line-height: 1.2;
`
const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme}) => theme.colors.dark};

  &:focus{
    border: none;
  };
`
const StyledPowderSvg = styled(Powder)`
  width: 60%;
  z-index: -1;
  position: absolute;
  top: 40%;
  left: -20%;
`

const Offer = () => {
  let [isActive, setIsActive] = useState({
    boxOne: false,
    boxTwo: false,
  })

  const handleButtonOne = () => {
    setIsActive({ ...isActive, boxOne: !isActive.boxOne })
  }
  const handleButtonTwo = () => {
    setIsActive({ ...isActive, boxTwo: !isActive.boxTwo })
  }

  return (
    <>
      <StyledSection>
        <StyledBackgroundHeading>oferta</StyledBackgroundHeading>
        <StyledOfferParagraph>
          Uczę, jak być przywódczynią – autentyczną, pełną spokoju i wewnętrznej
          mocy. Taką, która ma życie także poza swoją pracą - pełne bliskości i
          lekkości. Wiele lat pracowałam w męskich strukturach. Tłumiłam emocje
          i wrażliwość, ponieważ miałam jasną wizję tego, jaka „powinna” być
          kobieta-przywódca w męskim świecie. Silna i opanowana, zawsze
          konkretna, skuteczna i skupiona. Oparcie i bufor dla swoich zespołów i
          współpracowników. A po całym dniu wracałam do domu w poczuciu, że żyję
          dwoma życiami, że jestem dwoma różnymi kobietami. W panice czytałam
          książki rozwojowe, jeździłam na dziesiątki warsztatów, medytowałam i
          popijałam to wszystko czerwonym winem. A rano znowu ubierałam
          „mentalny mundur”, wbijałam się w „mentalne oficerki” i wchodziłam do
          świata wykreowanego przez mężczyzn. I do głowy mi nie przychodziło, że
          mogłabym inaczej. Byłam znana ze świetnych wyników, w kolejnych
          firmach transformowałam HR i kultury organizacyjne i jednocześnie
          płaciłam za to wysoką cenę. Dopiero, gdy pozwoliłam sobie być kobietą,
          gdy transformowałam swoje przekonania – możliwa była rzeczywista
          zmiana. Najczęściej moje klientki także przechodzą wewnętrzną
          transformację - zmieniają okulary w jakich patrzą na świat. Wychodzą
          ze swojej strefy komfortu, sięgają poza swoje granice. Budują swoją
          odwagę, by tworzyć własną definicję kobiecości i sukcesu. Żyją według
          własnych zasad. Moja spècialitè to dwie grupy kobiet: po awansie oraz
          te, które chcą budować uskrzydlone zespoły. To co je łączy, to
          pragnienie rozwijania swojego kobiecego, autentycznego i angażującego
          przywództwa. Potrzebujesz takiego wsparcia? Zobacz kim jestem i jak
          pracuję.
        </StyledOfferParagraph>
        <StyledChangeSection>
        <StyledInnerWrapper>
          <StyledHeading>miękka zmiana</StyledHeading>
            <StyledParagraph>
              Pomagam kobietom miękko wylądować po awansie. Niezależnie od tego,
              czy awans to spełnienie marzeń, czy też spada niespodziewanie –
              towarzyszy mu całe spektrum emocji.
            </StyledParagraph>
            <StyledButton onClick={handleButtonOne}>
              czytaj dalej...
            </StyledButton>
            <StyledHiddenBox isActive={isActive.boxOne}>
          Awansowałaś ostatnio? Masz poczucie utraty swoich kompetencji i
          wewnętrznej mocy? Odczuwasz przeciążenie, zmęczenie, wewnętrzne
          rozbicie, złość, ciągłe napięcie? A może samotność? Bezsilność?
          Rozczarowanie? Ja też byłam w tym miejscu. Wielokrotnie. Za każdym
          razem, gdy osiągałam w mojej pracy poczucie pełnej mocy i sprawczości
          – spadały na mnie nowe wyzwania, albo sama ich szukałam. I cykl
          powtarzał się od początku. Musiałam oduczyć się tego co pomagało mi
          osiągnąć sukces poprzednio, a nauczyć zupełnie nowego. Bazując na
          wiedzy, dwudziestoletnim doświadczeniu pracy w nowoczesnych
          strukturach HR i wypracowanych strategiach radzenia sobie ze zmianą,
          pomogę Ci osiągnąć wewnętrzny spokój. Tak, abyś na nowo poczuła w
          sobie moc, sprawczą siłę i równowagę. Byś budziła się rano z
          lekkością, radością i oczekiwaniem na nadchodzący dzień Potrzebujesz
          miękkiego lądowania? Zapraszam
        </StyledHiddenBox>
        </StyledInnerWrapper>
        </StyledChangeSection>
        <StyledPowderSvg/>
        <StyledTeamsSection>
        <StyledInnerWrapper>
          <StyledHeading>uskrzydlone zespoły</StyledHeading>
            <StyledParagraph>
              Wspieram w procesie budowania uskrzydlonych zespołów. A
              uskrzydlony zespół to taki, w którym ludzie są w pełni sobą.
              Popełniają błędy i wzajemnie się na nich uczą.
            </StyledParagraph>
            <StyledButton onClick={handleButtonTwo}>
              czytaj dalej...
            </StyledButton>
          <StyledHiddenBox isActive={isActive.boxTwo}>
          Różnorodność stanowi w nim fundament, na którym buduje się unikalne
          rozwiązania. To zespół, w którym śmiech i zaufanie współbrzmią z
          wysokimi wynikami. A ludzie budzą się rano w oczekiwaniu na
          nadchodzący dzień. Budowanie takich zespołów, zawsze było moim głównym
          celem. Ponieważ to takie zespoły, realizują wyniki i tworzą atmosferę,
          która sprawia, że dajemy z siebie wszystko. To jedna z moich
          super-mocy – mam wiedzę i doświadczenie, ale przede wszystkim wyczucie
          i intuicję. Nie musiałam nigdy poświęcać czasu i energii, by przekonać
          zarządy czy managerów do budowania kultury opartej na pracy
          zespołowej. Sami przychodzili do mnie i mówili: „Magda, chcę mieć taki
          zespół, jak Twój. Od czego zaczynamy?” A Ty? Chcesz mieć taki zespół?
          Od czego zaczynamy?
        </StyledHiddenBox>
        </StyledInnerWrapper>
        </StyledTeamsSection>
      </StyledSection>
    </>
  )
}

export default Offer


// import React, { useState } from "react"
// import styled from "styled-components"
// import Powder from "../../images/powder.inline.svg"

// const StyledWrapper = styled.div`
//   display: grid;
//   grid-template: 3rem 350px 300px repeat(4, 1fr) 3rem / 3rem repeat(6, 1fr) 3rem;
//   grid-gap: 2rem;
//   width: 100%;
//   height: 200vh;
// `
// const StyledBackgroundHeading = styled.h1`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 32vw;
//   line-height: 0.8;
//   z-index: -2;
//   color: ${({ theme }) => theme.colors.green};
//   opacity: 0.3;
//   grid-column: 2/8;
//   grid-row: 1/2;
// `
// const StyledImage = styled.img`
//   /* z-index: -1; */
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// const StyledOfferSection = styled.div`
//   grid-column: 5/8;
//   grid-row: 3/4;
//   /* width: 80%; */
//   /* align-self: self-end; */
//   justify-self: center;
//   text-align: justify;
// `
// const StyledChangeSection = styled.div`
//   grid-column: 2/6;
//   grid-row: 4/6;
//   position: relative;
// `
// const StyledTeamsSection = styled.div`
//   grid-column: 4/8;
//   grid-row: 6/8;
//   position: relative;
// `

// const StyledHeading = styled.h1`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 2rem;
//   /* color: ${({ theme }) => theme.colors.light}; */
// `
// const StyledWrapperInner = styled.div`
//   position: absolute;
//   top: 5%;
//   left: 5%;
//   color: ${({ theme }) => theme.colors.light};
//   text-align: justify;
//   width: 70%;
// `
// const StyledParagraph = styled.p`
//   margin: 1rem 0;
// `

// const StyledHiddenBox = styled.span`
//   visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
//   &:nth-of-type(1) {
//     color: green;
//     grid-column: 6/8;
//     grid-row: 4/6;
//     align-self: center;
//   }
//   &:nth-of-type(2) {
//     color: red;
//     grid-column: 2/4;
//     grid-row: 6/8;
//     align-self: center;
//   }
// `
// const StyledButton = styled.button`
//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 1.2rem;
//   cursor: pointer;
//   background-color: transparent;
//   border: none;
//   color: ${({theme}) => theme.colors.light};

//   &:focus{
//     border: none;
//   }
// `
// const StyledPowderSvg = styled(Powder)`
//   width: 12%;
//   margin-bottom: -1rem;
// `

// const Offer = () => {
//   let [isActive, setIsActive] = useState({
//     boxOne: false,
//     boxTwo: false,
//   })

//   const handleButtonOne = () => {
//     setIsActive({ ...isActive, boxOne: !isActive.boxOne })
//   }
//   const handleButtonTwo = () => {
//     setIsActive({ ...isActive, boxTwo: !isActive.boxTwo })
//   }

//   return (
//     <>
//       <StyledWrapper>
//         <StyledBackgroundHeading>oferta</StyledBackgroundHeading>
//         <StyledOfferSection>
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
//         </StyledOfferSection>
//         <StyledChangeSection>
//           <StyledImage src={require("../../images/offer_1.jpeg")} />
//           <StyledWrapperInner>
//             <StyledHeading>miękka zmiana</StyledHeading>
//             <StyledParagraph>
//               Pomagam kobietom miękko wylądować po awansie. Niezależnie od tego,
//               czy awans to spełnienie marzeń, czy też spada niespodziewanie –
//               towarzyszy mu całe spektrum emocji.
//             </StyledParagraph>
//             <StyledButton onClick={handleButtonOne}>
//               czytaj dalej...
//             </StyledButton>
//           </StyledWrapperInner>
//         </StyledChangeSection>
//         <StyledHiddenBox isActive={isActive.boxOne}>
//           Awansowałaś ostatnio? Masz poczucie utraty swoich kompetencji i
//           wewnętrznej mocy? Odczuwasz przeciążenie, zmęczenie, wewnętrzne
//           rozbicie, złość, ciągłe napięcie? A może samotność? Bezsilność?
//           Rozczarowanie? Ja też byłam w tym miejscu. Wielokrotnie. Za każdym
//           razem, gdy osiągałam w mojej pracy poczucie pełnej mocy i sprawczości
//           – spadały na mnie nowe wyzwania, albo sama ich szukałam. I cykl
//           powtarzał się od początku. Musiałam oduczyć się tego co pomagało mi
//           osiągnąć sukces poprzednio, a nauczyć zupełnie nowego. Bazując na
//           wiedzy, dwudziestoletnim doświadczeniu pracy w nowoczesnych
//           strukturach HR i wypracowanych strategiach radzenia sobie ze zmianą,
//           pomogę Ci osiągnąć wewnętrzny spokój. Tak, abyś na nowo poczuła w
//           sobie moc, sprawczą siłę i równowagę. Byś budziła się rano z
//           lekkością, radością i oczekiwaniem na nadchodzący dzień Potrzebujesz
//           miękkiego lądowania? Zapraszam
//         </StyledHiddenBox>
//         <StyledTeamsSection>
//           <StyledImage src={require("../../images/offer_2.jpeg")} />
//           <StyledWrapperInner>
//             <StyledHeading>uskrzydlone zespoły</StyledHeading>
//             <StyledParagraph>
//               Wspieram w procesie budowania uskrzydlonych zespołów. A
//               uskrzydlony zespół to taki, w którym ludzie są w pełni sobą.
//               Popełniają błędy i wzajemnie się na nich uczą.
//             </StyledParagraph>
//             <StyledButton onClick={handleButtonTwo}>
//               czytaj dalej...
//             </StyledButton>
//           </StyledWrapperInner>
//         </StyledTeamsSection>
//         <StyledHiddenBox isActive={isActive.boxTwo}>
//           Różnorodność stanowi w nim fundament, na którym buduje się unikalne
//           rozwiązania. To zespół, w którym śmiech i zaufanie współbrzmią z
//           wysokimi wynikami. A ludzie budzą się rano w oczekiwaniu na
//           nadchodzący dzień. Budowanie takich zespołów, zawsze było moim głównym
//           celem. Ponieważ to takie zespoły, realizują wyniki i tworzą atmosferę,
//           która sprawia, że dajemy z siebie wszystko. To jedna z moich
//           super-mocy – mam wiedzę i doświadczenie, ale przede wszystkim wyczucie
//           i intuicję. Nie musiałam nigdy poświęcać czasu i energii, by przekonać
//           zarządy czy managerów do budowania kultury opartej na pracy
//           zespołowej. Sami przychodzili do mnie i mówili: „Magda, chcę mieć taki
//           zespół, jak Twój. Od czego zaczynamy?” A Ty? Chcesz mieć taki zespół?
//           Od czego zaczynamy?
//         </StyledHiddenBox>
//       </StyledWrapper>
//     </>
//   )
// }

// export default Offer
