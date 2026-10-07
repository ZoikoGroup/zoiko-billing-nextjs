import { Section, SectionHeading, SectionImage } from "./shared";

export default function PolicyStates() {
  return (
    <Section tone="tint" className="lg:gap-11">
      <SectionHeading
        eyebrow="Exceptions, overrides, conflicts & corrections"
        title="Seven states, and the conflict state refuses to pick a winner."
        intro="Select a state to see its treatment and guardrail."
      />

      <SectionImage
        src="/images/currency-control/policy-states.png"
        alt="Seven policy states arranged around a central conflict state where two candidate rules meet"
        width={1232}
        height={640}
      />
    </Section>
  );
}
