"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Someone contacted me about a role — is it genuine?",
    answer: (
      <>
        Check the role against the current openings on this page. A role that
        does not appear here is not one we are hiring for, and channels not
        listed with a role are not channels we use.{" "}
        <a
          href="#candidate-trust"
          className="font-semibold text-[#526f9d] hover:underline"
        >
          See candidate trust
        </a>
      </>
    ),
  },
  {
    question: "Will I ever be asked to pay something?",
    answer:
      "No. We never require payment to apply, interview, or receive equipment. Any payment request is fraudulent.",
  },
  {
    question: "Do you sponsor visas?",
    answer:
      "Visa sponsorship is determined per role. Check the specific role listing for the applicable sponsorship information.",
  },
  {
    question: "What is the salary range?",
    answer:
      "Compensation is a per-role fact. Where a salary range is available, it is stated on the relevant role page rather than generalized across roles.",
  },
  {
    question: "What is the interview process?",
    answer:
      "The interview process can vary by role. The relevant role listing or recruiting team will provide the applicable process and next steps.",
  },
  {
    question: "Can I request an interview accommodation?",
    answer:
      "Yes. You can request an adjustment that would help with the interview process. You do not need to provide a diagnosis, category, or unnecessary documentation.",
  },
  {
    question: "There are no roles listed. Can I send a résumé anyway?",
    answer:
      "No general résumé intake is provided through this page. When a role is available, use the approved application route associated with that role.",
  },
  {
    question: "Who would I actually be employed by?",
    answer:
      "The employing entity is a per-role fact and is stated in the relevant role information rather than assumed from the broader group relationship.",
  },
];

export default function CareersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
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
                Careers FAQ
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
              Direct answers for candidates.
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
              Several answers are per-role rather than general, and this page
              says so instead of generalizing.
            </p>
          </div>

          {/* FAQ COLUMNS */}
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
              id="candidate-trust"
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
                        ? "border-b border-[#edf0f4]"
                        : ""
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
                        className="
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
                          leading-none
                          text-[#5d7192]
                        "
                      >
                        {isOpen ? "−" : "+"}
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
                        ? "border-b border-[#edf0f4]"
                        : ""
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
                        className="
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
                          leading-none
                          text-[#5d7192]
                        "
                      >
                        {isOpen ? "−" : "+"}
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