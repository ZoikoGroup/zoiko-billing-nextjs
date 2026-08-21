const changeControls = [
  {
    control: "Configuration change",
    evidence:
      "Before and after, actor or service, source, reason, effective time, and approval where required",
  },
  {
    control: "Jurisdiction status change",
    evidence:
      "Old and new status, scope, evidence, owner, review state and effective date",
  },
  {
    control: "Currency rule change",
    evidence:
      "Currency or pair, method, source, rounding, affected scope and version",
  },
  {
    control: "Entity control change",
    evidence:
      "Role, policy, entity and action scope, plus approver and effective period",
  },
  {
    control: "Localized template change",
    evidence:
      "Source template, localized version, reviewer, parity state and effective date",
  },
  {
    control: "Integration mapping change",
    evidence:
      "System, object or field, direction, authority, transform, version and reviewer",
  },
  {
    control: "Override",
    evidence:
      "Authorized owner, reason, duration, affected scope and automatic expiry or review",
  },
  {
    control: "Exception",
    evidence:
      "Reason taxonomy, owner, next action, a deadline only where authoritative, and state history",
  },
];

export default function ChangeEvidence() {
  return (
    <section className="w-full bg-color-grey-97-4 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 lg:gap-11">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[384px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Evidence, change &amp; exception control
            </span>

            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-extrabold leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Eight change types, each with
            <br className="hidden sm:block" />
            required evidence.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Global configuration changes are attributable and effective-dated,
            because a jurisdiction status or currency rule that changed last
            month has to be explainable this month.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[760px]">
              {/* Header */}
              <div className="grid grid-cols-[280px_minmax(480px,1fr)] bg-color-grey-99-2">
                <div className="border-b border-color-grey-92-4 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Control
                  </span>
                </div>

                <div className="border-b border-color-grey-92-4 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Required evidence
                  </span>
                </div>
              </div>

              {/* Rows */}
              {changeControls.map((item, index) => {
                const isLast = index === changeControls.length - 1;

                return (
                  <div
                    key={item.control}
                    className={`grid grid-cols-[280px_minmax(480px,1fr)] ${
                      !isLast
                        ? "border-b border-color-grey-95-10"
                        : ""
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-color-azure-11-2">
                        {item.control}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-color-azure-44-3">
                        {item.evidence}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}