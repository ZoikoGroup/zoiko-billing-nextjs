export default function WebhookContract() {
  const rows = [
    {
      area: "Expected event",
      evidence:
        "A public event or reference name, only where the current catalog supports it.",
      boundary: <strong>Event names are never invented</strong>,
    },
    {
      area: "Delivery evidence",
      evidence:
        "Delivery or reference ID, timestamp, status or error reference, safe endpoint context.",
      boundary: (
        <>
          Retry, ordering and concurrency semantics stay in Webhooks docs
        </>
      ),
    },
    {
      area: "Verification symptom",
      evidence: "Describe the verification failure.",
      boundary: (
        <>
          <strong>The signing secret is never shared</strong>; the method stays
          in Webhooks
        </>
      ),
    },
    {
      area: "Duplicate symptom",
      evidence:
        "Describe repeated delivery or effect, and consumer dedupe behavior if known.",
      boundary: (
        <>
          <strong>No exactly-once promise</strong> unless the authoritative
          contract states it
        </>
      ),
    },
    {
      area: "Replay or testing",
      evidence:
        "Use approved sandbox, testing or replay capability only.",
      boundary: (
        <strong>
          No invented replay control or retention window
        </strong>
      ),
    },
    {
      area: "Payload",
      evidence:
        "Redacted to the minimum relevant shape and fields.",
      boundary: "No full sensitive payload by default",
    },
  ];

  return (
    <section className="w-full bg-white">
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
                Webhook diagnostic contract
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Six areas where diagnosis stops and Developers begins.
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
              Support collects account-specific evidence. Retry, ordering and
              verification semantics remain in the public contract.
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
              <div
                className="
                  grid
                  grid-cols-[minmax(150px,0.55fr)_minmax(0,1.75fr)_minmax(250px,1.4fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Area
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Support evidence
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Authority boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    grid-cols-[minmax(150px,0.55fr)_minmax(0,1.75fr)_minmax(250px,1.4fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.area}
                    </span>
                  </div>

                  {/* SUPPORT EVIDENCE */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.evidence}
                    </span>
                  </div>

                  {/* AUTHORITY BOUNDARY */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.boundary}
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

                    sm:p-6

                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Area
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.area}
                    </p>
                  </div>

                  {/* SUPPORT EVIDENCE */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Support evidence
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.evidence}
                    </p>
                  </div>

                  {/* AUTHORITY BOUNDARY */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Authority boundary
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.boundary}
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