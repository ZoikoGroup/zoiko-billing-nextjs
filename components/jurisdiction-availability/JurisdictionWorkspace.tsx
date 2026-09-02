import Image from "next/image";

const dependencyRows = [
  {
    title: "Dependency",
    description:
      "The approved partner or provider category, or name where disclosure is authorized",
  },
  {
    title: "Responsibility boundary",
    description:
      "What Zoiko Billing controls versus what the partner or provider controls",
  },
  {
    title: "Commercial boundary",
    description:
      "Pricing, contract and support are not assumed to be included",
  },
  {
    title: "Data & process boundary",
    description:
      "Only approved data and process sharing statements",
  },
  {
    title: "Operational status",
    description:
      "Partner availability can become stale or unavailable independently",
  },
  {
    title: "Support route",
    description:
      "The correct operational or commercial route — with no invented response time or service level",
  },
];

export default function PartnerDependency() {
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
                Limited &amp; partner-supported availability
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
              Partner dependency is a first-class state, not small print.
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
              It is never hidden inside wording like &quot;powered by
              partners,&quot; because it can affect procurement, operations
              and responsibility.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5

              lg:flex-row
              lg:items-stretch
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              <div className="relative aspect-[581/492] w-full">
                <Image
                  src="/images/jurisdiction-availability/partner-dependency.png"
                  alt="Partner dependency availability"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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

                lg:flex-1
              "
            >
              {/* TABLE HEADER */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-4
                  py-3.5

                  sm:px-5
                "
              >
                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  Every Partner-supported statement must name six things.
                </p>
              </div>

              {/* ROWS */}
              <div className="w-full">
                {dependencyRows.map((row, index) => (
                  <div
                    key={row.title}
                    className={`
                      grid
                      grid-cols-1

                      sm:grid-cols-[150px_minmax(0,1fr)]

                      ${
                        index !== dependencyRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* LABEL */}
                    <div className="px-4 pb-1 pt-4 sm:py-3.5">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.title}
                      </p>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="px-4 pb-4 pt-1 sm:py-3.5">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}