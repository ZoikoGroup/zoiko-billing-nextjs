import Image from "next/image";

interface EstablishedRow {
  established: string;
  deliberatelyNot: string;
}

const comparisonRows: EstablishedRow[] = [
  {
    established: "A governed control grammar",
    deliberatelyNot: "The live workflow or approval engine behind them",
  },
  {
    established: "Commercial and currency context",
    deliberatelyNot: "Supported currencies, prices or payment acceptance",
  },
  {
    established: "Discrepancy systems context",
    deliberatelyNot: "Market sovereign provisions or settlement",
  },
  {
    established: "Tax and compliance context",
    deliberatelyNot: "Statute, feasibility or compliance nomination",
  },
  {
    established: "Exceptional and transactional flexibility",
    deliberatelyNot: "A specific connection implementation",
  },
  {
    established: "Integrative boundaries",
    deliberatelyNot: "Utility, middleware or integration exclusivity",
  },
  {
    established: "Evidence and history concepts",
    deliberatelyNot: "An immutable guarantee or audit implementation",
  },
];

export default function ProductTourRecapSection() {
  return (
    <section className="w-full bg-[#0b1739] py-16 font-[family-name:var(--font-inter)] text-white sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7ba4e8] sm:text-xs">
            Tour Recap &amp; Next Best Path
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[920px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-white sm:!text-[38px] md:!text-[44px]">
          What the tour established, and what it deliberately did not.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[680px] text-center text-xs leading-relaxed text-[#94a9cc] sm:text-sm md:text-base">
          A recap is where a tour is most tempted to summarize seven qualified
          scenes into one unqualified conclusion.
        </p>

        {/* DESKTOP GRAPHIC CARD (hidden lg:flex) */}
        <div className="mt-10 hidden w-full max-w-[1040px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0e1d44] shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:mt-12 sm:rounded-[24px] lg:flex">
          <div className="relative aspect-[728/314] w-full">
            <Image
              src="/images/product-tour/pt3.png"
              alt="What the tour established and what it did not"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* MOBILE COMPARISON TABLE & EXPLANATION (block lg:hidden) */}
        <div className="mt-8 block w-full max-w-[1040px] lg:hidden">
          {/* Comparison Table */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070e24] shadow-sm">
            <div className="divide-y divide-white/10">
              {comparisonRows.map((row) => (
                <div
                  key={row.established}
                  className="flex flex-col gap-2.5 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Left: Established */}
                  <span className="text-xs font-semibold text-slate-200">
                    {row.established}
                  </span>

                  {/* Right: Deliberately Not with red/pink outline pill */}
                  <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-rose-500/40 bg-rose-950/40 px-3 py-1 text-[11px] text-rose-200 sm:self-auto">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>{row.deliberatelyNot}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navy Explanation Callout Card */}
          <div className="mt-5 rounded-2xl border border-white/10 bg-[#0e1c42] p-5">
            <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs font-bold text-white sm:text-sm">
              Why the recap list puts &apos;not&apos; in equal volume at all
            </h3>
            <p className="!m-0 mt-2 text-xs leading-relaxed text-[#94a9cc]">
              A reader who has traveled through seven chapters has built a mental
              model, and a recap shortens that what was shown in a fast, vocabulary-heavy
              recap of capabilities. In a dubious space, the non-claims at the end
              is the only point where all bounds can be seen together &mdash; which is
              why this tour puts as much space to leaving claims out as on what the
              product does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
