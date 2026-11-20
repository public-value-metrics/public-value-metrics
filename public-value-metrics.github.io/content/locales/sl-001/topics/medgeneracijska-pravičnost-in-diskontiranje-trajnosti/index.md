# Medgeneracijska pravičnost in diskontiranje trajnosti

Diskontiranje prihodnjih stroškov in koristi nazaj na sedanjo vrednost je standardna praksa pri javnih ocenah – glej [družbeno diskontno stopnjo](../družbena-diskontna-stopnja/) – vendar vsaka pozitivna diskontna stopnja, obrestovana skozi desetletja ali stoletja, skrči daljno prihodnost proti nič v današnjih pogojih. Pri odločitvah s posledicami čez stoletje ali več – podnebne spremembe, jedrski odpadki, izguba biotske raznovrstnosti, trajnost pokojnin – to matematično dejstvo postane etično: standardno diskontiranje lahko katastrofalno škodo prihodnjim generacijam v sedanji vrednosti prikaže kot komaj vredno preprečitve.

## Zakaj je pomembno

Ramseyjeva enačba, ki jo je leta 1928 izpeljal Frank Ramsey, razstavi diskontno stopnjo na dve komponenti: čisto časovno preferenco (δ, koliko preprosto raje imamo zdaj kot pozneje, neodvisno od bogastva) in učinek rasti bogastva (η×g, koliko diskontiramo, ker se pričakuje, da bodo prihodnje generacije bogatejše, zato jim dodaten funt pomeni manj). Standardna dolgoročna diskontna stopnja britanskega Green Booka je zgrajena na tej enačbi in sledi *padajočemu* razporedu namesto fiksne stopnje – zasnova, ukoreninjena v delu Martina Weitzmana o »gama diskontiranju«, ki kaže, da ko je sama prihodnja diskontna stopnja negotova, ekvivalentna stopnja gotovosti, ki bi jo morali uporabiti, matematično pada skozi čas, ker scenariji z nizko stopnjo začnejo prevladovati, čim dlje gledate naprej. Stern Review o ekonomiki podnebnih sprememb (2006), ki ga je vodil sir Nicholas Stern, je etično razpravo peljal dlje: Stern je zagovarjal, da naj bo čista časovna preferenca blizu nič (uporabil je δ ≈ 0,1 %, ki odraža le majhno verjetnost katastrofe, ki konča civilizacijo, ne pa resnične preference sedanjosti pred prihodnostjo), kar da veliko nižjo efektivno diskontno stopnjo od običajne prakse Green Booka in temu ustrezno veliko močnejši sedanji argument za podnebno ukrepanje. Kritiki (zlasti William Nordhaus) so trdili, da je bila Sternova skoraj ničelna stopnja etično zagovorljiva, a nasprotna dejansko opaženemu vedenju pri varčevanju in naložbah. Nesoglasje ni tehnična opomba – je največji posamezen razlog, da lahko dva enako stroga ekonomista pridobita močno različna zaključka o tem, koliko bi se morala sedanja generacija odreči za prihodnost, in je razlog, da mora programska oprema, ki podpira dolgoročno ocenjevanje javnih naložb, razkriti svoje predpostavke diskontiranja, ne pa jih zakopati v privzeto vrednost preglednice.

## Matematika

```
Ramseyjeva enačba:   r = δ + η × g

  r = družbena diskontna stopnja
  δ = čista časovna preferenca (stopnja nepotrpežljivosti, neodvisna od bogastva)
  η = elastičnost mejne koristnosti potrošnje (padajoča vrednost
      dodatne potrošnje, ko ljudje postajajo bogatejši)
  g = pričakovana stopnja rasti potrošnje na prebivalca

Padajoči dolgoročni razpored Green Booka (približno, trenutno objavljeni pasovi):
  Leta 0–30:     3,5 %
  Leta 31–75:    3,0 %
  Leta 76–125:   2,5 %
  Leta 126–200:  2,0 %
  Leta 201–300:  1,5 %
  Leta 301+:     1,0 %

Parametri Stern Review: δ ≈ 0,1 %, η = 1, g ≈ 1,3 %  → r ≈ 1,4 %
```

## Praktični primer

**Današnja vrednost £1 preprečene škode čez 100 let** pri treh režimih diskontiranja:

```
Fiksna kratkoročna stopnja Green Booka (3,5 %, nespremenjena 100 let):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 penija)

Padajoči razpored Green Booka (3,5 % za leta 1–30, 3,0 % za leta 31–75,
2,5 % za leta 76–100):
  faktor(1–30)   = 1,035^30  ≈ 2,807
  faktor(31–75)  = 1,03^45   ≈ 3,782
  faktor(76–100) = 1,025^25  ≈ 1,854
  skupni faktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 penija)

Čista časovna preferenca skoraj nič v slogu Sterna (r ≈ 1,4 % fiksno):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 penijev)
```

Isti £1 preprečene škode čez stoletje je danes vreden 3,2p, 5,1p ali 25p, odvisno zgolj od uporabljene konvencije diskontiranja – skoraj osemkratni razpon, ki določa, ali projekt blaženja podnebnih sprememb z velikim začetnim stroškom in izplačilom čez stoletje sploh preseže prag pozitivnega NPV. To je mehanizem osrednjega opozorila te teme: pri vsaki pomembno pozitivni fiksni stopnji je dovolj oddaljena prihodnja škoda aritmetično izbrisana iz ocene, ne glede na njeno resnično resnost.

## Povezava s programskim inženirstvom

- Vsako orodje za dolgoročno oceno ali poslovni primer (infrastruktura, prilagajanje podnebju, modeliranje pokojnin) bi moralo izvesti *padajoči* razpored Green Booka, ne ene fiksne stopnje – privzeta fiksna stopnja tiho vgradi veliko močnejšo pristranskost proti prihodnosti, kot jo določa trenutno navodilo britanske vlade.
- Diskontna stopnja in obzorje morata biti vedno izpostavljena kot vidna, preverljiva parametra v programski opremi za ocene, z izrecno prikazano občutljivostjo izračuna nanju (kot v zgornjem delovnem primeru) – zakopavanje stopnje v konfiguracijsko datoteko vabi točno »skrito etično izbiro«, pred katero opozarja razprava Stern-Nordhaus; to se dopolnjuje s poudarkom na preglednosti v [računovodstvu naravnega kapitala](../računovodstvo-naravnega-kapitala/) in je podlaga teme [družbena diskontna stopnja](../družbena-diskontna-stopnja/) na splošno.
- Kjer so koristi programa izrecno medgeneracijske (zaščita pred poplavami, obnova naravnega kapitala, dolgoročna digitalna infrastruktura), bi morala [družbena analiza stroškov in koristi](../družbena-analiza-stroškov-in-koristi/) poročati rezultate pri vsaj dveh predpostavkah diskontiranja (standard Green Booka in primer občutljivosti z nizko stopnjo), ne ene točkovne ocene, da odločevalci vidijo, kako sama izbira diskontne stopnje premakne odgovor.

## Pasti

- **Predstavitev ene diskontirane NPV brez razpona občutljivosti** – glede na to, koliko sama diskontna stopnja spremeni odgovor pri dolgoročnih projektih, NPV z eno stopnjo bistveno precenjuje natančnost; vedno poročajte razpon, ki zajema vsaj standard Green Booka in scenarij z nizko stopnjo.
- **Uporaba kratkoročne fiksne stopnje (3,5 %) pri oceni za več stoletij** – lastno navodilo Green Booka določa padajoči razpored ravno zato, ker je bila fiksna stopnja ocenjena kot neprimerna po približno 30 letih; njena uporaba kljub temu podcenjuje dolgoročne stroške.
- **Obravnavanje δ (čiste časovne preference) kot zgolj tehničnega parametra** – Sternova skoraj ničelna vrednost in višja implicitna vrednost Green Booka sta zagovorljivi le kot etični stališči o tem, koliko teže sedanjost dolguje prihodnosti, ne kot empirično »pravilni« ali »napačni« številki; programska oprema bi morala predpostavko narediti vidno, namesto da bi eno številko predstavila kot objektivno pravilno.

## Viri

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
