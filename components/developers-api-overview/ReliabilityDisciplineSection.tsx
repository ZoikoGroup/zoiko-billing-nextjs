import Image from "next/image";

interface TopicMobileRow {
  topic: string;
  statement: string;
}

const mobileTopics: TopicMobileRow[] = [
  {
    topic: "Errors",
    statement:
      "Explain that integrations must handle validation, permission, conflict, dependency, limit, service and unknown-outcome classes.",
  },
  {
    topic: "Retries",
    statement:
      "State that retry behavior depends on operation semantics and documented guidance.",
  },
  {
    topic: "Idempotency",
    statement:
      "Surface it only for operations that actually support it, with exact canonical behavior.",
  },
  {
    topic: "Unknown outcomes",
    statement:
      "Require a safe read-before-repeat path where product semantics define one.",
  },
  {
    topic: "Rate & usage limits",
    statement:
      "Expose limits and headers only where authoritative values exist; otherwise direct to documentation.",
  },
  {
    topic: "Versioning",
    statement:
      "State the policy and compatibility promises only when published.",
  },
  {
    topic: "Deprecation",
    statement:
      "Provide notice window, changelog, migration guidance and sunset states when policy defined.",
  },
  {
    topic: "Observability",
    statement:
      "Expose request or event identifiers and status evidence only if the product supports them.",
  },
];

export default function ReliabilityDisciplineSection() {
  return (
    <section
      id="reliability"
      className="w-full bg-[#0B132B] text-white"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-50" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#9aabc3]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Reliability, Errors &amp; Change Discipline
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-50" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-white
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              A timeout is not a failure.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#aab8cc]
                sm:text-base
              "
            >
              Nine topics where the overview states the requirement and defers
              the exact values — because a fabricated limit or code is worse
              than none.
            </p>
          </div>

          {/* DESKTOP VERSION */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#263452]
              bg-[#0E1A3C]
              shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              lg:block
            "
          >
            <Image
              src="/images/developers/dao5.png"
              alt="A timeout is not a failure"
              width={1240}
              height={460}
              unoptimized
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* MOBILE / TABLET VERSION */}
          <div
            className="
              block
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#263452]
              bg-[#0E1A3C]
              text-left
              shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              lg:hidden
            "
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="border-b border-[#263452] bg-white/[0.06]">
                    <th
                      scope="col"
                      className="
                        w-1/3
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#9aabc3]
                        sm:px-6
                      "
                    >
                      Topic
                    </th>

                    <th
                      scope="col"
                      className="
                        w-2/3
                        px-5
                        py-4
                        text-left
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#9aabc3]
                        sm:px-6
                      "
                    >
                      Requirement &amp; Deferral Statement
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {mobileTopics.map((row) => (
                    <tr
                      key={row.topic}
                      className="
                        border-b
                        border-[#263452]/80
                        transition-colors
                        last:border-b-0
                        hover:bg-white/[0.04]
                      "
                    >
                      {/* TOPIC */}
                      <td
                        className="
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-bold
                          leading-6
                          text-white
                          sm:px-6
                          sm:py-6
                        "
                      >
                        {row.topic}
                      </td>

                      {/* STATEMENT */}
                      <td
                        className="
                          px-5
                          py-5
                          align-top
                          text-xs
                          font-normal
                          leading-6
                          text-[#aab8cc]
                          sm:px-6
                          sm:py-6
                        "
                      >
                        {row.statement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}