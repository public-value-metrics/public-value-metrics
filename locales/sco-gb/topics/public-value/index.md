# Public value

Public value is the worth that a government or social-sector organization creates for citizens
collectively — nae juist the ootputs it produces or the siller it spends, but whether society is
better aff because the organization exists and acted as it did. Mark Moore's 1995 "strategic
triangle" is the staundard test: a public initiative is justified only whan it is *legitimate and
supportit*, *substantively valuable*, and *operationally deliverable*, aw three at ance.

## Why it maitters

Private-sector value is relatively easy tae price: revenue minus cost, adjudicated by customers wha
can wauk awa. Public value has nae equivalent market signal. A prison service, a tax authority, and
a bairn-protection team aw produce things citizens cannae simply decline tae buy, and the "customer"
(the taxpayer, the offender, the bairn) is aften nae the same person as the political principal wha
authorizes the budget. Moore's *Creating Public Value: Strategic Management in Government* (Harvard
University Press, 1995) supplies the missin discipline: a manager sud be able tae state (1) whit
public value their initiative creates, (2) whaur their legitimacy and fundin tae pursue it comes
frae — a meinister, a cooncil, a mandate, a grant — and (3) whether their organization can actually
deliver it wi the fowk, technology, and processes at haund. A programme that scores weel on only
ane or twa legs o the triangle isnae yet justified, hoo weel-meanin it is.

This maitters practically because maist public-sector saftware failures arenae technology failures.
A system can be technically excellent and operationally deliverable and still fail because naebody
in the legitimizin environment — meinisters, oversight committees, the public — actually wantit the
thing it optimizes for. The Universal Credit digital service and the NHS National Programme for IT
are baith citit in UK public-administration literature as cases whaur operational and legitimacy
legs o the triangle were oot o step wi the mission leg.

## The maths

Public value is a framework, nae a formula, but it structures itherwise-vague investment cases intae
three testable questions:

```
Strategic triangle test — proceed only if all three hold:

1. Legitimacy and support: Who has authorized this, and does the authorizing
   environment (legislature, minister, council, board, public opinion) still
   back it as resources are committed?

2. Public value: What specific, describable good does this produce for
   citizens or society — safety, health, opportunity, trust, fairness —
   and for whom?

3. Operational capacity: Can the organization actually deliver it with
   current staff, technology, partners, and legal authority — or a
   credible plan to acquire them?
```

A weak initiative typically fails at least ane leg: technically deliverable but wi nae mandate
(a data-sharin pilot naebody signed aff); popular but undeliverable (a promised digital service wi
nae ingineerin capacity); or authorized and deliverable but value-tuim (a dashboard naebody uises).

## Wrocht example

**Local authority**: a cooncil digital team proposes an AI triage tool for housin benefit claims.

- *Legitimacy*: the cooncil's cabinet has approved a digital-first strategy, but the elected members
  responsible for social security hae nae signed aff automated decision-makin specifically — a gap,
  nae a green licht.
- *Public value*: faster processin (claimit benefit: 10 days tae 2 days) is real value only if
  claimants arenae wrangly refused; the value claim maun include accuracy, nae juist speed.
- *Operational capacity*: the cooncil has ae data scientist and nae model-monitorin process, sae the
  claimit 2-day turnaround isnae currently deliverable at the stated error rate.

Twa o three legs fail. Moore's framework says: dinnae proceed as scoped — first secure explicit
authorization for automated decisions and big monitorin capacity, or the "public value" claimit
in the business case is fictional.

**Central government**: a tax authority's online filin service has strong legitimacy (statutory
mandate) and strong operational capacity (an existin team ships reliably) but weak public value if
uptake is low because the digitally excludit — see [digital inclusion](../digital-inclusion/) —
are pushed intae a channel they cannae uise. The triangle exposes whit a delivery-only dashboard wad
hide.

## Link tae saftware ingineerin

Public value is the umbrella concept this hale repository sits unner: [value for siller](../value-for-siller/)
gies the economy/efficiency/effectiveness test for whether resources were weel uised;
[opportunity cost in public spendin](../opportunity-cost-in-public-spendin/) prices whit else the
siller could hae daen; and [additionality and deidweicht](../additionality-an-deadweight/),
[displacement and attribution](../displacement-an-attribution/), and
[coonterfactual analysis](../counterfactual-analysis/) taegither test whether the claimit value is
real raither nor assumed. For ingineers, the strategic triangle is a uisefu pre-mortem for ony
public-sector product decision:

- Afore scopin a feature, ask wha authorized it and whether that authorization still haulds — a
  feature biggit for a meinister wha has since muivit on micht hae quietly lost its legitimacy leg.
- Treat "can we big it" and "sud we big it" as genuinely separate questions; ingineerin
  capacity answers only the third leg o the triangle.
- Product requirements documents for public services sud state the public value claim explicitly,
  nae juist the user story, because user value and public value arenae aye the same thing (see
  [ootcomes vs ootputs](../ootcomes-vs-ootputs/)).

## Pitfaws

- **Treatin operational capacity as sufficient justification.** "We can big it" answers only ae
  leg o the triangle; teams wi strong delivery capability routinely ship things naebody authorized
  wantin and that create nae describable public guid.
- **Mixin up legitimacy wi legality.** A programme can be lawfu and still lack the political and
  public support needit tae sustain it through a difficult delivery phase; legal cover isnae the same
  as a mandate.
- **Assumin public value is whitever the commissionin department says it is.** Moore's model
  requires the value claim tae be testable agin citizens' actual interests, nae merely asserted by
  the funder — itherwise the framework collapses intae self-certification.

## Sources

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
