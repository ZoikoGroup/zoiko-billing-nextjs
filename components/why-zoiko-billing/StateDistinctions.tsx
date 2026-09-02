import { Section, SectionHeading, SectionImage } from "./shared";

export default function StateDistinctions() {
  return (
    <Section tone="dark">
      <SectionHeading
        dark
        eyebrow="State clarity & accountable control"
        title="Distinctions a billing system either keeps or loses."
        intro="Each row is a pair that is commonly merged, and what merging them costs."
      />
      <SectionImage
        src="/images/why-zoiko-billing/state-distinctions.png"
        alt="Five pairs of billing states merged together, each producing a cost on the right"
        width={1186}
        height={595}
        framed={false}
      />
    </Section>
  );
}
