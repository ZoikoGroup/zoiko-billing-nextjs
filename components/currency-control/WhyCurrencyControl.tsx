import { Section, SectionHeading, cardClass, heading } from "./shared";

const QUESTIONS: { question: string; answer: React.ReactNode }[] = [
  {
    question: "“Can this entity invoice in this currency?”",
    answer: (
      <>
        The answer may be set at organization, entity, market or product level —{" "}
        <strong className="font-bold">and those layers can disagree</strong>.
      </>
    ),
  },
  {
    question: "“Who turned this on, and when?”",
    answer: (
      <>
        Currency configuration is usually changed in a settings screen with no
        approval record.{" "}
        <strong className="font-bold">The change is invisible afterwards.</strong>
      </>
    ),
  },
  {
    question: "“Is this a display currency or the transaction currency?”",
    answer: "Three distinct roles that interfaces routinely collapse into one field.",
  },
];

export default function WhyCurrencyControl() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Why currency control matters"
        title="Three questions that have no single owner."
        intro="Each is answerable only by reading configuration across several layers at once."
      />

      <div className="grid w-full grid-cols-1 gap-4 pt-4 md:grid-cols-3">
        {QUESTIONS.map((item) => (
          <div key={item.question} className={`${cardClass} flex flex-col gap-1.5 p-5`}>
            <h3 className={`${heading} !mb-0 text-sm !font-bold !leading-6 !text-[#0F172A]`}>
              {item.question}
            </h3>
            <p className="!mb-0 text-xs !leading-5 !text-[#5D7192]">{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
