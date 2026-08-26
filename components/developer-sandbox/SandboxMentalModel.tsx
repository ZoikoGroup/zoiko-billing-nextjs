export default function SandboxMentalModel() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Sandbox mental model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Four layers that stop a test environment becoming business{" "}
              <span className="whitespace-nowrap sm:whitespace-normal">
                truth.
              </span>
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
              Each layer answers a different question, and none of them
              answers for another.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[112px_320px_1fr] bg-[#fafbfc]">
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
                  Layer
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
                  Question
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
                  Required message
                </span>
              </div>
            </div>

            {/* ENVIRONMENT */}
            <div className="grid grid-cols-[112px_320px_1fr]">
              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-semibold leading-5 text-[#091127]">
                  Environment
                </span>
              </div>

              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Where is this action occurring?
                </span>
              </div>

              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Non-production context must be explicit
                </span>
              </div>
            </div>

            {/* DATA */}
            <div className="grid grid-cols-[112px_320px_1fr]">
              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-semibold leading-5 text-[#091127]">
                  Data
                </span>
              </div>

              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  What information is safe to use?
                </span>
              </div>

              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Synthetic or approved test data —{" "}
                  <strong className="font-bold">
                    never assume copied production data is allowed
                  </strong>
                </span>
              </div>
            </div>

            {/* BEHAVIOR */}
            <div className="grid grid-cols-[112px_320px_1fr]">
              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-semibold leading-5 text-[#091127]">
                  Behavior
                </span>
              </div>

              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  How faithfully is this capability represented?
                </span>
              </div>

              <div className="border-b border-[#edf0f4] px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Check the canonical fidelity status and limitations
                </span>
              </div>
            </div>

            {/* TRANSITION */}
            <div className="grid grid-cols-[112px_320px_1fr]">
              <div className="px-4 py-3.5">
                <span className="text-sm font-semibold leading-5 text-[#091127]">
                  Transition
                </span>
              </div>

              <div className="px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  What still changes before production?
                </span>
              </div>

              <div className="px-4 py-3.5">
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Credentials, configuration, identifiers, limits, side
                  effects and operational controls may differ and must be
                  revalidated
                </span>
              </div>
            </div>
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {/* ENVIRONMENT */}
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
              <div className="border-b border-[#e8ecf2] bg-[#fafbfc] px-5 py-4">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Environment
                </span>
              </div>

              <div className="space-y-4 px-5 py-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Question
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    Where is this action occurring?
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Required message
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    Non-production context must be explicit
                  </p>
                </div>
              </div>
            </div>

            {/* DATA */}
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
              <div className="border-b border-[#e8ecf2] bg-[#fafbfc] px-5 py-4">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Data
                </span>
              </div>

              <div className="space-y-4 px-5 py-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Question
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    What information is safe to use?
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Required message
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    Synthetic or approved test data —{" "}
                    <strong className="font-bold text-[#5d7192]">
                      never assume copied production data is allowed
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* BEHAVIOR */}
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
              <div className="border-b border-[#e8ecf2] bg-[#fafbfc] px-5 py-4">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Behavior
                </span>
              </div>

              <div className="space-y-4 px-5 py-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Question
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    How faithfully is this capability represented?
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Required message
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    Check the canonical fidelity status and limitations
                  </p>
                </div>
              </div>
            </div>

            {/* TRANSITION */}
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
              <div className="border-b border-[#e8ecf2] bg-[#fafbfc] px-5 py-4">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Transition
                </span>
              </div>

              <div className="space-y-4 px-5 py-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Question
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    What still changes before production?
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Required message
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    Credentials, configuration, identifiers, limits, side
                    effects and operational controls may differ and must be
                    revalidated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}