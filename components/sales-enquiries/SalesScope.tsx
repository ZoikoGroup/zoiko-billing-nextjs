import Link from "next/link";

import { Section, SectionHeading, linkClass } from "./shared";

type Row = { term: string; detail: React.ReactNode };

const CAN: Row[] = [
  {
    term: "Navigate the options",
    detail: "Understand which plan and deployment mode fit your operation",
  },
  {
    term: "Reach the right specialist",
    detail:
      "Route technical, security or implementation questions to their owners",
  },
  {
    term: "Understand availability",
    detail: "What applies in your jurisdiction, from the commercial source",
  },
  {
    term: "Plan an evaluation",
    detail: "Sequence the questions your own process needs answered",
  },
  {
    term: "Access controlled evidence",
    detail: "Route a request through Trust Center's approved process",
  },
  {
    term: "Clarify a published fact",
    detail: "Explain something on a public page you found ambiguous",
  },
];

const CANNOT: Row[] = [
  {
    term: "Price or discount",
    detail: (
      <>
        <b className="font-bold">Pricing authority owns price.</b> No figure or
        discount originates here
      </>
    ),
  },
  {
    term: "Contract terms",
    detail: (
      <>
        Legal and the agreement —{" "}
        <b className="font-bold">not a sales page or a call</b>
      </>
    ),
  },
  {
    term: "Capability",
    detail: (
      <>
        <b className="font-bold">
          Documentation owns what the product does
        </b>
        ; a conversation cannot extend it
      </>
    ),
  },
  {
    term: "Implementation timeline",
    detail: (
      <>
        <b className="font-bold">No duration is published or promised.</b>{" "}
        Readiness is assessed per organization
      </>
    ),
  },
  {
    term: "Support entitlement",
    detail: (
      <>
        <Link href="/support-policy" className={linkClass}>
          Support Policy
        </Link>{" "}
        and your agreement govern
      </>
    ),
  },
  {
    term: "Assurance claims",
    detail: (
      <>
        Trust Center, with scope attached.{" "}
        <b className="font-bold">
          No certification is asserted in a conversation
        </b>
      </>
    ),
  },
];

function Card({ caption, rows }: { caption: string; rows: Row[] }) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)] lg:flex-1">
      <div className="border-b border-[#E5EAF2] bg-[#FAFBFE] px-5 py-4">
        <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">{caption}</p>
      </div>

      {rows.map(({ term, detail }, i) => (
        <div
          key={term}
          className={`flex flex-col gap-1 px-4 py-3.5 xl:flex-row xl:gap-0 ${
            i < rows.length - 1 ? "border-b border-[#EDF1F7]" : ""
          }`}
        >
          <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A] xl:w-44 xl:shrink-0 xl:pr-4">
            {term}
          </p>
          <p className="!mb-0 min-w-0 text-sm !leading-5 !text-[#5B6B85]">
            {detail}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function SalesScope() {
  return (
    <Section id="sales-scope">
      <SectionHeading
        eyebrow="What a sales conversation can and cannot do"
        title="Six things it helps with, six it does not settle."
        intro="Being clear about the second column is what keeps a conversation from producing expectations nobody can honor."
      />

      <div className="flex w-full flex-col items-stretch gap-5 pt-5 lg:flex-row">
        <Card caption="Sales can help you." rows={CAN} />
        <Card caption="A conversation does not settle." rows={CANNOT} />
      </div>
    </Section>
  );
}
