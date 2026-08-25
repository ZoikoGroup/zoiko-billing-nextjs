const localizationLayers = [
  {
    layer: "Authoritative document facts",
    question: "What cannot be changed by localization?",
    representation:
      "Document ID, amounts, tax results, currency, dates and events, issuer and customer references, payment state",
  },
  {
    layer: "Document surface",
    question: "Where is the content rendered?",
    representation:
      "Invoice, credit note, statement, portal view, email, export or another approved surface",
  },
  {
    layer: "Language",
    question: "Which resources exist for this surface?",
    representation: "The language-surface capability state",
  },
  {
    layer: "Locale",
    question: "Which formatting conventions apply?",
    representation: "A locale definition plus its applicability",
  },
  {
    layer: "Template",
    question: "Which layout and version applies?",
    representation:
      "A template variant with entity, surface, locale, jurisdiction and effective period",
  },
  {
    layer: "Controlled text",
    question: "Which text requires specific authority?",
    representation:
      "A controlled-text version with reviewer, owner and applicability",
  },
  {
    layer: "Issuer & entity",
    question: "Which issuing entity context applies?",
    representation: "An issuer profile from Multi-Entity Billing",
  },
  {
    layer: "Currency",
    question: "Which authoritative currency applies?",
    representation: "Multi-Currency Billing context",
  },
  {
    layer: "Rendering",
    question: "Which renderer creates the artifact?",
    representation: "A render profile with version and state",
  },
  {
    layer: "Evidence",
    question: "Can the output be reproduced?",
    representation: "A localization snapshot plus change history",
  },
];

export default function LocalizationModel() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            <span className="h-px w-4 bg-sky-600/40" />
            <span>Document localization operating model</span>
            <span className="h-px w-4 bg-sky-600/40" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Ten layers, resolved from
            <br className="hidden sm:block" />
            configuration — never guessed.
          </h2>

          <p className="max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Localization must not infer language, legal text, jurisdiction,
            currency or entity from browser settings, IP address, customer
            name, email domain or any similar weak signal.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
          <div className="grid grid-cols-[210px_290px_1fr] bg-slate-50">
            <div className="border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase tracking-wide text-sky-600">
              Layer
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase tracking-wide text-sky-600">
              Question
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase tracking-wide text-sky-600">
              Required representation
            </div>

            {localizationLayers.map((item, index) => (
              <div key={item.layer} className="contents">
                <div
                  className={`px-4 py-4 text-sm font-semibold leading-5 text-slate-900 ${
                    index !== localizationLayers.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  {item.layer}
                </div>

                <div
                  className={`px-4 py-4 text-sm leading-5 text-slate-600 ${
                    index !== localizationLayers.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  {item.question}
                </div>

                <div
                  className={`px-4 py-4 text-sm leading-5 text-slate-600 ${
                    index !== localizationLayers.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  {item.representation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {localizationLayers.map((item, index) => (
            <div
              key={item.layer}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-sky-50 px-2 text-xs font-bold text-sky-600">
                  {index + 1}
                </span>

                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {item.layer}
                </h3>
              </div>

              <div className="space-y-4 pl-10">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sky-600">
                    Question
                  </p>
                  <p className="text-sm leading-5 text-slate-600">
                    {item.question}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-sky-600">
                    Required representation
                  </p>
                  <p className="text-sm leading-5 text-slate-600">
                    {item.representation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}