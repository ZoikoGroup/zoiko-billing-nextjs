import { Section, SectionHeading, SectionImage } from "./shared";

export default function RelationshipVsIntegration() {
  return (
    <Section tone="tint" id="relationship-states">
      <SectionHeading
        eyebrow="Relationship and integration are separate"
        title="Seven combinations, and each publishes differently."
        intro="The two records are maintained by different authorities and change independently. Reading one from the other is the most common error on a directory page."
      />
      <SectionImage
        src="/images/technology-partners/relationship-vs-integration.png"
        alt="A partner relationship record and an integration record separated by a barrier, neither inferring the other"
        width={1186}
        height={595}
      />
    </Section>
  );
}
