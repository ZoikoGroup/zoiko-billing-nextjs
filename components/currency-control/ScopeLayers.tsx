import { Section, SectionHeading, SectionImage, cardClass, heading } from "./shared";

export default function ScopeLayers() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Policy scope, hierarchy & inheritance"
        title="Seven scope layers — and no precedence between them."
        intro={
          <>
            <strong className="font-bold">A design model only.</strong> Actual
            precedence must be defined by product and domain authority before
            implementation, so the layers are listed in conceptual order and{" "}
            <strong className="font-bold">the order is not a resolution rule</strong>.
          </>
        }
      />

      <div className="w-full pt-2">
        <SectionImage
          src="/images/currency-control/scope-layers.png"
          alt="Stacked scope layers from governing authority down to infrastructure, each linked to a side panel"
          width={1232}
          height={640}
        />
      </div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div className={`${cardClass} flex flex-col gap-2 p-6 pb-9`}>
          <h3 className={`${heading} !mb-0 text-lg !font-bold !leading-7 !text-[#0F172A]`}>
            Conflict UX
          </h3>
          <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
            Overlapping policies show as{" "}
            <strong className="font-bold">&ldquo;Conflict / review needed&rdquo;</strong>,
            exposing the affected scopes and the candidate rules.
          </p>
          <p className="!mb-0 pt-1 text-sm !leading-5 !text-[#5D7192]">
            <strong className="font-bold">The interface does not silently choose one.</strong>{" "}
            Governed precedence must exist before any resolution behavior is encoded.
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl border border-[#D6E4FB] bg-[#EAF2FE] p-6 pb-9">
          <h3 className={`${heading} !mb-0 text-lg !font-bold !leading-7 !text-[#0F172A]`}>
            Why order is not precedence
          </h3>
          <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
            Listing entity above market does not mean entity wins.{" "}
            <strong className="font-bold">Readers infer precedence from visual order</strong>,
            which is exactly the inference this model cannot support.
          </p>
          <p className="!mb-0 pt-1 text-sm !leading-5 !text-[#5D7192]">
            The numbering is conceptual sequence, stated as such — and the conflict
            state exists because the question is genuinely open.
          </p>
        </div>
      </div>
    </Section>
  );
}
