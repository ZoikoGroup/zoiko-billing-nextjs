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
    <section className="w-full bg-white">
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
              max-w-[662px]
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
                Document fields, legal &amp; tax text, content authority
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              A similar phrase is not the same concept.
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
              A localized label may explain a source field, but the system
              must never substitute a different legal, tax, payment or
              accounting concept because a similar translated phrase exists.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,0.9fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Field class
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Localization treatment
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Authority
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map(([field, treatment, authority], index) => (
                <div
                  key={field}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,0.9fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* FIELD CLASS */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {field}
                    </span>
                  </div>

                  {/* LOCALIZATION TREATMENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        leading-5
                        ${
                          field === "Document ID & number"
                            ? "font-semibold text-[#091127]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {treatment}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {authority}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map(([field, treatment, authority], index) => (
                <div
                  key={field}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* FIELD CLASS */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Field class
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {field}
                    </p>
                  </div>

                  {/* LOCALIZATION TREATMENT */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Localization treatment
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        ${
                          field === "Document ID & number"
                            ? "font-semibold text-[#091127]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {treatment}
                    </p>
                  </div>

                  {/* AUTHORITY */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Authority
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
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