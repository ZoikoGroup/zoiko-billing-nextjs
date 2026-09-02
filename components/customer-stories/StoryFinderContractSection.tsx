interface StoryFilterRow {
  property: string;
  detail: React.ReactNode;
}

interface StoryFieldRow {
  field: string;
  requirement: React.ReactNode;
}

const storyFilterRows: StoryFilterRow[] = [
  {
    property: "Outcome",
    detail: (
      <>
        Billing control, receivables visibility, payment and reconciliation process, reporting visibility, multi-entity operations, implementation —{" "}
        <span className="font-bold text-slate-900">
          only if approved stories support them
        </span>
      </>
    ),
  },
  {
    property: "Billing context",
    detail: "Invoicing, receivables, payments, balances, reporting, integrations, governance — populated only by current story metadata",
  },
  {
    property: "Organization context",
    detail: (
      <>
        Approved neutral categories and scale bands only —{" "}
        <span className="font-bold text-slate-900">
          no empty or re-identifying facets
        </span>
      </>
    ),
  },
  {
    property: "Evidence type",
    detail: "Customer-reported, product-observed, jointly verified, independently verified, qualitative, modeled",
  },
  {
    property: "Implementation stage",
    detail: "Evaluation, implementation, adoption, optimization — only when story evidence supports the classification",
  },
  {
    property: "Sort",
    detail: "Relevance by default; recently verified or newest only with normalized dates",
  },
  {
    property: "Analytics privacy",
    detail: (
      <>
        Controlled taxonomy values and result counts —{" "}
        <span className="font-bold text-slate-900">
          no raw search by default
        </span>
      </>
    ),
  },
];

const storyFieldRows: StoryFieldRow[] = [
  {
    field: "Customer identity",
    requirement: (
      <>
        Approved name and logo, or an approved anonymous descriptor —{" "}
        <span className="font-bold text-slate-900">
          never an invented logo or name
        </span>
      </>
    ),
  },
  {
    field: "Story title",
    requirement: (
      <>
        Specific context and outcome, with{" "}
        <span className="font-bold text-slate-900">
          no guaranteed-result wording
        </span>
      </>
    ),
  },
  {
    field: "Outcome summary",
    requirement: "Evidence-limited wording",
  },
  {
    field: "Evidence label",
    requirement: (
      <>
        Visible text —{" "}
        <span className="font-bold text-slate-900">not color-only</span>
      </>
    ),
  },
  {
    field: "Measurement period",
    requirement: "Shown wherever the result depends on time",
  },
  {
    field: "Last verified",
    requirement: "A visible date",
  },
  {
    field: "Limitation",
    requirement: "A short material qualifier where one is necessary",
  },
];

export default function StoryFinderContractSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="story-finder-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          STORY FINDER CONTRACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Seven filters, none of them re-identifying.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Organization context uses approved neutral bands only — a facet combination that narrows to
          a single identifiable customer is not offered.
        </p>

        {/* 2-Column Grid Layout */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Filter behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {storyFilterRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.property}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Required card fields.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {storyFieldRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.field}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
