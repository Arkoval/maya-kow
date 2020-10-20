import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const StyledSection = styled.section`
width: 100%;
text-align: center;

`
const StyledWrapper = styled.div`
width: 50%;
margin: 0 auto;
text-align: justify;
`
const StyledHeader = styled.h1`
font-family: ${({theme}) => theme.fonts.heading};
font-size: 3rem;
padding: 1.5rem;
margin-bottom: 2rem;
width: 100%;
/* background-color: ${({theme}) => theme.colors.blue}; */
color: ${({theme}) => theme.colors.dark};
`
const StyledHeading = styled.h2`
margin: 1rem;
font-size: 1.2rem;
font-weight: 600
`
const StyledParagraph = styled.p`
margin-bottom: 2rem;
`
const StyledList = styled.ol`
margin-left: 2rem;
`
const StyledLink = styled(Link)`
font-family: ${({theme}) => theme.fonts.heading};
font-size: 1.5rem;
color: ${({theme}) => theme.colors.dark};
cursor: pointer;
text-decoration: none;
`
const PrivacyPolicy = () => {

    return <StyledSection>
        <StyledHeader>polityka prywatności magdalena kowalska</StyledHeader>
        <StyledWrapper>
        
        <StyledParagraph>Poniższa polityka prywatności została opracowana trosce o Twoją prywatność i
bezpieczeństwo danych osobowych. Opracowanie to uwzględnia wszystkiego obowiązujące
przepisy RODO, czyli ogólnego rozporządzenia o ochronie danych.</StyledParagraph>
        <StyledHeading>ADMINISTRATOR DANYCH OSOBOWYCH</StyledHeading>
        <StyledParagraph>Magdalena Kowalska, prowadząca działalność gospodarczą pod nazwą Magdalena
Kowalska wpisana do Centralnej Ewidencji i Informacji o Działalności Gospodarczej
prowadzonej przez ministra właściwego do spraw gospodarki i prowadzenia Centralnej
Ewidencji i Informacji o Działalności Gospodarczej z nr REGON 890568582 oraz NIP
8831256321, z siedzibą Kłodzko, ul. Malczewskiego DIII/1</StyledParagraph>

        <StyledHeading>CEL</StyledHeading>
        <StyledParagraph>Administrator przetwarza Twoje dane, ponieważ jesteś zainteresowany/a. otrzymywaniem
wiadomości na temat sposobów świadomego rozwoju swojego przywództwa oraz
otrzymywaniem informacji na temat szkoleń, eventów branżowych, ofert specjalnych
organizowanych przez Magdalena Kowalska.</StyledParagraph>

        <StyledHeading>PRZETWARZANIE DANYCH OSOBOWYCH</StyledHeading>
        <StyledParagraph>W związku z tym, Administrator będzie przetwarzał dane osobowe wprowadzane przez
Ciebie dobrowolnie w formularzach kontaktowych i zgłoszeniowych dotyczących
poszczególnych treści, produktów i usług wymienionych powyżej, takich jak np. imię i
nazwisko, nazwa firmy, adres, nr telefonu czy e-mail kontaktowy.
Administrator dokłada wszelkich starań, by chronić Ciebie i Twoje dane i zapewnia, że są
one:</StyledParagraph>
<StyledList>
<li>przetwarzane zgodnie z prawem,</li>
<li>zbierane dla określonych, zgodnych z prawem celów i niepoddawane dalszemu
przetwarzaniu niezgodnemu z tymi celami</li>
<li>merytorycznie adekwatne w stosunku do celów, w jakich są przetwarzane oraz
przechowywane w postaci umożliwiającej identyfikację osób, których dotyczą, nie
dłużej niż jest to niezbędne do osiągnięcia celu przetwarzania.</li>
</StyledList>

        <StyledHeading>PRZEKAZYWANIE DANYCH INNYM PODMIOTOM</StyledHeading>
        <StyledParagraph>W celu obsługi zapytania czy realizacji usługi Administrator przekazuje Twoje dane innym
podmiotom, takim jak np.</StyledParagraph>
<StyledList>
    <li>firmy kurierskie i pocztowe (w celu dostarczenia faktury, certyfikatu szkoleniowego
czy materiałów szkoleniowych)</li>
    <li>podmiotom i podwykonawcom świadczącym usługi informatyczne i księgowe (w celu
kompetentnej obsługi zapytania lub realizacji zamówionej usługi)</li>
</StyledList>
<StyledParagraph>
Wszystkie podmioty, którym Administrator powierza przetwarzanie danych osobowych
gwarantują stosowanie odpowiednich środków ochrony i bezpieczeństwa danych osobowych
wymaganych przez przepisy prawa.
</StyledParagraph>

        <StyledHeading>CZAS PRZETWARZANIA</StyledHeading>
        <StyledParagraph>Twoje dane przetwarzane są przez czas konieczny do tego, by:</StyledParagraph>
        <StyledList>
            <li>obsłużyć Twoje zapytanie ofertowe,</li>
            <li>obsłużyć Twoje zgłoszenie do uczestnictwa w szkoleniu bądź wydarzeniu, dostarczyć
Ci zamówione treści,</li>
            <li>móc realizować uzyskaną od Ciebie zgodę na komunikację marketingową (do czasu
cofnięcia tej zgody),</li>
            <li>realizować współpracę objętą umową (do czasu jej wygaśnięcia).</li>
        </StyledList>

        <StyledHeading>TWOJE PRAWA</StyledHeading>
        <StyledParagraph>Przysługuje Ci prawo dostępu do treści swoich danych oraz ich sprostowania, usunięcia,
ograniczenia ich przetwarzania, do wniesienia sprzeciwu wobec ich przetwarzania, a także
do żądania przeniesienia tych danych do innego administratora zgodnie z obowiązującymi
przepisami.
Każda osoba, której dane dotyczą, ma prawo w dowolnym momencie wnieść sprzeciw – z
przyczyn związanych z jej szczególną sytuacją – wobec przetwarzania dotyczących jej
danych osobowych, w przypadkach, gdy podstawą prawną przetwarzania jest prawnie
uzasadniony interes Administratora. W celu skorzystania z powyższych uprawnień należy
przesłać Administratorowi odpowiednią wiadomość pocztą elektroniczną na adres:
hello@thechangebymagda.pl. Przysługuje Ci również prawo wniesienia skargi do organu
nadzorczego zajmującego się ochroną danych osobowych. Zasady związane z realizacją
wskazanych praw zostały opisane szczegółowo w art. 16 – 21 RODO</StyledParagraph>

        <StyledHeading>OBOWIĄZKI ADMINISTRATORA</StyledHeading>
        <StyledParagraph>Administrator dokłada wszelkich starań, aby zapewnić wszelkie środki fizycznej, technicznej i
organizacyjnej ochrony danych osobowych przed ich przypadkowym czy umyślnym
zniszczeniem, przypadkową utratą, zmianą, nieuprawnionym ujawnieniem, wykorzystaniem
czy dostępem, zgodnie ze wszystkimi obowiązującymi przepisami.</StyledParagraph>

        <StyledHeading>KONTAKT</StyledHeading>
        <StyledParagraph>W przypadku potrzeby kontaktu z Administratorem można się kontaktować pisemnie, za
pomocą poczty tradycyjnej na adres: ul. Malczewskiego DIII/1 57-300 Kłodzko lub drogą e-
mailową pod adresem: hello@magdalena-kowalska.pl</StyledParagraph>
</StyledWrapper>
<StyledLink to='/'>wróć</StyledLink>
    </StyledSection>
}

export default PrivacyPolicy;