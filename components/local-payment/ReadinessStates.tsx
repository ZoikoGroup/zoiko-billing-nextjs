import { Section, SectionHeading, SectionImage } from "./shared";

export default function ReadinessStates() {
  return (
    <Section tone="tint" className="lg:gap-11">
      <SectionHeading
        eyebrow="Recommended operating / readiness state model"
        title="Eight states, and each one carries a guardrail."
        intro={
          <>
            Select a state.{" "}
            <strong className="font-bold">
              Until a governed product source defines real lifecycle semantics,
              all of these remain illustrative UX vocabulary.
            </strong>
          </>
        }
      />

      <SectionImage
        src="/images/local-payment/readiness-states.png"
        alt="A row of readiness states from inactive to blocked, branching to data, configuration, authority and team owners"
        width={1232}
        height={640}
      />
    </Section>
  );
}
