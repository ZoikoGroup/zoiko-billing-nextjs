"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Why does this page keep sending me somewhere else?",
    answer: (
      <>
        Because specialist destinations have handling this page does not —
        secure financial intake, identity-safe recovery, confidential
        disclosure. Routing is not deflection; a general queue would answer
        more slowly and with fewer controls.{" "}
        <span className="font-semibold text-[#2563eb]">
          See the precedence
        </span>
      </>
    ),
  },
  {
    question: "Where is your phone number or address?",
    answer:
      "Corporate contact details are published only where the appropriate registry or approved source provides them.",
  },
  {
    question: "How quickly will someone reply?",
    answer:
      "This page does not promise a response time or coverage window. Any applicable commitments live in the relevant support policy.",
  },
  {
    question: "Can I report a security problem here?",
    answer:
      "Security reports should use the responsible disclosure path, which provides the appropriate confidentiality and handling.",
  },
];

const rightFaqs = [
  {
    question: "Why is there no form until I pick a category?",
    answer:
      "The category determines the correct destination and the controls required for the type of request.",
  },
  {
    question: "I picked the wrong category — what happens?",
    answer:
      "The request can be redirected to the appropriate destination rather than being handled through an unsuitable general intake.",
  },
  {
    question: "Can I send my résumé here?",
    answer:
      "No. Careers routes applications through the approved application system. Résumés and identity documents are not accepted through this page.",
  },
  {
    question: "Is my account information safe to include?",
    answer:
      "Do not include sensitive account information in a general contact message. Use the appropriate authenticated or specialist destination instead.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`
        border-b
        border-[#edf0f4]
        last:border-b-0
      `}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          min-h-[80px]
          w-full
          items-center
          justify-between
          gap-5
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
          {question}
        </span>

        <span
          className={`
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
            leading-5
            text-[#5d7192]
            transition-transform
            duration-200
            ${isOpen ? "rotate-45" : ""}
          `}
          aria-hidden="true"
        >
          +
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
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ContactFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(
    "Why does this page keep sending me somewhere else?",
  );

  const handleToggle = (question: string) => {
    setOpenItem((current) =>
      current === question ? null : question,
    );
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
                Contact FAQ
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
              Direct answers about reaching us.
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
              Where this page routes you elsewhere, the reason is that the
              other destination can actually resolve the issue.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              md:flex-row
            "
          >
            {/* LEFT COLUMN */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                md:flex-1
              "
            >
              {leftFaqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === faq.question}
                  onToggle={() => handleToggle(faq.question)}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                md:flex-1
              "
            >
              {rightFaqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === faq.question}
                  onToggle={() => handleToggle(faq.question)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}