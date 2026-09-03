"use client";

import Link from "next/link";

const sourceItems = [
  {
    title: "Verified categories only",
    description:
      "Payment, banking, accounting, ERP, commerce, CRM and custom integrations, described only where verified.",
  },
  {
    title: "Inbound events",
    description:
      "Payment, settlement, return, refund or statement events from an approved source.",
  },
  {
    title: "Outbound events",
    description:
      "Allocation, receivable, accounting or exception events emitted onward.",
  },
  {
    title: "Ordering and replay",
    description:
      "Event ordering, replay and duplicate handling are all defined per connector.",
  },
  {
    title: "Source ownership",
    description:
      "Which system owns a field, and what happens when two sources disagree.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved customer context or cross-product handoffs where enabled.",
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
              What arrives, and what is emitted.
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
              Payment, settlement, return, refund and statement events can
              arrive inbound. Allocation, receivable, accounting and exception
              events can go back out.
            </p>
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

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {sourceItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[175px]
                  flex-col
                  items-start
                  bg-white
                  px-6
                  py-6
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

          {/* CONNECTOR BOUNDARY */}
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
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Connector boundary
            </span>

            <p
              className="
                !m-0
                max-w-[850px]
                text-base
                font-normal
                leading-7
                text-[#091127]
              "
            >
              Not every connector processes payments, settles funds or posts
              accounting, and not in real time. Behaviour is stated per
              connector in the governed integration registry. Zoiko Billing
              remains independently deployable.
            </p>
          </div>

          {/* ACTIONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-4
              pt-1

              sm:flex-row
            "
          >
            {/* PRIMARY */}
            <Link
              href="/integration-availability"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-6
                py-3
                text-base
                font-normal
                leading-6
                !text-white
                transition-colors
                hover:bg-[#18223a]

                sm:w-auto
              "
            >
              Browse integrations
            </Link>

            {/* SECONDARY */}
            <Link
              href="#"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                px-2
                py-2.5
                text-base
                font-normal
                leading-6
                !text-[#7890b2]
                transition-colors
                hover:!text-[#5d7192]
              "
            >
              Compare deployment options

              <span className="text-base font-bold leading-6">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}