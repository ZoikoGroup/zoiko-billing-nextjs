import Link from "next/link";

import { Section, SectionHeading, linkClass } from "./shared";

type Row = { term: string; detail: React.ReactNode };

const MAY: Row[] = [
  {
    term: "Confirm receipt",
    detail: (
      <>
        Where the backend confirms it —{" "}
        <b className="font-bold">not a review commitment</b>
      </>
    ),
  },
  {
    term: "Ask for clarification",
    detail: "Targeted technical questions, through an approved channel",
  },
  {
    term: "Point you at documentation",
    detail: "Often the answer, and it was public already",
  },
  {
    term: "Accept it technically",
    detail: "One decision by one authority, with the ladder above unaffected",
  },
  {
    term: "Decline to proceed",
    detail: "In source-approved wording, without an invented reason",
  },
];

const WILL_NOT: Row[] = [
  {
    term: "Publish or list you",
    detail: (
      <>
        <b className="font-bold">Publication is separate.</b> See{" "}
        <Link href="/technology-partners" className={linkClass}>
          Technology Partners
        </Link>
      </>
    ),
  },
  {
    term: "Create a partnership",
    detail: (
      <>        <Link href="/become-a-partner" className={linkClass}>
          Become a Partner
        </Link>{" "}
        is the relationship route
      </>
    ),
  },
  {
    term: "Grant portal access",
    detail: "Its own determination, implied by nothing earlier",
  },
  {
    term: "Certify anything",
    detail: (
      <b className="font-bold">
        Checks have a scope; they are not certification
      </b>
    ),
  },
  {
    term: "Promise a review time",
    detail: (
      <>
        <b className="font-bold">No timeline is published</b>, here or in a
        confirmation
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
          <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A] xl:w-48 xl:shrink-0 xl:pr-4">
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

export default function AfterSubmitting() {
  return (
    <Section>
      <SectionHeading
        eyebrow="After submitting"
        title="What happens next, and what does not follow."
        intro="Five things the review may do, five it will not."
      />

      <div className="flex w-full flex-col items-stretch gap-5 pt-5 lg:flex-row">
        <Card caption="The review may." rows={MAY} />
        <Card caption="Submission will not." rows={WILL_NOT} />
      </div>
    </Section>
  );
}
