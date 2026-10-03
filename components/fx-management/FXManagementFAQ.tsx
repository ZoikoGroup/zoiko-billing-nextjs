"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  open?: boolean;
};

export default function FXManagementFAQ() {
  const leftFaqs: FAQItem[] = [
    {
      question: "Where do your exchange rates come from?",
      answer:
        "No rate source or provider is named on this page. The model describes how a decision should point to its governed source class — which source applies in a given implementation is established by governed product sources, not here.",
      open: true,
    },
    {
      question: "Does Zoiko Billing execute currency conversion?",
      answer:
        "This page does not establish that Zoiko Billing executes currency conversion. It describes the decision, provenance, authority and review boundaries around FX management without claiming a conversion-execution capability.",
    },
    {
      question: "Do you offer the best available rate?",
      answer:
        "No best-rate claim is established on this page. Rate quality depends on the applicable source, timing, provenance, governing policy and implementation context, none of which are presented here as a universal best-rate guarantee.",
    },
    {
      question: "What spread or FX fee applies?",
      answer:
        "No specific spread, markup or FX fee is defined on this page. Commercial terms must come from the applicable governed pricing or product source rather than being inferred from the FX decision model.",
    },
  ];

  const rightFaqs: FAQItem[] = [
    {
      question: "How often are rates refreshed?",
      answer:
        "No fixed refresh interval is specified on this page. The model distinguishes observed time, effective period and currentness so that rate timing can be evaluated against the applicable governed source.",
    },
    {
      question: "When is a rate considered stale?",
      answer:
        "No universal staleness threshold is defined here. A rate's currentness depends on the applicable source, its effective period, observed time and the governing rules used by the implementation.",
    },
    {
      question: "What happens if the source is unavailable?",
      answer:
        "This page does not define a specific fallback rate or automatic recovery behavior. Source availability is treated as part of the decision and exception boundary, with the appropriate response determined by governed product and operational rules.",
    },
    {
      question: "Can someone manually override a rate?",
      answer:
        "The page does not grant unrestricted manual rate-editing authority. Any exception, override or correction should remain subject to the applicable authority, review, evidence and governance boundaries.",
    },
  ];

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
                FX Management FAQ
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
              Direct answers, most of them
              <br className="hidden sm:block" />
              boundaries.
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
              The questions buyers ask here are largely questions this page
              must decline.
            </p>
          </div>

          {/* FAQ GRID */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              lg:grid-cols-2
            "
          >
            <FAQColumn items={leftFaqs} />
            <FAQColumn items={rightFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQColumn({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(
    items.findIndex((item) => item.open)
  );

  return (
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
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="border-b border-[#e8ebf0] last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="
                flex
                min-h-[80px]
                w-full
                items-center
                justify-between
                gap-4
                px-5
                py-4
                text-left
              "
              aria-expanded={isOpen}
            >
              <span
                className="
                  text-sm
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                {item.question}
              </span>

              <span
                className="
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  bg-[#f7f8fa]
                  text-sm
                  font-semibold
                  leading-6
                  text-[#5d7192]
                "
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && item.answer && (
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
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}