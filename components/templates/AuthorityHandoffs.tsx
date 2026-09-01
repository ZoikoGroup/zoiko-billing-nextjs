const rows = [
  {
    need: "Learn why and how to do the task",
    destination: "Billing Guides",
    highlight: true,
    behavior: "Link to the educational guide before or after the template",
  },
  {
    need: "Current product behavior",
    destination: "Product · Documentation",
    behavior: "A template never replaces mutable product truth",
    bold: true,
  },
  {
    need: "Account-specific issue",
    destination: "Help Center · Contact Support",
    behavior: "Do not embed support diagnosis in a static template",
  },
  {
    need: "Pricing or plan",
    destination: "Pricing",
    highlight: true,
    behavior: "No commercial values inside a template",
    bold: true,
  },
  {
    need: "Security or privacy",
    destination: "Trust Center · Security",
    behavior: "No duplicate assurance claims",
  },
  {
    need: "Technical implementation",
    destination: "Developers",
    behavior:
      "No API, authentication, webhook or SDK facts in a general template",
  },
];

export default function AuthorityHandoffs() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-7">
        <div className="flex flex-col items-center gap-11">

          {/* Heading */}
          <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-sky-500/40" />

              <span className="text-center font-sans text-xs font-bold uppercase tracking-widest text-sky-600">
                Related guides &amp; authority handoffs
              </span>

              <span className="h-px w-4 bg-sky-500/40" />
            </div>

            <h2 className="text-center font-sans text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl sm:leading-10 dark:text-white">
              A template structures work. It does
              not settle questions.
            </h2>

            <p className="max-w-[687px] text-center font-sans text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-white/70">
              Six needs, each owned by a system that can answer authoritatively.
            </p>
          </div>

          {/* Table */}
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">

                {/* Header */}
                <div className="grid grid-cols-[320px_288px_1fr] bg-slate-50 dark:bg-white/5">
                  {["Need", "Destination", "Template behavior"].map((title) => (
                    <div
                      key={title}
                      className="border-b border-slate-200 px-4 py-3.5 dark:border-white/10"
                    >
                      <span className="font-sans text-xs font-bold uppercase tracking-wide text-sky-600">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {rows.map((row, index) => (
                  <div
                    key={row.need}
                    className={`grid grid-cols-[320px_288px_1fr] ${
                      index !== rows.length - 1
                        ? "border-b border-slate-200 dark:border-white/10"
                        : ""
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <p className="font-sans text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                        {row.need}
                      </p>
                    </div>

                    <div className="px-4 py-3.5">
                      <p
                        className={`font-sans text-sm leading-6 ${
                          row.highlight
                            ? "font-semibold text-blue-600"
                            : "text-slate-600 dark:text-white/70"
                        }`}
                      >
                        {row.destination}
                      </p>
                    </div>

                    <div className="px-4 py-3.5">
                      <p
                        className={`font-sans text-sm leading-5 ${
                          row.bold
                            ? "font-bold text-slate-600 dark:text-white/75"
                            : "text-slate-600 dark:text-white/70"
                        }`}
                      >
                        {row.behavior}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}