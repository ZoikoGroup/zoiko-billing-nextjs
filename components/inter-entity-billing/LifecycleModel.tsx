import { Section, SectionHeading } from "./shared";

const STAGES: { title: string; body: React.ReactNode }[] = [
  { title: "Draft", body: "Proposed, not yet submitted for review." },
  { title: "Submitted", body: "Entered review with a stated basis." },
  {
    title: "Under review",
    body: (
      <>
        Business, specialist and accounting reviews run{" "}
        <strong className="font-bold">independently</strong>.
      </>
    ),
  },
  {
    title: "Approved",
    body: (
      <strong className="font-bold">
        Only when every required review has its own approval.
      </strong>
    ),
  },
  { title: "Effective", body: "Applies within its effective period." },
  {
    title: "Superseded",
    body: (
      <>
        Replaced by a later version;{" "}
        <strong className="font-bold">prior remains reviewable</strong>.
      </>
    ),
  },
  { title: "Closed", body: "No longer effective, with closure context retained." },
];

export default function LifecycleModel() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Lifecycle & versioning model"
        title="Seven stages, and an instruction can stall at any of them."
        intro={
          <>
            A recommended lifecycle.{" "}
            <strong className="font-bold">
              Supersession preserves the prior version rather than overwriting it.
            </strong>
          </>
        }
      />

      {/* Wrapping flex rather than grid so an incomplete last row stays centred. */}
      <ol className="!mb-0 flex w-full list-none flex-wrap justify-center gap-2 !pl-0 pt-4">
        {STAGES.map((stage, i) => (
          <li
            key={stage.title}
            className="flex w-[calc(50%-4px)] flex-col items-center gap-[5px] rounded-[10px] border border-[#DFE5EE] bg-white px-3 pb-6 pt-3 text-center sm:w-[calc(25%-6px)] xl:w-[calc((100%-48px)/7)]"
          >
            <span className="text-[9.5px] !leading-4 !text-[#7890B2]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-bold !leading-5 !text-[#0F172A]">
              {stage.title}
            </span>
            <span className="pt-3.5 text-xs !leading-4 !text-[#5D7192]">
              {stage.body}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
