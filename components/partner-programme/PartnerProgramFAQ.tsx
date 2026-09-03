"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const leftFAQs: FAQItem[] = [
  {
    question: "What are the partner tiers and what does each get?",
    answer: (
      <>
        No tier, benefit, or commercial mechanism is created by this page.
        Paths and their elements render from the approved program record, and
        none is established in this wireframe.{" "}
        <span className="font-semibold text-blue-600">See the states</span>
      </>
    ),
  },
  {
    question: "Does being a partner mean Zoiko endorses us?",
    answer: (
      <>
        Participation in the partner programme does not automatically mean
        that Zoiko endorses, certifies, or recommends a partner. Any approved
        endorsement or customer-facing claim must come from an authorised
        programme record or written agreement.
      </>
    ),
  },
  {
    question: "Will we get leads or referrals?",
    answer: (
      <>
        Leads or referrals are not guaranteed simply because an organisation
        participates in the programme. Any referral activity, qualification
        criteria, or commercial arrangement must be explicitly defined in the
        approved partner agreement.
      </>
    ),
  },
  {
    question: "Do we get an exclusive territory?",
    answer: (
      <>
        Partner participation does not create territorial exclusivity by
        default. Any geographic, market, or customer exclusivity must be
        explicitly approved and documented as part of the applicable
        programme arrangement.
      </>
    ),
  },
];

const rightFAQs: FAQItem[] = [
  {
    question: "Our integration is published — are we a partner?",
    answer: (
      <>
        No. A published integration and partner status are separate things.
        Being listed or technically integrated with Zoiko does not, by itself,
        establish a partner relationship. Partner status requires the
        applicable programme approval or agreement.
      </>
    ),
  },
  {
    question: "Can we use Zoiko's certifications with our customers?",
    answer: (
      <>
        Only where the relevant certification and usage rights have been
        explicitly granted. Partners should not represent Zoiko
        certifications as their own or use Zoiko marks, claims, or
        certifications outside the approved terms.
      </>
    ),
  },
  {
    question: "Can a partner sign or commit on Zoiko's behalf?",
    answer: (
      <>
        No. Partner status does not give an organisation authority to bind
        Zoiko, enter contracts on its behalf, make commitments for Zoiko, or
        represent itself as an authorised agent unless that authority has been
        explicitly granted in writing.
      </>
    ),
  },
  {
    question: "What happens if the relationship ends?",
    answer: (
      <>
        When a partner relationship ends, the parties follow the applicable
        termination terms. Access, listings, programme benefits, branding,
        certifications, and other partner-specific rights may need to be
        removed or discontinued according to the approved agreement.
      </>
    ),
  },
];

function FAQCard({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    items.findIndex((item) => item.answer)
  );

  return (
    <div
      className="
        flex-1
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
            className={
              index !== items.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
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
                className={`
                  flex
                  size-5
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
                    text-[#64748b]
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

export default function PartnerProgramFAQ() {
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
                Partner Program FAQ
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
              Direct answers about the program.
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
              Where a partner page would normally list benefits and tiers, this
              one names the source that owns them.
            </p>
          </div>

          {/* FAQ CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5

              lg:flex-row
            "
          >
            <FAQCard items={leftFAQs} />
            <FAQCard items={rightFAQs} />
          </div>
        </div>
      </div>
    </section>
  );
}