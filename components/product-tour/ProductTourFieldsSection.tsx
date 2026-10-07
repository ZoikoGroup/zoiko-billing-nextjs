interface FieldRow {
  field: string;
  requiredBehavior: string;
  placementRule: string;
  highlight?: boolean;
}

const fieldsData: FieldRow[] = [
  {
    field: "Truth label",
    requiredBehavior:
      "Illustrative concept · Source-verified copy · Controlled evidence unavailable.",
    placementRule: "Visible without opening a tooltip.",
    highlight: true,
  },
  {
    field: "Demonstrates",
    requiredBehavior: "One concise statement about the operating concept shown.",
    placementRule: "In the proof card adjacent to or directly after the scene.",
  },
  {
    field: "Does not claim",
    requiredBehavior:
      "One or more explicit exclusions preventing overinterpretation.",
    placementRule: "Never behind a consent wall or marketing CTA.",
    highlight: true,
  },
  {
    field: "Source / owner",
    requiredBehavior:
      "Approved source owner if available; otherwise Design recommendation.",
    placementRule: "In the proof card.",
  },
  {
    field: "Verify next",
    requiredBehavior:
      "Specialist destination, governed documentation or a demo route.",
    placementRule: "In the proof card.",
  },
  {
    field: "Currentness",
    requiredBehavior: "Shown only when a source supplies it.",
    placementRule: "Review dates are never fabricated.",
    highlight: true,
  },
];

export default function ProductTourFieldsSection() {
  return (
    <section className="w-full bg-[#f8faff] py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Scene Proof Card &amp; Truth Label Contract
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[900px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Six fields, and one of them is the reason the tour is publishable.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[640px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          Every scene in the tour above carries all six.
        </p>

        {/* DESKTOP 3-COLUMN TABLE CONTAINER (hidden lg:block) - Pristine Desktop */}
        <div className="mt-10 hidden w-full max-w-[1240px] overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_4px_25px_rgba(15,23,42,0.04)] sm:mt-12 sm:rounded-[20px] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-xs sm:text-[13px]">
              {/* TABLE HEAD */}
              <thead>
                <tr className="bg-[#091127] text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                  <th className="py-4 px-6 w-[20%]">FIELD</th>
                  <th className="py-4 px-6 w-[45%]">REQUIRED BEHAVIOR</th>
                  <th className="py-4 px-6 w-[35%]">PLACEMENT RULE</th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-[#edf0f4]">
                {fieldsData.map((row) => (
                  <tr
                    key={row.field}
                    className={`transition-colors ${
                      row.highlight
                        ? "bg-[#fff7f8] hover:bg-[#ffeff1]"
                        : "bg-white hover:bg-[#fafcff]"
                    }`}
                  >
                    {/* FIELD */}
                    <td className="py-4 px-6 font-bold text-[#091127] align-top">
                      {row.field}
                    </td>

                    {/* REQUIRED BEHAVIOR */}
                    <td className="py-4 px-6 leading-relaxed text-[#4b5563] align-top">
                      {row.requiredBehavior}
                    </td>

                    {/* PLACEMENT RULE */}
                    <td
                      className={`py-4 px-6 leading-relaxed align-top ${
                        row.highlight
                          ? "font-semibold text-[#be123c]"
                          : "text-[#4b5563]"
                      }`}
                    >
                      {row.placementRule}
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
            {fieldsData.map((row) => (
              <div key={row.field} className="p-4 text-left sm:p-5">
                <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs font-bold text-[#091127] sm:text-sm">
                  {row.field}
                </h3>

                <div className="mt-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Behavior
                  </span>
                  <p className="!m-0 mt-0.5 text-xs leading-relaxed text-slate-700">
                    {row.requiredBehavior}
                  </p>
                </div>

                <div className="mt-2.5 rounded-lg p-2.5 bg-slate-50/70 border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Placement
                  </span>
                  <p
                    className={`!m-0 mt-0.5 text-xs leading-relaxed ${
                      row.highlight
                        ? "font-semibold text-[#be123c]"
                        : "text-slate-700"
                    }`}
                  >
                    {row.placementRule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE ONLY AMBER NOTE (block lg:hidden) */}
        <div className="mt-4 block w-full max-w-[1240px] rounded-2xl border border-amber-200/90 bg-[#fffbeb] p-5 lg:hidden">
          <p className="!m-0 text-xs leading-relaxed text-[#92400e]">
            <strong>
              Every proof card in this tour reads &ldquo;Design recommendation&rdquo;
              for source and omits currentness entirely.
            </strong>{" "}
            That is the contract working as intended rather than a gap &mdash;
            no governed source has been attached to these scenes, so claiming an
            owner or a review date would invent exactly the authority the label
            is meant to disclose.
          </p>
        </div>
      </div>
    </section>
  );
}
