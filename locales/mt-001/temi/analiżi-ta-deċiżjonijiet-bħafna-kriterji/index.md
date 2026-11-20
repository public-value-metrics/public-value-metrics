# Analiżi ta' deċiżjonijiet b'ħafna kriterji (MCDA)

L-MCDA tagħti punteġġ u tiżen l-għażliet kontra diversi kriterji distinti u mgħobbija fl-istess ħin, u tipproduċi tqabbil klassifikat mingħajr ma ġġiegħel kull kriterju f'xala waħda monetarja jew f'unità naturali waħda. Hija l-metodu ta' appraisal għal deċiżjonijiet fejn l-eżiti li jgħoddu verament ma jistgħux jitnaqqsu għal numru wieħed.

## Għaliex hu importanti

Il-Green Book tapprova espliċitament l-MCDA (l-appendiċi tal-casi studju tal-Box 2 u l-Annex A it-tnejn jiddiskutuha direttament) għal appraisals fejn il-benefiċċji huma "verament inkommensurabbli" — fejn il-konverżjoni ta' kollox f'flus permezz tal-[analiżi soċjali tal-ispiża u l-benefiċċju](../analiżi-soċjali-tal-ispejjeż-u-l-benefiċċji/), jew f'eżitu wieħed permezz tal-[analiżi tal-kosteffettività](../analiżi-tal-kosteffettività-fil-gvern/), tiddistorsjoni d-deċiżjoni aktar milli tiċċarahha (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). L-għażla ta' sit għal ħabs ġdid, pereżempju, tikkumpensa l-ispiża kapitali kontra l-impatt fuq il-komunità, il-konnettività tat-trasport, l-effett ambjentali u l-possibbiltà li jiġi rkrutat il-persunal — kriterji li ma jaqsmux unità komuni u fejn l-introduzzjoni b'forza ta' unità komuni (tipikament il-flus) tdaħħal ġudizzju ta' valur dwar l-importanza relattiva, ngħidu aħna, tal-impatt ambjentali kontra l-ispiża, moħbi taħt aritmetika li tidher oġġettiva.

Is-sinċerità tal-MCDA hija wkoll il-vulnerabbiltà prinċipali tagħha: peress li l-piżijiet jiġu assenjati minn min imexxi l-appraisal (jew minn panel), il-metodu huwa leġittimu biss daqs il-proċess tal-għoti tal-piżijiet. L-gwida tal-Green Book hija espliċita li l-kriterji u l-piżijiet iridu jiġu miftehma u ppubblikati *qabel* ma l-għażliet jingħataw punteġġ, eżattament biex jiġi evitat li reviżur jaħdem lura minn għażla preferuta lejn il-piżijiet li jiġġustifikawha.

## Il-matematika

```
Għal kull għażla i u kriterju j:
  Score_ij   = il-prestazzjoni tal-għażla kontra dak il-kriterju (spiss 0-100
               jew 1-10, mill-evidenza, ġudizzju espert, jew punteġġ tal-partijiet interessati)
  Weight_j   = importanza relattiva tal-kriterju j, il-piżijiet jammontaw għal 1 (jew 100)

Punteġġ imgħobbi tal-għażla i = Σ_j (Score_ij × Weight_j)

Proċedura:
1. Aqbel fuq is-sett ta' kriterji u l-piżijiet QABEL ma tagħti punteġġ lil
   xi għażla (swing weighting jew tqabbil f'pari, eż. AHP, huma metodi komuni ta' elicitazzjoni).
2. Agħti punteġġ lil kull għażla kontra kull kriterju fuq xala komuni, mill-
   evidenza fejn possibbli.
3. Ikkalkula t-totali mgħobbija; iklassifika l-għażliet.
4. Ittestja s-sensittività tal-piżijiet: tibqa' valida l-klassifika
   quddiem diżakkord plawsibbli dwar kemm kull kriterju għandu jgħodd?
```

L-MCDA ma tipproduċix valur assolut difensibbli kif jagħmel il-valur preżenti nett tal-SCBA — tipproduċi biss klassifika kondizzjonali fuq il-piżijiet miftehma. Dan huwa vantaġġ meta d-deċiżjoni hija verament dwar kompromess bejn oġġetti inkommensurabbli, u responsabbiltà jekk tintuża biex jiġi evitat ix-xogħol aktar diffiċli tal-monetizzazzjoni meta l-monetizzazzjoni kienet fil-fatt possibbli.

## Eżempju prattiku

**Awtorità lokali**: kunsill li jagħżel post għal ċentru ġdid tar-riċiklaġġ tal-iskart domestiku jagħti punteġġ lil tliet siti kontra erba' kriterji, mgħobbija minn panel bejn id-dipartimenti qabel xi żjara fuq il-post:

```
Kriterji (piż):           Spiża kapitali (30%)  Aċċess tat-trasport (25%)
                           Impatt fuq il-komunità (25%)  Impatt ambjentali (20%)

Punteġġi tas-siti (0-100, ogħla = aħjar):
Sit A: spiża 80, aċċess 60, komunità 40, ambjent 70
Sit B: spiża 60, aċċess 90, komunità 70, ambjent 50
Sit C: spiża 90, aċċess 50, komunità 80, ambjent 60

Totali mgħobbija:
Sit A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Sit B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Sit C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Is-Sit C jiġi l-ewwel. Eżerċizzju ta' sensittività li jmexxi l-piż tal-impatt fuq il-komunità minn 25% għal 35% (u jneħħi 10 punti mill-ispiża kapitali) jibdel it-total tas-Sit C għal 71.5 − 3 + 8 = 76.5 u dak tas-Sit B għal 68 − 6 + 7 = 69 — is-Sit C xorta jmexxi, għalhekk il-klassifika hija robusta quddiem dak id-diżakkord plawsibbli dwar il-piżijiet, li huwa eżattament it-test li l-Green Book tistenna li jiġi rrappurtat.

**Karità**: fondazzjoni li tagħti għotjiet u li tagħżel bejn il-finanzjament ta' servizz ta' pariri dwar id-dejn, netwerk ta' banek tal-ikel u programm ta' litteriżmu finanzjarju tuża l-MCDA minflok l-SROI (ara r-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/)) eżattament għax it-trustees ma jaqblux, in bona fide, dwar jekk is-serħan fi żmien ta' kriżi jew il-prevenzjoni għandhomx jiżnu aktar — l-MCDA tħallihom jaqblu fuq il-*forma* tad-diżakkord (firxa ta' piżijiet) minflok ma jippretendu li proporzjon SROI wieħed isolvih.

## Rabta mal-inġinerija tas-software

L-MCDA hija l-għodda naturali għall-għażla ta' fornituri u arkitettura meta l-kriterji jkunu verament konfliġġenti — l-għażla bejn sistema tal-ġestjoni tal-każijiet ospitata fil-cloud u waħda fuq il-post tikkumpensa spiża, riskju tas-sovranità tad-data, aċċessibbiltà u veloċità tat-twassil b'modi li ma jitnaqqsux għal numru wieħed. Il-kapijiet tal-inġinerija għandhom jinsistu li l-għoti tal-piżijiet isir qabel ma l-għażliet jingħataw punteġġ, eżattament kif titlob il-Green Book, għax eżerċizzju tal-piżijiet li jsir wara li tara l-lista qasira kważi dejjem jiċċaqlaq lejn l-għażla li l-kamra kienet diġà tippreferi. Ara l-[bini vs xiri fil-gvern](../ibni-jew-ixtri-fil-gvern/) għal applikazzjoni komuni tal-MCDA, u l-[scorecard tal-valur pubbliku](../scorecard-tal-valur-pubbliku/) għal għodda relatata ta' punteġġ strutturat użata wara d-deċiżjoni aktar milli qabilha.

## Żbalji komuni

- **Li jiġu stabbiliti l-piżijiet wara li jidhru l-għażliet.** Dan huwa l-aktar mod komuni kif l-MCDA tiġi mmanipulata, intenzjonalment jew le; ippubblika l-piżijiet qabel il-punteġġ, u rreġistra min stabbilhom.
- **Li t-total imgħobbi jiġi ttrattat bħala numru iebes.** Punteġġ ta' 71.5 kontra 68 mhuwiex differenza statistikament sinifikanti sakemm l-analiżi tas-sensittività ma tikkonfermax li l-klassifika hija stabbli; irrapporta firxiet, mhux preċiżjoni foloz.
- **Li tintuża l-MCDA biex tiġi evitata monetizzazzjoni li kienet fil-fatt fattibbli.** Jekk il-biċċa l-kbira tal-kriterji setgħu jiġu evalwati b'mod kredibbli, id-default fuq l-MCDA minflok l-[SCBA](../analiżi-soċjali-tal-ispejjeż-u-l-benefiċċji/) jitfa' informazzjoni li l-appraisal setgħet užat.
- **Li stakeholder dominanti wieħed jistabbilixxi l-piżijiet kollha waħdu.** Prattika tajba tal-Green Book tistenna li l-piżijiet jinkisbu minn panel rappreżentattiv, mhux mid-direttur li jisponsorja, biex l-appraisal ma terġax tiddeduċi sempliċement dak li dik il-persuna kienet diġà trid.

## Sorsi

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
