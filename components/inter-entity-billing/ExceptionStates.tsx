import { Section, SectionHeading, SectionImage } from "./shared";

export default function ExceptionStates() {
  return (
    <Section className="lg:gap-11">
      <SectionHeading
        eyebrow="Exceptions, disputes & corrections"
        title="Seven states, and two of them block an effective outcome outright."
        intro="Select a state to see its required behavior."
      />

      <SectionImage
        src="/images/inter-entity-billing/exception-states.png"
        alt="An instruction hub linked to review, approval, waiting, dispute, correction and two blocking states"
        width={1232}
        height={640}
      />
    </Section>
  );
}
