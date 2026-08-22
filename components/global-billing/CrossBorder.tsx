const contexts = [
  {
    context: "Customer record",
    attached:
      "Authoritative customer ID, billing profile, contact role, address context and source.",
    why: "Prevents entity, currency and document decisions from drifting from the billing account",
  },
  {
    context: "Billing document",
    attached:
      "Issuing entity, customer, original currency, document locale and template version, issue date and state.",
    why: "Issued evidence must remain understandable later",
  },
  {
    context: "Charge or adjustment",
    attached:
      "Source item, reason, entity, currency and approval context.",
    why: "Avoids disconnected global amounts",
  },
  {
    context: "Payment & reconciliation",
    attached:
      "Payment record, currency, provider or source, allocation and entity context.",
    why: "Prevents false settlement assumptions",
  },
  {
    context: "Outstanding balance",
    attached:
      "Invoice, account, entity and currency relationship, plus an as-of time.",
    why: "A converted dashboard value cannot replace the underlying obligation",
  },
  {
    context: "Report or export",
    attached:
      "Definitions, source systems, currencies, entities, jurisdiction filters and time basis.",
    why: "Global rollups must remain traceable",
  },
];

export default function CrossBorder() {
  return (
    <section className="w-full bg-color-grey-97-4 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[256px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Context across borders
            </span>

            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-extrabold leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            A converted dashboard value cannot
            <br className="hidden sm:block" />
            replace the underlying obligation.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Each object below keeps its own context attached, so a global
            rollup stays traceable back to what was actually issued.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-[180px_minmax(400px,1.2fr)_minmax(320px,1fr)] bg-color-grey-99-2">
                <div className="border-b border-color-grey-92-4 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Context
                  </span>
                </div>

                <div className="border-b border-color-grey-92-4 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    What must stay attached
                  </span>
                </div>

                <div className="border-b border-color-grey-92-4 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Why
                  </span>
                </div>
              </div>

              {/* Rows */}
              {contexts.map((item, index) => {
                const isLast = index === contexts.length - 1;

                return (
                  <div
                    key={item.context}
                    className={`grid grid-cols-[180px_minmax(400px,1.2fr)_minmax(320px,1fr)] ${
                      !isLast
                        ? "border-b border-color-grey-95-10"
                        : ""
                    }`}
                  >
                    {/* Context */}
                    <div className="px-4 py-4">
                      <span className="text-sm font-semibold leading-5 text-color-azure-11-2">
                        {item.context}
                      </span>
                    </div>

                    {/* Attached */}
                    <div className="px-4 py-4">
                      <span className="text-sm font-normal leading-5 text-color-azure-44-3">
                        {item.attached}
                      </span>
                    </div>

                    {/* Why */}
                    <div className="px-4 py-4">
                      <span className="text-sm font-normal leading-5 text-color-azure-44-3">
                        {item.why}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}