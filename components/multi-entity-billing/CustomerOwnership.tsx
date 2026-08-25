const rows = [
  {
    relationship: "Owned billing account",
    meaning:
      "The entity is the authoritative billing scope for the defined relationship.",
    control: "Effective date, profile, permissions and history",
  },
  {
    relationship: "Bill-to relationship",
    meaning:
      "The entity issues and addresses billing to the defined party where supported.",
    control: "No ownership inference beyond the billing relationship",
  },
  {
    relationship: "Payer relationship",
    meaning:
      "Payment responsibility mapped separately if supported.",
    control: "Does not change customer ownership automatically",
  },
  {
    relationship: "Shared customer context",
    meaning:
      "The same customer reference is visible to multiple entities under policy.",
    control: "Shared identity does not equal shared profile, terms or balance",
  },
  {
    relationship: "Reference-only",
    meaning:
      "The entity may view approved customer context but cannot bill or change it.",
    control: "Read-only scope",
  },
  {
    relationship: "External mapped",
    meaning:
      "CRM, ERP or Zoiko One mapping supplies the relationship.",
    control: "Source, direction, freshness and conflict visible",
  },
  {
    relationship: "Needs review / conflict",
    meaning: "Ownership cannot be safely resolved.",
    control: "Ambiguous financial action is blocked",
  },
];

export default function CustomerOwnership() {
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
            gap-5
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
                Entity ownership of customers, profiles &amp; context
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
              A shared customer reference is not a
              shared balance.
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
              A common identifier can reduce duplication while preserving
              entity-specific billing context. It never authorizes one global
              set of terms, balances, tax attributes, contacts or permissions.
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
            {/* DESKTOP */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[208px_minmax(0,536px)_minmax(0,1fr)]
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
                    Relationship
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
                    Meaning
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
                    Control
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.relationship}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,536px)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* RELATIONSHIP */}
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
                      {row.relationship}
                    </p>
                  </div>

                  {/* MEANING */}
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
                      {row.meaning}
                    </p>
                  </div>

                  {/* CONTROL */}
                  <div className="px-4 py-3.5">
                    <p
                      className={`
                        !m-0
                        text-sm
                        leading-5
                        ${
                          row.relationship === "Needs review / conflict"
                            ? "font-bold text-[#5d7192]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.control}
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
                  Customer ownership relationships
                </span>
              </div>

              {rows.map((row, index) => (
                <div
                  key={row.relationship}
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
                  {/* RELATIONSHIP */}
                  <div>
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
                      {row.relationship}
                    </p>
                  </div>

                  {/* MEANING */}
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
                      Meaning
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
                      {row.meaning}
                    </p>
                  </div>

                  {/* CONTROL */}
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
                      Control
                    </span>

                    <p
                      className={`
                        !m-0
                        text-sm
                        leading-6
                        ${
                          row.relationship === "Needs review / conflict"
                            ? "font-bold text-[#5d7192]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.control}
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