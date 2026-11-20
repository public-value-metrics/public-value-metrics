# Databázy jednotkových nákladov

Databáza jednotkových nákladov je knižnica vopred preskúmaných, na dôkazoch založených finančných proxy ukazovateľov sociálnych výsledkov – hodnoty prechodu z nezamestnanosti do zamestnania, zníženej osamelosti, stabilného nájomného bývania – ktoré praktikovi umožňujú oceniť výsledok v peniazoch bez toho, aby zakaždým objednával vlastný výskum oceňovania. Existujú preto, aby malá charita píšuca žiadosť o financovanie mohla uplatniť rovnakú dôslednosť ako dobre vybavená poradenská firma, a to opätovným použitím proxy hodnoty, ktorú už niekto iný odvodil a zverejnil.

## Prečo na tom záleží

UK Social Value Bank od HACT, vytvorená s ekonómom Danielom Fujiwarom pomocou metód oceňovania pohody a dobrého života (wellbeing), a Global Value Exchange, otvorená databáza finančných proxy hodnôt tvorená komunitou, sú dve najpoužívanejšie databázy v britskom treťom a verejnom sektore. Obe existujú preto, že základná oceňovacia práca – [oceňovanie pohody a dobrého života](../oceňovanie-pohody/) a [oceňovanie metódou deklarovaných preferencií](../oceňovanie-metódou-deklarovaných-preferencií/) – je nákladná, metodicky náročná a pomalá, ak sa robí od nuly pre každý projekt. Zdieľaná, zverejnená knižnica proxy hodnôt mení to, čo by bolo viacmesačným výskumným cvičením, na vyhľadanie, a práve preto je dôležitá pre výpočty [sociálnej návratnosti investície](../sociálna-návratnosť-investície/) aj pre hodnotenie ponúk podľa [zákona o sociálnej hodnote](../zákon-o-sociálnej-hodnote/): bez nich by bolo dôsledné oceňovanie dostupné len organizáciám dostatočne veľkým na to, aby si objednali vlastné štúdie.

## Matematika

Databáza jednotkových nákladov sama nič nepočíta; dodáva jeden vstup do výpočtu, ktorý sa robí inde:

```
Hodnota finančného proxy = trhová cena, ALEBO tieňová cena, ALEBO ocenenie pohody a dobrého života,
                           ALEBO hodnota z deklarovaných preferencií
                           pre vymedzenú jednotku zmeny výsledku
                           (napr. „na osobu prechádzajúcu z nezamestnanosti do zamestnania, za rok“)

Použitá hodnota = počet dosiahnutých výsledkov × jednotková proxy hodnota
```

Pozri [tieňové ceny](../tieňové-ceny/) pre to, ako sa proxy zostrojí, keď neexistuje trhová cena, a [sociálnu návratnosť investície](../sociálna-návratnosť-investície/) pre to, ako použitá hodnota potom vstupuje do pomeru po úpravách o mŕtvu váhu a atribúciu.

## Vypracovaný príklad

**Charita (SROI služby priateľstva)**: záznam v databáze jednotkových nákladov pre „zníženie osamelosti“ dáva ilustratívnu proxy hodnotu £1 100 na osobu ročne. Pri 80 príjemcoch: 80 × £1 100 = £88 000 hrubej hodnoty. Ak tá istá databáza obsahuje aj proxy pre „zlepšené duševné zdravie a pohodu“, ktorá čerpá z prekrývajúcej sa položky prieskumu pohody, spojenie oboch proxy pre tých istých 80 ľudí by dvakrát započítalo časť tej istej základnej zmeny – databáza dodáva číslo, ale vyhnúť sa tomuto prekrytiu je zodpovednosť analytika.

**Miestna samospráva (SROI klubu práce)**: záznam v databáze jednotkových nákladov pre „prechod z nezamestnanosti do trvalého zamestnania“ sa uplatní na 45 účastníkov pri ilustratívnej proxy hodnote £8 500 na osobu ročne: 45 × £8 500 = £382 500 hrubej hodnoty pred úpravami o mŕtvu váhu a atribúciu, ktoré sú uvedené v [sociálnej návratnosti investície](../sociálna-návratnosť-investície/).

## Súvislosť so softvérovým inžinierstvom

Tímy, ktoré budujú nástroje na vykazovanie pre charity alebo objednávateľov, profitujú z interného „katalógu výsledkov“ – tabuľky, ktorá priraďuje každý výsledok, na ktorý si produkt alebo služba môže primerane robiť nárok, k pomenovanému proxy, jeho zdrojovej databáze, dátumu zverejnenia a identifikátoru verzie – aby si rôzne tímy v organizácii nevyberali mierne odlišné hodnoty pre ten istý výsledok. Zabalenie otvorených údajov Global Value Exchange do vyhľadávacej služby so zdrojom a dátumom vždy zobrazeným vedľa čísla udržuje proxy auditovateľný, namiesto toho, aby bol čarovným číslom ukrytým v tabuľke. Pozri [sociálnu návratnosť investície](../sociálna-návratnosť-investície/) a [zákon o sociálnej hodnote](../zákon-o-sociálnej-hodnote/) pre dve hlavné miesta, kde sa tieto proxy hodnoty spotrebúvajú.

## Úskalia

- **Považovanie proxy hodnôt za presné.** Väčšina zverejnených proxy hodnôt sú modelované priemery zo štúdií oceňovania pohody a dobrého života s širokými intervalmi spoľahlivosti; citovať ich na libru presne nadsadzuje presnosť, akú podkladový výskum podporuje.
- **Dvojité započítanie prekrývajúcich sa proxy hodnôt.** Kombinovanie proxy (napr. „zníženej osamelosti“ a „zlepšeného duševného zdravia a pohody“) odvodených z prekrývajúcich sa prieskumných konštruktov oceňuje tú istú základnú zmenu dvakrát.
- **Použitie proxy mimo kontextu bez úpravy.** Proxy kalibrovaný na jednu národnú populáciu a rok, uplatnený inde bez úpravy o infláciu alebo kontext, potichu skresľuje hodnotu.
- **Nekontrolovanie pôvodu.** Global Value Exchange je otvorená a tvorená komunitou, takže kvalita záznamov sa líši podľa prispievateľa; skontrolujte podkladový zdroj skôr, než číslo uvediete v žiadosti o financovanie alebo vo verejnom obstarávaní.

## Zdroje

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
