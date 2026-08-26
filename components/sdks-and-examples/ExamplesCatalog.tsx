import Image from "next/image";

export default function ExamplesCatalog() {
  const rows = [
    {
      field: "Goal",
      value: "One-sentence outcome",
    },
    {
      field: "Language / runtime",
      value: "Verified SDK or approved raw API example type",
    },
    {
      field: "Prerequisites",
      value:
        "Auth, environment, objects, endpoint, permissions or prior steps",
    },
    {
      field: "Execution model",
      value:
        "Synchronous, asynchronous or mixed — only when canonical",
    },
    {
      field: "Expected evidence",
      value: (
        <>
          Response, object state or event evidence{" "}
          <strong>without invented fields</strong>
        </>
      ),
    },
    {
      field: "Failure cases",
      value: "Approved error categories only",
    },
    {
      field: "Difficulty",
      value: (
        <>
          Optional descriptive level — <strong>avoid arbitrary scoring</strong>
        </>
      ),
    },
    {
      field: "Last validated",
      value: "Date, release or commit reference per content workflow",
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
                Examples catalog
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
              Completeness is a label, not an assumption.
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
              Four completeness classes prevent a snippet being mistaken for
              a production pattern.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
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
                lg:w-1/2
              "
            >
              <Image
                src="/images/sdks-and-examples/examples.png"
                alt="Examples catalog"
                width={581}
                height={549}
                className="
                  h-auto
                  min-h-[300px]
                  w-full
                  object-cover
                  lg:h-full
                "
              />
            </div>

            {/* METADATA CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                lg:w-1/2
              "
            >
              {/* CARD HEADER */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
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
                  Required example metadata.
                </p>
              </div>

              {/* DESKTOP TABLE */}
              <div className="hidden sm:block">
                {rows.map((row, index) => (
                  <div
                    key={row.field}
                    className={`
                      grid
                      grid-cols-[160px_minmax(0,1fr)]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.field}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE CARDS */}
              <div className="flex flex-col sm:hidden">
                {rows.map((row, index) => (
                  <div
                    key={row.field}
                    className={`
                      p-5
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      {row.field}
                    </p>

                    <div
                      className="
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.value}
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