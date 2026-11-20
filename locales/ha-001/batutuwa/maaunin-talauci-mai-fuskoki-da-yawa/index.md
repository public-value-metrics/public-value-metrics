# Ma'aunin Talauci Mai Fuskoki Da Yawa (Multidimensional Poverty Index)

Ma'aunin Talauci Mai Fuskoki Da Yawa (MPI) yana auna talauci a matsayin ƙarancin da suka haɗu a kan mutum a lokaci guda — a lafiya, ilimi, da matakin rayuwa — maimakon kuɗin shiga kaɗai da ya faɗi ƙasa da wani layi. Cibiyar Oxford Poverty and Human Development Initiative (OPHI) ce ta ƙirƙire shi tare da Sabina Alkire da James Foster, kuma ana wallafa shi tare da UNDP a kowane Rahoton Ci Gaban Ɗan Adam (Human Development Report) tun 2010, tare da [Ma'aunin Ci Gaban Ɗan Adam (Human Development Index)](../maaunin-ci-gaban-ɗan-adam/).

## Dalilin da ya sa yake da muhimmanci

Layin talaucin kuɗin shiga yana kasa ganin mutanen da ke da isasshen kuɗin shiga amma ba su da ruwa mai tsabta, makaranta, ko kuma sun rasa ɗa, kuma yana kasa ganin cewa ƙarancin yana taruwa wuri ɗaya: gidan da ba shi da wutar lantarki yana da yawan yiwuwar rashin ban-ɗaki mai tsabta da kuma yaro mai rashin abinci mai gina jiki. Hanyar Alkire-Foster, wadda aka gina MPI a kanta, tana ƙidaya ƙarancin kowane mutum a cikin alamomi goma da aka haɗa cikin fuskoki uku masu nauyi daidai — lafiya, ilimi, matakin rayuwa — kuma ba ta ɗaukar mutum a matsayin "talaka bisa MPI" sai idan maki na ƙarancinsa da aka auna ya wuce ƙayyadadden iyaka, wanda ke kama haɗuwar ƙarancin da jerin alƙaluman alama ɗaya-ɗaya ba za su iya kamawa ba. OPHI tana wallafa cikakkiyar hanyar aiki da bayanan ƙasashe a <https://ophi.org.uk/multidimensional-poverty-index/>; MPI na duniya da take kula da shi tare da UNDP yanzu ya shafi ƙasashe sama da 110. Ga software da ake ginawa don shirye-shiryen yaƙi da talauci — canja kuɗi, tantance kulawar zamantakewa, kai wa waɗanda suka cancanta agaji — jerin alamomin MPI sau da yawa shi ne abin da ya fi kusa da daidaitaccen tsarin ƙarancin da aka tabbatar a cibiyoyin ƙididdiga na ƙasa da dama.

## Lissafi

```
10 indicators, 3 dimensions, each dimension weighted 1/3:

Health (1/3):            nutrition (1/6), child mortality (1/6)
Education (1/3):         years of schooling (1/6), school attendance (1/6)
Living standards (1/3):  cooking fuel, sanitation, drinking water,
                          electricity, housing, assets (1/18 each)

deprivation score (c) = sum of weights of indicators a person is deprived in

person is "MPI poor" if c ≥ 1/3 (the poverty cut-off, k = 33%)

H (headcount ratio) = number of MPI poor / total population
A (intensity)        = average deprivation score among the MPI poor only

MPI = H × A
```

Saboda MPI yana ninka *yawan* talakawa da *zurfin* talaucinsu, yankuna biyu masu ma'aunin yawan talakawa iri ɗaya na iya samun maki daban-daban na MPI idan ƙarancin ya fi tsanani a ɗayan — haka ma'anar "babu maye gurbi tsakanin fuskoki" da ke bayan matsakaicin geometric na HDI.

## Misali aiki

**Bincike na ƙasa na mutane 1,000**: an gano 350 a matsayin talakawa masu fuskoki da yawa (maki na ƙarancin ≥ 33%). A cikin waɗannan talakawa 350 kawai, matsakaicin maki na ƙarancin shi ne 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Kwatanta gundumomi biyu masu yawan talakawa iri ɗaya**: Gundumar A tana da H = 0.30 da A = 0.40 (talakawa da yawa, ƙarancin matsakaici); Gundumar B tana da H = 0.30 da A = 0.60 (adadin talakawa ɗaya, amma ƙarancin ya fi tsanani — rashin wutar lantarki *da* ban-ɗaki *da* zuwa makaranta a lokaci guda).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Ma'aunin yawan talakawa iri ɗaya, MPI ya fi girma da 50% a Gundumar B — tsarin kai agaji da ya dogara da yawan talakawa kaɗai zai ɗauki gundumomin biyu daidai kuma ya rasa cewa Gundumar B tana buƙatar shiga tsakani mai zurfi.

## Alaƙa da injiniyancin manhaja

- Tsarin sarrafa shari'o'i da na tantance cancanta na shirye-shiryen zamantakewa sau da yawa suna adana wasu daga cikin alamomi goman (gidaje, zuwa makaranta, alamomin lafiya) a ɗakunan bayanai daban-daban; hanyar ƙidaya ta Alkire-Foster ita ce tsarin da aka riga aka shirya don haɗa su zuwa maki ɗaya na ƙarancin maimakon gina samfurin ba da maki na musamman daga tushe.
- Rabe-raben yawa/zurfi (H × A) tsari ne mai amfani gabaɗaya ga kowane allon bayanai da ke bayar da rahoton "mutane nawa abin ya shafa" tare da "yaya tsananinsa" — haɗa su cikin lamba ɗaya, kamar yadda alƙaluman yaɗuwa na ɗanye suke yi, yana ɓoye daidai yanayin da ya fi buƙatar albarkatu.
- Allon bayanai na alamomi irin na MPI yana dacewa da rahoton [kuɗi ga kowane mai cin moriya (cost per beneficiary)](../kuɗin-kowane-mai-cin-gajiya/) na shirye-shiryen yaƙi da talauci: kuɗi ga kowane maki na raguwar MPI naúra ce da za a iya kare ta don kwatanta matakai daban-daban sosai (canja kuɗi da gina ban-ɗaki).

## Tarkuna

- **Ɗaukar alamomi goman a matsayin na kowa da kowa** — alamomin MPI na duniya na OPHI an daidaita su ne don kwatanta ƙasashe; MPI na ƙasa (ƙasashe da yawa, ciki har da wasu a Kudancin Asiya da Afirka, suna wallafa nasu) suna daidaita alamomi da nauyi ga yanayin gida, kuma ba za a iya kwatanta su kai tsaye da juna ba.
- **Bayar da rahoton H kaɗai** — ma'aunin yawan talakawa yana yin watsi da zurfi gaba ɗaya; a koyaushe a bayar da rahoto ko a ƙididdige A tare da shi, ko MPI kansa.
- **Zaton cewa talakawan MPI da talakawan kuɗin shiga su ne mutane ɗaya** — rahotannin ƙasashe na OPHI da kansu yawanci suna nuna haɗuwa ta ɗan ɓangare ne kawai; shirin da ke kai hari ga talakawan kuɗin shiga kaɗai zai rasa wani muhimmin kaso na talakawa masu fuskoki da yawa a kai a kai.

## Majiyoyi

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
