const rows = [
  {
    actor: "Zoiko Billing",
    role: "Stores and coordinates approved billing payment references, statuses, allocations and workflows.",
    authority:
      "Not a processor, acquirer, bank, merchant of record, card vault or dispute decision-maker",
  },
  {
    actor: "Payment provider",
    role: "Executes provider-specific operations per its service and account configuration.",
    authority: "The provider owns its result and operational rules",
  },
  {
    actor: "Provider / merchant account",
    role: "The relationship through which operations may be authorized.",
    authority: "Connector availability does not create or approve the account",
    emphasis: true,
  },
  {
    actor: "Billing entity",
    role: "The entity that owns the billing and payment relationship.",
    authority: "Entity mapping must be explicit",
  },
  {
    actor: "Customer / payer",
    role: "Billing account context and provider-facing reference where appropriate.",
    authority: "No hidden identity, credit or fraud inference",
  },
  {
    actor: "Method / instrument reference",
    role: "Provider-supported reference or token metadata only as architecture permits.",
    authority: "Unnecessary sensitive credentials are not stored or displayed",
  },
  {
    actor: "Bank / settlement destination",
    role: "The external destination used by the provider where applicable.",
    authority: "No bank-account provision or treasury implied",
  },
  {
    actor: "Payment evidence",
    role: "Provider IDs, timestamps, statuses, amounts and reconciliation references.",
    authority: "Must remain attributable to its provider and source",
  },
];

export default function PaymentModel() {
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
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-10 sm:gap-11">
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
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
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Payment provider integration model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Authority is object and field specific.
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
              Zoiko Billing may be authoritative for the billing payment
              record while the provider remains authoritative for its own
              processing result.
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
            {/* DESKTOP / TABLET TABLE */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[1040px] border-collapse">
                <thead>
                  <tr className="bg-[#fafbfc]">
                    <th
                      className="
                        w-[19%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Actor
                    </th>

                    <th
                      className="
                        w-[40%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Role
                    </th>

                    <th
                      className="
                        w-[41%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Authority boundary
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.actor}>
                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                          ${index !== rows.length - 1 ? "border-b border-[#edf0f5]" : ""}
                        `}
                      >
                        {row.actor}
                      </td>

                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                          ${index !== rows.length - 1 ? "border-b border-[#edf0f5]" : ""}
                        `}
                      >
                        {row.role}
                      </td>

                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          text-sm
                          leading-5
                          ${
                            row.emphasis
                              ? "font-bold text-[#5d7192]"
                              : "font-normal text-[#5d7192]"
                          }
                          ${index !== rows.length - 1 ? "border-b border-[#edf0f5]" : ""}
                        `}
                      >
                        {row.authority}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.actor}
                  className={`
                    flex
                    flex-col
                    gap-4
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f5]"
                        : ""
                    }
                  `}
                >
                  <div>
                    <div
                      className="
                        mb-1
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-[#7890b2]
                      "
                    >
                      Actor
                    </div>

                    <div className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.actor}
                    </div>
                  </div>

                  <div>
                    <div
                      className="
                        mb-1
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-[#7890b2]
                      "
                    >
                      Role
                    </div>

                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.role}
                    </div>
                  </div>

                  <div>
                    <div
                      className="
                        mb-1
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-[#7890b2]
                      "
                    >
                      Authority boundary
                    </div>

                    <div
                      className={`
                        text-sm
                        leading-5
                        ${
                          row.emphasis
                            ? "font-bold text-[#5d7192]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.authority}
                    </div>
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