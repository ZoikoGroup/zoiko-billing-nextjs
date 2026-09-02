import { Card, Section, SectionHeading, heading } from "./shared";

const POINTS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Record to document",
    body: "An invoice is designed to carry its customer record's terms and identity rather than a copy taken at issuance.",
  },
  {
    title: "Document to receivable",
    body: "An issued document becomes a tracked receivable with its aging and ownership in the same record.",
  },
  {
    title: "Payment to allocation",
    body: (
      <>
        A payment records <b className="font-bold">what it settled</b>, so partial
        and multi-invoice settlement remain explainable later.
      </>
    ),
  },
  {
    title: "Allocation to balance",
    body: "An outstanding balance is designed to be traceable to the documents and allocations behind it.",
  },
  {
    title: "Correction to trail",
    body: "A correction is designed as a recorded change rather than an overwrite — the prior value stays visible.",
  },
  {
    title: "Operation to report",
    body: "Reporting is designed to read the operational record, so a figure can be followed back to what produced it.",
  },
];

export default function LifecycleContinuity() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Lifecycle continuity"
        title="Where continuity is designed to matter."
        intro="Six points in the billing lifecycle where a break between systems typically creates reconciliation work."
      />

      <div className="grid w-full grid-cols-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map(({ title, body }) => (
          <Card key={title} className="flex flex-col gap-1.5">
            <h3
              className={`${heading} !mb-0 !font-bold !text-sm !leading-6 !text-[#0F172A]`}
            >
              {title}
            </h3>
            <p className="!mb-0 text-xs !leading-5 !text-[#5D7192]">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
