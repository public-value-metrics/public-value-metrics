# Mga KPI ng pampublikong sektor: pagpili ng sukatan na hindi madaling dayain

Ang key performance indicator (KPI) ay piniling sukatang sinusubaybayan na kumakatawan kung mahusay bang ginagampanan ng isang pampublikong serbisyo ang trabaho nito. Sa pamahalaan, hindi kailanman neutral ang pagpili ng KPI: dahil nakakabit ang mga KPI sa badyet, league table, at karera, hinuhubog ng mismong pagpili nito ang pag-uugali ng lahat ng nasa ibaba nito, madalas na higit pa sa patakarang lumikha ng serbisyo.

## Bakit ito mahalaga

Ang obserbasyon ni Charles Goodhart noong 1975 tungkol sa patakarang monetaryo — na kalaunan ay pinasikat ni Marilyn Strathern bilang "kapag ang isang sukatan ay naging target, hindi na ito mabuting sukatan" — ang pinakamahalagang babala sa pamamahala ng performance sa pampublikong sektor. Ang KPI na pinili para *ilarawan* ang isang sistema ay nagsisimulang *magbaluktot* sa sistemang iyon sa sandaling itali rito ang pondo, sahod, o pampulitikang kaligtasan. Ang klasikong halimbawa ay ang response time ng mga ambulansya ng NHS: nang maging mahigpit ang target na walong-minutong response sa Category A, ipinakitang may ilang trust na "nag-imbak" ng mga ambulansya sa labas lamang ng orasan ng response-time, o nag-reclassify ng mga tawag, upang maabot ang numero nang hindi binabago ang outcome ng mga pasyente. Ang gabay ng UK National Audit Office sa pagpili at paggamit ng mga performance indicator — na nakasaad sa mga ulat nito sa value-for-money at sa balangkas na "Performance Measurement by Regulators" at "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — ay umiiral mismo dahil paulit-ulit na pumipili ang mga departamento ng mga indicator na madaling iulat sa halip na mahirap dayain. Ang software engineer na nagpapalabas ng dashboard na pagbabatayan ng paghatol sa isang ministro o direktor ay, sinadya man o hindi, nagdidisenyo ng istruktura ng insentibo ng isang pampublikong institusyon.

## Ang matematika

Balangkas ang paksa ng disenyo ng KPI, ngunit ang *pagsusuri* sa kandidatong KPI ay paulit-ulit na checklist, hindi pormula:

```
Para sa bawat kandidatong KPI, markahan laban sa:
  Fit for purpose  — sinusukat ba nito ang outcome, o proxy na ilang hakbang ang layo?
  Appropriate      — pag-aari ba ito ng mga taong talagang may impluwensiya rito?
  Balanced         — ipinares ba ito sa counter-metric na sumasalo sa pandaraya?
  Robust           — kaya ba nitong tumagal sa audit, o ito ba ay self-reported at hindi mabeberipika?
  Integrated       — akma ba ito sa mas malawak na hanay, o sumasalungat sa ibang KPI?
  Cost-effective   — mas malaki ba ang gastos sa pagkolekta nito kaysa sa desisyong ipinapaalam nito?

Paghahati ng leading vs lagging:
  Leading indicator  → hinuhulaan ang hinaharap na outcome, ngunit madalas madaya (hal. mga tawag na sinagot <60s)
  Lagging indicator  → kinukumpirma na nangyari ang outcome, ngunit huli na para magamit sa pagmamaneho
                        (hal. taunang survey ng kasiyahan)
  Ang matatag na hanay ng KPI ay nagpapares ng hindi bababa sa isa sa bawat isa para sa bawat layunin.
```

## Halimbawang kalkulasyon

**Ambulance trust**: nag-uulat ang isang trust ng KPI ng response-time sa Category A (nakamamatay) na "75% ng mga tawag ay tinugunan sa loob ng 8 minuto." Sa isang quarter, 6,000 tawag sa Category A ang pumasok; 4,500 ang natugunan sa loob ng 8 minuto, na nagbibigay ng 75.0% — tila nasa target.

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (naaabot ang 75% na threshold)
```

Ngunit nagdaragdag ang Goodhart audit ng counter-metric: karaniwang response time ng pinakamabagal na 10% ng mga tawag.

```
Karaniwang response ng pinakamabagal na decile = 34 minuto (mula 19 minuto dalawang taon na ang nakaraan)
```

Naaabot ng trust ang target habang ang buntot — ang mga tawag na pinakamalamang na tunay na nakamamatay kapag hindi perpekto ang triage — ay lumala nang malaki, dahil ang mga crew ay inuuna sa mga tawag na malapit sa gilid ng 8-minutong hangganan sa halip na ayon sa klinikal na pagkaapurahan. Nagkuwento ng kasinungalingan ang iisang KPI; ang ipinares na KPI ang nagkuwento ng totoo.

## Kaugnayan sa software engineering

Ang mga engineer na bumubuo ng performance dashboard para sa pamahalaan ay, sa gawa, nagdidisenyo ng incentive API ng organisasyon. Mga praktikal na implikasyon: i-instrument ang *denominator* nang kasing-higpit ng numerator (ang KPI na iniulat bilang hubad na porsyento ay nag-aanyaya ng pandaraya sa denominator — tingnan ang [cost-per-transaction](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/) para sa parehong bitag sa mga digital na serbisyo); isama ang mga counter-metric sa parehong dashboard sa halip na hiwalay na ulat na walang nagbabasa, upang nakikita ang pandaraya sa punto ng desisyon; at i-version ang depinisyon ng KPI, dahil ang tahimik na pagbabago ng kahulugan (pagbabago kung ano ang binibilang na "tawag," "kaso," o "pagkakumpleto") ay sa gawa katumbas ng pagbabago ng target nang hindi ipinapaalam. Ang [public value scorecard](../public-value-scorecard-balanced-scorecard-para-sa-mga-organisasyong-may-misyon-sa-halip-na-tubo/) ay isang estrukturadong paraan upang hindi mabasa nang nag-iisa ang iisang KPI, at ang [outcomes-based accountability](../outcomes-based-accountability-paghihiwalay-ng-pananagutan-ng-populasyon-at-ng-programa/) ang disiplina ng pagpili ng mga KPI sa antas ng populasyon na hindi kayang baluktutin nang mag-isa ng iisang team.

## Mga karaniwang pagkakamali

- **Pagpili sa madaling kolektahing metric kaysa sa makabuluhan**: napakadaling i-log ang oras ng pagsagot sa tawag; hindi ang kung nalutas ba ng tawag ang problema ng mamamayan — ngunit ang pangalawa lamang ang outcome. Labanan ang pagpili sa kung ano na ang inilalabas ng sistema.
- **Walang counter-metric**: ang anumang KPI na nakakabit sa pera o reputasyon ay madadaya sa mga gilid; ilabas ito kasama ng ipinares na metric na sumasalo sa malamang na paraan ng pandaraya bago ito ilathala.
- **Pagbabago ng depinisyon ng metric nang walang changelog**: ang pagpapalit ng "mga tawag na natanggap" sa "mga tawag na sinagot" upang gandahan ang takbo ay sumisira sa kredibilidad ng time series sa sandaling matuklasan ito — laging maglathala ng changelog ng mga depinisyon kasabay ng mga numero.
- **Pagkalito sa aktibidad at resulta**: ang pagbilang ng mga inspeksyong natapos ay output; ang pagbilang ng mga lugar na dinala sa pagsunod ay mas malapit sa outcome (tingnan ang [outcomes laban sa outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/)).

## Mga sanggunian

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
