"use client";

const schedules = [
  {
    id: "SCH-0142",
    frequency: "Monthly, effective to 31 Dec 2026",
    scope: "6 customers",
    nextEvent: "01 Sep 2026",
    state: "Active",
    stateType: "green",
    owner: "Billing Admin",
  },
  {
    id: "SCH-0158",
    frequency: "Monthly",
    scope: "2 customers",
    nextEvent: "01 Sep 2026",
    state: "Needs input",
    stateType: "orange",
    stateDetail:
      "Customer billing email missing — event will be blocked",
    owner: "Billing Admin",
  },
  {
    id: "SCH-0163",
    frequency: "Quarterly",
    scope: "3 customers",
    nextEvent: "—",
    state: "Paused",
    stateType: "gray",
    stateDetail:
      "Reason recorded; 2 events held; impact shown before resuming",
    owner: "Owner",
  },
  {
    id: "SCH-0171",
    frequency: "Monthly",
    scope: "1 customer",
    nextEvent: "15 Sep 2026",
    state: "Changed",
    stateType: "orange",
    stateDetail:
      "Version 2 effective 01 Sep; prior history preserved",
    owner: "Billing Admin",
  },
  {
    id: "SCH-0180",
    frequency: "Monthly",
    scope: "1 customer",
    nextEvent: "Retry pending",
    state: "Failed",
    stateType: "red",
    stateDetail:
      "Generation failed 15 Aug; failed event preserved",
    owner: "Billing Admin",
  },
  {
    id: "SCH-0188",
    frequency: "Monthly",
    scope: "1 customer",
    nextEvent: "Unconfirmed",
    state: "Unknown",
    stateType: "blue",
    stateDetail:
      "Check the authoritative state before retrying",
    owner: "Billing Admin",
  },
];

const badgeStyles = {
  green: {
    wrapper:
      "border-green-200 bg-gray-100 text-green-700",
    dot: "bg-green-600",
  },
  orange: {
    wrapper:
      "border-orange-200 bg-gray-100 text-orange-600",
    dot: "bg-orange-500",
  },
  gray: {
    wrapper:
      "border-gray-200 bg-gray-100 text-gray-500",
    dot: "bg-gray-500",
  },
  red: {
    wrapper:
      "border-red-200 bg-gray-100 text-red-600",
    dot: "bg-red-500",
  },
  blue: {
    wrapper:
      "border-gray-300 bg-gray-100 text-blue-600",
    dot: "bg-blue-500",
  },
};

function StatusBadge({
  state,
  type,
}: {
  state: string;
  type: keyof typeof badgeStyles;
}) {
  const styles = badgeStyles[type];

  return (
    <span
      className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${styles.wrapper}`}
    >
      <span
        className={`mr-2 h-1.5 w-1.5 rounded-sm opacity-80 ${styles.dot}`}
      />

      {state}
    </span>
  );
}

export default function Schedules() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Schedules &amp; repeatable billing
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            Set up repeat billing once — and still see what it is about to do.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Repeat billing removes retyping, not oversight. Each schedule
            shows its scope, next event, owner and current state.
          </p>
        </div>

        {/* Schedule table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop / Tablet */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[23%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Schedule
                  </th>

                  <th className="w-[12%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Scope
                  </th>

                  <th className="w-[13%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Next event
                  </th>

                  <th className="w-[40%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    State
                  </th>

                  <th className="w-[12%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Owner
                  </th>
                </tr>
              </thead>

              <tbody>
                {schedules.map((schedule, index) => (
                  <tr key={schedule.id}>
                    {/* Schedule */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== schedules.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold leading-5 text-gray-900">
                          {schedule.id}
                        </span>

                        <span className="text-xs font-normal leading-5 text-gray-500">
                          {schedule.frequency}
                        </span>
                      </div>
                    </td>

                    {/* Scope */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== schedules.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-normal leading-5 text-gray-600">
                        {schedule.scope}
                      </span>
                    </td>

                    {/* Next event */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== schedules.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-normal leading-5 text-gray-600">
                        {schedule.nextEvent}
                      </span>
                    </td>

                    {/* State */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== schedules.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col items-start gap-1">
                        <StatusBadge
                          state={schedule.state}
                          type={schedule.stateType as keyof typeof badgeStyles}
                        />

                        {schedule.stateDetail && (
                          <span className="text-xs font-normal leading-5 text-gray-500">
                            {schedule.stateDetail}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Owner */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== schedules.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-normal leading-5 text-gray-600">
                        {schedule.owner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:hidden">
            {schedules.map((schedule, index) => (
              <div
                key={schedule.id}
                className={`flex flex-col gap-4 p-4 ${
                  index !== schedules.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Schedule */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Schedule
                  </p>

                  <p className="text-sm font-semibold leading-5 text-gray-900">
                    {schedule.id}
                  </p>

                  <p className="text-xs leading-5 text-gray-500">
                    {schedule.frequency}
                  </p>
                </div>

                {/* Scope */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Scope
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {schedule.scope}
                  </p>
                </div>

                {/* Next event */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Next event
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {schedule.nextEvent}
                  </p>
                </div>

                {/* State */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    State
                  </p>

                  <div className="flex flex-col items-start gap-1">
                    <StatusBadge
                      state={schedule.state}
                      type={
                        schedule.stateType as keyof typeof badgeStyles
                      }
                    />

                    {schedule.stateDetail && (
                      <p className="text-xs leading-5 text-gray-500">
                        {schedule.stateDetail}
                      </p>
                    )}
                  </div>
                </div>

                {/* Owner */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Owner
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {schedule.owner}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}