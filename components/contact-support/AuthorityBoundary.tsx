export default function AuthorityBoundary() {
  const rows = [
    {
      need: "General issue requiring assisted review",
      authority: "Contact Support",
      behavior:
        "Collect minimum necessary context and create or route a request",
      authorityLink: true,
    },
    {
      need: "Cannot sign in or recover an account",
      authority: "Account Access",
      behavior: (
        <>
          Routed before case intake —{" "}
          <strong>recovery secrets are never requested here</strong>
        </>
      ),
      authorityLink: true,
    },
    {
      need: "Subscription or account charge issue",
      authority: "Billing Support",
      behavior: (
        <>
          Routed to secure billing intake;{" "}
          <strong>no unnecessary financial evidence on the general form</strong>
        </>
      ),
      authorityLink: true,
    },
    {
      need: "API, webhook or integration diagnostics",
      authority: "Integration Support",
      behavior: (
        <>
          Routed to specialized secure intake —{" "}
          <strong>secrets are never requested in a general form</strong>
        </>
      ),
    },
    {
      need: "Implementation or migration planning",
      authority: "Implementation Guidance",
      behavior:
        "Structured needs routed there before generic case creation",
    },
    {
      need: "Service outage or degradation",
      authority: "System Status",
      behavior: (
        <>
          Current operational truth stays in Status —{" "}
          <strong>no incident state published here</strong>
        </>
      ),
    },
    {
      need: "Security vulnerability",
      authority: "Responsible Disclosure",
      behavior: <strong>Ordinary support intake is not vulnerability intake</strong>,
    },
    {
      need: "Support coverage or commitment",
      authority: "Support Policy",
      behavior: <strong>No copied SLA, channel or response commitment</strong>,
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
                Authority &amp; escalation boundary
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
              Eight needs, and general intake owns only one of them.
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
              Routing is not a courtesy — a specialized route often has secure
              handling a general form cannot provide.
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[320px_208px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Need
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Authority
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Behavior here
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.need}
                  className={`grid grid-cols-[320px_208px_minmax(0,1fr)] ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  {/* NEED */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.need}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`text-sm leading-5 ${
                        row.authorityLink
                          ? "font-semibold text-[#2563eb]"
                          : "font-normal text-[#5d7192]"
                      }`}
                    >
                      {row.authority}
                    </span>
                  </div>

                  {/* BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
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
                  key={row.need}
                  className={`p-5 ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  {/* NEED */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Need
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.need}
                    </p>
                  </div>

                  {/* AUTHORITY */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Authority
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm leading-5 ${
                        row.authorityLink
                          ? "font-semibold text-[#2563eb]"
                          : "font-normal text-[#5d7192]"
                      }`}
                    >
                      {row.authority}
                    </p>
                  </div>

                  {/* BEHAVIOR */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Behavior here
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
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