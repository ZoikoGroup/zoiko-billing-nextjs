interface RoleVariantCard {
  title: string;
  leadText: string;
  unchangedText: string;
}

const roleCards: RoleVariantCard[] = [
  {
    title: "Finance / billing",
    leadText:
      "Leads with the control model, then pricing, currency and entity context.",
    unchangedText: "Unchanged: Facts and source boundaries.",
  },
  {
    title: "Operations",
    leadText:
      "Leads with exceptions, corrections and the non-happy paths.",
    unchangedText: "Unchanged: Facts and source boundaries.",
  },
  {
    title: "Technical",
    leadText:
      "Leads with integrations and system boundaries, then evidence and history.",
    unchangedText: "Unchanged: Facts and source boundaries.",
  },
  {
    title: "Executive",
    leadText:
      "Leads with the control model and evidence, at a lower scene density.",
    unchangedText: "Unchanged: Facts and source boundaries.",
  },
];

export default function RoleBasedTourVariantsSection() {
  return (
    <section className="w-full bg-[#f8faff] py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Role-Based Tour Variants
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[900px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Four emphases, one set of facts.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[640px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          A role variant changes which chapters lead.{" "}
          <strong className="font-semibold text-slate-800">
            It never changes the underlying facts or the source boundaries.
          </strong>
        </p>

        {/* 4 CARDS GRID (1 col on mobile, 2 on sm/md, 4 on lg) */}
        <div className="mt-10 grid w-full max-w-[1240px] grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {roleCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-2xl border border-[#dfe5ee] bg-white p-6 shadow-[0_4px_25px_rgba(15,23,42,0.04)] transition hover:shadow-md sm:p-7"
            >
              <div>
                <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-base font-extrabold text-[#091127] sm:text-[17px]">
                  {card.title}
                </h3>
                <p className="!m-0 mt-4 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                  {card.leadText}
                </p>
              </div>

              <div className="mt-6 border-t border-[#edf0f4] pt-4">
                <p className="!m-0 text-[11px] font-medium text-[#7890b2] sm:text-xs">
                  {card.unchangedText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE-ONLY ROSE NOTE (block lg:hidden) */}
        <div className="mt-5 block w-full max-w-[1240px] rounded-2xl border border-rose-200/90 bg-[#fff5f5] p-5 lg:hidden">
          <p className="!m-0 text-xs leading-relaxed text-[#9f1239]">
            <strong>
              &ldquo;Do not change: underlying facts and source boundaries&rdquo;
              is the rule that distinguishes a role variant from a sales deck.
            </strong>{" "}
            Reordering chapters for an audience is legitimate; softening an
            exclusion because the executive version is shorter is not.{" "}
            <strong>
              The do-not-claim text is the same length in every variant
            </strong>
            , because it is the part most likely to be trimmed for time.
          </p>
        </div>
      </div>
    </section>
  );
}
