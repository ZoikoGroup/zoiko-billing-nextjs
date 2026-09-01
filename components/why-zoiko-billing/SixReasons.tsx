import { Card, SectionHeading, heading } from "./shared";

type Reason = { n: string; title: string; body: React.ReactNode };

const REASONS: Reason[] = [
  {
    n: "01",
    title: "Continuity across the billing lifecycle",
    body: (
      <>
        Customer records, documents, receivables, payments and balances are{" "}
        <b className="font-bold">designed around a single operational record</b>{" "}
        rather than reconciled between separate systems after the fact. The
        invoice, the payment that settled it and the balance that resulted stay
        connected.
      </>
    ),
  },
  {
    n: "02",
    title: "Explicit state",
    body: (
      <>
        Billing states are{" "}
        <b className="font-bold">modeled distinctly rather than collapsed</b>.
        Draft is not issued, issued is not sent, unallocated is not unpaid, and
        disputed is not overdue — because a system that merges them forces a
        finance team to reconstruct the difference from memory.
      </>
    ),
  },
  {
    n: "03",
    title: "Accountable control",
    body: (
      <>
        Decisions that change a financial record are{" "}
        <b className="font-bold">designed to be attributable</b> — who approved,
        what changed and when. Corrections carry a trail rather than overwriting,
        so the record remains explainable to an auditor or a customer.
      </>
    ),
  },
  {
    n: "04",
    title: "Exception visibility",
    body: (
      <>
        Unallocated payments, partial settlements, unknown outcomes and failed
        deliveries are{" "}
        <b className="font-bold">treated as first-class states</b> rather than
        hidden behind a summary. The exceptions are where billing work actually
        lives, so they are not the hard thing to find.
      </>
    ),
  },
  {
    n: "05",
    title: "Governed integration boundaries",
    body: (
      <>
        Where Zoiko Billing ends and a connected system begins is{" "}
        <b className="font-bold">stated rather than blurred</b>. A provider&apos;s
        behavior is not presented as ours, and reconciliation across the boundary
        is designed as a visible process rather than an assumption.
      </>
    ),
  },
  {
    n: "06",
    title: "Evidence and explicit boundaries",
    body: (
      <>
        Public claims carry their scope, and the product routes determinations it
        should not make — accounting treatment, tax position, legal obligation —
        to qualified professionals instead of encoding a guess.
      </>
    ),
  },
];

export default function SixReasons() {
  return (
    <section
      id="why-in-six-reasons"
      className="w-full bg-[#F7F8FA] px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 lg:px-7">
        <SectionHeading
          eyebrow="Why in six reasons"
          title={
            <>
              Six design principles, each labeled with its claim class.
            </>
          }
          intro={
            <>
              Every reason is an{" "}
              <b className="font-bold">operating-model principle</b> — a
              statement about how the product is organized, not about a result it
              guarantees. The label on each card says which class it belongs to,
              which determines what language it is allowed to use.
            </>
          }
        />

        {/* Numbering is real here: the six reasons are referenced by number. */}
        <ol className="m-0 grid w-full list-none grid-cols-1 gap-5 p-0 pt-5 lg:grid-cols-2">
          {REASONS.map(({ n, title, body }) => (
            <li key={n} className="contents">
              <Card className="flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`${heading} shrink-0 text-base !leading-6 !text-[#1F6FEB]`}
                  >
                    {n}
                  </span>
                  <h3
                    className={`${heading} !mb-0 min-w-0 !font-bold !text-base !leading-5 !text-[#0F172A]`}
                  >
                    {title}
                  </h3>
                </div>
                <p className="!mb-0 text-xs !leading-5 !text-[#5D7192] sm:pl-[35px]">
                  {body}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
