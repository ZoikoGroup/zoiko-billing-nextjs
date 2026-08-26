export default function SandboxDataGovernance() {
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
                Data governance, privacy &amp; retention
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
              Non-production is not un-governed.
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
              Retention, export and deletion behavior for sandbox data comes
              from canonical policy, never from this page.
            </p>
          </div>

          {/* GOVERNANCE CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              md:grid-cols-2
            "
          >
            {/* GOVERNANCE STILL APPLIES */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-2
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-6
                pt-6
                pb-9
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Governance still applies
              </h3>

              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Data minimization, purpose limitation, least privilege and
                secure defaults apply in the sandbox exactly as they do in
                production. The environment label changes the risk profile,
                not the obligations.
              </p>
            </div>

            {/* RETENTION IS SOURCED */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-2
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#edf0f4]
                px-6
                pt-6
                pb-9
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Retention is sourced
              </h3>

              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                How long sandbox data, logs and delivery evidence persist is
                published only where canonical data-governance policy defines
                it. No default period is assumed or implied here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}