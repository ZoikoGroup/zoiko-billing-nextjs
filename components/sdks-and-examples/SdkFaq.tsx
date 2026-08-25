"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
  link?: string;
};

const leftFaqs: Faq[] = [
  {
    question: "Are examples production-ready?",
    answer:
      "Each example carries a completeness class — orientation snippet, task example, production pattern or end-to-end reference — and states what it does not validate.",
    link: "See the blueprint",
  },
  {
    question: "Which languages have an official SDK?",
    answer:
      "Only languages listed in the official SDK registry are treated as having an official SDK. If a language or package is not present in the canonical registry, it is not presented as an official SDK.",
  },
  {
    question: "Can I copy an example straight into production?",
    answer:
      "Not automatically. Examples demonstrate the declared integration pattern, but production still requires authentication, permissions, configuration, data handling, monitoring, limits, security controls and readiness validation.",
  },
  {
    question: "Which version does an example target?",
    answer:
      "Each example should identify the validated SDK, runtime and API combination. Version information comes from the canonical SDK or API source rather than an assumed or unspecified latest version.",
  },
  {
    question: "Do examples show real credentials?",
    answer:
      "No. Examples use explicit placeholders and must never contain realistic secret-shaped credentials, tokens or other sensitive authentication material.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "Does an SDK handle retries for me?",
    answer:
      "Only when retry behavior is explicitly provided by the official SDK or API documentation. An example does not imply automatic retries, idempotency or exactly-once behavior unless those guarantees are documented.",
  },
  {
    question: "Where do I test an example safely?",
    answer:
      "Use the Developer Sandbox when the capability is genuinely supported there. Sandbox behavior and fidelity limitations still apply, so successful sandbox execution does not by itself prove production readiness.",
  },
  {
    question: "How do I verify an SDK is official?",
    answer:
      "Verify the package against the official SDK registry or another canonical source. Package naming or popularity alone is not sufficient evidence that an SDK is officially supported.",
  },
  {
    question: "Can I fork or vendor an SDK?",
    answer:
      "Only when the SDK's license and official guidance permit it. Forking or vendoring can also change upgrade, security and support responsibilities, so those implications should be reviewed before doing so.",
  },
  {
    question: "What if an example stops working after an upgrade?",
    answer:
      "Check the example's target version, SDK lifecycle state, compatibility requirements and published migration notes. If the source or validation is stale, the example should be marked for review and unsafe copy or install actions should be suppressed.",
  },
];

function FaqItem({
  question,
  answer,
  link,
  isOpen,
  onClick,
}: Faq & {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#e5e9ef] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-5
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
            text-sm
            font-semibold
            leading-5
            transition-all
            duration-200
            ${
              isOpen
                ? "bg-[#315b9a] text-white"
                : "bg-[#f3f5f8] text-[#5d7192]"
            }
          `}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-5 text-[#64748b]">
            {answer}{" "}
            {link && (
              <a
                href="#example-blueprint"
                className="font-semibold text-[#2563eb] hover:underline"
              >
                {link}
              </a>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default function SdkFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "Are examples production-ready?"
  );

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
          xl:px-24
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
            lg:gap-11
          "
        >
          {/* Heading */}
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
            {/* Eyebrow */}
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
                SDKs &amp; Examples FAQ
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Title */}
            <h2
              className="
                !m-0
                w-full
                text-[30px]
                font-extrabold
                leading-[1.2]
                tracking-[-0.035em]
                text-[#091127]
                sm:text-[34px]
                md:text-[36px]
              "
            >
              Direct answers about code you can trust.
            </h2>

            {/* Description */}
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
              Where a fact is not published, the answer says so rather than
              approximating it.
            </p>
          </div>

          {/* FAQ */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              lg:grid-cols-2
            "
          >
            {/* Left */}
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
                  link={faq.link}
                  isOpen={openFaq === faq.question}
                  onClick={() => toggleFaq(faq.question)}
                />
              ))}
            </div>

            {/* Right */}
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
                  link={faq.link}
                  isOpen={openFaq === faq.question}
                  onClick={() => toggleFaq(faq.question)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}