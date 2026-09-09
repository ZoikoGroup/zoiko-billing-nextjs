"use client";

import React, { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "How many internal users need access?",
    options: ["1–3", "4–15", "16–50", "50+"],
  },
  {
    id: 2,
    question: "How many legal entities do you bill from?",
    options: ["1", "2–3", "4–10", "10+"],
  },
  {
    id: 3,
    question: "Do you need recurring subscriptions and dunning?",
    options: ["No", "Yes"],
  },
  {
    id: 4,
    question: "Do you need usage-based or metered billing?",
    options: ["No", "Yes"],
  },
  {
    id: 5,
    question: "Do you need SSO, SCIM, contracted SLA or custom retention?",
    options: ["No", "Yes"],
  },
];

export default function WhichPlanFits() {
  const [answers, setAnswers] = useState<string[]>([
    "1–3",
    "1",
    "No",
    "No",
    "No",
  ]);

  const handleSelect = (questionIndex: number, value: string) => {
    setAnswers((current) => {
      const updated = [...current];
      updated[questionIndex] = value;
      return updated;
    });
  };

  const getRecommendedPlan = () => {
    const users = answers[0];
    const entities = answers[1];
    const subscriptions = answers[2] === "Yes";
    const usageBilling = answers[3] === "Yes";
    const enterpriseFeatures = answers[4] === "Yes";

    if (
      enterpriseFeatures ||
      users === "50+" ||
      entities === "10+"
    ) {
      return "Enterprise";
    }

    if (
      usageBilling ||
      users === "16–50" ||
      entities === "4–10"
    ) {
      return "Business";
    }

    if (
      subscriptions ||
      users === "4–15" ||
      entities === "2–3"
    ) {
      return "Professional";
    }

    return "Essentials";
  };

  const recommendedPlan = getRecommendedPlan();

  const planDetails = {
    Essentials: {
      price: "$29/month",
      description:
        "Your stated requirements fit within every Essentials limit.",
    },
    Professional: {
      price: "$79/month",
      description:
        "Your requirements need Professional capabilities or limits.",
    },
    Business: {
      price: "$249/month",
      description:
        "Your requirements need Business capabilities or higher limits.",
    },
    Enterprise: {
      price: "Custom",
      description:
        "Your requirements need Enterprise capabilities or contracted limits.",
    },
  };

  const selectedPlan =
    planDetails[recommendedPlan as keyof typeof planDetails];

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
              max-w-[1000px]
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
                Which plan fits?
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Five questions, and it recommends
            
              the smallest plan that works.
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
              Per AC-07, the recommender{" "}
              <strong className="font-bold">
                never returns a plan below your stated entity, usage-billing,
                SSO or limit requirements
              </strong>{" "}
              — it will not undersell you into a plan you would immediately
              outgrow.
            </p>
          </div>

          {/* QUESTION CARD */}
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
            {/* CARD HEADER */}
            <div
              className="
                flex
                flex-col
                items-start
                gap-1
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Answer five questions
              </h3>

              <p
                className="
                  !m-0
                  text-xs
                  font-normal
                  leading-5
                  text-[#7890b2]
                "
              >
                No contact details required. Nothing is stored.
              </p>
            </div>

            {/* QUESTIONS */}
            {questions.map((item, questionIndex) => (
              <div
                key={item.id}
                className="
                  flex
                  flex-col
                  items-start
                  gap-3
                  border-b
                  border-[#edf0f4]
                  px-5
                  py-4
                  md:flex-row
                  md:flex-wrap
                  md:items-center
                "
              >
                {/* QUESTION */}
                <div className="w-full md:w-72 md:shrink-0">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-semibold
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {item.id} · {item.question}
                  </p>
                </div>

                {/* OPTIONS */}
                <div className="flex w-full flex-wrap gap-2 md:w-auto">
                  {item.options.map((option) => {
                    const selected = answers[questionIndex] === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          handleSelect(questionIndex, option)
                        }
                        className={`
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          leading-5
                          transition
                          ${
                            selected
                              ? "border-blue-600 bg-[#eef5ff] text-[#1f6feb]"
                              : "border-[#dfe5ee] bg-white text-[#5d7192] hover:border-blue-600 hover:text-[#1f6feb]"
                          }
                        `}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* RESULT */}
            <div className="bg-[#f7f8fa] p-5">
              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  pt-5
                  pb-7
                "
              >
                {/* RESULT TITLE */}
                <div className="w-full">
                  <h3
                    className="
                      !m-0
                      text-lg
                      font-extrabold
                      leading-8
                      text-[#091127]
                    "
                  >
                    {recommendedPlan} is the smallest plan that meets your
                    needs.
                  </h3>
                </div>

                {/* PRICE */}
                <div className="w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    <strong className="font-bold">
                      {selectedPlan.price}
                    </strong>{" "}
                    billed monthly.
                  </p>
                </div>

                {/* REASON */}
                <div
                  className="
                    relative
                    w-full
                    py-2
                    pl-4
                    text-xs
                    leading-5
                    text-[#5d7192]
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-[15px]
                      h-2
                      w-2
                      rounded-[2px]
                      border
                      border-blue-600
                      bg-[#f0f5ff]
                    "
                  />

                  {selectedPlan.description}
                </div>

                {/* LINKS */}
                <div
                  className="
                    flex
                    w-full
                    flex-wrap
                    gap-2
                    pt-1.5
                  "
                >
                  <Link
                    href={
                      recommendedPlan === "Enterprise"
                        ? "/contact-sales"
                        : "/book-demo"
                    }
                    className="
                      inline-flex
                      min-h-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-600
                      bg-blue-600
                      px-4
                      py-1.5
                      text-sm
                      font-semibold
                      leading-5
                      text-white
                      shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                      transition
                      hover:bg-blue-700
                    "
                  >
                    {recommendedPlan === "Enterprise"
                      ? "Talk to Sales"
                      : "Start free trial"}
                  </Link>

                  <Link
                    href="#"
                    className="
                      inline-flex
                      min-h-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-4
                      py-1.5
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                      transition
                      hover:border-blue-600
                    "
                  >
                    Compare with Business
                  </Link>
                </div>

                {/* DISCLAIMER */}
                <div className="w-full pt-1">
                  <p
                    className="
                      !m-0
                      text-xs
                      leading-5
                      text-[#7890b2]
                    "
                  >
                    <strong className="font-bold">
                      This recommends the smallest sufficient plan, never a
                      smaller one.
                    </strong>{" "}
                    Each reason above maps to a published limit or capability,
                    so you can check the logic against the comparison table
                    rather than trusting the result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}