"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does an approved standard mean an integration is approved?",
    answer:
      "No. An approved standard, a conforming implementation and a customer entitlement are three separate facts with three different authorities and evidence sets.",
  },
  {
    question: "Where are the endpoints and schemas?",
    answer:
      "The endpoints, schemas, fields, protocols, error codes and limits belong to the governed technical documentation. This page establishes the durable integration expectation, not versioned API detail.",
  },
  {
    question: 'Does "Verified / ready" mean generally available?',
    answer:
      'No. "Verified / ready" describes the lifecycle state of the integration standard or implementation review. General availability is a separate commercial and operational status owned by the appropriate source.',
  },
  {
    question: "What counts as a breaking change?",
    answer:
      "A change is breaking when it creates a backward-compatibility impact for existing consumers. The change must be classified before release and, where required, have an approved version or migration path.",
  },
  {
    question: "Do you publish deprecation notice periods?",
    answer:
      "Not as a universal rule on this page. Deprecation and sunset timing must come from an approved governing source rather than being invented by the integration standard.",
  },
  {
    question: "What evidence should we attach for access governance?",
    answer:
      "Provide the applicable access model and governance evidence showing how authentication, authorization and secret-handling responsibilities are controlled. Do not attach credentials or secrets.",
  },
  {
    question: "What happens to records after an interface retires?",
    answer:
      "Retirement does not delete records produced under the former contract. Historical records should remain explainable, with their relationship to the retired interface preserved.",
  },
  {
    question: "Are any providers named?",
    answer:
      "Provider names are not established by the standard itself. Where a provider is relevant, the authoritative provider, integration registry or governed documentation should be used as the source of truth.",
  },
];

export default function IntegrationStandardsFAQ() {
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
                Integration Standards FAQ
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
              Direct answers about what a standard establishes.
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
              Reliably: less than an integration badge would suggest.
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
            {/* LEFT COLUMN */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {faqs.slice(0, 4).map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== 3 ? "border-b border-[#edf0f4]" : ""
                    }
                  >
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
                        gap-4
                        px-5
                        py-4
                        text-left
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

                      <span
                        className="
                          flex
                          size-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          bg-[#f1f3f6]
                          text-sm
                          font-semibold
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
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

            {/* RIGHT COLUMN */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {faqs.slice(4).map((faq, index) => {
                const actualIndex = index + 4;
                const isOpen = openIndex === actualIndex;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== 3 ? "border-b border-[#edf0f4]" : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(actualIndex)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        min-h-20
                        w-full
                        items-center
                        justify-between
                        gap-4
                        px-5
                        py-4
                        text-left
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

                      <span
                        className="
                          flex
                          size-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          bg-[#f1f3f6]
                          text-sm
                          font-semibold
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
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
      </div>
    </section>
  );
}