import { Section, SectionHeading, SectionImage } from "./shared";

export default function ReadinessStates() {
  return (
    <Section id="submission-readiness" gap="gap-11">
      <SectionHeading
        eyebrow="Submission readiness"
        title="Five readiness states, and two of them say wait."
        intro="A submission missing its architecture summary or its test evidence costs a review cycle. Select a state to see what it means."
      />
      <SectionImage
        src="/images/submit-an-integration/readiness-states.png"
        alt="A complete submission beside two incomplete ones missing their architecture summary or test evidence"
        width={1186}
        height={595}
      />
    </Section>
  );
}
