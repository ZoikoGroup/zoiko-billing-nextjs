import Link from "next/link";

export default function AfterFit() {
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
                After fit
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
              Commercial routes come last, and
             
              only after fit.
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
              Conversion content sits below discovery rather than interrupting
              it.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5
              md:flex-row
              md:items-start
            "
          >
            {/* STILL EVALUATING */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                pb-9
                pt-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                sm:px-6
              "
            >
              <div className="w-full pb-1">
                <h3
                  className="
                    !m-0
                    text-lg
                    font-bold
                    leading-7
                    tracking-[-0.01em]
                    text-[#091127]
                  "
                >
                  Still evaluating
                </h3>
              </div>

              <div
                className="
                  w-full
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                <p className="!m-0">
                  Read the authorities rather than talk to anyone:{" "}

                  <Link
                    href="/pricing-and-plans"
                    className="
                      !font-semibold
                      !text-[#2563eb]
                      hover:!text-[#2563eb]
                      hover:underline
                    "
                  >
                    Pricing
                  </Link>

                  ,{" "}

                  <Link
                    href="/documentation"
                    className="
                      !font-semibold
                      !text-[#2563eb]
                      hover:!text-[#2563eb]
                      hover:underline
                    "
                  >
                    Documentation
                  </Link>

                  ,{" "}

                  <Link
                    href="/trust-center"
                    className="
                      !font-semibold
                      !text-[#2563eb]
                      hover:!text-[#2563eb]
                      hover:underline
                    "
                  >
                    Trust Center
                  </Link>

                  {" "}and{" "}

                  <Link
                    href="/integration-availability"
                    className="
                      !font-semibold
                      !text-[#2563eb]
                      hover:!text-[#2563eb]
                      hover:underline
                    "
                  >
                    Integrations
                  </Link>

                  {" "}answer most evaluation questions without a
                  conversation.
                </p>
              </div>

              <div className="w-full pt-1">
                <p
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-5
                    text-[#5d7192]
                  "
                >
                  No gate stands between you and any of them.
                </p>
              </div>
            </div>

            {/* READY TO TALK */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#f1f3f6]
                px-5
                pb-9
                pt-6
                sm:px-6
              "
            >
              <div className="w-full pb-1">
                <h3
                  className="
                    !m-0
                    text-lg
                    font-bold
                    leading-7
                    tracking-[-0.01em]
                    text-[#091127]
                  "
                >
                  Ready to talk
                </h3>
              </div>

              <div
                className="
                  w-full
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                <p className="!m-0">
                  A{" "}

                  <Link
                    href="/book-demo"
                    className="
                      !font-semibold
                      !text-[#2563eb]
                      hover:!text-[#2563eb]
                      hover:underline
                    "
                  >
                    demo
                  </Link>

                  {" "}is a 30-minute walkthrough tailored to what you said you
                  were solving.
                </p>

                <p className="!m-0 mt-1">
                  <Link
                    href="/sales-enquiries"
                    className="
                      !font-semibold
                      !text-[#2563eb]
                      hover:!text-[#2563eb]
                      hover:underline
                    "
                  >
                    Sales enquiries
                  </Link>

                  {" "}handles commercial and contractual questions.
                </p>
              </div>

              <div
                className="
                  flex
                  w-full
                  flex-wrap
                  items-baseline
                  pt-1
                  text-sm
                  leading-6
                  text-[#5d7192]
                "
              >
                <span className="font-bold">
                  Already a customer with a problem?{" "}
                </span>

                <Link
                  href="/support-policy"
                  className="
                    !font-semibold
                    !text-[#2563eb]
                    hover:!text-[#2563eb]
                    hover:underline
                  "
                >
                  Support
                </Link>

                <span>
                  {" "}— not either of the above.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}