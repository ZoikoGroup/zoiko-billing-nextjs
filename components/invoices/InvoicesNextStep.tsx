export default function InvoicesNextStep() {
  const lifecycle = [
    {
      number: "01",
      title: "Draft",
      description: "Prepared, not issued",
    },
    {
      number: "02",
      title: "Validate",
      description: "Configured requirements met",
    },
    {
      number: "03",
      title: "Review",
      description: "Approved where required",
    },
    {
      number: "04",
      title: "Issue",
      description: "Version, number, evidence",
    },
    {
      number: "05",
      title: "Deliver",
      description: "Tracked separately",
    },
    {
      number: "06",
      title: "Correct",
      description: "Related document, history kept",
    },
  ];

  return (
    <section className="w-full bg-[#08294a]">
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
          lg:py-24
          xl:px-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1220px]
            flex-col
            items-center
            gap-10
            lg:flex-row
            lg:items-center
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
              gap-4
            "
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="
                  h-0.5
                  w-5
                  rounded-full
                  bg-gradient-to-r
                  from-[#27c7d9]
                  to-[#4f8bd9]
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#6dd9e8]
                  sm:text-xs
                "
              >
                Next step
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                !m-0
                max-w-[660px]
                pt-1.5
                text-[34px]
                font-medium
                leading-[1.15]
                tracking-[-0.035em]
                text-white
                sm:text-[40px]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              Start with the billing documents your operation needs.
            </h2>

            {/* Description */}
            <p
              className="
                !m-0
                mt-1
                max-w-[529px]
                text-[15px]
                font-normal
                leading-7
                text-[#9bc1d4]
                sm:text-base
                sm:leading-8
              "
            >
              Decide what has to be approved before it is issued, how
              corrections are made, and what evidence you need to keep —
              then let the record hold itself together.
            </p>

            {/* Main CTAs */}
            <div
              className="
                flex
                w-full
                flex-col
                items-stretch
                gap-3
                pt-5
                sm:w-auto
                sm:flex-row
                sm:flex-wrap
                sm:items-center
              "
            >
              <button
                type="button"
                className="
                  min-h-11
                  rounded-lg
                  bg-[#4389b5]
                  px-5
                  py-2
                  text-base
                  font-normal
                  leading-6
                  text-white
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-[#4389b5]
                  transition-opacity
                  hover:opacity-90
                "
              >
                Create Account
              </button>

              <button
                type="button"
                className="
                  min-h-11
                  rounded-lg
                  px-5
                  py-2
                  text-base
                  font-normal
                  leading-6
                  text-white
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-white/30
                  transition-colors
                  hover:bg-white/10
                "
              >
                Book a Demo
              </button>

              <button
                type="button"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  px-1
                  py-2
                  text-base
                  font-normal
                  leading-6
                  text-[#27c7d9]
                  transition-opacity
                  hover:opacity-75
                "
              >
                Global billing
                <span className="text-base font-bold">→</span>
              </button>
            </div>

            {/* Disclaimer */}
            <div className="mt-1 w-full">
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-7
                  text-[#08294a]
                "
              >
                Issued documents are evidence, not drafts.
                <br className="hidden sm:block" />
                Availability varies by plan, entity, provider, currency and
                jurisdiction.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            {/* Lifecycle card */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                p-5
                sm:p-6
              "
            >
              <div className="flex flex-col">
                {lifecycle.map((item, index) => (
                  <div
                    key={item.number}
                    className={`
                      flex
                      items-start
                      gap-4
                      py-3
                      sm:gap-5
                      ${
                        index !== lifecycle.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }
                    `}
                  >
                    {/* Number */}
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-gradient-to-br
                        from-[#27c7d9]
                        to-[#4f8bd9]
                        text-[9px]
                        font-normal
                        leading-4
                        text-white
                      "
                    >
                      {item.number}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-6
                            text-[#e5edf1]
                          "
                        >
                          {item.title}
                        </span>

                        <span
                          className="
                            text-[10px]
                            font-normal
                            leading-4
                            text-[#6f9bb0]
                            sm:text-right
                          "
                        >
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div
                className="
                  mt-4
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <p
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-6
                    text-white
                  "
                >
                  Billing clarity from invoice to payment.
                </p>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="flex w-full items-center">
              <button
                type="button"
                className="
                  min-h-11
                  rounded-lg
                  px-5
                  py-2
                  text-center
                  text-base
                  font-normal
                  leading-6
                  text-white
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-white/30
                  transition-colors
                  hover:bg-white/10
                "
              >
                Explore Charges &amp; Adjustments
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}