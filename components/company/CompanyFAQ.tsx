'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const LEFT_FAQS: FAQItem[] = [
  {
    question: 'How is this different from About?',
    answer: (
      <>
        About owns the company narrative. This page is a routing hub — it
        maps destinations and states entity relationships. Duplicating
        About&apos;s primary intent here without authority separation is a
        publication blocker.
      </>
    ),
  },
  {
    question: 'When was Zoiko Billing founded, and how big is it?',
    answer: (
      <>
        The authoritative company information is maintained through the
        approved company information source. See{' '}
        <Link
          href="/about-us"
          className="font-semibold text-blue-600 hover:underline"
        >
          About
        </Link>{' '}
        for the company narrative.
      </>
    ),
  },
  {
    question: 'What is the relationship with Zoiko Group?',
    answer: (
      <>
        The relationship between Zoiko Billing and Zoiko Group should be
        verified against the approved company and legal authority rather than
        inferred from this routing page.
      </>
    ),
  },
  {
    question: 'Do I get Zoiko One with Zoiko Billing?',
    answer: (
      <>
        Product inclusion depends on the applicable commercial and product
        state. Review the relevant{' '}
        <Link
          href="/pricing"
          className="font-semibold text-blue-600 hover:underline"
        >
          Pricing
        </Link>{' '}
        information or contact the appropriate commercial route.
      </>
    ),
  },
];

const RIGHT_FAQS: FAQItem[] = [
  {
    question: 'Which legal entity would we contract with?',
    answer: (
      <>
        Contracting-entity information must be confirmed through the approved
        legal and commercial route. This page does not infer a contracting
        entity from product or company information.
      </>
    ),
  },
  {
    question: 'Why is no leadership shown?',
    answer: (
      <>
        Leadership information is maintained by the appropriate company
        authority. This page does not duplicate leadership information when
        another approved destination owns it.
      </>
    ),
  },
  {
    question: 'I’m a journalist on a deadline.',
    answer: (
      <>
        Use the approved{' '}
        <span className="font-semibold text-blue-600">Newsroom</span> route
        for media information and press enquiries. Media contact details
        should not be hard-coded here outside the approved contact authority.
      </>
    ),
  },
  {
    question: 'Someone contacted me about a job — is it real?',
    answer: (
      <>
        Verify recruitment information through the official{' '}
        <Link
          href="/careers"
          className="font-semibold text-blue-600 hover:underline"
        >
          Careers
        </Link>{' '}
        route. Do not rely on an unsolicited message as proof that a role or
        recruiter is genuine.
      </>
    ),
  },
];

function FAQCard({
  items,
  openIndex,
  onToggle,
}: {
  items: FAQItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <div
      className="
        flex
        flex-1
        flex-col
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
            className={`
              flex
              flex-col
              ${
                index !== items.length - 1
                  ? 'border-b border-[#edf0f4]'
                  : ''
              }
            `}
          >
            {/* QUESTION */}
            <button
              type="button"
              onClick={() => onToggle(index)}
              aria-expanded={isOpen}
              className="
                flex
                min-h-20
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
                {item.question}
              </span>

              {/* PLUS / MINUS */}
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
                `}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* ANSWER */}
            {isOpen && (
              <div className="px-5 pb-5">
                <div
                  className="
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CompanyFAQ() {
  const [leftOpenIndex, setLeftOpenIndex] = useState<number | null>(0);
  const [rightOpenIndex, setRightOpenIndex] = useState<number | null>(null);

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
            gap-11
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
                Company FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <div className="w-full pb-[0.69px]">
              <h2
                className="
                  !m-0
                  w-full
                  text-center
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
                Direct answers, and several point
               
                elsewhere.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[687px] pt-[3.11px]">
              <p
                className="
                  !m-0
                  text-center
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Most answers name the authority rather than restating what it
                holds.
              </p>
            </div>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              lg:flex-row
            "
          >
            {/* LEFT COLUMN */}
            <FAQCard
              items={LEFT_FAQS}
              openIndex={leftOpenIndex}
              onToggle={(index) =>
                setLeftOpenIndex(
                  leftOpenIndex === index ? null : index
                )
              }
            />

            {/* RIGHT COLUMN */}
            <FAQCard
              items={RIGHT_FAQS}
              openIndex={rightOpenIndex}
              onToggle={(index) =>
                setRightOpenIndex(
                  rightOpenIndex === index ? null : index
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}