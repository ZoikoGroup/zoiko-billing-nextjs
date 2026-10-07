import DimensionPicker from "./DimensionPicker";
import { Section, SectionHeading } from "./shared";

const DIMENSIONS = [
  { title: "Currency", body: "The configured currency or currency class.", fields: "label · status · source" },
  { title: "Context", body: "Where the policy applies.", fields: "entity · market · offer" },
  { title: "Policy", body: "Allowed use and relevant configuration categories.", fields: "usage class · flags" },
  { title: "Authority", body: "Who proposes, reviews and approves changes.", fields: "owner · reviewer · state" },
  { title: "Effective time", body: "When configuration starts, stops and was reviewed.", fields: "from · to · reviewed" },
  { title: "Evidence", body: "Why and what changed.", fields: "reason · note · supersession" },
];

export default function ControlModel() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Six-part currency-control model"
        title="Six dimensions around every currency policy."
        intro={
          <>
            Select a dimension to focus the workspace.{" "}
            <strong className="font-bold">
              Exact fields, enum values, precedence and enforcement behavior must
              come from governed product sources before implementation.
            </strong>
          </>
        }
      />

      <DimensionPicker items={DIMENSIONS} defaultIndex={1} />
    </Section>
  );
}
