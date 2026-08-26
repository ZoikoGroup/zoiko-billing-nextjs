const topics = [
  {
    topic: "Customer records",
    intent:
      "Billing identity, contacts, terms, delivery preferences, record governance.",
    authority: "Customer Records",
    linked: true,
  },
  {
    topic: "Invoices & credit notes",
    intent: "Issue, review and correct billing documents.",
    authority: "Invoices",
  },
  {
    topic: "Charges & adjustments",
    intent: "Line items, fees, discounts, controlled corrections.",
    authority: "Charges & Adjustments",
  },
  {
    topic: "Billing schedules",
    intent: "Repeat and scheduled billing activity and review.",
    authority: "Billing Schedules",
  },
  {
    topic: "Documents & delivery",
    intent: "Generation, sending, delivery evidence and exceptions.",
    authority: "Documents & Delivery",
  },
  {
    topic: "Accounts receivable",
    intent:
      "Open receivables, ownership, reminders, disputes, exceptions.",
    authority: "Accounts Receivable",
  },
  {
    topic: "Payments & reconciliation",
    intent:
      "Payment records, allocation, reconciliation, unknown outcomes.",
    authority: "Payments & Reconciliation",
  },
  {
    topic: "Outstanding balances",
    intent: "Aging, priority, collection visibility, status context.",
    authority: "Outstanding Balances",
    linked: true,
  },
  {
    topic: "Reporting & analytics",
    intent:
      "Metrics, filters, trends, drill-through, exports, definitions.",
    authority: "Reporting & Analytics",
  },
  {
    topic: "Integrations",
    intent:
      "Payment providers, accounting and ERP, CRM, banking, Zoiko ecosystem.",
    authority: "Integrations",
    linked: true,
  },
  {
    topic: "Developer implementation",
    intent:
      "APIs, auth, webhooks, sandbox, SDKs and examples, integration lifecycle.",
    authority: "Developers",
  },
];

export default function BrowseBillingTopics() {
  return (
    <section className="w-full bg-white">
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
                Browse by billing topic
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
              Eleven topics, each with an
              <br className="hidden sm:block" /> authoritative product handoff.
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
              The Resource Center summarizes; the product destination remains
              authoritative for how the product actually behaves.
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
              <div
                className="
                  grid
                  grid-cols-[256px_minmax(0,1fr)_256px]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Topic
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Resource intent
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Product authority
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {topics.map((item, index) => (
                <div
                  key={item.topic}
                  className={`
                    grid
                    grid-cols-[256px_minmax(0,1fr)_256px]
                    ${
                      index !== topics.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* TOPIC */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.topic}
                    </span>
                  </div>

                  {/* INTENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.intent}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        leading-6
                        ${
                          item.linked
                            ? "font-semibold text-[#5279b4]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {item.authority}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {topics.map((item, index) => (
                <div
                  key={item.topic}
                  className={`
                    p-5
                    ${
                      index !== topics.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* TOPIC */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Topic
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.topic}
                    </p>
                  </div>

                  {/* RESOURCE INTENT */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Resource intent
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.intent}
                    </p>
                  </div>

                  {/* PRODUCT AUTHORITY */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Product authority
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        ${
                          item.linked
                            ? "font-semibold text-[#5279b4]"
                            : "text-[#5d7192]"
                        }
                      `}
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