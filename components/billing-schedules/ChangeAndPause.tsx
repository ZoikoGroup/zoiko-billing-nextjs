import Link from "next/link";
import type { ReactNode } from "react";

const steps = [
  {
    number: "01",
    title: "Draft a new version",
    description:
      "Prepare the revision with an explicit change reason attached to it.",
  },
  {
    number: "02",
    title: "Validate the impact",
    description:
      "Check affected future occurrences and any dependencies before activation.",
  },
  {
    number: "03",
    title: "Require approval",
    description:
      "Sensitive timing or financial impact routes for an authorized decision.",
  },
  {
    number: "04",
    title: "Choose the effective date",
    description:
      "Decide when it applies, and how already-due or in-flight runs are treated.",
  },
  {
    number: "05",
    title: "Pause without erasing",
    description:
      "Stop new occurrences while completed runs and issued documents stand.",
  },
  {
    number: "06",
    title: "Resume, expire or retire",
    description:
      "Bring it back, let it complete, or end it administratively per policy.",
  },
];

const scheduleStates = [
  {
    state: "Draft",
    tone: "neutral",
    meaning: "Being prepared and cannot create occurrences.",
    treatment: "Edit, validate or discard according to permission.",
  },
  {
    state: "Validation failed",
    tone: "red",
    meaning: "Timing, scope, rule, timezone or dependency is invalid.",
    treatment: "Block activation and identify the exact issues.",
  },
  {
    state: "Pending approval",
    tone: "orange",
    meaning: "A sensitive schedule or change awaits authorized review.",
    treatment: "Show version, effect, reviewer and due time.",
  },
  {
    state: "Scheduled / active",
    tone: "blue",
    meaning: "The current version may create eligible occurrences.",
    treatment: "Show next run, timezone, owner and version.",
  },
  {
    state: "Paused",
    tone: "neutral",
    meaning: "New due occurrences do not proceed, according to policy.",
    treatment:
      "Show reason, actor and treatment of pending or in-flight runs.",
  },
  {
    state: "Blocked / degraded",
    tone: "orange",
    meaning: "A dependency or configuration prevents normal operation.",
    treatment: "Show affected schedules and the recovery route.",
  },
  {
    state: "Completed / expired",
    tone: "info",
    meaning: "No future occurrences remain under the definition.",
    treatment: "Retain history and explain the final condition.",
  },
  {
    state: "Retired",
    tone: "neutral",
    meaning: "Administratively ended; cannot create new runs.",
    treatment: "Preserve definitions, occurrences and evidence.",
  },
];

type StateTone = "neutral" | "red" | "orange" | "blue" | "info";

function StateBadge({
  state,
  tone,
}: {
  state: string;
  tone: StateTone;
}) {
  const styles: Record<StateTone, string> = {
    neutral:
      "bg-[#f7f8fa] text-[#5d7192] outline-[#dfe5ee]",
    red:
      "bg-[#faf5f5] text-[#a34b4b] outline-[#eadada]",
    orange:
      "bg-[#fbf8f3] text-[#a46b2d] outline-[#eadfcd]",
    blue:
      "bg-[#f7f8fa] text-[#4d709d] outline-[#d9e3ef]",
    info:
      "bg-[#f7f8fa] text-[#466b9b] outline-[#dfe5ee]",
  };

  const symbols: Record<StateTone, string> = {
    neutral: "–",
    red: "!",
    orange: "•",
    blue: "✓",
    info: "i",
  };

  return (
    <span
      className={`
        inline-flex
        min-h-7
        items-center
        gap-2
        rounded-full
        px-2.5
        outline
        outline-1
        outline-offset-[-1px]
        ${styles[tone]}
      `}
    >
      <span className="text-xs font-medium leading-3">
        {symbols[tone]}
      </span>

      <span className="text-[10px] font-medium uppercase leading-4 tracking-wide">
        {state}
      </span>
    </span>
  );
}

function TableHeader({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
      {children}
    </span>
  );
}

export default function ChangeAndPause() {
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
                Change and pause
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
              Pause and revise schedules without rewriting history.
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
              Changing a live schedule is a versioned, attributable act.
              Pausing is not cancelling, and retiring is not deleting.
            </p>
          </div>

          {/* PROCESS */}
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
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-6
                  py-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.035)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                  "
                >
                  <span className="text-[10px] font-semibold leading-4 text-white">
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    pt-3
                    text-base
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* SCHEDULE STATES */}
          <div
            className="
              mt-10
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:mt-12
            "
          >
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4
              "
            >
              <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                Schedule states and required treatment
              </span>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[224px_minmax(0,1fr)_minmax(0,1.15fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <TableHeader>State</TableHeader>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <TableHeader>Meaning</TableHeader>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <TableHeader>Required treatment</TableHeader>
                </div>
              </div>

              {/* ROWS */}
              {scheduleStates.map((item, index) => (
                <div
                  key={item.state}
                  className={`
                    grid
                    grid-cols-[224px_minmax(0,1fr)_minmax(0,1.15fr)]
                    ${
                      index !== scheduleStates.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="px-4 py-3.5">
                    <StateBadge
                      state={item.state}
                      tone={item.tone as StateTone}
                    />
                  </div>

                  {/* MEANING */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.meaning}
                    </span>
                  </div>

                  {/* TREATMENT */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.treatment}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {scheduleStates.map((item, index) => (
                <div
                  key={item.state}
                  className={`
                    p-5
                    ${
                      index !== scheduleStates.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      State
                    </p>

                    <div className="mt-2">
                      <StateBadge
                        state={item.state}
                        tone={item.tone as StateTone}
                      />
                    </div>
                  </div>

                  {/* MEANING */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Meaning
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.meaning}
                    </p>
                  </div>

                  {/* REQUIRED TREATMENT */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Required treatment
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.treatment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CHANGE BOUNDARY */}
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
            <div className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
              Change boundary
            </div>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-[15px]
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Pause is not cancellation of issued documents or completed
              runs, and the two are never conflated. Retroactive changes
              require explicit correction or backfill treatment with its own
              approval.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/roles-and-approvals"
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
                hover:!bg-[#091127]
                hover:!text-white
                hover:opacity-90
                focus:!bg-[#091127]
                focus:!text-white
              "
            >
              Explore Roles &amp; Approvals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}