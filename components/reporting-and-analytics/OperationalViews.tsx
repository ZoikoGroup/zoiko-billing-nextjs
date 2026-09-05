"use client";

import Link from "next/link";

const views = [
  {
    title: "Customer and entity activity",
    description:
      "Activity by customer and issuing entity, keeping both dimensions intact.",
  },
  {
    title: "Document activity",
    description:
      "Draft, issued, credited and corrected documents, each counted by its own state.",
  },
  {
    title: "Charge activity",
    description:
      "Charges, fees, discounts and adjustments with their direction preserved.",
  },
  {
    title: "Billing schedule work",
    description:
      "Scheduled, due, run, missed and blocked occurrences as separate counts.",
  },
  {
    title: "Delivery evidence",
    description:
      "Rendered, queued, sent, published and verified-delivery states kept apart.",
  },
  {
    title: "Workflow and workload",
    description:
      "Workflow, approval, exception and ownership workload by owner and queue.",
  },
];

export default function OperationalViews() {
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
                  Operational views
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
                Report across the
                <br className="hidden sm:block" />
                platform without
                <br className="hidden sm:block" />
                collapsing distinct
                <br className="hidden sm:block" />
                states.
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
                Counts use exact source-state definitions. A queued document
                and a delivered one are never added together to make a tidier
                number.
              </p>
            </div>
          </div>

          {/* OPERATIONAL VIEWS */}
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
            {views.map((view) => (
              <div
                key={view.title}
                className="
                  flex
                  min-h-[155px]
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
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {view.title}
                </h3>

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
                  {view.description}
                </p>
              </div>
            ))}
          </div>

          {/* COMPARISON BOUNDARY */}
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
            <div className="mb-2">
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
                Comparison boundary
              </span>
            </div>

            <p
              className="
                !m-0
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Incompatible periods or units are never compared without an
              explanation. Where a comparison is not valid, the report says
              so rather than presenting a number anyway.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center">
            <Link
              href="platform-overview"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                !text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#091127]
                transition
                hover:bg-[#17233d]
                hover:!text-white
              "
            >
              Explore the platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}