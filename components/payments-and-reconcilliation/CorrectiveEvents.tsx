"use client";

import Image from "next/image";
import Link from "next/link";

const correctiveEvents = [
  {
    title: "Provider reversal",
    description:
      "The provider removes value it previously reported. Original payment and reversal both stay.",
  },
  {
    title: "Bank return",
    description:
      "The bank returns funds after receipt, often days later, with its own reference.",
  },
  {
    title: "Chargeback or dispute",
    description:
      "The payer contests the payment through the provider, where that event is supported.",
  },
  {
    title: "Refund",
    description:
      "A deliberate return of funds to the payer, executed by an approved provider capability.",
  },
  {
    title: "Allocation reversal",
    description:
      "The payment stands; only its application to a document is corrected.",
  },
];

const eventRecords = [
  {
    title: "Original relationship",
    description:
      "The payment, allocation or document the correction relates to.",
  },
  {
    title: "Type and reason",
    description:
      "Which of the five events this is, and why it occurred.",
  },
  {
    title: "Amount and currency",
    description:
      "How much value is affected, in which currency.",
  },
  {
    title: "Provider state",
    description:
      "The source state that triggered it, retained as received.",
  },
  {
    title: "Downstream impact",
    description:
      "Effect on documents, receivable positions and customer communication.",
  },
  {
    title: (
      <>
        Permission and
        <br />
        approval
      </>
    ),
    description:
      "Who was authorized to act, and any approval that was required.",
  },
];

const accountingItems = [
  {
    title: "Payment and allocation export",
    description:
      "Payments and allocations can be exported or integrated to a connected system.",
  },
  {
    title: "External posting state",
    description:
      "Ledger or ERP posting state is shown where that integration is verified.",
  },
  {
    title: "Settlement batch reference",
    description:
      "Bank statement or settlement-batch references are recorded as reconciliation evidence.",
  },
  {
    title: "Journal mapping",
    description:
      "Journal or clearing-account mapping only where it has been approved for you.",
  },
  {
    title: "Posting failures",
    description:
      "Posting failure, mismatch and retry evidence stays visible rather than silent.",
  },
  {
    title: "Independent close",
    description:
      "Close and approval remain the accounting system's responsibility, not this one's.",
  },
];

function DetailRows({
  rows,
}: {
  rows: {
    title: React.ReactNode;
    description: string;
  }[];
}) {
  return (
    <div className="w-full">
      {rows.map((row, index) => (
        <div
          key={index}
          className={`
            grid
            gap-3
            py-4

            sm:grid-cols-[150px_minmax(0,1fr)]
            sm:gap-5

            ${
              index !== rows.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }
          `}
        >
          <div
            className="
              text-sm
              font-semibold
              leading-5
              text-[#091127]
            "
          >
            {row.title}
          </div>

          <div
            className="
              text-sm
              font-normal
              leading-6
              text-[#5d7192]
            "
          >
            {row.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CorrectiveEvents() {
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
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
              flex-col
              items-center
              gap-4
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
                Corrective events
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[720px]
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
              Correct payment relationships without erasing history.
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
              Five different corrective events, each with its own trigger,
              authority and downstream effect. Collapsing them is how
              reconciliation goes wrong.
            </p>
          </div>

          {/* FIVE CORRECTIVE EVENTS */}
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
            <div
              className="
                grid
                grid-cols-1

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-5
              "
            >
              {correctiveEvents.map((event, index) => (
                <div
                  key={event.title}
                  className={`
                    flex
                    min-h-[190px]
                    flex-col
                    items-start
                    bg-white
                    px-5
                    py-5

                    ${
                      index !== correctiveEvents.length - 1
                        ? "border-b border-[#edf0f4] xl:border-b-0 xl:border-r"
                        : ""
                    }
                  `}
                >
                  <h3
                    className="
                      !m-0
                      pb-2
                      text-sm
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {event.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EVENT RECORDS + IMAGE */}
          <div
            className="
              grid
              w-full
              items-start
              gap-8

              lg:grid-cols-2
              lg:gap-10

              xl:gap-12
            "
          >
            {/* LEFT */}
            <div className="flex w-full flex-col items-start">
              <h3
                className="
                  !m-0
                  mb-3
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What every corrective event records
              </h3>

              <DetailRows rows={eventRecords} />
            </div>

            {/* RIGHT */}
            <div className="flex w-full flex-col items-start gap-8">
              {/* IMAGE */}
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
                <Image
                  src="/images/payments-and-reconcilliation/corrective-events.png"
                  alt="Corrective payment events"
                  width={526}
                  height={404}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* FUNDS MOVEMENT BOUNDARY */}
              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-6

                  sm:px-6
                  sm:py-7
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Funds-movement boundary
                </span>

                <p
                  className="
                    !m-0
                    text-[15px]
                    font-normal
                    leading-7
                    text-[#091127]
                  "
                >
                  Zoiko Billing does not move funds. A refund happens through
                  an approved payment provider capability; Zoiko Billing
                  records the request, its state and its effect on the billing
                  record.
                </p>
              </div>
            </div>
          </div>

          {/* ACCOUNTING BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3
              border-t
              border-[#dfe5ee]
              pt-10

              sm:pt-12
            "
          >
            <h3
              className="
                !m-0
                max-w-[600px]
                !text-[28px]
                !font-semibold
                !leading-9
                !tracking-[-0.025em]
                !text-[#091127]

                sm:!text-[32px]
              "
            >
              Accounting and bank-reconciliation boundary
            </h3>

            <p
              className="
                !m-0
                max-w-[650px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Reconciling payments to billing records is a different job from
              reconciling to a bank statement or closing a set of books.
            </p>
          </div>

          {/* ACCOUNTING / BANK RECONCILIATION CARDS */}
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
            <div
              className="
                grid
                grid-cols-1

                sm:grid-cols-2

                lg:grid-cols-3
              "
            >
              {accountingItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    flex
                    min-h-[170px]
                    flex-col
                    items-start
                    bg-white
                    px-6
                    py-6

                    ${
                      index !== accountingItems.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }

                    sm:nth-[2n-1]:border-r
                    lg:nth-[3n-1]:border-r-0
                    lg:nth-[3n-2]:border-r
                  `}
                >
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {item.title}
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
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CLOSURE BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-6
              py-7

              sm:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.14em]
                text-[#7890b2]
              "
            >
              Closure boundary
            </span>

            <p
              className="
                !m-0
                max-w-[850px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]
              "
            >
              Zoiko Billing reconciliation is not automatically bank
              reconciliation or an accounting close, and no claim is made
              about revenue recognition or cash-account correctness.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-1">
            <Link
              href="/roles-and-approvals"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-sm
                font-normal
                leading-6
                !text-white
                transition-colors
                hover:bg-[#17213a]

                sm:min-h-12
                sm:px-6
                sm:py-3
                sm:text-base
              "
            >
              Explore Roles &amp; Approvals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}