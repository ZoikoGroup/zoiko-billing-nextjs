const layers = [
  {
    layer: "Organization & entity",
    question: "Which legal or operating scope owns this billing activity?",
    shown: "Explicit organization and entity context, plus availability state",
  },
  {
    layer: "Team & role",
    question: "Who may view, prepare, approve, issue, reconcile or administer?",
    shown: "Role and permission state",
  },
  {
    layer: "Policy & workflow",
    question: "Which approved rule and version governs the action?",
    shown: "Policy or workflow version and state",
  },
  {
    layer: "Billing object",
    question:
      "Which customer, schedule, invoice, payment or balance record is authoritative?",
    shown: "A stable object reference and its source",
  },
  {
    layer: "Integration",
    question: "Which external system supplies or receives context?",
    shown: "Direction, authority, health and currentness",
  },
  {
    layer: "Evidence",
    question: "How do we know the state is current?",
    shown: "History, source, and as-of or last-verified time",
  },
  {
    layer: "Exception",
    question: "What prevents progress?",
    shown: "Reason, owner and next action",
  },
  {
    layer: "Commercial availability",
    question: "Is this capability, market or plan currently offered?",
    shown: "A registry-backed state",
  },
];

export default function OpModel() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 bg-slate-500 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-[0.18em] text-slate-500">
              Enterprise operating model
            </span>

            <span className="h-px w-4 bg-slate-500 opacity-40" />
          </div>

          {/* Heading */}
          <div className="w-full">
  <h2 className="w-full text-center text-xl font-extrabold leading-9 tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
    Eight layers, each answering one
    <br />
    question.
  </h2>
</div>

          {/* Description */}
          <div className="w-full max-w-[687px] pt-0.5"> 
            <p className="text-center text-base font-normal leading-7 text-slate-600"> 
              Centralized visibility is not centralized permission. The control 
              plane shows the whole picture without any one person holding 
              every financial, entity, security and integration right. 
            </p> 
          </div> 
        </div>

        {/* Desktop / Tablet Table */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:block">
          <div className="grid grid-cols-[minmax(150px,0.9fr)_minmax(300px,2.7fr)_minmax(220px,1.8fr)]">
            {/* Header */}
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Layer
              </span>
            </div>

            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Question it answers
              </span>
            </div>

            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                What must be shown
              </span>
            </div>

            {/* Rows */}
            {layers.map((item, index) => {
              const isLast = index === layers.length - 1;

              return (
                <div key={item.layer} className="contents">
                  <div
                    className={`px-4 py-3.5 ${
                      !isLast ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold leading-5 text-slate-900">
                      {item.layer}
                    </span>
                  </div>

                  <div
                    className={`px-4 py-3.5 ${
                      !isLast ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <span className="text-sm font-normal leading-5 text-slate-600">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`px-4 py-3.5 ${
                      !isLast ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <span className="text-sm font-normal leading-5 text-slate-600">
                      {item.shown}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex w-full flex-col gap-3 md:hidden">
          {layers.map((item, index) => (
            <div
              key={item.layer}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.04)]"
            >
              {/* Layer */}
              <div className="border-b border-slate-100 bg-slate-50 px-4 py-3.5">
                <span className="text-sm font-semibold leading-5 text-slate-900">
                  {item.layer}
                </span>
              </div>

              {/* Question */}
              <div className="px-4 py-3.5">
                <div className="mb-1.5 text-[11px] font-bold uppercase leading-4 tracking-wide text-slate-400">
                  Question it answers
                </div>

                <p className="text-sm font-normal leading-6 text-slate-600">
                  {item.question}
                </p>
              </div>

              {/* What must be shown */}
              <div className="border-t border-slate-100 px-4 py-3.5">
                <div className="mb-1.5 text-[11px] font-bold uppercase leading-4 tracking-wide text-slate-400">
                  What must be shown
                </div>

                <p className="text-sm font-normal leading-6 text-slate-600">
                  {item.shown}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}