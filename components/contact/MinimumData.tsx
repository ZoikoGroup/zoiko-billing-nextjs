export default function MinimumData() {
  const routes = [
    {
      route: "Sales / commercial",
      minimum: (
        <>
          Name, business contact, high-level buying need. Organization
          optional; region only if routing requires it.
        </>
      ),
      excluded: (
        <>
          Support credentials, card or bank data, private account details,
          security findings
        </>
      ),
    },
    {
      route: "Customer support",
      minimum: (
        <>
          <strong>No generic contact fields.</strong> Handoff to approved
          support intake.
        </>
      ),
      excluded:
        "Do not duplicate support forms — a second intake drifts from the first",
    },
    {
      route: "Privacy / legal",
      minimum: (
        <>
          <strong>No generic legal narrative</strong> where a dedicated
          authority exists. Route to the approved form or contact.
        </>
      ),
      excluded: "Passwords, payment data, unnecessary sensitive data",
    },
    {
      route: "Press / media",
      minimum:
        "Name, publication or organization, business contact. Topic and deadline only if approved.",
      excluded:
        "Private employee data, embargoed material not authorized for intake",
    },
    {
      route: "Careers / recruiting",
      minimum: (
        <>
          <strong>No resume or application data.</strong> Route to Careers and
          its application system.
        </>
      ),
      excluded: "CV or resume, identity documents, protected-trait data",
    },
    {
      route: "Security disclosure",
      minimum: (
        <>
          <strong>No general-form capture at all.</strong> Responsible
          Disclosure only.
        </>
      ),
      excluded: "Exploit steps, secrets, tokens, production data",
      security: true,
    },
    {
      route: "General corporate",
      minimum:
        "Name and contact if a reply is needed, plus a short subject and message.",
      excluded:
        "Account, billing, integration, security, privacy or candidate-sensitive data",
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
                Minimum data by route
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
              Seven routes, and four of them collect
             
              nothing here.
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
              The exclusion column matters as much as the minimum — each names
              data that a well-meaning person might otherwise volunteer.
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
              <div className="grid grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Route
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Default minimum
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Explicitly excluded
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {routes.map((item, index) => (
                <div
                  key={item.route}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== routes.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* ROUTE */}
                  <div
                    className={`px-4 py-3.5 ${
                      item.security ? "bg-[#f5f6f8]" : ""
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold leading-5 ${
                        item.security
                          ? "text-[#c52828]"
                          : "text-[#091127]"
                      }`}
                    >
                      {item.route}
                    </span>
                  </div>

                  {/* DEFAULT MINIMUM */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.minimum}
                    </span>
                  </div>

                  {/* EXCLUDED */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.excluded}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {routes.map((item, index) => (
                <div
                  key={item.route}
                  className={`
                    p-5
                    ${
                      index !== routes.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* PATH / ROUTE */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Route
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm font-semibold leading-5 ${
                        item.security
                          ? "text-[#c52828]"
                          : "text-[#091127]"
                      }`}
                    >
                      {item.route}
                    </p>
                  </div>

                  {/* DEFAULT MINIMUM */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Default minimum
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.minimum}
                    </p>
                  </div>

                  {/* EXPLICITLY EXCLUDED */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Explicitly excluded
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.excluded}
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