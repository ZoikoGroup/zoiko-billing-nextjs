const settlementRows = [
  {
    layer: "Provider settlement record",
    description:
      "Read or reference approved provider payout evidence where the integration supports it.",
    authority: "The provider remains authoritative",
  },
  {
    layer: "Settlement amount and currency",
    description:
      "Show source values, and fee or net fields only where the provider contract defines them.",
    authority: "No treasury or FX assumption",
  },
  {
    layer: "Payout destination",
    description:
      "A masked or opaque reference only where needed and safe.",
    authority: "No bank-account-management claim",
  },
  {
    layer: "Provider fees",
    description:
      "Displayed only where the provider supplies an authoritative breakdown.",
    authority: "Fee calculation is never invented",
  },
  {
    layer: "Payment allocation",
    description:
      "Billing links the provider payment to documents per workflow.",
    authority: "Payments & Reconciliation",
  },
  {
    layer: "Bank transaction matching",
    description:
      "A separate bank feed and match process.",
    authority: "Banking & Reconciliation",
  },
  {
    layer: "Accounting posting",
    description:
      "A separate accounting and ERP handoff.",
    authority: "Accounting & ERP",
  },
  {
    layer: "Group cash / treasury",
    description: "Not implied at all.",
    authority: "No cash pooling, netting or liquidity management",
  },
];

export default function SettlementHandoff() {
  return (
    <section className="w-full overflow-hidden bg-white">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Settlement, payout &amp; reconciliation handoff
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
              Three related things, three separate authorities.
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
              Provider settlement evidence, bank transaction evidence and
              accounting reconciliation are distinct — and each routes to its
              own destination.
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
            {/* DESKTOP / TABLET */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[1040px] border-collapse">
                <thead>
                  <tr className="bg-[#fafbfc]">
                    <th
                      className="
                        w-[20%]
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
                      Layer
                    </th>

                    <th
                      className="
                        w-[50%]
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
                      What this page may say
                    </th>

                    <th
                      className="
                        w-[30%]
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
                      Separate authority
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {settlementRows.map((row, index) => (
                    <tr key={row.layer}>
                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                          ${
                            index !== settlementRows.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {row.layer}
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
                          ${
                            index !== settlementRows.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {row.description}
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
                          ${
                            index !== settlementRows.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {row.authority}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {settlementRows.map((row, index) => (
                <div
                  key={row.layer}
                  className={`
                    flex
                    flex-col
                    gap-4
                    p-5
                    ${
                      index !== settlementRows.length - 1
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
                      Layer
                    </div>

                    <div className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.layer}
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
                      What this page may say
                    </div>

                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.description}
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
                      Separate authority
                    </div>

                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
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