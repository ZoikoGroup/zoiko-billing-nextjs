import { Section, SectionHeading, SectionImage } from "./shared";

export default function EntitySeparation() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Entity separation"
        title="Six roles a group relationship does not establish."
        intro="Group membership is corporate context. Each row below is a distinct authority that a reader may otherwise infer from it."
      />
      <SectionImage
        src="/images/zoiko-group/entity-separation.png"
        alt="A group tier above six separate authorities, each standing on its own platform"
        width={1186}
        height={595}
      />
    </Section>
  );
}
