"use client";

import Link from "next/link";

const sourceItems = [
  {
    title: "Verified categories only",
    description:
      "Billing, accounting, ERP, payment, banking, CRM, warehouse and custom integrations where verified.",
  },
  {
    title: "Inbound context",
    description:
      "Source records, dimensions, targets or budgets from an approved system.",
  },
  {
    title: "Outbound events",
    description:
      "Report, export, alert and audit events emitted onward.",
  },
  {
    title: "Schema and version",
    description:
      "Source ownership, schema version, ordering and latency behaviour.",
  },
  {
    title: "Replay and correction",
    description:
      "Replay and correction behaviour, including how restatements propagate.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved records or cross-product handoffs where enabled.",
  },
];

export default function SourcesHandoffs() {
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
              flex-col
              items-start
              gap-4

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                max-w-[662px]
                flex-col
                items-start
                gap-3
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
                  Sources and handoffs
                </span>
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
                What feeds reporting,
                <br className="hidden sm:block" />
                and what reporting
                <br className="hidden sm:block" />
                emits.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[528px]
                lg:pb-1
              "
            >
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Source records, dimensions and targets can arrive inbound.
                Report, export, alert and audit events can go back out.
              </p>
            </div>
          </div>

          {/* SOURCE / HANDOFF CARDS */}
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
            {sourceItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[165px]
                  flex-col
                  items-start
                  gap-2
                  bg-white
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6
                "
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
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Connector boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Not every connector provides real-time, complete or
              accounting-ready data. Behaviour is stated per connector in the
              governed integration registry. Zoiko Billing remains
              independently deployable.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3

              sm:flex-row
            "
          >
            <Link
              href="integration-availability"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-base
                font-normal
                leading-6
                !text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#091127]
                transition
                hover:bg-[#17233d]
                hover:!text-white

                sm:w-auto
              "
            >
              Browse integrations
            </Link>

            <Link
              href="#"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                px-2
                py-2.5
                text-base
                font-normal
                leading-6
                !text-[#091127]
                transition
                hover:!text-[#5d7192]

                sm:w-auto
              "
            >
              <span>Compare deployment options</span>

              <span className="text-base font-bold leading-6">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}