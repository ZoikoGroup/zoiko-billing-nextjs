"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Apply to a draft",
    description:
      "Approved components are attached to a draft invoice or credit note, never directly to an issued document.",
  },
  {
    number: "02",
    title: "Preserve context",
    description:
      "Source, description, quantity, rate, tax context and amount all travel with the line.",
  },
  {
    number: "03",
    title: "Group only where reviewable",
    description:
      "Lines are grouped or summarized only where supported, and the detail stays inspectable.",
  },
  {
    number: "04",
    title: "Calculate document totals",
    description:
      "Subtotal, tax and total are computed according to the approved rules for that document.",
  },
  {
    number: "05",
    title: "Record the version link",
    description:
      "The application records which document version the component became part of.",
  },
  {
    number: "06",
    title: "Prevent duplicates",
    description:
      "Idempotency keys or source references stop the same component being applied twice.",
  },
];

export default function Application() {
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
                Application
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
              From approved component to document line.
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
              Applying an amount to a draft is a distinct step with its own
              controls. A charge definition is not an issued invoice.
            </p>
          </div>

          {/* STEPS */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#dfe5ee]
              shadow-[0_8px_24px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)]
            "
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  flex
                  w-full
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6

                  ${
                    index !== steps.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    size-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#d8e0e9]
                    bg-[#f5f7f9]
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-semibold
                      leading-4
                      text-[#456b9c]
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    w-full
                    pt-3
                    pb-1
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    max-w-[650px]
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* APPLICATION BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-5

              sm:px-7
              sm:py-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Application boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              A charge definition is not an issued invoice, and application
              to a draft does not prove issue, delivery or payment. Those are
              separate states on the document itself.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center justify-start">
            <Link
              href="/invoices"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                transition-opacity
                duration-200
                hover:opacity-90
              "
            >
              Explore Invoices &amp; Credit Notes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}