export default function DeliveryModel() {
  const components = [
    {
      number: "01",
      title: "Document source",
      description:
        "The approved invoice, credit note, statement or supported related record.",
    },
    {
      number: "02",
      title: "Template and render",
      description:
        "Versioned presentation, producing a specific output artifact.",
    },
    {
      number: "03",
      title: "Recipient and endpoint",
      description:
        "A purpose-specific contact, address, portal identity or integration target.",
    },
    {
      number: "04",
      title: "Release control",
      description:
        "Permission, approval, timing, hold and sensitivity checks before anything leaves.",
    },
    {
      number: "05",
      title: "Channel and provider",
      description:
        "The verified transport or publication route actually used.",
    },
    {
      number: "06",
      title: "Evidence and recovery",
      description:
        "Attempts, results, failures, retries and the audit history behind them.",
    },
  ];

  const facts = [
    {
      number: "Fact 01",
      title: "Issued",
      description:
        "The accountable billing document exists, with its version, number and issue time.",
      warning: "Does not mean anything left the platform.",
    },
    {
      number: "Fact 02",
      title: "Sent",
      description:
        "A provider accepted or transmitted the request under its own documented semantics.",
      warning: "Does not mean it arrived anywhere.",
    },
    {
      number: "Fact 03",
      title: "Delivered where verified",
      description:
        "Approved provider evidence indicates delivery, within that provider's stated meaning.",
      warning: "Does not mean anyone looked at it.",
    },
    {
      number: "Fact 04",
      title: "Opened or downloaded",
      description:
        "An access event was recorded, where the channel supports that evidence at all.",
      warning: "Does not mean the content was read or understood.",
    },
    {
      number: "Fact 05",
      title: "Accepted",
      description:
        "A commercial or legal position between you and your customer.",
      warning: "Not a platform fact. Zoiko Billing never asserts it.",
      highlighted: true,
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
            max-w-[1220px]
            flex-col
            items-start
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              md:flex-row
              md:items-end
              md:gap-12

              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5

                md:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    h-0.5
                    w-5
                    rounded-full
                    bg-gradient-to-r
                    from-[#36c5d8]
                    to-[#7890b2]
                  "
                />

                <span
                  className="
                    font-mono
                    text-xs
                    font-medium
                    uppercase
                    leading-4
                    tracking-wider
                    text-[#7890b2]
                  "
                >
                  Delivery model
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[32px]
                  font-medium
                  leading-[1.2]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[38px]

                  md:text-[42px]

                  lg:text-5xl
                  lg:leading-[1.12]
                "
              >
                Connect the document,
                <br className="hidden sm:block" />
                recipient, channel and
                <br className="hidden sm:block" />
                evidence.
              </h2>
            </div>

            {/* RIGHT */}
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
                  text-[#52698b]

                  sm:text-base
                  sm:leading-8
                "
              >
                Six components sit behind every delivery pathway. A template
                never replaces the issued billing record, and a provider
                result never means more than the provider documented.
              </p>
            </div>
          </div>

          {/* SIX COMPONENTS */}
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
            {components.map((component) => (
              <div
                key={component.number}
                className="
                  flex
                  min-h-[225px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-6
                  py-6
                  shadow-[0_1px_2px_rgba(15,23,42,0.02)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-[#36c5d8]
                    to-[#7890b2]
                    py-1.5
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-semibold
                      leading-4
                      text-white
                    "
                  >
                    {component.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    w-full
                    pb-1
                    pt-3
                    text-base
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {component.title}
                </h3>

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
                  {component.description}
                </p>
              </div>
            ))}
          </div>

          {/* FIVE SEPARATE FACTS */}
          <div className="flex w-full flex-col items-start">
            {/* SECTION LABEL */}
            <div className="flex items-center gap-2.5">
              <span
                className="
                  h-0.5
                  w-5
                  rounded-full
                  bg-gradient-to-r
                  from-[#36c5d8]
                  to-[#7890b2]
                "
              />

              <span
                className="
                  font-mono
                  text-xs
                  font-medium
                  uppercase
                  leading-4
                  tracking-wider
                  text-[#7890b2]
                "
              >
                Five separate facts
              </span>
            </div>

            {/* SUBHEADING */}
            <h3
              className="
                !m-0
                mt-5
                max-w-[700px]
                text-lg
                font-semibold
                leading-6
                text-[#091127]

                sm:text-xl
              "
            >
              Issued, sent, delivered, opened and accepted are never the same
              thing.
            </h3>

            {/* FACT CARDS */}
            <div
              className="
                mt-8
                grid
                w-full
                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-5
              "
            >
              {facts.map((fact) => (
                <div
                  key={fact.number}
                  className={`
                    flex
                    min-h-[256px]
                    flex-col
                    rounded-2xl
                    border
                    px-5
                    py-5

                    ${
                      fact.highlighted
                        ? "border-[#e9b99e] bg-[#f8f4f0]"
                        : "border-[#dfe5ee] bg-white"
                    }
                  `}
                >
                  {/* FACT NUMBER */}
                  <span
                    className={`
                      font-mono
                      text-[10px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-wide
                      ${
                        fact.highlighted
                          ? "text-[#b56c46]"
                          : "text-[#7890b2]"
                      }
                    `}
                  >
                    {fact.number}
                  </span>

                  {/* TITLE */}
                  <h4
                    className="
                      !m-0
                      mt-2
                      text-base
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {fact.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      mt-3
                      text-sm
                      font-normal
                      leading-5
                      text-[#52698b]
                    "
                  >
                    {fact.description}
                  </p>

                  {/* WARNING */}
                  <div className="mt-auto pt-5">
                    <div
                      className="
                        flex
                        items-start
                        gap-2
                        border-t
                        border-[#e1e5ea]
                        pt-2.5
                      "
                    >
                      <span
                        className="
                          shrink-0
                          font-mono
                          text-sm
                          font-semibold
                          leading-5
                          text-[#d97745]
                        "
                      >
                        ×
                      </span>

                      <span
                        className="
                          text-xs
                          font-normal
                          leading-5
                          text-[#b56c46]
                        "
                      >
                        {fact.warning}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}