import { Section, SectionHeading, cardClass, heading } from "./shared";

const POINTS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Both sides are you",
    body: (
      <>
        There is no counterparty applying independent scrutiny.{" "}
        <strong className="font-bold">
          Every check that a customer relationship provides for free has to be
          built deliberately.
        </strong>
      </>
    ),
  },
  {
    title: "Specialists have standing",
    body: (
      <>
        Tax and legal review may be a genuine dependency rather than an internal
        courtesy — and{" "}
        <strong className="font-bold">the billing system cannot determine when</strong>.
      </>
    ),
  },
  {
    title: "The charge is evidence",
    body: "Related-party charges are examined later by people who were not involved, which makes basis and authority part of the record rather than context.",
  },
];

export default function WhyIntercompany() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="What makes intercompany different"
        title="Three ways a related-party charge is not a customer invoice."
        intro="The mechanics look identical. The governance requirements are not."
      />

      <div className="grid w-full grid-cols-1 gap-4 pt-4 md:grid-cols-3">
        {POINTS.map((item) => (
          <div key={item.title} className={`${cardClass} flex flex-col gap-1.5 p-5`}>
            <h3 className={`${heading} !mb-0 text-sm !font-bold !leading-6 !text-[#0F172A]`}>
              {item.title}
            </h3>
            <p className="!mb-0 text-xs !leading-5 !text-[#5D7192]">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
