# Metrike društvenog kapitala

Metrike društvenog kapitala kvantificiraju mreže, povjerenje i građansko sudjelovanje koji omogućuju učinkovito funkcioniranje zajednica i institucija: „vezivno tkivo” koje nema retka ni u jednoj bilanci, ali vidljivo smanjuje trošak i trenje kad je prisutno, a vidljivo ih povećava kad ga nema. Suvremeni okvir potječe iz knjige Roberta Putnama „Bowling Alone” (2000), koja razlikuje povezujući kapital (veze unutar slične skupine) od premošćujućeg kapitala (veze među različitim skupinama); britanski Office for National Statistics (ONS) od tada je izgradio stalan skup pokazatelja za njegovo praćenje na nacionalnoj razini.

## Zašto je važno

Putnamova središnja empirijska tvrdnja, dokumentirana padom članstva u američkim građanskim udrugama, pohađanja crkve i sudjelovanja u sindikatima tijekom kasnoga dvadesetog stoljeća, bila je da društveni kapital predviđa ishode koje konvencionalna ekonomija teško objašnjava: manji kriminal, bolju dobrobit djece, učinkovitiju lokalnu vlast, brži gospodarski oporavak nakon šokova. Povezujući kapital (jake veze unutar zbijene skupine) dobar je za uzajamnu potporu, ali se može okoštati u zatvorenost; premošćujući kapital (slabije veze među različitim skupinama) obično je ono što korelira s pristupom prilikama, protokom informacija i povjerenjem u institucije. ONS je to shvatio dovoljno ozbiljno da izgradi nacionalni okvir pokazatelja: njegova serija „Social Capital in the UK”
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
prati četiri stupa: osobne odnose, potporu društvene mreže, građansku angažiranost te povjerenje i norme suradnje, a svaki se temelji na uhodanim anketnim pitanjima (Community Life Survey, Understanding Society). Za digitalne usluge javnog sektora društveni je kapital dvostruko važan: on je i ishod koji neki programi pokušavaju izgraditi (financiranje otpornosti zajednice, socijalno propisivanje) i ulazna veličina koja određuje koliko će se usluga doista prihvatiti. Usluga uvedena u zajednicu s visokim povjerenjem i dobrom umreženošću širit će se usmenom predajom na način na koji se identična usluga u području s niskim povjerenjem neće.

## Matematika

```
ONS-ov okvir četiriju stupova (pokazatelji, ilustrativno):

Osobni odnosi:                  % onih koji imaju na koga se osloniti u krizi
Potpora društvene mreže:        % onih koji bi po potrebi mogli posuditi novac od prijatelja/obitelji
Građanska angažiranost:         % onih koji su volontirali ili poduzeli građansku akciju u posljednjih 12 mjeseci
Povjerenje i norme suradnje:    % onih koji se slažu da „većini ljudi se može vjerovati”

ONS ne objavljuje nijedan jedinstveni složeni rezultat: stupovi se
iskazuju zasebno, namjerno, jer bi njihovo zbrajanje u jedan indeks
sakrilo koji je pojedini stup slab.

Putnamova podjela na povezujući/premošćujući (okvir, ne formula):
  povezujući kapital ≈ gustoća veza unutar homogene skupine
  premošćujući kapital ≈ učestalost/jakost veza među različitim skupinama
```

## Primjer iz prakse

**Presjek društvenog kapitala u susjedstvu**: anketa u stilu Community Life Survey u lokalnom području pokazuje da 78 % ima na koga se osloniti u krizi (osobni odnosi), 61 % moglo bi posuditi novac po potrebi (potpora mreže), 24 % volontiralo je u protekloj godini (građanska angažiranost), a 41 % slaže se da „većini ljudi se može vjerovati” (povjerenje i norme), naspram nacionalnih prosjeka od otprilike 85 %, 70 %, 30 % i 45 % (ilustrativno, kalibrirajte prema važećem ONS-ovu biltenu). Područje zaostaje na svakom stupu, ali najviše na povjerenju (41 % naspram 45 % na nacionalnoj razini, razlika od 4 postotna boda) i građanskoj angažiranosti (24 % naspram 30 %, razlika od 6 postotnih bodova), što upozorava da je građanska angažiranost, a ne povjerenje, najveći relativni manjak vrijedan ciljanog ulaganja (primjerice programa potpora zajednici), a ne općenita inicijativa „izgradimo povjerenje”.

**Povezujući naspram premošćujućeg, oblikovanje usluge**: program zapošljavanja u zbijenoj zajednici utvrđuje da se preporuke unutar zajednice šire brzo (visok povezujući kapital: glas se širi u nekoliko dana), ali da program teško dopire do stanovnika izvan te mreže (nizak premošćujući kapital: odaziv izvan jezgre zajednice nakon nekoliko mjeseci gotovo je nula). Pripadajuće rješenje nije „više marketinga” nego namjerna izgradnja premošćujućih veza, partnerstvom s organizacijama koje se nalaze *izvan* postojeće mreže, jer sam povezujući kapital ne može riješiti problem premošćujućeg kapitala.

## Veza s programskim inženjerstvom

- Digitalne platforme koje usmjeravaju uzajamnu pomoć, volontiranje ili potpore zajednici (primjerice usluga „lokalnog povezivača”) doslovno grade infrastrukturu premošćujućeg kapitala; njihova bi mjera uspjeha trebala biti raznolikost mreže ostvarenih veza, a ne samo broj transakcija. Vidi [državu kao platformu](../državna-uprava-kao-platforma/) za širi obrazac infrastrukture na kojoj drugi grade vrijednost.
- Kad teorija promjene nekog programa izričito cilja društveni kapital kao ishod (fond za otpornost zajednice, usluga socijalnog propisivanja), njegova [teorija promjene](../teorija-promjene/) i [logički model](../logički-model/) trebaju imenovati točan stup (povjerenje, građansku angažiranost, potporu mreže) koji očekuje pomaknuti, a ne neodređen ishod „izgraditi zajednicu” koji se ne može mjeriti prema ONS-ovoj polaznoj vrijednosti.
- Pokazatelji društvenog kapitala koristan su okvir pravednosti uz [Index of Multiple Deprivation](../indeks-višestruke-deprivacije/): područje može biti dohodovno deprivirano, ali društveno bogato, ili obrnuto, a to upućuje na vrlo različite intervencije.

## Zamke

- **Svođenje četiriju ONS-ovih stupova na jedan složeni rezultat**: ONS to namjerno ne čini; jedan broj skriva koji stup donosi nisko očitanje, a prosječenje zamagljuje razliku između zajednice s visokim povjerenjem i slabom građanskom angažiranošću i one koja je obrnuta.
- **Pretpostavka da je društveni kapital uvijek dobar**: gust povezujući kapital u zatvorenoj skupini može aktivno odbijati vanjske institucije (uključujući državne usluge); sam Putnam povezujući i premošćujući kapital promatra kao različita dobra s različitim, katkad suprotstavljenim učincima.
- **Rabljenje anketnih mjera društvenog kapitala kao operativne metrike u stvarnom vremenu**: temeljne ankete (Community Life Survey, Understanding Society) provode se jednom godišnje ili rjeđe; podatke o društvenom kapitalu valja tretirati kao sporo promjenjiv kontekstualni pokazatelj, a ne nešto što nadzorna ploča usluge može osvježavati tjedno.

## Izvori

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
