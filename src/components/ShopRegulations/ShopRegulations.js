import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ShopImg from '../../images/shop_regulations.jpg';

const StyledSection = styled.section`
  width: 100%;
  text-align: center;
`;
const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 40vh;
  background: url(${ShopImg}) no-repeat center;
  background-size: contain;
  margin-bottom: 1rem;
  ${({ theme }) => theme.media.md} {
    background-size: cover;
  }
`;
const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: left;
  ${({ theme }) => theme.media.md} {
    width: 50%;
    text-align: justify;
  }
`;
const StyledHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  margin: 1rem;
  display: inline-block;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;

  ${({ theme }) => theme.media.md} {
    font-size: 3rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1rem;
    top: 50%;
    z-index: -1;
  }
  &::before {
    left: -0.1rem;
  }
  &::after {
    right: -0.1rem;
    background: ${({ theme }) => theme.colors.green};
    transition: width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:before {
    background: ${({ theme }) => theme.colors.green};
    width: 100%;
    transition: width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:after {
    background: transparent;
    width: 102%;
    transition: 0s;
  }
`;
const StyledHeading = styled.h2`
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;

  ${({ theme }) => theme.media.md} {
    font-size: 1.2rem;
    margin: 1rem;
  }
`;
const StyledParagraph = styled.p`
  margin-bottom: 2rem;
`;
const StyledList = styled.ol`
  margin-left: 2rem;
  margin-bottom: 2rem;
`;
const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
const StyledDownloadLink = styled.a`
  margin: 2rem 0;
`;
const StyledStrong = styled.strong`
  font-weight: 700;
`;

const ShopRegulations = () => {
  return (
    <StyledSection>
      <StyledBackgroundImage />
      <StyledHeader>regulamin sklepu internetowego</StyledHeader>
      <StyledParagraph>
        Magdalena Kowalska obowiązujący od dnia 6 stycznia 2021, wersja 1
      </StyledParagraph>
      <StyledWrapper>
        <StyledParagraph>
          Poniższy Regulamin został opracowany w trosce o ochronę Twoich praw
          konsumenckich, przysługujących Ci na mocy wiążących przepisów prawa.
          Potencjalne wątpliwości będą interpretowane na korzyść Kupującego.
        </StyledParagraph>
        <StyledHeading>POSTANOWIENIA OGÓLNE</StyledHeading>
        <StyledParagraph>
          Regulamin określa zasady dokonywania przez Sprzedawcę sprzedaży za
          pośrednictwem sklepu internetowego osadzonego na domenie głównej:
          www.magdalena-kowalska.pl, w szczególności zasady składania zamówień,
          płatności, odstąpienia od umowy, rozwiązania lub zmiany umowy,
          postępowania reklamacyjnego. Warunkiem dokonania sprzedaży Usługi
          przez Sprzedawcę jest zaakceptowanie przez Konsumenta niniejszego
          Regulaminu.
        </StyledParagraph>

        <StyledHeading>DEFINICJE</StyledHeading>
        <StyledParagraph>
          Na potrzeby niniejszego Regulaminu przyjmuje się następujące znaczenie
          pojęć.
        </StyledParagraph>
        <StyledParagraph>
          <StyledStrong>PLATFORMA.</StyledStrong> Platforma internetowa, z
          której będziesz korzystać w przypadku zakupu programów i kursów
          online. Platforma prowadzona w serwisie WP IDEA.
          <br />
          <StyledStrong>PRODUKT.</StyledStrong> Oznacza produkt elektroniczny, w
          szczególności program lub kurs online, który jest dostępny na
          Platformie. <br />
          <StyledStrong>KURS ONLINE.</StyledStrong> Produkt elektroniczny do
          pracy samodzielnej, dostępny w całości, bezpośrednio po dokonaniu
          płatności. <br />
          <StyledStrong>PROGRAM MENTORINGOWY ONLINE.</StyledStrong> Produkt
          elektroniczny uwalniany w rytmie modułów, realizowany przy wsparciu
          Sprzedającego, wspólnie z grupą innych Uczestników. <br />
          <StyledStrong>FORMULARZ ZAMÓWIENIA.</StyledStrong> Formularz
          zamówienia to usługa elektroniczna umożliwiająca złożenie zamówienia
          poprzez określenie warunków umowy sprzedaży, w tym sposobu płatności,
          dostawy etc. <br />
          <StyledStrong>KONTO.</StyledStrong>
          Usługa elektroniczna oznaczona indywidualną nazwą (loginem) i hasłem.
          Dane te umożliwią Kupującemu dostęp do zasobów w systemie
          teleinformatycznym. Są w nim gromadzone przekazane dane oraz
          informacje dotyczące zakupionych produktów elektronicznych. Po
          złożeniu zamówienia Konto jest tworzone automatycznie. <br />
          <StyledStrong>ZAMÓWIENIE.</StyledStrong>
          Oświadczenie woli składane za pośrednictwem Formularza zamówienia i
          zmierzające bezpośrednio do zawarcia umowy sprzedaży produktu
          elektronicznego ze Sprzedawcą. <br />
          <StyledStrong>UMOWA SPRZEDAŻY.</StyledStrong> Umowa zawierana lub
          zawarta między Klientem, a Sprzedawcą za pośrednictwem sklepu
          internetowego, dotycząca produktów cyfrowych oferowanych do nabycia
          przez Sprzedawcę. <br />
          <StyledStrong>USŁUGA ELEKTRONICZNA.</StyledStrong> Usługa świadczona
          drogą elektroniczną przez Usługodawcę (Sprzedającego) na rzecz
          Usługobiorcy (Kupującego) za pośrednictwem sklepu. <br />
          <StyledStrong>
            KONTO UŻYTKOWNIKA KURSU/PROGRAMU ONLINE.
          </StyledStrong>{' '}
          Oznacza indywidualny dla każdego Klienta dostęp do panelu z zakupionym
          produktem online, uruchomiony na rzecz Kupującego (Klienta) przez
          Sprzedawcę. <br />
          <StyledStrong>KONSUMENT.</StyledStrong> Rozumie się przez to
          konsumenta w rozumieniu przepisów ustawy z dnia 23 kwietnia 1964 r.
          Kodeksu cywilnego. Od 1 stycznia 2021 roku przepisy dotyczące
          konsumenta będą stosowane także do osoby fizycznej zawierającej umowę
          bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści
          tej umowy wynika, że nie posiada ona dla niej charakteru zawodowego,
          wynikającego w szczególności z przedmiotu wykonywanej przez nią
          działalności gospodarczej, udostępnionego na podstawie przepisów o
          Centralnej Ewidencji i Informacji o Działalności Gospodarczej.
          <br />
          <StyledStrong>KLIENT/KUPUJĄCY/UŻYTKOWNIK.</StyledStrong> Rozumie się
          przez to Konsumentów oraz Przedsiębiorców, osoby prawne i inne osoby
          dokonujące zakupów w sklepie.
        </StyledParagraph>

        <StyledHeading>OCHRONA DANYCH OSOBOWYCH</StyledHeading>
        <StyledParagraph>
          Dane osobowe Kupującego są przetwarzane w celu obsługi konta
          użytkownika, realizacji zamówienia oraz ewentualnej obrony,
          dochodzenia lub ustalenia roszczeń związanych z zawieranymi za
          pośrednictwem sklepu internetowego umowami sprzedaży. Szczegóły
          dotyczące przetwarzania danych osobowych oraz wykorzystywania plików
          cookies znajdują się odpowiednio: w Polityce prywatności oraz w
          Polityce cookies dostępnych na stronie internetowej Sprzedającego.
          Korzystanie z usług świadczonych drogą elektroniczną może wiązać się z
          zagrożeniem pozyskania oraz modyfikowania danych Klientów przez osoby
          nieuprawnione. Żeby temu zapobiec, Klienci powinni stosować
          odpowiednie środki techniczne, które zminimalizują te zagrożenia, w
          szczególności programy antywirusowe, bezpieczna skrzynka poczty
          elektronicznej oraz inne chroniące bezpieczeństwo korzystających z
          publicznej sieci Internet. Sprzedawca nigdy nie zwraca się do Klienta
          z prośbą o udostępnienie loginu ani hasła w jakiejkolwiek formie.
        </StyledParagraph>
        <StyledHeading>DANE KONTAKTOWE</StyledHeading>
        <StyledParagraph>
          Magdalena Kowalska, prowadząca działalność gospodarczą pod nazwą
          Magdalena Kowalska wpisana do Centralnej Ewidencji i Informacji o
          Działalności Gospodarczej prowadzonej przez ministra właściwego do
          spraw gospodarki i prowadzenia Centralnej Ewidencji i Informacji o
          Działalności Gospodarczej z nr REGON 890568582 oraz NIP 8831256321, z
          siedzibą Kłodzko, ul. Malczewskiego DIII/1. Kontakt w zakresie
          sprzedaży produktów elektronicznych przez Sprzedawcę pod adresem
          e-mail: hello@magdalena-kowalska.pl
        </StyledParagraph>
        <StyledHeading>ZAWARCIE UMOWY SPRZEDAŻY</StyledHeading>
        <StyledParagraph>
          Zamówienia można składać przez 7 dni w tygodniu, 24 godziny na dobę.
          Klient składa Zamówienie przez kliknięcie w przycisk finalizujący
          zamówienie „Zamawiam i płacę”. Warunkiem koniecznym złożenia
          Zamówienia jest akceptacja Regulaminu, z którym Kupujący powinien
          uprzednio się zapoznać. W razie jakichkolwiek wątpliwości dotyczących
          szczegółów Regulaminu Kupujący może skontaktować się ze Sprzedawcą.
          Warunkiem zawarcia umowy jest poprawne wypełnienie Formularza
          zamówienia. Płatności należy dokonać niezwłocznie po złożeniu
          Zamówienia. Z chwilą skutecznego dokonania płatności pomiędzy Klientem
          a Sprzedawcą zostaje zawarta umowa o dostarczenie treści cyfrowej
          (produktu elektronicznego). Do Klienta wysyłana jest wiadomość e-mail,
          w której znajduje się link pozwalający na pobranie zakupionego
          produktu albo wiadomość e-mail zawierająca informacje dotyczące
          logowania na Platformę kursową lub instrukcję dotyczącą sposobu
          pobrania produktu elektronicznego lub uzyskania do niego dostępu.
          Zakupiony przez Klienta produkt jest dostępny do korzystania lub
          pobrania bezpośrednio z Konta Klienta na Platformie lub uwalniany w
          tempie w określonym w opisie produktu (w przypadku, gdy jest to
          program mentoringowy realizowany z grupą). W przypadku złożenia
          Zamówienia dotyczącego sprzedaży produktów elektronicznych z chwilą
          skutecznego dokonania płatności między Kupującym a Sprzedawcą dochodzi
          do zawarcia kilku umów określonego rodzaju, których treść jest
          związana z przedmiotem zamówienia na Platformie.
        </StyledParagraph>
        <StyledHeading>UMOWA ZWIĄZANA Z PRODUKTEM ELEKTRONICZNYM</StyledHeading>
        <StyledParagraph>
          Produkt stanowi treść cyfrową w rozumieniu art. 38 ustawy z dnia 30
          maja 2014 r. o prawach konsumenta. W ramach umowy zawartej zgodnie z
          postanowieniami niniejszego Regulaminu Sprzedawca dostarcza Kupującemu
          treść cyfrową w postaci zakupionego przez Kupującego produktu.
          Sprzedawca nie świadczy na rzecz Kupującego jakiejkolwiek dodatkowej
          pomocy przy korzystaniu z produktu elektronicznego. Sprzedawca nie
          ponosi także odpowiedzialności za niespełnienie warunków technicznych
          przy korzystaniu z zakupionego produktu elektronicznego. Zabrania się
          Kupującemu udostępniać produkt elektroniczny lub dane do swojego konta
          innych podmiotom. Zakupiony produkt stanowi własność autorską
          Sprzedawcy i nie może być przedmiotem odsprzedaży czy dystrybucji.
        </StyledParagraph>
        <StyledHeading>FORMY PŁATNOŚCI</StyledHeading>
        <StyledParagraph>
          Po złożeniu przez Kupującego Zamówienia zgodnie z procedurą opisaną w
          Regulaminie na adres e-mail Kupującego zostanie wysłane potwierdzenie
          dokonania Zamówienia. Dostępne metody płatności za Zamówienie to
          przelew elektroniczny i płatność kartą. Po naciśnięciu w przycisk
          finalizujący „Zamawiam i płacę” Kupujący będzie miał możliwość wyboru
          formy płatności i zostanie w sposób automatyczny przekierowany do okna
          płatności obsługiwanej przez zewnętrznego dostawcę w celu dokonania
          płatności za Zamówienie. Do każdego zamówienia jest wystawiany
          dokument potwierdzający dokonanie płatności, dołączany w wiadomości
          e-mail. Każdy Klient otrzymuje fakturę wysyłaną w formie załącznika do
          korespondencji e-mail.
        </StyledParagraph>

        <StyledHeading>WARUNKI KORZYSTANIA Z PLATFORMY</StyledHeading>
        <StyledParagraph>
          Produkty online dostępne są przez platformę internetową. Wystarczające
          warunki dające możliwość korzystania z zakupionego produktu to:
        </StyledParagraph>
        <StyledList>
          <li>dostęp do urządzenia podłączonego do sieci internetowej</li>
          <li>
            zainstalowany i aktualny system operacyjny oraz przeglądarka
            internetowa
          </li>
          <li>
            posiadanie aktywnego konta e-mail, czyli poczty elektronicznej
          </li>
          <li>
            posiadanie pakietu oprogramowania biurowego Microsoft Office lub
            jego odpowiednika.
          </li>
        </StyledList>
        <StyledParagraph>
          W celu otrzymania dostępu do zamkniętej grupy wsparcia, utworzonej
          przez Sprzedawcę na platformie Facebook, konieczne jest, aby Kupujący
          posiadał konto na tej platformie. W przypadku, gdy Klient nie jest w
          stanie uruchomić zakupionego produktu, proszony jest o kontakt ze
          Sprzedawcą za pomocą wskazanego w niniejszym Regulaminie lub na
          stronie internetowej adresu e-mail. Klient może korzystać z pomocy
          technicznej w razie problemów dotyczących funkcjonowania Platformy
          drogą elektroniczną, wysyłając zapytanie na adres e-mail Sprzedawcy.
          Klient jest zobowiązany do korzystania z Platformy w sposób zgodny z
          prawem i dobrymi obyczajami, mając na uwadze poszanowanie dóbr
          osobistych oraz praw autorskich i własności intelektualnej Sprzedawcy
          oraz osób trzecich. Zabrania się Klientowi udostępniania swojego konta
          innym lub korzystania z kont innych klientów. Klient jest zobowiązany
          do wprowadzania danych zgodnych ze stanem faktycznym. Zakazane jest
          dostarczanie przez klienta/usługobiorcę treści o charakterze
          bezprawnym.
        </StyledParagraph>

        <StyledHeading>OBSŁUGA KONTA NA PLATFORMIE</StyledHeading>
        <StyledParagraph>
          Złożenie zamówienia równoznaczne jest z utworzeniem Konta na
          Platformie. Kupujący loguje się do Konta z wykorzystaniem swojego
          adresu e-mail oraz hasła otrzymanego mailem po zakupie hasła.
          Założenie Konta odbywa się przez wypełnienie i przesłanie Formularza
          zamówienia. Informacje, których podanie jest niezbędne do założenia
          Konta i realizacji zamówienia, są wyraźnie oznaczone w formularzu
          rejestracyjnym. Z chwilą przesłania Formularza zamówienia między
          Kupującym a Sprzedawcą jest zawierana umowa o prowadzenie konta na
          Platformie. Umowa jest zawierana na czas nieokreślony, a Kupujący może
          tę umowę wypowiedzieć ze skutkiem natychmiastowym w każdej chwili,
          usuwając Konto. Po wypełnieniu i przesłaniu Formularza zamówienia na
          adres e-mail Klienta umieszczony w Formularzu zamówienia zostanie
          niezwłocznie wysłana wiadomość potwierdzająca rejestrację i
          zawierająca Regulamin. Zabronione jest umieszczanie przez Klienta
          wśród informacji dostępnych na koncie treści o charakterze bezprawnym.
          W celu zapewnienia bezpieczeństwa Kupującemu i przekazu danych w
          związku z korzystaniem z Platformy, Sprzedawca podejmuje środki
          techniczne i organizacyjne, odpowiednie do stopnia zagrożenia
          bezpieczeństwa świadczonych usług, w szczególności środki służące
          zapobieganiu pozyskiwania i modyfikacji danych osobowych przez osoby
          nieuprawnione. Sprzedawca podejmuje działania w celu zapewnienia w
          pełni bezpiecznego i poprawnego funkcjonowania Platformy. Kupujący
          informuje Sprzedawcę o wszelkich nieprawidłowościach lub przerwach w
          funkcjonowaniu Platformy.
        </StyledParagraph>
        <StyledHeading>
          ZASADY KORZYSTANIA Z PROGRAMU/KURSU ONLINE
        </StyledHeading>
        <StyledParagraph>
          Konto użytkownika jest prowadzone na Platformie. Za pomocą Konta
          Klient otrzymuje dostęp do produktu elektronicznego zakupionego u
          Sprzedawcy. W celu otrzymania dostępu do kursu online Kupujący
          powinien zalogować się na Platformie przy wykorzystaniu nazwy
          użytkownika oraz hasła. Użytkownik może zgłosić żądanie usunięcia
          Konta, przy czym w przypadku zgłoszenia żądania usunięcia Konta przez
          Sprzedawcę może ono zostać usunięte do 14 dni od zgłoszenia żądania.
          Użytkownik wysyła do Sprzedawcy w tym celu drogą elektroniczną
          oświadczenia o rozwiązaniu umowy. Analogiczne zastosowanie ma to do
          rozwiązania umowy przez Sprzedawcę. Materiały na Platformie będą
          dostępne przez 1 rok od dnia otrzymania dostępu do kursu online lub
          zakończenia trwania programu mentoringowego. W przypadku zakupu kursu
          online przed terminem jego rozpoczęcia (przedsprzedaż kursu online)
          materiały będą dostępne przez 1 rok od dnia uruchomienia kursu online.
          W przypadku programu online Konsument ma prawo odstąpić od umowy w
          terminie 14 dni od dnia zawarcia umowy, chyba że wyraził zgodę na
          dostarczenie treści cyfrowej natychmiast i wyraził zgodę na rezygnację
          z prawa do odstąpienia od umowy.
        </StyledParagraph>
        <StyledHeading>
          WARUNKI LICENCYJNE DLA PROGRAMU/KURSU ONLINE
        </StyledHeading>
        <StyledParagraph>
          Produkty elektroniczne, które zostały udostępnione przez Sprzedawcę,
          stanowią wytwór jego twórczości intelektualnej i jako takie podlegają
          ochronie prawnej. Produkty elektroniczne stanowią utwór zgodnie z
          treścią ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach
          pokrewnych i podlegają ochronie prawa. Sprzedawca przekazuje Kupującym
          dostęp do zakupionych produktów, łącznie z prawem do korzystania z
          nich (licencja). Okres trwania licencji na kurs online obejmuje 1 rok.
          Kupujący jest zobowiązany do przestrzegania warunków niniejszej
          licencji. Kupujący ma prawo korzystać z programu/kursu online tylko na
          własny użytek i zgodnie z obowiązującymi przepisami prawa. Zabrania
          się Kupującemu udostępniać produkt lub dane do swojego konta innym
          podmiotom. Zakupiony produkt nie może być przedmiotem odsprzedaży lub
          dystrybucji i sprzedaży handlowej. Licencja udzielona Kupującemu nie
          obejmuje prawa do:
        </StyledParagraph>
        <StyledList>
          <li>
            wprowadzania jakichkolwiek innych zmian w części lub całości kursu
            online
          </li>
          <li>
            odpłatnego bądź nieodpłatnego rozpowszechniania kursu online
            jakimikolwiek środkami i w jakiejkolwiek formie
          </li>
          <li>
            odpłatnego bądź nieodpłatnego rozpowszechniania w jakiejkolwiek
            formie, w tym sprzedaży, użyczenia, najmu lub udostępniania w
            Internecie kursu online w całości lub w części
          </li>
          <li>
            drukowania w całości lub w części produktu, z wyjątkiem drukowania
            na użytek własny, zgodny z warunkami licencji.
          </li>
        </StyledList>
        <StyledHeading>ODSTĄPIENIE OD UMOWY PRZEZ KONSUMENTA</StyledHeading>
        <StyledParagraph>
          Jeśli w toku zakupu produktu Konsument wyraził zgodę na wykonanie
          umowy i dostarczenie mu treści cyfrowej zgodnie z art. 38 ustawy z
          dnia 30 maja 2014 r. o prawach konsumenta w postaci zakupionego
          produktu przed upływem terminu do odstąpienia od umowy, traci on prawo
          do odstąpienia od umowy zawartej ze Sprzedawcą. Wyjątkiem od
          powyższego jest program mentoringowy, realizowany wspólnie z grupą.
          Szczegóły rezygnacji opisane są w ofercie danego programu na stronie
          internetowej. W sytuacji, gdy nie występują okoliczności wskazane
          powyżej, Konsument ma prawo odstąpić od umowy na warunkach wskazanych
          poniżej. Konsument, który zawarł ze Sprzedawcą umowę na odległość, ma
          prawo odstąpić od umowy bez podawania przyczyny w terminie 14 dni od
          dnia objęcia w posiadanie kupionych rzeczy, z zastrzeżeniem sytuacji
          wskazanych w art. 38 ustawy z dnia 30 maja 2014 r. o prawach
          konsumenta (pierwsza linia w tym paragrafie). Odstąpienie od umowy
          następuje przez poinformowanie Sprzedawcy o swojej decyzji za pomocą
          oświadczenia. Takie oświadczenie może zostać wysłane pocztą tradycyjną
          na podany w Regulaminie adres lub pocztą elektroniczną. Konsument może
          skorzystać ze wzoru formularza odstąpienia od umowy, udostępnionego
          jako załącznik do niniejszego Regulaminu. Skorzystanie z formularza
          jest jednak tylko rekomendacją dla Konsumenta, a jego niewykorzystanie
          w procesie odstąpienia od umowy nie stanowi o nieważności odstąpienia.
          W przypadku odstąpienia od umowy Sprzedawca zwraca Konsumentowi
          wszystkie otrzymane od Konsumenta płatności. Zwrot płatności zostanie
          dokonany przy użyciu tych samych sposobów płatności, które zostały
          przez Konsumenta użyte w pierwotnej transakcji, chyba że Konsument
          wyraźnie wskazał na inne rozwiązanie. Konsument nie poniesie żadnych
          opłat w związku z formą zwrotu płatności.
        </StyledParagraph>
        <StyledHeading>
          SPOSÓB SKŁADANIA REKLAMACJI ORAZ PROCEDURA ROZPATRYWANIA
        </StyledHeading>
        <StyledParagraph>
          Sprzedawca zobowiązany jest dostarczyć Kupującemu produkt wolny od
          wad. Sprzedawca ponosi odpowiedzialność względem Kupującego, jeżeli
          sprzedany produkt ma wadę fizyczną lub prawną. W przypadku, kiedy
          Kupujący stwierdzi wadę produktu, powinien poinformować o tym fakcie
          Sprzedawcę, określając jednocześnie swoje roszczenie związane ze
          stwierdzoną wadą lub składając oświadczenie stosownej treści. W celu
          złożenia reklamacji Kupujący może skorzystać z formularza
          reklamacyjnego udostępnionego przez Sprzedawcę (i stanowiącego
          załącznik do niniejszego Regulaminu). Kupujący może kontaktować się ze
          Sprzedawcą zarówno pocztą tradycyjną, jak i pocztą elektroniczną.
          Klient może zgłaszać Sprzedawcy reklamacje w związku z korzystaniem z
          usług elektronicznych. Reklamacje można zgłaszać pisemnie lub na adres
          poczty elektronicznej. W reklamacji Klient powinien podać swoje imię i
          nazwisko, adres do korespondencji, rodzaj i opis zaistniałego
          problemu. Sprzedawca zobowiązuje się do rozpatrzenia każdej reklamacji
          w terminie do 14 dni. Szczegóły dotyczące rękojmi Sprzedawcy za wady
          regulują przepisy Kodeksu cywilnego. O rozpatrzeniu reklamacji i jej
          wyniku Sprzedający powiadomi Klienta w wiadomości wysłanej na adres
          poczty elektronicznej lub korespondencyjny podany przez Klienta w
          reklamacji. Zaleca się podanie przez Klienta w opisie reklamacji
          następujących informacji: okoliczności dotyczących przedmiotu
          reklamacji, w szczególności rodzaju i daty wystąpienia wady, żądania
          sposobu doprowadzenia produktu do zgodności z umową sprzedaży lub
          oświadczenia o obniżeniu ceny albo odstąpieniu od umowy sprzedaży oraz
          danych kontaktowych składającego reklamację. W przypadku otrzymania
          niekompletnej reklamacji Sprzedawca wezwie Klienta do jej
          uzupełnienia.
        </StyledParagraph>
        <StyledHeading>
          POZASĄDOWE SPOSOBY ROZPATRYWANIA REKLAMACJI I DOCHODZENIA ROSZCZEŃ
        </StyledHeading>
        <StyledParagraph>
          Sprzedawca wyraża zgodę na poddanie ewentualnych sporów wynikłych w
          związku ze sprzedażą produktów na drodze postępowania mediacyjnego.
          Szczegóły zostaną określone przez Strony konfliktu. Wszelkie spory
          związane z usługami świadczonymi przez Sprzedawcę będą rozstrzygane
          przez sądy powszechne, a prawem właściwym jest prawo polskie. Klient
          będący konsumentem ma możliwość skorzystania z pozasądowego sposobu
          rozpatrywania reklamacji i dochodzenia roszczeń. Zasady dostępu do
          tych procedur są dostępne w siedzibach oraz na stronach internetowych
          powiatowych (miejskich) rzeczników konsumentów, organizacji
          społecznych, do których zadań statutowych należy ochrona konsumentów,
          Wojewódzkich Inspektoratów Inspekcji Handlowej oraz pod następującymi
          adresami internetowymi Urzędu Ochrony Konkurencji i Konsumentów.
        </StyledParagraph>
        <StyledHeading>POSTANOWIENIA KOŃCOWE</StyledHeading>
        <StyledParagraph>
          Niniejszy Regulamin obowiązuje od 5 stycznia 2021. Niniejszy Regulamin
          został sporządzony na podstawie przepisów prawa polskiego. W sprawach
          nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy
          prawa polskiego, w tym Kodeksu cywilnego, ustawy z dnia 30 maja 2014
          r. o prawach konsumenta lub innych ustaw mających zastosowanie do
          działalności i funkcjonowania sprzedaży na odległość, obowiązujących
          na terenie Rzeczypospolitej Polskiej. Sprzedawca zastrzega sobie
          możliwość wprowadzania zmian w Regulaminie. Do umów zawartych przed
          zmianą Regulaminu stosuje się Regulamin obowiązujący w dacie zawarcia
          umowy. Sprzedawca zastrzega sobie prawo do wprowadzania oraz
          odwoływania ofert, promocji oraz do zmiany cen produktów bez
          uszczerbku dla praw nabytych przez Kupującego, w tym w szczególności
          warunków umów zawartych przed dokonaniem zmiany. Sprzedający nie
          ponosi odpowiedzialności za wykorzystanie wiedzy zawartej w produktach
          elektronicznych, w tym kursie online kupionego przez Kupującego oraz
          za nieuzyskanie przez Kupującego zamierzonych celów biznesowych.
          Skuteczność wdrożenia materiałów zawartych w produktach jest
          uzależniona między innymi od cech osobowościowych oraz zaangażowania w
          pracy własnej. Postanowienia Regulaminu nie wyłączają możliwości
          powoływania się przez Klientów na bezwzględnie obowiązujące przepisy
          prawa, regulujące ochronę praw konsumentów. Postanowienia niniejszego
          Regulaminu nie wykluczają podjęcia w stosunku do osób naruszających
          warunki licencji oraz prawa autorskie kroków prawnych, przewidzianych
          w powszechnie obowiązujących przepisach prawa.
        </StyledParagraph>
        <StyledHeading>ZAŁĄCZNIKI DO REGULAMINU</StyledHeading>
        <StyledDownloadLink href="https://magdalena-kowalska.pl/regulaminy/Formularz%20odst%C4%85pienia%20od%20umowy.docx">
          Formularz odstąpienia od umowy
        </StyledDownloadLink>
        <br />
        <StyledDownloadLink href="https://magdalena-kowalska.pl/regulaminy/Formularz%20reklamacji.docx">
          Formularz reklamacji
        </StyledDownloadLink>
      </StyledWrapper>
      <StyledLink to="/">wróć</StyledLink>
    </StyledSection>
  );
};

export default ShopRegulations;
