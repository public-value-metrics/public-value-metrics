# Redditu fuq l-Investiment tad-Donatur

Ir-redditu fuq l-investiment tad-donatur huwa dak li lira ta' donatur speċifiku fil-fatt tixtri f'riżultati — mhux il-proporzjonijiet operattivi tal-karità, u mhux ir-redditu tal-karità fuq il-baġit totali tagħha. Jerġa' jifforma l-ROI mill-perspettiva tal-organizzazzjoni (kemm nitħaddmu b'mod effiċjenti) għall-perspettiva tad-donatur (x'jibdel il-kontribut marġinali tiegħi), u ż-żewġ numri regolarment, u b'mod żbaljat, jiġu ttrattati bħala l-istess ħaġa.

## Għaliex hu importanti

L-"ROI" tal-karità stess, safejn il-frażi tintuża xejn, normalment tiddeskrivi xi ħaġa bħall-[ispiża għal kull benefiċjarju](../spiża-għal-kull-benefiċjarju/) jew il-[proporzjon tal-ispejjeż ġenerali tal-karità](../proporzjon-tal-ispejjeż-ġenerali-tal-karitajiet/) — miżuri tal-effiċjenza organizzattiva. L-ROI ta' donatur huwa mistoqsija kompletament differenti: billi din il-karità diġà għandha dħul ieħor, x'iżid il-flus ta' *dan* id-donatur fil-marġni? Jekk karità kienet twassal l-istess programm bi jew mingħajr rigal partikolari ta' £10 000 — għax għandha riżervi kbar, jew għax finanzjatur ieħor kien jimla l-vojt — l-ROI tad-donatur ta' dak ir-rigal huwa qrib iż-żero, kemm jidher tajjeb il-proporzjon tal-ispejjeż ġenerali jew l-ispiża għal kull riżultat tal-karità b'mod ġenerali.

Din hija l-istess mistoqsija ta' addizzjonalità li tinsab taħt il-valutazzjoni tal-[valur għall-flus](../valur-għall-flus/) fl-infiq pubbliku tar-Renju Unit u [addizzjonalità u deadweight](../addizzjonalità-u-deadweight/) fl-evalwazzjoni tal-programmi: il-valur maħluq jista' jiġi kkreditat lil finanzjatur biss safejn ma kienx jiġri xorta waħda. Pjattaformi kbar ta' donaturi u organizzazzjonijiet tal-għoti effettiv (Giving What We Can, GiveWell) jibnu r-rakkomandazzjonijiet tagħhom espliċitament madwar din id-distinzjoni, u jistaqsu mhux "din hija karità tajba" imma "din il-karità għandha spazju mhux mimli għal aktar finanzjament sabiex ir-rigal tiegħi jkun addizzjonali."

## Il-matematika

```
ROI tad-donatur ≠ Effiċjenza operattiva tal-karità

ROI tad-donatur ≈ (Riżultat miksub bir-rigal) − (Riżultat li kien iseħħ
                  mingħajru, jiġifieri l-kontrafattwali)
                  ─────────────────────────────────────────────────
                                 Daqs tar-rigal

Inputs ewlenin:
  - Spazju għal aktar finanzjament (il-karità hija ristretta mill-finanzjament fil-marġni?)
  - Funging (donatur ieħor kien jimla l-vojt?)
  - Kosteffettività marġinali fil-livell speċifiku ta' finanzjament (l-ispejjeż
    spiss jogħlew hekk kif intervent jikber lil hinn mill-popolazzjoni l-aktar
    faċli biex tintlaħaq)
```

Ara [kosteffettività fl-altruiżmu effettiv](../kosteffettività-fl-altruiżmu-effettiv/) għal kif GiveWell joperazzjonalizza l-mistoqsija tal-"ispazju għal aktar finanzjament," u [analiżi kontrafattwali](../analiżi-kontrofattwali/) għall-metodu ġenerali.

## Eżempju prattiku

Donatur qed jagħżel bejn żewġ rigali ta' £5 000:

- **Karità C**: għandha programm bażi ffinanzjat bis-sħiħ b'£2 miljun f'riżervi u lista ta' stennija ta' finanzjaturi; il-£5 000 marġinali probabbilment jiżdiedu mar-riżervi jew ma' attività ta' prijorità aktar baxxa. Riżultat addizzjonali stmat għad-donatur: minimu — il-flus mhux ovvju li qed jibdlu dak li jiġri.
- **Karità D**: programm żgħir sostnut minn evidenza li ddikjarat pubblikament li se jkollha twarrab 200 persuna fil-kwart li jmiss mingħajr £50 000 addizzjonali, u diġà ġabret £42 000 minnhom. Il-£5 000 marġinali huma probabbli ħafna li jiffinanzjaw twassil addizzjonali reali — ngħidu aħna, 20 persuna addizzjonali servuti, bl-ispiża stess iddikjarata mill-karità għal kull benefiċjarju ta' £250.

Daqs ta' rigal l-istess, donatur l-istess, ROI tad-donatur radikalment differenti — mhux għax il-Karità C hija organizzazzjoni agħar (jista' jkollha ċifra aħjar ta' spiża għal kull riżultat b'mod ġenerali) imma għax il-vojt marġinali tal-finanzjament tagħha diġà ngħalaq.

## Rabta mal-inġinerija tas-software

Il-pjattaformi tad-donaturi u l-għodod ta' rakkomandazzjoni tal-għoti ħafna drabi jesponu biss metriċi tal-effiċjenza fil-livell tal-organizzazzjoni (proporzjon tal-ispejjeż ġenerali, spiża għal kull benefiċjarju) għax dawk huma dak li l-karitajiet jippubblikaw fir-rapporti annwali u dak li huwa l-aktar faċli li jinġibed f'tabella ta' tqabbil. Ir-rappreżentazzjoni xierqa tal-ROI tad-donatur teħtieġ punt tad-dejta differenti u aktar diffiċli biex jinkiseb: il-vojt kurrenti ddikjarat tal-finanzjament tal-karità jew l-"ispazju għal aktar finanzjament," li jinbidel tul is-sena u rari jkun dejta strutturata. Il-pjattaformi li jridu jappoġġjaw raġunament ġenwin tal-ROI tad-donatur jeħtieġu jew feed dirett minn żvelar tal-vojt tal-finanzjament (kif jaħdem GiveWell manwalment għall-karitajiet irrakkomandati tiegħu) jew dikjarazzjoni espliċita li tabella ta' tqabbil qed turi l-effiċjenza organizzattiva, mhux l-addizzjonalità tad-donatur. Ara [proporzjon tal-ispejjeż ġenerali tal-karità](../proporzjon-tal-ispejjeż-ġenerali-tal-karitajiet/) għall-metriku li miegħu l-ROI tad-donatur huwa l-aktar spiss, u b'mod żbaljat, ikkonfuż.

## Żbalji komuni

- **Jiġu kkonfużi l-effiċjenza tal-karità u l-addizzjonalità tad-donatur.** Karità mmexxija tajjeb b'spejjeż ġenerali baxxi xorta tista' jkollha ROI marġinali tad-donatur qrib iż-żero jekk mhix ristretta mill-finanzjament.
- **Jiġi injorat il-funging.** Jekk finanzjatur istituzzjonali kbir kien ikopri l-vojt xorta waħda, ir-rigal ta' donatur individwali jispostja l-flus ta' dak il-finanzjatur minflok iżid twassil ġdid.
- **Jiġi assunt kosteffettività lineari fuq skala.** Il-benefiċjarji l-irħas biex jintlaħqu spiss jiġu servuti l-ewwel; l-ispiża marġinali għal kull riżultat spiss togħla hekk kif programm jespandi, għalhekk l-ROI tal-lira li jmiss mhuwiex l-istess bħall-ROI tal-lira medja diġà mqatta'.
- **L-ebda vojt ta' finanzjament iddikjarat.** Karità jew pjattaforma li ma tistax tgħid x'se jiffinanzja l-£X li jmiss ma tistax issostni pretensjoni ġenwina ta' ROI tad-donatur, imma biss waħda ta' spiża medja.

## Sorsi

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
