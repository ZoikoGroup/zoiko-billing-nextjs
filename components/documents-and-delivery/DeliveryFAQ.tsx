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
    <section className="w-full bg-[#f7f8f8] px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-14 px-0 lg:px-12">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-end lg:gap-16">
          {/* Left */}
          <div className="flex min-w-0 flex-1 flex-col items-start gap-5 pt-2.5 pb-5">
            {/* Eyebrow */}
            <div className="relative h-4 w-28">
              <div className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <div className="absolute left-[30px] top-[-1px] whitespace-nowrap text-xs font-medium uppercase leading-4 tracking-wider text-[#47728e]">
                Questions
              </div>
            </div>

            {/* Heading */}
            <div className="w-full max-w-[638px]">
              <h2 className="text-4xl font-medium leading-[1.12] tracking-tight text-slate-950 sm:text-5xl">
                Direct answers about
                <br />
                document delivery.
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="w-full max-w-[529px]">
            <p className="text-base font-normal leading-8 text-[#57758c]">
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[920px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-zinc-200 first:border-t"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-16 w-full items-start justify-between gap-6 px-0.5 py-5 text-left"
                >
                  <span className="text-base font-semibold leading-7 text-slate-950">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold leading-6 transition-all ${
                      isOpen
                        ? "border-[#3f8fd8] bg-[#3f8fd8] text-white"
                        : "border-zinc-200 bg-transparent text-[#57758c]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="max-w-[736px] px-0.5 pb-6">
                    <p className="text-base font-normal leading-7 text-[#57758c]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}