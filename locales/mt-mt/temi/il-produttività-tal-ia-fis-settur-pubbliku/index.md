# Il-produttività tal-IA fis-settur pubbliku

Il-metriki ta' dak li l-assistenza tal-IA fil-kodifikazzjoni tagħmel verament lill-output tal-inġinerija — rati ta' aċċettazzjoni tas-suġġerimenti, żieda fil-veloċità f'studji kkontrollati, throughput tal-PRs u żamma tal-kodiċi — għandhom bażi ta' evidenza veramente kontradittorja anki qabel ma jiżdiedu l-limitazzjonijiet tas-settur pubbliku: il-klassifikazzjoni tad-dejta tillimita liema partijiet ta' proprjetà antika tista' tmiss l-għodda tal-IA, iċ-ċikli tal-akkwist ifissru li l-għodda li tkun qed tiġi evalwata spiss tkun ġenerazzjoni ta' mudell wara l-kapaċità attwali, u r-rekwiżiti ta' awtorizzazzjoni tas-sigurtà jirregolaw min jista' juża liema għodda fuq xiex.

## Għaliex hu importanti

L-iktar żewġ studji kkontrollati ċċitati jindikaw direzzjonijiet opposti. L-RCT tal-GitHub Copilot ta' Peng et al. tal-2023 sab li l-iżviluppaturi lestew kompitu ġdid ta' server HTTP 55.8% aktar malajr bil-Copilot (1h11m vs 2h41m, n=95). L-RCT tal-METR tal-2025 sab li żviluppaturi esperti ta' sors miftuħ li jaħdmu fuq *ir-repożitorji maturi tagħhom stess* kienu 19% aktar bil-mod bl-għodod tal-IA ta' kmieni fl-2025, filwaqt li emmnu li kienu madwar 20% aktar mgħaġġla. Iż-żewġ studji huma soda; il-kontradizzjoni hija s-sejba — l-effikaċja f'kompitu ġdid ma tgħaddix għall-effettività fuq bażi tal-kodiċi matura, u ħafna mix-xogħol tal-inġinerija tal-gvern huwa xogħol fuq bażi tal-kodiċi matura fuq proprjetajiet aktar antiki u aktar idjosinkratiċi mir-repożitorju kummerċjali medju. Il-Generative AI Framework for HMG taċ-Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) jistabbilixxi prinċipji għal adozzjoni responsabbli proprju għax din il-bażi ta' evidenza ma tistax tiġi importata sempliċement minn dimostrazzjonijiet tal-fornituri; id-dipartimenti huma mistennija jevalwaw l-għodod skont ir-rekwiżiti tagħhom stess ta' ġestjoni tad-dejta u sigurtà qabel it-tħaddim.

## Il-matematika

```
Rata ta' aċċettazzjoni  = suġġerimenti aċċettati / suġġerimenti murija
Rata ta' żamma          = kodiċi tal-IA li jgħix sal-merge / kodiċi tal-IA aċċettat
Żieda fil-veloċità      = (t_kontroll − t_IA) / t_kontroll  (minn paragun ikkontrollat BISS)
Differenza fit-throughput = Δ PRs mdaħħla/żviluppatur/ġimgħa

Fattur ta' kopertura tas-settur pubbliku:
  sehem eliġibbli tal-bażi tal-kodiċi = LOC fuq sistemi fejn il-klassifikazzjoni
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) tippermetti l-għodda xejn

Mudell tal-valur = żviluppaturi × kopertura-eliġibbli × ħin iffrankat × rata sħiħa × utilizzazzjoni
             — kull terminu jeħtieġ kejl lokali, u l-fattur tal-kopertura
             m'għandu ebda ekwivalenti fis-settur privat
```

## Eżempju prattiku

Dipartiment tal-gvern jittestja assistent tal-kodifikazzjoni tal-IA fost 300 żviluppatur, imma biss is-sistemi klassifikati OFFICIAL huma eliġibbli għall-użu tal-għodda — 70% tal-proprjetà skont l-allokazzjoni tal-għadd tal-persunal, bil-30% li jifdal (sistemi b'klassifikazzjoni ogħla) esklużi għalkollox.

```
Żviluppaturi eliġibbli = 300 × 0.70 = 210

Riżultat tal-pilota: ħin iffrankat irrappurtat mill-utenti stess 40 min/jum;
                     iffrankar imkejjel fil-livell tal-kompitu 12 min/jum (0.2h)
                     — id-differenza fil-perċezzjoni tal-METR, riprodotta fil-prattika

Evalwa ċ-ċifra IMKEJJLA:
  210 × 0.2h × 220 jum × £55/siegħa sħiħa × 0.6 utilizzazzjoni
  = 210 × 44 siegħa × £55 × 0.6
  = 9,240 siegħa × £55 × 0.6 ≈ £304,920/sena kapaċità

Spiża: 210 siġġu liċenzjat × £22/xahar × 12 ≈ £55,440/sena

Proporzjon nett tal-kapaċità ≈ 304,920 / 55,440 ≈ 5.5:1
```

Finanzjabbli b'madwar terz tal-benefiċċju rrappurtat mill-utenti stess, u biss wara li jiġi applikat il-limitu tal-klassifikazzjoni — li jiġu liċenzjati l-300 żviluppatur kollha abbażi taċ-ċifra rrappurtata mill-utenti stess kien ikun jesaġera kemm il-popolazzjoni eliġibbli kif ukoll l-iffrankar veru.

## Rabta mal-inġinerija tas-software

Id-dixxiplini li jgħaddu direttament: tmexxi **provi pragmatiċi** fuq il-bażi tal-kodiċi tad-dipartiment stess u biljetti reali, mhux kompiti ta' dimostrazzjoni tal-fornitur, għax ir-riżultat tal-METR huwa speċifikament sejba dwar bażi tal-kodiċi matura; tqis ir-**rata ta' aċċettazzjoni bħala proxy, mhux riżultat** — aċċettazzjoni għolja b'żamma baxxa hija l-ekwivalenti fis-software ta' dijanjosi żejda; tħares kull pretensjoni dwar it-throughput b'**kontroll tal-istabbiltà**, billi r-rapport tal-2025 tad-DORA sab li l-adozzjoni tal-IA tgħolli t-throughput imma tiddeterjora l-istabbiltà tat-tibdil, li hija eżattament l-analiżi tal-benefiċċju nett li [metriki DORA għall-valur pubbliku](../metriċi-dora-għall-valur-pubbliku/) inbniet biex tmexxi; u tkun onest li l-għodod tal-IA jistgħu jwessgħu, mhux inaqqsu, id-distakk fuq proprjetajiet antiki mgħobbija b'[dejn tekniku](../dejn-tekniku-bħala-erożjoni-tal-valur-pubbliku/), għax id-dejta tat-taħriġ tirrappreżenta inqas il-kodiċi COBOL, 4GL u mainframe magħmul apposta li huwa komuni fil-gvern, u għalhekk il-kwalità tas-suġġerimenti fuq eżattament is-sistemi li l-aktar jeħtieġu l-għajnuna spiss tkun l-aktar dgħajfa. Dan imur flimkien mal-mistoqsija usa' ta' [valur tal-IA fil-gvern](../il-valur-tal-ia-fil-gvern/) u għandu jiġi rregolat mill-istess restrizzjonijiet ta' [valur tas-sigurtà ċibernetika tas-settur pubbliku](../il-valur-taċ-ċibersigurtà-fis-settur-pubbliku/) li jillimitaw fejn kull għodda ta' parti terza tista' tara l-kodiċi jew id-dejta xejn.

## Żbalji komuni

- **Trapjant ta' studju tal-fornitur**: li jiġu applikati żidiet fil-veloċità minn RCT ta' kompitu ġdid għal xogħol ta' integrazzjoni ta' sistemi antiki huwa preċiżament l-iżball li l-istudju tal-METR żvela.
- **Rappurtar mill-utenti stess bħala kejl**: differenza ta' 20 punt perċentwali bejn il-perċezzjoni u l-kejl hija l-akbar preġudizzju magħruf f'din il-letteratura, u tnaffaħ każijiet tan-negozju li jiddependu biss fuq stħarriġ tal-iżviluppaturi.
- **Li jiġi injorat il-limitu tal-klassifikazzjoni**: mudelli ta' liċenzjar u ta' valur mibnija fuq l-għadd totali tal-persunal minflok is-sottogrupp eliġibbli mnaddaf mill-klassifikazzjoni jesaġeraw sistematikament kemm l-kosteffettività kif ukoll il-kopertura li tista' tinkiseb.
- **Dewmien taċ-ċiklu tal-akkwist**: akkwist ta' għodod ibbażat fuq qafas jista' jfisser li pilota jevalwa ġenerazzjoni ta' mudell li tkun 12–18-il xahar wara dak li jkun disponibbli pubblikament sa mal-bidu tat-tħaddim sħiħ, u b'hekk l-assunzjoni tal-żieda fil-veloċità tal-każ tan-negozju oriġinali tkun skaduta qabel il-bidu.

## Sorsi

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
