"use client";

const dependencies = [
  {
    dependency: "Document surface exists",
    requirement:
      "The invoice, credit note or statement is an approved product surface",
  },
  {
    dependency: "Language-surface capability",
    requirement: "The exact language-and-surface state is current",
  },
  {
    dependency: "Template variant",
    requirement:
      "A current released template applicable to the entity, surface, language, locale and jurisdiction",
  },
  {
    dependency: "Translation resource bundle",
    requirement:
      "Required strings complete, current and reviewed according to content class",
  },
  {
    dependency: "Controlled text",
    requirement:
      "Legal, tax, payment and privacy text has current authority and applicability",
  },
  {
    dependency: "Entity & issuer context",
    requirement: "Issuer profile and document rules are current",
  },
  {
    dependency: "Currency context",
    requirement:
      "The authoritative document currency is compatible — localization formats value rather than changing it",
  },
  {
    dependency: "Render profile",
    requirement:
      "Output renderer, fonts, directionality and format are supported",
  },
  {
    dependency: "Accessibility profile",
    requirement:
      "Language metadata, reading order, semantics and script behavior have passed",
  },
  {
    dependency: "Fallback policy",
    requirement:
      "Missing or stale content has an explicit safe fallback or block behavior",
  },
];

export default function DocumentReadiness() {
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
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
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
                Localized documents &amp; template readiness
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              <span className="block sm:whitespace-nowrap">
                Ten dependencies before a document
              </span>

              <span className="block sm:whitespace-nowrap">
                language is current.
              </span>
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
              A translated string bundle is one of ten. Any single failure
              keeps the language-surface combination out of current support.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            <div className="grid grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[288px_minmax(0,1fr)]">
              {/* HEADER */}
              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Dependency
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Requirement
                </span>
              </div>

              {/* ROWS */}
              {dependencies.map((item, index) => {
                const isLast = index === dependencies.length - 1;

                return (
                  <div key={item.dependency} className="contents">
                    {/* DEPENDENCY */}
                    <div
                      className={`
                        px-4
                        py-3.5
                        ${
                          !isLast
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {item.dependency}
                      </span>
                    </div>

                    {/* REQUIREMENT */}
                    <div
                      className={`
                        px-4
                        py-3.5
                        ${
                          !isLast
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <span className="text-sm font-normal leading-6 text-[#5d7192]">
                        {item.requirement}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {dependencies.map((item) => (
              <div
                key={item.dependency}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* DEPENDENCY */}
                <div>
                  <p className="!m-0 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Dependency
                  </p>

                  <h3 className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {item.dependency}
                  </h3>
                </div>

                {/* REQUIREMENT */}
                <div className="mt-4 border-t border-[#edf0f4] pt-4">
                  <p className="!m-0 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Requirement
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-normal leading-6 text-[#5d7192]">
                    {item.requirement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}