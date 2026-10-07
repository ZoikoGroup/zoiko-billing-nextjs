"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Are these real recordings?",
    answer:
      "No. Every entry is an illustrative specimen of the card contract — no media asset, transcript or reviewed date is published. The library structure is real; the assets are placeholders.",
  },
  {
    question: "Does a published demo mean the feature is available?",
    answer:
      "No. Publication means the demonstration has been approved for public listing. It does not establish product availability, customer entitlement, market availability or access to the demonstrated capability.",
  },
  {
    question: 'Why is there no "most popular" section?',
    answer:
      'The library does not rank demos by popularity. A "most popular" label would introduce an unsupported claim about usage or demand, so demos are presented according to their governed categories and filter dimensions instead.',
  },
  {
    question: "Why are durations shown as bands?",
    answer:
      "Durations are shown as bands because exact duration metadata is not available for the current assets. The bands provide useful filtering without implying a precision that the source data does not support.",
  },
  {
    question: "Why does every asset show currentness as unavailable?",
    answer:
      "Currentness is unavailable when there is no source-backed review date or governed currentness state. Publication alone does not prove that an asset is still accurate, so the library does not infer currentness from its publication date.",
  },
  {
    question: "Does the truth label stay visible while a video plays?",
    answer:
      "Yes. Truth status and the applicable does-not-claim text remain visible during playback. The viewer should not have to remember a qualification that disappears once the demonstration starts.",
  },
  {
    question: "What happens to a demo that becomes inaccurate?",
    answer:
      "It should be withdrawn from normal public results and moved through the appropriate lifecycle state. Where a replacement exists, the relationship should be preserved so the asset's lineage remains explainable rather than silently deleting the historical record.",
  },
  {
    question: "Can I see a real demonstration?",
    answer:
      "This library does not claim that its illustrative assets are live demonstrations. If a real demonstration is available and approved for the requested audience, it should be provided through the appropriate governed product, specialist or commercial route.",
  },
];

export default function DemoLibraryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 md:gap-10 lg:gap-11">

          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">

            {/* Eyebrow */}
            <div className="relative flex h-4 w-full max-w-[192px] items-center justify-center">
              <span className="absolute left-0 h-px w-4 bg-[#7890b2] opacity-40" />

              <span className="px-3 text-center text-xs font-bold uppercase leading-4 tracking-widest text-[#7890b2]">
                Demo Library FAQ
              </span>

              <span className="absolute right-0 h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <div className="w-full text-center">
              <h2 className="text-[#091127] !text-[30px] font-extrabold leading-tight sm:!text-[34px] md:!text-[36px] lg:!text-[40px] lg:leading-10">
                Direct answers about what a demo
               
                proves.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[687px] pt-1 text-center">
              <p className="text-base leading-7 text-[#5d7192]">
                Consistently: that something can be shown, not that it is
                available to you.
              </p>
            </div>
          </div>

          {/* FAQ grid */}
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#fafbfc]"
                  >
                    <span className="text-sm font-semibold leading-6 text-[#091127]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-md bg-[#edf0f4] text-sm font-semibold leading-5 text-[#5d7192] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#edf0f4] px-5 pb-5 pt-4">
                      <p className="text-sm leading-6 text-[#5d7192]">
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