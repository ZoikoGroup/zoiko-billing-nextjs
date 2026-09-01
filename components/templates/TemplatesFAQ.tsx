"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer?: React.ReactNode;
};

const leftFaqs: FAQ[] = [
  {
    question: "Are templates legal, tax or accounting documents?",
    answer: (
      <>
        No. Templates are operational starting points. They may require
        professional or jurisdiction-specific review, and completing one is
        never statutory compliance or a professional conclusion.
      </>
    ),
  },
  {
    question: "Can I use a template as a system of record?",
  },
  {
    question: "Do templates contain real data?",
  },
  {
    question: "Do I need an account to download?",
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Does sheet protection make a template secure?",
  },
  {
    question: "Are templates accessible?",
  },
  {
    question: "What happens when a template is updated?",
  },
  {
    question: "Will clicking a template download it immediately?",
  },
];

function FAQItem({
  faq,
  open,
  onClick,
}: {
  faq: FAQ;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-color-grey-95-10 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold leading-6 text-color-azure-11-2">
          {faq.question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-color-grey-97-4 text-sm font-semibold leading-5 text-color-azure-44-3 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && faq.answer && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-5 text-color-azure-44-3">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    faqs[0]?.answer ? 0 : null
  );

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          open={openIndex === index}
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

export default function TemplatesFAQ() {
  return (
    <section className="w-full bg-color-grey-97-4 px-4 py-16 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-color-azure-60 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Templates FAQ
            </span>

            <span className="h-px w-4 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold leading-10 text-color-azure-11-2 sm:text-4xl">
            Direct answers before you download.
          </h2>

          {/* Description */}
          <p className="max-w-[687px] text-base font-normal leading-7 text-color-azure-44-3">
            A public template never requires an account unless its approved
            availability state says otherwise.
          </p>
        </div>

        {/* FAQ */}
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          <FAQColumn faqs={leftFaqs} />
          <FAQColumn faqs={rightFaqs} />
        </div>
      </div>
    </section>
  );
}