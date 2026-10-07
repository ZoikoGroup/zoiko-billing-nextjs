import { DimensionPicker, Section, SectionHeading } from "./shared";

const DIMENSIONS = [
  { title: "Entity pair", body: "Which entity is billed-from and which billed-to.", fields: "from · to" },
  { title: "Charge basis", body: "Why the charge, recharge or allocation is proposed.", fields: "category · description" },
  { title: "Currency context", body: "Which billing or transaction currency context applies.", fields: "context · source state" },
  { title: "Authority", body: "Who may propose, review and approve.", fields: "four separate states" },
  { title: "Effective period", body: "When the instruction applies.", fields: "from · to · version" },
  { title: "Evidence", body: "What supports the instruction and its later review.", fields: "reference · status" },
];

export default function BillingModel() {
  return (
    // Target of the hero's "The six-part model" button.
    <div id="six-part-model" className="w-full scroll-mt-20">
      <Section>
        <SectionHeading
          eyebrow="Six-part inter-entity billing model"
          title="Six decision objects, before any workflow screen."
          intro={
            <>
              <strong className="font-bold">
                Buyers must understand the decision objects before seeing
                operational screens
              </strong>{" "}
              — select a dimension to focus the workspace below.
            </>
          }
        />

        <DimensionPicker items={DIMENSIONS} defaultIndex={3} />
      </Section>
    </div>
  );
}
