"use client";

import Image from "next/image";
import Link from "next/link";

const allocationItems = [
  {
    title: "Single document",
    description:
      "Allocation to one invoice or supported debit document.",
  },
  {
    title: "Partial allocation",
    description:
      "Part of the payment applied, with remaining payment and document amounts both visible.",
  },
  {
    title: "Multiple documents",
    description:
      "One payment spread across several documents, where that is supported.",
  },
  {
    title: (
      <>
        Customer-level
        <br />
        unapplied
      </>
    ),
    description:
      "Value held against a customer or account, where an on-account balance is supported.",
  },
  {
    title: (
      <>
        Entity and currency
        <br />
        compatibility
      </>
    ),
    description:
      "Allocation requires compatible entity and currency context.",
  },
  {
    title: (
      <>
        Effective date and
        <br />
        actor
      </>
    ),
    description:
      "Every allocation records when it applies and who or what applied it.",
  },
];

export default function Allocation() {
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
                Allocation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Apply funds without rewriting the billing record.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              An allocation is a relationship between a payment and a
              document. The invoice itself is never edited by it.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              w-full
              items-start
              gap-8

              lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
              lg:gap-10

              xl:gap-12
            "
          >
            {/* LEFT IMAGE */}
            <div className="w-full">
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
                  src="/images/payments-and-reconcilliation/allocation.png"
                  alt="Payment allocation workflow"
                  width={526}
                  height={356}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex w-full flex-col items-start">
              {/* TITLE */}
              <h3
                className="
                  !m-0
                  mb-3
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What allocation supports
              </h3>

              {/* ITEMS */}
              <div className="w-full">
                {allocationItems.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      grid
                      gap-3
                      py-4

                      sm:grid-cols-[150px_minmax(0,1fr)]
                      sm:gap-5

                      ${
                        index !== allocationItems.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* ITEM TITLE */}
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

                    {/* ITEM DESCRIPTION */}
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

              {/* ALLOCATION BOUNDARY */}
              <div
                className="
                  mt-5
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
                  Allocation boundary
                </span>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]

                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  Allocation does not rewrite the invoice and does not prove
                  an accounting posting. Cross-currency allocation requires
                  approved conversion evidence — it never happens implicitly.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-5">
                <Link
                  href="/accounts-receivable"
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
                  Explore Accounts Receivable
                </Link>
              </div>
            </div>
          </div>

          {/* FULL-WIDTH IMAGE */}
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
              src="/images/payments-and-reconcilliation/allocation.png"
              alt="Allocation overview"
              width={1116}
              height={552}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}