export default function AuditabilityPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Attribution",
      description: (
        <>
          The responsible person, role, system or approved source category,{" "}
          <strong>at a safe level</strong>.
        </>
      ),
      footer: (
        <>
          Actor or role label, with accessible
          <br className="hidden sm:block" /> detail.
        </>
      ),
    },
    {
      number: "02",
      title: "Change context",
      description:
        "What changed, the related object or category, and the effective context.",
      footer: (
        <>
          Before/after summary or change
          <br className="hidden sm:block" /> descriptor.
        </>
      ),
    },
    {
      number: "03",
      title: "Evidence linkage",
      description:
        "The connection between the decision and its supporting source, rationale or reference.",
      footer: (
        <>
          Evidence chip and link, with a detail
          <br className="hidden sm:block" /> drawer.
        </>
      ),
    },
    {
      number: "04",
      title: "Review state",
      description:
        "Whether the item is pending review, reviewed, questioned, corrected or otherwise unresolved.",
      footer: (
        <>
          <strong>Text status plus icon — never</strong>
          <br className="hidden sm:block" />
          <strong>colour only.</strong>
        </>
      ),
    },
    {
      number: "05",
      title: "Historical continuity",
      description:
        "Enough chronology to understand prior state and any later correction or supersession.",
      footer: (
        <>
          <strong>Timeline relationship. No</strong>
          <br className="hidden sm:block" />
          <strong>"immutable" claim.</strong>
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

            md:gap-7
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
                Five auditability principles
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
              Five things a reviewable record
              <br className="hidden sm:block" />
              carries.
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
              Recommended information architecture —{" "}
              <strong className="font-bold">
                not verified database fields or logging
                <br className="hidden sm:block" /> guarantees
              </strong>
              .
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-2

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="
                  flex
                  min-h-[270px]
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-4
                  pt-4
                  pb-7
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* NUMBER */}
                <div className="w-full">
                  <span
                    className="
                      text-[10px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {principle.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-1 w-full">
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {principle.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-1.5 w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {principle.description}
                  </p>
                </div>

                {/* FOOTER */}
                <div
                  className="
                    mt-auto
                    w-full
                    border-t
                    border-[#edf0f4]
                    pt-1.5
                  "
                >
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {principle.footer}
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