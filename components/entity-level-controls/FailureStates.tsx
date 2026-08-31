import { Section, SectionHeading, SectionImage } from "./shared";

export default function FailureStates() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Security, privacy, failure states & resilience"
        title="When the policy engine is unavailable, nothing silently allows."
        intro="High-risk authorization decisions are server authoritative, and every denial is deterministic and traceable to a current policy source and version."
      />
      <SectionImage
        src="/images/entity-level-controls/policy-engine-failure.png"
        alt="A policy engine issuing an allow and a deny, each traced to a deterministic denial log and a versioned policy source"
        width={1186}
        height={616}
      />
    </Section>
  );
}
