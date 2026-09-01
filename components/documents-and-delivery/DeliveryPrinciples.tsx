export default function DeliveryPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Source and artifact are linked",
      description:
        "Every rendered file points back to the exact issued document version behind it.",
    },
    {
      number: "02",
      title: "Recipient purpose is explicit",
      description:
        "Who receives a document, and on what authority, is recorded rather than assumed.",
    },
    {
      number: "03",
      title: "Release uses current policy",
      description:
        "Permission and approval are evaluated at the moment of release, not earlier.",
    },
    {
      number: "04",
      title: "States reflect provider evidence",
      description:
        "Channel states report what the provider actually confirmed, nothing more.",
    },
    {
      number: "05",
      title: "Failure has a path",
      description:
        "Failed and unknown outcomes both carry a recovery route and an owner.",
    },
    {
      number: "06",
      title: "Availability varies",
      description:
        "Document type, provider, plan, entity and market all affect what is available.",
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
            items-start
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* PRINCIPLES */}
          <div
            className="
              grid
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-6
            "
          >
            {principles.map((principle, index) => (
              <div
                key={principle.number}
                className={`
                  flex
                  min-h-[230px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5

                  sm:min-h-[240px]

                  ${
                    index !== principles.length - 1
                      ? "border-b border-[#edf0f4] sm:border-r"
                      : ""
                  }

                  ${
                    index === 1
                      ? "sm:border-r-0 lg:border-r"
                      : ""
                  }

                  ${
                    index === 3
                      ? "lg:border-r-0 xl:border-r"
                      : ""
                  }

                  ${
                    index === 4
                      ? "sm:border-r-0 lg:border-r"
                      : ""
                  }

                  xl:min-h-[250px]
                  xl:border-b-0
                  xl:border-r
                  xl:last:border-r-0
                `}
              >
                {/* NUMBER */}
                <div className="flex w-full flex-col items-start">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-normal
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    {principle.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="flex w-full flex-col items-start pb-1 pt-1">
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-5
                      tracking-[-0.01em]
                      text-[#091127]
                    "
                  >
                    {principle.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-5
                    text-[#52698b]
                  "
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* OPERATING BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-[#f7f8fa]
              px-5
              py-6

              sm:px-7
              sm:py-7
            "
          >
            <div className="flex w-full flex-col items-start">
              <span
                className="
                  font-mono
                  text-[10px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-wide
                  text-[#7890b2]
                "
              >
                Operating boundary
              </span>
            </div>

            <p
              className="
                !m-0
                w-full
                text-sm
                font-normal
                leading-6
                text-[#091127]

                sm:text-base
                sm:leading-7
              "
            >
              Zoiko Billing does not claim guaranteed delivery, opening,
              legal receipt, acceptance or payment, and does not imply that
              every provider, file type, channel or region is supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}