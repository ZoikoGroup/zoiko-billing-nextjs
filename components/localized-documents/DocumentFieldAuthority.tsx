export default function DocumentFieldAuthority() {
  const rows = [
    [
      "Amounts, totals & taxes",
      "Format only — calculation and value unchanged",
      "Billing and tax calculation authority",
    ],
    [
      "Currency code & symbol",
      "Displayed per approved locale and currency metadata",
      "Multi-Currency Billing",
    ],
    [
      "Document ID & number",
      "Never translated or renumbered",
      "Document and series authority",
    ],
    [
      "Entity & customer identifiers",
      "Canonical identifiers preserved; names may follow approved presentation rules",
      "Entity and Customer Records",
    ],
    [
      "Dates",
      "Locale-formatted display; the original semantic date and time remain",
      "Document and workflow authority",
    ],
    [
      "Labels & headings",
      "Translated from the approved resource bundle",
      "Localization resource authority",
    ],
    [
      "Tax & legal notice",
      "Controlled text with jurisdiction, document, entity and language applicability",
      "Legal, tax and content authority",
    ],
    [
      "Payment instructions",
      "Controlled operational text with provider, entity and currency context",
      "Payments and provider authority",
    ],
    [
      "Terms, PO & references",
      "Source-controlled; translated only where policy supports it and meaning is preserved",
      "Commercial and document authority",
    ],
    [
      "Custom fields",
      "Field-by-field localizability metadata required",
      "The owning domain registry",
    ],
  ];

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-8 sm:gap-10">
        {/* HEADING */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 text-center">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40 sm:w-6" />

            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-sky-600 sm:text-xs sm:tracking-[0.15em]">
              Document fields, legal &amp; tax text, content authority
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40 sm:w-6" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            <span className="block">A similar phrase is not the same</span>
            <span className="block">concept.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            A localized label may explain a source field, but the system must
            never substitute a different legal, tax, payment or accounting
            concept because a similar translated phrase exists.
          </p>
        </div>

        {/* TABLE CARD */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
          {/* Mobile horizontal scrolling */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* TABLE DESCRIPTION */}
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  Field classes, their localization treatment, and the owning
                  authority.
                </p>
              </div>

              {/* HEADER */}
              <div className="grid grid-cols-[240px_minmax(0,1fr)_288px]">
                <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-600">
                    Field class
                  </span>
                </div>

                <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-600">
                    Localization treatment
                  </span>
                </div>

                <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-600">
                    Authority
                  </span>
                </div>
              </div>

              {/* TABLE ROWS */}
              {rows.map(([field, treatment, authority], index) => (
                <div
                  key={field}
                  className={`grid grid-cols-[240px_minmax(0,1fr)_288px] ${
                    index !== rows.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  {/* Field class */}
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-semibold leading-5 text-slate-900">
                      {field}
                    </p>
                  </div>

                  {/* Localization treatment */}
                  <div className="px-4 py-3.5">
                    <p
                      className={`text-sm leading-5 ${
                        field === "Document ID & number"
                          ? "font-bold text-slate-600"
                          : "font-normal text-slate-600"
                      }`}
                    >
                      {treatment}
                    </p>
                  </div>

                  {/* Authority */}
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-normal leading-5 text-slate-600">
                      {authority}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}