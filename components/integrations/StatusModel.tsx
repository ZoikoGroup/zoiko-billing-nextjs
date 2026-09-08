export default function StatusModel() {
  const axes = [
    {
      label: "Axis 01 · Registry",
      title: "Availability & lifecycle",
      description: (
        <>
          Answers <strong>whether and how</strong> the integration is offered.
        </>
      ),
      statuses: [
        "Available",
        "Requires setup",
        "Enterprise setup",
        "Limited availability",
        "Coming soon",
        "Deprecated",
        "Not supported",
      ],
    },
    {
      label: "Axis 02 · Status authority",
      title: "Operational health",
      description: (
        <>
          Answers <strong>current health only</strong>, from the status source.
        </>
      ),
      statuses: [
        "Operational",
        "Degraded",
        "Partial outage",
        "Major outage",
        "Maintenance",
        "Unknown",
      ],
    },
    {
      label: "Axis 03 · Authenticated only",
      title: "Tenant configuration state",
      description: (
        <>
          Authenticated product context <strong>only</strong>.
        </>
      ),
      statuses: [
        "Not connected",
        "Connected",
        "Needs attention",
        "Reauthorization required",
        "Configuration incomplete",
      ],
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
                Status model
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
              Three axes, never merged into one
            
              badge.
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
              Availability, operational health and tenant configuration answer
              different questions from different authorities.
            </p>
          </div>

          {/* AXIS CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-2

              md:grid-cols-3
              md:gap-3.5
            "
          >
            {axes.map((axis) => (
              <div
                key={axis.label}
                className="
                  flex
                  min-w-0
                  flex-col
                  items-start
                  gap-1
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-4
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* AXIS LABEL */}
                <div className="flex w-full flex-col items-start">
                  <span
                    className="
                      w-full
                      text-xs
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {axis.label}
                  </span>
                </div>

                {/* TITLE */}
                <div className="flex w-full flex-col items-start">
                  <h3
                    className="
                      !m-0
                      w-full
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {axis.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="flex w-full flex-col items-start pb-1">
                  <p
                    className="
                      !m-0
                      w-full
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {axis.description}
                  </p>
                </div>

                {/* STATUS BADGES */}
                <div
                  className="
                    flex
                    w-full
                    flex-wrap
                    content-start
                    gap-2
                    pt-2
                  "
                >
                  {axis.statuses.map((status) => (
                    <span
                      key={status}
                      className="
                        inline-flex
                        min-h-6
                        items-center
                        rounded-[5px]
                        border
                        border-[#dfe5ee]
                        bg-[#fafbfc]
                        px-2
                        py-1
                        text-xs
                        font-normal
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {status}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}