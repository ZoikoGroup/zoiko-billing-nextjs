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
    <section id="delivery-model" className="w-full bg-[#f7f8fa]">
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
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
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
                Delivery model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
              Connect the document, recipient, channel and evidence.
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
              Six components sit behind every delivery pathway. A template
              never replaces the issued billing record, and a provider result
              never means more than the provider documented.
            </p>
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
            "
          >
            {components.map((component) => (
              <div
                key={component.number}
                className="
                  flex
                  min-h-[210px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_1px_2px_rgba(15,23,42,0.02)]

                  sm:px-6
                  sm:py-6
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.12em]
                    text-[#7890b2]
                  "
                >
                  {component.number}
                </span>

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
                    leading-6
                    text-[#5d7192]
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
            <div className="flex items-center gap-3">
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
                Five separate facts
              </span>
            </div>

            {/* SUBHEADING */}
            <h3
              className="
                !m-0
                mt-4
                max-w-[760px]
                text-xl
                font-bold
                leading-7
                tracking-[-0.02em]
                text-[#091127]

                sm:text-2xl
                sm:leading-8
              "
            >
              Issued, sent, delivered, opened and accepted are never the same
              thing.
            </h3>

            {/* FACT CARDS */}
            <div
              className="
                mt-7
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
                    min-h-[250px]
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
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
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
                      leading-6
                      text-[#5d7192]
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
                        pt-3
                      "
                    >
                      <span
                        className="
                          shrink-0
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