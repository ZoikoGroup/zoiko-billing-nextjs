import { Section, SectionHeading } from "./shared";

const DEPENDENCIES = [
  { title: "Market coverage", body: "Whether operation in the market is established at all." },
  { title: "Method availability", body: "Whether the referenced method context is available." },
  { title: "Currency context", body: "Whether the relevant currency context is resolved." },
  { title: "Compliance review", body: "Whether specialist review has been completed where required." },
  { title: "Technical readiness", body: "Whether the integration boundary conditions hold." },
];

export default function DependencyChain() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Dependency chain"
        title="Five conditions, five owners, no inheritance."
        intro={
          <>
            Each is confirmed separately.{" "}
            <strong className="font-bold">
              A path is only as usable as its weakest unconfirmed dependency
            </strong>
            , and an unknown is never resolved by an adjacent confirmation.
          </>
        }
      />

      {/* Wrapping flex rather than grid so an incomplete last row stays centred. */}
      <ol className="!mb-0 flex w-full list-none flex-wrap justify-center gap-2.5 !pl-0 pt-4">
        {DEPENDENCIES.map((dep, i) => (
          <li
            key={dep.title}
            className="flex w-[calc(50%-5px)] flex-col gap-[5px] rounded-[10px] border border-[#DFE5EE] bg-white p-3.5 pb-6 md:w-[calc((100%-20px)/3)] xl:w-[calc((100%-40px)/5)]"
          >
            <span className="text-[9.5px] !leading-4 !text-[#7890B2]">
              Dependency {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-bold !leading-5 !text-[#0F172A]">
              {dep.title}
            </span>
            <span className="pt-3.5 text-xs !leading-4 !text-[#5D7192]">
              {dep.body}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
