# Technical debt bilang pagkaubos ng public value sa IT ng pamahalaan

Ang technical debt ay metaporang inilatag ni Ward Cunningham noong 1992 para sa ipinahihiwatig na gastos sa hinaharap ng mga madaliang desisyon sa pag-code noong nakaraan: isang **principal** (ang utang na gawaing remediation) at isang **interest** (ang patuloy na pabigat nito sa paghahatid). Sa legacy na IT estate ng pamahalaan, direktang binabayaran ang interest na iyon mula sa public value — mas mabagal na paghahatid ng pagbabagong ayon sa batas, mas mataas na rate ng kabiguan sa mga serbisyong nakaharap sa mamamayan, at lumiliit na bilang ng mga taong ligtas na makakahawak sa sistema.

## Bakit ito mahalaga

Ang mga legacy na mainframe at sistemang panahon ng COBOL sa mga departamento ng pamahalaan ng UK — ang HMRC at DWP ang kabilang sa pinakamadalas banggitin — ay may mahusay na dokumentado at lumalalang panganib na paulit-ulit na binanggit ng National Audit Office, kabilang sa ulat nitong *Digital Transformation in Government* (<https://www.nao.org.uk/>): mga lumang platform na mahal baguhin, lalong mahirap i-secure, at umaasa sa espesyalistang manggagawang mas mabilis magretiro kaysa mapalitan. Hindi tulad ng backlog sa pribadong sektor, ang utang na ito ay nasa pagitan mismo ng mga mamamayan at ng kanilang mga karapatang ayon sa batas — ang benefit calculation engine na hindi ligtas baguhin ay hadlang sa paghahatid ng patakaran, hindi lang abala sa engineering. Ang pag-restart noong 2013 ng IT programme ng Universal Credit, nang matuklasan ng National Audit Office na hindi maghahatid ng value for money ang orihinal na build at kailangang i-write off ang malaking bahagi ng software asset, ay kanonikal na halimbawa ng hindi napresyuhang technical debt na bumabalik sa isang buhay at nakikitang pampublikong programa sa antas ng ministro.

## Ang matematika

```
SQALE principal = Σ ng mga paglabag (oras ng remediation) × rate ng gastos ng developer
Technical debt ratio (TDR) = gastos ng remediation / gastos ng muling pagbuo × 100
                    (mga grado ng SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Interest (ang bilang na nagbibigay-katwiran sa pagbabayad):
  interest/taon = Δ bilis ng paghahatid × halaga kada yunit ng bilis
                + Δ rate ng insidenteng nakaharap sa mamamayan × gastos kada insidente
                + premium sa espesyalistang kasanayan × apektadong headcount
Kaso ng pagbabayad = PV(interest na naiwasan sa horizon) − gastos ng remediation
               (dini-discount sa social discount rate ng Green Book, tingnan ang
               social-discount-rate.md)
```

Inilalahad ng principal ang pananagutan; ang interest ang bumubuo ng kasong pamumuhunan para sa public accounts committee.

## Halimbawang kalkulasyon

Isang 250,000-linyang claims-processing engine na isinulat sa legacy na 4GL. Gamit ang benchmark ng CAST Appmarq na humigit-kumulang $3.61 ng technical-debt principal kada linya ng code (≈£2.85 sa karaniwang palitan):

```
Principal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (grado C)
```

Nasukat na interest: nagpapanatili ang departamento ng tatlong espesyalistang kontratista sa 40% na premium sa day-rate kumpara sa karaniwang rate ng senior engineer dahil nawala na ang mga kasanayan sa loob — dagdag na £180,000/taon sa anim-na-taong koponan. Nagdudulot din ang sistema ng apat na malaking outage sa pagproseso kada taon, bawat isa'y nagsususpinde ng mga desisyon para sa humigit-kumulang 5,000 claimant at nagre-redirect sa kanila sa contact centre sa humigit-kumulang £25/tawag:

```
Interest ≈ £180,000 (premium sa kasanayan)
         + 4 × 5,000 × £25 = £500,000 (gastos ng na-redirect na contact)
         ≈ £680,000/taon
```

Ang naka-target na remediation ng pinakamahinang mga module ay nagkakahalaga ng £1,200,000 at namodelo upang bawasan ang interest ng 70%:

```
Pagbaba ng interest = 0.70 × 680,000 = £476,000/taon
Payback ≈ 1,200,000 / 476,000 ≈ 2.5 taon
```

Mahalaga ang pag-target: walang mabibili sa remediation ng bihirang galawin na code, dahil nakakonsentra ang interest kung saan sabay na pinakamataas ang dalas ng pagbabago at densidad ng utang.

## Kaugnayan sa software engineering

Ang balangkas ng public value na nagtataas sa kaso ng technical debt lampas sa "luma na ang code": ipahayag ang legacy estate bilang imbentaryo kung saan nakakonsentra ang nawawalang kapasidad sa paghahatid, at iugnay ito nang tahasan sa [total cost of ownership](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/), dahil ang interest ay gastos sa operasyon na nabibilang sa linya ng TCO kahit hindi pa ito kailanman hiningi ng finance. Ang mga sistemang punô ng utang ay may di-proporsyonal na exposure din sa [cybersecurity](../halaga-ng-cybersecurity-sa-pampublikong-sektor-pagpepresyo-sa-pagbabawas-ng-panganib/), dahil magkaugnay ang bilis ng pag-patch at densidad ng utang — ang legacy na sistemang hindi mapa-patch ay technical debt na ang interest ay binabayaran sa panganib ng insidente sa halip na sa pound. At bawat trade-off ng remediation laban sa feature ay mismong desisyon sa [cost-of-delay](../cost-of-delay-sa-mga-programang-pampubliko/): ang pagbabayad ng utang ay nagpapaantala sa susunod na pagbabagong ayon sa batas, na may sariling CoD na dapat timbangin laban sa interest na natipid.

## Mga karaniwang pagkakamali

- **Pag-uulat ng principal lamang**: ang malaki at nakakatakot na tantiya ng remediation na walang bilang ng interest ay walang naipapaliwanag sa nag-aapruba ng gastusin.
- **Literal na pagtanggap sa mga bilang ng utang na gawa ng tool**: binibilang ng mga scanner na istilong SQALE ang mga paglabag sa rule; hindi nila nakikita ang mamahaling uri ng utang — mga desisyon sa arkitektura at hindi dokumentadong legacy na business rule — habang nagbabandila ng mga bagay na walang halaga.
- **"Maiiwasan ng rewrite ang lahat ng iyan"**: ang mga programa ng pagpapalit ay dapat pumasa sa parehong disiplina ng anumang business case — counterfactual na gastos, posibilidad ng tagumpay, at discounting — hindi exemption mula rito, gaya ng ipinakita ng pag-restart ng Universal Credit noong 2013.
- **Utopyanismong zero-debt**: hindi zero ang pinakamainam na antas ng utang; ang utang ay leverage na bumili ng mas maagang paghahatid. Ang laging tanong ay ang interest rate, hindi kung may utang ba.

## Mga sanggunian

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
