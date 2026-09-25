export default function InvoiceHandoff() {
  const stages = [
    {
      stage: "1 · Eligibility",
      behavior:
        "An issued or approved Billing object in an eligible state, with entity, mapping and integration current",
    },
    {
      stage: "2 · Payload version",
      behavior:
        "The exact Billing object version and selected target fields are recorded",
    },
    {
      stage: "3 · Transform",
      behavior: (
        <>
          Apply registered field mapping and format —{" "}
          <strong>no hidden accounting interpretation</strong>
        </>
      ),
    },
    {
      stage: "4 · Queue",
      behavior:
        "Create one handoff attempt with an idempotent business key",
    },
    {
      stage: "5 · Send",
      behavior:
        "Transmit by the registered API, file or event method",
    },
    {
      stage: "6 · Target response",
      behavior:
        "Capture transport and target-native validation separately",
    },
    {
      stage: "7 · Target reference",
      behavior:
        "Store the external object, batch or reference ID when returned",
    },
    {
      stage: "8 · Posting status",
      behavior:
        "Shown only if the connector provides authoritative posted or native status",
    },
    {
      stage: "9 · Reconciliation",
      behavior:
        "Compare expected object, version, reference and state",
    },
    {
      stage: "10 · Evidence",
      behavior:
        "Source object, mapping version, transform version, target references, timestamps and outcomes",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 md:gap-11">
          {/* INTRO */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
                Invoice, credit &amp; charge handoff
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2 className="!m-0 w-full max-w-[1000px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              Ten stages, and none of them is &quot;posted to the ledger.&quot;
            </h2>

            {/* DESCRIPTION */}
            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-[#5d7192] sm:text-base">
              That phrase is used only when the integration actually returns
              target-specific authoritative posting evidence.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:block">
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[224px_minmax(0,1fr)] bg-[#fafbfc]">
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Stage
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Required behavior
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {stages.map((item, index) => (
              <div
                key={item.stage}
                className={`grid grid-cols-[224px_minmax(0,1fr)] ${
                  index !== stages.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* STAGE */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-semibold leading-5 text-[#091127]">
                    {item.stage}
                  </div>
                </div>

                {/* BEHAVIOR */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-normal leading-5 text-[#5d7192]">
                    {item.behavior}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {stages.map((item, index) => (
              <div
                key={item.stage}
                className={`p-5 ${
                  index !== stages.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* STAGE LABEL */}
                <div className="mb-2 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Stage
                </div>

                {/* STAGE */}
                <div className="text-sm font-semibold leading-5 text-[#091127]">
                  {item.stage}
                </div>

                {/* BEHAVIOR LABEL */}
                <div className="mb-2 mt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Required behavior
                </div>

                {/* BEHAVIOR */}
                <div className="text-sm font-normal leading-6 text-[#5d7192]">
                  {item.behavior}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}