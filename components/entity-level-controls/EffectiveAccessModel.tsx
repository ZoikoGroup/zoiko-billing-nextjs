import { Section, SectionHeading, SectionImage } from "./shared";

export default function EffectiveAccessModel() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Effective access decision model"
        title="Nine inputs, evaluated before any sensitive action."
        intro="Effective access = identity + role + entity scope + action + object or field + workflow state + purpose + time + policy conditions. Select a synthetic scenario to see the evaluation run."
      />
      <SectionImage
        src="/images/entity-level-controls/access-decision-model.png"
        alt="Nine access inputs feeding a policy shield that resolves to an allowed outcome"
        width={1186}
        height={595}
      />
    </Section>
  );
}
