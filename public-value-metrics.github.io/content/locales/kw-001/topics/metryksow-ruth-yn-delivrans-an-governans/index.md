# Metryksow Ruth yn Delivrans an Governans

Metryksow ruth — Lagh Little, ievyow ober-yn-kerdh (WIP), ha effeythieth ruth — a dhiskwedh fatell uskis a vynn ober movya dres system gans gallosogeth kyng. Bord sprint yw unn system a'n par ma; rew-gortos clammow budhekow, rol arghowsow skemm, po bagas ober kesgonys a visa yw an keth matematik yn dyllas dyffrans.

## Perag y talvos

Kesgonyow an governans yw systemys gortos, hag a obeya lagh gortos kyn na vo kenyver den ow-musura. Termynnow dyghtyans statutek a wra hemma eglur: yn dan an gwrys Skemm Tre ha Pow, an moyha a arghowsow skemm byghan a'n jy kana dyghtyans statutek a 8 seythun, ha'n re bras 13 seythun — ambos termyn kylgh gwrys yn y bleythyth y honan yn lagh. Bagas ober kesgonyow asylum an Home Office, hwithrys menough gans an National Audit Office ha'n Home Affairs Select Committee, yw kas dokumentys yn ta a system poblek mayth eth ober-yn-kerdh war-nans ruth moy es an throughput rag termyn hir, ow-konduk termynyow kylgh pell dres pub ewnder statutek po servis. Metryksow ruth a ri dhe ynjynnoryon ha rewloryon kesgonyow keth geryow kevradhek, nivelyes, rag an fordh fyllel ma, yn le dh'y asa avel "kas bagas-gortos" kwalitek.

## An matematik

```
Lagh Little:  WIP = Throughput × Termyn Kylgh
          →   Termyn Kylgh = WIP / Throughput

Effeythieth ruth = termyn gweythresek (tokyans) / hollek termyn kylgh   (Vacanti)

Effeyth ievya WIP: rag throughput sefys, hanterhe WIP a hanterha
an termyn kylgh kresek (Lagh Little ow-dasordenys) — an lever
kavadow heb ynkressya nivel dhe wreworyon.
```

Mir [metryksow DORA rag talvos poblek](../metryksow-dora-rag-talvos-poblek/) rag an keth matematik devnydhys dhe bibyer displegya software yn le a gesgonyow.

## Ensampel oberys

**Department skemm awtorita leel**: 400 arghowsow ygor orth pub termyn (WIP), an bagas a dhyghtya 50 arghows/seythun (throughput).

```
Termyn kylgh = WIP / Throughput = 400 / 50 = 8 seythun
```

Hemma a dheu yn tien orth kana statutek 8 seythun rag arghowsow byghan — heb ankevrenn, hen yw, pub chanj yn govynn ow-tos po termyn gorthyp konsultys a wra dyghtyansow tremena an termyn lagh.

**Effeythieth ruth**: a'n 8 seythun ma (56 dydh kalendar), arghows a'n jy yn kresek nes dhe 6 our a dermyn gonys gwir kesgonyer.

```
Effeythieth ruth = 6 our / (56 dydh × 8 our oberi/dydh)
                 = 6 / 448 ≈ 1.3%
```

Mesur Vacanti rag bagasow software a wra effeythieth ruth kebmyn 15–20%; kesgonyow governans, gans lies treusvyl konsultys statutek ha termynnow kuntelles poblek, a hwarva menough unn urdh vras isella. An 98.7% a dermyn "gortos" yw le may kwra an eth seythun mos yn gwir — nyns yw yn nerth an kesgonyer.

**Ebyrnans ievya WIP**: kyngya arghowsow ygor dhe 15 dhe bub kesgonyer yn le a 25 heb ievyans (ow-sevel throughput) a dreyl WIP dhyworth 400 dhe nes dhe 240 dres bagas a 16 den:

```
Termyn kylgh nowydh = 240 / 50 = 4.8 seythun
```

Ogas hanterhe a dermyn kylgh dhyworth chanj polici, nyns yw ynkressya fowtyans — an keth lever a dynn bagasow delivrans yn stil DORA pan gyngant WIP sprint.

## Kevrenn gans ynjynnerieth medhelweyth

Metryksow ruth yw an yeth kevrennys ynter bord Kanban bagas delivrans ha leur kesgonyow may fo an software gwruthys rag: rew kesgonyer ha rew pull-request yw dew y'n keth Lagh Little, hag aga dew a dhorr aga hanasow termyn kylgh y'n keth fordh — re vras a WIP orth throughput. Hemma yw poesek yn ewn rag [kost an dhelay yn programmow poblek](../kost-daladh-yn-towlennow-poblek/): termyn kylgh × CoD yw an puntow ow-sedha y'n rew orth pub prys, ha rag [savonegow servis ha metryksow treuslans](../standardys-servys-ha-metrikow-trensaksyon/), le may fo kana tro-dhe-dro dyllys ambos termyn kylgh na yll hepken metryksow ruth y dhiagnostya pan vo kellys. Software system kesgonyow a dal dhiskwedh WIP ha termyn kylgh avel metryksow oberyansek kynsa-klass, nyns yw dh'aga gwytha aberth system rewl-kas na wra den govyn orto.

## Trapow

- **Ychnydhya ievyow WIP heb sevel an gwir bottleneck**: mar yw an strusyans termyn gorthyp konsultys statutek a-ves, kyngya WIP kesgonyer a symud an rew yn ugh yn le dh'y fyllya.
- **Ewnhe effeythieth ruth avel kana dhe gamya**: hastya an 1.3% a dermyn gweythresek nyns a dreyl an termyn kylgh pell; an lever yw kefys kebmyn y'n stadys gortos, hen yw dasdyssynnans argerdh, nyns yw uskisder kesgonyer.
- **Ankevi chanj**: Lagh Little a dhyskrifa kresegow; kesgonyow gans chanj govynn uhel a res bos gans kapasita ankevrenn, nyns yw ievya WIP strusys hepken, po termynnow statutek a vydh kellys war an lost chanjadow hag an kresek ow-gwellha.
- **Musura WIP yn tebel**: kas "ygor" y'n system rekord mes yn gwir ow-sevel ow-kortos tressa parti yw hwath WIP; y dhelles a gollor an nivyow heb chanjya an gwir a wel an sitisen.

## Fentynyow

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
