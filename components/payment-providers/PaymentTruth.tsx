const truthRows = [
  {
    dimension: "Integration availability",
    states:
      "Available · Limited · Partner-supported · Planned · Not available",
    authority: "Integration registry and Integration Availability",
  },
  {
    dimension: "Operational status",
    states:
      "Normal · Degraded · Incident · Maintenance · Unavailable · Stale",
    authority: "The operational status source",
  },
  {
    dimension: "Lifecycle",
    states:
      "Current · Deprecated · Sunset scheduled · Withdrawn · Replaced",
    authority: "Integration lifecycle owner",
  },
  {
    dimension: "Certification / review",
    states: "A named current certification, or Not published",
    authority: "Evidence registry — never a vague badge",
  },
  {
    dimension: "Provider service status",
    states:
      "External provider status where an approved source exists",
    authority: "The provider's own status authority",
  },
  {
    dimension: "Zoiko Billing incident",
    states: "Current platform or integration incident",
    authority: "System Status and Integration Support",
  },
  {
    dimension: "Customer configuration issue",
    states:
      "Credential, mapping, account or readiness problem",
    authority: "Authenticated diagnostics and support",
  },
  {
    dimension: "Provider-account onboarding issue",
    states:
      "Provider or customer responsibility per the operating model",
    authority: "Provider and commercial support boundary",
  },
];

export default function PaymentTruth() {
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
                Operational status, incidents, support &amp; compliance
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
              Eight truth dimensions, eight authorities.
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
              During an active payment incident, support, status and
              reconciliation safety take precedence over any upsell or
              provider-switch marketing.
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
                        w-[24%]
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
                      Truth dimension
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
                      Example states
                    </th>

                    <th
                      className="
                        w-[33%]
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
                      Authority
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {truthRows.map((row, index) => (
                    <tr key={row.dimension}>
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
                            index !== truthRows.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {row.dimension}
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
                            index !== truthRows.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {row.states}
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
                            index !== truthRows.length - 1
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
              {truthRows.map((row, index) => (
                <div
                  key={row.dimension}
                  className={`
                    flex
                    flex-col
                    gap-4
                    p-5
                    ${
                      index !== truthRows.length - 1
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
                      Truth dimension
                    </div>

                    <div className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.dimension}
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
                      Example states
                    </div>

                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.states}
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
                      Authority
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