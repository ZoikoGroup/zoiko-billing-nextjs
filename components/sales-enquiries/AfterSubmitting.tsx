import { Section, SectionHeading } from "./shared";

type Row = { term: string; detail: React.ReactNode };

const MAY: Row[] = [
  {
    term: "Confirm receipt",
    detail: (
      <>
        Where the backend confirms it —{" "}
        <b className="font-bold">not a promise of a reply</b>
      </>
    ),
  },
  {
    term: "Ask for context",
    detail: "Minimal additional detail through an approved channel",
  },
  {
    term: "Route your enquiry",
    detail: "To the specialist who can actually answer it",
  },
  {
    term: "Point you at published facts",
    detail: "Often the fastest answer, and it was public all along",
  },
  {
    term: "Open a controlled workflow",
    detail: (
      <>
        For evidence access or document exchange,{" "}
        <b className="font-bold">if the process reaches that stage</b>
      </>
    ),
  },
];

const WILL_NOT: Row[] = [
  {
    term: "Promise a response time",
    detail: (
      <>
        <b className="font-bold">None is published</b>, on this page or in a
        confirmation
      </>
    ),
  },
  {
    term: "Quote a price here",
    detail: "Pricing authority owns price; a form does not produce a quote",
  },
  {
    term: "Ask for credentials",
    detail: (
      <b className="font-bold">
        Never, at any stage, through any commercial route
      </b>
    ),
  },
  {
    term: "Accept an attachment",
    detail: "Uploads stay disabled without an approved data contract",
  },
  {
    term: "Bundle marketing consent",
    detail: "Consent is optional, separate and off by default",
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

export default function AfterSubmitting() {
  return (
    <Section>
      <SectionHeading
        eyebrow="After submitting"
        title="What happens, and what will not."
        intro="Five things the process may do, five it will not."
      />

      <div className="flex w-full flex-col items-stretch gap-5 pt-5 lg:flex-row">
        <Card caption="The process may." rows={MAY} />
        <Card caption="The process will not." rows={WILL_NOT} />
      </div>
    </Section>
  );
}
