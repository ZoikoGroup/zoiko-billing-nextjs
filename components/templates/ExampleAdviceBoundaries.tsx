const adviceBoundaries = [
  {
    area: "Data",
    allowed: "Blank or synthetic sample values.",
    notAllowed:
      "Real customer, account, payment, employee, credential or confidential data in a published asset",
  },
  {
    area: "Accounting, tax & legal",
    allowed:
      "General operational structure with an explicit review boundary.",
    notAllowed:
      "Professional conclusions, statutory compliance assurance, tax calculations or rates, legal interpretation",
  },
  {
    area: "Product",
    allowed: "Approved product terminology and links.",
    notAllowed:
      "Invented fields, screens, workflows, automation, availability or plans",
  },
  {
    area: "Payment providers",
    allowed: "General process checklists.",
    notAllowed:
      "Provider fees, settlement timing, contractual obligations or guarantees without source approval",
  },
  {
    area: "Technical",
    allowed: "Integration planning and readiness.",
    notAllowed:
      "Invented endpoints, payloads, scopes, tokens, retry rules or SDK commands",
  },
];

export default function ExampleAdviceBoundaries() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center gap-3">
            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Example &amp; advice boundaries
            </span>

            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="pb-[0.69px] text-2xl font-extrabold leading-8 text-color-azure-11-2 sm:text-3xl sm:leading-9 md:text-4xl md:leading-10">
            Five areas where a template can
            <br className="hidden sm:block" /> overreach.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] pt-[3.1px] text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Each &quot;not allowed&quot; entry describes something a template
            could plausibly contain and must not.
          </p>
        </div>

        {/* Boundary table */}
        <div className="w-full overflow-hidden rounded-2xl bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
          {/* Table description */}
          <div className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-5 py-4">
            <p className="text-sm font-normal leading-5 text-color-azure-44-3">
              Area, allowed and not allowed.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block">
            {/* Header */}
            <div className="grid grid-cols-[176px_384px_minmax(0,1fr)] border-b border-color-grey-92-4 bg-color-grey-99-2">
              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                  Area
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                  Allowed
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                  Not allowed
                </span>
              </div>
            </div>

            {/* Rows */}
            {adviceBoundaries.map((item, index) => (
              <div
                key={item.area}
                className={`grid grid-cols-[176px_384px_minmax(0,1fr)] ${
                  index !== adviceBoundaries.length - 1
                    ? "border-b border-color-grey-95-10"
                    : ""
                }`}
              >
                <div className="px-4 py-3.5">
                  <p className="text-sm font-semibold leading-5 text-color-azure-11-2">
                    {item.area}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-color-azure-44-3">
                    {item.allowed}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-color-azure-44-3">
                    {item.notAllowed}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {adviceBoundaries.map((item, index) => (
              <div
                key={item.area}
                className={`px-4 py-5 sm:px-5 ${
                  index !== adviceBoundaries.length - 1
                    ? "border-b border-color-grey-95-10"
                    : ""
                }`}
              >
                <h3 className="mb-4 text-sm font-semibold leading-5 text-color-azure-11-2">
                  {item.area}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                      Allowed
                    </p>

                    <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                      {item.allowed}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                      Not allowed
                    </p>

                    <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                      {item.notAllowed}
                    </p>
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