interface CapabilityCardData {
  title: string;
  summary: string;
  tags: string;
  badgeText: string;
  extraText?: string;
}

const capabilityCards: CapabilityCardData[] = [
  {
    title: "Customer records",
    summary:
      "Create or synchronize billing-account context while preserving record identity and ownership.",
    tags: "Customer and account records · identifiers · contact and billing attributes · lifecycle metadata",
    badgeText: "State pending canonical source",
    extraText: "Per object and action",
  },
  {
    title: "Invoices & credit notes",
    summary:
      "Integrate document lifecycle without rewriting issued history.",
    tags: "Draft and issued documents · line items · credit notes · status and evidence links",
    badgeText: "State pending canonical source",
    extraText: "Per object and action",
  },
  {
    title: "Charges & adjustments",
    summary: "Bring controlled changes into billing workflows.",
    tags: "Charges · adjustments · reason and context · approval and evidence references",
    badgeText: "State pending canonical source",
    extraText: "Per action",
  },
  {
    title: "Billing schedules",
    summary: "Coordinate recurring or scheduled billing behavior.",
    tags: "Schedules · effective periods · lifecycle state · next-action metadata",
    badgeText: "State pending canonical source",
  },
  {
    title: "Documents & delivery",
    summary: "Connect generated billing documents and delivery outcomes.",
    tags: "Documents · delivery state · channels · evidence and status",
    badgeText: "State pending canonical source",
  },
  {
    title: "Accounts receivable",
    summary: "Read and act on receivable operational state where authorized.",
    tags: "Balances · aging context · collections and workflow references",
    badgeText: "State pending canonical source",
  },
  {
    title: "Payments & reconciliation",
    summary:
      "Integrate payment evidence and allocation or reconciliation workflows.",
    tags: "Payments · allocations · reconciliation state · exceptions",
    badgeText: "State pending canonical source",
  },
  {
    title: "Outstanding balances",
    summary: "Surface what remains due without mutating source documents.",
    tags: "Outstanding amounts · invoice linkage · aging and status",
    badgeText: "State pending canonical source",
  },
  {
    title: "Reporting & analytics",
    summary:
      "Export or query governed billing information for defined reporting purposes.",
    tags: "Report dimensions · filters · exports · aggregates where supported",
    badgeText: "State pending canonical source",
  },
  {
    title: "Roles, approvals & automation",
    summary:
      "Connect governed actions to permission, approval and workflow boundaries.",
    tags: "Approval state · role context · workflow events · policy outcomes",
    badgeText: "State pending canonical source",
    extraText: "Explicitly permission-aware",
  },
];

export default function ApiCapabilityMapSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="capability-map">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-6 bg-slate-300" />
          API CAPABILITY MAP
          <span className="h-px w-6 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          Ten billing domains, each with its own availability state.
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
          This maps the product architecture into integration domains. It does not imply that
          every object or action in a domain is already exposed by API.
        </p>

        {/* Cards Grid */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 text-left">
          {capabilityCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md"
            >
              <div>
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                  {card.summary}
                </p>
              </div>

              {/* Tags & Badge Footer Area */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed mb-3">
                  {card.tags}
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-md bg-slate-100/90 px-2.5 py-1 text-[11px] font-medium text-slate-600 border border-slate-200/60">
                    <span className="h-1.5 w-1.5 rounded-sm bg-slate-500" />
                    {card.badgeText}
                  </div>

                  {/* Extra Text */}
                  {card.extraText && (
                    <span className="text-[11px] font-normal text-slate-400">
                      {card.extraText}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
