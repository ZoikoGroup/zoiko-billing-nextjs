import React from 'react';
import Link from 'next/link';

interface UseCaseCard {
  category: string;
  title: string;
  description: string;
  flow: string;
  linkText: string;
  href: string;
}

const useCaseCards: UseCaseCard[] = [
  {
    category: 'Customer records',
    title: 'Route records that need attention',
    description:
      'Send incomplete, duplicate, stale or restricted records to the right owner for review.',
    flow: 'Record flagged → conditions checked → assign owner → review task',
    linkText: 'Customer Records',
    href: '/customer-records',
  },
  {
    category: 'Invoices',
    title: 'Move documents through preparation',
    description:
      'Assign preparation, request approval, schedule an issue date or route a failed issue.',
    flow: 'Schedule due → prepare draft → approval gate → issue or route failure',
    linkText: 'Invoices & Credit Notes',
    href: '/invoices',
  },
  {
    category: 'Documents and delivery',
    title: 'Prepare, send and handle failure',
    description:
      'Prepare a document, choose an approved channel, and route delivery failures for recovery.',
    flow: 'Document ready → channel selected → delivery recorded → retry on failure',
    linkText: 'Documents & Delivery',
    href: '/documents-and-delivery',
  },
  {
    category: 'Accounts receivable',
    title: 'Assign follow-up and escalate',
    description:
      'Assign follow-up work, prepare reminders for review, and escalate exceptions by age or value.',
    flow: 'Balance ages → assign owner → prepare reminder → escalate exception',
    linkText: 'Accounts Receivable',
    href: '/accounts-receivable',
  },
  {
    category: 'Payments and reconciliation',
    title: 'Route what does not match',
    description:
      'Send unmatched, short-paid or conflicting payment records to a reviewer instead of guessing.',
    flow: 'Payment recorded → match attempted → exception raised → review queue',
    linkText: 'Payments & Reconciliation',
    href: '/payments-and--reconciliation',
  },
  {
    category: 'Reporting',
    title: 'Schedule summaries and alerts',
    description:
      'Schedule approved summaries, or notify owners when a defined operational condition is met.',
    flow: 'Period closes → summary prepared → recipients checked → delivered',
    linkText: 'Reporting & Analytics',
    href: '/reporting-and-analytics',
  },
];

export default function UseCasesSection() {
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
              max-w-[780px]
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
                Use cases
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[780px]
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
              Reduce repetitive work across the billing record.
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
              Examples of governed workflows by domain. These are illustrations
              of the model, not a guarantee that every action is production
              available on every plan.
            </p>
          </div>

          {/* USE CASE CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {useCaseCards.map((card) => (
              <div
                key={card.title}
                className="
                  flex
                  min-h-[330px]
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  transition-colors
                  hover:bg-[#f7f8fa]

                  sm:p-6
                "
              >
                <div>
                  {/* CATEGORY */}
                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-[#7890b2]
                    "
                  >
                    {card.category}
                  </span>

                  {/* TITLE + DESCRIPTION */}
                  <div className="mt-4">
                    <h3
                      className="
                        !m-0
                        text-base
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        !m-0
                        mt-2
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* FLOW */}
                  <div
                    className="
                      mt-5
                      rounded-xl
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      p-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-xs
                        font-medium
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {card.flow}
                    </p>
                  </div>
                </div>

                {/* LINK */}
                <Link
                  href={card.href}
                  className="
                    group
                    mt-6
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    !text-[#7890b2]
                    transition-colors
                    hover:!text-[#091127]
                  "
                >
                  <span>{card.linkText}</span>

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* USE-CASE BOUNDARY */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-5

              sm:px-6
              sm:py-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
              "
            >
              Use-case boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-4xl
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              No workflow automatically determines creditworthiness, misconduct,
              legal liability or tax treatment. A succeeded run means the
              configured steps completed — it is not proof of a business
              outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}