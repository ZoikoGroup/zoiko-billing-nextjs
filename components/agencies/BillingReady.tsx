import Image from "next/image";

const states = [
  {
    label: "Not assessed",
    type: "neutral",
  },
  {
    label: "Needs input",
    type: "orange",
  },
  {
    label: "Needs evidence",
    type: "orange",
  },
  {
    label: "Needs approval",
    type: "approval",
  },
  {
    label: "Ready",
    type: "green",
  },
  {
    label: "Changed since review",
    type: "orange",
  },
  {
    label: "Blocked",
    type: "red",
  },
  {
    label: "Unsupported",
    type: "disabled",
  },
  {
    label: "Unknown",
    type: "blue",
  },
];

const stateStyles = {
  neutral: "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]",
  orange: "border-[#f1dfc7] bg-[#fff8ed] text-[#9a681f]",
  approval: "border-[#dfe5ee] bg-[#f1f3f6] text-[#5d7192]",
  green: "border-[#cfe8d5] bg-[#f1faf3] text-[#3b7a4a]",
  red: "border-[#f0d1d1] bg-[#fff4f4] text-[#b54d4d]",
  disabled: "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]",
  blue: "border-[#dce6f5] bg-[#f4f8fd] text-[#58759d]",
};

const dotStyles = {
  neutral: "bg-[#7890b2]",
  orange: "bg-[#c58a38]",
  approval: "bg-[#7890b2]",
  green: "bg-[#4d9960]",
  red: "bg-[#c85a5a]",
  disabled: "bg-[#7890b2]",
  blue: "bg-[#58759d]",
};

export default function BillingReady() {
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
            items-start
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
              max-w-[900px]
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="flex h-4 items-center gap-3">
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
                Billing readiness, fee basis &amp; evidence
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[850px]
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
              Readiness is a list of named blockers, not a percentage.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[686px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A single missing fee basis, source document, approval or
              client-cost relationship can block billing — so it stays visible
              instead of disappearing into a score.
            </p>
          </div>

          {/* MAIN IMAGE */}
          <div
            className="
              mt-1
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <Image
              src="/images/agencies/ready.png"
              alt="Billing readiness overview"
              width={1264}
              height={632}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* BOTTOM CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              lg:grid-cols-2
            "
          >
            {/* READINESS STATE MODEL */}
            <div
              className="
                flex
                min-h-[220px]
                flex-col
                gap-3.5
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
                sm:py-6
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-semibold
                  leading-7
                  text-[#091127]
                "
              >
                Readiness state model
              </h3>

              <div className="flex flex-wrap gap-2">
                {states.map((state) => (
                  <span
                    key={state.label}
                    className={`
                      inline-flex
                      min-h-6
                      items-center
                      rounded-md
                      border
                      px-2.5
                      py-0.5
                      text-xs
                      font-semibold
                      leading-4
                      ${stateStyles[state.type as keyof typeof stateStyles]}
                    `}
                  >
                    <span
                      className={`
                        mr-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-sm
                        ${dotStyles[state.type as keyof typeof dotStyles]}
                      `}
                    />

                    {state.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CHANGED MEANS RE-REVIEW */}
            <div
              className="
                flex
                min-h-[220px]
                flex-col
                gap-3
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
                sm:py-6
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-semibold
                  leading-7
                  text-[#091127]
                "
              >
                Changed means re-review
              </h3>

              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                A Ready engagement becomes Changed since review when its
                material fee, source, cost, schedule, approval or integration
                context changes. A fee arrangement change gets a new version
                and effective date; a markup rule change revalidates the costs
                it touches; a mapping change triggers a targeted integration
                test.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}