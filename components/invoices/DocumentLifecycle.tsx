const stages = [
  {
    number: "01",
    title: "Draft",
    description:
      "Prepare customer, issuer, dates, lines, terms, tax context and delivery preference.",
  },
  {
    number: "02",
    title: "Validate",
    description:
      "Check required fields, configuration, numbering context and supported rules.",
  },
  {
    number: "03",
    title: "Review",
    description:
      "Route configured documents or exceptions for meaningful approval.",
  },
  {
    number: "04",
    title: "Issue",
    description:
      "Create the accountable issued version, and the number where supported.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Render, publish or send through an approved channel.",
  },
  {
    number: "06",
    title: "Correct",
    description:
      "Use a credit note, void, cancellation or supported correction pathway.",
  },
];

export default function DocumentLifecycle() {
  return (
    <section
      id="document-lifecycle"
      className="w-full bg-[#f7f8fa]"
    >
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
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-gradient-to-r
                  from-[#27c7d9]
                  to-[#5c83aa]
                  opacity-70
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#5c83aa]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Document lifecycle
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-gradient-to-r
                  from-[#27c7d9]
                  to-[#5c83aa]
                  opacity-70
                "
              />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Move from draft to issued evidence with clear control.
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
                text-[#5d7192]

                sm:text-base
              "
            >
              Six stages. Each boundary between them matters, because a
              scheduled document is not issued and an issued document is not
              necessarily delivered or paid.
            </p>
          </div>

          {/* =========================================================
              LIFECYCLE STAGES
          ========================================================= */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-6
            "
          >
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="
                  flex
                  min-h-[208px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    min-h-7
                    min-w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-[#27c7d9]
                    to-[#5c83aa]
                    px-2
                    py-1
                  "
                >
                  <span
                    className="
                      text-center
                      text-[10px]
                      font-semibold
                      leading-4
                      text-white
                    "
                  >
                    {stage.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    mt-5
                    text-sm
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {stage.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-3
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* =========================================================
              LIFECYCLE IMAGE
          ========================================================= */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)]
            "
          >
            <img
              src="/images/invoices/document-lifecycle.png"
              alt="Document lifecycle diagram"
              className="
                block
                h-auto
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}