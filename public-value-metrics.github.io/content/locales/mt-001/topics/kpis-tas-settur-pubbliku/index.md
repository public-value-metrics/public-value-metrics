# KPIs tas-settur pubbliku

Indikatur ewlieni tal-prestazzjoni (KPI) huwa miżura magħżula u mmonitorjata li tirrappreżenta jekk servizz pubbliku qed jagħmel ix-xogħol tiegħu tajjeb. Fil-gvern l-għażla ta' KPI qatt mhi newtrali: peress li l-KPIs huma mwaħħla mal-baġits, it-tabelli tal-klassifika u l-karrieri, l-att li tagħżel waħda jiffurmja l-imġiba ta' kulħadd 'l isfel minnha, spiss aktar mill-politika li ħolqot is-servizz.

## Għaliex hu importanti

L-osservazzjoni ta' Charles Goodhart tal-1975 dwar il-politika monetarja — aktar tard popolarizzata minn Marilyn Strathern bħala "meta miżura ssir mira, tieqaf tkun miżura tajba" — hija t-tikketta ta' twissija l-aktar importanti fil-ġestjoni tal-prestazzjoni tas-settur pubbliku. KPI magħżul biex *jiddeskrivi* sistema jibda *jgħawweġ* dik is-sistema hekk kif ir-riżorsi, il-paga jew is-sopravivenza politika jiġu marbuta miegħu. L-illustrazzjoni kanonika hija l-ħinijiet tar-rispons tal-ambulanzi tal-NHS: meta l-mira ta' rispons ta' tmien minuti tal-Kategorija A saret vinkolanti, uħud mit-trusts intwerew li "ssakkew" l-ambulanzi ftit barra l-arloġġ tal-ħin tar-rispons, jew ikklassifikaw mill-ġdid it-telefonati, biex jilħqu n-numru mingħajr ma jbiddlu l-eżiti tal-pazjenti. Il-gwida tan-National Audit Office tar-Renju Unit dwar l-għażla u l-użu ta' indikaturi tal-prestazzjoni — stabbilita fir-rapporti tiegħu dwar il-valur għall-flus u fil-qafas "Performance Measurement by Regulators" u "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — teżisti preċiżament għax id-dipartimenti baqgħu jagħżlu indikaturi faċli biex jiġu rrappurtati minflok indikaturi diffiċli biex jiġu mmanipulati. Inġinier tas-software li jwassal id-dashboard li kontrih ser jiġi ġġudikat ministru jew direttur, kemm jekk jaħseb fiha jew le, qed jiddisinja l-istruttura tal-inċentivi ta' istituzzjoni pubblika.

## Il-matematika

Id-disinn tal-KPIs huwa suġġett fil-forma ta' qafas, imma l-*evalwazzjoni* ta' KPI kandidat hija lista ta' kontroll ripetibbli, mhux formula:

```
Għal kull KPI kandidat, agħti punteġġ kontra:
  Fit for purpose  — jkejjel l-eżitu, jew proxy bosta passi 'l bogħod?
  Appropriate      — jappartjeni lil dawk li verament jistgħu jinfluwenzawh?
  Balanced         — huwa mqabbad ma' kontrometrika li taqbad il-manipulazzjoni?
  Robust           — jista' jgħaddi mill-awditu, jew huwa awtorrappurtat u mhux verifikabbli?
  Integrated       — jidħol fis-sett usa', jew jirbaħ kontra KPI ieħor?
  Cost-effective   — il-ġbir tiegħu jiswa aktar mid-deċiżjoni li jinforma?

Qasma bejn indikaturi li jwasslu u indikaturi li jiġu wara:
  Indikatur li jwassal → jbassar eżitu futur, imma spiss jista' jiġi mmanipulat (eż. telefonati mwieġba <60s)
  Indikatur li jiġi wara → jikkonferma li l-eżitu seħħ, imma jasal tard wisq biex imexxi (eż.
                          stħarriġ annwali tas-sodisfazzjon)
  Sett difensibbli ta' KPIs iqabbad mill-inqas wieħed minn kull tip għal kull għan.
```

## Eżempju prattiku

**Trust tal-ambulanzi**: trust jirrapporta KPI ta' rispons tal-Kategorija A (theddida għall-ħajja) ta' "75% tat-telefonati mwieġba fi żmien 8 minuti." Fi kwart wieħed, jidħlu 6,000 telefonata tal-Kategorija A; 4,500 jintlaħqu fi żmien 8 minuti, li jagħti 75.0% — b'mod apparenti fil-mira.

```
KPI headline = 4,500 / 6,000 × 100 = 75.0%  (jilħaq il-limitu ta' 75%)
```

Imma awditu ta' Goodhart iżid kontrometrika: ħin medju tar-rispons għall-10% l-aktar bil-mod tat-telefonati.

```
Medja tar-rispons tad-deċil l-aktar bil-mod = 34 minuta (minn 19-il minuta sentejn qabel)
```

It-trust qed jilħaq il-mira filwaqt li d-denb — it-telefonati l-aktar probabbli li jkunu verament ta' theddida għall-ħajja meta t-triage ma jkunx perfett — sar ferm agħar, għax l-ekwipaġġi qed jiġu prijoritizzati lejn telefonati qrib it-tarf tal-8 minuti minflok lejn l-urġenza klinika. KPI wieħed qal storja falza; il-KPI imqabbad qal l-vera.

## Rabta mal-inġinerija tas-software

L-inġiniera li jibnu dashboards tal-prestazzjoni għall-gvern huma, funzjonalment, qed jiddisinjaw l-API tal-inċentivi tal-organizzazzjoni. Implikazzjonijiet prattiċi: strumenta d-*denominatur* bi preċiżjoni daqs in-numeratur (KPI rrappurtat bħala perċentwali ċkejkna jistedden manipulazzjoni tad-denominatur — ara l-[ispiża għal kull transazzjoni](../spiża-għal-kull-tranżazzjoni/) għall-istess nassa f'servizzi diġitali); ibni l-kontrometriki fl-istess dashboard minflok f'rapport separat li ħadd ma jaqra, sabiex il-manipulazzjoni tkun viżibbli fil-punt tad-deċiżjoni; u verżjona d-definizzjoni tal-KPI, għax ridefinizzjoni siekta (it-tibdil ta' dak li jgħodd bħala "telefonata," "każ," jew "tlestija") hija funzjonalment ekwivalenti għat-tibdil tal-mira mingħajr ma tiġi anunzjata. [Scorecard tal-valur pubbliku](../scorecard-tal-valur-pubbliku/) huwa mod strutturat wieħed biex KPI wieħed jiġi evitat milli jinqara f'iżolament, u r-[responsabbiltà bbażata fuq l-eżiti](../responsabbiltà-bbażata-fuq-l-eżiti/) hija d-dixxiplina li tagħżel KPIs fil-livell tal-popolazzjoni li tim wieħed ma jistax jgħawweġ waħdu.

## Żbalji komuni

- **Li tagħżel il-metrika faċli biex tinġabar minflok dik sinifikanti**: il-ħin tar-rispons għat-telefonata huwa trivjali biex jiġi rreġistrat; jekk it-telefonata solvietx il-problema taċ-ċittadin le — imma hija biss it-tieni waħda li hija l-eżitu. Reżisti li tirrikorri għal dak li s-sistema diġà toħroġ.
- **Ebda kontrometrika**: kwalunkwe KPI mwaħħal mal-flus jew mar-reputazzjoni jiġi mmanipulat fil-marġini; iwassal ma' metrika mqabbda li taqbad il-vettur probabbli tal-manipulazzjoni qabel ma tippubblikah.
- **Li tiddefinixxi mill-ġdid il-metrika mingħajr changelog**: li tbiddel "telefonati riċevuti" ma' "telefonati mwieġba" biex iżżejjen trend teqred il-kredibbiltà tas-serje taż-żmien hekk kif tiġi skoperta — dejjem ippubblika changelog tad-definizzjonijiet flimkien man-numri.
- **Li l-attività titħawwad mar-riżultat**: li jingħaddu l-ispezzjonijiet imlestija huwa output; li jingħaddu l-bini li ġie fil-konformità huwa eqreb lejn l-eżitu (ara [eżiti vs outputs](../eżiti-vs-outputs/)).

## Sorsi

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
