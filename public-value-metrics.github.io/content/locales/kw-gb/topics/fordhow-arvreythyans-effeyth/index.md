# Fordhow Arvreythyans Effeyth

Fordhow arvreythyans effeyth yw an dyssynnansow statystek ha arbrynek devnydhys dhe arvysya pyth a wrug polici po program gwrys-ys yn gwir, dyffrans dhyworth pyth a wrussa hwarvos poken — arbrynansow kontrollys randomys (RCTs), dyffransow-yn-dyffransow, kehevelans skor tuedh, ha dyssynnans diskontynuita rekressyon yw an peswar a dhevnydhyr moyha yn polici poblek an UK. Y a vydh dhe vos drefen na yll an moyha a ebyrnansow governans bos assayys yn labordy: ny yllyr randomya pyneyl tre a gav hyns bus nowydh kepar dell yllyr randomya pyneyl klavji a gav medhegieth, hag ytho an fordhow ma a dhemrys an keth lojyk kawsek heb erghi pup prys assignya randomys.

## Perag y talvos

Magenta Book HM Treasury, Annex A war fordhow kwasi-arbrynek, yw gidyans kanonek governans an UK rag dewis ynter an dyssynnansow ma, ha bagasow kepar ha Education Endowment Foundation ha What Works Centre for Local Economic Growth a vynsa hirarkiek dustuni savys anodhans — RCTs le may fo randomyans posybyl ha ewnek, dyssynnansow kwasi-arbrynek le na vo. An dewis a fordh nyns yw tra teknegek wosa — ev a dhyghtya mar hyll arvreythyans gorthybi "a wrug an program hemma?" po hepken "a hwarva hemma wosa dallath an program?", an keth govyn a wra [dehwelyans kontrafaktel](../dhivyskans-konterfaktek/) erghi an gonisoryon dhe wovyn kyns pub arvreythyans bos komysyonys.

## An matematik

```
RCT:
  Effeyth = kresek(deveth | bagas ebyrnans) − kresek(deveth | bagas kontrol)
  (ewn drefen bos an assignya dhe ebyrnans randomys)

Dyffrans-yn-dyffransow (DiD):
  Effeyth = [deveth_wosa(ebyrnys) − deveth_kyns(ebyrnys)]
          − [deveth_wosa(kontrol) − deveth_kyns(kontrol)]
  (a res tybyans "tuedhow keskerdh": ebyrnys ha kontrol a vensa movya
   warbarth heb an ebyrnans)

Kehevelans skor tuedh (PSM):
  1. Arvysya P(ebyrnans = 1 | kovariants X) rag pub unnik → skor tuedh
  2. Kehevely unnikow ebyrnys gans unnikow anebyrnys a'n jy skorow tuedh hevel
  3. Effeyth = kresek(deveth | ebyrnys) − kresek(deveth | kontrol kehevelys)

Dyssynnans diskontynuita rekressyon (RDD):
  Effeyth = lamm yn deveth gwelys orth an throthow dewisek,
            ow-kehevely unnikow nes a-ugh erbyn nes a-woeles an kut
```

## Ensampel oberys

**Awtorita leel (dyffrans-yn-dyffransow rag program teylyow ankevys)**: an deveth yw omdheweth skol. An tyller ebyrnys a dhrik dhyworth 84% dhe 89% omdheweth (+5 poynt kansran) dres termyn an program; tyller kehevelys mes anebyrnys a dhrik dhyworth 85% dhe 87% (+2 poynt kansran) dres an keth termyn. Arvysans effeyth DiD: 5 − 2 = +3 poynt kansran attribusys dhe'n program. Gweythresys dhe gohort a 2,000 skoler y'n tyller ebyrnys, hemma yw hevelep dhe nes dhe 60 skoler ynkressys (3% × 2,000) ow-tos dhe'n klass omdheweth uhella, ekstrapolasyon a dal bos raportys gans y gaveat tuedhow keskerdh, nyns yw avel kownt-penn ewn.

**Kevarghadow (kehevelans skor tuedh rag kevarghadow whedhis ober)**: 300 kevrennoryon program yw kehevelys dhe 300 unnik dhyworth set data gweythresek brassa ow-devnydhya skorow tuedh savys war oos, hystori ober kyns, ha nivel kwalifikasyon. Nivel ober dewdhek-mis: bagas ebyrnys kehevelys 46%, bagas kehevely kehevelys 33%. Arvysans effeyth PSM: 46% − 33% = +13 poynt kansran attribusys dhe'n program, ow-tybya heb kowdhrysek anwelys (kepar ha hwans) a dhre an dhew, kevrenn ha deveth.

## Kevrenn gans ynjynnerieth medhelweyth

Mar yw unn a'n dyssynnansow ma posybyl wosa, a dheb meur war dewisyow ynjynnans data gwrys yn skeus. RDD a res variabyl ledya skrifys yn ewn ha kut dewisek wir glan; DiD a res data panel kehevelys dres termyn rag an dhew tyller ebyrnys ha kehevelans, hen yw junyansow kehevelys ynter systemys ha bledhynyow; PSM a res data kovariant baselin rych kuntellys kyns ebyrnans, nyns yw dasdhyssynnys wosa. Model data dyssynnys warbarth gans [teori a chanj](../teori-chanj/) ha [model lojyk](../model-lojik/) dhyworth an dalleth — ow-kuntelles kovariants baselin, dydhyow, ha rekordys dewisek rag bagas kehevelans — yw an pyth a wra arvreythyans effeyth ewn posybyl wosa, yn le a hast kostek wosa-dro. Mir [arvreythyans effeyth erbyn arvreythyans argerdh](../arvreythyans-effeyth-erbyn-arvreythyans-argerdh/) rag an govyn kesdhasya na yll an fordhow ma gorthybi aga honan.

## Trapow

- **Erghi RCT le na yll bos po na dal bos ewnek**, po avel kontrari, ankevi pup prys dyssynnans kwasi-arbrynek pan o chons gwir — kut polici, lonshyans dre gradhow — kavadow ha heb devnydh.
- **Ankevi tybyans tuedhow keskerdh yn DiD.** Mar o an tyller kehevelans diwarbarth dhyworth an tyller ebyrnys kyns an ebyrnans, an kehevelyans dew-poynt yw salgh; whila pre-tuedhow, nyns yw hepken kyns/wosa.
- **Kehevely hepken war kovariants gwelys yn PSM.** Dewisyans anwelys, kepar ha hwans an kevrennoryon, a yll gam-ewnhe an arvysans kyn fo kovariants gwelys kehevelys yn ta.
- **Gweles variabyl ledya yn RDD.** Mar hyll tus tuedh aga skor dhe godha nes aberth an kut dewisek, an diskontynuita na wra ynnyn an effeyth kawsek hwath.

## Fentynyow

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
