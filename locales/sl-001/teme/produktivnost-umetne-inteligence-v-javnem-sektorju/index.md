# Produktivnost umetne inteligence v javnem sektorju

Metrike o tem, kaj pomoč umetne inteligence pri programiranju dejansko stori z inženirskim izložkom (stopnje sprejemanja predlogov, pospešitve v nadzorovanih študijah, prepustnost zahtevkov za združitev in ohranitev kode), imajo že brez omejitev javnega sektorja resnično protislovno dokazno bazo. Razvrstitev podatkov določa, katerih delov starejše zapuščine orodje umetne inteligence sploh sme obravnavati, javna naročila pomenijo, da je orodje, ki se ocenjuje, pogosto za eno generacijo modelov za trenutnimi zmogljivostmi, zahteve glede varnostnih preverjanj pa urejajo, kdo ga sme uporabljati za kaj.

## Zakaj je pomembno

Dve najpogosteje navajani nadzorovani študiji kažeta v nasprotni smeri. Randomizirano kontrolirano preskušanje Penga in sod. iz leta 2023 o GitHub Copilotu je ugotovilo, da so razvijalci nalogo gradnje strežnika HTTP od ničle z Copilotom opravili 55,8 % hitreje (1 h 11 min proti 2 h 41 min, n = 95). Preskušanje METR iz leta 2025 je ugotovilo, da so bili izkušeni razvijalci odprtokodnih projektov, ki so delali na *svojih lastnih zrelih repozitorijih*, z orodji umetne inteligence z začetka leta 2025 za 19 % počasnejši, čeprav so verjeli, da so približno 20 % hitrejši. Obe študiji sta trdni; protislovje je samo ugotovitev: učinkovitost pri nalogah od ničle se ne prenese na učinkovitost v zrelih kodnih bazah, velik del vladnega inženirstva pa je delo na zrelih kodnih bazah z zapuščino, ki je starejša in bolj svojevrstna kot mediani komercialni repozitorij. Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) Central Digital and Data Office določa načela odgovorne uvedbe prav zato, ker te dokazne baze ni mogoče preprosto prevzeti iz predstavitev dobaviteljev. Od ministrstev se pričakuje, da orodja pred uvedbo ocenijo glede na lastne zahteve za ravnanje s podatki in varnost.

## Matematika

```
Stopnja sprejemanja   = sprejeti predlogi / prikazani predlogi
Stopnja ohranitve     = koda umetne inteligence, ki preživi do združitve / sprejeta koda umetne inteligence
Pospešitev            = (t_kontrola − t_UI) / t_kontrola  (SAMO iz nadzorovane primerjave)
Sprememba prepustnosti = Δ združenih zahtevkov/razvijalca/teden

Dejavnik pokritosti v javnem sektorju:
  delež upravičene kodne baze = vrstice kode v sistemih, kjer razvrstitev
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) orodje sploh dovoljuje

Model vrednosti = razvijalci × upravičena pokritost × prihranjeni čas × polna urna postavka × izkoriščenost
             — vsak člen zahteva lokalno meritev, dejavnik pokritosti
             pa nima enakovrednika v zasebnem sektorju
```

## Praktični primer

Vladno ministrstvo pilotno uvede pomočnika za programiranje z umetno inteligenco pri 300 razvijalcih, vendar so za uporabo orodja upravičeni samo sistemi z razvrstitvijo OFFICIAL, kar je 70 % zapuščine po razporeditvi zaposlenih, preostalih 30 % (sistemi z višjo razvrstitvijo) pa je popolnoma izključenih.

```
Upravičeni razvijalci = 300 × 0,70 = 210

Rezultat pilota: samoprijavljeni prihranek časa 40 min/dan;
                 izmerjeni prihranek na ravni nalog 12 min/dan (0,2 h)
                 — vrzel zaznave METR, ponovljena v praksi

Vrednotimo IZMERJENO številko:
  210 × 0,2 h × 220 dni × 55 £/uro polni strošek × 0,6 izkoriščenost
  = 210 × 44 ur × 55 £ × 0,6
  = 9.240 ur × 55 £ × 0,6 ≈ 304.920 £/leto zmogljivosti

Strošek: 210 licenciranih mest × 22 £/mesec × 12 ≈ 55.440 £/leto

Razmerje neto zmogljivosti ≈ 304.920 / 55.440 ≈ 5,5:1
```

Financiranje je upravičeno pri približno tretjini samoprijavljene koristi in šele po uporabi zgornje meje razvrstitve. Licenciranje vseh 300 razvijalcev na podlagi samoprijavljene številke bi preseglo tako upravičeno populacijo kot pravi prihranek.

## Povezava s programskim inženirstvom

Discipline, ki se prenesejo neposredno: izvajajte **pragmatična preskušanja** na lastni kodni bazi ministrstva in resničnih zahtevkih, ne na predstavitvenih nalogah dobaviteljev, saj je rezultat METR ugotovitev prav za zrele kodne baze. **Stopnjo sprejemanja obravnavajte kot približek, ne kot izid**: visoko sprejemanje z nizko ohranitvijo je programski ekvivalent prekomerne diagnostike. Vsaki trditvi o prepustnosti dodajte **preverjanje stabilnosti**, saj je poročilo DORA za leto 2025 ugotovilo, da uvedba umetne inteligence dvigne prepustnost, a poslabša stabilnost sprememb, in prav to analizo neto koristi izvajajo [metrike DORA za javno vrednost](../metrike-dora-za-javno-vrednost/). Bodite tudi iskreni, da lahko orodja umetne inteligence vrzel pri starejših zapuščinah z veliko [tehničnega dolga](../tehnični-dolg-kot-erozija-javne-vrednosti/) povečajo, ne zmanjšajo, ker učni podatki premalo zajemajo COBOL, 4GL in lastniško kodo velikih računalnikov, ki so v upravi pogosti, zato je kakovost predlogov prav na sistemih, ki pomoč najbolj potrebujejo, pogosto najšibkejša. To je del širšega vprašanja [vrednosti umetne inteligence v upravi](../vrednost-umetne-inteligence-v-upravi/) in ga morajo urejati enake omejitve [vrednosti kibernetske varnosti v javnem sektorju](../vrednost-kibernetske-varnosti-v-javnem-sektorju/), ki določajo, kje sme katero koli orodje tretje osebe sploh videti kodo ali podatke.

## Pasti

- **Presaditev študij dobaviteljev**: uporaba pospešitev iz randomiziranih preskušanj od ničle pri delu na integraciji starejših sistemov je prav napaka, ki jo je razkrila študija METR.
- **Samoporočanje kot merjenje**: razlika 20 odstotnih točk med zaznavo in izmerjenim je največja znana pristranskost v tej literaturi in napihne poslovne primere, ki se opirajo samo na ankete razvijalcev.
- **Zanemarjanje zgornje meje razvrstitve**: modeli licenc in vrednosti, zgrajeni na skupnem številu zaposlenih namesto na upravičeni podmnožici z ustrezno razvrstitvijo, sistematično precenjujejo tako stroškovno učinkovitost kot dosegljivo pokritost.
- **Zaostanek javnih naročil**: nabava orodij prek okvirnih sporazumov lahko pomeni, da pilot ocenjuje generacijo modelov, ki je ob polni uvedbi 12 do 18 mesecev za javno dostopnim, zato je predpostavka o pospešitvi v prvotnem poslovnem primeru zastarela že pred zagonom.

## Viri

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
