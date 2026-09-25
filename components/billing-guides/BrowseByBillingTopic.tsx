import Link from "next/link";

interface BillingTopic {
  topic: string;
  intent: string;
  handoff: string;
  href: string;
}

const billingTopics: BillingTopic[] = [
  {
    topic: "Customer records",
    intent:
      "Billing identity, contacts, terms, record quality, ownership.",
    handoff: "Customer Records",
    href: "/customer-records",
  },
  {
    topic: "Invoices & credit notes",
    intent:
      "Prepare, issue, review, correct and understand document lifecycle.",
    handoff: "Invoices",
    href: "/invoices",
  },
  {
    topic: "Charges & adjustments",
    intent:
      "Charge composition, adjustments, fees, discounts, controlled corrections.",
    handoff: "Charges & Adjustments",
    href: "/charges-adjustments",
  },
  {
    topic: "Billing schedules",
    intent: "Repeat and scheduled billing design and review.",
    handoff: "Billing Schedules",
    href: "/billing-schedules",
  },
  {
    topic: "Documents & delivery",
    intent:
      "Generation, sending, delivery evidence and exception concepts.",
    handoff: "Documents & Delivery",
    href: "/documents-and-delivery",
  },
  {
    topic: "Accounts receivable",
    intent:
      "Operational AR control, reminders, disputes, exceptions, ownership.",
    handoff: "Accounts Receivable",
    href: "/accounts-receivable",
  },
  {
    topic: "Payments & reconciliation",
    intent:
      "Payment records, allocation, reconciliation, unknown outcomes.",
    handoff: "Payments & Reconciliation",
    href: "/payments-and-reconcilliation",
  },
  {
    topic: "Outstanding balances",
    intent:
      "Aging, prioritization, balance context, collection workflows.",
    handoff: "Outstanding Balances",
    href: "/outstanding-balances",
  },
  {
    topic: "Reporting & analytics",
    intent:
      "Metric meaning, filters, trends, drill-through, exports, decision use.",
    handoff: "Reporting & Analytics",
    href: "/reporting-and-analytics",
  },
  {
    topic: "Integrations",
    intent:
      "Business process context for providers, accounting, ERP, CRM, banking.",
    handoff: "Integrations",
    href: "/integrations",
  },
  {
    topic: "Implementation & governance",
    intent:
      "Readiness, roles and approvals, process design, training, change management.",
    handoff: "Documentation · Developers",
    href: "/documentation",
  },
];

const blueCtaTopics = [
  "Customer Records",
  "Outstanding Balances",
  "Integrations",
];

export default function BrowseByBillingTopic() {
  return (
    <section id="billing" className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
              max-w-[800px]
              flex-col
              items-center
              gap-3
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
                  tracking-[0.14em]
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
              Eleven topics, eleven authoritative handoffs.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Every topic names where product truth lives, so a guide never
              has to carry mutable detail.
            </p>
          </div>

          {/* TABLE CONTAINER */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(180px,0.85fr)_minmax(0,1.9fr)_minmax(180px,0.75fr)]
                  bg-[#f7f8fa]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
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
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    Guide Intent
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    Authoritative Handoff
                  </span>
                </div>
              </div>

              {/* TABLE ROWS */}
              {billingTopics.map((item, index) => {
                const isBlueCta = blueCtaTopics.includes(item.handoff);

                return (
                  <div
                    key={item.topic}
                    className={`
                      grid
                      grid-cols-[minmax(180px,0.85fr)_minmax(0,1.9fr)_minmax(180px,0.75fr)]
                      transition-colors
                      duration-150
                      hover:bg-[#f7f8fa]/70
                      ${
                        index !== billingTopics.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* TOPIC */}
                    <div className="px-4 py-4">
                      <span
                        className="
                          text-sm
                          font-bold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.topic}
                      </span>
                    </div>

                    {/* GUIDE INTENT */}
                    <div className="px-4 py-4">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.intent}
                      </span>
                    </div>

                    {/* HANDOFF */}
                    <div className="px-4 py-4">
                      {isBlueCta ? (
                        <Link
                          href={item.href}
                          className="
                            inline-flex
                            text-sm
                            font-semibold
                            leading-6
                            text-blue-600
                            transition-colors
                            duration-200
                            hover:text-[#091127]
                            hover:underline
                          "
                        >
                          {item.handoff}
                        </Link>
                      ) : (
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-6
                            text-[#5d7192]
                          "
                        >
                          {item.handoff}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {billingTopics.map((item, index) => {
                const isBlueCta = blueCtaTopics.includes(item.handoff);

                return (
                  <div
                    key={item.topic}
                    className={`
                      p-5
                      transition-colors
                      duration-150
                      hover:bg-[#f7f8fa]/70
                      ${
                        index !== billingTopics.length - 1
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
                          font-bold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.topic}
                      </p>
                    </div>

                    {/* GUIDE INTENT */}
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
                        Guide Intent
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1.5
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.intent}
                      </p>
                    </div>

                    {/* HANDOFF */}
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
                        Authoritative Handoff
                      </p>

                      {isBlueCta ? (
                        <Link
                          href={item.href}
                          className="
                            mt-1.5
                            inline-flex
                            text-sm
                            font-semibold
                            leading-6
                            text-blue-600
                            transition-colors
                            duration-200
                            hover:text-[#091127]
                            hover:underline
                          "
                        >
                          {item.handoff}
                        </Link>
                      ) : (
                        <p
                          className="
                            !m-0
                            mt-1.5
                            text-sm
                            font-normal
                            leading-6
                            text-[#5d7192]
                          "
                        >
                          {item.handoff}
                        </p>
                      )}
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