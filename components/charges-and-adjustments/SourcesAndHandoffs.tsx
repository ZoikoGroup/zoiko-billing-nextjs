"use client";

import Link from "next/link";

const handoffItems = [
  {
    title: "Verified categories only",
    description:
      "Catalog, order, contract, usage, commerce, CRM, ERP, tax and custom integrations, described only where verified.",
  },
  {
    title: "Inbound context",
    description:
      "Amount, quantity, rate or eligibility context arriving from an approved source.",
  },
  {
    title: "Outbound handoff",
    description:
      "Document, accounting or reporting handoff to a connected system.",
  },
  {
    title: "Ownership and conflict",
    description:
      "Which system owns a field, and what happens when two sources disagree.",
  },
  {
    title: "Retry and idempotency",
    description:
      "Retry behaviour and idempotency controls that prevent duplicate amounts.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Approved source records, shared identity or cross-product handoffs where enabled.",
  },
];

export default function SourcesAndHandoffs() {
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
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
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
              Where amounts come from,
              <br className="hidden sm:block" />
              and where they go.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Approved systems can supply quantity, rate and eligibility
              context inbound, and receive document, accounting or reporting
              context outbound.
            </p>
          </div>

          {/* =========================================================
              HANDOFF TABLE
          ========================================================= */}
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
            {/* DESKTOP */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[240px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
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
                    Handoff area
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
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
                    Description
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {handoffItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    grid
                    grid-cols-[240px_minmax(0,1fr)]
                    ${
                      index !== handoffItems.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-5 py-4">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {handoffItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    p-5
                    ${
                      index !== handoffItems.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* HANDOFF AREA */}
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
                      Handoff area
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
                      {item.title}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
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
                      Description
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
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              CONNECTOR BOUNDARY
          ========================================================= */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#4b91ff]
              bg-[#f0f2f2]
              px-5
              py-7

              sm:px-6
              sm:py-8
            "
          >
            {/* LABEL */}
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Connector boundary
            </span>

            {/* TEXT */}
            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[850px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Not every connector calculates, rates, discounts, taxes or posts
              amounts, and not in real time. Behaviour is stated per connector
              in the governed integration registry. Zoiko Billing remains
              independently deployable.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3

              max-sm:flex-col
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="/integration-availability"
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
                py-2
                text-base
                font-normal
                leading-6
                !text-white
                no-underline
                transition-colors
                hover:bg-[#17213a]

                max-sm:w-full
              "
            >
              Browse integrations
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="#"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                px-2
                py-2
                text-base
                font-normal
                leading-6
                text-[#3377ad]
                no-underline
                transition-colors
                hover:text-[#1e527c]

                max-sm:w-full
              "
            >
              <span>Compare deployment options</span>

              <span
                className="
                  font-mono
                  text-base
                  font-bold
                  leading-6
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}