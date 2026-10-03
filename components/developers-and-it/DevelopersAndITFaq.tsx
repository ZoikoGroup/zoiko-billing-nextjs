"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Where are the API endpoints and schemas?",
    answer:
      "Not on this page. Production endpoints, schemas, methods, auth protocols and SDK names are explicitly out of scope — governed technical documentation owns them, with versioning this page cannot carry.",
  },
  {
    question: "Is the boundary diagram your architecture?",
    answer:
      "No. The boundary diagram is a conceptual integration model, not a deployment or infrastructure architecture. It shows ownership boundaries, system relationships and responsibility areas without prescribing implementation details.",
  },
  {
    question: "Which system should own write authority?",
    answer:
      "The system that is authoritative for a given domain should own its writes. Other systems should consume that authority through governed integration paths rather than creating competing sources of truth.",
  },
  {
    question: "Is there a sandbox?",
    answer:
      "Sandbox availability is governed by the applicable technical and commercial documentation. This page does not define environment access, credentials or provisioning requirements.",
  },
  {
    question: "What are the rate limits?",
    answer:
      "Rate limits are not defined here because they can vary by integration, environment and contract. Refer to the governed API documentation for the limits that apply to your implementation.",
  },
  {
    question: "Why does every status say Unknown?",
    answer:
      "Unknown is intentional. It means this page does not have authoritative runtime evidence for that status. Unknown should not be interpreted as healthy, unhealthy or unavailable.",
  },
  {
    question: "Who owns a failure once we are live?",
    answer:
      "Failure ownership follows the system boundary and agreed operating responsibilities. The owning team is responsible for its component, while cross-system incidents require coordinated investigation using the defined escalation and recovery paths.",
  },
  {
    question: "Are you certified for our security review?",
    answer:
      "Security certifications and attestations are governed by the current security and compliance documentation. This page does not make certification claims; request the applicable evidence through the appropriate security review process.",
  },
];

export default function DevelopersAndITFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

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

            sm:gap-9

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
                Developers and IT FAQ
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
              Direct answers, including the ones
              <br className="hidden sm:block" />
              that route elsewhere.
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
              Several explain a deliberate omission.
            </p>
          </div>

          {/* FAQ GRID */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              lg:grid-cols-2
            "
          >
            {leftFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-20
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-4
                      text-left

                      sm:px-5
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS */}
                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        text-sm
                        font-semibold
                        leading-none
                        transition-colors
                        ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-[#f0f2f5] text-[#5d7192]"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div
                      className="
                        border-t
                        border-[#edf0f4]
                        px-5
                        pb-5
                        pt-4
                      "
                    >
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}