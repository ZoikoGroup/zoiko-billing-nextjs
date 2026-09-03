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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            md:gap-11

            lg:flex-row
            lg:items-start
            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div className="flex min-w-0 w-full flex-1 flex-col items-start gap-3.5">
            {/* EYEBROW */}
            <div className="flex items-center gap-3 pt-2">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Find a language
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
       Names, codes and scripts — never
              flags.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A flag is a country, not a language, and a country is never used
              as the primary language icon or route. Discovery uses the English
              name, the local name, the canonical tag and the script.
            </p>

            {/* LANGUAGE OPTIONS */}
            <div className="mt-1.5 flex w-full flex-col">
              {languageOptions.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    w-full
                    flex-col
                    gap-1
                    py-3

                    sm:flex-row
                    sm:items-start
                    sm:gap-4
                  "
                >
                  {/* BULLET + TITLE */}
                  <div
                    className="
                      flex
                      shrink-0
                      items-start
                      gap-2

                      sm:w-[180px]
                    "
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#7890b2]" />

                    <span className="text-sm font-bold leading-6 text-[#091127]">
                      {item.title}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]

                      sm:flex-1
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex min-w-0 w-full flex-1 flex-col gap-5">
            {/* ALIASES CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
                sm:py-6
              "
            >
              {/* CARD HEADER */}
              <div className="flex flex-col">
                <h3 className="!m-0 text-lg font-bold leading-7 text-[#091127]">
                  Aliases resolve to one record
                </h3>

                <p className="!m-0 mt-1 text-xs font-normal leading-5 text-[#7890b2]">
                  Synthetic example of alias handling.
                </p>
              </div>

              {/* STEPS */}
              <div className="mt-3">
                {aliasSteps.map((step) => (
                  <div
                    key={step.number}
                    className="
                      flex
                      items-start
                      gap-3.5
                      border-t
                      border-[#edf0f4]
                      py-3.5
                    "
                  >
                    {/* NUMBER */}
                    <div
                      className="
                        flex
                        size-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white
                        ring-1
                        ring-[#dfe5ee]
                      "
                    >
                      <span className="text-xs font-bold leading-5 text-[#55708f]">
                        {step.number}
                      </span>
                    </div>

                    {/* STEP CONTENT */}
                    <div className="min-w-0 flex-1">
                      <h4 className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                        {step.title}
                      </h4>

                      <p className="!m-0 mt-0.5 text-xs font-normal leading-5 text-[#5d7192]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NO MATCH CARD */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
              "
            >
              <h3 className="!m-0 text-lg font-bold leading-7 text-[#091127]">
                No match is not a No
              </h3>

              <p className="!m-0 mt-2 text-sm font-normal leading-6 text-[#5d7192]">
                A missing language record means the registry has nothing to
                publish. It is never treated as a statement about the language,
                and never as a statement about any person&apos;s ability or
                legal status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}