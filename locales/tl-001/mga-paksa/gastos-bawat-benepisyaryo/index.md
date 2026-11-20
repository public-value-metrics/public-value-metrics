# Gastos Bawat Benepisyaryo

Ang gastos bawat benepisyaryo ay kabuuang gastos ng programa na hinati sa bilang ng mga natatanging taong tumanggap ng serbisyo — sinumang nahawakan, anuman kung aktwal bang nagbago ang kalagayan nila. Ito ang pinakamabilis na bilang ng kahusayang maaaring buuin ng isang organisasyon, dahil ang "sino ang naserbisyuhan namin" ay halos laging nasa case management system na, samantalang ang "sino ang natulungan" ay karaniwang wala.

## Bakit ito mahalaga

Palagian itong hinihingi ng mga tagapondo, at may makatwirang dahilan: agad itong magagamit, maihahambing sa isang portfolio ng lubhang magkakaibang programa, at tapat ito tungkol sa saklaw sa paraang hindi kaya ng mga pahayag ng outcome — na mas matagal i-verify at mas madaling palakihin. Ang UK Charities SORP (Statement of Recommended Practice), na namamahala kung paano nag-uulat ang mga charity sa ilalim ng FRS 102, ay humihiling na ilarawan ng taunang ulat ng mga trustee ang mga nakamit laban sa mga layunin, ngunit ang management accounts ng karamihan sa mas maliliit na charity ay nagde-default pa rin sa mga unit cost na batay sa saklaw dahil mura itong buuin at madaling i-audit.

Ang panganib ay ang pagtrato sa gastos bawat benepisyaryo na parang sumasagot sa tanong na hindi nito kayang sagutin: kung gumana ba ang pera. Tingnan ang [gastos bawat outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/) para sa sukatang sumasagot talaga rito, at ang [outcome kumpara sa output](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) para sa pinagbabatayang pagkakaiba. Lehitimong sukatan ng triage at saklaw ang gastos bawat benepisyaryo — sinasabi nito sa tagapondo kung hanggang saan umaabot ang pera — ngunit ang mababang gastos bawat benepisyaryo ay maaaring tunay na kahusayan o serbisyong napakanipis na wala namang binabago.

## Ang matematika

```
Gastos bawat benepisyaryo = Kabuuang gastos ng programa / Bilang ng natatanging taong naserbisyuhan

Kaibahan:
Gastos bawat outcome      = Kabuuang gastos ng programa / Bilang ng taong nakamit ang tinukoy na outcome

Ang gastos bawat benepisyaryo ay laging ≤ gastos bawat outcome, dahil ang populasyon ng outcome ay subset
(madalas maliit) ng populasyon ng mga benepisyaryo.
```

## Halimbawang kalkulasyon

**Food bank, parehong taon ng halimbawa ng gastos bawat outcome**:

- Kabuuang gastos ng programa: £450,000
- Natatanging sambahayang naserbisyuhan (tatlo o higit pang parcel): 1,800

```
Gastos bawat benepisyaryo = £450,000 / 1,800 = £250 bawat sambahayang naserbisyuhan
```

Ihambing ang dalawang sukatan nang magkatabi:

| Sukatan | Denominator | Resulta |
|---|---|---|
| Gastos bawat benepisyaryo | 1,800 sambahayang naserbisyuhan | £250 |
| Gastos bawat outcome | 630 sambahayang nakamit ang food security | £714 |

Ang tagapondong £250 lamang ang nakikita ay maaaring magkonklusyon na lubhang mahusay ang charity na ito. Ang tagapondong nakikita ang dalawang bilang ay makapagtatanong ng mas kapaki-pakinabang: ang agwat ba sa pagitan ng saklaw (1,800) at outcome (630) ay agwat sa pagkolekta ng datos, agwat sa disenyo, o tapat na salamin ng kung gaano kahirap makamit ang food security sa pamamagitan lamang ng food aid?

**Charity sa job-training, ilustratibo**: gastos bawat benepisyaryo (naka-enroll) = £2,000; gastos bawat outcome (tuloy-tuloy na empleyo sa 6 na buwan) = £11,000, dahil 18% lamang ng mga naka-enroll ang kumukumpleto ng programa at nakakahanap ng tuloy-tuloy na trabaho. Karaniwan ang paglayo ng dalawang bilang nang limang beses saanman mababa ang rate ng pagkumpleto o tibay — magkapareho ang istruktura ng training charity at food bank dito.

## Kaugnayan sa software engineering

Ang gastos bawat benepisyaryo ang default na sukatan sa software ng nonprofit dahil ito ang sukatang kusang lumalabas mula sa talaan ng benepisyaryo nang walang dagdag na trabaho: gumawa ng kaso, i-log ang serbisyo, bilangin ang mga row. Ang pagbuo ng sistemang sumusuporta rin sa gastos bawat outcome ay nangangahulugan ng sadyang pagdaragdag ng pangalawang first-class na entity — isang outcome event, may petsa at tinukoy nang hiwalay sa paghahatid ng serbisyo — at paglaban sa tuksong hayaang ang "sarado na ang kaso" ang pumalit sa "nakamit na ang outcome." Sa pag-scope ng grant management o CRM platform, itanong kung alin sa dalawang sukatan ang aktwal na ipinapakita ng bawat dashboard, at lagyan ng wastong label; ang paghahalo sa dalawa sa iisang tile ng "impact" ay isa sa pinakakaraniwang sanhi sa antas ng software ng mga pagkakamali sa ibaba. Tingnan ang [unit cost databases](../unit-cost-databases-mga-handang-financial-proxy-para-sa-mga-kinalabasang-panlipunan/) para sa benchmarking ng alinmang sukatan kapag wasto na ang pagkaka-label.

## Mga karaniwang pagkakamali

- **Pagpapakita ng gastos bawat benepisyaryo bilang epekto.** Saklaw ang sinusukat nito, hindi pagbabago. Lagyan ang mga dashboard at ulat ng "gastos bawat taong naserbisyuhan," hindi "gastos bawat taong natulungan."
- **Dobleng pagbibilang sa iba't ibang programa.** Ang taong tumatanggap ng parehong food parcel at payo sa utang mula sa iisang charity ay isang benepisyaryo, hindi dalawa, kung ang denominator ay naglalarawan ng natatanging saklaw; magpasya at idokumento kung aling kumbensyon ang ginagamit.
- **Pagturing na laging mas mabuti ang mas mababang bilang.** Palaging tatalunin ng drop-in na lunch club ang masinsing case-management na serbisyo sa gastos bawat benepisyaryo, dahil mas mura ang bahagyang paghawak sa isang tao. Wala itong sinasabi kung alin ang lumilikha ng mas matibay na pagbabago bawat pound.
- **Tahimik na pagpapalit ng denominator sa pagitan ng mga ulat.** Ang bilang ng gastos bawat benepisyaryo na binanggit sa isang taunang ulat laban sa "naka-enroll" at sa susunod laban sa "nakakumpleto" ay hindi maihahambing taon-taon; sabihin ang denominator sa bawat pagkakataon.

## Mga sanggunian

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
