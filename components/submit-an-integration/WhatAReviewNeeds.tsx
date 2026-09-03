import { Card, Section, SectionHeading, heading } from "./shared";

const AREAS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Integration identity",
    body: (
      <>
        What the integration is, what it does, and which systems it connects.{" "}
        <b className="font-bold">No approved category is assumed</b> — the
        registry defines those.
      </>
    ),
  },
  {
    title: "Architecture summary",
    body: (
      <>
        The shape of the integration: direction of data flow, trigger model, and
        which API surfaces it uses.{" "}
        <b className="font-bold">Referenced from Developers, not restated.</b>
      </>
    ),
  },
  {
    title: "Data boundary",
    body: (
      <>
        Which data categories cross the boundary and where they go.{" "}
        <b className="font-bold">Categories, never actual records.</b>
      </>
    ),
  },
  {
    title: "Authentication approach",
    body: (
      <>
        Described by reference to the documented mechanism.{" "}
        <b className="font-bold">No credential value, ever</b> — the mechanism is
        public, the value is yours.
      </>
    ),
  },
  {
    title: "Error and retry handling",
    body: "How the integration behaves on failure, and whether an unknown outcome can produce a duplicate.",
  },
  {
    title: "Test evidence",
    body: (
      <>
        Redacted evidence that it works —{" "}
        <b className="font-bold">
          synthetic data, cropped screenshots, identifiers and tokens removed
        </b>
        .
      </>
    ),
  },
];

export default function WhatAReviewNeeds() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="What a review needs"
        title="Six areas, described rather than demonstrated."
        intro="Every one of these can be conveyed without a single live value — which is the point of the redaction rule."
      />

      <div className="grid w-full grid-cols-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map(({ title, body }) => (
          <Card key={title} className="flex flex-col gap-1.5">
            <h3
              className={`${heading} !mb-0 !font-bold !text-sm !leading-6 !text-[#0F172A]`}
            >
              {title}
            </h3>
            <p className="!mb-0 text-xs !leading-5 !text-[#5B6B85]">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
