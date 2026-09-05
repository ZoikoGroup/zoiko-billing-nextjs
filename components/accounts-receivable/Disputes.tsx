"use client";

import React from "react";
import Image from "next/image";

const disputeItems = [
  {
    title: "Reason and scope",
    description:
      "Why it was raised, and which documents or amounts it affects.",
  },
  {
    title: "Owner and reviewer",
    description:
      "Who holds the dispute, and who will decide it.",
  },
  {
    title: "Evidence",
    description:
      "Evidence requested from the customer, and evidence provided.",
  },
  {
    title: "Hold type and dates",
    description:
      "The hold applied, its scope and its effective dates.",
  },
  {
    title: (
      <>
        Communication
        <br />
        status
      </>
    ),
    description:
      "What the customer has been told, and when.",
  },
  {
    title: "Resolution",
    description:
      "Resolved, partially resolved, rejected or escalated, with the reason.",
  },
];

export default function Disputes() {
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
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-3
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
                Disputes and holds
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
              Pause ordinary action when the balance or process is under
              review.
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
              A dispute is a neutral review state. It is not an admission,
              and it is not proof of error on either side.
            </p>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-10

              lg:gap-14
              lg:pt-2

              xl:flex-row
              xl:items-start
            "
          >
            {/* ===================================================
                LEFT — DISPUTE RECORD
            ==================================================== */}
            <div className="flex w-full flex-col xl:w-1/2">
              {/* SECTION TITLE */}
              <h3
                className="
                  !m-0
                  pb-3
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What a dispute records
              </h3>

              {/* ROWS */}
              <div className="flex w-full flex-col">
                {disputeItems.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-3
                      py-3.5

                      sm:flex-row
                      sm:items-end
                      sm:gap-5

                      ${
                        index !== disputeItems.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* TITLE */}
                    <div className="w-full shrink-0 sm:w-36">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="flex-1">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================================================
                RIGHT — IMAGE + BOUNDARY
            ==================================================== */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-8

                xl:w-1/2
              "
            >
              {/* IMAGE */}
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
                  src="/accounts-receivable/disputes-holds.png"
                  alt="Disputes and holds workflow"
                  width={526}
                  height={498}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* DISPUTE BOUNDARY */}
              <div
                className="
                  w-full
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-6

                  sm:px-7
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
                  Dispute boundary
                </span>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]

                    sm:text-base
                  "
                >
                  A dispute is not an admission or proof of error. Legal and
                  formal complaint processes require approved routes and human
                  review — they are never handled as ordinary follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}