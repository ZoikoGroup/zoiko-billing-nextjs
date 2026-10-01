interface FieldPropertyRow {
  property: string;
  detail: string;
}

interface ConflictStrategyRow {
  strategy: string;
  description: string;
}

const fieldPropertyRows: FieldPropertyRow[] = [
  {
    property: "Field identity",
    detail: "Stable Billing field, CRM field or API path, and object",
  },
  {
    property: "Direction",
    detail:
      "Inbound, outbound, or explicit controlled bidirectional behavior",
  },
  {
    property: "Authority",
    detail:
      "CRM, Billing, external, reference-only, manual override, or no sync",
  },
  {
    property: "Transform",
    detail:
      "Format, enumeration, unit or normalization rule — versioned",
  },
  {
    property: "Requiredness",
    detail: "Which workflow or context requires it",
  },
  {
    property: "Editability",
    detail:
      "Which side may edit, under what permission and state",
  },
  {
    property: "Effective date",
    detail:
      "When the mapped value applies; future, current and history distinguished",
  },
  {
    property: "Freshness",
    detail:
      "Last synchronized or verified, plus stale threshold",
  },
  {
    property: "Conflict",
    detail:
      "What happens if both sides change, or the authoritative source is unavailable",
  },
  {
    property: "Sensitivity & purpose",
    detail: "Data classification and permitted destination",
  },
  {
    property: "Retention",
    detail:
      "What happens when the source closes or deletes the field",
  },
];

const conflictStrategyRows: ConflictStrategyRow[] = [
  {
    strategy: "Authority wins",
    description:
      "Only if authority is explicit and current, and the other value is non-authoritative",
  },
  {
    strategy: "Review required",
    description: "For material ambiguous field conflicts",
  },
  {
    strategy: "Reject change",
    description:
      "When target or source state makes the change unsafe",
  },
  {
    strategy: "Reference-only display",
    description:
      "Show the other system's value without changing Billing behavior",
  },
  {
    strategy: "Manual exception",
    description:
      "A time-scoped override with reason, approval and history",
  },
];

export default function FieldLevelSourceAuthorityMappingSection() {
  return (
    <section
      id="field-authority"
      className="w-full bg-[#f7f8fa]"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
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
                  tracking-[0.15em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Field-Level Source Authority &amp; Mapping
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
              Timestamps alone do not determine truth.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              A newer CRM value must not overwrite an authoritative Billing
              term, address, contact role or lifecycle state unless the
              mapping contract explicitly permits it.
            </p>
          </div>

          {/* TWO CONTROL CARDS */}
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* FIELD PROPERTIES */}
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
              <div
                className="
                  border-b
                  border-[#edf0f4]
                  bg-[#fafbfc]
                  px-5
                  py-3.5
                  text-sm
                  leading-6
                  text-[#5d7192]
                "
              >
                Every material shared field carries eleven contract
                properties.
              </div>

              {/* DESKTOP */}
              <div className="hidden sm:block">
                {fieldPropertyRows.map((row, index) => (
                  <div
                    key={row.property}
                    className={`grid grid-cols-[40%_60%] ${
                      index !== fieldPropertyRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <div className="px-5 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.property}
                      </span>
                    </div>

                    <div className="px-5 py-3.5">
                      <span className="text-sm leading-6 text-[#5d7192]">
                        {row.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE */}
              <div className="flex flex-col sm:hidden">
                {fieldPropertyRows.map((row, index) => (
                  <div
                    key={row.property}
                    className={`p-5 ${
                      index !== fieldPropertyRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <p className="!m-0 text-sm font-semibold leading-5 text-[#091127]">
                      {row.property}
                    </p>

                    <p className="!m-0 mt-2 text-sm leading-6 text-[#5d7192]">
                      {row.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONFLICT STRATEGIES */}
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
              <div
                className="
                  border-b
                  border-[#edf0f4]
                  bg-[#fafbfc]
                  px-5
                  py-3.5
                  text-sm
                  leading-6
                  text-[#5d7192]
                "
              >
                Five governed conflict strategies. None of them is
                last-write-wins.
              </div>

              {/* DESKTOP */}
              <div className="hidden sm:block">
                {conflictStrategyRows.map((row, index) => (
                  <div
                    key={row.strategy}
                    className={`grid grid-cols-[40%_60%] ${
                      index !== conflictStrategyRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <div className="px-5 py-4">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.strategy}
                      </span>
                    </div>

                    <div className="px-5 py-4">
                      <span className="text-sm leading-6 text-[#5d7192]">
                        {row.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE */}
              <div className="flex flex-col sm:hidden">
                {conflictStrategyRows.map((row, index) => (
                  <div
                    key={row.strategy}
                    className={`p-5 ${
                      index !== conflictStrategyRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <p className="!m-0 text-sm font-semibold leading-5 text-[#091127]">
                      {row.strategy}
                    </p>

                    <p className="!m-0 mt-2 text-sm leading-6 text-[#5d7192]">
                      {row.description}
                    </p>
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