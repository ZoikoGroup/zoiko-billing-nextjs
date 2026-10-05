export default function AuthorityReviewSeparation() {
  const responsibilities = [
    {
      responsibility: "Draft / propose",
      behavior:
        "A billing, product or domain contributor prepares the change.",
      boundary: "Cannot self-certify tax or legal correctness.",
    },
    {
      responsibility: "Specialist review",
      behavior:
        "Qualified tax or legal interpretation where required.",
      boundary: "A page or a product cannot substitute for advice.",
    },
    {
      responsibility: "Governance approval",
      behavior:
        "Confirms the record meets the governance standard before approval.",
      boundary: "Approval is not effectiveness.",
    },
    {
      responsibility: "Publication",
      behavior:
        "Releases the record into its effective window.",
      boundary:
        "Blocked where the supporting source cannot be verified.",
    },
    {
      responsibility: "Evidence custodian",
      behavior:
        "Maintains supporting material and access boundaries.",
      boundary: "Controlled evidence shows an indicator only.",
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
              max-w-[1000px]
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
                Authority, review &amp; separation of duties
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Five responsibilities, and the first
              <br className="hidden sm:block" />
              cannot certify itself.
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
              Generic governance responsibilities unless product roles are
              source-established.{" "}
              <strong className="font-bold">
                None is a Zoiko Billing permission.
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
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] bg-[#091127]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Responsibility
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Recommended behavior
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Boundary
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {responsibilities.map((item, index) => (
              <div
                key={item.responsibility}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== responsibilities.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* RESPONSIBILITY */}
                <div className="border-r border-[#edf0f4] bg-[#fafafa] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {item.responsibility}
                  </span>
                </div>

                {/* BEHAVIOR */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {item.behavior}
                  </span>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#f8f8f8] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-red-900">
                    {item.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {responsibilities.map((item) => (
              <div
                key={item.responsibility}
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
                <div className="border-b border-[#edf0f4] bg-[#fafafa] px-4 py-3.5 sm:px-5">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Responsibility
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-5 text-[#091127]">
                    {item.responsibility}
                  </p>
                </div>

                {/* RECOMMENDED BEHAVIOR */}
                <div className="border-b border-[#edf0f4] px-4 py-4 sm:px-5">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Recommended behavior
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-5 text-[#091127]">
                    {item.behavior}
                  </p>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#f8f8f8] px-4 py-4 sm:px-5">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Boundary
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-5 text-red-900">
                    {item.boundary}
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