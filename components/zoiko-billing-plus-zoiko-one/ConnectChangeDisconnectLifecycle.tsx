"use client";

const lifecycleStages = [
  {
    number: "1",
    title: "Evaluate",
    description:
      "Choose standalone or connected, and name the outcomes you want.",
  },
  {
    number: "2",
    title: "Confirm availability",
    description:
      "Verify commercial and technical availability for both products.",
  },
  {
    number: "3",
    title: "Authorize",
    description:
      "Confirm organization and tenant authority, and which administrators are permitted.",
  },
  {
    number: "4",
    title: "Define scope",
    description:
      "Select data categories, workflows, mappings, direction and environments.",
  },
  {
    number: "5",
    title: "Prepare & map",
    description:
      "Configure mappings, permissions, privacy, support and rollback.",
  },
  {
    number: "6",
    title: "Test",
    description:
      "Use the approved non-production method where one exists, and evidence the expected behavior.",
  },
  {
    number: "7",
    title: "Activate",
    description:
      "Versioned, controlled enablement with an authoritative outcome.",
  },
  {
    number: "8",
    title: "Observe",
    description:
      "Monitor health, exceptions, freshness, permissions and evidence.",
  },
  {
    number: "9",
    title: "Change",
    description:
      "Version and revalidate any mapping, workflow or authority change.",
  },
  {
    number: "10",
    title: "Pause & recover",
    description:
      "Safe pause, bounded retry, and reconciliation.",
  },
  {
    number: "11",
    title: "Disconnect",
    description:
      "Review dependencies, revoke credentials and authorization, stop flows.",
  },
  {
    number: "12",
    title: "Dispose or retain",
    description:
      "Apply retention, export, deletion and orphaned-workflow policy. Disconnect does not imply immediate deletion.",
  },
  {
    number: "13",
    title: "Reconnect",
    description:
      "Treated as fresh authorization and revalidation — never automatic restoration of stale permissions.",
  },
];

const setupSteps = [
  "Select relationship",
  "Resolve tenants",
  "Authorize",
  "Choose scope",
  "Map",
  "Permissions",
  "Privacy review",
  "Test",
  "Activate",
  "Verify",
];

export default function ConnectChangeDisconnectLifecycle() {
  return (
    <section className="w-full border-t border-gray-200 px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3.5">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Connect, change &amp; disconnect lifecycle
          </span>

          <span className="h-px w-6 shrink-0 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[1200px] text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Disconnecting is not deleting, and reconnecting is not restoring.
        </h2>

        {/* Description */}
        <p className="max-w-[700px] text-sm leading-6 text-slate-500 sm:text-base">
          Thirteen stages, all reversible by design. Migration is not assumed —
          you may connect existing Zoiko Billing without replacing any Billing
          data.
        </p>

        {/* Lifecycle stages */}
        <div className="mt-3 grid grid-cols-1 gap-x-6 lg:grid-cols-2">
          {lifecycleStages.map((stage, index) => (
            <div
              key={stage.number}
              className={`flex min-h-[80px] items-start gap-3.5 py-3.5 ${
                index !== 0 ? "border-t border-gray-200" : ""
              }`}
            >
              {/* Number */}
              <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
                <span className="text-xs font-bold leading-5 text-slate-700">
                  {stage.number}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">
                  {stage.title}
                </h3>

                <p className="mt-0.5 text-xs leading-5 text-slate-500">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connection setup */}
        <div className="mt-2 rounded-2xl border border-gray-200 bg-white px-5 py-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:px-6 sm:py-9">
          <h3 className="text-base font-bold leading-7 text-slate-900">
            Connection setup — ten steps
          </h3>

          <p className="mt-1 text-sm leading-5 text-slate-500">
            Scope defaults to the minimum necessary. There is no &quot;connect
            everything&quot; shortcut.
          </p>

          {/* Step pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {setupSteps.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === 4;
              const isCompleted = stepNumber < 4;

              return (
                <div
                  key={step}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 ${
                    isActive
                      ? "border-blue-600 bg-blue-600"
                      : isCompleted
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-gray-200 bg-white"
                  }`}
                >
                  <span
                    className={`text-xs font-extrabold leading-4 ${
                      isActive
                        ? "text-white"
                        : isCompleted
                          ? "text-blue-600"
                          : "text-blue-600"
                    }`}
                  >
                    {stepNumber}
                  </span>

                  <span
                    className={`text-xs font-semibold leading-5 ${
                      isActive
                        ? "text-white"
                        : isCompleted
                          ? "text-emerald-700"
                          : "text-slate-600"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Step 4 of 10. Each step is keyboard operable, reports its state
            programmatically, and moves focus to any error summary.
          </p>
        </div>

        {/* Disconnect disposition */}
        <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-5 py-5">
          <p className="text-sm leading-5 text-slate-500">
            <strong className="font-bold text-slate-900">
              Disconnect disposition.
            </strong>{" "}
            A disconnect identifies what stays: retained source records,
            connected copies, outstanding references, audit evidence, and any
            deletion or retention obligation. No zero-impact promise is made.
          </p>
        </div>
      </div>
    </section>
  );
}