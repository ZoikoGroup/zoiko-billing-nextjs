"use client";

import React from "react";

type BadgeTone = "blue" | "green" | "gray" | "dark";

type Plan = {
  slot: string;
  title: string;
  description: string;
  price: string;
  priceDescription: string;
  rows: {
    label: string;
    value: string;
    tone: BadgeTone;
  }[];
  action: string;
  note: string;
  primary?: boolean;
  viewLink?: boolean;
};

const plans: Plan[] = [
  {
    slot: "Plan slot A",
    title: "Prime",
    description:
      "Best-fit description resolves from the Plan Registry audience field.",
    price: "$ 15.00",
    priceDescription:
      "Scope drivers: integrations, implementation, support terms.",
    rows: [
      { label: "Capabilities", value: "Plan-dependent", tone: "blue" },
      { label: "Key limits", value: "Plan-dependent", tone: "blue" },
      { label: "Integrations", value: "Optional", tone: "dark" },
      { label: "Support", value: "Not published", tone: "gray" },
      {
        label: "Deployment",
        value: "Standalone or Zoiko One",
        tone: "green",
      },
    ],
    action: "Create account",
    note: "Effective date and terms:",
    primary: true,
    viewLink: true,
  },
  {
    slot: "Plan slot B",
    title: "Custom",
    description:
      "Scope requires commercial review before an amount can be published.",
    price: "Quote required",
    priceDescription:
      "Scope drivers: entities, transaction volume, integrations, implementation, support terms.",
    rows: [
      { label: "Capabilities", value: "Enterprise review", tone: "dark" },
      { label: "Key limits", value: "Contract-dependent", tone: "dark" },
      { label: "Integrations", value: "Plan-dependent", tone: "blue" },
      { label: "Support", value: "Contract-dependent", tone: "dark" },
      {
        label: "Deployment",
        value: "Standalone or Zoiko One",
        tone: "green",
      },
    ],
    action: "Book a demo",
    note: "No public amount exists for this slot.",
  },
  {
    slot: "Plan slot C",
    title: "Controlled access",
    description:
      "Available by request while the market is in controlled launch.",
    price: "Not published",
    priceDescription:
      "Amount is withheld until the market moves to general availability.",
    rows: [
      { label: "Capabilities", value: "Plan-dependent", tone: "blue" },
      { label: "Key limits", value: "Not public", tone: "gray" },
      { label: "Integrations", value: "Region-dependent", tone: "blue" },
      { label: "Support", value: "Not published", tone: "gray" },
      { label: "Deployment", value: "Standalone", tone: "green" },
    ],
    action: "Request access",
    note: "Submitting a request is not an approval.",
  },
  {
    slot: "Plan slot D",
    title: "Needs review",
    description:
      "The record backing this slot is past its freshness window.",
    price: "Value suppressed",
    priceDescription:
      "Last verified date failed validation. No prior amount is shown in its place.",
    rows: [
      { label: "Capabilities", value: "Not published", tone: "gray" },
      { label: "Key limits", value: "Not published", tone: "gray" },
      { label: "Integrations", value: "Not published", tone: "gray" },
      { label: "Support", value: "Not published", tone: "gray" },
      { label: "Deployment", value: "Not published", tone: "gray" },
    ],
    action: "Check availability",
    note: "Suppressed rather than estimated.",
  },
];

function StatusBadge({
  value,
  tone,
}: {
  value: string;
  tone: BadgeTone;
}) {
  const toneClasses: Record<BadgeTone, string> = {
    blue: "border-gray-200 bg-gray-100 text-blue-600",
    green: "border-green-100 bg-green-50 text-green-700",
    gray: "border-gray-200 bg-gray-50 text-slate-500",
    dark: "border-gray-200 bg-gray-100 text-slate-700",
  };

  return (
    <span
      className={`max-w-[72%] rounded-md border px-2.5 py-0.5 text-right text-xs font-semibold leading-5 ${toneClasses[tone]}`}
    >
      {value}
    </span>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6">
      {/* Slot */}
      <div className="pb-1">
        <div className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
          {plan.slot}
        </div>
      </div>

      {/* Title */}
      <div className="pt-2.5 pb-1">
        <h3 className="text-xl font-extrabold leading-8 text-slate-900">
          {plan.title}
        </h3>
      </div>

      {/* Description */}
      <div className="flex min-h-[64px] items-start pt-3 pb-3.5">
        <p className="text-sm font-normal leading-5 text-slate-600">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="py-4">
        <div className="flex flex-col gap-1.5 border-y border-gray-200 py-4">
          <div
            className={`text-lg leading-8 ${
              plan.primary
                ? "font-extrabold text-black"
                : "font-bold text-slate-600"
            }`}
          >
            {plan.price}
          </div>

          <p className="text-xs font-normal leading-5 text-slate-500">
            {plan.priceDescription}
          </p>
        </div>
      </div>

      {/* Plan details */}
      <div className="pb-4">
        <div>
          {plan.rows.map((row, index) => (
            <div
              key={`${plan.slot}-${row.label}`}
              className={`flex min-h-10 items-start justify-between gap-3 py-2 ${
                index !== plan.rows.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <span className="shrink-0 pt-0.5 text-sm font-normal leading-5 text-slate-600">
                {row.label}
              </span>

              <StatusBadge value={row.value} tone={row.tone} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto flex flex-col gap-3 pt-4">
        <button
          type="button"
          className={`w-full rounded-full px-5 py-2.5 text-center text-sm font-semibold leading-6 transition ${
            plan.primary
              ? "bg-blue-600 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] hover:bg-blue-700"
              : "border border-gray-200 bg-white text-slate-900 hover:bg-gray-50"
          }`}
        >
          {plan.action}
        </button>

        <div className="flex min-h-6 items-center justify-center text-center text-xs font-normal leading-5 text-slate-500">
          {plan.note}

          {plan.viewLink && (
            <button
              type="button"
              className="ml-1 text-sm font-semibold leading-6 text-blue-600 hover:underline"
            >
              view
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Plans() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                03
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Plans & packaging
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Packaging renders only from approved plan records.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Four slots are reserved. Each renders a governed state — no tier
              hierarchy, no recommended badge, no crossed-out price, and no
              unlimited claim.
            </p>
          </div>

          {/* Plan cards */}
          <div className="grid w-full grid-cols-1 gap-5 pt-4 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <PlanCard key={plan.slot} plan={plan} />
            ))}
          </div>

          {/* Prohibited notice */}
          <div className="mt-1 w-full rounded-[10px] border border-orange-300 bg-orange-50 px-4 py-4 sm:px-5 sm:pt-5 sm:pb-4">
            <p className="text-sm leading-5 text-yellow-900">
              <span className="font-bold">Prohibited on this section.</span>{" "}
              Best-value badge, most-popular marker, crossed-out price,
              invented savings, fake free tier, &quot;unlimited&quot;,
              arbitrary tier colors, and any placeholder amount presented as a
              real price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}