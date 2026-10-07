interface BehaviorCard {
  title: string;
  description: string;
}

const behaviors: BehaviorCard[] = [
  {
    title: "Progress persistence",
    description:
      "Explicit opt-in required to persist in temporary client state. Persistence is never claimed unless a protect-source confirms it — and resets on tab close.",
  },
  {
    title: "Public anonymous mode",
    description:
      "Leaves system state with a clean footprint. No sensitive customer data is retained.",
  },
  {
    title: "Owner field",
    description:
      "Role or team reviewer only. Personal names and emails never enter public analytics.",
  },
  {
    title: "Notes",
    description:
      "Protected policy; warn against sensitive data. No legal, tax or payment secrets — strictly process and author accountability.",
  },
  {
    title: "Share",
    description:
      "Prefer export over public share link with pre-filled contents, unless governed access controls exist.",
  },
  {
    title: "Reset",
    description:
      "Clears all checklist state with confirmation. Does not alter any external source system.",
  },
];

export default function ChecklistBehaviorsSection() {
  return (
    <section className="w-full bg-white py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Interaction, Persistence &amp; Privacy
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Six behaviors, and the default is to <br className="hidden sm:inline" />
          keep nothing.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[660px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          A public educational rubric that invites sensitive input without looking like one.
        </p>

        {/* 6 CARDS (3 COLUMNS X 2 ROWS) */}
        <div className="mt-10 grid w-full max-w-[1240px] grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {behaviors.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] sm:p-7"
            >
              <div>
                <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold text-[#091127] sm:text-[15px]">
                  {item.title}
                </h3>
                <p className="!m-0 mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE AMBER SHARE BEHAVIOR ALERT BOX (lg:hidden) */}
        <div className="mt-5 w-full max-w-[1240px] rounded-xl border border-amber-200/80 bg-[#fffbeb] p-4 text-left text-xs leading-relaxed text-[#92400e] shadow-sm lg:hidden">
          <strong className="font-bold text-[#78350f]">
            The share behavior is the one most likely to be built the convenient way.
          </strong>{" "}
          A share link circulating checklist contents is trivial to implement and turns an internal working document into a URL that can be forwarded, leaked, or scraped.{" "}
          <strong className="font-bold text-[#78350f]">
            Export puts the recipient list in the sender&apos;s hands
          </strong>
          , which is where it belongs for a document containing a team&apos;s unresolved questions.
        </div>
      </div>
    </section>
  );
}
