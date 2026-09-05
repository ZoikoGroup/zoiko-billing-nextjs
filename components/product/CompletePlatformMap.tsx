"use client";

import Link from "next/link";

export default function CompletePlatformMap() {
  const platform = [
    {
      title: "Customer Records",
      description:
        "Billing profiles, contacts, terms and connected customer context.",
      link: "Explore Customer Records →",
      href: "/customer-records",
    },
    {
      title: "Automation & Workflows",
      description: "Rules, reminders and controlled workflows.",
      link: "Explore Automation & Workflows →",
      href: "/automation",
    },
    {
      title: "Roles & Approvals",
      description: "Permissions, review and approval boundaries.",
      link: "Explore Roles & Approvals →",
      href: "/roles-and-approvals",
    },
  ];

  const billingOperations = [
    {
      title: "Invoices & Credit Notes",
      description:
        "Create, issue, correct and manage billing documents.",
      link: "Explore Invoices & Credit Notes →",
      href: "/invoices",
    },
    {
      title: "Charges & Adjustments",
      description:
        "Line items, fees, discounts, corrections and controlled adjustments.",
      link: "Explore Charges & Adjustments →",
      href: "/charges-and-adjustments",
    },
    {
      title: "Billing Schedules",
      description: "Timing, recurrence and schedule state.",
      link: "Explore Billing Schedules →",
      href: "/billing-schedules",
    },
    {
      title: "Documents & Delivery",
      description:
        "Generation, delivery, delivery records and exceptions.",
      link: "Explore Documents & Delivery →",
      href: "/documents-and-delivery",
    },
  ];

  const revenueControl = [
    {
      title: "Accounts Receivable",
      description:
        "Open receivables, ownership, follow-up context and exceptions.",
      link: "Explore Accounts Receivable →",
      href: "/accounts-receivable",
    },
    {
      title: "Payments & Reconciliation",
      description:
        "Payment records, allocation and reconciliation.",
      link: "Explore Payments & Reconciliation →",
      href: "/payments-and-reconcilliation",
    },
    {
      title: "Outstanding Balances",
      description: "Aging and collection visibility.",
      link: "Explore Outstanding Balances →",
      href: "/outstanding-balances",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Billing, payment, receivable and operational reporting.",
      link: "Explore Reporting & Analytics →",
      href: "/reporting-and-analytics",
    },
  ];

  const renderCards = (
    cards: {
      title: string;
      description: string;
      link: string;
      href: string;
    }[]
  ) => {
    return (
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-3.5

          sm:grid-cols-2

          lg:grid-cols-3
        "
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="
              flex
              min-h-[160px]
              w-full
              flex-col
              justify-between
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-4
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TITLE */}
            <div className="flex w-full flex-col items-start">
              <h3
                className="
                  !m-0
                  text-sm
                  font-semibold
                  leading-5
                  text-[#091127]
                "
              >
                {card.title}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full pt-2">
              <p
                className="
                  !m-0
                  text-xs
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                {card.description}
              </p>
            </div>

            {/* LINK */}
            <div className="w-full pt-3">
              <Link
                href={card.href}
                className="
                  !text-blue-600
                  text-xs
                  font-semibold
                  leading-5
                  transition-colors
                  hover:!text-blue-700
                  hover:underline
                "
              >
                {card.link}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

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
            gap-5
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
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />

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
                Complete platform map
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />
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
              Eleven capabilities, three families.
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
              A decision aid, not a decorative feature grid. Each card carries
              a plain description, its canonical route, and any boundary the
              label could obscure.
            </p>
          </div>

          {/* PLATFORM */}
          <section className="w-full pt-5">
            <div className="mb-3.5 flex w-full items-baseline">
              <h3
                className="
                  !m-0
                  text-lg
                  font-extrabold
                  leading-8
                  text-[#091127]
                "
              >
                Platform
              </h3>
            </div>

            {renderCards(platform)}
          </section>

          {/* BILLING OPERATIONS */}
          <section className="w-full pt-1">
            <div className="mb-3.5 flex w-full items-baseline">
              <h3
                className="
                  !m-0
                  text-lg
                  font-extrabold
                  leading-8
                  text-[#091127]
                "
              >
                Billing Operations
              </h3>
            </div>

            {renderCards(billingOperations)}
          </section>

          {/* REVENUE CONTROL */}
          <section className="w-full pt-1">
            <div className="mb-3.5 flex w-full items-baseline">
              <h3
                className="
                  !m-0
                  text-lg
                  font-extrabold
                  leading-8
                  text-[#091127]
                "
              >
                Revenue Control
              </h3>
            </div>

            {renderCards(revenueControl)}
          </section>
        </div>
      </div>
    </section>
  );
}