"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
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
    answer: (
      <>
        No. A template can help structure work, capture information or prepare
        an operational task, but it should not replace an authoritative system
        of record. Use the approved product, accounting, CRM, ERP or other
        organizational system when records must remain current and controlled.
      </>
    ),
  },
  {
    question: "Do templates contain real data?",
    answer: (
      <>
        Public templates should use blank fields, examples or synthetic sample
        values. Do not add real customer, employee, payment, credential or
        confidential information to a published template or shared copy unless
        an approved business process specifically requires it and appropriate
        protections are in place.
      </>
    ),
  },
  {
    question: "Do I need an account to download?",
    answer: (
      <>
        Not necessarily. Public templates can be made available without an
        account when their availability state permits it. If a particular
        template requires sign-in, access or another controlled action, the
        current availability information should make that requirement clear.
      </>
    ),
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Does sheet protection make a template secure?",
    answer: (
      <>
        No. Sheet or cell protection can help prevent accidental changes, but
        it is not a substitute for security controls. Do not treat workbook
        protection as protection for confidential information, credentials or
        other sensitive data.
      </>
    ),
  },
  {
    question: "Are templates accessible?",
    answer: (
      <>
        Templates should be designed and published with accessibility in mind,
        including clear labels, readable structure, meaningful instructions and
        appropriate document semantics where supported. Accessibility also
        depends on the application used to open and edit the template.
      </>
    ),
  },
  {
    question: "What happens when a template is updated?",
    answer: (
      <>
        The current published version becomes the version to use. If you have
        downloaded or stored an older copy, check the version and
        last-reviewed information and replace obsolete copies according to your
        organization&apos;s process.
      </>
    ),
  },
  {
    question: "Will clicking a template download it immediately?",
    answer: (
      <>
        Not always. The action depends on the template&apos;s current public
        availability state and how the resource is published. A link may open
        a preview, guide or information page before the file becomes available
        for download.
      </>
    ),
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
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-5
          text-left
          transition-colors
          hover:bg-[#f7f8fa]
          sm:py-6
        "
        aria-expanded={open}
      >
        <span className="text-sm font-bold leading-6 text-[#091127]">
          {faq.question}
        </span>

        <span
          className={`
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-md
            border
            border-[#dfe5ee]
            bg-[#f7f8fa]
            text-sm
            font-semibold
            leading-5
            text-[#5d7192]
            transition-transform
            duration-200
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
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
    <div
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-[#dfe5ee]
        bg-white
        shadow-[0_6px_20px_rgba(15,23,42,0.04)]
      "
    >
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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
          {/* Intro */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Templates FAQ
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <h2
              className="
                !m-0
                w-full
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
              Direct answers before you download.
            </h2>

            {/* Description */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              A public template never requires an account unless its approved
              availability state says otherwise.
            </p>
          </div>

          {/* FAQ */}
          <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-5">
            <FAQColumn faqs={leftFaqs} />
            <FAQColumn faqs={rightFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}