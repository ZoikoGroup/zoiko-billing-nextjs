"use client";

const surfaces = [
  {
    surface: "Billing document surfaces",
    shown: "Invoice, credit note, statement or other approved document states.",
    boundary: "One document surface does not imply another",
  },
  {
    surface: "Transactional communication",
    shown: "Email subject and body, or another approved communication state.",
    boundary: "Attachment language can differ from email language",
  },
  {
    surface: "Customer portal",
    shown: "Customer-facing billing portal interface and content state.",
    boundary: "Portal support does not prove document support",
  },
  {
    surface: "Authenticated product & admin UI",
    shown: "Internal billing administration interface state.",
    boundary: "Admin UI support does not imply customer-facing support",
  },
  {
    surface: "Help & documentation",
    shown: "Published product documentation or help language state.",
    boundary:
      "Documentation translation is not product UI or human support",
  },
  {
    surface: "Human support service",
    shown:
      "Operational support language, only where explicitly offered.",
    boundary:
      "A separate service, hours, plan and region authority — never inferred from documents",
  },
  {
    surface: "Legal & privacy content",
    shown:
      "Only where a separate legal-document registry supports the language and version.",
    boundary:
      "Never counted as general product-language support unless the scope is explicit",
  },
  {
    surface: "Public marketing website",
    shown: "Website locale where relevant.",
    boundary:
      "Not evidence that the product itself supports the language",
  },
];

export default function CapabilityMatrix() {
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
                Language-by-surface capability matrix
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
              Eight surface classes, each with its own boundary.
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
              Only surfaces with an approved registry definition appear.
              Empty cells are never filled with checkmarks, dashes or inferred
              parity to make the matrix look complete.
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
              <div className="grid grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Surface class
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    What can be shown when authoritative
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Critical boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {surfaces.map((item, index) => (
                <div
                  key={item.surface}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== surfaces.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* SURFACE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.surface}
                    </span>
                  </div>

                  {/* SHOWN */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.shown}
                    </span>
                  </div>

                  {/* BOUNDARY */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.boundary}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {surfaces.map((item, index) => (
                <div
                  key={item.surface}
                  className={`
                    p-5
                    ${
                      index !== surfaces.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* SURFACE */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Surface class
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {item.surface}
                    </p>
                  </div>

                  {/* SHOWN */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      What can be shown when authoritative
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.shown}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Critical boundary
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.boundary}
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