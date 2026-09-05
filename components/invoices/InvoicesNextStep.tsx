import Link from "next/link";

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
              gap-5
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
                  to-[#4f8bd9]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#6dd9e8]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Next step
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                max-w-[660px]
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
              Start with the billing documents your operation needs.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                max-w-[529px]
                text-[15px]
                font-normal
                leading-7
                text-[#9bc1d4]

                sm:text-base
              "
            >
              Decide what has to be approved before it is issued, how
              corrections are made, and what evidence you need to keep —
              then let the record hold itself together.
            </p>

            {/* MAIN CTAS */}
            <div
              className="
                flex
                w-full
                flex-col
                items-stretch
                gap-3
                pt-1

                sm:w-auto
                sm:flex-row
                sm:flex-wrap
                sm:items-center
              "
            >
              {/* CREATE ACCOUNT */}
              <Link
                href="/create-account"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
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
              </Link>

              {/* BOOK A DEMO */}
              <Link
                href="/book-demo"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-lg
                  px-5
                  py-2
                  text-base
                  font-normal
                  leading-6
                  !text-white
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-white/30
                  transition-colors
                  hover:bg-white/10
                "
              >
                Book a Demo
              </Link>

              {/* GLOBAL BILLING */}
              <Link
                href="/global-billing"
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
                  !text-[#27c7d9]
                  transition-opacity
                  hover:opacity-75
                "
              >
                Global billing
                <span className="text-base font-bold">→</span>
              </Link>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-1 w-full">
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#9bc1d4]

                  sm:leading-7
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
          <div
            className="
              flex
              w-full
              flex-1
              flex-col
              items-start
              gap-5
            "
          >
            {/* LIFECYCLE CARD */}
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
                    {/* NUMBER */}
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

                    {/* TEXT */}
                    <div className="min-w-0 flex-1">
                      <div
                        className="
                          flex
                          flex-col
                          gap-0.5

                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                          sm:gap-3
                        "
                      >
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

              {/* CARD FOOTER */}
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

            {/* SECONDARY CTA */}
            <div className="flex w-full items-center">
              <Link
                href="/charges-and-adjustments"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-lg
                  px-5
                  py-2
                  text-center
                  text-base
                  font-normal
                  leading-6
                  !text-white
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-white/30
                  transition-colors
                  hover:bg-white/10
                "
              >
                Explore Charges &amp; Adjustments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}