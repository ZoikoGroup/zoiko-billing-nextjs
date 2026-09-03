import { Section, SectionHeading, SectionImage } from "./shared";

export default function PartnerProfileTemplate() {
  return (
    <Section gap="gap-11">
      <SectionHeading
        eyebrow="Partner profile template"
        title="What a profile states, and what it refuses to."
        intro="Rendered with placeholders. The right-hand panel carries the boundaries, because a partner profile is a page about a third party."
      />
      <SectionImage
        src="/images/technology-partners/partner-profile-template.png"
        alt="A partner profile card beside a panel of locked and withheld fields"
        width={1186}
        height={595}
      />
    </Section>
  );
}
