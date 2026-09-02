import { Section, SectionHeading, SectionImage } from "./shared";

export default function GroupQuestionClasses() {
  return (
    <Section tone="dark">
      <SectionHeading
        dark
        eyebrow="What the group destination owns"
        title="Eight question classes that belong to Zoiko Group."
        intro="This page names them and routes. It does not answer them, because a second copy of a corporate fact is a second thing to go wrong."
      />
      <SectionImage
        src="/images/zoiko-group/group-question-classes.png"
        alt="Eight classes of corporate question routing outward from a central group registry"
        width={1186}
        height={595}
        framed={false}
      />
    </Section>
  );
}
