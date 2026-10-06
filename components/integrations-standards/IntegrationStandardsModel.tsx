import Image from "next/image";

export default function IntegrationStandardsModel() {
  const standards = [
    {
      id: "STD-01",
      title: "Contract",
      description:
        "What the interface means and where its boundary is stable.",
    },
    {
      id: "STD-02",
      title: "Identity & access",
      description: "Who or what may invoke or receive it.",
    },
    {
      id: "STD-03",
      title: "Data",
      description:
        "What is exchanged, and under which sensitivity rules.",
    },
    {
      id: "STD-04",
      title: "Reliability",
      description:
        "How failure, timeout, retry and partial success behave.",
    },
    {
      id: "STD-05",
      title: "Observability",
      description:
        "How behavior is correlated, diagnosed and evidenced.",
    },
    {
      id: "STD-06",
      title: "Compatibility",
      description:
        "How breaking change is classified and governed.",
    },
    {
      id: "STD-07",
      title: "Lifecycle",
      description:
        "Who approves, changes, deprecates and retires it.",
    },
    {
      id: "STD-08",
      title: "Evidence",
      description:
        "What proves the interface meets the standard.",
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
                Eight-part integration standards model
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
              Select a dimension to see its requirements.
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
              Each requirement is normative and written{" "}
              <span className="font-bold">
                without unsupported implementation detail
              </span>
              . Where a detail belongs to technical documentation, the
              boundary says so.
            </p>
          </div>

          {/* STANDARDS GRID */}
          <div className="w-full">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:grid-cols-4
              "
            >
              {standards.map((standard, index) => (
                <button
                  key={standard.id}
                  type="button"
                  className={`
                    group
                    flex
                    min-h-[178px]
                    w-full
                    flex-col
                    items-start
                    rounded-[10px]
                    px-3.5
                    py-5
                    text-left
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                    transition-all
                    duration-200
                    ${
                      index === 0
                        ? "border-2 border-blue-600 bg-[#f2f4f7]"
                        : "border border-[#dfe5ee] bg-white hover:-translate-y-0.5 hover:border-blue-300"
                    }
                  `}
                >
                  {/* ID */}
                  <span
                    className="
                      text-[9.5px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {standard.id}
                  </span>

                  {/* TITLE */}
                  <span
                    className="
                      mt-1
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {standard.title}
                  </span>

                  {/* DESCRIPTION */}
                  <span
                    className="
                      mt-4
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {standard.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* REFERENCE IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/integrations-standards/image.png"
              alt="Integration standards model"
              width={1184}
              height={537}
              className="
                h-auto
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                object-cover
                shadow-[0_4px_24px_rgba(11,27,60,0.07)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}