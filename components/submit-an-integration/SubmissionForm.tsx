import { Section, SectionHeading, SectionImage } from "./shared";

export default function SubmissionForm() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Integration submission"
        title="Four sections, and a redaction review before submit."
        intro="Every free-text field carries its warning above the field rather than below it, and the review step exists specifically to catch what got pasted in anyway."
      />
      <SectionImage
        src="/images/submit-an-integration/submission-form.png"
        alt="A submission form whose fields carry warnings, followed by a redaction review that flags pasted secrets"
        width={1186}
        height={595}
      />
    </Section>
  );
}
