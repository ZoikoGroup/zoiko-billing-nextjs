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
            max-w-[1220px]
            flex-col
            items-start
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT CONTENT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                pb-2

                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#5c83aa]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#5c83aa]

                    sm:text-xs
                  "
                >
                  Document lifecycle
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[40px]

                  md:text-[44px]

                  lg:text-[48px]
                "
              >
                Move from draft to issued evidence with clear control.
              </h2>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[529px]
                flex-1
              "
            >
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                  sm:leading-8
                "
              >
                Six stages. Each boundary between them matters, because a
                scheduled document is not issued and an issued document is not
                necessarily delivered or paid.
              </p>
            </div>
          </div>

          {/* LIFECYCLE STAGES */}
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
                  border-black/10
                  bg-white
                  p-[17px]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    min-w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-[#27c7d9]
                    to-[#5c83aa]
                    px-2
                    py-1.5
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
                    mt-4
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* LIFECYCLE IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
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