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
    meaning:
      "New due occurrences do not proceed, according to policy.",
    treatment:
      "Show reason, actor and treatment of pending or in-flight runs.",
  },
  {
    state: "Blocked / degraded",
    tone: "orange",
    meaning:
      "A dependency or configuration prevents normal operation.",
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
    meaning:
      "Administratively ended; cannot create new runs.",
    treatment:
      "Preserve definitions, occurrences and evidence.",
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
      "bg-color-grey-97-2 text-color-azure-35 outline-zinc-200",
    red:
      "bg-color-grey-95-7 text-color-red-40 outline-color-red-87",
    orange:
      "bg-color-grey-94-3 text-color-orange-37 outline-color-orange-81-2",
    blue:
      "bg-color-grey-97-2 text-color-azure-44 outline-color-azure-86",
    info:
      "bg-color-grey-97-3 text-color-blue-50 outline-color-grey-92-2",
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
      className={`inline-flex min-h-7 items-center gap-2 rounded-full px-2.5 outline outline-1 outline-offset-[-1px] ${styles[tone]}`}
    >
      <span className="text-xs font-medium leading-3">
        {symbols[tone]}
      </span>

      <span className="text-[10.2px] font-medium uppercase leading-4 tracking-wide">
        {state}
      </span>
    </span>
  );
}

function TableHeader({ children }: { children: ReactNode }) {
  return (
    <span className="text-[9.8px] font-medium uppercase leading-4 tracking-wide text-color-azure-55">
      {children}
    </span>
  );
}

export default function ChangeAndPause() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1220px] px-6 py-16 sm:px-8 lg:px-12 lg:pt-24">

        {/* HERO */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex-1">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                Change and pause
              </span>
            </div>

            <h2 className="max-w-[638px] text-4xl font-medium leading-tight text-sky-950 sm:text-5xl sm:leading-[53.82px]">
              Pause and revise
              <br />
              schedules without
              <br />
              rewriting history.
            </h2>
          </div>

          <div className="flex-1 lg:max-w-[529px]">
            <p className="text-base font-normal leading-8 text-color-azure-35">
              Changing a live schedule is a versioned, attributable act.
              Pausing is not cancelling, and retiring is not deleting.
            </p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-color-white-solid px-6 py-6 outline outline-1 outline-offset-[-1px] outline-zinc-200"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-color-cyan-42 to-color-azure-51">
                <span className="text-[9.9px] font-semibold leading-4 text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="pt-3 text-base font-semibold leading-5 text-sky-950">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-5 text-color-azure-35">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* SCHEDULE STATES */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-color-white-solid outline outline-1 outline-offset-[-1px] outline-zinc-200">

          <div className="border-b border-zinc-200 bg-color-grey-97-2 px-5 py-4">
            <span className="text-[10.1px] uppercase leading-4 tracking-wide text-color-azure-35">
              Schedule states and required treatment
            </span>
          </div>

          {/* TABLE HEADER */}
          <div className="hidden grid-cols-[224px_minmax(0,1fr)_minmax(0,1.15fr)] bg-color-grey-99 md:grid">
            <div className="border-b border-zinc-200 px-3.5 py-2">
              <TableHeader>State</TableHeader>
            </div>

            <div className="border-b border-zinc-200 px-3.5 py-2">
              <TableHeader>Meaning</TableHeader>
            </div>

            <div className="border-b border-zinc-200 px-3.5 py-2">
              <TableHeader>Required treatment</TableHeader>
            </div>
          </div>

          {/* TABLE ROWS */}
          {scheduleStates.map((item) => (
            <div
              key={item.state}
              className="grid grid-cols-1 border-b border-color-grey-93-4 last:border-b-0 md:grid-cols-[224px_minmax(0,1fr)_minmax(0,1.15fr)]"
            >
              <div className="px-3.5 py-3">
                <StateBadge
                  state={item.state}
                  tone={item.tone as StateTone}
                />
              </div>

              <div className="px-3.5 py-3">
                <p className="text-sm leading-5 text-sky-950">
                  {item.meaning}
                </p>
              </div>

              <div className="px-3.5 py-3">
                <p className="text-sm leading-5 text-sky-950">
                  {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CHANGE BOUNDARY */}
        <div className="mt-12 rounded-tr-2xl rounded-br-2xl border-l-[3px] border-color-azure-51 bg-color-grey-97-2 px-7 py-8">
          <div className="text-[9.9px] uppercase leading-4 tracking-wide text-color-azure-44">
            Change boundary
          </div>

          <p className="mt-2 max-w-[761px] text-base leading-7 text-sky-950">
            Pause is not cancellation of issued documents or completed runs,
            and the two are never conflated. Retroactive changes require
            explicit correction or backfill treatment with its own approval.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#roles-and-approvals"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-lg
              !bg-sky-950
              px-5
              py-2.5
              text-base
              font-normal
              leading-6
              !text-white
              no-underline
              outline-none
              transition-opacity
              hover:!bg-sky-950
              hover:!text-white
              hover:opacity-90
              focus:!bg-sky-950
              focus:!text-white
            "
          >
            Explore Roles &amp; Approvals
          </Link>
        </div>

      </div>
    </section>
  );
}