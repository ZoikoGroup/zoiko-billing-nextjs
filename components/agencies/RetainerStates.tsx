"use client";

const states = [
  {
    label: "Not used",
    type: "neutral",
    meaning: "No retainer model exists for this client or engagement.",
    boundary: "No empty retainer panel is rendered",
  },
  {
    label: "Needs setup",
    type: "orange",
    meaning:
      "The commercial model indicates a retainer but configuration is incomplete.",
    boundary: "No available amount is claimed",
  },
  {
    label: "Available",
    type: "green",
    meaning:
      "Shown only where Billing holds an authoritative current state.",
    boundary: "Not a custody, trust or escrow claim",
  },
  {
    label: "Partially applied",
    type: "approval",
    meaning: "A supported application relationship exists.",
    boundary: "Invoice and charge links shown explicitly",
  },
  {
    label: "Fully applied",
    type: "green",
    meaning: "The available supported amount is fully referenced.",
    boundary: "No accounting or revenue conclusion follows",
  },
  {
    label: "Adjustment pending",
    type: "orange",
    meaning: "An authorized change is under review.",
    boundary: "Prior state and history retained",
  },
  {
    label: "Refund or release pending",
    type: "orange",
    meaning: "Only where a supported commercial workflow exists.",
    boundary: "No legal entitlement claim",
  },
  {
    label: "Unknown",
    type: "blue",
    meaning: "The final state cannot be confirmed.",
    boundary: "Reconcile before reapplying — never apply twice",
  },
];

const stateStyles = {
  neutral: {
    wrapper: "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]",
    dot: "bg-[#7890b2]",
  },
  orange: {
    wrapper: "border-[#f1dfc7] bg-[#fff8ed] text-[#9a681f]",
    dot: "bg-[#c58a38]",
  },
  green: {
    wrapper: "border-[#cfe8d5] bg-[#f1faf3] text-[#3b7a4a]",
    dot: "bg-[#4d9960]",
  },
  approval: {
    wrapper: "border-[#dfe5ee] bg-[#f1f3f6] text-[#5d7192]",
    dot: "border-2 border-[#7890b2] bg-transparent",
  },
  blue: {
    wrapper: "border-[#dce6f5] bg-[#f4f8fd] text-[#58759d]",
    dot: "bg-[#58759d]",
  },
};

export default function RetainerStates() {
  return (
    <section className="w-full bg-white">
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
            items-start
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
              max-w-[900px]
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="flex h-4 items-center gap-3">
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
                Retainers, deposits &amp; pre-billed amounts
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
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
              An agency retainer is a commercial arrangement you define. This
              is only the billing record.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[686px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Where a retainer or pre-billed model is configured and supported,
              Zoiko Billing tracks the record, its application to invoices, and
              the history of both.
            </p>
          </div>

          {/* TABLE CARD */}
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
            {/* INTRO */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4

                sm:px-6
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Retainer and pre-billed states. Where no model is configured,
                no retainer interface is shown at all.
              </p>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[220px_minmax(0,1fr)_300px]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    State
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Meaning
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {states.map((state, index) => {
                const styles =
                  stateStyles[state.type as keyof typeof stateStyles];

                return (
                  <div
                    key={state.label}
                    className={`
                      grid
                      grid-cols-[220px_minmax(0,1fr)_300px]
                      ${
                        index !== states.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* STATE */}
                    <div className="px-4 py-3.5">
                      <span
                        className={`
                          inline-flex
                          min-h-6
                          items-center
                          rounded-md
                          border
                          px-2.5
                          py-0.5
                          text-xs
                          font-semibold
                          leading-4
                          ${styles.wrapper}
                        `}
                      >
                        <span
                          className={`
                            mr-2
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-sm
                            ${styles.dot}
                          `}
                        />

                        {state.label}
                      </span>
                    </div>

                    {/* MEANING */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {state.meaning}
                      </span>
                    </div>

                    {/* BOUNDARY */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {state.boundary}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {states.map((state, index) => {
                const styles =
                  stateStyles[state.type as keyof typeof stateStyles];

                return (
                  <div
                    key={state.label}
                    className={`
                      p-5
                      ${
                        index !== states.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* STATE */}
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
                        State
                      </p>

                      <div className="mt-1.5">
                        <span
                          className={`
                            inline-flex
                            min-h-6
                            items-center
                            rounded-md
                            border
                            px-2.5
                            py-0.5
                            text-xs
                            font-semibold
                            leading-4
                            ${styles.wrapper}
                          `}
                        >
                          <span
                            className={`
                              mr-2
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-sm
                              ${styles.dot}
                            `}
                          />

                          {state.label}
                        </span>
                      </div>
                    </div>

                    {/* MEANING */}
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
                        Meaning
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1.5
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {state.meaning}
                      </p>
                    </div>

                    {/* BOUNDARY */}
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
                        Boundary
                      </p>

                      <p
                        className="
                          !m-0
                          mt-1.5
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {state.boundary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}