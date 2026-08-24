const securityRows = [
  {
    area: "Authentication method",
    behavior:
      'The registered provider method — not a generic "secure connection" label',
  },
  {
    area: "Credential owner",
    behavior:
      "Customer admin, provider, Zoiko service or developer, stated explicitly",
  },
  {
    area: "Secret handling",
    behavior:
      "No secret in a URL, log, analytics event, screenshot or marketing form",
  },
  {
    area: "Scopes and permissions",
    behavior:
      'Least privilege for the documented operations; "full access" avoided unless truly required',
  },
  {
    area: "Rotation",
    behavior:
      "Credential rotation supported and documented where the provider allows it",
  },
  {
    area: "Revocation",
    behavior:
      "How the connection is disabled, and what happens to queued or pending operations",
  },
  {
    area: "Service identities",
    behavior: "Ownership, review and disable behavior where applicable",
  },
  {
    area: "Webhook authenticity",
    behavior:
      "Verification and signature semantics routed to authoritative documentation",
  },
  {
    area: "Certification",
    behavior:
      "Named scheme, subject, scope, issuer and effective state — or omitted entirely",
  },
];

export default function PaymentSecurity() {
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
                Authentication, credentials, permissions &amp; security
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
              Credential ownership is stated before connect.
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
              Who holds the secret, what scope it carries, and how it is
              rotated or revoked are evaluation facts, not setup surprises.
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
                      Area
                    </th>

                    <th
                      className="
                        w-[76%]
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
                      Required behavior
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {securityRows.map((row, index) => (
                    <tr key={row.area}>
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
                            index !== securityRows.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {row.area}
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
                            index !== securityRows.length - 1
                              ? "border-b border-[#edf0f5]"
                              : ""
                          }
                        `}
                      >
                        {row.behavior}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {securityRows.map((row, index) => (
                <div
                  key={row.area}
                  className={`
                    flex
                    flex-col
                    gap-3
                    p-5
                    ${
                      index !== securityRows.length - 1
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
                    Area
                  </div>

                  <div className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.area}
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
                    Required behavior
                  </div>

                  <div className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.behavior}
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