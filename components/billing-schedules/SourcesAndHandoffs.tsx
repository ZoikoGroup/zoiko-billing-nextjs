import Link from "next/link";

const integrationItems = [
  {
    title: "Verified categories only",
    description:
      "CRM, commerce, contract, order, usage, ERP, payment and custom integrations, described only where verified.",
  },
  {
    title: "Inbound definitions and events",
    description:
      "Schedule definitions or source events arriving from an approved system.",
  },
  {
    title: "Outbound events",
    description:
      "Run, document and exception events emitted to connected systems.",
  },
  {
    title: "Duplicate and ordering",
    description:
      "Duplicate handling, event ordering and retry behaviour are all defined.",
  },
  {
    title: "Source ownership",
    description:
      "Which system owns a schedule field, and what happens when sources disagree.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved records or cross-product handoffs where enabled.",
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
          "
        >
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
              max-w-[700px]
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
              Where schedules come from, and what they emit.
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
              Approved systems can define schedules or supply the events
              behind them, and can receive run, document and exception events
              in return.
            </p>
          </div>

          {/* =========================================================
              INTEGRATION ITEMS
          ========================================================= */}
          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-3

              sm:mt-12
              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {integrationItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-6
                  py-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.035)]
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

          {/* =========================================================
              CONNECTOR BOUNDARY
          ========================================================= */}
          <div
            className="
              mt-10
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-6
              py-7
              shadow-[0_4px_14px_rgba(15,23,42,0.035)]

              sm:mt-12
              sm:px-7
              sm:py-8
            "
          >
            <div
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
            </div>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Not every connector creates, updates or executes schedules, and
              not in real time. Behaviour is stated per connector in the
              governed integration registry. Zoiko Billing remains
              independently deployable.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}
          <div
            className="
              mt-8
              flex
              w-full
              justify-center
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
                gap-3

                sm:flex-row
                sm:flex-wrap
                sm:justify-center
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
                  !bg-[#091127]
                  px-5
                  py-2.5
                  text-base
                  font-normal
                  leading-6
                  !text-white
                  no-underline
                  outline-none
                  transition-opacity
                  hover:opacity-90
                  focus:outline-none
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
                  gap-2
                  px-0
                  py-2.5
                  text-base
                  font-normal
                  leading-6
                  !text-[#5d7192]
                  no-underline
                  transition-colors
                  hover:!text-[#091127]
                "
              >
                Compare deployment options

                <span
                  aria-hidden="true"
                  className="text-base font-bold"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}