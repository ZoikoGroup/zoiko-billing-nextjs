'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: 'I applied — do I have portal access?',
    answer: (
      <>
        No. An application does not grant access, and neither does an
        integration submission. Access requires a current approved
        relationship, which is a separate determination.{' '}
        <span className="font-semibold text-blue-600">See the states</span>
      </>
    ),
  },
  {
    question: 'Why can I sign in but see nothing?',
    answer:
      'Authentication alone does not create partner access. A current approved relationship, organization context, role, and capability state must also resolve before partner modules appear.',
  },
  {
    question: 'Why is a capability missing rather than greyed out?',
    answer:
      'Unavailable capabilities are intentionally not rendered. A greyed-out capability could reveal roadmap, entitlement, or commercial information that should not be exposed.',
  },
  {
    question: 'How do I get access for a colleague?',
    answer:
      'Access is managed within your organization under the approved role registry. Ask an authorized colleague or organization administrator rather than requesting access through the portal.',
  },
  {
    question: 'Does portal access make us a listed partner?',
    answer:
      'No. Portal access and partner listing are separate determinations managed by their respective authorities.',
  },
  {
    question: 'Can I use the brand assets in the portal?',
    answer:
      'Portal visibility does not automatically grant permission to use brand assets. Brand usage follows the applicable approved brand and partner guidance.',
  },
  {
    question: 'Our access was suspended. Why?',
    answer:
      'The portal may show the applicable recovery route without exposing internal risk, security, or relationship rationale.',
  },
  {
    question: 'What authentication method does the portal use?',
    answer:
      'Authentication is established through the approved identity mechanism. Authentication confirms identity but does not by itself determine authorization.',
  },
]

const PartnerFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
                Partner Portal FAQ
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
              Direct answers about access.
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
              Several answers describe what the portal deliberately will not
              tell you.
            </p>
          </div>

          {/* FAQ */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-5

              lg:grid-cols-2
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
              "
            >
              {faqs.slice(0, 4).map((faq, index) => {
                const isOpen = openIndex === index

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== 3 ? 'border-b border-[#edf0f4]' : ''
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
                        {faq.question}
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
                          leading-5
                          text-[#5d7192]
                          transition-transform
                          duration-200
                          ${isOpen ? 'rotate-45' : ''}
                        `}
                      >
                        +
                      </span>
                    </button>

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
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
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
              "
            >
              {faqs.slice(4).map((faq, index) => {
                const actualIndex = index + 4
                const isOpen = openIndex === actualIndex

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== faqs.slice(4).length - 1
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
                        {faq.question}
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
                          leading-5
                          text-[#5d7192]
                          transition-transform
                          duration-200
                          ${isOpen ? 'rotate-45' : ''}
                        `}
                      >
                        +
                      </span>
                    </button>

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
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerFAQ