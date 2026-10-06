interface StateItem {
  state: string;
  whenUsed: string;
  uxRequirement: string;
}

const stateItems: StateItem[] = [
  {
    state: "Not assessed",
    whenUsed: "No governance review exists.",
    uxRequirement: "Show owner needed and a specialist route. No answer.",
  },
  {
    state: "Source needed",
    whenUsed: "A question is identified but no authoritative source is attached.",
    uxRequirement: "Hold definitive guidance.",
  },
  {
    state: "Source unavailable",
    whenUsed: "A known source cannot be verified or accessed.",
    uxRequirement: "Suppress the exact claim; preserve the context.",
  },
  {
    state: "Review needed",
    whenUsed: "Source and content exist but specialist approval is incomplete.",
    uxRequirement: "Allow educational continuation; block authoritative status.",
  },
  {
    state: "Conflicted",
    whenUsed: "Sources or reviewers disagree.",
    uxRequirement: "Expose the conflict. No auto-resolution.",
  },
  {
    state: "Capability unknown",
    whenUsed: "Product-in-market availability is not established.",
    uxRequirement: "Route to Supported Countries. No downstream assumption.",
  },
  {
    state: "Approved orientation",
    whenUsed: "Positioned explanatory content is approved for the scope.",
    uxRequirement: "Still not a compliance certification.",
  },
  {
    state: "Superseded",
    whenUsed: "A newer record replaces a prior one.",
    uxRequirement: "Link the replacement; preserve lineage.",
  },
];

export default function StopHoldEscalationStatesSection() {
  return (
    <section
      id="stop-states"
      className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Stop, Hold &amp; Escalation States
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[800px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[42px]">
          Eight states, and only one permits an authoritative statement.
        </h2>

        {/* SUBTITLE */}
        <p className="!mt-3 text-center text-sm font-normal text-[#5d7192] sm:text-base">
          Even that one is not a certification.
        </p>

        {/* DESKTOP TABLE WRAPPER (Unchanged for lg+) */}
        <div className="mt-8 hidden w-full max-w-[1240px] overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] sm:mt-10 lg:block">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-[#091127] text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    State
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    When Used
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    UX Requirement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#edf0f4]">
                {stateItems.map((item) => (
                  <tr
                    key={item.state}
                    className="transition hover:bg-slate-50/60"
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-xs font-bold text-[#091127] sm:text-[13px]">
                      {item.state}
                    </td>
                    <td className="px-6 py-4 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                      {item.whenUsed}
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold leading-relaxed text-[#b91c1c] sm:text-[13px]">
                      {item.uxRequirement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE STACKED LIST CARD */}
        <div className="mt-8 block w-full max-w-[1240px] rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)] sm:p-5 lg:hidden">
          <div className="divide-y divide-[#edf0f4]">
            {stateItems.map((item) => (
              <div key={item.state} className="py-4 first:pt-1 last:pb-1">
                <h3 className="!m-0 text-xs font-bold text-[#091127] sm:text-[13px]">
                  {item.state}
                </h3>

                <div className="mt-2">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
                    When
                  </p>
                  <p className="!m-0 mt-0.5 text-xs leading-relaxed text-[#5d7192]">
                    {item.whenUsed}
                  </p>
                </div>

                <div className="mt-2.5">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
                    UX Requirement
                  </p>
                  <p className="!m-0 mt-0.5 text-xs font-semibold leading-relaxed text-[#b91c1c]">
                    {item.uxRequirement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE ROSE CALLOUT BOX */}
        <div className="mt-5 block w-full max-w-[1240px] rounded-2xl border border-rose-200 bg-rose-50/70 p-4 text-xs leading-relaxed text-rose-950 lg:hidden">
          <p className="!m-0">
            While educational continuation holds, authoritative status is the portion the whole guide turns on. A reader is allowed to understand the context and what they will need later; a team knows they cannot proceed past what they must resolve.{" "}
            <strong className="font-semibold text-rose-950">
              Separating these two — continuing to read freely while an open condition stays open — is the only arrangement that preserves truth.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
