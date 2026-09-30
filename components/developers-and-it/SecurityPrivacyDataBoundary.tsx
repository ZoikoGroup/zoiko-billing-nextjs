export default function SecurityPrivacyDataBoundary() {
  const cards = [
    {
      title: "What data crosses the boundary?",
      content: (
        <>
          A mapping decision you own.{" "}
          <strong>The categories that cross are determined by your configuration</strong>
          , not by the platform default.
        </>
      ),
    },
    {
      title: "Security posture & evidence",
      content: (
        <>
          <a href="#" className="font-semibold text-blue-600">
            Security Overview
          </a>{" "}
          and{" "}
          <a href="#" className="font-semibold text-blue-600">
            Trust Center
          </a>{" "}
          own posture and assurance artifacts with scope attached.{" "}
          <strong>No certification is claimed here.</strong>
        </>
      ),
    },
    {
      title: "Processing terms",
      content: (
        <>
          <a href="#" className="font-semibold text-blue-600">
            DPA
          </a>{" "}
          governs processing performed on your instruction.
        </>
      ),
    },
    {
      title: "Onward providers",
      content: (
        <>
          <a href="#" className="font-semibold text-blue-600">
            Subprocessors
          </a>{" "}
          holds the register.{" "}
          <strong>A connected integration you choose is your arrangement, not a subprocessor relationship.</strong>
        </>
      ),
    },
    {
      title: "Access & credentials",
      content: (
        <>
          Owned by controlled access processes.{" "}
          <strong>
            No auth protocol, token format or credential lifecycle appears on
            this page.
          </strong>
        </>
      ),
    },
    {
      title: "Retention",
      content: (
        <>
          Retention and recoverability are separate authorities —{" "}
          <a href="#" className="font-semibold text-blue-600">
            Privacy &amp; Data Governance
          </a>{" "}
          and{" "}
          <a href="#" className="font-semibold text-blue-600">
            Business Continuity
          </a>
          .
        </>
      ),
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
            gap-5

            sm:gap-6
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
                  whitespace-nowrap
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
                Security, privacy &amp; data boundary
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
              Questions an evaluator should be
              <br className="hidden sm:block" />
              asking, routed to the authority that
              <br className="hidden sm:block" />
              answers them.
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
              Security posture and assurance evidence are owned elsewhere and
              carry their own scope.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-4
              pt-5

              sm:gap-5
            "
          >
            {cards.map((card) => (
              <article
                key={card.title}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:px-6
                  sm:py-5
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {card.title}
                </h3>

                {/* CONTENT */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]

                    sm:text-[13px]
                  "
                >
                  {card.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}