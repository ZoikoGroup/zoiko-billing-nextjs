"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const checks = [
  {
    title: (
      <>
        Recipient and
        <br />
        preference
      </>
    ),
    description:
      "The current recipient, their contact preference and their language.",
  },
  {
    title: (
      <>
        Document and
        <br />
        balance context
      </>
    ),
    description:
      "The document, remaining balance and what was previously delivered.",
  },
  {
    title: "Template version",
    description: "The reminder or statement template version being used.",
  },
  {
    title: "Timing rules",
    description:
      "Channel, timing, local time, frequency and quiet-period rules where supported.",
  },
  {
    title: (
      <>
        Review before
        <br />
        sending
      </>
    ),
    description:
      "Configured sensitive or external communication waits for a decision.",
  },
  {
    title: (
      <>
        Consent and
        <br />
        restrictions
      </>
    ),
    description:
      "Opt-out, consent, restriction and vulnerable-customer handling where applicable.",
  },
];

const statements = [
  {
    number: "01",
    title: "Scope",
    description:
      "Document-level or customer-level, with the scope stated on the statement itself.",
  },
  {
    number: "02",
    title: "Movement",
    description:
      "Opening position, new activity, credits, payments and closing position.",
  },
  {
    number: "03",
    title: "Currency and entity",
    description:
      "Presented per entity and currency, or separated where totals cannot be combined.",
  },
  {
    number: "04",
    title: "Generation context",
    description:
      "Generation time, delivery time, and the template and data version used.",
  },
  {
    number: "05",
    title: "Recipient and access",
    description:
      "Recipient, channel and the access control applied to the statement.",
  },
  {
    number: "06",
    title: "Regeneration history",
    description:
      "Corrections and regenerations are recorded rather than replacing quietly.",
  },
];

export default function Communication() {
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
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div
            className="
              flex
              w-full
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
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Communication
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
              Prepare follow-up with current customer and delivery context.
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
              A reminder is a considered, permissioned message. Nothing here
              is designed to pressure, deceive or work around a customer&apos;s
              stated restrictions.
            </p>
          </div>

          {/* =====================================================
              CHECKS + IMAGE
          ====================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-10

              lg:gap-14
              lg:pt-2

              xl:flex-row
              xl:items-start
            "
          >
            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}
            <div className="flex w-full flex-col xl:w-1/2">
              {/* SECTION TITLE */}
              <h3
                className="
                  !m-0
                  pb-3
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What is checked before anything is sent
              </h3>

              {/* CHECK LIST */}
              <div className="flex w-full flex-col">
                {checks.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-3
                      py-3.5

                      sm:flex-row
                      sm:items-end
                      sm:gap-5

                      ${
                        index !== checks.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* TITLE */}
                    <div className="w-full shrink-0 sm:w-36">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="flex-1">
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
                  </div>
                ))}
              </div>

              {/* COMMUNICATION BOUNDARY */}
              <div
                className="
                  mt-8
                  w-full
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-6

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
                  "
                >
                  Communication boundary
                </span>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]

                    sm:text-base
                  "
                >
                  Delivery and response are never guaranteed. Zoiko Billing
                  does not support or recommend harassment, deception, public
                  disclosure, or any route that bypasses a customer&apos;s
                  communication restrictions.
                </p>
              </div>
            </div>

            {/* =====================================================
                RIGHT IMAGE
            ====================================================== */}
            <div className="flex w-full xl:w-1/2">
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
                  src="/accounts-receivable/communication.png"
                  alt="Communication and customer delivery context"
                  width={526}
                  height={526}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              STATEMENTS HEADER
          ====================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3.5
              border-t
              border-[#dfe5ee]
              pt-10

              sm:pt-12
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                Statements
              </span>
            </div>

            {/* TITLE */}
            <h3
              className="
                !m-0
                text-[26px]
                font-extrabold
                leading-[1.2]
                tracking-[-0.025em]
                text-[#091127]

                sm:text-[30px]

                md:text-[32px]
              "
            >
              Statements and summaries
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A statement summarises current records for a customer or a
              document set. It is not independent legal proof of anything.
            </p>
          </div>

          {/* =====================================================
              STATEMENT CARDS
          ====================================================== */}
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
            {statements.map((item) => (
              <div
                key={item.number}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.025)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    h-7
                    min-w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                    px-1.5
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      leading-4
                      text-white
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="w-full pb-1 pt-3">
                  <h4
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </h4>
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

          {/* =====================================================
              STATEMENT BOUNDARY
          ====================================================== */}
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
              sm:py-8
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
              Statement boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[800px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              A statement is a summary of current records, not independent
              legal proof. Multi-currency totals require an explicit
              conversion method or separated presentation.
            </p>
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div className="flex w-full justify-center pt-1">
            <Link
              href="/documents-and-delivery"
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
              Explore Documents &amp; Delivery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}