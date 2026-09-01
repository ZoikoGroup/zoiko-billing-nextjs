import { Section, SectionHeading, SectionImage } from "./shared";

export default function DestinationStates() {
  return (
    <Section tone="tint" gap="gap-11">
      <SectionHeading
        eyebrow="Destination state model"
        title="Five states, and two of them remove the link entirely."
        intro="A navigation entry pointing at an unverified or withdrawn corporate destination is worse than no entry. Select a state to see how both sides behave."
      />
      <SectionImage
        src="/images/zoiko-group/destination-states.png"
        alt="A verified corporate destination beside an unverified one whose navigation entry is withdrawn"
        width={1186}
        height={595}
      />
    </Section>
  );
}
