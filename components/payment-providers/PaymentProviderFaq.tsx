"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Which payment providers are supported?",
    answer: (
      <>
        Use the current registry on this page and the{" "}
        <span className="font-semibold text-blue-600">
          Integrations Directory
        </span>
        . No provider list or count is fabricated.
      </>
    ),
  },
  {
    question: "Does a listed provider support every payment method?",
    answer:
      "Not necessarily. Payment methods are registered independently by provider capability and operation.",
  },
  {
    question: "Can Zoiko Billing process cards directly?",
    answer:
      "Zoiko Billing coordinates approved provider workflows. It does not become the processor, acquirer, bank or card network.",
  },
  {
    question: "Does an API success mean a payment is settled?",
    answer:
      "No. An API success represents a provider operation result. Settlement and payout are separate states with separate evidence.",
  },
  {
    question: "Are refunds supported?",
    answer:
      "Refund capability depends on the provider and registered operation support. Full and partial refund behavior must be explicitly supported.",
  },
  {
    question: "Does Zoiko handle chargebacks?",
    answer:
      "Chargebacks remain provider and network-owned workflows. Zoiko Billing may surface approved status and evidence references.",
  },
];

const rightFaqs = [
  {
    question: "Can I use a provider in every country and currency?",
    answer:
      "No. Provider availability is country, currency, entity, merchant-account and operation specific.",
  },
  {
    question: "Can I connect one provider account to multiple entities?",
    answer:
      "Only where the provider and account model explicitly support that relationship. Entity mapping must remain explicit.",
  },
  {
    question: "Does Zoiko store card numbers?",
    answer:
      "The architecture uses provider-issued references or tokens where supported. Raw card credentials are not unnecessarily stored or exposed.",
  },
  {
    question: "Can I switch providers?",
    answer:
      "Provider switching depends on the registered integration capabilities, account readiness, migration requirements and operational state.",
  },
  {
    question: "Where do bank matching and accounting exports live?",
    answer:
      "Bank matching belongs to banking and reconciliation workflows, while accounting exports belong to the accounting and ERP handoff.",
  },
  {
    question: "Can I build another provider integration?",
    answer:
      "Yes, where the integration model and required provider capabilities can be evaluated and registered.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#edf0f5] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
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
          className="
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-[#f3f5f8]
            text-sm
            font-semibold
            leading-5
            text-[#5d7192]
          "
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div
          className="
            px-5
            pb-5
            text-sm
            font-normal
            leading-5
            text-[#64748b]
          "
        >
          {answer}
        </div>
      )}
    </div>
  );
}

function FaqColumn({
  items,
}: {
  items: typeof leftFaqs;
}) {
  return (
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
      {items.map((item) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default function PaymentProviderFaq() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
                Decision guide &amp; FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Direct answers about payment providers.
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
              No public form should request provider secret keys, merchant
              credentials, bank details, card data, real payment payloads,
              dispute documents or confidential customer payment information.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              pt-2

              lg:grid-cols-2
            "
          >
            <FaqColumn items={leftFaqs} />
            <FaqColumn items={rightFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}