export default function RequestPaths() {
  const rows = [
    {
      intent: "Need an unsupported connection",
      route:
        "Build an integration, or the API overview where the developer gate supports it.",
      boundary: "No API or SDK capability is invented",
    },
    {
      intent: "Provider wants a listing",
      route: "Submit an integration, or technology partners.",
      boundary: "Submission does not approve, certify or publish",
    },
    {
      intent: "Buyer wants an unlisted connector",
      route: "A structured request path where approved.",
      boundary:
        "Acknowledgement only — no roadmap acceptance, date or launch promise",
    },
    {
      intent: "Existing integration needs help",
      route: "Integration support.",
      boundary: "An operational issue does not go to sales",
    },
    {
      intent: "Security or procurement question",
      route:
        "Trust and security, plus the integration detail evidence.",
      boundary: "No unsupported certifications",
    },
    {
      intent: "Availability question",
      route: "Integration availability.",
      boundary: "No salesperson overrides registry status",
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
              Build, partner, request &amp; submit paths
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
            A request is demand evidence, not a roadmap.
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
            Six intents, six correct routes, and a truth boundary on each.
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
            <div className="min-w-[1040px]">
              {/* HEADER */}
              <div className="grid grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)] bg-[#fafbfc]">
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
                  Intent
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
                  Correct route
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
                  Truth boundary
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.intent}
                  className={`
                    grid
                    grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)]
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
                    {row.intent}
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
                    {row.route}
                  </div>

                  <div
                    className={`
                      px-4
                      py-3.5
                      text-sm
                      leading-5
                      ${
                        row.intent === "Buyer wants an unlisted connector"
                          ? "font-bold"
                          : "font-normal"
                      }
                      text-[#5d7192]
                    `}
                  >
                    {row.boundary}
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