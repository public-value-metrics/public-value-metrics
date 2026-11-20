# Oportunitné náklady vo verejných výdavkoch

Oportunitné náklady sú hodnota najlepšej alternatívy, ktorej sa verejný orgán vzdá, keď viaže peniaze,
čas zamestnancov alebo politický kapitál na jednu možnosť namiesto inej. V rezorte s pevným
rozpočtom je každá libra vynaložená na jeden program librou, ktorú nemožno minúť na ďalší najlepší
program. Skutočné náklady rozhodnutia nie sú to, čo sa minie, ale to, čo sa tým vytlačí.

## Prečo na tom záleží

Verejné rozpočty sú v rámci obdobia výdavkového preskúmania peňažne obmedzené, takže na rozdiel od
rastúcej súkromnej firmy rezort nemôže na dobrý nápad jednoducho „nájsť viac peňazí“; jeho
financovanie znamená zbaviť financovania niečo iné. Green Book britského ministerstva financií (HM
Treasury) to považuje za základ: každé posudzovanie musí porovnať intervenciu so základným scenárom
„minimálnej akcie“ (do minimum) *a* s realistickými alternatívnymi využitiami tých istých zdrojov,
práve preto, že skutočná otázka, ktorú si kladie výdavkový tím ministerstva financií, nikdy nie je
„je to dobré?“, ale „je to lepšie než to, čo by sa za tieto peniaze dalo kúpiť inde?“. Základný
princíp posudzovania podľa Green Book, že verejné zdroje majú plynúť k intervencii s najvyššou čistou
spoločenskou hodnotou na libru, je oportunitný náklad vyjadrený ako politika.

Ľahko sa to povie a ťažko aplikuje, lebo „ďalšia najlepšia alternatíva“ je len zriedka viditeľná v
jedinom podnikateľskom prípade. Grantový program za 2 milióny libier na zamestnanosť mladých sa v
podnikateľskom prípade porovnáva s nerobením nič, ale poctivý komparátor je ďalšia najlepšia
intervencia v oblasti zamestnanosti mladých, alebo vlastne ďalšie najlepšie využitie 2 miliónov libier
kdekoľvek v portfóliu vrátane výdavkov nesúvisiacich so zamestnanosťou. Magenta Book (HM Treasury,
2020) výslovne varuje, že hodnotenia porovnávajúce „s intervenciou“ a „bez intervencie“ podhodnocujú
latku, ktorú musí intervencia prekonať, pretože „bez tejto intervencie“ nie je to isté ako „s ničím“:
uvoľnené peniaze financujú niečo iné.

## Matematika

```
Oportunitné náklady voľby A = hodnota najlepšej obetovanej alternatívy B

Čistá verejná hodnota A = hodnota(A) − hodnota(B), nie hodnota(A) − 0
```

Neexistuje univerzálny vzorec, lebo obetovaná alternatíva závisí od kontextu, ale disciplína sa dá
zovšeobecniť: identifikujte realistické ďalšie najlepšie využitie rovnakej rozpočtovej položky (nie
idealizované „nerobiť nič“), ocenite ho na rovnakom základe (peňažne, kde je to možné, podľa
[sociálnej analýzy nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/)) a odpočítajte.

## Vypracovaný príklad

**Rozpočtová položka rezortu**: fond digitálnej transformácie vo výške £5 miliónov môže tento
rozpočtový rok financovať presne jeden z dvoch návrhov.

- *Možnosť A*: nová platforma na správu prípadov, peňažne vyjadrený prínos £7,2 milióna za 5 rokov
  (úspory efektívnosti a rýchlejšie vyriešenie prípadov).
- *Možnosť B*: služba overovania totožnosti zdieľaná troma rezortmi, peňažne vyjadrený prínos
  £6,4 milióna za 5 rokov.

Naivný podnikateľský prípad pre A porovnáva prínos £7,2 milióna s nákladmi £5 miliónov a vykazuje
pomer prínosov a nákladov 1,44 : 1, zdanlivo silný. Keďže však A a B súperia o rovnakých £5 miliónov,
oportunitné náklady voľby A sú obetovaný prínos B vo výške £6,4 milióna. *Čistý* prípad pre A oproti
realistickej alternatíve je len £7,2 mil. − £6,4 mil. = £0,8 milióna, nie celých titulkových £7,2
milióna. Ak by tretia možnosť C ponúkala prínos £7,5 milióna za tých istých £5 miliónov, financovanie
A namiesto C by zničilo £0,3 milióna verejnej hodnoty, aj keď podnikateľský prípad A sa osamote javí
ako plne odôvodnený.

**Čas zamestnancov miestnej samosprávy**: trojčlenný dátový tím mestskej rady môže vytvoriť buď
dashboard čakacej listiny na bývanie (odhadovaná úspora 400 úradníckych hodín ročne, ocenená na
£28/hodinu = £11 200/rok), alebo nástroj na triáž podvodov s dávkami (odhadovaná prevencia £85 000
ročne v nesprávnych platbách). Vytvorenie dashboardu má oportunitné náklady vo výške obetovaných
£85 000/rok, nie len mzdové náklady dátového tímu. Skutočné náklady „bezplatného“ interného vývoja
sú oveľa vyšší prínos, ktorý tím mohol vytvoriť inde.

## Súvislosť so softvérovým inžinierstvom

Inžinierska kapacita vo verejnom orgáne je sama osebe obmedzený rozpočet (kapacita šprintu, nie libry)
a rovnaká disciplína sa na ňu vzťahuje priamo:

- Vždy pomenujte komparátor: podnikateľský prípad funkcie by mal uvádzať, čo iné by mohli dodať
  tie isté týždne práce tímu, nie len jej vlastnú návratnosť.
- Považujte „máme voľnú inžiniersku kapacitu“ za začiatok analýzy oportunitných nákladov, nie jej
  koniec: voľná kapacita má stále najlepšie alternatívne využitie, aj keby to bolo splácanie
  technického dlhu (pozri
  [technický dlh ako erózia verejnej hodnoty](../technický-dlh-ako-erózia-verejnej-hodnoty/)).
- Prepojte to priamo s [hodnotou za peniaze](../hodnota-za-peniaze/): test „hospodárnosti“ (economy) v
  rámci VFM je bez poctivého komparátora oportunitných nákladov bezvýznamný, a s
  [nákladmi omeškania vo verejných programoch](../náklady-oneskorenia-vo-verejných-programoch/), ktoré oceňujú
  časový rozmer tej istej logiky obetovanej alternatívy.

## Úskalia

- **Porovnávanie s „nerobením nič“ namiesto ďalšej najlepšej alternatívy.** Green Book vyžaduje
  základný scenár „minimálnej akcie“ práve preto, že skutočné oportunitné náklady sú len zriedka
  nulové; podnikateľský prípad, ktorý prekoná len latku „nerobiť nič“, nepreukázal, že prekonáva
  realistickú alternatívu.
- **Ignorovanie medzirezortnej súťaže o ten istý balík.** Rozpočtové položky, ktoré sa v rámci jedného
  riaditeľstva javia ako vyčlenené, často súperia na vyššej úrovni (výdavkové preskúmanie, kapitálový
  program), kde sa skutočné oportunitné náklady realizujú.
- **Predpoklad, že uvoľnený čas zamestnancov nemá žiadnu ďalšiu hodnotu.** „Ušetrený“ čas vytvára
  hodnotu, len ak sa presunie k niečomu hodnotnému; ak alternatívne využitie neexistuje, úspora je
  fiktívna.

## Zdroje

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) – kanonická empirická demonštrácia oportunitných nákladov ako
  záväznej obmedzujúcej podmienky v pevnom verejnom rozpočte. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
