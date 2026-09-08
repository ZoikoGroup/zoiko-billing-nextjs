const rows = [
  {
    context: "Billing address",
    record: "Approved billing and document context.",
    boundary: "Not proof of legal residence or tax status",
  },
  {
    context: "Delivery & correspondence address",
    record: "Purpose-specific document or account communication context.",
    boundary: "Not reused across purposes without a rule",
  },
  {
    context: "Customer legal entity reference",
    record: "An approved organization or entity reference where supported.",
    boundary: "Does not independently verify corporate registry status",
  },
  {
    context: "Billing entity",
    record:
      "Which Zoiko billing entity applies, where commercial configuration defines it.",
    boundary:
      "Authority comes from commercial and global billing configuration",
  },
  {
    context: "Currency context",
    record: "An approved billing or document currency preference.",
    boundary: "Does not authorize unsupported currency or foreign exchange",
  },
  {
    context: "Tax identifier reference",
    record:
      "Stored and displayed only where product, privacy, legal and tax architecture permits.",
    boundary: "No validation, filing or compliance claim",
  },
  {
    context: "Jurisdiction & locale",
    record: "Operational and document context as approved.",
    boundary: "No universal availability or legal conclusion",
  },
];

export default function Context() {
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
                Addresses, entity, currency &amp; tax context
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
              Context is not determination.
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
              Customer Records can carry approved billing context. Tax
              calculation, filing, legal-entity validation, jurisdiction
              eligibility, exchange rates and compliance conclusions belong to
              their own authoritative services.
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
              <div className="grid grid-cols-[24%_44%_32%] bg-[#fafbfc]">
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
                    Context
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
                    What the record may hold
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
                    Boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.context}
                  className={`
                    grid
                    grid-cols-[24%_44%_32%]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONTEXT */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.context}
                    </p>
                  </div>

                  {/* RECORD */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.record}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.boundary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.context}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONTEXT */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.context}
                    </p>
                  </div>

                  {/* RECORD */}
                  <div className="mt-4">
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
                      What the record may hold
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.record}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div className="mt-4">
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
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
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