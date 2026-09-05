"use client";

import React from "react";
import Link from "next/link";

const sourceItems = [
  {
    title: "Verified categories only",
    description:
      "ERP, accounting, banking, payment, CRM, support, commerce and custom integrations where verified.",
  },
  {
    title: "Inbound updates",
    description:
      "Documents, payments, disputes or customer-contact updates from an approved source.",
  },
  {
    title: "Outbound events",
    description:
      "Tasks, reminders, statements, holds and exception events emitted onward.",
  },
  {
    title: "Ordering and duplicates",
    description:
      "Event ordering, duplicate handling and retry behaviour defined per connector.",
  },
  {
    title: "Source ownership",
    description:
      "Which system owns a field, and what happens when two sources conflict.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved customer context or cross-product handoffs where enabled.",
  },
];

export default function Sources() {
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
                Sources and handoffs
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              What updates receivables, and what receivables emit.
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
              Documents, payments, disputes and contact updates can arrive
              inbound. Tasks, reminders, statements, holds and exceptions can
              go back out.
            </p>
          </div>

          {/* SOURCE CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {sourceItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  min-h-[180px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6

                  ${
                    index < sourceItems.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }

                  sm:[&:nth-child(odd)]:border-r
                  sm:[&:nth-child(odd)]:border-[#edf0f4]

                  lg:border-b
                  lg:border-[#edf0f4]
                  lg:[&:nth-child(3n)]:border-r-0
                  lg:[&:nth-child(3n+1)]:border-r
                  lg:[&:nth-child(3n+2)]:border-r
                `}
              >
                <h3
                  className="
                    !m-0
                    pb-1
                    text-sm
                    font-semibold
                    leading-6
                    text-[#091127]

                    sm:text-base
                  "
                >
                  {item.title}
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
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CONNECTOR BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6
              shadow-[0_4px_16px_rgba(15,23,42,0.03)]

              sm:px-7
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

                sm:text-xs
              "
            >
              Connector boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Not every connector updates receivables or reconciles payments,
              and not in real time. Behaviour is stated per connector in the
              governed integration registry. Zoiko Billing remains
              independently deployable.
            </p>
          </div>

          {/* ACTIONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3

              sm:flex-row
              sm:flex-wrap
              sm:items-center
            "
          >
            {/* BROWSE INTEGRATIONS */}
            <Link
              href="/integration-availability"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-sm
                font-normal
                leading-6
                !text-white
                transition
                hover:bg-[#17213b]

                sm:w-auto
                sm:text-base
              "
            >
              Browse integrations
            </Link>

            {/* COMPARE DEPLOYMENT */}
            <Link
              href="#"
              className="
                inline-flex
                min-h-11
                items-center
                gap-2
                px-1
                py-2.5
                text-sm
                font-normal
                leading-6
                text-[#7890b2]
                transition
                hover:text-[#091127]

                sm:text-base
              "
            >
              <span>Compare deployment options</span>
              <span className="text-base font-bold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}