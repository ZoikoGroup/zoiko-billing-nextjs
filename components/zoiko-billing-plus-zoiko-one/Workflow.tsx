const workflowRows = [
  {
    stage: "Billing event occurs",
    contract:
      "An approved event is emitted from a Billing lifecycle state.",
    authority:
      "Emitting an event never changes downstream authority by itself.",
  },
  {
    stage: "Policy & mapping check",
    contract:
      "Validate scope, permissions, mapping version and destination eligibility.",
    authority: (
      <>
        <StatusBadge type="blocked">Blocked</StatusBadge>
        <span> if any condition fails.</span>
      </>
    ),
  },
  {
    stage: "Connected action",
    contract:
      "Create an approved task, reference or update in Zoiko One context.",
    authority: "No unsupported autonomous financial decision.",
  },
  {
    stage: "Acknowledgment",
    contract:
      "Destination returns accepted, rejected, or unknown.",
    authority: (
      <>
        <StatusBadge type="unknown">Unknown</StatusBadge>
        <span>
          {" "}
          stays unresolved. Nothing is duplicated blindly.
        </span>
      </>
    ),
  },
  {
    stage: "Human review",
    contract:
      "Required wherever approval, exception or conflict policy says so.",
    authority: "Reviewer identity and role are captured.",
  },
  {
    stage: "Completion",
    contract:
      "Source and destination states reconcile to a defined outcome.",
    authority:
      "Never marked complete when only one side succeeded.",
  },
  {
    stage: "Exception",
    contract:
      "Issue routed to its owner with a retry and recovery contract.",
    authority:
      "A Sales route never substitutes for operations or support.",
  },
];

export default function Workflow() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3.5">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Workflow handoffs
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[1100px] text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Where automation stops and a person decides.
        </h2>

        {/* Description */}
        <p className="max-w-[700px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          Cross-product automation coordinates work. It does not make
          financial decisions on its own.
        </p>

        {/* Table */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          {/* Intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm leading-5 text-slate-500">
              Handoff stages, with the human authority and failure rule for
              each.
            </p>
          </div>

          {/* Desktop Header */}
          <div className="hidden grid-cols-[minmax(160px,0.8fr)_minmax(300px,2fr)_minmax(280px,1.8fr)] border-b border-gray-200 bg-gray-50 md:grid">
            <div className="px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
              Stage
            </div>

            <div className="border-l border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
              Contract
            </div>

            <div className="border-l border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
              Human authority &amp; failure rule
            </div>
          </div>

          {/* Rows */}
          <div>
            {workflowRows.map((row, index) => (
              <div
                key={row.stage}
                className={`md:grid md:grid-cols-[minmax(160px,0.8fr)_minmax(300px,2fr)_minmax(280px,1.8fr)] ${
                  index !== workflowRows.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Stage */}
                <div className="px-4 py-4 md:px-4 md:py-3.5">
                  <div className="text-xs font-bold uppercase tracking-[0.06em] text-blue-600 md:hidden">
                    Stage
                  </div>

                  <div className="mt-1 text-sm font-semibold leading-5 text-slate-900 md:mt-0">
                    {row.stage}
                  </div>
                </div>

                {/* Contract */}
                <div className="border-t border-gray-100 px-4 py-4 md:border-l md:border-t-0 md:py-3.5">
                  <div className="text-xs font-bold uppercase tracking-[0.06em] text-blue-600 md:hidden">
                    Contract
                  </div>

                  <p className="mt-1 text-sm font-normal leading-5 text-slate-500 md:mt-0">
                    {row.contract}
                  </p>
                </div>

                {/* Authority */}
                <div className="border-t border-gray-100 px-4 py-4 md:border-l md:border-t-0 md:py-3.5">
                  <div className="text-xs font-bold uppercase tracking-[0.06em] text-blue-600 md:hidden">
                    Human authority &amp; failure rule
                  </div>

                  <div className="mt-1 text-sm font-normal leading-5 text-slate-500 md:mt-0">
                    {row.authority}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "blocked" | "unknown";
}) {
  const styles =
    type === "blocked"
      ? "border-red-200 bg-red-50 text-red-600"
      : "border-blue-200 bg-blue-50 text-blue-600";

  return (
    <span
      className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${styles}`}
    >
      <span
        className={`mr-2 h-1.5 w-1.5 rounded-sm ${
          type === "blocked" ? "bg-red-500" : "bg-blue-500"
        }`}
      />

      {children}
    </span>
  );
}