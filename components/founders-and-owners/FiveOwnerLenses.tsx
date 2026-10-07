export default function FiveOwnerLenses() {
  const lenses = [
    {
      number: "Lens 01",
      title: "Visibility",
      text: (
        <>
          Can I see the material decisions{" "}
          <strong>without digging through operational detail</strong>?
        </>
      ),
    },
    {
      number: "Lens 02",
      title: "Ownership",
      text: (
        <>
          Is it clear <strong>who is accountable</strong> for billing
          decisions and escalation?
        </>
      ),
    },
    {
      number: "Lens 03",
      title: "Change",
      text: (
        <>
          Do important changes have an{" "}
          <strong>understandable review path</strong> and context?
        </>
      ),
    },
    {
      number: "Lens 04",
      title: "Exceptions",
      text: (
        <>
          Do unresolved exceptions have{" "}
          <strong>owners, status and follow-up</strong>?
        </>
      ),
    },
    {
      number: "Lens 05",
      title: "Growth readiness",
      text: (
        <>
          Will the operating model <strong>remain understandable</strong> as
          complexity increases?
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
                Five owner lenses
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
              Five questions an owner should be
              <br className="hidden sm:block" />
              able to answer without digging.
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
              If any of these requires a conversation with three people, that
              is the finding.
            </p>
          </div>

          {/* LENS CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-5

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {lenses.map((lens) => (
              <div
                key={lens.number}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-4
                  pb-7
                  pt-4
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:min-h-[220px]

                  lg:min-h-[260px]
                "
              >
                {/* LENS NUMBER */}
                <div className="flex w-full flex-col items-start">
                  <span
                    className="
                      text-[10px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {lens.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-1.5 flex w-full flex-col items-start">
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {lens.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-1.5 flex w-full flex-col items-start">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {lens.text}
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