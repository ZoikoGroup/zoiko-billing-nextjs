const exceptions = [
  {
    type: "Refund",
    control:
      "A separate capability linked to the original payment, with amount, currency, full or partial support, provider state and idempotency",
  },
  {
    type: "Void / cancel",
    control:
      "Only for eligible provider states, with timing and provider rule explicit",
  },
  {
    type: "Reversal",
    control:
      "Separate from refund where the provider model distinguishes them",
  },
  {
    type: "Duplicate or unknown charge",
    control:
      "Investigate the provider operation ID and idempotency before creating another financial action",
    emphasis: true,
  },
  {
    type: "Dispute / chargeback",
    control:
      "A provider and network-owned workflow; Billing may store status, reference and evidence links",
  },
  {
    type: "Dispute evidence upload",
    control:
      "Only if separately supported; sensitive data and deadlines follow the provider process",
  },
  {
    type: "Refund after settlement",
    control:
      "Provider-specific — never assumed identical to a pre-settlement cancel",
  },
  {
    type: "Currency conversion effects",
    control:
      "No automatic FX refund equivalence; provider and Multi-Currency evidence controls",
  },
  {
    type: "Accounting impact",
    control:
      "The accounting and ERP handoff stays separate — no journal automation implied",
  },
];

export default function PaymentExceptions() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
                Refunds, reversals, disputes &amp; chargebacks
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
              Zoiko Billing does not decide a dispute.
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
              It can surface and coordinate approved provider exception
              states. It does not decide card-network disputes, guarantee
              refund timing, guarantee recovered funds, or give
              payment-regulatory advice.
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
              <table className="w-full min-w-[900px] border-collapse">
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
                      Exception type
                    </th>

                    <th
                      className="
                        w-[80%]
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
                      Required control
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {exceptions.map((item, index) => (
                    <tr key={item.type}>
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
                            index !== exceptions.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {item.type}
                      </td>

                      <td
                        className={`
                          px-4
                          py-3.5
                          align-top
                          text-sm
                          leading-5
                          ${
                            item.emphasis
                              ? "font-bold text-[#5d7192]"
                              : "font-normal text-[#5d7192]"
                          }
                          ${
                            index !== exceptions.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {item.control}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {exceptions.map((item, index) => (
                <div
                  key={item.type}
                  className={`
                    flex
                    flex-col
                    gap-3
                    p-5
                    ${
                      index !== exceptions.length - 1
                        ? "border-b border-[#edf0f5]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    Exception type
                  </div>

                  <div className="text-sm font-semibold leading-5 text-[#091127]">
                    {item.type}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    Required control
                  </div>

                  <div
                    className={`
                      text-sm
                      leading-5
                      ${
                        item.emphasis
                          ? "font-bold text-[#5d7192]"
                          : "font-normal text-[#5d7192]"
                      }
                    `}
                  >
                    {item.control}
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