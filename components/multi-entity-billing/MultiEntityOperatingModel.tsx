import React from "react";

const rows = [
  {
    layer: "Organization / group context",
    question: "What broader structure is being coordinated?",
    representation:
      "Optional operating context — not legal or consolidation authority",
  },
  {
    layer: "Billing entity",
    question: "Which issuing or operating scope owns the action?",
    representation: "Stable entity ID, lifecycle, source and availability",
  },
  {
    layer: "Customer relationship",
    question: "Which entity may bill which customer?",
    representation: "A typed relationship with an effective period",
  },
  {
    layer: "Billing profile",
    question:
      "Which terms, currency, delivery and document settings apply?",
    representation:
      "An entity-scoped profile with version and effective date",
  },
  {
    layer: "Document issuer",
    question: "Which entity identity, series and template is used?",
    representation: "Issuer profile, document series and locale context",
  },
  {
    layer: "Workflow",
    question: "Which entity-scoped policy or automation applies?",
    representation: "Entity resolution before action",
  },
  {
    layer: "Receivables & payment",
    question: "Where does balance and allocation evidence belong?",
    representation: "Entity-authoritative records",
  },
  {
    layer: "Integration",
    question: "Which external system supplies or receives context?",
    representation:
      "Entity, object and field mapping, direction and health",
  },
  {
    layer: "Evidence",
    question: "Why is this state current?",
    representation:
      "Source, effective date, history, approvals and conflicts",
  },
];

export default function MultiEntityOperatingModel() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

          xl:px-24
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-9

            sm:gap-10

            lg:gap-11
          "
        >
          {/* HEADING CONTENT */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-1
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 bg-blue-600 opacity-40" />

              <span
                className="
                  text-center
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Multi-entity operating model
              </span>

              <span className="h-px w-4 bg-blue-600 opacity-40" />
            </div>

            {/* TITLE */}
            <h2
              className="
                !m-0
                w-full
                text-center
                text-[30px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[34px]

                md:text-[38px]

                lg:text-4xl
                lg:leading-10
              "
            >
              Shared control, not shared authority.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              A central control plane can summarize state across entities,
              but each object and action must still resolve the entity,
              source, permission and policy that actually govern it.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* ================= DESKTOP ================= */}
            <div className="hidden md:block">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[240px_minmax(0,464px)_minmax(0,1fr)]
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                "
              >
                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-blue-600
                    "
                  >
                    Layer
                  </span>
                </div>

                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-blue-600
                    "
                  >
                    Question
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-blue-600
                    "
                  >
                    Required representation
                  </span>
                </div>
              </div>

              {/* TABLE BODY */}
              {rows.map((row, index) => (
                <div
                  key={row.layer}
                  className={`
                    grid
                    grid-cols-[240px_minmax(0,464px)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* LAYER */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-slate-900
                      "
                    >
                      {row.layer}
                    </p>
                  </div>

                  {/* QUESTION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.question}
                    </p>
                  </div>

                  {/* REPRESENTATION */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.representation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= MOBILE ================= */}
            <div className="md:hidden">
              <div
                className="
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                  px-4
                  py-3

                  sm:px-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.1em]
                    text-blue-600

                    sm:text-xs
                  "
                >
                  Operating model layers
                </span>
              </div>

              {rows.map((row, index) => (
                <div
                  key={row.layer}
                  className={`
                    flex
                    flex-col
                    gap-4
                    px-4
                    py-5

                    sm:px-5
                    sm:py-6

                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* LAYER */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-slate-900

                        sm:text-base
                      "
                    >
                      {row.layer}
                    </p>
                  </div>

                  {/* QUESTION */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-blue-600
                      "
                    >
                      Question
                    </span>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.question}
                    </p>
                  </div>

                  {/* REPRESENTATION */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-blue-600
                      "
                    >
                      Required representation
                    </span>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.representation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
