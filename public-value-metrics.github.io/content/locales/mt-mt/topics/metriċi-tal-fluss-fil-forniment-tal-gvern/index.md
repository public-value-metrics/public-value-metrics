# Metriċi tal-Fluss fil-Forniment tal-Gvern

Il-metriċi tal-fluss — il-Liġi ta' Little, il-limiti tax-xogħol fil-proċess (WIP), u l-effiċjenza tal-fluss — jiddeskrivu kemm malajr jgħaddi x-xogħol minn sistema b'kapaċità limitata. Bord ta' sprint huwa waħda minn sistemi bħal dawn; kju ta' talbiet għal benefiċċji, reġistru ta' applikazzjonijiet tal-ippjanar, jew backlog ta' każijiet tal-viża huwa eżattament l-istess matematika liebsa uniformi differenti.

## Għaliex hu importanti

Il-ġabriet ta' każijiet tal-gvern huma sistemi ta' kju, u s-sistemi ta' kju josservaw il-liġijiet tal-kju kemm jekk xi ħadd ikejjilhom u kemm jekk le. Il-perijodi statutorji ta' determinazzjoni jagħmlu dan espliċitu: taħt ir-reġim tal-Town and Country Planning, il-biċċa l-kbira tal-applikazzjonijiet żgħar tal-ippjanar għandhom mira statutorja ta' determinazzjoni ta' 8 ġimgħat u l-applikazzjonijiet kbar 13-il ġimgħa — impenn taċ-ċiklu tal-ħin mdaħħal direttament fil-liġi. Il-backlog tal-każijiet tal-asil tal-Home Office, eżaminat ripetutament min-National Audit Office u mill-Home Affairs Select Committee, huwa każ dokumentat tajjeb ta' sistema pubblika fejn ix-xogħol fil-proċess kiber aktar malajr mit-throughput għal perijodu sostnut, u wassal liċ-ċikli tal-ħin ferm lil hinn minn kull aspettattiva statutorja jew tas-servizz. Il-metriċi tal-fluss jagħtu lill-inġiniera u lill-maniġers tal-każijiet vokabularju kwantitattiv kondiviż għal dan il-mod ta' falliment, minflok ma jħalluh bħala "problema ta' backlog" kwalitattiva.

## Il-matematika

```
Il-Liġi ta' Little:  WIP = Throughput × Ħin taċ-Ċiklu
                 →   Ħin taċ-Ċiklu = WIP / Throughput

Effiċjenza tal-fluss = ħin attiv (ta' mess) / ħin taċ-ċiklu totali   (Vacanti)

Effett tal-limitu tal-WIP: għal throughput fiss, in-nofs tal-WIP bejn wieħed
u ieħor inaqqas bin-nofs il-ħin medju taċ-ċiklu (il-Liġi ta' Little
riarranġata) — il-lieva disponibbli mingħajr ma jiżdied l-għadd ta' persunal.
```

Ara [metriċi DORA għall-valur pubbliku](../metriċi-dora-għall-valur-pubbliku/) għall-matematika ekwivalenti applikata għall-pipelines tal-iskjerament tas-softwer minflok għall-ħidma fuq każijiet.

## Eżempju prattiku

**Dipartiment tal-ippjanar ta' awtorità lokali**: 400 applikazzjoni miftuħa fi kwalunkwe ħin (WIP), it-tim jirrisolvi 50 applikazzjoni/ġimgħa (throughput).

```
Ħin taċ-ċiklu = WIP / Throughput = 400 / 50 = 8 ġimgħat
```

Dan jaqa' eżattament fil-mira statutorja ta' 8 ġimgħat għall-applikazzjonijiet żgħar — mingħajr marġni, li jfisser li kull varjabilità fid-domanda li tidħol jew fiż-żmien ta' tweġiba tal-konsultati tbiddel id-determinazzjonijiet 'il fuq mit-terminu legali.

**Effiċjenza tal-fluss**: minn dawk it-8 ġimgħat (56 jum kalendarju), applikazzjoni tipikament għandha madwar 6 sigħat ta' ħin attwali ta' ipproċessar mill-każist.

```
Effiċjenza tal-fluss = 6 sigħat / (56 jum × 8 sigħat tax-xogħol/jum)
                     = 6 / 448 ≈ 1,3%
```

Il-benchmark ta' Vacanti għal timijiet tas-softwer iqiegħed l-effiċjenza tal-fluss tipika fil-15–20%; ix-xogħol tal-każijiet tal-gvern, b'diversi trasferimenti lil konsultati statutorji u twieqi ta' konsultazzjoni pubblika, ħafna drabi jaħdem b'ordni ta' kobor aktar baxx. Il-98,7% tal-ħin ta' "stennija" huwa fejn jintefqu fil-fatt it-tmien ġimgħat — mhux fil-kapaċità tal-każisti.

**Intervent ta' limitu tal-WIP**: li jitqiegħed limitu ta' 15 applikazzjoni miftuħa għal kull każist minflok 25 mingħajr limitu (b'throughput kostanti) jbiddel il-WIP minn 400 għal madwar 240 madwar tim ta' 16-il persuna:

```
Ħin ġdid taċ-ċiklu = 240 / 50 = 4,8 ġimgħat
```

Kważi nofs il-ħin taċ-ċiklu minn bidla ta' politika, mhux żieda fil-persunal — l-istess lieva li jiġbdu t-timijiet tal-forniment bi stil DORA meta jillimitaw il-WIP tal-sprint.

## Rabta mal-inġinerija tas-software

Il-metriċi tal-fluss huma l-lingwa kondiviża bejn il-bord Kanban ta' tim tal-forniment u l-art tax-xogħol tal-każijiet li għaliha qed jibnu s-softwer: il-kju ta' każist u l-kju tal-pull-requests it-tnejn huma rregolati mil-Liġi ta' Little, u t-tnejn jiksru l-miri taċ-ċiklu tal-ħin bl-istess mod — wisq WIP relattiv għat-throughput. Dan jolqot direttament l-[ispiża tad-dewmien fil-programmi pubbliċi](../spiża-tad-dewmien-fil-programmi-pubbliċi/): ħin taċ-ċiklu × CoD huma l-liri li jkunu qegħdin fil-kju fi kwalunkwe mument, u jolqot l-[istandards tas-servizz u l-metriċi tat-tranżazzjonijiet](../standards-tas-servizz-u-metriċi-tat-transazzjonijiet/), fejn mira ppubblikata ta' ħin ta' rispons hija impenn taċ-ċiklu tal-ħin li metriċi tal-fluss biss jistgħu jiddjanjostikaw meta jinqabeż. Is-softwer ta' sistema ta' każijiet għandu jesponi l-WIP u l-ħin taċ-ċiklu bħala metriċi operattivi ta' ewwel klassi, mhux jidfinhom ġo sistema ta' ġestjoni tal-każijiet li ħadd ma jistaqsi fiha.

## Żbalji komuni

- **Żieda ta' limiti tal-WIP mingħajr ma jissewwa l-konġestjoni vera**: jekk ir-restrizzjoni hija ż-żmien ta' tweġiba ta' konsultat statutorju estern, il-limitazzjoni tal-WIP tal-każisti sempliċement tqiegħed il-kju 'l fuq minflok ma tqassarha.
- **Effiċjenza tal-fluss titqies bħala mira li tista' tiġi mmanipulata**: li jiġi mgħaġġel l-1,3% tal-ħin attiv bilkemm iċaqlaq iż-żmien taċ-ċiklu; il-lieva hija kważi dejjem fl-istati ta' stennija, li normalment ifisser tfassil mill-ġdid tal-proċess, mhux veloċità tal-każist.
- **Tinjora l-varjabilità**: il-Liġi ta' Little tiddeskrivi medji; ġabra ta' każijiet b'varjanza għolja tad-domanda teħtieġ kapaċità ta' buffer, mhux biss limitu aktar strett tal-WIP, jew it-termini statutorji xorta jinqabżu fid-denb volatili anke hekk kif tjibb il-medja.
- **Il-WIP jitkejjel b'mod inkonsistenti**: każ "miftuħ" fis-sistema tar-rekord imma fil-fatt li qed jistenna parti terza xorta huwa WIP; l-esklużjoni tiegħu iġġib in-numri 'l fuq mingħajr ma tibdel ir-realtà li jaraw iċ-ċittadini.

## Sorsi

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
