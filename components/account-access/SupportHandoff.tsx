export default function SupportHandoff() {
  const rows = [
    {
      need: "General sign-in guidance",
      destination: "Help Center",
      behavior: "Explain public safe steps only",
    },
    {
      need: "Unresolved access issue",
      destination: "Contact Support",
      behavior: "Pass only safe flow context, where approved",
    },
    {
      need: "Identity setup question",
      destination: "Documentation · Implementation guidance",
      behavior: "Public product and admin guidance only",
    },
    {
      need: "Current outage",
      destination: "System Status",
      behavior: "No copied incident state",
    },
    {
      need: "Suspected compromised account",
      destination: "Help · Contact Support per routing",
      behavior: "No public account-security diagnostics or bypass",
    },
    {
      need: "Security vulnerability in sign-in",
      destination: "Responsible Disclosure",
      behavior: "General support is not vulnerability intake",
    },
    {
      need: "Privacy or data rights",
      destination: "Privacy · Legal authority",
      behavior: "No identity or legal adjudication on a login page",
    },
    {
      need: "Support commitment",
      destination: "Support Policy",
      behavior: "No service-level or response-time copy",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col items-center
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[1000px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Safe support &amp; security handoffs
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Eight routes, and none of them can
              override identity.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Recovery and support paths never imply that staff can bypass
              authentication controls or accept credentials.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl border border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              <div
                className="
                  grid
                  grid-cols-[320px_384px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    User need
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Destination
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Behavior on this page
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid grid-cols-[320px_384px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.need}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.destination}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className={`text-sm leading-5 text-[#5d7192] ${
                        row.behavior.startsWith("No ")
                          ? "font-bold"
                          : "font-normal"
                      }`}
                    >
                      {row.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* USER NEED */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      User need
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.need}
                    </p>
                  </div>

                  {/* DESTINATION */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Destination
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.destination}
                    </p>
                  </div>

                  {/* BEHAVIOR */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Behavior on this page
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm leading-6 text-[#5d7192] ${
                        row.behavior.startsWith("No ")
                          ? "font-bold"
                          : "font-normal"
                      }`}
                    >
                      {row.behavior}
                    </p>
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