export default function AuthorityReviewApprovalModel() {
  const rows = [
    {
      responsibility: "Business / finance owner",
      scope: "Owns business context and acceptable operating policy.",
      boundary: "Generic role unless a product role is verified.",
      boldBoundary: false,
    },
    {
      responsibility: "Billing operator",
      scope: "Prepares or applies billing-side decision context.",
      boundary: "Do not imply unrestricted rate editing.",
      boldBoundary: true,
    },
    {
      responsibility: "Reviewer / controller",
      scope: "Reviews provenance, timing, exceptions and evidence.",
      boundary: "No certification or audit sign-off claim.",
      boldBoundary: true,
    },
    {
      responsibility: "Technical owner",
      scope: "Owns integration and data-flow concerns.",
      boundary: "No API or topology claim.",
      boldBoundary: true,
    },
    {
      responsibility: "Treasury / provider stakeholder",
      scope:
        "An external or adjacent source or execution stakeholder where applicable.",
      boundary:
        "Zoiko Billing is not represented as treasury, bank or provider.",
      boldBoundary: true,
    },
  ];

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
              pb-2
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
                Authority, review &amp; approval model
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
              Five responsibilities, and the fifth is
             
              external.
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
              Generic categories only.{" "}
              <strong className="font-bold">
                None is a verified Zoiko Billing product role.
              </strong>
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* HEADER */}
            <div
              className="
                grid
                grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                bg-[#14233f]
              "
            >
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Responsibility
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Recommended scope
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Public claim boundary
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row) => (
              <div
                key={row.responsibility}
                className="
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  border-t
                  border-[#e8ebf0]
                "
              >
                {/* RESPONSIBILITY */}
                <div
                  className="
                    border-r
                    border-[#e8ebf0]
                    bg-[#fbfcfd]
                    px-3.5
                    py-3
                  "
                >
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.responsibility}
                  </span>
                </div>

                {/* RECOMMENDED SCOPE */}
                <div
                  className="
                    border-r
                    border-[#e8ebf0]
                    px-3.5
                    py-3
                  "
                >
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.scope}
                  </span>
                </div>

                {/* PUBLIC CLAIM BOUNDARY */}
                <div className="bg-[#f8f9fb] px-3.5 py-3">
                  <span
                    className={`
                      text-xs
                      leading-5
                      text-red-900
                      ${
                        row.boldBoundary
                          ? "font-bold"
                          : "font-normal"
                      }
                    `}
                  >
                    {row.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {rows.map((row) => (
              <div
                key={row.responsibility}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* RESPONSIBILITY */}
                <div className="border-b border-[#e8ebf0] bg-[#fbfcfd] px-4 py-3">
                  <p className="!m-0 text-xs font-bold leading-5 text-[#091127]">
                    {row.responsibility}
                  </p>
                </div>

                {/* RECOMMENDED SCOPE */}
                <div className="border-b border-[#e8ebf0] px-4 py-3">
                  <p className="!m-0 mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Recommended scope
                  </p>

                  <p className="!m-0 text-xs font-normal leading-5 text-[#091127]">
                    {row.scope}
                  </p>
                </div>

                {/* PUBLIC CLAIM BOUNDARY */}
                <div className="bg-[#f8f9fb] px-4 py-3">
                  <p className="!m-0 mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Public claim boundary
                  </p>

                  <p
                    className={`
                      !m-0
                      text-xs
                      leading-5
                      text-red-900
                      ${
                        row.boldBoundary
                          ? "font-bold"
                          : "font-normal"
                      }
                    `}
                  >
                    {row.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}