import { Section, SectionHeading, SectionImage } from "./shared";

export default function ExplainableAccess() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Explainable access & entity admin workspace"
        title="A denial should be useful without being a disclosure."
        intro="Blocked-action explanations help an authorized user act, but never reveal the names, balances, documents, customers or configuration of entities and objects the principal is not allowed to discover."
      />
      <SectionImage
        src="/images/entity-level-controls/explainable-denial.png"
        alt="An explained denial that guides the user while the undisclosed records stay locked behind the policy shield"
        width={1186}
        height={595}
      />
    </Section>
  );
}
