import type { ReactNode } from "react";

type FAQItem = {
  question: string;
  answer?: ReactNode;
  open?: boolean;
};

export default function StrengthenAuditabilityFAQ() {
  const leftFaqs: FAQItem[] = [
    {
      question: "Is the audit trail immutable?",
      answer: (
        <>
          No such claim is made. Immutability is a statement about storage
          technology, and this is an information-architecture framework. What
          it does specify is that corrections stay visible rather than
          overwriting history.
        </>
      ),
      open: true,
    },
    {
      question: "Will this make us compliant?",
    },
    {
      question:
        "Does an attached evidence file mean the decision is supported?",
    },
    {
      question: "Are these five principles product fields?",
    },
  ];

  const rightFaqs: FAQItem[] = [
    {
      question: "Why is attribution by role rather than by name?",
    },
    {
      question: "Can the system explain a change automatically?",
    },
    {
      question: "What if a historical record can't be retrieved?",
    },
    {
      question: "Does it deduplicate repeated events?",
    },
  ];

  const allFaqs: FAQItem[] = [...leftFaqs, ...rightFaqs];

  const FaqItem = ({
    question,
    answer,
    open = false,
  }: FAQItem) => (
    <div
      className={`
        w-full
        border-b
        border-[#edf0f4]
        last:border-b-0
        ${open ? "bg-white" : ""}
      `}
    >
      <div
        className="
          flex
          min-h-[80px]
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-4
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
          className="
            flex
            size-5
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-[#f7f8fa]
            text-sm
            font-semibold
            leading-6
            text-[#5d7192]
          "
        >
          +
        </span>
      </div>

      {open && answer && (
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

            sm:gap-9

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
                Strengthen Auditability FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

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
              Direct answers, several of them
             
              refusals.
            </h2>

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
              Where a claim would be reassuring and unverifiable, the page
              says so.
            </p>
          </div>

          {/* DESKTOP */}
          <div className="hidden w-full grid-cols-2 gap-5 md:grid">
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
              {leftFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={faq.open}
                />
              ))}
            </div>

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
              {rightFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={faq.open}
                />
              ))}
            </div>
          </div>

          {/* MOBILE */}
          <div
            className="
              flex
              w-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:hidden
            "
          >
            {allFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={faq.open}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}