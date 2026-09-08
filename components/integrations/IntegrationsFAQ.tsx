'use client';

import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Why is the directory empty?',
    answer:
      'No record has completed verification and approval. Naming an integration is a claim about a third party’s system as well as ours — and a plausible list would be disproved by the first reader who tried to use it.',
  },
  {
    question: 'It says Available — can I use it today?',
    answer:
      'Availability means the integration has a verified registry record. It does not by itself confirm plan eligibility, regional availability, current operational health, or account-specific prerequisites.',
  },
  {
    question: 'Is it working at the moment?',
    answer:
      'Availability and operational health are separate facts. Where a published operational status source exists, current health is shown separately rather than being implied by the directory availability state.',
  },
  {
    question: 'Will it work in my country?',
    answer:
      'Regional applicability is determined from the approved registry information. It is not inferred from the provider’s headquarters or other indirect signals.',
  },
  {
    question: 'Is the integration certified?',
    answer:
      'Certification is shown only when a formal record exists and can be verified through the appropriate registry or partner governance source. Provider claims or credentials are not treated as certification by themselves.',
  },
  {
    question: 'What if the system I need isn’t listed?',
    answer:
      'Not listed does not mean unsupported forever, but it also does not mean supported. You can use the API documentation for a custom build, submit an integration for review, or contact the appropriate team about your specific requirement.',
  },
  {
    question: 'Who supports it if it breaks?',
    answer:
      'Account-specific integration failures are handled through Integration Support. The public directory describes verified integration information and is not a support channel.',
  },
  {
    question: 'What does “last verified” actually mean?',
    answer:
      'Last verified identifies when the registry record was checked and what the verification covered. It is a freshness indicator, not a guarantee that the integration will work for every account or configuration.',
  },
];

export default function IntegrationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-white">
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
                Integrations FAQ
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
              Direct answers about the directory.
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
              Most answers separate one of the four facts that
              &quot;Available&quot; tends to collapse.
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
                      index !== 3
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
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
                        transition-colors
                        hover:bg-[#fafbfc]
                      "
                    >
                      <span className="text-sm font-semibold leading-6 text-[#091127]">
                        {faq.question}
                      </span>

                      <span
                        className={`
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
                          transition-transform
                          ${isOpen ? 'rotate-45' : ''}
                        `}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
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
                      index !== 3
                        ? 'border-b border-[#edf0f4]'
                        : ''
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(actualIndex)}
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
                        transition-colors
                        hover:bg-[#fafbfc]
                      "
                    >
                      <span className="text-sm font-semibold leading-6 text-[#091127]">
                        {faq.question}
                      </span>

                      <span
                        className={`
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
                          transition-transform
                          ${isOpen ? 'rotate-45' : ''}
                        `}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
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