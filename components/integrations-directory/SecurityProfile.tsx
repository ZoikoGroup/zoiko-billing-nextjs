export default function SecurityProfile() {
  const rows = [
    {
      area: "Authentication method",
      content: "The current method and version family where stable",
    },
    {
      area: "Credential owner",
      content:
        "Customer admin, provider, Zoiko service, service account or developer — explicit responsibility",
    },
    {
      area: "Secret handling",
      content:
        "Secrets are never pasted into public forms, analytics or logs; authenticated setup uses an approved secure flow",
    },
    {
      area: "Scopes & permissions",
      content:
        'High-level required permissions, with exact scopes in documentation. "Full access" is avoided unless truly required and justified',
    },
    {
      area: "Least privilege",
      content:
        "Only the permissions necessary for the documented capability",
    },
    {
      area: "Revocation",
      content:
        "How a connection is disabled or revoked, and what happens to queued or scheduled work",
    },
    {
      area: "Service identities",
      content:
        "Ownership, review, rotation and disable behavior where applicable",
    },
    {
      area: "Webhooks & events",
      content:
        "Verification, signature and retry semantics routed to authoritative documentation",
    },
    {
      area: "Data classes",
      content:
        "Customer, contact, billing, payment and document metadata categories at a high level",
    },
    {
      area: "Logging & retention",
      content:
        "Published only where the current Trust and documentation authority supports it",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        {/* HEADING */}
        <div
          className="
            flex
            w-full
            max-w-[1000px]
            flex-col
            items-center
            gap-3
            pt-2
            text-center
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
            "
          >
            Credential responsibility is named before setup.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-center
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            &quot;Connect&quot; is not a security model. Ten security areas are
            evaluable before anyone begins.
          </p>
        </div>

        {/* TABLE */}
        <div
          className="
            mt-8
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

            sm:mt-10

            md:mt-12
          "
        >
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* HEADER */}
              <div className="grid grid-cols-[208px_minmax(0,1fr)] bg-[#fafbfc]">
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  Area
                </div>

                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  Required content
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.area}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#eef1f5]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.area}
                  </div>

                  <div
                    className="
                      px-4
                      py-3.5
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {row.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE HINT */}
        <p className="mt-3 text-xs font-normal text-[#7890b2] sm:hidden">
          Swipe horizontally to view the full table.
        </p>
      </div>
    </section>
  );
}