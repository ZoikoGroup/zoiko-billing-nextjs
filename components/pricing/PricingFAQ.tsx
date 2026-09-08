"use client";

import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function PricingFAQ() {
  const leftFaqs: FAQ[] = [
    {
      question: "How much does Zoiko Billing cost?",
      answer:
        "Essentials is $29/month, Professional is $79/month and Business is $249/month, billed monthly. Annually the effective rates are $23, $63 and $199/month — around 20% lower. Enterprise is contracted.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. Zoiko Billing offers a free trial so you can evaluate the platform before committing to a paid plan. Your trial terms and any applicable limits are shown during signup.",
    },
    {
      question: "Do you charge a percentage of our revenue?",
      answer:
        "No. Zoiko Billing subscription plans are priced as fixed monthly or annual subscriptions rather than as a percentage of your revenue.",
    },
    {
      question: "What is not included in the subscription?",
      answer:
        "The subscription covers the features and usage limits defined for your selected plan. Enterprise-specific services, custom integrations, additional security or compliance requirements, and other agreed services may be contracted separately.",
    },
  ];

  const rightFaqs: FAQ[] = [
    {
      question: "Are taxes included in these prices?",
      answer:
        "The listed prices are subscription prices before any applicable taxes. Taxes may be added based on your billing address, location, and applicable tax requirements.",
    },
    {
      question: "Can I pay in a currency other than USD?",
      answer:
        "Pricing is displayed in USD. If you require billing in another currency, contact Zoiko for availability and applicable terms.",
    },
    {
      question: "What happens when I hit a plan limit?",
      answer:
        "When you reach a plan limit, Zoiko Billing will not silently move you to a higher-priced plan. You will be informed when a limit is reached and can review the available options for your account.",
    },
    {
      question: "What if I need to downgrade?",
      answer:
        "You can request a downgrade to a lower plan. Your existing data is not silently deleted as part of the downgrade. Any feature or usage differences will follow the limits and capabilities of the new plan.",
    },
  ];

  const FAQItem = ({
    faq,
    isOpen,
    onClick,
  }: {
    faq: FAQ;
    isOpen: boolean;
    onClick: () => void;
  }) => {
    return (
      <div className="w-full border-b border-[#edf0f4] last:border-b-0">
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          className="flex min-h-20 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="text-sm font-semibold leading-6 text-[#091127]">
            {faq.question}
          </span>

          <span
            className={`flex size-5 shrink-0 items-center justify-center rounded-md bg-[#f1f3f6] text-sm font-semibold leading-5 text-[#5d7192] transition-transform duration-200 ${
              isOpen ? "rotate-0" : ""
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5">
              <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FAQCard = ({ faqs }: { faqs: FAQ[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
      setOpenIndex((current) => (current === index ? null : index));
    };

    return (
      <div className="w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 md:gap-11">
          
          {/* Heading */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
                Pricing FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            <h2 className="!m-0 w-full max-w-[662px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              Billing frequency, trials, taxes, fees and plan changes.
            </h2>

            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-[#5d7192] sm:text-base">
              Direct answers, including the ones about charges that sit outside
              the subscription.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-start">
            <FAQCard faqs={leftFaqs} />
            <FAQCard faqs={rightFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}