"use client";

import Link from "next/link";
import { useState } from "react";

import { Eyebrow, heading, linkClass } from "./shared";

type FAQ = { question: string; answer: React.ReactNode };

const LEFT: FAQ[] = [
  {
    question: "Do I have to fill in a form to get pricing?",
    answer: (
      <>
        No. Pricing is published and ungated. A form that gates cost information
        makes you pay for it with your contact details.{" "}
        <Link href="/pricing-and-plans" className={linkClass}>
          View Pricing
        </Link>
      </>
    ),
  },
  {
    question: "How quickly will someone respond?",
    answer:
      "No response time is published, on this page or in a confirmation. An enquiry is routed to the specialist who can answer it rather than into a queue with a promised clock.",
  },
  {
    question: "Can I attach our RFP or security questionnaire?",
    answer:
      "Not here — uploads stay disabled without an approved data contract. Say what you need in the enquiry and the process can open a controlled workflow for document exchange if it reaches that stage.",
  },
  {
    question: "I need compliance evidence for procurement.",
    answer: (
      <>
        Assurance evidence lives in{" "}
        <Link href="/trust-center" className={linkClass}>
          Trust Center
        </Link>{" "}
        with its scope, status and access state attached. A sales conversation
        can route a request through that approved process, not substitute for it.
      </>
    ),
  },
];

const RIGHT: FAQ[] = [
  {
    question: "Can sales confirm a feature or an implementation date?",
    answer: (
      <>
        No.{" "}
        <Link href="/documentation" className={linkClass}>
          Documentation
        </Link>{" "}
        owns what the product does, and no implementation duration is published
        or promised — readiness is assessed per organization.
      </>
    ),
  },
  {
    question: "I am an existing customer with a billing question.",
    answer: (
      <>
        This is the wrong route.{" "}
        <Link href="/billing-support" className={linkClass}>
          Billing Support
        </Link>{" "}
        handles account-specific questions; a commercial enquiry cannot see your
        account.
      </>
    ),
  },
  {
    question: "Why won't you tell me if my colleague already enquired?",
    answer:
      "Because that would disclose account and opportunity information to whoever fills in a public form. No state on this page reveals CRM data.",
  },
  {
    question: "Do you collect our timeline or budget?",
    answer:
      "No. Each field has to be justified by the routing process rather than by what a CRM would like to store, so qualification data is not gathered before anyone has agreed to a conversation.",
  },
];

function FAQItem({
  faq,
  open,
  onClick,
}: {
  faq: FAQ;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#EDF1F7] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
      >
        <span className="text-sm font-semibold !leading-6 !text-[#0F172A]">
          {faq.question}
        </span>

        <span
          aria-hidden
          className={`flex size-5 shrink-0 items-center justify-center text-sm font-semibold !leading-5 transition-transform duration-200 ${
            open
              ? "rotate-45 rounded-full bg-[#1F6FEB] !text-white"
              : "rounded-md bg-[#F5F7FB] !text-[#5B6B85]"
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-6">
          <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full self-start overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          open={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default function EnquiriesFAQ() {
  return (
    <section
      id="sales-enquiries-faq"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
          <Eyebrow centered>Sales Enquiries FAQ</Eyebrow>

          <h2
            className={`${heading} !mb-0 text-center !text-[28px] !leading-9 !tracking-[-0.02em] !text-[#0F172A] sm:!text-[32px] sm:!leading-10 lg:!text-4xl`}
          >
            Direct answers before you submit anything.
          </h2>

          <p className="!mb-0 text-center text-base !leading-7 !text-[#5B6B85]">
            Several of these are answered fully by a public page, which is the
            point.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <FAQColumn faqs={LEFT} />
          <FAQColumn faqs={RIGHT} />
        </div>
      </div>
    </section>
  );
}
