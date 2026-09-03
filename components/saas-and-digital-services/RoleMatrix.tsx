const rows = [
  {
    decision: "Provide service, plan or change context",
    product: "Own and source",
    billing: "Consume",
    finance: "View",
    it: "Integrate",
    commercial: "May source approved commercial context",
  },
  {
    decision: "Provide usage or seat quantity",
    product: "Own and source if applicable",
    billing: "Validate",
    finance: "View",
    it: "Integrate",
    commercial: "No",
  },
  {
    decision: "Define billing basis or schedule",
    product: "Consult",
    billing: "Own",
    finance: "Review",
    it: "Admin support",
    commercial: "No",
  },
  {
    decision: "Approve change, fee or invoice",
    product: "No unless separately authorized",
    billing: "Role-based",
    finance: "Own where policy requires",
    it: "No",
    commercial: "No",
  },
  {
    decision: "Issue or deliver",
    product: "View",
    billing: "Own",
    finance: "View",
    it: "Supports connectors",
    commercial: "No",
  },
  {
    decision: "Manage reminder & dispute policy",
    product: "View",
    billing: "Operate as authorized",
    finance: "Own or approve as configured",
    it: "No",
    commercial: "No",
  },
  {
    decision: "Payment allocation & reconciliation",
    product: "View",
    billing: "Assist",
    finance: "Own",
    it: "Integration support",
    commercial: "No",
  },
  {
    decision: "Change API or integration mapping",
    product: "Consult",
    billing: "Consult",
    finance: "Consult",
    it: "Own",
    commercial: "No",
  },
  {
    decision: "Change service entitlement or access",
    product: "Own upstream if authorized",
    billing: "No",
    finance: "No",
    it: "Integration support",
    commercial: "No",
  },
];

const columns = [
  { key: "decision", label: "Decision" },
  { key: "product", label: "Product / RevOps source" },
  { key: "billing", label: "Billing Ops" },
  { key: "finance", label: "Finance / AR" },
  { key: "it", label: "IT / integration" },
  { key: "commercial", label: "Commercial" },
];

export default function RoleMatrix() {
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
              max-w-[900px]
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
                Roles, approvals, change control &amp; audit
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
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
              <span className="block">
                Owning the product does not mean
              </span>

              <span className="block">
                approving the invoice.
              </span>
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
              Product, RevOps and Customer Success provide the service and
              change context. That is a different authority from billing
              approval, credit, payment, reconciliation and reminder policy.
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
            {/* MOBILE HORIZONTAL SCROLL */}
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse">
                {/* HEADER */}
                <thead>
                  <tr className="bg-[#fafbfc]">
                    {columns.map((column) => (
                      <th
                        key={column.key}
                        className="
                          border-b
                          border-[#dfe5ee]
                          px-4
                          py-3.5
                          text-left
                          text-xs
                          font-bold
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.decision}>
                      {/* DECISION */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                          ${
                            index !== rows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        {row.decision}
                      </td>

                      {/* PRODUCT */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                          ${
                            index !== rows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        {row.product}
                      </td>

                      {/* BILLING */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                          ${
                            index !== rows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        {row.billing}
                      </td>

                      {/* FINANCE */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                          ${
                            index !== rows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        {row.finance}
                      </td>

                      {/* IT */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                          ${
                            index !== rows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        {row.it}
                      </td>

                      {/* COMMERCIAL */}
                      <td
                        className={`
                          px-4
                          py-3.5
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                          ${
                            index !== rows.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        {row.commercial}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}