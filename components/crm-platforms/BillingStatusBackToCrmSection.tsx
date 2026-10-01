interface OutboundSummaryRow {
  summaryItem: string;
  permittedScope: string;
}

const outboundSummaryRows: OutboundSummaryRow[] = [
  {
    summaryItem: "Billing account link",
    permittedScope: "A deep link or reference for the authorized team. No full financial history.",
  },
  {
    summaryItem: "Invoice status summary",
    permittedScope:
      "Draft, issued, delivered, overdue or paid summary where approved. Allowlisted fields only.",
  },
  {
    summaryItem: "Outstanding indicator",
    permittedScope:
      "A high-level open or overdue state if explicitly approved. No line-item ledger sync.",
  },
  {
    summaryItem: "Payment status summary",
    permittedScope:
      "Paid, partial or unpaid only when needed. Card and bank details omitted.",
  },
  {
    summaryItem: "Billing exception",
    permittedScope:
      "Needs input, approval or delivery issue if a routing purpose exists. Routing purpose required.",
  },
  {
    summaryItem: "Next billing action",
    permittedScope:
      "An approved operational callout where useful. No automatic sales trigger.",
  },
  {
    summaryItem: "Last billing activity",
    permittedScope:
      "A timestamp or event summary. Event-level only.",
  },
  {
    summaryItem: "Renewal / expansion flag",
    permittedScope:
      "Only if a separately governed source and purpose exists. No automatic scoring.",
  },
];

export default function BillingStatusBackToCrmSection() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[700px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Billing status &amp; operational context back to CRM
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Minimum necessary outbound.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              CRM receives the least billing context needed for the declared
              workflow. It does not become a shadow finance database.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[260px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Outbound summary
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Permitted scope
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {outboundSummaryRows.map((row, index) => (
                <div
                  key={row.summaryItem}
                  className={`grid grid-cols-[260px_minmax(0,1fr)] ${
                    index !== outboundSummaryRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.summaryItem}
                    </span>
                  </div>

                  <div className="px-5 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.permittedScope}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {outboundSummaryRows.map((row, index) => (
                <div
                  key={row.summaryItem}
                  className={`p-5 ${
                    index !== outboundSummaryRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  {/* OUTBOUND SUMMARY */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Outbound summary
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.summaryItem}
                    </p>
                  </div>

                  {/* PERMITTED SCOPE */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Permitted scope
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.permittedScope}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}