# Government as a Platform (GaaP): mga pinagsasaluhang bahagi ng serbisyong digital ng pamahalaan

Ang Government as a Platform ay estratehiya ng pagbuo ng mga pinagsasaluhan at magagamit-muling bahagi — serbisyo ng notipikasyon, serbisyo ng pagbabayad, serbisyo ng identidad — nang minsanan at sentral, upang daan-daang indibidwal na serbisyo ng pamahalaan ang gumamit ng mga ito sa halip na bawat isa ay bumuo ng sarili. Muling binabalangkas nito ang pampublikong digital na imprastraktura bilang problema ng ekonomiya ng plataporma: wala ang halaga sa alinmang integrasyon, nasa marginal na gastos ng *susunod* na koponang gagamit nito na papalapit sa zero.

## Bakit ito mahalaga

Pormal na inilatag ng GDS ang estratehiya sa publikasyon nitong "Government as a Platform" noong 2015, na nangatwirang paulit-ulit na binubuo ng pamahalaan ang parehong kakayahan — pagtanggap ng bayad, abiso sa user, beripikasyon ng identidad, paghahanap ng address — nang hiwalay sa bawat serbisyo, bawat isa ay may sariling procurement, pagtatasa sa seguridad, at patuloy na pasanin sa suporta. Ang alternatibo ay kaunting bilang ng mga pinagsasaluhang plataporma, na binuo sa mataas na pamantayan nang minsan at ginagamit sa lahat ng dako: GOV.UK Notify para sa pagpapadala ng email, text message at liham, GOV.UK Pay para sa pagtanggap ng online na bayad, at GOV.UK One Login (kahalili ng naunang programang GOV.UK Verify) para sa beripikasyon ng identidad. Ang sukat na naabot ng mga plataporma ito ang pinakamalinaw na ebidensya na gumana ang estratehiya: nakapagproseso na ang GOV.UK Pay ng mahigit £10 bilyon sa mga transaksyon sa humigit-kumulang 1,800 indibidwal na serbisyo — at kung inabot ito ng halos apat na taon para iproseso ang unang £1 bilyon, ngayon ay naiproseso nito ang ganoong halaga sa humigit-kumulang limang buwan — habang ang GOV.UK Notify ay nakapagpadala ng mahigit 9 bilyong mensahe sa ngalan ng mahigit 1,500 organisasyon ng pamahalaan. Bawat isa sa mga serbisyong gumamit nito ay naiwasang bumuo, mag-secure, at magpanatili ng sariling payment gateway o messaging pipeline.

## Ang matematika

```
Gastos sa pagbuo kada serbisyo (walang plataporma) = N serbisyo × gastos sa pagbuo,
  pagtatasa sa seguridad, at pagpapatakbo ng isang sistema ng pagbabayad/notipikasyon/identidad

Gastos ng plataporma = nakapirming gastos sa pagbuo ng plataporma
              + marginal na gastos kada serbisyong gagamit (integrasyon,
                configuration, patuloy na suporta ng platform team)

Nagbe-break even ang reuse kapag:
  gastos sa pagbuo ng plataporma < N × (gastos sa pagbuo kada serbisyo − marginal
  na gastos ng integrasyon)

Sa mature na plataporma, ang marginal na gastos kada karagdagang gumagamit ay papalapit
sa bayad lamang sa transaksyon/mensahe — ang nakapirming gastos ay hinahati sa buong
estado ng pamahalaan, hindi sa badyet ng iisang departamento, kaya
karaniwang sentral na pinopondohan ang mga bahagi ng GaaP sa halip na singilin
nang buong cost-recovery sa mga unang gumamit.
```

## Halimbawang kalkulasyon

**Lokal na awtoridad na gumagamit ng GOV.UK Pay sa halip na bumuo ng payment gateway**:

```
Tantiya kung bubuo ng sarili:
  PCI-DSS compliance + integrasyon + patuloy na maintenance
  ≈ £85,000 pagbuo + £22,000/taon maintenance

Paggamit ng GOV.UK Pay:
  Pagsisikap sa integrasyon ≈ £12,000 (oras ng developer)
  Bayad sa transaksyon: ang mga bayad ng card ng pamahalaan-sa-mamamayan ay karaniwang
  sinisingil ng maliit na porsyento + nakapirming bayad kada transaksyon, walang
  hiwalay na pasanin ng PCI-DSS na dala ng konseho
  ≈ £12,000 isang beses lamang, ang patuloy na gastos ay nag-iiba ayon sa dami, hindi nakapirmi

Pagtitipid sa unang taon ≈ £85,000 − £12,000 = £73,000, bago bilangin ang
naiwasang £22,000/taon na maintenance at ang naiwasang panganib sa compliance
ng pag-iingat ng datos ng card sa sistemang pinapatakbo ng konseho — ang
ikalawang kategoryang ito ang halaga sa seguridad na tinalakay sa
public-sector-cybersecurity-value.
```

Kung ipapalawak ang £73,000 na iyon sa humigit-kumulang 1,800 serbisyong gumagamit ngayon ng GOV.UK Pay, daan-daang milyon ang pinagsama-samang naiwasang gastos sa pagbuo sa buong pamahalaan — ang ekonomiya ng plataporma, hindi ang anumang isang integrasyon, ang kinaroroonan ng halaga ng estratehiya.

## Kaugnayan sa software engineering

Direktang argumento ang Government as a Platform para sa [build-vs-buy-in-government](../build-vs-buy-sa-pamahalaan-gagawin-o-bibilhin/): kapag may pinagsasaluhan, nasuri, at mahusay na pinatatakbong bahagi, bihirang mas mahusay na pagpili sa [value-for-money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/) ang pagbuo ng sariling katumbas, at halos likas itong bumabagsak sa punto 13 ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) ("gumamit at mag-ambag sa mga bukas na pamantayan, karaniwang bahagi at pattern"). Binabago rin nito ang hugis ng [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/): ipinagpapalit ng pag-ampon ng plataporma ang malaking linya ng kapital at maintenance sa mas maliit na operating cost na nakaugnay sa paggamit, na mas madaling i-forecast at mas madaling alisan ng pondo kapag na-decommission ang isang serbisyo. May pinsan ang bukas na reuse ng mga bahagi sa [open-data-value](../halaga-ng-open-data-pagtataya-sa-halaga-ng-pampublikong-datos-na-walang-presyo/) — parehong estratehiya ang mga ito sa pagtrato sa nalilikha ng pamahalaan nang minsan bilang pinagsasaluhang imprastraktura sa halip na asset ng departamento.

## Mga karaniwang pagkakamali

- **Shadow rebuilding**: tahimik na bumubuo ang mga koponan ng sarili nilang integrasyon ng pagbabayad o notipikasyon dahil mas mabagal ang proseso ng onboarding ng plataporma kaysa sa paggawa nito nang sila lang — problema ito ng friction sa pamamahala, hindi ng teknolohiya, at tahimik nitong sinisira ang ekonomiya ng reuse na pinagbabatayan ng buong estratehiya.
- **Kakulangan sa pondo ng platform team kumpara sa halagang nililikha nito**: napupunta sa mga departamentong gumagamit ang halaga habang nasa platform team ang gastos, na lumilikha ng paulit-ulit na panganib ng underinvestment maliban kung sentralisado at protektado ang pondo — bersyon ng tragedy of the commons.
- **Pagsukat sa tagumpay ng plataporma sa paggamit lamang**: mga leading indicator ang bilang ng pag-ampon (serbisyong na-onboard, mensaheng naipadala), hindi patunay ng halaga; ang tunay na pagsubok ay ang aritmetika ng naiwasang gastos sa pagbuo at naiwasang panganib sa itaas.
- **Pagtrato sa "plataporma" bilang kasingkahulugan ng "monolith"**: nagtatagumpay ang mga bahagi ng GaaP dahil bawat isa ay mahusay sa iisang bagay na may makitid at matatag na interface — ang pagsasama ng mga di-magkaugnay na kakayahan sa iisang "plataporma" ay muling lumilikha ng problema ng bespoke na pagbuo sa ibang sukat.

## Mga sanggunian

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
