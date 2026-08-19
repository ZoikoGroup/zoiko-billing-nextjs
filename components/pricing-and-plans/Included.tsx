"use client";

import React, { useState } from "react";

type StateTone = "included" | "plan" | "optional" | "usage";

type Capability = {
  title: string;
  state: string;
  tone: StateTone;
  description?: string;
};

const capabilities: Capability[] = [
  {
    title: "Customer records & account structure",
    state: "Included",
    tone: "included",
    description:
      "Customer, account, and legal-entity records with roles and ownership.",
  },
  {
    title: "Invoices, credit notes & adjustments",
    state: "Included",
    tone: "included",
  },
  {
    title: "Charges, prices & billing schedules",
    state: "Plan-dependent",
    tone: "plan",
  },
  {
    title: "Automation & workflows",
    state: "Plan-dependent",
    tone: "plan",
  },
  {
    title: "Roles & approvals",
    state: "Included",
    tone: "included",
  },
  {
    title: "Documents & delivery",
    state: "Optional",
    tone: "optional",
  },
  {
    title: "Accounts receivable & outstanding balances",
    state: "Included",
    tone: "included",
  },
  {
    title: "Payments & reconciliation",
    state: "Plan-dependent",
    tone: "plan",
  },
  {
    title: "Reporting & analytics",
    state: "Plan-dependent",
    tone: "plan",
  },
  {
    title: "Global billing",
    state: "Usage-dependent",
    tone: "usage",
  },
  {
    title: "Integrations & developer access",
    state: "Plan-dependent",
    tone: "plan",
  },
];

const toneClasses: Record<StateTone, string> = {
  included:
    "border-green-100 bg-green-50 text-green-700",
  plan:
    "border-gray-200 bg-gray-100 text-blue-600",
  optional:
    "border-gray-200 bg-gray-100 text-slate-700",
  usage:
    "border-orange-200 bg-orange-50 text-orange-700",
};

export default function Included() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleRow = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                05
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              What is included
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Capability groups, with an explicit state for each.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Each group links to its canonical product page for detailed
              behavior. Inclusion is written as words, not implied by a
              symbol.
            </p>
          </div>

          {/* Capability list */}
          <div className="mt-1 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {capabilities.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className={`w-full ${
                    index !== capabilities.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Row */}
                  <button
                    type="button"
                    onClick={() => toggleRow(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-gray-50 sm:px-5"
                  >
                    <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-slate-900">
                      {item.title}
                    </span>

                    <span
                      className={`shrink-0 rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-5 ${toneClasses[item.tone]}`}
                    >
                      {item.state}
                    </span>

                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold leading-5 text-slate-600 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {/* Expanded content */}
                  {isOpen && item.description && (
                    <div className="px-4 pb-5 sm:px-5">
                      <p className="text-sm font-normal leading-5 text-slate-600">
                        {item.description}{" "}
                        <span className="font-semibold text-blue-600">
                          Open the Customer Records page
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Claim rule */}
          <div className="mt-1 w-full rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-4 sm:px-5">
            <p className="text-sm leading-5 text-slate-600">
              <span className="font-bold text-slate-900">Claim rule.</span>{" "}
              This page makes no claim of revenue recognition, advanced
              subscription management, automated tax filing, debt collection,
              or universal payment processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}