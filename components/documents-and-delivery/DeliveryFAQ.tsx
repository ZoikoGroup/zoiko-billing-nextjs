"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is the difference between issuing and sending a document?",
    answer:
      "Issuing creates the accountable billing document, with its version, number, issuer and issue time. Sending is a separate delivery attempt that takes a rendered artifact of that document to a resolved recipient through a channel. A document can be issued and never sent, and a send can fail entirely without changing the issued record. The two states are tracked independently.",
  },
  {
    question: "How does Zoiko Billing choose a recipient?",
    answer:
      "The recipient is resolved from approved billing and customer records. The selected recipient, destination and relevant delivery context are recorded with the delivery attempt.",
  },
  {
    question: "Which delivery channels are supported?",
    answer:
      "Available channels depend on the configured entity, market and verified provider availability. Supported options can include email, secure links, portals and other approved delivery routes.",
  },
  {
    question: "Can delivery be scheduled or require approval?",
    answer:
      "Yes. Where supported, delivery can follow configured timing, approval and permission rules. The resulting action and its state are recorded as part of the delivery evidence.",
  },
  {
    question: "What does delivered mean?",
    answer:
      "Delivered means the delivery provider has returned an accepted delivery state according to the evidence available for that channel. It does not mean that the recipient opened, read, accepted or agreed with the document.",
  },
  {
    question: "What happens when delivery fails?",
    answer:
      "A failed attempt records the available failure state and reason. Depending on the configured rules, another permitted attempt may be made, or the document may be routed for review.",
  },
  {
    question: "Can recipients access documents through a secure link or portal?",
    answer:
      "Yes, where the document class and delivery configuration support it. Access can use authenticated or tokenized mechanisms, expiry controls and recipient or tenant binding where available.",
  },
  {
    question: "Can I use Documents & Delivery without Zoiko One?",
    answer:
      "Yes. Zoiko Billing remains independently deployable. Zoiko One participation is used only where identity, records, storage or cross-product navigation is supported and configured.",
  },
];

export default function DeliveryFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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

            sm:gap-11

            md:gap-12
          "
        >
          {/* ================= HEADER ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-5
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
                Questions
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
              Direct answers about document delivery.
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
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>

          {/* ================= FAQ ================= */}

          <div className="w-full max-w-[920px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    border-b
                    border-[#dfe5ee]
                    first:border-t
                  "
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-16
                      w-full
                      items-start
                      justify-between
                      gap-6
                      px-0.5
                      py-5
                      text-left
                      transition-opacity
                      hover:opacity-80
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7890b2]
                      focus-visible:ring-offset-2
                    "
                  >
                    {/* QUESTION */}

                    <span
                      className="
                        text-base
                        font-semibold
                        leading-7
                        text-[#091127]
                      "
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS */}

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-sm
                        font-semibold
                        leading-6
                        transition-all

                        ${
                          isOpen
                            ? "border-[#7890b2] bg-[#7890b2] text-white"
                            : "border-[#dfe5ee] bg-transparent text-[#5d7192]"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}

                  {isOpen && (
                    <div className="max-w-[736px] px-0.5 pb-6">
                      <p
                        className="
                          !m-0
                          text-[15px]
                          font-normal
                          leading-7
                          text-[#5d7192]

                          sm:text-base
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