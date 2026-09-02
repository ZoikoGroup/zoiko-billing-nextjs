export default function RoutingPrecedence() {
  const rows = [
    {
      intent: "Possible vulnerability",
      priority: (
        <>
          <span className="font-semibold text-[#091127]">
            Responsible Disclosure
          </span>
          <span>, before any general form.</span>
        </>
      ),
      reason: (
        <>
          <strong>
            Avoids exposing exploit details to corporate intake
          </strong>{" "}
          — a general queue is the wrong place for an unpatched issue.
        </>
      ),
      specialist: true,
    },
    {
      intent: "Service outage",
      priority: "System Status, then Support per approved authority.",
      reason: (
        <>
          <strong>General contact cannot diagnose live availability</strong>,
          and Status may already have the answer.
        </>
      ),
      specialist: true,
    },
    {
      intent: "Account access problem",
      priority: (
        <>
          <span className="font-semibold text-[#091127]">
            Account Access
          </span>
          <span> or Contact Support.</span>
        </>
      ),
      reason: (
        <>
          May require identity-safe recovery —{" "}
          <strong>
            a corporate form must never collect recovery secrets
          </strong>
          .
        </>
      ),
      specialist: true,
    },
    {
      intent: "Subscription or charge issue",
      priority: (
        <>
          <span className="font-semibold text-[#091127]">
            Billing Support
          </span>
          <span>.</span>
        </>
      ),
      reason:
        "Requires specialized financial-evidence handling with its own data policy.",
      specialist: true,
    },
    {
      intent: "API or integration issue",
      priority: (
        <>
          <span className="font-semibold text-[#091127]">
            Integration Support
          </span>
          <span> or Developers.</span>
        </>
      ),
      reason: (
        <>
          Needs diagnostic evidence and a{" "}
          <strong>secret-safe process</strong> this page cannot provide.
        </>
      ),
      specialist: true,
    },
    {
      intent: "Privacy or data-rights request",
      priority: "Privacy and Legal authority.",
      reason:
        "Legal workflow and identity requirements may apply to the request.",
      specialist: true,
    },
    {
      intent: "Press or media",
      priority: "Newsroom and media route.",
      reason:
        "Corporate Communications owns statements and media assets.",
      specialist: false,
    },
    {
      intent: "Career or application",
      priority: (
        <>
          <span className="font-semibold text-[#091127]">Careers</span>
          <span> and recruiting authority.</span>
        </>
      ),
      reason:
        "Application, privacy and accommodation controls apply there.",
      specialist: false,
    },
    {
      intent: "Buying or evaluating",
      priority: "Sales and commercial path.",
      reason:
        "A genuine commercial conversion route, with minimal intake.",
      specialist: false,
    },
    {
      intent: "Other corporate",
      priority: "General fallback, where approved.",
      reason: (
        <strong>Only after every specialist route is excluded.</strong>
      ),
      specialist: false,
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
                Routing precedence
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
              Six intents take priority over general
              intake.
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
              These are not ranked suggestions. Where one is detected, the
              specialist route is offered{" "}
              <span className="font-bold">before</span> any general form is
              available.
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
                    Intent
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Priority action
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Why it takes precedence
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.intent}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* INTENT */}
                  <div
                    className={`px-4 py-3.5 ${
                      row.specialist ? "bg-[#f5f6f8]" : ""
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold leading-5 ${
                        row.specialist
                          ? "text-[#c52828]"
                          : "text-[#091127]"
                      }`}
                    >
                      {row.intent}
                    </span>
                  </div>

                  {/* PRIORITY ACTION */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.priority}
                    </span>
                  </div>

                  {/* REASON */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.reason}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.intent}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* INTENT */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Intent
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm font-semibold leading-5 ${
                        row.specialist
                          ? "text-[#c52828]"
                          : "text-[#091127]"
                      }`}
                    >
                      {row.intent}
                    </p>
                  </div>

                  {/* PRIORITY ACTION */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Priority action
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.priority}
                    </p>
                  </div>

                  {/* REASON */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Why it takes precedence
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.reason}
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