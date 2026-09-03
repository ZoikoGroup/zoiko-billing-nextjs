"use client";

const states = [
  {
    state: "Planned",
    stateType: "planned",
    behavior:
      "Explain that it is not currently production-available; optional consent-based notification if a program exists.",
    prohibited:
      "Any date, quarter, launch month, wait time, guaranteed roadmap, pre-order or signup implication",
  },
  {
    state: "Not available",
    stateType: "unavailable",
    behavior:
      "State that there is no current offering for the scope; offer Explore Platform or an approved request route.",
    prohibited:
      'Any "Book a demo" or "Create account" copy that implies market support',
  },
  {
    state: "No public record",
    stateType: "record",
    behavior:
      "Say the public registry cannot confirm; offer another jurisdiction or an approved contact route.",
    prohibited: "Labelling it Not available automatically",
  },
  {
    state: "Needs review",
    stateType: "review",
    behavior:
      "An internal safety state — suppress the positive claim and route to governed review.",
    prohibited: "Exposing a stale Available value for convenience",
  },
];

function StateBadge({
  state,
  type,
}: {
  state: string;
  type: string;
}) {
  const styles: Record<string, string> = {
    planned:
      "bg-[#f1f3f5] border-[#dde2e7] text-[#3979b5] before:bg-[#3979b5]",
    unavailable:
      "bg-[#f7f0f1] border-[#e6c6cb] text-[#c43f4b] before:bg-[#c43f4b]",
    record:
      "bg-[#f3f4f5] border-[#d9dde1] text-[#526273] before:bg-[#526273]",
    review:
      "bg-[#f5f6f7] border-[#dee1e4] text-[#64748b] before:bg-[#64748b]",
  };

  return (
    <span
      className={`
        inline-flex
        min-h-6
        max-w-full
        items-center
        rounded-md
        border
        px-2.5
        py-1
        text-xs
        font-semibold
        leading-4
        ${styles[type]}
        before:mr-2
        before:h-1.5
        before:w-1.5
        before:shrink-0
        before:rounded-sm
      `}
    >
      {state}
    </span>
  );
}

export default function PlannedStates() {
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
              max-w-[662px]
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
                Planned, Not available &amp; request states
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
              Planned is an intent, never a date.
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
              No quarter, launch month, wait time, guaranteed roadmap,
              pre-order or signup implication appears against a Planned
              market.
            </p>
          </div>

          {/* TABLE */}
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
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
                    Required behavior
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
                    Prohibited
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {states.map((item, index) => (
                <div
                  key={item.state}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== states.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="px-4 py-3.5">
                    <StateBadge
                      state={item.state}
                      type={item.stateType}
                    />
                  </div>

                  {/* REQUIRED BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.behavior}
                    </span>
                  </div>

                  {/* PROHIBITED */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.prohibited}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {states.map((item, index) => (
                <div
                  key={item.state}
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
                      <StateBadge
                        state={item.state}
                        type={item.stateType}
                      />
                    </div>
                  </div>

                  {/* REQUIRED BEHAVIOR */}
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
                      Required behavior
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
                      {item.behavior}
                    </p>
                  </div>

                  {/* PROHIBITED */}
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
                      Prohibited
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
                      {item.prohibited}
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