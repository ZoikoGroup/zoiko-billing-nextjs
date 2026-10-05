interface RoleCardItem {
  title: string;
  description: React.ReactNode;
  phases: string;
}

const roleCardItems: RoleCardItem[] = [
  {
    title: "Billing / product owner",
    description:
      "Owns the operating question, scope and how approved posture is translated to configuration.",
    phases: "Phases 1 - 5",
  },
  {
    title: "Finance / operations",
    description:
      "Owns mitigation records, exception ownership and operational handoff.",
    phases: "Phases 1 - 5",
  },
  {
    title: "Tax / legal / compliance reviewer",
    description: (
      <>
        Owns phase 4 applicability review.{" "}
        <strong className="font-semibold text-[#091127]">
          The only role that can clear a review-needed or conflict state.
        </strong>
      </>
    ),
    phases: "Phase 4 · Inputs in 1 and 3",
  },
  {
    title: "Content / domain governance",
    description:
      "Owns provenance triggers, supersede and re-review scheduling.",
    phases: "Phases 1 - 7",
  },
];

export default function RoleBasedGuideViewsSection() {
  return (
    <section
      id="role-views"
      className="w-full bg-[#f8faff] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Role-Based Guide Views
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[800px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[42px]">
          Four roles, and phase 4 has exactly one.
        </h2>

        {/* SUBTITLE */}
        <p className="!mt-3 text-center text-sm font-normal text-[#5d7192] sm:text-base">
          A role view filters what you see. It never changes who can resolve a stop condition.
        </p>

        {/* 4 CARDS GRID */}
        <div className="mt-8 grid w-full max-w-[1240px] grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {roleCardItems.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition hover:shadow-md sm:p-6"
            >
              <div>
                <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold text-[#091127] sm:text-[15px]">
                  {card.title}
                </h3>
                <p className="!m-0 mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#edf0f4] pt-4">
                <span className="text-[11px] font-semibold text-[#7890b2] sm:text-xs">
                  {card.phases}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE AMBER CALLOUT BOX */}
        <div className="mt-5 block w-full max-w-[1240px] rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs leading-relaxed text-amber-950 lg:hidden">
          <p className="!m-0">
            <strong className="font-semibold text-amber-950">
              Phase 7 belongs to governance rather than to the specialist who performed the initial review, which is the tight split and an unshakeable one.
            </strong>{" "}
            Remind teams that audit and operational changes for governance issues come back to us.{" "}
            <strong className="font-semibold text-amber-950">
              Neither drive cadence over the other
            </strong>{" "}
            — which is why the monitoring phase has its own owner rather than being chained to the reviewer.
          </p>
        </div>
      </div>
    </section>
  );
}
