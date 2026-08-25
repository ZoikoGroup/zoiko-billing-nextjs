const operations = [
  {
    operation: "Create / charge",
    meaning: "Create a provider-side payment request where supported.",
    detail:
      "Amount, currency, source object, idempotency and provider result semantics",
  },
  {
    operation: "Authorize",
    meaning: "Reserve or authorize funds if the provider model supports it.",
    detail:
      "Separate from capture and settlement; no universal card-processing claim",
  },
  {
    operation: "Capture",
    meaning: "Capture an existing authorization where supported.",
    detail: "Partial or multiple capture only if explicitly registered",
  },
  {
    operation: "Status read",
    meaning: "Retrieve the provider processing state.",
    detail: "Provider state mapping plus freshness and finality",
  },
  {
    operation: "Cancel / void / reverse",
    meaning: "Stop or reverse an eligible operation if supported.",
    detail: "Eligibility, timing and provider state explicit",
  },
  {
    operation: "Refund",
    meaning: "Create or read a refund where supported.",
    detail:
      "Full or partial, currency, original payment relation, provider status",
  },
  {
    operation: "Dispute read",
    meaning:
      "Receive or read provider dispute state and evidence references if supported.",
    detail: "The provider owns the dispute process and decision",
    emphasis: true,
  },
  {
    operation: "Settlement read",
    meaning: "Read provider settlement or payout evidence where supported.",
    detail: "Does not equal bank reconciliation",
  },
  {
    operation: "Method management",
    meaning:
      "Provider-supported references, tokens or configuration if approved.",
    detail: "Raw credential storage is not implied",
  },
];

export default function PaymentOperations() {
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
                Supported payment operations &amp; lifecycle
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
              Charge capability does not imply refund capability.
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
              Nine operation classes, each registered separately, because
              different providers use different payment state machines.
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
                        w-[15%]
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
                      Operation
                    </th>

                    <th
                      className="
                        w-[43%]
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
                      Meaning
                    </th>

                    <th
                      className="
                        w-[42%]
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
                      Required detail
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {operations.map((item, index) => (
                    <tr key={item.operation}>
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
                            index !== operations.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {item.operation}
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
                            index !== operations.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {item.meaning}
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
                            index !== operations.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {item.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {operations.map((item, index) => (
                <div
                  key={item.operation}
                  className={`
                    flex
                    flex-col
                    gap-4
                    p-5
                    ${
                      index !== operations.length - 1
                        ? "border-b border-[#edf0f5]"
                        : ""
                    }
                  `}
                >
                  {/* OPERATION */}
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
                      Operation
                    </div>

                    <div className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.operation}
                    </div>
                  </div>

                  {/* MEANING */}
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
                      Meaning
                    </div>

                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.meaning}
                    </div>
                  </div>

                  {/* REQUIRED DETAIL */}
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
                      Required detail
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
                      {item.detail}
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