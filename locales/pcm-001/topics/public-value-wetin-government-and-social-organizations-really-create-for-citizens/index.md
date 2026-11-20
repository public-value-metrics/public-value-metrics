# Public Value: Wetin Government and Social Organizations Really Create for Citizens

Public value na di worth wey government or social-sector organization create for citizens together — no be only di outputs wey e produce or di money wey e spend, but whether society better off because di organization exist and act di way e act. Mark Moore 1995 "strategic triangle" na di standard test: public initiative only justified when e *legitimate and supported*, *substantively valuable*, and *operationally deliverable*, all three at once.

## Wetin make am matter

Private-sector value relatively easy to price: revenue minus cost, wey customers wey fit walk away dey adjudicate. Public value no get equivalent market signal. Prison service, tax authority, and child-protection team all dey produce things wey citizens no fit just decline to buy, and di "customer" (di taxpayer, di offender, di child) often no be di same person as di political principal wey authorize di budget. Moore *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) supply di missing discipline: manager suppose fit state (1) wetin public value im initiative create, (2) where im legitimacy and funding to pursue am come from — minister, council, mandate, grant — and (3) whether im organization fit really deliver am with di people, technology, and processes wey dey hand. Programme wey score well on only one or two legs of di triangle never justified, no matter how good di intention be.

Dis matter for practice because most public-sector software failures no be technology failures. System fit be technically excellent and operationally deliverable and still fail because nobody for di legitimizing environment — ministers, oversight committees, di public — really want di thing wey e optimize for. Dem cite Universal Credit digital service and NHS National Programme for IT for UK public-administration literature as cases where di operational and legitimacy legs of di triangle no match di mission leg.

## Di maths

Public value na framework, no be formula, but e dey structure investment cases wey for otherwise vague into three questions wey you fit test:

```
Strategic triangle test — proceed only if all three hold:

1. Legitimacy and support: Who authorize dis, and di authorizing
   environment (legislature, minister, council, board, public opinion) still
   dey back am as dem commit resources?

2. Public value: Which specific good wey you fit describe dis dey produce
   for citizens or society — safety, health, opportunity, trust, fairness —
   and for who?

3. Operational capacity: Di organization fit really deliver am with
   current staff, technology, partners, and legal authority — or
   credible plan to get dem?
```

Weak initiative usually fail at least one leg: technically deliverable but no mandate (data-sharing pilot wey nobody sign off); popular but undeliverable (digital service wey dem promise but no engineering capacity); or authorized and deliverable but empty of value (dashboard wey nobody dey use).

## Example wey dem work out

**Local authority**: council digital team propose AI triage tool for housing benefit claims.

- *Legitimacy*: di council cabinet don approve digital-first strategy, but di elected members wey responsible for social security no sign off automated decision-making specifically — na gap, no be green light.
- *Public value*: faster processing (benefit wey dem claim: 10 days to 2 days) na real value only if dem no wrongly refuse claimants; di value claim must include accuracy, no be only speed.
- *Operational capacity*: di council get one data scientist and no model-monitoring process, so di 2-day turnaround wey dem claim no fit deliver now at di stated error rate.

Two of three legs fail. Moore framework talk say: no proceed as dem scope am — first secure explicit authorization for automated decisions and build monitoring capacity, or di "public value" wey dem claim for di business case na fiction.

**Central government**: tax authority online filing service get strong legitimacy (statutory mandate) and strong operational capacity (existing team dey ship reliably) but weak public value if uptake low because dem push di digitally excluded — see [digital inclusion](../digital-inclusion-make-sure-say-digital-services-no-leave-anybody-behind/) — into channel wey dem no fit use. Di triangle expose wetin delivery-only dashboard go hide.

## How e connect to software engineering

Public value na di umbrella concept wey dis whole repository sit under: [value for money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) give di economy/efficiency/effectiveness test for whether dem use resources well; [opportunity cost in public spending](../opportunity-cost-for-public-spending-wetin-you-lose-when-you-choose-one-option/) price wetin else di money fit do; and [additionality and deadweight](../additionality-and-deadweight-wetin-programme-really-cause/), [displacement and attribution](../displacement-and-attribution-how-to-know-who-take-wetin-and-who-fit-claim-credit/), and [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) together test whether di value wey dem claim na real instead of assumed. For engineers, di strategic triangle na useful pre-mortem for any public-sector product decision:

- Before you scope feature, ask who authorize am and whether dat authorization still hold — feature wey dem build for minister wey don move on fit don quietly lose im legitimacy leg.
- Treat "we fit build am" and "we suppose build am" as two separate questions; engineering capacity only answer di third leg of di triangle.
- Product requirements documents for public services suppose state di public value claim clearly, no be only di user story, because user value and public value no always be di same thing (see [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/)).

## Wahala dem wey you suppose avoid

- **To treat operational capacity as sufficient justification.** "We fit build am" only answer one leg of di triangle; teams wey get strong delivery capability dey often ship things wey nobody authorize and wey no create any public good wey you fit describe.
- **To confuse legitimacy with legality.** Programme fit be lawful and still lack di political and public support wey e need to survive difficult delivery phase; legal cover no be di same as mandate.
- **To assume say public value na whatever di commissioning department talk say e be.** Moore model require make dem fit test di value claim against citizens actual interests, no be only di funder go assert am — otherwise di framework collapse into self-certification.

## Sources

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
