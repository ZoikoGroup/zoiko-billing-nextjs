interface ProgressRow {
  state: string;
  meaning: string;
  boundary: string;
  highlight?: boolean;
}

const progressData: ProgressRow[] = [
  {
    state: "Not started",
    meaning: "No chapter has been viewed.",
    boundary: "True default; and zero biases.",
  },
  {
    state: "In progress",
    meaning: "At least one chapter has been viewed.",
    boundary: "Says nothing about which ones.",
  },
  {
    state: "Visited",
    meaning: "The chapter was opened.",
    boundary: "Never equals confirmation/completed testing.",
    highlight: true,
  },
  {
    state: "Resume available",
    meaning: "Presence of a previous progress token.",
    boundary: "Persistence is not claimed unless privacy policy allows it.",
    highlight: true,
  },
  {
    state: "Motion reduced",
    meaning: "Transitions and surface textures reduce.",
    boundary: "All scene jurisdictions remain available without omission.",
  },
  {
    state: "Text-only",
    meaning: "Specimen interfaces are replaced by their written equivalent.",
    boundary: "Complete equivalent content — not a reduced summary.",
    highlight: true,
  },
  {
    state: "Network unavailable",
    meaning: "Actions cannot receive.",
    boundary: "Proof-card content still renders; the truth boundary survives the failure.",
    highlight: true,
  },
  {
    state: "No JavaScript",
    meaning: "Scripting unavailable.",
    boundary: "Chapter content, proof cards and source remain readable.",
    highlight: true,
  },
];

export default function TourProgressVocabularySection() {
  return (
    <section className="w-full bg-[#f8faff] py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Tour Status, Edge Cases &amp; Recovery
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[900px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Progress vocabulary, and what each state is not.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[640px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          Four progress states and four failure conditions.
        </p>

        {/* DESKTOP 3-COLUMN TABLE CONTAINER (hidden lg:block) - Pristine Desktop */}
        <div className="mt-10 hidden w-full max-w-[1240px] overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_4px_25px_rgba(15,23,42,0.04)] sm:mt-12 sm:rounded-[20px] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-xs sm:text-[13px]">
              {/* TABLE HEAD */}
              <thead>
                <tr className="bg-[#091127] text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                  <th className="py-4 px-6 w-[22%]">STATE</th>
                  <th className="py-4 px-6 w-[38%]">MEANING</th>
                  <th className="py-4 px-6 w-[40%]">BOUNDARY</th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-[#edf0f4]">
                {progressData.map((row) => (
                  <tr
                    key={row.state}
                    className={`transition-colors ${
                      row.highlight
                        ? "bg-[#fff7f8] hover:bg-[#ffeff1]"
                        : "bg-white hover:bg-[#fafcff]"
                    }`}
                  >
                    {/* STATE */}
                    <td className="py-4 px-6 font-bold text-[#091127] align-top">
                      {row.state}
                    </td>

                    {/* MEANING */}
                    <td className="py-4 px-6 leading-relaxed text-[#4b5563] align-top">
                      {row.meaning}
                    </td>

                    {/* BOUNDARY */}
                    <td
                      className={`py-4 px-6 leading-relaxed align-top ${
                        row.highlight
                          ? "font-semibold text-[#be123c]"
                          : "text-[#4b5563]"
                      }`}
                    >
                      {row.boundary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE STACKED CARD CONTAINER (block lg:hidden) - Mobile Isolated */}
        <div className="mt-8 block w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm lg:hidden">
          <div className="divide-y divide-slate-100">
            {progressData.map((row) => (
              <div key={row.state} className="p-4 text-left sm:p-5">
                <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs font-bold text-[#091127] sm:text-sm">
                  {row.state}
                </h3>

                <div className="mt-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Meaning
                  </span>
                  <p className="!m-0 mt-0.5 text-xs leading-relaxed text-slate-700">
                    {row.meaning}
                  </p>
                </div>

                <div className="mt-2.5 rounded-lg p-2.5 bg-slate-50/70 border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Boundary
                  </span>
                  <p
                    className={`!m-0 mt-0.5 text-xs leading-relaxed ${
                      row.highlight
                        ? "font-semibold text-[#be123c]"
                        : "text-slate-700"
                    }`}
                  >
                    {row.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE-ONLY PINK CALLOUT (block lg:hidden) */}
        <div className="mt-4 block w-full max-w-[1240px] rounded-2xl border border-rose-200/90 bg-[#fff5f5] p-5 lg:hidden">
          <p className="!m-0 text-xs leading-relaxed text-[#9f1239]">
            <strong>The access-unavailable rule is the one worth holding for.</strong>{" "}
            When a specimen interface fails to render, the natural fallacy is to
            hide the whole block &mdash; losing the exclusion too early.{" "}
            <strong>
              A tour that drops its do-not-claims under failure conditions is most
              accurate when it fails completely
            </strong>{" "}
            &mdash; a failure neither user nor tour operator give themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
