"use client";

import { useState } from "react";

const items = [
  {
    question: "Are identities shared?",
    status: "Needs setup",
    statusType: "needs",
    answer:
      "The state is one of Separate, Federated, Linked, Shared sign-in, Needs setup, or Not supported — and it is stated only when authoritative. Shared sign-in is never assumed from the fact that both products exist.",
    open: true,
  },
  {
    question: "Are the organizations or tenants the same?",
    status: "Verification required",
    statusType: "verification",
    answer:
      "Organization and tenant relationships must be explicitly verified before a connection is treated as authoritative.",
  },
  {
    question: "Who can authorize a connection?",
    answer:
      "A connection should only be authorized by the appropriate administrator or authority for the affected Billing and Zoiko One environments.",
  },
  {
    question: "What if a user exists in one product only?",
    answer:
      "A user existing in one product does not automatically create a corresponding identity in another product. User mapping must be explicitly configured.",
  },
  {
    question: "What if roles conflict between products?",
    answer:
      "Conflicting roles must be resolved through an approved mapping. A role in one product is not automatically treated as equivalent to a role in another.",
  },
  {
    question: "What happens when someone is offboarded?",
    answer:
      "Offboarding behavior depends on the configured identity and tenant relationship. Disconnect and access-revocation behavior must be explicitly governed.",
  },
  {
    question: "Can one Billing tenant map to several Zoiko One units?",
    status: "Not stated",
    statusType: "not-stated",
    answer:
      "This relationship is not stated unless an authoritative product configuration explicitly supports and defines the mapping.",
  },
];

export default function IdentityTenant() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
            Identity, organization &amp; tenant
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          A matching name is not a matching tenant.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[720px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          Identity federation, account linking, user mapping and tenant mapping
          are separate controlled states. None of them is assumed from shared
          branding.
        </p>

        {/* Accordion Card */}
        <div className="mt-8 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`${
                  index !== items.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-gray-50"
                >
                  <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-slate-900">
                    {item.question}
                  </span>

                  {/* Status */}
                  {item.status && (
                    <span
                      className={`hidden shrink-0 items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 sm:inline-flex ${
                        item.statusType === "needs"
                          ? "border-gray-200 bg-gray-50 text-slate-600"
                          : item.statusType === "verification"
                            ? "border-blue-100 bg-blue-50 text-blue-700"
                            : "border-gray-200 bg-gray-50 text-slate-500"
                      }`}
                    >
                      <span
                        className={`mr-2 h-1.5 w-1.5 rounded-sm ${
                          item.statusType === "needs"
                            ? "bg-slate-500/75"
                            : item.statusType === "verification"
                              ? "bg-blue-600/75"
                              : "bg-slate-500/75"
                        }`}
                      />

                      {item.status}
                    </span>
                  )}

                  {/* Plus */}
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold text-slate-500 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Mobile Status */}
                {item.status && (
                  <div className="px-5 pb-2 sm:hidden">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${
                        item.statusType === "needs"
                          ? "border-gray-200 bg-gray-50 text-slate-600"
                          : item.statusType === "verification"
                            ? "border-blue-100 bg-blue-50 text-blue-700"
                            : "border-gray-200 bg-gray-50 text-slate-500"
                      }`}
                    >
                      <span
                        className={`mr-2 h-1.5 w-1.5 rounded-sm ${
                          item.statusType === "needs"
                            ? "bg-slate-500/75"
                            : item.statusType === "verification"
                              ? "bg-blue-600/75"
                              : "bg-slate-500/75"
                        }`}
                      />

                      {item.status}
                    </span>
                  </div>
                )}

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="max-w-[1120px] text-sm font-normal leading-5 text-slate-500">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}