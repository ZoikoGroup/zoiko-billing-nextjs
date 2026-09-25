export default function PaymentSettlement() {
  const rows = [
    {
      context: "Payment record",
      handoff:
        "Export or read approved reference, amount, currency, date and status where supported.",
      boundary:
        "The provider and Billing payment source remain authoritative",
    },
    {
      context: "Allocation",
      handoff:
        "Send invoice-payment allocation context if the target model supports it.",
      boundary: "The target determines its own posting representation",
    },
    {
      context: "Unapplied payment",
      handoff: "Only if the target object and state support it.",
      boundary:
        "No suspense or clearing accounting auto-created without configuration",
    },
    {
      context: "Refund / reversal",
      handoff:
        "Export the target-relevant correction event where supported.",
      boundary: "Refund accounting method is target policy",
    },
    {
      context: (
        <>
          Provider fee /
          <br />
          settlement
        </>
      ),
      handoff:
        "Pass an authoritative provider breakdown only when available and mapped.",
      boundary: "No invented fee accounting",
      emphasized: true,
    },
    {
      context: "AR balance / status",
      handoff:
        "Read or write only approved summary or object status.",
      boundary:
        "Billing AR authority and target AR or GL authority remain distinct",
    },
    {
      context: "Bank transaction",
      handoff: "Not owned here at all.",
      boundary: "Banking & Reconciliation is authoritative",
    },
    {
      context: "Accounting journal",
      handoff:
        "Only where an explicit connector capability and evidence exist.",
      boundary: "No universal auto-journal",
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
                Payment, AR &amp; settlement accounting handoff
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2 className="!m-0 w-full max-w-[662px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              The chain must not collapse into &quot;paid and posted.&quot;
            </h2>

            {/* DESCRIPTION */}
            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-[#5d7192] sm:text-base">
              Payment provider result, then Billing payment and allocation
              context, then optional accounting handoff, then optional bank
              matching. Four links, four authorities.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:block">
            {/* HEADER */}
            <div className="grid grid-cols-[192px_minmax(0,1.05fr)_minmax(0,0.78fr)] bg-[#fafbfc]">
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Billing context
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Accounting handoff
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Boundary
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-[192px_minmax(0,1.05fr)_minmax(0,0.78fr)] ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* BILLING CONTEXT */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.context}
                  </div>
                </div>

                {/* ACCOUNTING HANDOFF */}
                <div className="px-4 py-3.5">
                  <div className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.handoff}
                  </div>
                </div>

                {/* BOUNDARY */}
                <div className="px-4 py-3.5">
                  <div
                    className={`text-sm leading-5 ${
                      row.emphasized
                        ? "font-bold text-[#091127]"
                        : "font-normal text-[#5d7192]"
                    }`}
                  >
                    {row.boundary}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={index}
                className={`p-5 ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                {/* BILLING CONTEXT */}
                <div className="mb-2 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Billing context
                </div>

                <div className="text-sm font-semibold leading-5 text-[#091127]">
                  {row.context}
                </div>

                {/* ACCOUNTING HANDOFF */}
                <div className="mb-2 mt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Accounting handoff
                </div>

                <div className="text-sm font-normal leading-6 text-[#5d7192]">
                  {row.handoff}
                </div>

                {/* BOUNDARY */}
                <div className="mb-2 mt-4 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  Boundary
                </div>

                <div
                  className={`text-sm leading-6 ${
                    row.emphasized
                      ? "font-bold text-[#091127]"
                      : "font-normal text-[#5d7192]"
                  }`}
                >
                  {row.boundary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}