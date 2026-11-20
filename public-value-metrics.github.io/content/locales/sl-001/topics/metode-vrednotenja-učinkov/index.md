# Metode vrednotenja učinkov

Metode vrednotenja učinkov so statistične in eksperimentalne zasnove, s katerimi se ocenjuje, kaj je politika ali program dejansko povzročil, za razliko od tega, kaj bi se zgodilo tako ali tako – naključno kontrolirana preskušanja (RCT), razlika razlik (difference-in-differences), ujemanje po nagnjenosti (propensity score matching) in zasnova z regresijsko diskontinuiteto so štiri najpogosteje uporabljene v britanski javni politiki. Obstajajo, ker večine vladnih ukrepov ni mogoče preizkusiti v laboratoriju: ne morete naključno določiti, katero mesto dobi novo avtobusno progo, kakor lahko naključno določite, kateri bolnik dobi zdravilo, zato te metode izposodijo isto vzročno logiko, ne da bi vedno zahtevale naključno dodelitev.

## Zakaj je pomembno

Magenta Book britanskega zakladnega ministrstva (HM Treasury), Priloga A o kvazieksperimentalnih metodah, je kanonično navodilo britanske vlade za izbiro med temi zasnovami, ustanove, kot sta Education Endowment Foundation in What Works Centre for Local Economic Growth, pa institucionalizirajo hierarhijo dokazov okoli njih – RCT, kjer je naključna dodelitev izvedljiva in etična, kvazieksperimentalne zasnove, kjer ni. Izbira metode ni tehnični naknadni pomislek: določa, ali lahko vrednotenje odgovori na »ali je program to povzročil?« ali le na »ali se je to zgodilo po začetku programa?«, kar je isto vprašanje, ki ga [kontrafaktična analiza](../kontrafaktična-analiza/) prisili izvajalce, da si zastavijo, preden se naroči kakršno koli vrednotenje.

## Matematika

```
RCT:
  Učinek = povprečje(izid | skupina z obravnavo) − povprečje(izid | kontrolna skupina)
  (veljavno, ker je dodelitev obravnavi naključna)

Razlika razlik (DiD):
  Učinek = [izid_po(obravnavani) − izid_pred(obravnavani)]
         − [izid_po(kontrola) − izid_pred(kontrola)]
  (zahteva predpostavko »vzporednih trendov«: obravnavani in kontrola bi se
   brez posega gibala skupaj)

Ujemanje po nagnjenosti (PSM):
  1. Oceni P(obravnava = 1 | kovariate X) za vsako enoto → ocena nagnjenosti
  2. Ujemi obravnavane enote z neobravnavanimi s podobnimi ocenami nagnjenosti
  3. Učinek = povprečje(izid | obravnavani) − povprečje(izid | ujemajoča kontrola)

Zasnova z regresijsko diskontinuiteto (RDD):
  Učinek = skok izida, opažen na pragu upravičenosti,
           s primerjavo enot tik nad mejo in tik pod njo
```

## Praktični primer

**Lokalna oblast (razlika razlik za program za družine v težavah)**: izid je šolska prisotnost. Obravnavano območje se v obdobju programa premakne z 84 % na 89 % prisotnosti (+5 odstotnih točk); primerljivo, a neobravnavano območje se v istem obdobju premakne z 85 % na 87 % (+2 odstotni točki). Ocena učinka DiD: 5 − 2 = +3 odstotne točke, pripisljive programu. Uporabljeno na kohorti 2 000 učencev v obravnavanem območju je to skladno s približno 60 dodatnimi učenci (3 % × 2 000), ki dosežejo višjo kategorijo prisotnosti – ekstrapolacija, o kateri bi bilo treba poročati z opozorilom o vzporednih trendih, ne kot o natančnem številu oseb.

**Dobrodelna organizacija (ujemanje po nagnjenosti za organizacijo za zaposljivost)**: 300 udeležencev programa je ujetih s 300 posamezniki iz večjega upravnega nabora podatkov z ocenami nagnjenosti, zgrajenimi iz starosti, prejšnje zgodovine zaposlitve in ravni kvalifikacij. Stopnja zaposlenosti po dvanajstih mesecih: ujeta obravnavana skupina 46 %, ujeta primerjalna skupina 33 %. Ocena učinka PSM: 46 % − 33 % = +13 odstotnih točk, pripisljivih programu, pod pogojem, da ni neopaženega zmedenega dejavnika (kot je motivacija), ki bi poganjal tako sodelovanje kot izid.

## Povezava s programskim inženirstvom

Ali je katera od teh zasnov pozneje izvedljiva, je močno odvisno od odločitev o podatkovnem inženirstvu, sprejetih zgodaj. RDD potrebuje natančno zabeleženo tekočo spremenljivko in zares čist prag upravičenosti; DiD potrebuje primerljive panelne podatke skozi čas za obravnavana in primerjalna območja, kar pomeni dosledne združitve med sistemi in leti; PSM potrebuje bogate osnovne podatke o kovariatah, zajete pred obravnavo, ne rekonstruirane naknadno. Podatkovni model, zasnovan skupaj s [teorijo sprememb](../teorija-spremembe/) in [logičnim modelom](../logični-model/) od začetka – ki zajema osnovne kovariate, datume in zapise, ki ustrezajo primerjalni skupini – omogoča strogo vrednotenje učinkov pozneje, namesto dragega naknadnega pehanja. Glej [vrednotenje učinkov proti vrednotenju procesa](../vrednotenje-učinkov-in-vrednotenje-procesa/) za dopolnilno vprašanje, na katerega te metode same ne odgovorijo.

## Pasti

- **Vsiljevanje RCT, kjer ni izvedljiv ali etičen**, ali nasprotno, nikoli ne razmišljanje o kvazieksperimentalni zasnovi, ko je bila na voljo prava priložnost zanjo – politični prag, postopna uvedba – in je ostala neizkoriščena.
- **Prezrta predpostavka vzporednih trendov pri DiD.** Če se je primerjalno območje že pred posegom razhajalo od obravnavanega, je primerjava dveh točk onesnažena; preverite trende pred posegom, ne le pred/po.
- **Ujemanje samo po opaženih kovariatah pri PSM.** Neopažena selekcija, kot je motivacija udeležencev, lahko pristransko vpliva na oceno, tudi ko so opažene kovariate dobro uravnotežene.
- **Manipulacija tekoče spremenljivke pri RDD.** Če lahko ljudje vplivajo na svojo oceno, da pade tik znotraj praga upravičenosti, diskontinuiteta ne izolira več vzročnega učinka.

## Viri

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
