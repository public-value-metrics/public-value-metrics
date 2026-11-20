# ຕົ້ນທຶນຕໍ່ທຸລະກຳ (Cost per Transaction)

ຕົ້ນທຶນຕໍ່ທຸລະກຳ (cost per transaction) ແມ່ນຕົວຊີ້ວັດເສດຖະສາດຕໍ່ໜ່ວຍຫຼັກຂອງບໍລິການດິຈິຕອນຂອງລັດຖະບານ: ຕົ້ນທຶນທັງໝົດໃນການສົ່ງມອບຊ່ອງທາງໜຶ່ງ ຫານດ້ວຍຈຳນວນທຸລະກຳທີ່ສຳເລັດຜ່ານຊ່ອງທາງນັ້ນ. ມັນເປັນຕົວເລກເດັ່ນໃນ GOV.UK Performance Platform ເກົ່າ, ແລະ ເປັນຕົວເລກທີ່ສະໜອງທຶນໃຫ້ "digital by default" ໜຶ່ງທົດສະວັດ — ຊຶ່ງເປັນເຫດຜົນທີ່ມັນເປັນຕົວຊີ້ວັດທີ່ຖືກບິດເບືອນງ່າຍທີ່ສຸດນຳ.

## ເປັນຫຍັງຈຶ່ງສຳຄັນ

Digital Efficiency Report ປີ 2012 ຂອງ Cabinet Office ວາງການປຽບທຽບຕົ້ນທຶນຊ່ອງທາງໃນຮູບແບບທີ່ຕິດຕາ: ທຸລະກຳດິຈິຕອນມີຕົ້ນທຶນຖືກກວ່າທາງໂທລະສັບປະມານ 20 ເທົ່າ ແລະ ຖືກກວ່າການພົບໜ້າປະມານ 50 ເທົ່າ, ດ້ວຍຕົວເລກປະກອບຂອງລັດຖະບານທ້ອງຖິ່ນປະມານ £0.15 ຕໍ່ທຸລະກຳເວັບ ທຽບກັບ £2.83 ທາງໂທລະສັບ ແລະ £8.62 ພົບໜ້າ. ການປຽບທຽບດຽວນັ້ນກາຍເປັນຂໍ້ອ້າງສຳລັບການອອກແບບຄືນ 25 ບໍລິການຕົວຢ່າງທີ່ກ່າວໃນ Government Digital Strategy, ແລະ ສຳລັບທຸກກໍລະນີທຸລະກິດຂອງກົມທີ່ອ້າງການປະຢັດຈາກການຍ້າຍຊ່ອງທາງນັບແຕ່ນັ້ນ. ຕົວເລກນີ້ມີປະໂຫຍດແທ້ເປັນສັນຍານລຳດັບຄວາມໃຫຍ່, ແຕ່ອັດຕາສ່ວນຂຶ້ນກັບສິ່ງທີ່ນັບໃນແຕ່ລະຝ່າຍທັງໝົດ: ຕົ້ນທຶນຊ່ອງທາງໂທລະສັບທີ່ຍຸຕິທຳລວມພະນັກງານສູນໂທ, ສັນຍາໂທລະຄົມ, ການຝຶກອົບຮົມ ແລະ ສະຖານທີ່; ຕົ້ນທຶນດິຈິຕອນທີ່ຍຸຕິທຳລວມການໂຮສຕິງ, ເງິນເດືອນທີມຜະລິດຕະພັນຢ່າງຕໍ່ເນື່ອງ, ເວລາໂຕະຊ່ວຍເຫຼືອສຳລັບການເດີນທາງທີ່ລົ້ມເຫຼວ, ແລະ ຊ່ອງທາງດິຈິຕອນແບບມີຜູ້ຊ່ວຍທີ່ຂໍ້ 5 ຂອງ [ມາດຕະຖານການບໍລິການດິຈິຕອນ](../ມາດຕະຖານການບໍລິການດິຈິຕອນ/) ກຳນົດ. ຕັດສິ່ງເຫຼົ່ານີ້ອອກຈາກຝ່າຍດິຈິຕອນພໍສົມຄວນ ແລະ ບໍລິການໃດກໍເບິ່ງຖືກ.

## ຄະນິດສາດ

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## ຕົວຢ່າງການຄິດໄລ່

**ບໍລິການຕໍ່ອາຍຸພາສີຍານພາຫະນະ**: 4 ລ້ານທຸລະກຳ/ປີ.

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## ຄວາມເຊື່ອມໂຍງກັບວິສະວະກຳຊອບແວ

ຕົ້ນທຶນຕໍ່ທຸລະກຳແມ່ນບ່ອນທີ່ການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳກາຍເປັນຕົວເລກການເງິນ: ບໍລິການທີ່ຂະຫຍາຍອັດຕະໂນມັດໄດ້ຢ່າງສະອາດ ແລະ ຕ້ອງການການແຊກແຊງດ້ວຍມືໜ້ອຍ ຈະກົດຕົວເລກນີ້ລົງຕາມເວລາ; ບໍລິການທີ່ສ້າງປະລິມານຕັ໋ວຊ່ວຍເຫຼືອສູງຈາກສະຖານະຄວາມຜິດພາດທີ່ສັບສົນ ຈະຍົກມັນຂຶ້ນບໍ່ວ່າປະສິດທິພາບການໂຮສຕິງຈະເປັນແນວໃດ. ມັນເປັນຕົວຊີ້ວັດຄູ່ທີ່ເປັນທຳມະຊາດຂອງຂໍ້ 10 ໃນ [ມາດຕະຖານການບໍລິການດິຈິຕອນ](../ມາດຕະຖານການບໍລິການດິຈິຕອນ/) ("ກຳນົດວ່າຄວາມສຳເລັດເປັນແນວໃດ ແລະ ເຜີຍແຜ່ຂໍ້ມູນຜົນງານ") ແລະ ຂອງ [ມາດຕະຖານການບໍລິການ ແລະ ຕົວຊີ້ວັດທຸລະກຳ](../ມາດຕະຖານບໍລິການ-ແລະ-ຕົວຊີ້ວັດທຸລະກຳ/) ທີ່ກຳນົດຊຸດ KPI ເຕັມທີ່ຕົວເລກນີ້ຢູ່ພາຍໃນ. ມັນຍັງປ້ອນໂດຍກົງເຂົ້າການຄິດໄລ່ [ການປະຢັດຈາກການຍ້າຍຊ່ອງທາງ](../ການປະຢັດຈາກການຍ້າຍຊ່ອງທາງ/) ແລະ ຄວນຖືກທຽບກັບ [ຕົ້ນທຶນການເປັນເຈົ້າຂອງທັງໝົດຂອງ IT ໃນລັດຖະບານ](../ຕົ້ນທຶນການເປັນເຈົ້າຂອງທັງໝົດ-ໃນ-it-ຂອງລັດຖະບານ/) ເພື່ອບໍ່ໃຫ້ຄ່າໃຊ້ຈ່າຍເໜືອຂອງແພລດຟອມ ແລະ ບໍລິການຮ່ວມຖືກຕັດອອກຢ່າງງຽບໆ.

## ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍ

- **ຕົ້ນທຶນສ່ວນເພີ່ມທີ່ແຕ່ງເປັນຕົ້ນທຶນສະເລ່ຍ**: ອ້າງຕົ້ນທຶນໂຮສຕິງຢ່າງດຽວເມື່ອບໍລິການສ້າງແລ້ວ, ຕັດທີມຕໍ່ເນື່ອງທີ່ບຳລຸງຮັກສາ, ປັບປຸງ ແລະ ສະໜັບສະໜູນອອກ — ເບິ່ງຕົວຢ່າງການຄິດໄລ່ຂ້າງເທິງ.
- **ຍົກເວັ້ນຕົ້ນທຶນດິຈິຕອນແບບມີຜູ້ຊ່ວຍ**: ຊ່ອງທາງບໍ່ຖືກຕ້ອງຕາມ "digital by default", ແລະ ຕົ້ນທຶນທີ່ແທ້ຈິງຂອງມັນບໍ່ຖືກຈັບ, ຖ້າທາງສຳຮອງໂທລະສັບ/ເຈ້ຍທີ່ [ການເຂົ້າເຖິງດິຈິຕອນຢ່າງທົ່ວເຖິງ](../ການເຂົ້າເຖິງດິຈິຕອນຢ່າງທົ່ວເຖິງ/) ກຳນົດຖືກຄິດຕົ້ນທຶນແຍກ ຫຼື ຖືກລະເລີຍ.
- **ເມີນເສີຍ failure demand**: ທຸລະກຳທີ່ເລີ່ມດິຈິຕອນແລ້ວລົ້ມເຫຼວ ສ້າງການໂທ ຫຼື ແບບຟອມເຈ້ຍຢູ່ດີ ແມ່ນຕົ້ນທຶນຂອງຊ່ອງທາງດິຈິຕອນ, ບໍ່ແມ່ນຊ່ອງທາງທີ່ຮັບຄວາມລົ້ມເຫຼວນັ້ນ.
- **ປຽບທຽບທຸລະກຳທີ່ມີຄວາມຊັບຊ້ອນແຕກຕ່າງກັນທົ່ວຊ່ອງທາງ**: ໂທລະສັບຮັບມືກັບກໍລະນີຍາກຫຼາຍກວ່າຕາມສັດສ່ວນ (ຜູ້ເພິ່ງພາຫຼາຍຄົນ, ການແກ້ໄຂຄວາມຜິດພາດ, ຜູ້ຮ້ອງຂໍທີ່ມີຄວາມສ່ຽງ); ການປຽບທຽບຕົ້ນທຶນໂທລະສັບສະເລ່ຍກັບຕົ້ນທຶນດິຈິຕອນສະເລ່ຍ ເວົ້າເກີນຈິງກ່ຽວກັບອັດຕາສ່ວນ ເວັ້ນເສຍແຕ່ການປະສົມທຸລະກຳຈະຖືກຈັບຄູ່.

## ແຫຼ່ງອ້າງອີງ

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
