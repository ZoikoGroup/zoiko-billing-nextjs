const rows = [
  {
    view: "Entity dashboard",
    semantics:
      "Documents, receivables, payments, exceptions and workflow state for one entity.",
    qualification: "Source, period or as-of, currency basis",
  },
  {
    view: "Cross-entity operational dashboard",
    semantics:
      "Comparable operational measures across selected entities.",
    qualification:
      "Entity set, definitions, currency treatment, exclusions, freshness",
  },
  {
    view: "Group summary",
    semantics:
      "A roll-up only for metrics with defined aggregation semantics.",
    qualification: "Not a financial statement",
  },
  {
    view: "Currency-normalized reference view",
    semantics: "Only where an approved conversion exists.",
    qualification:
      "Reference currency, rate source, time and finality; original values retained",
  },
  {
    view: "Entity comparison",
    semantics: "Side-by-side metrics with consistent definitions.",
    qualification: "No ranking by hidden risk or value score",
  },
  {
    view: "Evidence drilldown",
    semantics:
      "From aggregate to entity, object, then event and source.",
    qualification: "Permissions preserved at every level",
  },
  {
    view: "Export",
    semantics:
      "Permissioned and purpose-scoped, with entity labels and definitions.",
    qualification: "No unrestricted cross-entity data dump",
  },
];

export default function ReportingBoundary() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

          xl:px-24
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-9

            sm:gap-10

            lg:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />

              <span
                className="
                  text-center
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Reporting &amp; consolidated visibility boundary
              </span>

              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-center
                text-[30px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[36px]

                md:text-[40px]

                lg:text-4xl
                lg:leading-10
              "
            >
              Every roll-up carries its qualification.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              Aggregate views are labeled operational, with entity set,
              definitions, currency treatment, exclusions and freshness
              stated.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TABLE INTRO */}
            <div
              className="
                border-b
                border-[#e1e5eb]
                bg-[#fbfbfc]
                px-5
                py-4
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Views, their allowed semantics, and the required qualification.
              </p>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[240px_minmax(0,485px)_minmax(0,1fr)]
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                "
              >
                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-blue-600
                    "
                  >
                    View
                  </span>
                </div>

                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-blue-600
                    "
                  >
                    Allowed semantics
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-blue-600
                    "
                  >
                    Required qualification
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.view}
                  className={`
                    grid
                    grid-cols-[240px_minmax(0,485px)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* VIEW */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-slate-900
                      "
                    >
                      {row.view}
                    </p>
                  </div>

                  {/* SEMANTICS */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.semantics}
                    </p>
                  </div>

                  {/* QUALIFICATION */}
                  <div className="px-4 py-3.5">
                    <p
                      className={`
                        !m-0
                        text-sm
                        leading-5
                        text-[#5d7192]
                        ${
                          row.view === "Group summary"
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {row.qualification}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <div
                className="
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                  px-4
                  py-3

                  sm:px-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.1em]
                    text-blue-600

                    sm:text-xs
                  "
                >
                  Reporting views
                </span>
              </div>

              {rows.map((row, index) => (
                <div
                  key={row.view}
                  className={`
                    flex
                    flex-col
                    gap-4
                    px-4
                    py-5

                    sm:px-5
                    sm:py-6

                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* VIEW */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-slate-900

                      sm:text-base
                    "
                  >
                    {row.view}
                  </p>

                  {/* ALLOWED SEMANTICS */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-blue-600
                      "
                    >
                      Allowed semantics
                    </span>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.semantics}
                    </p>
                  </div>

                  {/* QUALIFICATION */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-blue-600
                      "
                    >
                      Required qualification
                    </span>

                    <p
                      className={`
                        !m-0
                        text-sm
                        leading-6
                        text-[#5d7192]
                        ${
                          row.view === "Group summary"
                            ? "font-bold"
                            : "font-normal"
                        }
                      `}
                    >
                      {row.qualification}
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