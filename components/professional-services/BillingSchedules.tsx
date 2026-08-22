import type { ReactNode } from "react";

type StateType = "warning" | "success" | "neutral" | "error" | "info";

type Schedule = {
  id: string;
  reference: string;
  basis: string;
  nextEvent: string;
  state: string;
  stateType: StateType;
  detail: string;
  owner: string;
};

const schedules: Schedule[] = [
  {
    id: "SCH-0288",
    reference: "CLT-118 · ENG-1204",
    basis: "Milestone",
    nextEvent: "On stage 3 evidence",
    state: "Needs evidence",
    stateType: "warning",
    detail:
      "Trigger references source evidence, not a Billing decision",
    owner: "Delivery owner",
  },
  {
    id: "SCH-0311",
    reference: "CLT-266",
    basis: "Recurring service",
    nextEvent: "01 Sep 2026",
    state: "Changed",
    stateType: "warning",
    detail:
      "Version 3 pending review; prior history preserved",
    owner: "Billing Ops",
  },
  {
    id: "SCH-0324",
    reference: "CLT-204 · ENG-1180",
    basis: "Fixed, staged",
    nextEvent: "15 Sep 2026",
    state: "Active",
    stateType: "success",
    detail: "",
    owner: "Billing Ops",
  },
  {
    id: "SCH-0330",
    reference: "CLT-330 · ENG-1152",
    basis: "Retainer",
    nextEvent: "—",
    state: "Paused",
    stateType: "neutral",
    detail:
      "Reason recorded; 2 pending events held",
    owner: "Billing Ops",
  },
  {
    id: "SCH-0341",
    reference: "CLT-471",
    basis: "Recurring service",
    nextEvent: "Retry pending",
    state: "Failed",
    stateType: "error",
    detail: "Generation failed 15 Aug",
    owner: "Billing Ops",
  },
  {
    id: "SCH-0355",
    reference: "CLT-092",
    basis: "Fixed",
    nextEvent: "Unconfirmed",
    state: "Unknown",
    stateType: "info",
    detail:
      "Check authoritative state before retry",
    owner: "Billing Ops",
  },
];

const stateStyles: Record<StateType, string> = {
  warning:
    "border-orange-200 bg-orange-50 text-orange-700",
  success:
    "border-green-200 bg-green-50 text-green-700",
  neutral:
    "border-gray-200 bg-gray-100 text-slate-600",
  error:
    "border-red-200 bg-red-50 text-red-700",
  info:
    "border-blue-200 bg-blue-50 text-blue-700",
};

export default function BillingSchedules() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">

        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Project, milestone &amp; service schedules
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Billing schedules — not project schedules.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          A schedule triggers billing activity. It does not plan work,
          allocate people, capture time, or certify that a milestone
          was delivered.
        </p>

        {/* Schedule Table */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">

          {/* Table Description */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm leading-5 text-slate-600">
              Synthetic schedule view across billing bases.
              Paused, failed and unknown states are shown as they are.
            </p>
          </div>

          {/* Horizontal scroll on mobile */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">

                  <th className="w-[180px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Schedule
                  </th>

                  <th className="w-[180px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Basis
                  </th>

                  <th className="w-[190px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Next event
                  </th>

                  <th className="min-w-[350px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    State
                  </th>

                  <th className="w-[160px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Owner
                  </th>

                </tr>
              </thead>

              <tbody>
                {schedules.map((schedule) => (
                  <tr
                    key={schedule.id}
                    className="align-top"
                  >
                    {/* Schedule */}
                    <td className="border-b border-gray-200 px-4 py-4">
                      <p className="text-sm font-semibold leading-5 text-slate-900">
                        {schedule.id}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {schedule.reference}
                      </p>
                    </td>

                    {/* Basis */}
                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {schedule.basis}
                    </td>

                    {/* Next Event */}
                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {schedule.nextEvent}
                    </td>

                    {/* State */}
                    <td className="border-b border-gray-200 px-4 py-4">
                      <span
                        className={`inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${
                          stateStyles[schedule.stateType]
                        }`}
                      >
                        {schedule.state}
                      </span>

                      {schedule.detail && (
                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          {schedule.detail}
                        </p>
                      )}
                    </td>

                    {/* Owner */}
                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {schedule.owner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-2 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Milestone Evidence */}
          <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-6 sm:px-6">
            <h3 className="text-base font-bold leading-7 text-slate-900">
              Milestone evidence contract
            </h3>

            <p className="mt-3 text-sm leading-5 text-slate-600">
              A milestone trigger references evidence produced by your
              delivery process. Billing records which milestone reference
              and evidence state drove a billing event, and who approved
              it for billing — but it never certifies that work was
              completed. The states are Not reached, Ready for review,
              Approved for billing, Rejected or needs correction, and
              Unknown.
            </p>
          </div>

          {/* Terminology Boundary */}
          <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:px-6">
            <h3 className="text-base font-bold leading-7 text-slate-900">
              Terminology boundary
            </h3>

            <p className="mt-3 text-sm leading-5 text-slate-600">
              This is repeatable and staged billing coordination through{" "}
              <span className="font-semibold text-blue-600">
                Billing Schedules
              </span>
              . It is not project scheduling, resource scheduling,
              time capture, or advanced subscription management, and none
              of those terms is used to describe it.
            </p>

            <p className="mt-4 text-sm leading-5 text-slate-600">
              A duplicate milestone event is deduplicated through the
              source event reference, so a repeated trigger does not
              produce a second invoice.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}