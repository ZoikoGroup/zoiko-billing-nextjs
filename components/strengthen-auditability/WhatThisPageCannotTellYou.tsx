export default function WhatThisPageCannotTellYou() {
  const questions = [
    {
      question: "Does this satisfy our auditors?",
      answer: (
        <>
          <strong>No compliance conclusion is drawn anywhere on this page.</strong>{" "}
          That judgement belongs to your auditors and advisors against a
          standard this page does not know.
        </>
      ),
    },
    {
      question: "How long is history retained?",
      answer: (
        <>
          Retention is owned by{" "}
          <span className="font-semibold text-blue-600">
            Privacy &amp; Data Governance
          </span>{" "}
          and commercial terms.{" "}
          <strong>
            No retention period is invented here
          </strong>
          , and retention is not recoverability.
        </>
      ),
    },
    {
      question: "What does the product actually record?",
      answer: (
        <>
          <span className="font-semibold text-blue-600">Product</span> owns
          the record model. These principles are recommended architecture,{" "}
          <strong>not verified fields</strong>.
        </>
      ),
    },
    {
      question: "Is the trail cryptographically protected?",
      answer: (
        <>
          <strong>
            No signature, hash or tamper-evidence mechanism is claimed.
          </strong>{" "}
          <span className="font-semibold text-blue-600">Security</span> owns
          control detail at the level it publishes.
        </>
      ),
    },
    {
      question: "Can we export evidence?",
      answer: (
        <>
          Export is exposed only where a governed product source supports it.
          Otherwise this is a product-validation conversation.
        </>
      ),
    },
    {
      question: "Who owns the decision itself?",
      answer: (
        <>
          <strong>Standardise Billing Control</strong> covers ownership and
          approval design.{" "}
          <strong>Route pending — no link asserted.</strong>
        </>
      ),
    },
  ];

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
            gap-5

            sm:gap-6
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
                What this page cannot tell you
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
              Six questions with authorities
        
              elsewhere.
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
              Auditability touches compliance, retention and security without
              owning any of them.
            </p>
          </div>

          {/* QUESTIONS */}
          <div className="flex w-full flex-col gap-3 pt-2">
            {questions.map((item) => (
              <div
                key={item.question}
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:px-6
                  sm:py-5
                "
              >
                {/* QUESTION */}
                <h3
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]

                    sm:text-[15px]
                  "
                >
                  {item.question}
                </h3>

                {/* ANSWER */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]

                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}