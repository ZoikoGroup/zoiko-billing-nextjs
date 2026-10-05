const responsibilityRows = [
  {
    responsibility: "Requirement owner",
    scope: "Owns a requirement record and its currentness.",
    boundary: "Generic category, not a product permission.",
    boundaryBold: false,
  },
  {
    responsibility: "Specialist advisor",
    scope: "Provides qualified legal or tax interpretation.",
    boundary:
      "A public page cannot replace advice or a source-owned decision.",
    boundaryBold: true,
  },
  {
    responsibility: "Publication reviewer",
    scope: "Confirms public wording is supportable by the evidence.",
    boundary:
      "Separate from specialist review, never merged with it.",
    boundaryBold: true,
  },
  {
    responsibility: "Operations owner",
    scope: "Acts on requirement context within the business.",
    boundary:
      "Acting on context is not a determination that it applies.",
    boundaryBold: true,
  },
  {
    responsibility: "Evidence custodian",
    scope: "Maintains supporting material and access boundaries.",
    boundary:
      "Controlled evidence shows an indicator only, never internal document metadata.",
    boundaryBold: true,
  },
];

export default function ResponsibilityModel() {
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
            gap-5

            sm:gap-7

            md:gap-8
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[687px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#3b82f6] opacity-40" />

              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#3b82f6]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Responsibility model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#3b82f6] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                text-center
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#12294f]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Who owns what — and who cannot be replaced by a page.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#526b91]

                sm:text-base
              "
            >
              Generic responsibility categories.{" "}
              <span className="font-bold">
                None is a Zoiko Billing product role.
              </span>
            </p>
          </div>

          {/* TABLE CONTAINER */}
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
            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#12294f]
                "
              >
                <div
                  className="
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Responsibility
                  </span>
                </div>

                <div
                  className="
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Recommended scope
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {responsibilityRows.map((row, index) => (
                <div
                  key={row.responsibility}
                  className={`
                    grid
                    grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                    ${index !== responsibilityRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""}
                  `}
                >
                  {/* RESPONSIBILITY */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#12294f]
                      "
                    >
                      {row.responsibility}
                    </span>
                  </div>

                  {/* SCOPE */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#12294f]
                      "
                    >
                      {row.scope}
                    </span>
                  </div>

                  {/* BOUNDARY */}
                  <div
                    className="
                      bg-[#f7f8fa]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className={`
                        text-xs
                        leading-5
                        text-red-900
                        ${
                          row.boundaryBold
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {row.boundary}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= MOBILE / TABLET ================= */}
            <div className="flex flex-col md:hidden">
              {responsibilityRows.map((row, index) => (
                <div
                  key={row.responsibility}
                  className={`
                    p-5
                    sm:p-6
                    ${
                      index !== responsibilityRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* RESPONSIBILITY */}
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
                      Responsibility
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-bold
                        leading-5
                        text-[#12294f]
                      "
                    >
                      {row.responsibility}
                    </p>
                  </div>

                  {/* RECOMMENDED SCOPE */}
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
                      Recommended scope
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#526b91]
                      "
                    >
                      {row.scope}
                    </p>
                  </div>

                  {/* BOUNDARY */}
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
                      Boundary
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-red-900
                        ${
                          row.boundaryBold
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {row.boundary}
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