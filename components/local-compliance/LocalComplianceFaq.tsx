const leftFaqs = [
  {
    question: "Does this make us compliant in a given country?",
    answer:
      "No. Local Compliance is not a legal engine, tax authority, regulator, filing service, certification system or guarantee of lawful operation. It organizes requirement context; determinations belong to qualified advisors.",
  },
  {
    question: "Which countries are covered?",
    answer:
      "Coverage is determined by the current jurisdiction availability information and approved sources. This page does not make independent country-coverage claims, and a navigation label should not be treated as evidence of availability.",
  },
  {
    question: "What tax rate or threshold applies?",
    answer:
      "The page does not determine tax rates, thresholds or filing obligations. Those values depend on jurisdiction, transaction context and the applicable authority or source. Use the relevant source or qualified tax advisor for the current determination.",
  },
  {
    question: "Does Zoiko Billing file or submit on our behalf?",
    answer:
      "No filing or regulatory submission obligation should be inferred from this page. Local Compliance provides context and routing information; any filing, submission or remittance responsibility must be confirmed through the applicable service and authoritative source.",
  },
];

const rightFaqs = [
  {
    question: 'What does "Not assessed" mean?',
    answer:
      '"Not assessed" means that no supported determination has been established for that item in the current context. It should be treated as an explicit state of uncertainty, not as confirmation that a requirement does not apply.',
  },
  {
    question: "What happens if a source disappears?",
    answer:
      "If an approved source becomes unavailable, the affected information should not be treated as independently verified. The page should surface the resulting uncertainty and route the question to the appropriate authoritative source or qualified advisor.",
  },
  {
    question: "Can we rely on the effective dates shown?",
    answer:
      "Effective dates are contextual information derived from the available source material. They should not be treated as a legal determination that a requirement applies to a particular business or transaction. Confirm the current position with the authoritative source.",
  },
  {
    question: "Are you certified or licensed for this?",
    answer:
      "No certification, regulatory license or professional-advisor status should be inferred from this page. Local Compliance organizes information and requirement context; legal, tax and regulatory determinations remain with the appropriate qualified professionals or authorities.",
  },
];

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="
        group
        border-b
        border-[#edf0f4]
        last:border-b-0
      "
    >
      <summary
        className="
          flex
          min-h-20
          w-full
          cursor-pointer
          list-none
          items-center
          justify-between
          gap-5
          px-5
          py-4

          [&::-webkit-details-marker]:hidden
        "
      >
        <span
          className="
            text-sm
            font-semibold
            leading-6
            text-[#12294f]
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
            bg-[#f1f3f6]
            text-sm
            font-semibold
            leading-5
            text-[#526b91]
          "
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:block">−</span>
        </span>
      </summary>

      <div className="px-5 pb-5">
        <p
          className="
            !m-0
            text-sm
            font-normal
            leading-5
            text-[#526b91]
          "
        >
          {answer}
        </p>
      </div>
    </details>
  );
}

export default function LocalComplianceFaq() {
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
              max-w-[687px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#3b82f6] opacity-40" />

              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#3b82f6]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Local Compliance FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#3b82f6] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                text-center
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#12294f]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Direct answers, and the legal questions route out.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#526b91]

                sm:text-base
              "
            >
              Most of these are questions a billing platform should decline
              rather than answer well.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              lg:flex-row
              lg:items-start
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

                lg:flex-1
              "
            >
              {leftFaqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={index === 0}
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

                lg:flex-1
              "
            >
              {rightFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}