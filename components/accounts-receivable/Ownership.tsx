"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ownershipItems = [
  {
    title: (
      <>
        Named owner and
        <br />
        queue
      </>
    ),
    description:
      "Every actionable item sits with a person, team or operational queue.",
  },
  {
    title: (
      <>
        Assignment source
        <br />
        and reason
      </>
    ),
    description: "Why it was assigned, by what, and from when.",
  },
  {
    title: (
      <>
        Service or review
        <br />
        target
      </>
    ),
    description:
      "The review target for that item, where service levels are supported.",
  },
  {
    title: (
      <>
        Manual or rule-based
        <br />
        priority
      </>
    ),
    description:
      "Prioritisation from approved operational context such as amount, age or entity.",
  },
  {
    title: (
      <>
        Reassignment and
        <br />
        cover
      </>
    ),
    description:
      "Reassignment, escalation and absence cover so nothing stalls silently.",
  },
  {
    title: <>Workload visibility</>,
    description:
      "Open workload and unresolved exceptions visible per owner and queue.",
  },
];

export default function Ownership() {
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
                Ownership
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
              Make ownership, priority and review time explicit.
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
              Work is distributed by rules you can read, using approved
              operational context — not by a hidden score nobody can explain.
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
                LEFT CONTENT
            ==================================================== */}
            <div className="flex w-full flex-col xl:w-1/2">
              {/* OWNERSHIP RULES */}
              <div className="flex w-full flex-col">
                {ownershipItems.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-3
                      py-3.5

                      sm:flex-row
                      sm:items-start
                      sm:gap-5

                      ${
                        index !== ownershipItems.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* TITLE */}
                    <div className="w-full shrink-0 sm:w-36">
                      <h3
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h3>
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

              {/* PRIORITISATION BOUNDARY */}
              <div
                className="
                  mt-8
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
                  Prioritisation boundary
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
                  Operational priority is not a risk score or a
                  payment-propensity prediction. Priority never overrides a
                  dispute, a consent restriction, a legal constraint or a
                  communication rule.
                </p>
              </div>
            </div>

            {/* ===================================================
                RIGHT PRODUCT IMAGE
            ==================================================== */}
            <div className="flex w-full xl:w-1/2">
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
                  src="/accounts-receivable/ownership-workflow.png"
                  alt="Ownership and workflow view"
                  width={526}
                  height={481}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              FULL WIDTH IMAGE
          ====================================================== */}
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
              src="/accounts-receivable/ownership-automation.png"
              alt="Automation and workflow ownership"
              width={1116}
              height={558}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div className="flex w-full justify-center pt-1">
            <Link
              href="/automation"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                !text-white
                transition
                hover:bg-[#17213a]

                sm:text-base
              "
            >
              Explore Automation &amp; Workflows
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}