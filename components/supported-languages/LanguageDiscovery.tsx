"use client";

const languageOptions = [
  {
    title: "English or common name",
    description:
      "— matched to the canonical approved language record.",
  },
  {
    title: "Autonym or local name",
    description:
      "— searched using the stored local name and normalized safely.",
  },
  {
    title: "Canonical tag or code",
    description:
      "— approved standardized language tags where registered.",
  },
  {
    title: "Script name",
    description:
      "— an optional filter where multiple scripts or variants exist.",
  },
  {
    title: "Locale form",
    description:
      "— if a locale is searched, the page clarifies language versus locale and routes to compatible records.",
  },
  {
    title: "Ambiguous name",
    description:
      "— disambiguation choices are shown; nothing is auto-selected where support meaning would differ.",
  },
  {
    title: "No match",
    description:
      "— states that no matching language record exists, and never labels the language Not available automatically.",
  },
];

const aliasSteps = [
  {
    number: "1",
    title: "Approved alias entered",
    description:
      "A historical spelling redirects to the canonical record where governance approves the alias",
  },
  {
    number: "2",
    title: "One canonical page",
    description:
      "Aliases never create duplicate indexable language pages",
  },
  {
    number: "3",
    title: "Fuzzy match confirmed",
    description:
      "Suggestions may appear, but explicit selection is required before any material state is shown",
  },
];

export default function LanguageDiscovery() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        {/* LEFT CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-3.5">
          {/* Eyebrow */}
          <div className="flex h-4 items-center gap-2">
            <span className="h-px w-6 bg-[#3B82F6]/75" />

            <span className="text-xs font-bold uppercase leading-4 tracking-[0.16em] text-[#3B82F6]">
              Find a language
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-extrabold leading-9 text-[#172033] sm:text-[32px] sm:leading-10">
            <span className="block">
              Names, codes and scripts — never
            </span>

            <span className="block">flags.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-base font-normal leading-7 text-[#5B6577]">
            A flag is a country, not a language, and a country is never used
            as the primary language icon or route. Discovery uses the English
            name, the local name, the canonical tag and the script.
          </p>

          {/* Language Options */}
          <div className="mt-1.5 flex w-full flex-col">
            {languageOptions.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col gap-1 py-3 sm:flex-row sm:items-start sm:gap-4"
              >
                {/* Bullet + Title */}
                <div className="flex shrink-0 items-start gap-2 sm:w-[180px]">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#3B82F6]" />

                  <span className="text-sm font-bold leading-6 text-[#5B6577]">
                    {item.title}
                  </span>
                </div>

                {/* Description */}
                <p className="m-0 text-sm font-normal leading-6 text-[#5B6577] sm:flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          {/* ALIASES CARD */}
          <div className="w-full rounded-2xl bg-white px-5 py-5 shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB] sm:px-6 sm:py-6">
            {/* Card Header */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold leading-7 text-[#172033]">
                Aliases resolve to one record
              </h3>

              <p className="mt-1 text-xs font-normal leading-5 text-[#3B82F6]">
                Synthetic example of alias handling.
              </p>
            </div>

            {/* Steps */}
            <div className="mt-3">
              {aliasSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-3.5 border-t border-[#F0F1F3] py-3.5"
                >
                  {/* Number */}
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-[#E5E7EB]">
                    <span className="text-xs font-bold leading-5 text-[#315B9B]">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold leading-6 text-[#172033]">
                      {step.title}
                    </h4>

                    <p className="mt-0.5 text-xs font-normal leading-5 text-[#5B6577]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NO MATCH CARD */}
          <div className="w-full rounded-2xl bg-[#F7F8F7] px-5 py-6 ring-1 ring-[#B7E7C7] sm:px-6">
            <h3 className="text-lg font-bold leading-7 text-[#172033]">
              No match is not a No
            </h3>

            <p className="mt-2 text-sm font-normal leading-5 text-[#5B6577]">
              A missing language record means the registry has nothing to
              publish. It is never treated as a statement about the language,
              and never as a statement about any person&apos;s ability or legal
              status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}