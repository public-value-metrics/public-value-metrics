# Tehnični dolg kot erozija javne vrednosti

Tehnični dolg je metafora Warda Cunninghama iz leta 1992 za implicitne prihodnje stroške preteklih ad hoc odločitev pri kodiranju: **glavnica** (dolgovano delo popravila) in **obresti** (nenehno breme, ki ga dolg povzroča izvedbi). V podedovani vladni IT-infrastrukturi se te obresti plačujejo neposredno iz javne vrednosti – počasnejše uvajanje zakonskih sprememb, višje stopnje odpovedi pri storitvah za državljane in krčeče se število ljudi, ki sploh lahko varno posegajo v sistem.

## Zakaj je pomembno

Podedovani sistemi velikih računalnikov in dobe COBOL v britanskih vladnih oddelkih – med najpogosteje omenjenima sta HMRC in DWP – nosijo dobro dokumentirano in naraščajoče tveganje, na katero je National Audit Office večkrat opozoril, tudi v poročilu *Digital Transformation in Government* (<https://www.nao.org.uk/>): staranje platform, ki jih je drago spreminjati, vse težje zavarovati in so odvisne od specializirane delovne sile, ki se upokojuje hitreje, kot se nadomešča. Za razliko od zasebnega sektorja ta dolg stoji neposredno med državljani in njihovimi zakonskimi pravicami – mehanizem za izračun prejemkov, ki ga ni mogoče varno spremeniti, je omejitev izvajanja politike, ne le inženirska neprijetnost. Ponoven zagon IT-programa Universal Credit leta 2013, ko je National Audit Office ugotovil, da prvotna gradnja ne bo prinesla vrednosti za denar in je bilo treba bistven del programskega sredstva odpisati, je kanonični zgled neovrednotenega tehničnega dolga, ki dohiti živ, ministrsko viden javni program.

## Matematika

```
Glavnica SQALE = Σ po kršitvah (čas popravila) × stroškovna stopnja razvijalca
Razmerje tehničnega dolga (TDR) = strošek popravila / strošek ponovnega razvoja × 100
                    (ocene SonarQube: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Obresti (številka, ki upravičuje odplačilo):
  obresti/leto = Δ hitrost izvedbe × vrednost na enoto hitrosti
                + Δ stopnja incidentov pri storitvah za državljane × strošek na incident
                + premija za specialistične veščine × prizadeto število zaposlenih
Primer odplačila = PV(preprečene obresti v horizontu) − strošek popravila
               (diskontirano z družbeno diskontno stopnjo Green Book, glej
               social-discount-rate.md)
```

Glavnica izkazuje obveznost; obresti so tisto, kar utemelji naložbo pred odborom za javne račune.

## Praktični primer

Mehanizem za obdelavo zahtevkov s 250 000 vrsticami, napisan v podedovanem 4GL. Z uporabo primerjalne vrednosti CAST Appmarq okoli $3,61 glavnice tehničnega dolga na vrstico kode (≈£2,85 po običajnem pretvorniku):

```
Glavnica ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16 % (ocena C)
```

Izmerjene obresti: oddelek zadržuje tri specialistične zunanje izvajalce s 40-odstotno premijo dnevnice nad standardnimi stopnjami starejših inženirjev, ker so notranje veščine izginile – dodatnih £180 000/leto za šestčlansko ekipo. Sistem povzroča tudi štiri večje izpade obdelave na leto, vsak ustavi odločanje za približno 5 000 prosilcev in jih preusmeri v klicni center po približno £25/klic:

```
Obresti ≈ £180 000 (premija za veščine)
        + 4 × 5 000 × £25 = £500 000 (strošek preusmerjenih stikov)
        ≈ £680 000/leto
```

Ciljno popravilo najslabše delujočih modulov stane £1 200 000 in po modelu zmanjša obresti za 70 %:

```
Zmanjšanje obresti = 0,70 × 680 000 = £476 000/leto
Vračilna doba ≈ 1 200 000 / 476 000 ≈ 2,5 leta
```

Ciljanje je pomembno: popravljanje redko spreminjane kode ne prinese ničesar, ker se obresti koncentrirajo tam, kjer sta pogostost sprememb in gostota dolga največji.

## Povezava s programskim inženirstvom

Okvir javne vrednosti, ki primer tehničnega dolga dvigne nad »koda je stara«: podedovano infrastrukturo izrazite kot popis, kje je zgoščena izgubljena izvedbena zmogljivost, in jo izrecno povežite s [skupnimi stroški lastništva](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/), saj so obresti operativni strošek, ki sodi v vrstico TCO, ne glede na to, ali so finance kdaj vprašale po njem. Z dolgom obremenjeni sistemi nosijo tudi nesorazmerno [kibernetsko](../vrednost-kibernetske-varnosti-v-javnem-sektorju/) izpostavljenost, ker sta pogostost popravkov in gostota dolga povezani – sistem, ki ga ni mogoče popraviti, je tehnični dolg, katerega obresti se plačujejo v tveganju incidentov in ne v funtih. Vsak kompromis med popravilom in novimi funkcijami je sam po sebi odločitev o [stroških odlašanja](../strošek-zamude-v-javnih-programih/): odplačilo dolga odloži naslednjo zakonsko spremembo, ki ima svoje stroške odlašanja, ki jih je treba tehtati proti prihranjenim obrestim.

## Pasti

- **Poročanje samo o glavnici**: velika, strašljiva ocena popravila brez številke obresti ne upraviči ničesar pred odobravalcem porabe.
- **Dobesedno jemanje številk dolga, ki jih ustvarijo orodja**: pregledovalniki v slogu SQALE štejejo kršitve pravil; zgrešijo drago vrsto dolga – arhitekturne odločitve in nedokumentirana podedovana poslovna pravila – hkrati pa označujejo malenkosti.
- **»Prepis se izogne vsemu temu«**: programi zamenjave morajo prestati isto disciplino kot vsak drug poslovni primer – protidejstveni strošek, verjetnost uspeha in diskontiranje – ne izjeme od nje, kot je pokazal ponoven zagon Universal Credit leta 2013.
- **Utopizem ničelnega dolga**: optimalna raven dolga ni nič; dolg je vzvod, ki je kupil zgodnejšo dobavo. Živo vprašanje je vedno obrestna mera, ne ali dolg sploh obstaja.

## Viri

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
