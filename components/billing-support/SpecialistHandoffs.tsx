export default function SpecialistHandoffs() {
  const handoffs = [
    {
      title: "Access problems",
      description:
        "Resolve identity first through Account Access. Billing Support does not bypass authentication.",
    },
    {
      title: "Tax or legal determination",
      description:
        "Routed to the approved authority. General support does not make tax or legal determinations.",
    },
    {
      title: "Payment method changes",
      description: (
        <>
          Routed to the approved secure account control where one exists —{" "}
          <strong>never promised as support-mediated</strong>.
        </>
      ),
    },
    {
      title: "Refund or credit",
      description:
        "Selecting a topic never promises entitlement. Eligibility is determined by the operational process, not the form.",
    },
    {
      title: "Suspected service incident",
      description:
        "System Status owns current service state. Charge review may follow only where applicable.",
    },
    {
      title: "Product-use questions",
      description:
        "Help Center and Documentation own how to work with invoices, receivables and reconciliation.",
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
                Specialist handoffs
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
              Where a billing question stops being a billing question.
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
              Six escalation paths that this surface routes to rather than
              attempting.
            </p>
          </div>

          {/* HANDOFF CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {handoffs.map((handoff) => (
              <div
                key={handoff.title}
                className="
                  flex
                  min-h-[180px]
                  w-full
                  flex-col
                  items-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <div className="w-full">
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {handoff.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]

                      sm:text-sm
                    "
                  >
                    {handoff.description}
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