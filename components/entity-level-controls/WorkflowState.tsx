import { Section, SectionHeading, SectionImage } from "./shared";

export default function WorkflowState() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Action, object, field & workflow state"
        title="The same field, the same user, a different answer after issue."
        intro="Authorization evaluates object lifecycle state, not only object type. Editing a draft and editing an issued document are different decisions."
      />
      <SectionImage
        src="/images/entity-level-controls/workflow-state.png"
        alt="A document lifecycle from draft to archived, where editing a draft is allowed and editing an issued document is not"
        width={1186}
        height={638}
      />
    </Section>
  );
}
