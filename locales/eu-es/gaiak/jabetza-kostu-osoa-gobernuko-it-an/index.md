# Jabetza-kostu osoa gobernuko IT-an (TCO)

Jabetza-kostu osoa sistema baten bizi-ziklo osoko kostua da (eskuraketa gehi hura martxan edukitzeko urte bakoitza), data komun batera deskontatuta. Gobernuko IT-an, aurreikuspen-akats fidagarriena hornitzaileak edo aukerak eskuraketa-prezioan bakarrik alderatzea da, eragiketek eta mantentzeak, normalean, bizitza osoko fakturaren erdia eta bost bostenen artean hartzen dutenean.

## Zergatik den garrantzitsua

HM Treasury-ren Green Book-ak eskatzen du Bost Kasuen Ereduko edozein negozio-kasuren kasu finantzarioak bizitza osoko kostuak estaltzea, ez kapital-gastua bakarrik; alta, National Audit Office-k behin eta berriz aurkitu du sailek IT inbertsioak onartzen dituztela funtzionamendu-kostuen aurreikuspen osatugabe edo optimista baten aldean, sistema martxan dagoenean eta kapital-aurrekontuaren lerroa itxi denean benetako funtzionamendu-kostua aurkitzeko soilik. Government Digital Service-ren eta Central Digital and Data Office-ren Technology Code of Practice-ak (<https://www.gov.uk/guidance/the-technology-code-of-practice>) sailak hodeirantz eta hosting komodititatera bultzatzen ditu, neurri batean etengabeko kostua ikusgai eta alderagarri egiten duelako, onartzean erakargarriki baxua dirudien eta hiru urte geroago garesti okerra den erosketa-kapitaleko zifra bakar baten barruan lurperatu beharrean.

## Matematika

```
TCO = Eskuraketa-kostua + Σ(t=1..N) Urteko funtzionamendu-kostua_t / (1+r)^t
      − hondar-balioa (deskontatua)

r = HM Treasury-ren Green Book-aren gizarte-deskontu tasa estandarra, % 3,5/urte
    (30 urtetik gorako horizonteetarako tasa beheranzko egutegia)

Funtzionamendu-kostuaren osagaiak: hosting/lizentziak, laguntza eta mantentzea,
segurtasun-adabakiak eta betetzea, langileen denbora, berritze/migrazio planifikatua
```

Ikus [gizarte-deskontu tasa](../gizarte-deskontu-tasa/) deskontu-faktoreak zergatik axola duen sistemaren ohiko 5-10 urteko bizitzan, eta [eraiki vs. erosi gobernuan](../eraiki-ala-erosi-gobernuan/) TCOk eraiki/erosi erabaki bat nola elikatzen duen ikusteko.

## Adibide landua

Sail batek bi kasu-kudeaketa sistema alderatzen ditu 5 urteko horizontean, Green Book-aren % 3,5eko deskontu-tasarekin.

```
A sistema: kapex £3.500.000, opex £250.000/urte
B sistema: kapex £1.800.000 (merkeagoa dirudi), opex £650.000/urte
           (hornitzailearen laguntza eta integrazio-zama handiagoak)

Kapexean bakarrik oinarritutako alderaketa inozoa: B irabazten du, £1,8M < £3,5M.

Deskontu-faktoreen batura, 5 urte % 3,5ean: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = £4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = £4.734.750
```

TCOk erabaki inozoa irauli egiten du: B sistema apur bat garestiagoa da bost urtetan, funtzionamendu-kostua deskontatu eta batuta, bere opex-aren zatia bizitza osoko kostuaren % 62 baita (2.934.750 / 4.734.750), A sistemarenaren % 24ren aldean: "mantentzea da fakturaren gehiengoa" aurkikuntzaren adibide zehatza, etiketa-prezioak alderatuta erabat ezkutatua.

## Software ingeniaritzarekin lotura

TCO da [eraiki vs. erosi](../eraiki-ala-erosi-gobernuan/) erabaki bakoitza eta [zor teknikoaren](../zor-teknikoa-balio-publikoaren-higadura-gisa/) amortizazio-kasu bakoitza diziplinatu behar dituen zenbakia, zorraren interesa eta atzeratutako mantentzea biak deskontatutako guztizko berean egotea dagokien funtzionamendu-kostuko lerroak baitira, inork jarraitu duen ala ez. Plataforma edo hornitzaile bat aukeratzea proposatzen duten ingeniariek TCO taula osoa aurkeztu beharko lukete, ez erosketa-prezioa, erosketa-prezioa hain zuzen Green Book-aren kasu finantzarioak sailek bakarrik fidatzea eragozteko diseinatu zuen zenbakia delako. TCO [diruaren truke balioaren](../diruaren-truke-balioa/) judizioen izendatzaile zintzoa ere bada: VFMk onura kostuarekin alderatzen du, eta gutxiesten den kostu-lerro batek negozio-kasuko VFM ratio guztiak puztu egiten ditu.

## Tranpak

- **Kapexean bakarrik oinarritutako alderaketa**: erosketa-akatsik ohikoena: hornitzaileen prezio-zerrendak alderatzea aukera bakoitzerako funtzionamendu-kostuaren aurreikuspen parekaturik gabe.
- **Irteera- eta migrazio-kostuak baztertzea**: kontratuaren amaierako datuen erauzketa, birplataformizazioa eta hornitzaileari lotuta geratzearen zigorrak TCOko benetako lerroak dira, jatorrizko negozio-kasuan gutxitan agertzen direnak.
- **Segurtasun- eta betetze-kostua baztertzea**: adabaki-erritmoa, akreditazioaren berritzea eta auditoretza-kostua sistemaren adinarekin eta konplexutasunarekin igotzen dira (ikus [sektore publikoko zibersegurtasunaren balioa](../sektore-publikoko-ziberseguritatearen-balioa/)), eta ohikoki opex aurreikuspenetik kanpo uzten dira.
- **Kostu-profil desberdineko aukeren deskontatu gabeko alderaketa**: kapex-handiko aukera bat opex-handiko batekin deskontatu gabe alderatzeak sistematikoki mesede egiten dio kostu gehiago geroko urteetara atzeratzen duen aukerari.

## Iturriak

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
