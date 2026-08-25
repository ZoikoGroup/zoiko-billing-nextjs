export default function IssuerEntityContext() {
  const rows = [
    [
      "Issuer & entity",
      "Issuer name, address and identity fields come from the authoritative issuer profile",
    ],
    [
      "Customer relationship",
      "Language or locale preference may be relationship-specific where supported — no universal customer-language assumption",
    ],
    [
      "Document currency",
      "Resolved before issue; presentation may format it, never change it",
    ],
    [
      "Jurisdiction",
      "Controls availability and regulated content only through an approved registry or rule",
    ],
    [
      "Tax result",
      "Rendered from the tax and document authority; localization changes labels and formatting only",
    ],
    [
      "Document series & number",
      "Entity and document authority — localization cannot renumber",
    ],
    [
      "Commercial or legal term",
      "Controlled text with a version if localized — never free-form translator output",
    ],
    [
      "Provider or format context",
      "Only where a provider or standard requires a specific approved output",
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

            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.15em] text-sky-600 sm:text-xs">
              Issuer, entity, currency &amp; jurisdiction context
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40 sm:w-6" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            Localization composes other
            authorities. It never overrides them.
          </h2>

          {/* Description */}
          <p className="max-w-[680px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Each context is owned elsewhere, and this page renders it under
            approval rather than redefining it.
          </p>
        </div>

        {/* TABLE */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
          {/* Mobile horizontal scroll */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[760px]">
              {/* HEADER */}
              <div className="grid grid-cols-[240px_1fr]">
                <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-600">
                    Context
                  </span>
                </div>

                <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-600">
                    Localization behavior
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map(([context, behavior], index) => (
                <div
                  key={context}
                  className={`grid grid-cols-[240px_1fr] ${
                    index !== rows.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  {/* Context */}
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-semibold leading-5 text-slate-900">
                      {context}
                    </p>
                  </div>

                  {/* Behavior */}
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-normal leading-5 text-slate-600">
                      {behavior}
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