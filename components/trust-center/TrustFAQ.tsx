"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "Which certifications do you hold?",
    answer: (
      <>
        This catalog lists certifications with their exact entity, product,
        region, and validity period. A certification applies to a defined
        scope, not automatically to the entire company.
      </>
    ),
  },
  {
    question: 'An artifact shows "unavailable" — does it not exist?',
    answer: (
      <>
        Not necessarily. “Unavailable” means the artifact is not currently
        available through the approved Trust Center path. It does not assert
        that the underlying artifact or control does not exist.
      </>
    ),
  },
  {
    question: "Why can I not see a summary of the audit findings?",
    answer: (
      <>
        Audit reports are evidence with defined scope and confidentiality
        boundaries. The Trust Center does not summarize findings in a way that
        could remove important context or disclose restricted information.
      </>
    ),
  },
  {
    question: "Do I have to talk to sales to get evidence?",
    answer: (
      <>
        No. Evidence access is governed by the applicable access policy and is
        not conditioned on agreeing to a sales conversation or marketing
        consent.
      </>
    ),
  },
  {
    question: 'Does "mapped" mean you are compliant?',
    answer: (
      <>
        No. “Mapped” means the evidence or control has been associated with a
        particular requirement. It does not by itself constitute a compliance
        claim, certification, or independent assurance.
      </>
    ),
  },
  {
    question: "An attestation covers last year. Does it apply now?",
    answer: (
      <>
        Not automatically. An attestation applies to its stated period and
        scope. Current applicability depends on the document’s validity,
        coverage, and any stated limitations.
      </>
    ),
  },
  {
    question: "Why did an artifact disappear from the catalog?",
    answer: (
      <>
        Artifacts may be removed when they expire, are superseded, fall outside
        the published scope, or are no longer approved for access. The catalog
        reflects currently approved evidence.
      </>
    ),
  },
  {
    question: "Is this page a status page?",
    answer: (
      <>
        No. The Trust Center catalogs security and compliance evidence. It is
        not a live service-status source and does not publish availability
        figures.
      </>
    ),
  },
];

export default function TrustFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
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
            gap-11
            px-7
          "
        >
          {/* INTRO */}
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
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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
                Trust Center FAQ
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
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
              Direct answers for reviewers.
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
              Where a status is not established, that is the answer — not a
              gap in the page.
            </p>
          </div>

          {/* FAQ */}
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {[faqs.slice(0, 4), faqs.slice(4)].map(
              (column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {column.map((faq) => {
                    const isOpen = openFaq === faq.question;

                    return (
                      <div
                        key={faq.question}
                        className="border-b border-[#edf0f4] last:border-b-0"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(faq.question)}
                          aria-expanded={isOpen}
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-5
                            px-5
                            py-4
                            text-left
                          "
                        >
                          <span className="text-sm font-semibold leading-6 text-[#091127]">
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
                              leading-5
                              text-[#5d7192]
                            "
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5">
                            <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}