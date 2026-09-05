"use client";

import React from "react";
import Link from "next/link";

const paymentItems = [
  {
    title: "Payment states",
    description:
      "Initiated, received, settled, failed, reversed and unknown are each treated differently.",
  },
  {
    title: "Allocation",
    description:
      "Which documents a payment has been applied to, and for how much.",
  },
  {
    title: "Unmatched or partial",
    description:
      "Payment evidence that exists but is not fully settled or allocated yet.",
  },
  {
    title: "Currency and value date",
    description:
      "The currency paid in and the value date that applies to it.",
  },
  {
    title: "Provider and bank references",
    description:
      "The source references that make the payment traceable.",
  },
  {
    title: "Reconciliation exceptions",
    description:
      "Open exceptions with an owner, surfaced before contact is made.",
  },
];

export default function Payments() {
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
              max-w-[760px]
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
                Payment context
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Revalidate payments and allocations before the next contact.
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
              The most avoidable receivables mistake is chasing money that
              already arrived. Payment state is rechecked before any
              follow-up proceeds.
            </p>
          </div>

          {/* PAYMENT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#dfe5ee]
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {paymentItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[175px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6
                "
              >
                {/* TITLE */}
                <div className="w-full pb-1">
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
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

          {/* PAYMENT BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-7

              sm:px-7
              sm:py-9
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
              Payment boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[850px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              An item is never marked paid from an unverified or unallocated
              event. Zoiko Billing makes no claim of universal payment
              processing or automatic reconciliation, and a remaining amount
              always reflects current approved relationships only.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center">
            <Link
              href="/payments-and-reconcilliation"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                !text-white
                transition
                hover:bg-[#17213a]

                sm:text-base
              "
            >
              Explore Payments &amp; Reconciliation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}