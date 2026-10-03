import { DimensionPicker, Section, SectionHeading } from "./shared";

function caveat(text: string) {
  return <strong className="font-bold">{text}</strong>;
}

const DIMENSIONS = [
  { title: "Market context", body: <>Where the path is intended to operate. {caveat("Does not prove support.")}</> },
  { title: "Method reference", body: <>Which approved method context it depends on. {caveat("Referenced, never re-decided.")}</> },
  { title: "Currency context", body: <>Which billing or payment currency context applies. {caveat("No inferred acceptance.")}</> },
  { title: "Operating state", body: <>Which readiness state is represented. {caveat("Illustrative vocabulary.")}</> },
  { title: "Authority", body: <>Who owns and reviews the operating context. {caveat("Generic roles.")}</> },
  { title: "Dependencies", body: <>Which conditions must hold. {caveat("No automatic inheritance.")}</> },
  { title: "Evidence", body: "What source and change history supports it." },
];

export default function OperatingModel() {
  return (
    // Target of the hero's "The seven-part model" button.
    <div id="seven-part-model" className="w-full scroll-mt-20">
      <Section>
        <SectionHeading
          eyebrow="Seven-part local payment operating model"
          title="Seven dimensions around a payment path."
          intro={
            <>
              Select a dimension to focus the workspace.{" "}
              <strong className="font-bold">
                Market labels, method references and currency contexts are
                specimen unless governed — and none proves support.
              </strong>
            </>
          }
        />

        <DimensionPicker items={DIMENSIONS} defaultIndex={5} />
      </Section>
    </div>
  );
}
