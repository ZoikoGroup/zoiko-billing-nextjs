import SectionHeader from "./SectionHeader";

interface Journey {
  title: string;
  path: string;
  risk: string;
}

const journeys: Journey[] = [
  {
    title: "Entering a new market",
    path: "Coverage → requirement context → payment paths → tax orientation.",
    risk: "coverage confirming one capability is read as confirming the chain.",
  },
  {
    title: "Presenting a price in a second currency",
    path: "Currency policy → price basis → conversion context → payment acceptance.",
    risk: "an enabled currency read as a price, and a price read as payability.",
  },
  {
    title: "Charging between entities",
    path: "Entity structure → charge governance → specialist tax review → evidence.",
    risk: "business approval read as covering the specialist review.",
  },
];

export default function CrossCapabilityJourneysSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Cross-capability journeys"
          title={
            <>
              Three journeys that touch four{" "}
              <br className="hidden lg:inline" />
              capabilities each.
            </>
          }
          subtitle="Real evaluations cross domains, and each crossing is a place a reader assumes continuity that does not exist."
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-3">
          {journeys.map((journey) => (
            <div
              key={journey.title}
              className="flex flex-col gap-1.5 rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold !leading-6 text-[#091127]">
                {journey.title}
              </h3>
              <p className="!m-0 text-xs !leading-5 !text-[#5d7192]">
                {journey.path}
              </p>
              <p className="!m-0 pt-0.5 text-xs !leading-5 !text-[#5d7192]">
                <strong className="font-bold">The crossing risk:</strong>{" "}
                {journey.risk}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
