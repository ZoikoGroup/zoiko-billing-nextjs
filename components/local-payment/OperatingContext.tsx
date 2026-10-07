import Link from "next/link";

import { Section, SectionHeading, cardClass, heading, linkClass } from "./shared";

const ANSWERED: { q: string; a: string }[] = [
  { q: "What state is this operating context in, and why?", a: "Readiness, dependencies and their owners." },
  { q: "Who reviews and approves it?", a: "Generic authority categories." },
  { q: "What evidence supports it?", a: "Source and currentness status only." },
];

const ROUTED: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is this method available?",
    a: (
      <>
        Local Payment Methods owns that truth —{" "}
        <strong className="font-bold">
          this page never duplicates the availability decision
        </strong>
        .
      </>
    ),
  },
  {
    q: "Do you operate in this market?",
    a: (
      <>
        <Link href="/jurisdiction-availability" className={linkClass}>
          Jurisdiction Availability
        </Link>
        .
      </>
    ),
  },
  {
    q: "Is this currency accepted?",
    a: (
      <>
        Currency context, governed separately.{" "}
        <strong className="font-bold">Acceptance is never inferred.</strong>
      </>
    ),
  },
];

function QuestionList({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <p key={item.q} className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
          <strong className="font-bold">{item.q}</strong> {item.a}
        </p>
      ))}
    </div>
  );
}

export default function OperatingContext() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Operating context, not execution"
        title="Three questions this page answers, and three it routes."
        intro="The split is between governance of a path and the facts about the path itself."
      />

      <div className="grid w-full grid-cols-1 gap-5 pt-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-2xl border border-[#D6E4FB] bg-[#EAF2FE] p-6 md:pb-10">
          <h3 className={`${heading} !mb-0 text-lg !font-bold !leading-7 !text-[#0F172A]`}>
            Answered here
          </h3>
          <QuestionList items={ANSWERED} />
        </div>

        <div className={`${cardClass} flex flex-col gap-2 p-6 md:pb-9`}>
          <h3 className={`${heading} !mb-0 text-lg !font-bold !leading-7 !text-[#0F172A]`}>
            Routed elsewhere
          </h3>
          <QuestionList items={ROUTED} />
        </div>
      </div>
    </Section>
  );
}
