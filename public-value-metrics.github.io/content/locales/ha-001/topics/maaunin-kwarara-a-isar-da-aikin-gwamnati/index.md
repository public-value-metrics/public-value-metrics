# Ma'aunin Kwarara a Isar da Aikin Gwamnati

Ma'aunin kwarara (flow metrics) — Dokar Little (Little's Law), iyakokin aikin da ke gudana (WIP), da ingancin kwarara — suna bayyana yadda sauri ake motsa aiki ta tsarin da ke da iyakataccen ƙarfi. Allon sprint tsari ne guda; layin neman fa'idodi, rijistar neman izinin gini, ko tarin shari'ar bizar ƙaura daidai lissafi ɗaya ne sanye da wata riga daban.

## Dalilin da ya sa yake da muhimmanci

Tarin shari'o'in gwamnati tsarin layi ne, kuma tsarin layi yana bin dokokin layi ko wani ya auna ko bai auna ba. Wa'adin yanke hukunci na doka yana bayyana wannan a fili: a ƙarƙashin tsarin Town and Country Planning, yawancin ƙananan buƙatun izinin gini suna da manufar yanke hukunci ta makonni 8 kuma manyan makonni 13 — alƙawarin lokacin zagaye (cycle time) da aka gina kai tsaye cikin doka. Tarin shari'ar neman mafaka na Home Office, wanda National Audit Office da Home Affairs Select Committee suka bincika akai-akai, shari'a ce da aka rubuta da kyau ta tsarin jama'a inda aikin da ke gudana ya girma da sauri fiye da fitarwa na tsawon lokaci, yana tura lokutan zagaye nesa da kowane tsammanin doka ko na hidima. Ma'aunin kwarara yana ba injiniyoyi da manajojin shari'a harshe na gama gari, na ƙididdiga, don daidai wannan yanayin gazawa, maimakon barin shi a matsayin "matsalar tarin aiki" ta ƙwarai.

## Lissafi

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

Duba [ma'aunin DORA don ƙimar jama'a](../maaunin-dora-don-ƙimar-jamaa/) don lissafi iri ɗaya da aka yi amfani da shi a bututun ƙaddamar da manhaja maimakon shari'o'i.

## Misali aiki

**Sashen izinin gini na ƙaramar hukuma**: buƙatu 400 a buɗe a kowane lokaci (WIP), ƙungiyar tana warware buƙatu 50/mako (fitarwa).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

Wannan ya faɗo daidai a manufar doka ta makonni 8 ga ƙananan buƙatu — ba tare da sarari ba, ma'ana kowane sauyi a buƙatar da ke shigowa ko lokacin amsar masu shawara yana tura yanke hukunci ya wuce wa'adin doka.

**Ingancin kwarara**: daga cikin waɗannan makonni 8 (kwanaki 56 na kalanda), buƙata yawanci tana da kusan awanni 6 na ainihin lokacin sarrafawar ma'aikacin shari'a.

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1.3%
```

Ma'aunin Vacanti ga ƙungiyoyin manhaja yana sanya ingancin kwarara na yau da kullum a 15–20%; shari'o'in gwamnati, tare da miƙa wa masu shawara na doka da dama da tagogin shawarwarin jama'a, galibi suna gudana a ƙasa da haka sau goma. 98.7% na lokacin "jira" shi ne inda makonni takwas ke tafiya a zahiri — ba a ƙarfin ma'aikacin shari'a ba.

**Shiga tsakani na iyakar WIP**: ƙayyade buƙatu a buɗe ga kowane ma'aikacin shari'a a 15 maimakon 25 mara iyaka (tare da kiyaye fitarwa ɗaya) yana mayar da WIP daga 400 zuwa kusan 240 a ƙungiyar mutum 16:

```
New cycle time = 240 / 50 = 4.8 weeks
```

Kusan rabin lokacin zagaye daga canjin manufa, ba ƙarin ma'aikata ba — ƙarfin da ƙungiyoyin isarwa irin na DORA ke jan lokacin da suke ƙayyade WIP na sprint.

## Alaƙa da injiniyancin manhaja

Ma'aunin kwarara shi ne harshen gama gari tsakanin allon Kanban na ƙungiyar isarwa da falon shari'ar da take gina manhaja dominsa: layin ma'aikacin shari'a da layin pull-request duka Dokar Little ke mulkarsu, kuma duka suna wuce manufofin lokacin zagayensu iri ɗaya — WIP da yawa idan aka kwatanta da fitarwa. Wannan yana da muhimmanci kai tsaye ga [kuɗin jinkiri a shirye-shiryen jama'a](../kuɗin-jinkiri-a-shirye-shiryen-jamaa/): lokacin zagaye × CoD su ne fam da ke zaune a layi a kowane lokaci, kuma yana da muhimmanci ga [ma'aunin hidima da ma'aunin mu'amala](../ƙaidodin-hidima-da-maaunan-muamala/), inda manufar lokacin amsa da aka wallafa alƙawarin lokacin zagaye ne wanda ma'aunin kwarara kaɗai ke iya gano dalilin da ya sa aka rasa shi. Manhajar tsarin shari'a ya kamata ta bayyana WIP da lokacin zagaye a matsayin ma'aunin aiki na farko, ba ta binne su a cikin tsarin sarrafa shari'a da babu wanda ke tambaya ba.

## Tarkuna

- **Ƙara iyakokin WIP ba tare da gyara ainihin ƙulli ba**: idan ƙuntatawar ita ce lokacin amsar mai shawara na doka na waje, ƙayyade WIP na ma'aikacin shari'a kawai yana motsa layi zuwa sama maimakon rage shi.
- **Ɗaukar ingancin kwarara a matsayin manufa da za a yi wasa da ita**: gaggauta 1.3% na lokacin aiki da kyar yake motsa lokacin zagaye; ƙarfin kusan koyaushe yana cikin yanayin jira, wanda yawanci yana nufin sake tsara tsari, ba saurin ma'aikacin shari'a ba.
- **Watsi da bambanci**: Dokar Little tana bayyana matsakaici; tarin shari'a mai yawan bambancin buƙata yana buƙatar ƙarfin ajiya, ba tsaurara iyakar WIP kaɗai ba, ko wa'adin doka zai ci gaba da ɓacewa a wutsiyar da ba ta da tabbas ko da matsakaicin yana inganta.
- **Auna WIP ba daidai ba**: shari'a "a buɗe" a tsarin rikodi amma ainihin tana tsayawa tana jiran wani ɓangare na uku har yanzu WIP ce; cire ta yana yabon lambobi ba tare da canza gaskiyar da ɗan ƙasa ke gani ba.

## Majiyoyi

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
