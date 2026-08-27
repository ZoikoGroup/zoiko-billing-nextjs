export default function BrowseByTopic() {
  const topics = [
    {
      topic: "Customer records",
      scope:
        "Billing identity, contacts, terms, record states, ownership concepts.",
      authority: "Customer Records",
    },
    {
      topic: "Invoices & credit notes",
      scope:
        "Invoice, credit note, issuance, correction, status and evidence concepts.",
      authority: "Invoices · Documentation",
    },
    {
      topic: "Charges & adjustments",
      scope: "Charges, adjustments, fees, discounts, corrections.",
      authority: "Charges & Adjustments",
    },
    {
      topic: "Billing schedules & delivery",
      scope:
        "Schedules, recurring billing context, documents, delivery and evidence concepts.",
      authority: "Billing Schedules · Documents & Delivery",
    },
    {
      topic: "Accounts receivable",
      scope:
        "Receivables, reminders, disputes, exceptions, ownership, aging concepts.",
      authority: "Accounts Receivable · Guides",
    },
    {
      topic: "Payments & reconciliation",
      scope:
        "Payment records, allocations, reconciliation, unknown outcomes, exceptions.",
      authority: "Payments & Reconciliation · Developers",
    },
    {
      topic: "Outstanding balances",
      scope: "Balance, aging, status and prioritization concepts.",
      authority: "Outstanding Balances",
    },
    {
      topic: "Reporting & analytics",
      scope:
        "Metric, filter, aggregation, drill-through and export concepts.",
      authority: "Reporting & Analytics",
    },
    {
      topic: "Integrations & developers",
      scope:
        "Integration, webhook, authentication, sandbox and SDK business meanings.",
      authority: "Integrations · Developers",
    },
  ];

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
              max-w-[662px]
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
                Browse by topic
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              Nine topics, nine authorities.
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
              Each topic names where domain truth lives, so a definition
              never has to carry it.
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
              <div className="grid grid-cols-[240px_minmax(0,1fr)_320px] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Topic
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Glossary scope
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Authority
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {topics.map((item, index) => (
                <div
                  key={item.topic}
                  className={`grid grid-cols-[240px_minmax(0,1fr)_320px] ${
                    index !== topics.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  {/* TOPIC */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.topic}
                    </span>
                  </div>

                  {/* SCOPE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.scope}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span
                      className={
                        item.authority.includes("Customer Records") ||
                        item.authority.includes("Accounts Receivable") ||
                        item.authority.includes("Outstanding Balances") ||
                        item.authority.includes("Integrations")
                          ? "text-sm font-semibold leading-6 text-[#4c83c3]"
                          : "text-sm font-normal leading-5 text-[#5d7192]"
                      }
                    >
                      {item.authority}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {topics.map((item, index) => (
                <div
                  key={item.topic}
                  className={`p-5 ${
                    index !== topics.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  {/* TOPIC */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Topic
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {item.topic}
                    </p>
                  </div>

                  {/* GLOSSARY SCOPE */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Glossary scope
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.scope}
                    </p>
                  </div>

                  {/* AUTHORITY */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Authority
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm leading-6 ${
                        item.authority.includes("Customer Records") ||
                        item.authority.includes("Accounts Receivable") ||
                        item.authority.includes("Outstanding Balances") ||
                        item.authority.includes("Integrations")
                          ? "font-semibold text-[#4c83c3]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {item.authority}
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