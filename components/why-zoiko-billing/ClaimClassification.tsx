import { Section, SectionHeading, SectionImage } from "./shared";

export default function ClaimClassification() {
  return (
    <Section id="claim-classification">
      <SectionHeading
        eyebrow="Claim classification"
        title="Seven classes, each with the verbs it is allowed."
        intro="This is the mechanism behind the labels above. The allowed language is what keeps a differentiation page from drifting into claims it cannot support."
      />
      <SectionImage
        src="/images/why-zoiko-billing/claim-classification.png"
        alt="Claims passing through a classification gear that routes each one to an allowed or flagged outcome"
        width={1186}
        height={595}
      />
    </Section>
  );
}
