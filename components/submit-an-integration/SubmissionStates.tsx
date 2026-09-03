import { Section, SectionHeading, SectionImage } from "./shared";

export default function SubmissionStates() {
  return (
    <Section tone="dark">
      <SectionHeading
        dark
        eyebrow="Submission state contract"
        title="Nine states, and none of them is an approval."
        intro="Review outcomes come from the authorized owner. This page reports state and never advances it."
      />
      <SectionImage
        src="/images/submit-an-integration/submission-states.png"
        alt="A submission progressing through reported states, with the approval stamp held by a separate owner"
        width={1186}
        height={595}
        framed={false}
      />
    </Section>
  );
}
