import { Section, SectionHeading, SectionImage } from "./shared";

export default function ChangeOffboarding() {
  return (
    <Section tone="dark">
      <SectionHeading
        dark
        eyebrow="Change & offboarding"
        title="Seven triggers, and assets go with the relationship."
        intro="A directory is only trustworthy if entries leave it when the facts behind them change."
      />
      <SectionImage
        src="/images/technology-partners/change-offboarding.png"
        alt="A partner record moving through review and warning states before its listing and assets are removed"
        width={1186}
        height={595}
        framed={false}
      />
    </Section>
  );
}
