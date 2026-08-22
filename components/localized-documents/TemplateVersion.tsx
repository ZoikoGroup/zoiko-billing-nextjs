const templateRules = [
  {
    title: "Template ID",
    description:
      "— a stable identifier; a user-facing filename is never the authority.",
  },
  {
    title: "Entity applicability",
    description:
      "— entity-specific, or an approved shared scope.",
  },
  {
    title: "Language & locale applicability",
    description:
      "— explicit supported pairs, with no implicit global inheritance.",
  },
  {
    title: "Jurisdiction applicability",
    description:
      "— only when approved, and it does not itself prove compliance.",
  },
  {
    title: "Version & effective period",
    description:
      "— an immutable released version, marked current, future, expired or superseded.",
  },
  {
    title: "Inheritance",
    description:
      "— a shared base with entity or locale overrides only under deterministic precedence.",
  },
  {
    title: "Preview & approval",
    description:
      "— synthetic-data preview before release, with approvals matched to the fields changed.",
  },
  {
    title: "Rollback",
    description:
      "— reverts future use to a prior approved version; issued documents retain their original snapshot.",
  },
];

export default function TemplateVersion() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[58%]">
          <div className="flex flex-col items-start gap-4">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-sky-600/75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-[0.15em] text-sky-600">
                Templates, layouts &amp; versioning
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[36px] lg:leading-[1.15]">
              <span className="block lg:whitespace-nowrap">
                A draft edit cannot reach an issued
              </span>
              <span className="block">document.</span>
            </h2>

            {/* Description */}
            <p className="w-full max-w-[600px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
              A template editor may be flexible, but production issue always
              uses a released version. Draft changes never alter documents
              already issued or locked in an approval workflow.
            </p>

            {/* Rules */}
            <div className="mt-1 flex w-full flex-col">
              {templateRules.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 py-2"
                >
                  {/* Bullet */}
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-sky-600" />

                  {/* Text */}
                  <div className="min-w-0 flex-1 text-sm leading-6 text-slate-600">
                    <span className="font-bold">{item.title}</span>{" "}
                    <span className="font-normal">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex w-full items-center justify-center lg:w-[42%]">
          <img
            src="/images/localized-documents/template-versioning.png"
            alt="Templates, layouts and versioning"
            className="h-auto w-full max-w-[430px] rounded-2xl border border-slate-200 bg-white object-contain shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]"
          />
        </div>
      </div>
    </section>
  );
}