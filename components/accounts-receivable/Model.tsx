"use client";

import React from "react";
import Image from "next/image";

const concepts = [
  {
    number: "01",
    title: "Open item",
    description:
      "An issued document or balance component with its currency, due date and remaining amount.",
  },
  {
    number: "02",
    title: "Owner",
    description:
      "The named person, team or queue responsible for the next action.",
  },
  {
    number: "03",
    title: "Next action",
    description:
      "Review, wait, contact, escalate, hold, reconcile or close.",
  },
  {
    number: "04",
    title: "Customer state",
    description:
      "Contact preference, restriction, dispute, promise, recent communication and payment context.",
  },
  {
    number: "05",
    title: "Exception",
    description:
      "Missing source, mismatch, failed delivery, returned payment, unknown allocation or policy conflict.",
  },
  {
    number: "06",
    title: "Evidence",
    description:
      "Source, assignment, message, decision, promise, payment and status-change history.",
  },
];

export default function Model() {
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
                Control model
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
              Six concepts behind every receivables action.
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
              No single score stands in for the receivables truth, and
              customer-level totals always keep their document, entity and
              currency detail.
            </p>
          </div>

          {/* =====================================================
              CONCEPT CARDS
          ====================================================== */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {concepts.map((concept) => (
              <div
                key={concept.number}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.025)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    h-7
                    min-w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                    px-1.5
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      leading-4
                      text-white
                    "
                  >
                    {concept.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="w-full pb-1 pt-3">
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {concept.title}
                  </h3>
                </div>

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
                  {concept.description}
                </p>
              </div>
            ))}
          </div>

          {/* =====================================================
              IMAGE
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
              src="/accounts-receivable/control-model.png"
              alt="Receivables control model"
              width={1116}
              height={587}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}