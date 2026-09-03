"use client";

import Image from "next/image";
import Link from "next/link";

const exceptionRows = [
  {
    title: "Unmatched payment",
    description:
      "No eligible target accepted. The payment stays visible with its candidate reasons.",
  },
  {
    title: (
      <>
        Duplicate or replayed
        <br />
        event
      </>
    ),
    description:
      "The same source event may have arrived twice. Deduplication applies rather than double-counting.",
  },
  {
    title: "Overpayment",
    description:
      "More received than the document requires, leaving a surplus that needs a policy decision.",
  },
  {
    title: "Short payment",
    description:
      "Less received than required, leaving a remaining document balance.",
  },
  {
    title: "Amount mismatch",
    description:
      "The amount does not correspond to any eligible target within tolerance.",
  },
  {
    title: (
      <>
        Wrong currency,
        <br />
        entity or customer
      </>
    ),
    description:
      "The payment cannot be applied without crossing a boundary that requires approval.",
  },
  {
    title: (
      <>
        Missing or invalid
        <br />
        reference
      </>
    ),
    description:
      "No usable reference, so matching relies on weaker supporting evidence.",
  },
  {
    title: (
      <>
        Payment before the
        <br />
        document
      </>
    ),
    description:
      "Funds arrived before the invoice existed, so there is nothing yet to allocate to.",
  },
];

export default function Exceptions() {
  return (
    <section className="w-full bg-white">
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
              gap-4
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
                Exceptions
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[720px]
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
              Keep unmatched, duplicate and overpaid amounts visible.
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
              Money that cannot be confidently allocated does not disappear
              into a total. It stays on screen with an owner and a next action.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              w-full
              items-start
              gap-8

              lg:grid-cols-2
              lg:gap-10

              xl:gap-12
            "
          >
            {/* LEFT - EXCEPTION LIST */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-2

                sm:px-6
              "
            >
              {exceptionRows.map((item, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    w-full
                    gap-3
                    py-4

                    sm:grid-cols-[150px_minmax(0,1fr)]
                    sm:gap-5

                    ${
                      index !== exceptionRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* TITLE */}
                  <div
                    className="
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </div>

                  {/* DESCRIPTION */}
                  <div
                    className="
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex w-full flex-col items-start gap-8">
              {/* EXCEPTION IMAGE */}
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <Image
                  src="/images/payments-and-reconcilliation/exceptions.png"
                  alt="Payment exceptions and unapplied funds"
                  width={526}
                  height={681}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* UNAPPLIED FUNDS BOUNDARY */}
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

                  sm:px-6
                  sm:py-7
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#7890b2]
                  "
                >
                  Unapplied-funds boundary
                </span>

                <p
                  className="
                    !m-0
                    text-[15px]
                    font-normal
                    leading-7
                    text-[#091127]
                  "
                >
                  Unapplied funds never disappear from operational views, and
                  an overpayment is not treated as revenue or free credit
                  without an explicit policy decision.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-1">
            <Link
              href="/outstanding-balances"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-sm
                font-normal
                leading-6
                !text-white
                transition-colors
                hover:bg-[#17213a]

                sm:min-h-12
                sm:px-6
                sm:py-3
                sm:text-base
              "
            >
              Explore Outstanding Balances
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}