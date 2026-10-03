import { Section, SectionHeading, SectionImage } from "./shared";

export default function SpecialistBoundary() {
  return (
    <Section tone="dark" className="lg:gap-8">
      <SectionHeading
        dark
        eyebrow="Tax, legal, transfer-pricing & accounting boundary"
        title="Six topics the page may frame — and what it must never conclude."
        intro="This is the most consequential boundary on the page. Each right-hand entry is a determination that belongs to a specialist with professional standing."
      />

      <SectionImage
        src="/images/inter-entity-billing/specialist-boundary.png"
        alt="A charge record passing a central review gate and fanning out to five specialist reviewers, each with their own decision"
        width={1228}
        height={643}
      />
    </Section>
  );
}
